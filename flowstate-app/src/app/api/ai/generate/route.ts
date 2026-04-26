import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { PLANS } from "@/lib/utils";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { topic, postType, tone, platforms } = await req.json();
  if (!topic) return NextResponse.json({ error: "Topic required" }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const plan = user.plan as keyof typeof PLANS;
  const planData = PLANS[plan] ?? PLANS.free;

  const thisMonth = new Date();
  thisMonth.setDate(1);
  thisMonth.setHours(0, 0, 0, 0);

  const aiUsage = await prisma.post.count({
    where: {
      userId: user.id,
      createdAt: { gte: thisMonth },
      postType: { not: "social" },
    },
  });

  if (aiUsage >= planData.aiCredits) {
    return NextResponse.json(
      { error: `AI credit limit reached. Upgrade your plan for more credits.` },
      { status: 429 }
    );
  }

  const platformList = Array.isArray(platforms) && platforms.length > 0
    ? platforms.join(", ")
    : "social media";

  let systemPrompt = `You are an expert social media content creator and SEO specialist.
You create compelling, engaging, platform-optimised content that drives engagement and conversions.
Always write in a ${tone} tone. Be authentic, specific, and avoid clichés.`;

  let userPrompt = "";

  if (postType === "social") {
    userPrompt = `Create social media content about: "${topic}"

Platforms: ${platformList}

Write:
1. A full-length post (optimised for engagement, includes relevant hashtags)
2. A short version under 280 characters for X/Twitter

Format your response as JSON:
{
  "content": "full post here",
  "shortContent": "short version here"
}`;
  } else if (postType === "blog") {
    userPrompt = `Write a comprehensive, engaging blog post about: "${topic}"

Requirements:
- 600-900 words
- Compelling headline
- Clear structure with headers
- Actionable insights
- Strong call-to-action at the end
- ${tone} tone throughout

Format your response as JSON:
{
  "content": "full blog post with markdown formatting",
  "shortContent": "2-3 sentence summary for social sharing"
}`;
  } else if (postType === "seo") {
    userPrompt = `Write a fully SEO-optimised blog post about: "${topic}"

Requirements:
- 800-1200 words
- SEO-optimised title (include primary keyword naturally)
- Meta description (150-160 characters)
- H2 and H3 subheadings with keywords
- Natural keyword density, no stuffing
- Internal/external link opportunities marked with [LINK: description]
- FAQ section at the end
- Strong CTA

Format your response as JSON:
{
  "content": "full SEO blog post with markdown",
  "shortContent": "social media teaser (2-3 sentences)",
  "seoTitle": "SEO optimised title",
  "seoDescription": "meta description 150-160 chars"
}`;
  }

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 2000,
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
