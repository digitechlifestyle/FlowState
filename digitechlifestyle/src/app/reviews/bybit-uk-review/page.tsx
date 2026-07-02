import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bybit UK Review 2026 — Fees, Safety & Is It Right for You?",
  description: "Honest Bybit review for UK users in 2026. Spot and derivatives trading, fees, FCA status, and how Bybit compares to Coinbase and Kraken for UK traders.",
  alternates: { canonical: "/reviews/bybit-uk-review" },
  openGraph: {
    title: "Bybit UK Review 2026 — Fees, Safety & Is It Right for You?",
    description: "Full Bybit review for UK users: spot trading fees, derivatives, FCA status, pros and cons. Is Bybit safe for UK crypto traders in 2026?",
  },
};

const FAQ = [
  {
    q: "Is Bybit available in the UK?",
    a: "Bybit is accessible to UK users via bybit.com. However, Bybit is not currently FCA registered as of mid-2026 — check register.fca.org.uk to verify current status. UK users should be aware that unregistered exchanges carry additional regulatory risk. For FCA-registered alternatives, consider Coinbase or Kraken.",
  },
  {
    q: "What are Bybit's trading fees?",
    a: "Bybit charges 0.1% for spot trading (maker and taker). For derivatives (perpetual futures), fees are 0.02% maker and 0.055% taker — among the lowest in the industry. These are the headline rates; fees can vary by trading pair and volume tier.",
  },
  {
    q: "Is Bybit safe?",
    a: "Bybit has not had a major security breach and uses cold storage for most funds. The platform has grown significantly since 2018. However, it is not FCA registered for UK users, which means you have less regulatory recourse if things go wrong compared to FCA-registered exchanges like Coinbase or Kraken.",
  },
  {
    q: "What is Bybit best for?",
    a: "Bybit is best known for derivatives trading — specifically perpetual futures and options. Experienced traders who want low-fee derivatives products and copy trading features will find Bybit competitive. It is not recommended for beginners due to the complexity of derivatives and the regulatory uncertainty.",
  },
  {
    q: "Can I deposit GBP on Bybit?",
    a: "Bybit supports fiat deposits via payment partners. GBP availability can vary and is subject to payment provider relationships. Check Bybit's current deposit options at bybit.com. For reliable GBP Faster Payments, Coinbase and Kraken are more consistent choices.",
  },
  {
    q: "Bybit vs Coinbase — which should I use?",
    a: "Choose Coinbase if you're a UK beginner, want FCA registration, and prefer GBP Faster Payments. Choose Bybit if you're an experienced trader wanting low-fee derivatives, copy trading, and don't need FCA-registered status. Most UK beginners should not start with Bybit.",
  },
];

export default function BybitUKReviewPage() {
  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 12px" }}>
        CRYPTO EXCHANGE REVIEW · Updated June 2026
      </p>
      <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>
        Bybit UK Review 2026
      </h1>
      <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 16px" }}>
        Popular with experienced traders for its low-fee derivatives and copy trading. Not the right choice for UK beginners — here's who it's actually for.
      </p>

      {/* Score */}
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "20px", alignItems: "center", padding: "20px 24px", background: "var(--bg-tint-purple)", border: "1px solid oklch(55% 0.15 300 / 0.3)", borderRadius: "12px", marginBottom: "24px" }}>
        <div style={{ textAlign: "center", minWidth: "80px" }}>
          <span style={{ fontSize: "42px", fontWeight: 900, color: "var(--amber)", lineHeight: 1 }}>7.5</span>
          <span style={{ fontSize: "20px", fontWeight: 900, color: "var(--amber)" }}>/10</span>
          <p style={{ fontSize: "11px", color: "var(--muted)", margin: "4px 0 0", fontWeight: 600 }}>DigiTech Score</p>
        </div>
        <div>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ec4899", margin: "0 0 6px" }}>Best for experienced traders</p>
          <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.7 }}>
            Competitive fees, strong derivatives products, and copy trading. Not FCA registered — check current status before use. Not suitable for UK beginners.
          </p>
        </div>
      </div>

      {/* Warning */}
      <div style={{ padding: "16px 20px", background: "var(--bg-tint-red-strong)", border: "1px solid oklch(60% 0.2 25 / 0.5)", borderRadius: "10px", marginBottom: "24px" }}>
        <p style={{ fontSize: "13px", fontWeight: 700, color: "#f87171", margin: "0 0 6px" }}>⚠️ Not FCA Registered — Check Before Using</p>
        <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
          Bybit is not currently FCA registered for UK users. Verify at{" "}
          <a href="https://register.fca.org.uk" target="_blank" rel="noopener" style={{ color: "var(--amber)" }}>register.fca.org.uk</a>.
          For FCA-registered exchanges, use <Link href="/reviews/coinbase-uk-review" style={{ color: "var(--amber)" }}>Coinbase</Link> or <Link href="/reviews/kraken-uk-review" style={{ color: "var(--amber)" }}>Kraken</Link>.
        </p>
      </div>

      {/* Disclaimer */}
      <div style={{ padding: "14px 18px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "10px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "36px" }}>
        <strong style={{ color: "var(--fg)" }}>Disclaimer:</strong> Educational content only — not financial advice. Crypto is high risk. Some links are affiliate links.
      </div>

      {/* CTA */}
      <div style={{ padding: "24px 28px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "14px", marginBottom: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <p style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 4px" }}>Bybit — Derivatives & Spot Trading</p>
          <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>0.1% spot · 0.02% maker futures · Copy trading</p>
        </div>
        <a href="https://www.bybit.com/invite?ref=2WKAA" target="_blank" rel="noopener sponsored"
          style={{ display: "inline-block", padding: "12px 24px", background: "var(--amber)", color: "oklch(8% 0.015 60)", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none", whiteSpace: "nowrap" }}>
          Visit Bybit →
        </a>
      </div>

      {/* Pros/Cons */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>Bybit Pros and Cons</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "40px" }}>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", padding: "20px 22px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#22c55e", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Pros</p>
          <ul style={{ margin: 0, padding: "0 0 0 16px", display: "grid", gap: "8px" }}>
            {[
              "Competitive spot fees — 0.1% maker/taker",
              "Very low derivatives fees — 0.02% maker",
              "Copy trading — follow experienced traders",
              "Wide range of tokens and trading pairs",
              "Good interface for active traders",
              "Rewards and promotions for new users",
            ].map((p) => <li key={p} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{p}</li>)}
          </ul>
        </div>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", padding: "20px 22px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#f87171", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Cons</p>
          <ul style={{ margin: 0, padding: "0 0 0 16px", display: "grid", gap: "8px" }}>
            {[
              "Not FCA registered for UK users — check current status",
              "Not suitable for beginners",
              "GBP deposit options limited vs Coinbase/Kraken",
              "Less regulatory recourse if problems arise",
              "Derivatives products can amplify losses significantly",
            ].map((c) => <li key={c} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{c}</li>)}
          </ul>
        </div>
      </div>

      {/* Who it's for */}
      <div style={{ padding: "20px 24px", background: "var(--bg-tint-purple)", border: "1px solid oklch(55% 0.15 280 / 0.3)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 12px" }}>Who Is Bybit For?</h3>
        <div style={{ display: "grid", gap: "10px" }}>
          {[
            { label: "✅ Good fit", desc: "Experienced traders who want derivatives, low fees, and copy trading features" },
            { label: "✅ Good fit", desc: "Traders who already have funds on FCA-registered exchanges and want to diversify" },
            { label: "❌ Not for", desc: "UK beginners — start with Coinbase or Kraken first" },
            { label: "❌ Not for", desc: "Anyone who needs the reassurance of FCA registration" },
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
            { label: "Best Crypto Exchanges for UK Beginners 2026", href: "/reviews/best-crypto-exchanges-uk" },
            { label: "Coinbase UK Review — FCA Registered, Best for Beginners", href: "/reviews/coinbase-uk-review" },
            { label: "Kraken UK Review — Low Fees + FCA Registered", href: "/reviews/kraken-uk-review" },
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
