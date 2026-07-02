import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Koinly UK Review 2026 — Best Crypto Tax Tool for HMRC?",
  description: "Honest Koinly review for UK crypto investors. Does it calculate HMRC capital gains correctly? Pricing, supported exchanges, and whether it's worth it in 2026.",
  alternates: { canonical: "/reviews/koinly-uk-review" },
  openGraph: {
    title: "Koinly UK Review 2026 — Best Crypto Tax Tool for HMRC?",
    description: "Full Koinly review for UK users: HMRC CGT support, exchange integrations, pricing, pros and cons. Is it the best crypto tax tool in 2026?",
  },
};

const FAQ = [
  {
    q: "Does Koinly support HMRC crypto tax rules?",
    a: "Yes. Koinly supports UK HMRC reporting including Section 104 pooling, the 30-day same-day rule, and the bed and breakfasting rule. It generates a Capital Gains Summary report compatible with UK self-assessment tax returns.",
  },
  {
    q: "How much does Koinly cost for UK users?",
    a: "Koinly has a free plan for tracking (no tax reports). Paid plans start at £49/year for up to 100 transactions, £99/year for 1,000 transactions, and £179/year for unlimited transactions. Prices shown in GBP at checkout.",
  },
  {
    q: "Which UK exchanges does Koinly support?",
    a: "Koinly integrates with Coinbase, Kraken, Binance, Bybit, Gemini, and 700+ other exchanges and wallets via API or CSV import. Most major UK-accessible exchanges are supported.",
  },
  {
    q: "Is Koinly accurate for UK crypto tax?",
    a: "Koinly is generally accurate for straightforward buy/sell transactions. Complex DeFi activity (liquidity pools, yield farming) can require manual review. Always check your report with a qualified UK crypto tax accountant for significant holdings.",
  },
  {
    q: "Does Koinly integrate with HMRC directly?",
    a: "No — Koinly does not file directly with HMRC. It generates a Capital Gains Summary report and a Transaction History report that you (or your accountant) use to complete your self-assessment tax return.",
  },
  {
    q: "Is there a free alternative to Koinly?",
    a: "CoinTracker and Coinpanda have free tiers, but coverage and accuracy vary. For UK HMRC compliance specifically, Koinly and Recap are the most widely used by UK crypto investors. For small numbers of transactions, a spreadsheet with HMRC's own guidance works.",
  },
];

export default function KoinlyUKReviewPage() {
  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 12px" }}>
        CRYPTO TAX TOOL REVIEW · Updated June 2026
      </p>
      <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>
        Koinly UK Review 2026
      </h1>
      <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 16px" }}>
        HMRC expects UK crypto investors to report capital gains. Koinly automates the calculation. Here's whether it's worth the money and how it stacks up for UK users in 2026.
      </p>

      {/* Verdict */}
      <div style={{ padding: "20px 24px", background: "var(--bg-tint-green-strong)", border: "1px solid oklch(55% 0.2 140 / 0.4)", borderRadius: "12px", marginBottom: "24px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#22c55e", margin: "0 0 8px" }}>Quick verdict — 8.5/10</p>
        <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.7 }}>
          Koinly is the most popular crypto tax tool for UK users and earns that reputation. HMRC Section 104 pooling support, 700+ exchange integrations, and a clean interface make it the default recommendation. The free plan covers tracking. Paid plans start at £49/year.
        </p>
      </div>

      {/* Disclaimer */}
      <div style={{ padding: "14px 18px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "10px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "36px" }}>
        <strong style={{ color: "var(--fg)" }}>Disclaimer:</strong> Educational content only — not tax or financial advice. Always consult a qualified UK crypto tax accountant for your specific situation. Some links are affiliate links — we may earn a commission at no extra cost to you.
      </div>

      {/* CTA */}
      <div style={{ padding: "24px 28px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "14px", marginBottom: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <p style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 4px" }}>Koinly — Crypto Tax for UK Users</p>
          <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>Free tracking · Paid from £49/year · 700+ exchange integrations</p>
        </div>
        <a href="https://koinly.io/?via=digitechlifestyle" target="_blank" rel="noopener sponsored"
          style={{ display: "inline-block", padding: "12px 24px", background: "var(--amber)", color: "oklch(8% 0.015 60)", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none", whiteSpace: "nowrap" }}>
          Try Koinly Free →
        </a>
      </div>

      {/* What it does */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>What Koinly Does</h2>
      <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.8, marginBottom: "16px" }}>
        Koinly connects to your crypto exchanges and wallets via API or CSV import, then automatically calculates your capital gains and losses for the tax year. For UK users, it applies HMRC's specific crypto tax rules — including Section 104 pooling, the 30-day same-day rule, and bed and breakfasting rules — so you don't have to do the maths manually.
      </p>
      <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.8, marginBottom: "36px" }}>
        The output is a Capital Gains Summary report and a full Transaction History report. You or your accountant use these to complete the capital gains section of your self-assessment tax return. Koinly does not file with HMRC directly.
      </p>

      {/* Pros/Cons */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "40px" }}>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", padding: "20px 22px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#22c55e", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Pros</p>
          <ul style={{ margin: 0, padding: "0 0 0 16px", display: "grid", gap: "8px" }}>
            {[
              "Full HMRC Section 104 and 30-day rule support",
              "700+ exchange and wallet integrations",
              "Free plan for tracking (no tax reports)",
              "Clean, easy to navigate interface",
              "Supports DeFi, staking, NFT transactions",
              "GBP currency support throughout",
              "Accountant access — share reports with your tax adviser",
            ].map((p) => <li key={p} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{p}</li>)}
          </ul>
        </div>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", padding: "20px 22px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#f87171", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Cons</p>
          <ul style={{ margin: 0, padding: "0 0 0 16px", display: "grid", gap: "8px" }}>
            {[
              "Free plan does not include tax reports — upgrade required",
              "Complex DeFi transactions may need manual review",
              "Pricing adds up if you have 1,000+ transactions/year",
              "Customer support can be slow",
              "Some exchange CSV imports have quirks",
            ].map((c) => <li key={c} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{c}</li>)}
          </ul>
        </div>
      </div>

      {/* Pricing table */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>Koinly Pricing for UK Users</h2>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", overflow: "hidden", marginBottom: "40px" }}>
        {[
          { plan: "Free", price: "£0", txLimit: "Unlimited tracking", includes: "Portfolio tracking, no tax reports" },
          { plan: "Newbie", price: "£49/year", txLimit: "100 transactions", includes: "Capital gains report, income report" },
          { plan: "Hodler", price: "£99/year", txLimit: "1,000 transactions", includes: "All reports + DeFi support" },
          { plan: "Trader", price: "£179/year", txLimit: "Unlimited", includes: "All reports + priority support" },
        ].map((row, i) => (
          <div key={row.plan} style={{ display: "grid", gridTemplateColumns: "120px 120px 1fr 1fr", gap: "12px", padding: "14px 18px", borderBottom: i < 3 ? "1px solid var(--line)" : "none", fontSize: "13px", background: i === 1 ? "oklch(13% 0.03 140 / 0.3)" : "transparent" }}>
            <span style={{ fontWeight: 700, color: i === 1 ? "#22c55e" : "var(--fg)" }}>{row.plan}</span>
            <span style={{ fontWeight: 700, color: "var(--amber)" }}>{row.price}</span>
            <span style={{ color: "var(--muted)" }}>{row.txLimit}</span>
            <span style={{ color: "var(--muted)" }}>{row.includes}</span>
          </div>
        ))}
      </div>

      {/* HMRC note */}
      <div style={{ padding: "20px 24px", background: "var(--bg-tint-red)", border: "1px solid oklch(55% 0.15 25 / 0.3)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 10px" }}>⚠️ Important for UK Users</h3>
        <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
          HMRC treats cryptocurrency as a capital asset. You are legally required to report gains above the annual CGT allowance (£3,000 for 2024/25) on your self-assessment tax return. Koinly helps you calculate this — but the responsibility to file correctly sits with you. For holdings above £10,000 or complex DeFi activity, use a qualified UK crypto tax accountant alongside Koinly. See <a href="https://www.gov.uk/government/publications/tax-on-cryptoassets" target="_blank" rel="noopener" style={{ color: "var(--amber)" }}>HMRC's cryptoassets guidance</a>.
        </p>
      </div>

      {/* Internal links */}
      <div style={{ padding: "20px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 14px" }}>Related guides</h3>
        <div style={{ display: "grid", gap: "8px" }}>
          {[
            { label: "Best Crypto Exchanges for UK Beginners 2026", href: "/reviews/best-crypto-exchanges-uk" },
            { label: "Ledger Hardware Wallet Review 2026", href: "/reviews/ledger-wallet-review" },
            { label: "UK Crypto Tax — Crypto & Blockchain Articles", href: "/blog?category=Crypto" },
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
        <p style={{ fontSize: "18px", fontWeight: 900, color: "var(--fg)", margin: "0 0 8px" }}>Sort your crypto tax before the HMRC deadline</p>
        <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 18px" }}>Free to start. Paid plan only needed when you download tax reports.</p>
        <a href="https://koinly.io/?via=digitechlifestyle" target="_blank" rel="noopener sponsored"
          style={{ display: "inline-block", padding: "14px 32px", background: "var(--amber)", color: "oklch(8% 0.015 60)", borderRadius: "8px", fontWeight: 800, fontSize: "15px", textDecoration: "none" }}>
          Try Koinly Free →
        </a>
        <p style={{ fontSize: "10px", color: "var(--muted)", marginTop: "10px" }}>Affiliate link — we may earn a commission at no extra cost to you</p>
      </div>

      {/* Schema */}
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
