import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Crypto Tax Tools for UK Users 2026 — HMRC CGT Calculator",
  description: "Best crypto tax software for UK investors in 2026. Calculate HMRC capital gains from Coinbase, Kraken, Binance and more. Koinly, Recap, and CoinTracker compared.",
  alternates: { canonical: "/reviews/best-crypto-tax-tools-uk" },
  openGraph: {
    title: "Best Crypto Tax Tools for UK Users 2026",
    description: "Koinly vs Recap vs CoinTracker — best HMRC crypto tax calculators for UK investors. Section 104 pooling, 30-day rule, full comparison.",
  },
};

const TOOLS = [
  {
    rank: 1,
    name: "Koinly",
    badge: "Best for UK",
    badgeColor: "#22c55e",
    price: "Free to track · from £49/year for reports",
    href: "/reviews/koinly-uk-review",
    buyHref: "https://koinly.io/?via=digitechlifestyle",
    buyLabel: "Try Koinly Free",
    hmrc: "✅ Section 104, 30-day rule, B&B rule",
    exchanges: "700+",
    freeReports: "No — upgrade required",
    desc: "Most popular crypto tax tool for UK users. Full HMRC compliance, 700+ exchange integrations, clean interface. Free to track; pay only when you download tax reports.",
    sponsored: true,
  },
  {
    rank: 2,
    name: "Recap",
    badge: "UK-Built",
    badgeColor: "#6366f1",
    price: "Free plan · paid from £99/year",
    href: null,
    buyHref: "https://recap.io/",
    buyLabel: "Try Recap",
    hmrc: "✅ Built specifically for HMRC rules",
    exchanges: "50+ (UK-focused)",
    freeReports: "Limited on free plan",
    desc: "Built specifically for UK crypto tax by a UK company. Fewer integrations than Koinly but depth of HMRC support is excellent. Best for UK users who want a UK-native tool.",
    sponsored: false,
  },
  {
    rank: 3,
    name: "CoinTracker",
    badge: "Good Alternative",
    badgeColor: "#64748b",
    price: "Free plan · paid from $59/year",
    href: null,
    buyHref: "https://www.cointracker.io/",
    buyLabel: "Try CoinTracker",
    hmrc: "✅ UK CGT support",
    exchanges: "500+",
    freeReports: "Up to 25 transactions free",
    desc: "US-origin tool with solid UK CGT support. Good for users with holdings across many exchanges. Interface is clean but customer support can be slow. Priced in USD.",
    sponsored: false,
  },
];

const FAQ = [
  {
    q: "Do I need to pay tax on crypto in the UK?",
    a: "Yes. HMRC treats cryptocurrency as a capital asset. You pay Capital Gains Tax on profits when you sell, swap, spend, or gift crypto — minus the annual CGT allowance (£3,000 for 2024/25). You also pay Income Tax on mining rewards, staking income, and airdrops. Crypto tax software automates these calculations.",
  },
  {
    q: "What is Section 104 pooling and why does it matter?",
    a: "Section 104 pooling is HMRC's method for calculating the cost basis of crypto holdings. Rather than tracking each individual purchase, HMRC pools all purchases of the same coin into an average cost basis. Every UK crypto tax tool must apply Section 104 pooling correctly — manual spreadsheets often get this wrong.",
  },
  {
    q: "What is the 30-day rule for UK crypto tax?",
    a: "The 30-day rule (bed and breakfasting) prevents you from selling and immediately rebuying to crystallise a loss. If you sell and rebuy the same crypto within 30 days, HMRC uses the repurchase price as the cost basis rather than the Section 104 pool price. Good crypto tax software handles this automatically.",
  },
  {
    q: "Which exchanges does Koinly support?",
    a: "Koinly integrates with 700+ exchanges and wallets including Coinbase, Kraken, Binance, Bybit, Gemini, Ledger, MetaMask, and most DeFi protocols. CSV import is available for exchanges without direct API support.",
  },
  {
    q: "Can I use a spreadsheet instead of crypto tax software?",
    a: "Technically yes — but it's very error-prone. Section 104 pooling, the 30-day rule, and bed and breakfasting rules applied across hundreds or thousands of transactions are extremely difficult to calculate manually. For anything more than a handful of trades, use dedicated software. The cost of Koinly is far less than an accountant fixing a spreadsheet error.",
  },
  {
    q: "Does crypto tax software file with HMRC directly?",
    a: "No UK crypto tax tool currently files directly with HMRC. They generate a Capital Gains Summary and Transaction History report that you (or your accountant) enter into your self-assessment tax return. HMRC's deadline for self-assessment is 31 January for online submissions.",
  },
];

export default function BestCryptoTaxToolsUKPage() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 12px" }}>
        CRYPTO TAX COMPARISON · Updated June 2026
      </p>
      <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>
        Best Crypto Tax Tools for UK Users 2026
      </h1>
      <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 16px" }}>
        HMRC expects UK crypto investors to report capital gains. The right software calculates Section 104 pooling, the 30-day rule, and produces a report ready for self-assessment. Here's what to use.
      </p>

      {/* HMRC alert */}
      <div style={{ padding: "16px 20px", background: "var(--bg-tint-red-strong)", border: "1px solid oklch(60% 0.2 25 / 0.4)", borderRadius: "10px", marginBottom: "24px" }}>
        <p style={{ fontSize: "13px", fontWeight: 700, color: "#f87171", margin: "0 0 4px" }}>⚠️ HMRC Crypto Tax Reminder</p>
        <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
          UK self-assessment deadline: <strong style={{ color: "var(--fg)" }}>31 January</strong> for online filing. CGT allowance 2024/25: <strong style={{ color: "var(--fg)" }}>£3,000</strong>. Always consult a qualified UK crypto tax accountant for significant holdings. See <a href="https://www.gov.uk/government/publications/tax-on-cryptoassets" target="_blank" rel="noopener" style={{ color: "var(--amber)" }}>HMRC cryptoassets guidance</a>.
        </p>
      </div>

      {/* Disclaimer */}
      <div style={{ padding: "14px 18px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "10px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "40px" }}>
        <strong style={{ color: "var(--fg)" }}>Disclaimer:</strong> Educational content only — not tax or financial advice. Some links are affiliate links. We may earn a commission at no extra cost to you.
      </div>

      {/* Tool cards */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 20px" }}>Top UK Crypto Tax Tools</h2>
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
                <span style={{ fontSize: "13px", color: "var(--muted)" }}>{t.price}</span>
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {t.href && (
                  <Link href={t.href} style={{ fontSize: "13px", fontWeight: 700, color: "var(--amber)", textDecoration: "none", padding: "8px 14px", border: "1px solid oklch(73% 0.17 78 / 0.4)", borderRadius: "7px" }}>
                    Full review →
                  </Link>
                )}
                <a href={t.buyHref} target="_blank" rel={t.sponsored ? "noopener sponsored" : "noopener"}
                  style={{ fontSize: "13px", fontWeight: 800, color: "oklch(8% 0.015 60)", background: "var(--amber)", textDecoration: "none", padding: "8px 14px", borderRadius: "7px" }}>
                  {t.buyLabel} →
                </a>
              </div>
            </div>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 14px" }}>{t.desc}</p>
            <div style={{ display: "flex", gap: "20px", fontSize: "12px", flexWrap: "wrap" }}>
              <span><strong style={{ color: "var(--fg)" }}>HMRC rules:</strong> <span style={{ color: "var(--muted)" }}>{t.hmrc}</span></span>
              <span><strong style={{ color: "var(--fg)" }}>Exchanges:</strong> <span style={{ color: "var(--muted)" }}>{t.exchanges}</span></span>
              <span><strong style={{ color: "var(--fg)" }}>Free reports:</strong> <span style={{ color: "var(--muted)" }}>{t.freeReports}</span></span>
            </div>
          </div>
        ))}
      </div>

      {/* Internal links */}
      <div style={{ padding: "20px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 14px" }}>Related guides</h3>
        <div style={{ display: "grid", gap: "8px" }}>
          {[
            { label: "Koinly UK Review 2026 — Full Review", href: "/reviews/koinly-uk-review" },
            { label: "Best Crypto Exchanges for UK Beginners 2026", href: "/reviews/best-crypto-exchanges-uk" },
            { label: "Ledger Wallet Review — Secure Your Holdings", href: "/reviews/ledger-wallet-review" },
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
        <p style={{ fontSize: "18px", fontWeight: 900, color: "var(--fg)", margin: "0 0 8px" }}>Don't pay more tax than you owe</p>
        <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 18px" }}>Free to start — pay only when you download your HMRC report</p>
        <a href="https://koinly.io/?via=digitechlifestyle" target="_blank" rel="noopener sponsored"
          style={{ display: "inline-block", padding: "14px 32px", background: "var(--amber)", color: "oklch(8% 0.015 60)", borderRadius: "8px", fontWeight: 800, fontSize: "15px", textDecoration: "none" }}>
          Try Koinly Free →
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
