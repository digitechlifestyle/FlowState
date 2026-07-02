import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writesonic Review 2026 — Best AI Writing Tool for Bloggers?",
  description: "Honest Writesonic review for content creators and bloggers in 2026. AI article writer, SEO tools, pricing plans, pros and cons — is it worth it?",
  alternates: { canonical: "/reviews/writesonic-review" },
  openGraph: {
    title: "Writesonic Review 2026 — Best AI Writing Tool for Bloggers?",
    description: "Full Writesonic review: AI article writer, Chatsonic, SEO tools, pricing and whether it's better than ChatGPT for content creators in 2026.",
  },
};

const FAQ = [
  {
    q: "What is Writesonic best for?",
    a: "Writesonic is best for content marketers and bloggers who need to produce a high volume of SEO-optimised articles. Its Article Writer produces long-form content from a keyword or outline, and Chatsonic (the ChatGPT alternative) pulls in real-time web data. It's less suited to highly technical or deeply researched writing.",
  },
  {
    q: "How much does Writesonic cost?",
    a: "Writesonic offers a free trial with limited words. Paid plans start at around $19/month for individuals (Individual plan, 100 credits). Higher tiers unlock unlimited article generation and team features. Pricing is in USD and changes frequently — check writesonic.com for current rates.",
  },
  {
    q: "Is Writesonic better than ChatGPT for blogging?",
    a: "For blogging specifically, Writesonic has advantages: built-in SEO optimisation, ready-made templates for blog posts and landing pages, and the Article Writer feature that structures long-form content. ChatGPT is more flexible but requires more manual prompting to produce formatted blog content. For pure writing quality, GPT-4 class models are still ahead — but Writesonic wraps them in useful content workflows.",
  },
  {
    q: "Does Writesonic produce content that passes AI detection?",
    a: "No AI writing tool reliably produces content that passes AI detectors. Writesonic output will likely be flagged by tools like GPTZero or Originality.ai. Always rewrite and add original perspective to AI-generated content before publishing — especially for affiliate or editorial sites where originality matters for Google rankings.",
  },
  {
    q: "Does Writesonic support UK English?",
    a: "Yes. Writesonic supports UK English spelling and can be prompted to use British English conventions. Check output carefully — AI tools occasionally revert to US spelling. Manually set language preference in your account settings.",
  },
  {
    q: "Is there a free version of Writesonic?",
    a: "Yes — Writesonic offers a free trial with a limited word/credit allowance. Enough to test the Article Writer and Chatsonic before committing. No credit card required for the trial.",
  },
];

export default function WritesonicReviewPage() {
  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 12px" }}>
        AI WRITING TOOL REVIEW · Updated June 2026
      </p>
      <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>
        Writesonic Review 2026
      </h1>
      <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 16px" }}>
        AI writing platform for bloggers, content marketers, and affiliate site owners. Here's the honest picture — what it's good at, where it falls short, and whether it's worth paying for in 2026.
      </p>

      {/* Score */}
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "20px", alignItems: "center", padding: "20px 24px", background: "var(--bg-tint-green-strong)", border: "1px solid oklch(55% 0.2 140 / 0.4)", borderRadius: "12px", marginBottom: "24px" }}>
        <div style={{ textAlign: "center", minWidth: "80px" }}>
          <span style={{ fontSize: "42px", fontWeight: 900, color: "var(--amber)", lineHeight: 1 }}>7.5</span>
          <span style={{ fontSize: "20px", fontWeight: 900, color: "var(--amber)" }}>/10</span>
          <p style={{ fontSize: "11px", color: "var(--muted)", margin: "4px 0 0", fontWeight: 600 }}>DigiTech Score</p>
        </div>
        <div>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#22c55e", margin: "0 0 6px" }}>Good for high-volume content</p>
          <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.7 }}>
            Solid Article Writer, useful SEO integration, and Chatsonic for real-time web data. Output still needs editing — don't publish raw AI content. Better workflow than raw ChatGPT for blog-focused use cases.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{ padding: "14px 18px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "10px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "36px" }}>
        <strong style={{ color: "var(--fg)" }}>Disclaimer:</strong> Educational content only. Some links are affiliate links — we may earn a commission at no extra cost to you.
      </div>

      {/* CTA */}
      <div style={{ padding: "24px 28px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "14px", marginBottom: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <p style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 4px" }}>Writesonic — AI Writing Platform</p>
          <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>Free trial available · Article Writer + Chatsonic + SEO tools</p>
        </div>
        <a href="https://writesonic.com/" target="_blank" rel="noopener sponsored"
          style={{ display: "inline-block", padding: "12px 24px", background: "var(--amber)", color: "oklch(8% 0.015 60)", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none", whiteSpace: "nowrap" }}>
          Try Writesonic Free →
        </a>
      </div>

      {/* Key features */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>Key Features</h2>
      <div style={{ display: "grid", gap: "12px", marginBottom: "40px" }}>
        {[
          { name: "Article Writer", desc: "Generate long-form blog posts (1,500–3,000+ words) from a keyword or brief. Includes SEO optimisation and fact-check suggestions. Best feature for bloggers." },
          { name: "Chatsonic", desc: "ChatGPT-style chat assistant with real-time web data. Better than standard ChatGPT for current events and up-to-date content." },
          { name: "SEO Checker & Optimizer", desc: "Analyse existing content against top-ranking competitors and get suggestions for keyword inclusion, structure, and length." },
          { name: "Landing page & ad copy", desc: "Templates for product descriptions, Facebook ads, Google ads, email subject lines, and sales copy — useful for affiliate content." },
          { name: "Bulk article generation", desc: "Higher-tier plans allow generating multiple articles simultaneously from a keyword list. Useful for large affiliate sites." },
        ].map((f) => (
          <div key={f.name} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "10px", padding: "16px 20px", display: "grid", gridTemplateColumns: "180px 1fr", gap: "12px" }}>
            <span style={{ fontSize: "14px", fontWeight: 800, color: "var(--fg)" }}>{f.name}</span>
            <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{f.desc}</span>
          </div>
        ))}
      </div>

      {/* Pros/Cons */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>Pros and Cons</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "40px" }}>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", padding: "20px 22px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#22c55e", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Pros</p>
          <ul style={{ margin: 0, padding: "0 0 0 16px", display: "grid", gap: "8px" }}>
            {[
              "Article Writer produces well-structured long-form content",
              "Chatsonic includes real-time web data",
              "Built-in SEO tools and competitor analysis",
              "Wide range of content templates",
              "Free trial — no credit card needed",
              "UK English support",
            ].map((p) => <li key={p} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{p}</li>)}
          </ul>
        </div>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", padding: "20px 22px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#f87171", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Cons</p>
          <ul style={{ margin: 0, padding: "0 0 0 16px", display: "grid", gap: "8px" }}>
            {[
              "Output needs heavy editing — not publish-ready",
              "Factual accuracy is inconsistent — always verify",
              "Pricing is in USD and changes frequently",
              "AI detection tools will flag unedited output",
              "Not suitable for deeply researched or technical writing",
              "Credit system can feel restrictive on lower plans",
            ].map((c) => <li key={c} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{c}</li>)}
          </ul>
        </div>
      </div>

      {/* Who it's for */}
      <div style={{ padding: "20px 24px", background: "var(--bg-tint-purple)", border: "1px solid oklch(55% 0.15 280 / 0.3)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 12px" }}>Who Is Writesonic For?</h3>
        <div style={{ display: "grid", gap: "10px" }}>
          {[
            { label: "✅ Good fit", desc: "Affiliate site owners producing high-volume SEO content" },
            { label: "✅ Good fit", desc: "Content marketers who need first drafts fast to edit and publish" },
            { label: "✅ Good fit", desc: "Solo bloggers who want structured article outlines as a starting point" },
            { label: "❌ Not for", desc: "Technical writing, investigative journalism, or deeply researched content" },
            { label: "❌ Not for", desc: "Anyone who wants to publish AI output directly without editing" },
          ].map((item) => (
            <div key={item.desc} style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: "12px", fontSize: "13px" }}>
              <span style={{ fontWeight: 700, color: item.label.startsWith("✅") ? "#22c55e" : "#f87171" }}>{item.label}</span>
              <span style={{ color: "var(--muted)" }}>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Internal links */}
      <div style={{ padding: "20px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 14px" }}>Related guides</h3>
        <div style={{ display: "grid", gap: "8px" }}>
          {[
            { label: "Free AI Tools — Full Directory", href: "/free-tools" },
            { label: "Best Crypto Exchanges for UK Beginners 2026", href: "/reviews/best-crypto-exchanges-uk" },
            { label: "All Reviews", href: "/reviews" },
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

      {/* Bottom CTA */}
      <div style={{ padding: "28px", background: "var(--bg-tint-amber-strong)", border: "1px solid oklch(73% 0.17 78 / 0.25)", borderRadius: "14px", textAlign: "center" }}>
        <p style={{ fontSize: "18px", fontWeight: 900, color: "var(--fg)", margin: "0 0 8px" }}>Speed up your content workflow</p>
        <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 18px" }}>Free trial — no credit card required</p>
        <a href="https://writesonic.com/" target="_blank" rel="noopener sponsored"
          style={{ display: "inline-block", padding: "14px 32px", background: "var(--amber)", color: "oklch(8% 0.015 60)", borderRadius: "8px", fontWeight: 800, fontSize: "15px", textDecoration: "none" }}>
          Try Writesonic Free →
        </a>
        <p style={{ fontSize: "10px", color: "var(--muted)", marginTop: "10px" }}>Affiliate link — we may earn a commission at no extra cost to you</p>
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
