import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Tools for Small Businesses UK 2026 — Save Time, Cut Costs",
  description: "Best AI tools for UK small businesses in 2026. Writing, customer service, bookkeeping, marketing, and automation — honest picks that actually pay for themselves.",
  alternates: { canonical: "/reviews/best-ai-tools-small-business" },
  openGraph: {
    title: "Best AI Tools for Small Businesses UK 2026",
    description: "AI tools that save real time for UK small businesses — content, customer service, invoicing, and marketing automation.",
  },
};

const TOOLS = [
  {
    rank: 1,
    name: "ChatGPT Plus",
    badge: "Most Versatile",
    badgeColor: "#22c55e",
    category: "AI Assistant",
    price: "$20/month (~£16)",
    buyHref: "https://chat.openai.com/",
    reviewHref: null,
    desc: "Drafts emails, writes proposals, creates social posts, answers customer FAQs, summarises meetings, and generates marketing copy. The best all-round AI tool for a small business that does many different tasks — no single tool comes close for general utility.",
    bestFor: "Day-to-day writing and admin tasks",
    sponsored: false,
  },
  {
    rank: 2,
    name: "Writesonic",
    badge: "Best for Content",
    badgeColor: "#8b5cf6",
    category: "AI Writing & SEO",
    price: "Free trial · from $19/month (~£15)",
    buyHref: "https://writesonic.com/",
    reviewHref: "/reviews/writesonic-review",
    desc: "Blog posts, landing pages, product descriptions, and ad copy generated at scale. Article Writer produces long-form SEO content from a keyword — ideal for businesses trying to rank in Google without hiring a content agency.",
    bestFor: "Blog and website content at volume",
    sponsored: true,
  },
  {
    rank: 3,
    name: "Tidio",
    badge: "Best for Customer Service",
    badgeColor: "#0ea5e9",
    category: "AI Chatbot",
    price: "Free plan · Paid from $29/month (~£23)",
    buyHref: "https://www.tidio.com/",
    reviewHref: null,
    desc: "AI chatbot for your website that handles common customer questions automatically. Integrates with Shopify, WooCommerce, and email. Free plan covers up to 50 conversations/month — enough for most small e-commerce businesses to test properly.",
    bestFor: "E-commerce and service businesses with repeat customer questions",
    sponsored: false,
  },
  {
    rank: 4,
    name: "Canva",
    badge: "Best for Design",
    badgeColor: "#ec4899",
    category: "Design & Marketing",
    price: "Free plan · Pro from £10.99/month",
    buyHref: "https://www.canva.com/",
    reviewHref: null,
    desc: "Social media graphics, flyers, presentations, and branded templates without a designer. AI features include background removal, image generation, and text-to-design. The free plan is genuinely useful — Pro is worth it for brand kit consistency.",
    bestFor: "Social content, marketing materials, presentations",
    sponsored: false,
  },
  {
    rank: 5,
    name: "Grammarly Business",
    badge: "Best for Writing Quality",
    badgeColor: "#6366f1",
    category: "Writing Assistant",
    price: "Free plan · Pro from $12/month per person (~£9.50)",
    buyHref: "https://www.grammarly.com/business",
    reviewHref: null,
    desc: "Catches grammar, tone, and style errors across email, documents, and social media in real time. Works as a browser extension — runs in Gmail, Google Docs, and any web editor. Business version adds brand style guides and team consistency checks.",
    bestFor: "Professional communication and client-facing writing",
    sponsored: false,
  },
  {
    rank: 6,
    name: "Make (formerly Integromat)",
    badge: "Best for Automation",
    badgeColor: "#f59e0b",
    category: "Workflow Automation",
    price: "Free plan · Core from $9/month (~£7.50)",
    buyHref: "https://www.make.com/",
    reviewHref: null,
    desc: "Visual automation builder — connect your tools without code. Move leads from a form to your CRM, send invoice reminders automatically, post content to multiple platforms at once. More powerful than Zapier at a lower price point.",
    bestFor: "Connecting apps and automating repetitive tasks",
    sponsored: false,
  },
];

const CATEGORIES = [
  { name: "Writing & Content", tools: ["ChatGPT Plus", "Writesonic", "Grammarly Business"] },
  { name: "Customer Service", tools: ["Tidio"] },
  { name: "Design & Branding", tools: ["Canva"] },
  { name: "Automation", tools: ["Make"] },
];

const FAQ = [
  {
    q: "What is the best AI tool for a UK small business with a tight budget?",
    a: "Start with the free plans from Canva (design), Grammarly (writing), and Tidio (chatbot). These alone can save several hours per week. Once you're generating revenue from the time saved, add ChatGPT Plus at £16/month — it's the highest-utility single tool available.",
  },
  {
    q: "Can AI replace employees in a small business?",
    a: "No. AI tools automate repetitive tasks and speed up specific work — they don't replace judgment, relationships, or expertise. The realistic benefit is one person doing the work of 1.5 people, or a small team handling more customers without extra headcount. Frame it as an efficiency multiplier, not a replacement.",
  },
  {
    q: "How do I know which AI tools are worth paying for?",
    a: "Calculate the time saved per week × your effective hourly rate. If Writesonic saves you 3 hours of content writing per month and your time is worth £50/hour, that's £150 in value for a £15 subscription. Any tool where the value-to-cost ratio exceeds 3:1 is worth keeping.",
  },
  {
    q: "Are there UK-specific AI tools for small businesses?",
    a: "Most major AI tools are US-based but fully usable in the UK. Key UK considerations: check GDPR compliance (EU/UK data processing), confirm GBP billing is available, and verify UK customer support hours. Canva, Grammarly, Writesonic, and Make all have UK-compatible billing and GDPR-compliant data handling.",
  },
];

export default function BestAIToolsSmallBusinessPage() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 12px" }}>
        AI FOR BUSINESS · UK GUIDE · Updated June 2026
      </p>
      <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>
        Best AI Tools for Small Businesses UK 2026
      </h1>
      <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 16px" }}>
        The AI tools that actually save time and pay for themselves — tested honestly for UK small businesses, not US enterprise. No fluff, no sponsorship padding.
      </p>

      {/* Disclaimer */}
      <div style={{ padding: "14px 18px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "10px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "40px" }}>
        <strong style={{ color: "var(--fg)" }}>Disclaimer:</strong> Educational content only. Some links are affiliate links — we may earn a commission at no extra cost to you. All prices approximate GBP equivalent at June 2026 rates.
      </div>

      {/* Quick nav by category */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
        {CATEGORIES.map((cat) => (
          <span key={cat.name} style={{ fontSize: "12px", fontWeight: 700, padding: "5px 12px", borderRadius: "20px", background: "var(--bg-card)", border: "1px solid var(--line)", color: "var(--muted)" }}>
            {cat.name}: {cat.tools.join(", ")}
          </span>
        ))}
      </div>

      {/* Tool cards */}
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
            { label: "Writesonic Review 2026", href: "/reviews/writesonic-review" },
            { label: "Free AI Tools Directory", href: "/free-tools" },
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
