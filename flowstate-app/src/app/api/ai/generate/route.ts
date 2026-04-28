import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { PLANS } from "@/lib/utils";

export async function POST(req: NextRequest) {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { topic, postType, tone, platforms } = await req.json();
  if (!topic) return NextResponse.json({ error: "Topic required" }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const ownerEmail = process.env.OWNER_EMAIL;
  const isOwner = ownerEmail && user.email === ownerEmail;
  const plan = (isOwner ? "agency" : user.plan) as keyof typeof PLANS;
  const planData = PLANS[plan] ?? PLANS.free;

  const thisMonth = new Date();
  thisMonth.setDate(1);
  thisMonth.setHours(0, 0, 0, 0);

  const aiUsage = await prisma.post.count({
    where: { userId: user.id, createdAt: { gte: thisMonth }, postType: { not: "social" } },
  });

  if (aiUsage >= planData.aiCredits) {
    return NextResponse.json({ error: "AI credit limit reached. Upgrade your plan for more credits." }, { status: 429 });
  }

  const platformList = Array.isArray(platforms) && platforms.length > 0 ? platforms.join(", ") : "social media";

  const systemPrompt = `You are a world-class content writer and SEO strategist with 15+ years of experience writing for major publications.

Your writing demonstrates Google's E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness).

Core writing principles:
- Write like a knowledgeable human, never like a robot or AI
- Use varied sentence lengths — mix short punchy sentences with longer explanatory ones
- Include personal-sounding insights, real examples, and specific details
- Never use filler phrases like "In conclusion", "It's worth noting", "Dive into", "In today's fast-paced world"
- Use contractions naturally (you'll, it's, don't, we're)
- Speak directly to the reader using "you"
- ${tone} tone throughout
- Back claims with specifics — numbers, names, dates where relevant

IMPORTANT: Always respond with valid JSON only. No text outside the JSON object.`;

  let userPrompt = "";

  if (postType === "social") {
    userPrompt = `Write social media content about: "${topic}"
Platforms: ${platformList}

Return this exact JSON:
{
  "content": "Full engaging post with line breaks, emojis where natural, and relevant hashtags at the end",
  "shortContent": "Under 280 chars version for X/Twitter — punchy, no hashtags"
}`;

  } else if (postType === "blog") {
    userPrompt = `Write a high-quality blog post about: "${topic}"

Requirements:
- 900–1200 words
- Compelling H1 title (not clickbait — genuinely useful)
- 4–6 H2 sections, each with 1–2 H3 subsections where it adds clarity
- Opening paragraph that hooks immediately — lead with a surprising stat, bold claim, or relatable scenario
- Each section must deliver real value, not padding
- Include 3–4 image suggestions using this exact format on their own line: ![Image: descriptive alt text here](IMAGE_SUGGESTION)
- Place images logically — after intro, between major sections
- End with a strong, specific CTA paragraph
- Use bullet points and bold text to break up dense paragraphs

Return this exact JSON (escape all quotes inside strings with backslash):
{
  "content": "full blog post in markdown",
  "shortContent": "2–3 sentence social teaser that creates curiosity without spoiling everything",
  "seoTitle": "compelling title under 60 characters including the primary keyword",
  "seoDescription": "meta description 150-160 characters with keyword and clear reason to click",
  "slug": "url-slug-here",
  "primaryKeyword": "main keyword for this post",
  "imageSuggestions": ["brief description of image 1", "brief description of image 2", "brief description of image 3"]
}`;

  } else if (postType === "seo") {
    userPrompt = `Write a fully SEO-optimised, humanised blog post about: "${topic}"

This must meet Google's E-E-A-T standards and be good enough to rank on page 1.

Content requirements:
- 1,500–2,000 words (Google favours comprehensive content for informational queries)
- H1 title: include primary keyword naturally, under 60 characters, compelling
- Opening 100 words: hook + establish why this matters + what reader will learn
- 5–7 H2 sections with keyword-rich but natural headings
- H3 subsections where relevant for depth
- Primary keyword used naturally every 150–200 words (NO keyword stuffing)
- LSI keywords woven throughout (related terms Google associates with the topic)
- 4–5 image suggestions placed logically using: ![Image: descriptive alt text](IMAGE_SUGGESTION)
- At least 2 [LINK: description of ideal internal link target] markers
- At least 1 [EXTERNAL LINK: description of authoritative source to cite] marker
- Bullet points and numbered lists where they genuinely help (not just to look structured)
- A FAQ section with 5 questions using the exact questions real people search for
- Strong CTA at the end
- Author experience signals: write as if the author has genuine expertise in this field

SEO metadata:
- Meta title: 50–60 characters, primary keyword near the start
- Meta description: 150–160 characters, includes keyword + compelling reason to click
- Suggested URL slug: short, keyword-rich, hyphens only
- Primary keyword: identify it
- 5 secondary/LSI keywords: identify them
- Estimated reading time

Return this exact JSON:
{
  "content": "full SEO blog post in markdown with IMAGE_SUGGESTION placeholders and [LINK:] markers",
  "shortContent": "3-sentence social teaser optimised for engagement",
  "seoTitle": "Meta title 50-60 chars",
  "seoDescription": "Meta description 150-160 chars",
  "slug": "url-slug-here",
  "primaryKeyword": "main keyword",
  "secondaryKeywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "readingTime": "X min read",
  "imageSuggestions": ["image 1 description", "image 2 description", "image 3 description", "image 4 description"]
}`;
  }

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4000,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    });

    const raw = message.content[0].type === "text" ? message.content[0].text : "";

    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ content: raw, shortContent: "" });
    }

    const parsed = JSON.parse(jsonMatch[0]);
    return NextResponse.json(parsed);
  } catch (e) {
    console.error("AI generation error:", e);
    return NextResponse.json({ error: "AI generation failed" }, { status: 500 });
  }
}
