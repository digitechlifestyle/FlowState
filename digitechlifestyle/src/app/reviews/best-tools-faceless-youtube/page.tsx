import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Tools for Faceless YouTube Channels 2026 — AI Video Without Showing Your Face",
  description: "Best AI tools for faceless YouTube channels in 2026. Video generation, voiceover, editing, and thumbnails — the full stack for anonymous content creators.",
  alternates: { canonical: "/reviews/best-tools-faceless-youtube" },
  openGraph: {
    title: "Best Tools for Faceless YouTube Channels 2026",
    description: "Full tool stack for faceless YouTube — AI video, voiceover, editing, and thumbnails without showing your face.",
  },
};

const TOOLS = [
  {
    rank: 1,
    name: "Pictory",
    badge: "Best for Article-to-Video",
    badgeColor: "#8b5cf6",
    category: "AI Video Generation",
    price: "From $19/month (~£15)",
    buyHref: "https://pictory.ai/",
    reviewHref: null,
    desc: "Paste a blog post or script — Pictory generates a fully edited video with stock footage, subtitles, and background music. Best workflow for turning written content into YouTube videos without any editing skills. The auto-caption feature alone saves hours.",
    bestFor: "Converting articles and scripts into stock-footage videos",
    sponsored: false,
  },
  {
    rank: 2,
    name: "InVideo AI",
    badge: "Best All-in-One",
    badgeColor: "#22c55e",
    category: "AI Video Generation",
    price: "Free plan · Plus from $20/month (~£16)",
    buyHref: "https://invideo.io/",
    reviewHref: null,
    desc: "Text-to-video with AI voiceover built in. Type a prompt, get a full video with script, narration, stock clips, and subtitles. The AI voice quality is good enough for most niches — no need to record your own audio. 2.5M+ creators use it.",
    bestFor: "Full video from a single text prompt — fastest path to first video",
    sponsored: false,
  },
  {
    rank: 3,
    name: "ElevenLabs",
    badge: "Best AI Voiceover",
    badgeColor: "#f59e0b",
    category: "AI Voice",
    price: "Free plan · Starter from $5/month (~£4)",
    buyHref: "https://elevenlabs.io/",
    reviewHref: null,
    desc: "Most realistic AI voices available — indistinguishable from human narration at the higher quality settings. 1,000+ voices across accents and languages. Clone your own voice or use a stock professional voice. The free plan gives 10,000 characters/month — enough to test your first few videos.",
    bestFor: "High-quality narration without recording your own voice",
    sponsored: false,
  },
  {
    rank: 4,
    name: "CapCut",
    badge: "Best Free Editor",
    badgeColor: "#ec4899",
    category: "Video Editing",
    price: "Free (web and desktop)",
    buyHref: "https://www.capcut.com/",
    reviewHref: null,
    desc: "Free video editor with built-in AI tools — auto captions, background removal, text-to-speech, and templates. The web version runs in browser, no install needed. Better than iMovie for faceless content because of the auto-subtitle feature — essential for YouTube watch time.",
    bestFor: "Free video editing with auto-captions",
    sponsored: false,
  },
  {
    rank: 5,
    name: "Canva",
    badge: "Best for Thumbnails",
    badgeColor: "#0ea5e9",
    category: "Design",
    price: "Free plan · Pro from £10.99/month",
    buyHref: "https://www.canva.com/",
    reviewHref: null,
    desc: "YouTube thumbnail templates, channel art, and end screen graphics. The free plan has enough thumbnail templates for most creators. Pro adds brand kits and background removal — worth it once you're posting consistently and want consistent visual identity.",
    bestFor: "Thumbnails and channel graphics without a designer",
    sponsored: false,
  },
  {
    rank: 6,
    name: "Writesonic",
    badge: "Best for Scripts",
    badgeColor: "#a855f7",
    category: "AI Writing",
    price: "Free trial · from $19/month (~£15)",
    buyHref: "https://writesonic.com/",
    reviewHref: "/reviews/writesonic-review",
    desc: "Generate YouTube scripts, video descriptions, and SEO-optimised titles from a keyword. Far faster than writing from scratch — a 10-minute video script in under 2 minutes. Combine with ElevenLabs voiceover and Pictory video for a nearly automated content pipeline.",
    bestFor: "Script writing and YouTube SEO copy",
    sponsored: true,
  },
];

const STACK = [
  { step: "1. Script", tool: "Writesonic or ChatGPT", time: "5 min" },
  { step: "2. Voiceover", tool: "ElevenLabs", time: "2 min" },
  { step: "3. Video", tool: "Pictory or InVideo AI", time: "10 min" },
  { step: "4. Edit & Captions", tool: "CapCut", time: "10 min" },
  { step: "5. Thumbnail", tool: "Canva", time: "5 min" },
  { step: "6. Upload", tool: "YouTube Studio", time: "5 min" },
];

const FAQ = [
  {
    q: "Can I make money on YouTube without showing my face?",
    a: "Yes. Thousands of faceless channels monetise through YouTube's Partner Programme (requires 1,000 subscribers + 4,000 watch hours), affiliate links in descriptions, and sponsorships. Finance, tech, true crime, and educational niches work particularly well for faceless formats. The key is consistent posting and good audio quality.",
  },
  {
    q: "What is the cheapest way to start a faceless YouTube channel?",
    a: "Start free: CapCut (editing + captions), Canva free (thumbnails), ElevenLabs free tier (10,000 chars/month voice), ChatGPT free (scripts). This costs £0 and is enough to produce your first 5–10 videos and see if the niche works before investing in paid tools.",
  },
  {
    q: "Is AI-generated YouTube content allowed?",
    a: "YouTube allows AI-generated content but requires creators to disclose if content is 'realistic-looking' AI-generated video or audio that could mislead viewers. Faceless channels using stock footage + AI voiceover generally don't need disclosure. Synthetic faces or cloned voices of real people do. Check YouTube's Creator Academy for the latest guidance.",
  },
  {
    q: "How long does it take to make a faceless YouTube video with AI tools?",
    a: "With a full AI stack (Writesonic script → ElevenLabs voice → Pictory video → CapCut captions), an experienced creator can produce a 5–10 minute video in 30–45 minutes. A beginner will take 2–3 hours for the first few videos while learning the tools. Speed increases dramatically after 10–15 videos.",
  },
];

export default function BestToolsFacelessYoutubePage() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 12px" }}>
        FACELESS YOUTUBE · AI TOOLS · Updated June 2026
      </p>
      <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>
        Best Tools for Faceless YouTube Channels 2026
      </h1>
      <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 16px" }}>
        The full AI stack for creating YouTube videos without recording yourself — script, voice, video, editing, and thumbnails. Ranked honestly by what actually saves time.
      </p>

      {/* Disclaimer */}
      <div style={{ padding: "14px 18px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "10px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "40px" }}>
        <strong style={{ color: "var(--fg)" }}>Disclaimer:</strong> Educational content only. Some links are affiliate links — we may earn a commission at no extra cost to you.
      </div>

      {/* Recommended stack */}
      <div style={{ padding: "22px 26px", background: "var(--bg-tint-purple)", border: "1px solid oklch(55% 0.15 280 / 0.3)", borderRadius: "12px", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "16px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>⚡ Full AI Stack — 30 Min Per Video</h2>
        <div style={{ display: "grid", gap: "8px" }}>
          {STACK.map((s) => (
            <div key={s.step} style={{ display: "flex", gap: "16px", alignItems: "center", fontSize: "13px" }}>
              <span style={{ color: "var(--amber)", fontWeight: 800, minWidth: "100px" }}>{s.step}</span>
              <span style={{ color: "var(--fg)", flex: 1 }}>{s.tool}</span>
              <span style={{ color: "var(--muted)" }}>{s.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tool cards */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 20px" }}>Tool Reviews</h2>
      <div style={{ display: "grid", gap: "20px", marginBottom: "48px" }}>
        {TOOLS.map((t) => (
          <div key={t.name} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "14px", padding: "22px 26px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "10px", flexWrap: "wrap" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "13px", fontWeight: 800, color: "var(--muted)" }}>#{t.rank}</span>
                  <h3 style={{ fontSize: "18px", fontWeight: 900, color: "var(--fg)", margin: 0 }}>{t.name}</h3>
                  <span style={{ fontSize: "11px", fontWeight: 700, padding: "2px 9px", borderRadius: "20px", background: t.badgeColor + "22", color: t.badgeColor, border: `1px solid ${t.badgeColor}44` }}>{t.badge}</span>
                </div>
                <div style={{ display: "flex", gap: "12px", fontSize: "12px" }}>
                  <span style={{ color: "var(--muted)" }}>{t.category}</span>
                  <span style={{ color: "var(--amber)", fontWeight: 700 }}>{t.price}</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {t.reviewHref && (
                  <Link href={t.reviewHref} style={{ fontSize: "13px", fontWeight: 700, color: "var(--amber)", textDecoration: "none", padding: "8px 14px", border: "1px solid oklch(73% 0.17 78 / 0.4)", borderRadius: "7px" }}>
                    Full review →
                  </Link>
                )}
                <a href={t.buyHref} target="_blank" rel={t.sponsored ? "noopener sponsored" : "noopener"}
                  style={{ fontSize: "13px", fontWeight: 800, color: "oklch(8% 0.015 60)", background: "var(--amber)", textDecoration: "none", padding: "8px 14px", borderRadius: "7px" }}>
                  Try it →
                </a>
              </div>
            </div>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 10px" }}>{t.desc}</p>
            <span style={{ fontSize: "12px", color: "var(--muted)" }}><strong style={{ color: "var(--fg)" }}>Best for:</strong> {t.bestFor}</span>
          </div>
        ))}
      </div>

      {/* Internal links */}
      <div style={{ padding: "20px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 14px" }}>Related guides</h3>
        <div style={{ display: "grid", gap: "8px" }}>
          {[
            { label: "Best AI Tools for Bloggers 2026", href: "/reviews/best-ai-tools-bloggers" },
            { label: "Best AI Tools for Small Businesses UK 2026", href: "/reviews/best-ai-tools-small-business" },
            { label: "Writesonic Review 2026", href: "/reviews/writesonic-review" },
            { label: "Free AI Tools Directory", href: "/free-tools" },
          ].map((l) => (
            <Link key={l.label} href={l.href} style={{ fontSize: "14px", color: "var(--amber)", textDecoration: "none" }}>{l.label} →</Link>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <h2 style={{ fontSize: "20px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>Frequently Asked Questions</h2>
      <div style={{ display: "grid", gap: "10px", marginBottom: "48px" }}>
        {FAQ.map((item) => (
          <details key={item.q} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "10px" }}>
            <summary style={{ padding: "16px 18px", fontSize: "14px", fontWeight: 700, color: "var(--fg)", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {item.q}
              <span style={{ fontSize: "18px", color: "var(--muted)", flexShrink: 0, marginLeft: "12px" }}>＋</span>
            </summary>
            <div style={{ padding: "0 18px 16px", fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, borderTop: "1px solid var(--line)", paddingTop: "14px" }}>
              {item.a}
            </div>
          </details>
        ))}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQ.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a },
        })),
      })}} />

    </main>
  );
}
