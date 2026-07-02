import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Crypto Tax Software UK 2026 — Koinly vs CoinTracker vs Recap | DigiTech Lifestyle",
  description: "The best crypto tax software for UK self-assessment in 2026. Koinly vs CoinTracker vs Recap vs TaxBit — HMRC-compatible, CGT reports, reviewed.",
  alternates: { canonical: "/best-crypto-tax-software-uk" },
  openGraph: {
    title: "Best Crypto Tax Software UK 2026",
    description: "Koinly vs CoinTracker vs Recap — which crypto tax tool is best for HMRC self-assessment?",
    url: "https://digitechlifestyle.com/best-crypto-tax-software-uk",
    type: "website",
    siteName: "DigiTech Lifestyle",
  },
};

const TOOLS = [
  {
    rank: 1, name: "Koinly", badge: "Best Overall", badgeColor: "#16a34a", score: "9/10",
    price: "Free (basic) / £49–£179/year",
    hmrc: "✅ Yes", exchanges: "700+", chains: "170+",
    tagline: "Most popular crypto tax tool for UK users — HMRC-ready CGT reports",
    pros: ["HMRC-compatible CGT and income reports", "Connects to 700+ exchanges automatically", "Free plan for up to 10,000 transactions (no report)", "Section 104 pooling (UK tax method) built in", "DeFi and NFT support"],
    cons: ["Paid plan required to download HMRC report", "Can be slow with very large transaction histories", "DeFi auto-categorisation not always accurate"],
    bestFor: "Most UK crypto holders — best exchange coverage and HMRC reports",
    avoid: "Those with under 25 transactions who can do it manually in a spreadsheet",
    url: "https://koinly.io",
  },
  {
    rank: 2, name: "Recap", badge: "Best UK-Native", badgeColor: "#1d4ed8", score: "8.5/10",
    price: "£30–£150/year",
    hmrc: "✅ Yes", exchanges: "300+", chains: "80+",
    tagline: "Built specifically for HMRC — UK-first crypto tax tool",
    pros: ["Built for UK HMRC from the ground up", "Section 104 pooling and 30-day rule handled correctly", "Excellent HMRC report format", "Good customer support", "DeFi categorisation better than most"],
    cons: ["Fewer exchange integrations than Koinly", "Less popular internationally (smaller community)"],
    bestFor: "UK holders who want a tool built specifically for HMRC self-assessment",
    avoid: "Users with many obscure exchange connections not yet supported",
    url: "https://recap.io",
  },
  {
    rank: 3, name: "CoinTracker", badge: "Best for US Dual Filers", badgeColor: "#b45309", score: "7.5/10",
    price: "Free (basic) / £59–£199/year",
    hmrc: "✅ Yes (UK report available)", exchanges: "500+", chains: "100+",
    tagline: "Strong option if you also file US taxes — dual reporting",
    pros: ["Good exchange coverage", "Real-time portfolio tracking included", "US and UK reports", "Clean interface"],
    cons: ["UK-specific features not as deep as Koinly or Recap", "Premium plans are expensive", "Customer support slower than competitors"],
    bestFor: "UK/US dual residents who need tax reports for both countries",
    avoid: "Pure UK filers — Koinly and Recap are better value and more HMRC-focused",
    url: "https://www.cointracker.io",
  },
  {
    rank: 4, name: "TaxBit", badge: "Best for Enterprises", badgeColor: "#7c3aed", score: "7/10",
    price: "Free (individuals) / Enterprise pricing",
    hmrc: "✅ Yes", exchanges: "500+", chains: "50+",
    tagline: "Enterprise-grade crypto tax — overkill for most but powerful",
    pros: ["Free for individuals", "Strong audit trail", "Enterprise features for businesses", "Good exchange integrations"],
    cons: ["Interface complex compared to Koinly", "UK-specific HMRC features less polished", "Better suited to US market"],
    bestFor: "UK crypto businesses or power users needing audit-grade records",
    avoid: "Standard UK retail investors — Koinly or Recap is simpler and equally effective",
    url: "https://taxbit.com",
  },
];

export default function BestCryptoTaxSoftwareUK() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 20px 80px" }}>
      <nav style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "32px", display: "flex", gap: "6px" }}>
        <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>Home</Link>
        <span>›</span><Link href="/resources" style={{ color: "var(--muted)", textDecoration: "none" }}>Resources</Link>
        <span>›</span><span style={{ color: "var(--fg)" }}>Best Crypto Tax Software UK</span>
      </nav>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "12px" }}>Updated July 2026 · By Joe Robertson</p>
      <h1 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>Best Crypto Tax Software UK 2026</h1>
      <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 12px", maxWidth: "720px" }}>
        HMRC expects UK crypto holders to report capital gains and income from staking, mining, and interest. The right tax software automates 90% of the work. Here's what actually works for UK self-assessment.
      </p>

      <div style={{ fontSize: "12px", color: "var(--muted)", padding: "12px 16px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "8px", marginBottom: "20px", lineHeight: 1.6 }}>
        <strong style={{ color: "var(--fg)" }}>Affiliate disclosure:</strong> Some links are affiliate links. Rankings based on merit only.
      </div>

      <div style={{ padding: "16px 20px", background: "var(--bg-tint-blue)", border: "1px solid oklch(40% 0.05 240 / 0.3)", borderRadius: "8px", marginBottom: "32px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--amber)", margin: "0 0 6px" }}>UK Tax Key Facts</p>
        <ul style={{ margin: 0, paddingLeft: "18px", display: "grid", gap: "4px" }}>
          {["CGT annual allowance: £3,000 (2026/27)", "CGT rate on crypto: 18% (basic) / 24% (higher rate)", "Income tax applies to staking, mining, and airdrop rewards", "UK uses Section 104 pooling — not FIFO or LIFO", "Self-assessment deadline: 31 January each year"].map(t => (
            <li key={t} style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.55 }}>{t}</li>
          ))}
        </ul>
      </div>

      <div style={{ display: "grid", gap: "24px", marginBottom: "40px" }}>
        {TOOLS.map((t) => (
          <div key={t.name} style={{ padding: "24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "14px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "12px" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)" }}>#{t.rank}</span>
              <h2 style={{ fontSize: "20px", fontWeight: 900, color: "var(--fg)", margin: 0 }}>{t.name}</h2>
              <span style={{ fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", background: t.badgeColor, color: "#fff" }}>{t.badge}</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--amber)", marginLeft: "auto" }}>{t.score}</span>
            </div>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 16px", lineHeight: 1.6 }}>{t.tagline}</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "8px", marginBottom: "16px" }}>
              {[{ label: "Price", value: t.price }, { label: "HMRC Report", value: t.hmrc }, { label: "Exchanges", value: t.exchanges }, { label: "Blockchains", value: t.chains }].map(s => (
                <div key={s.label} style={{ padding: "10px 12px", background: "oklch(8% 0.01 240 / 0.5)", borderRadius: "8px" }}>
                  <div style={{ fontSize: "10px", color: "var(--muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{s.label}</div>
                  <div style={{ fontSize: "12px", color: "var(--fg)", fontWeight: 600 }}>{s.value}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#4ade80", textTransform: "uppercase", margin: "0 0 6px" }}>Pros</p>
                <ul style={{ margin: 0, paddingLeft: "16px", display: "grid", gap: "4px" }}>{t.pros.map(p => <li key={p} style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.5 }}>{p}</li>)}</ul>
              </div>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#f87171", textTransform: "uppercase", margin: "0 0 6px" }}>Cons</p>
                <ul style={{ margin: 0, paddingLeft: "16px", display: "grid", gap: "4px" }}>{t.cons.map(c => <li key={c} style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.5 }}>{c}</li>)}</ul>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
              <div style={{ padding: "10px 14px", background: "var(--bg-tint-green)", border: "1px solid oklch(55% 0.15 140 / 0.25)", borderRadius: "8px" }}>
                <p style={{ fontSize: "10px", fontWeight: 700, color: "#4ade80", textTransform: "uppercase", margin: "0 0 4px" }}>Best for</p>
                <p style={{ fontSize: "12px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{t.bestFor}</p>
              </div>
              <div style={{ padding: "10px 14px", background: "var(--bg-tint-red)", border: "1px solid oklch(55% 0.15 25 / 0.25)", borderRadius: "8px" }}>
                <p style={{ fontSize: "10px", fontWeight: 700, color: "#f87171", textTransform: "uppercase", margin: "0 0 4px" }}>Avoid if</p>
                <p style={{ fontSize: "12px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{t.avoid}</p>
              </div>
            </div>

            <a href={t.url} target="_blank" rel="noopener noreferrer sponsored"
              style={{ display: "inline-block", background: "var(--amber)", color: "oklch(8% 0.015 60)", fontWeight: 800, fontSize: "13px", padding: "10px 22px", borderRadius: "8px", textDecoration: "none" }}>
              Try {t.name} →
            </a>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: "16px", fontWeight: 800, color: "var(--fg)", margin: "0 0 12px" }}>Related Guides</h2>
      <div style={{ display: "grid", gap: "8px", marginBottom: "32px" }}>
        {[
          { label: "Best Crypto Exchanges UK 2026", href: "/best-crypto-exchanges-uk" },
          { label: "Scam Watch — Protect Your Crypto", href: "/scam-watch" },
          { label: "Beginner Crypto Toolkit", href: "/beginner-crypto-toolkit" },
        ].map(l => (
          <Link key={l.href} href={l.href} style={{ fontSize: "13px", fontWeight: 600, color: "var(--fg)", textDecoration: "none", padding: "12px 16px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "8px", display: "block" }}>→ {l.label}</Link>
        ))}
      </div>
      <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, opacity: 0.6 }}>Not financial or tax advice. Consult a qualified accountant for your personal situation.</p>
    </main>
  );
}
