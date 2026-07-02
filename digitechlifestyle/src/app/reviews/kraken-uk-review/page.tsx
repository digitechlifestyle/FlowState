import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kraken UK Review 2026 — Low Fees, Staking & Is It Safe?",
  description: "Honest Kraken review for UK users in 2026. Fees, GBP deposits, FCA status, staking, and how it compares to Coinbase — everything UK crypto investors need to know.",
  alternates: { canonical: "/reviews/kraken-uk-review" },
  openGraph: {
    title: "Kraken UK Review 2026 — Low Fees, Staking & Is It Safe?",
    description: "Full Kraken review for UK users: fees, GBP support, FCA status, staking options, pros and cons. Is Kraken better than Coinbase for UK traders in 2026?",
  },
};

const FAQ = [
  {
    q: "Is Kraken safe for UK users?",
    a: "Kraken has one of the strongest security track records in crypto. It has never been hacked and holds the majority of customer funds in cold storage. It is registered with the FCA for UK users. That said, no exchange is risk-free — do not hold more on any exchange than you can afford to lose, and consider moving significant holdings to a hardware wallet.",
  },
  {
    q: "What are Kraken's fees for UK users?",
    a: "Kraken Pro (the trading interface) charges maker fees from 0.16% and taker fees from 0.26% for lower volume traders — dropping significantly at higher volumes. The standard Kraken app charges higher fees similar to Coinbase's simple buy. For active traders, always use Kraken Pro.",
  },
  {
    q: "Can I deposit GBP on Kraken?",
    a: "Yes. Kraken supports GBP deposits via Faster Payments bank transfer (minimum £1, usually arrives within minutes). Withdrawals to UK bank accounts are also supported. GBP is fully supported and Kraken is one of the best exchanges for UK bank transfers.",
  },
  {
    q: "Does Kraken offer staking for UK users?",
    a: "Yes. Kraken offers on-chain staking for Ethereum (ETH), Cardano (ADA), Polkadot (DOT), Solana (SOL), and other supported assets. Rewards are paid in the staked asset. Staking rewards are taxable income under HMRC rules — keep records.",
  },
  {
    q: "Is Kraken better than Coinbase for UK users?",
    a: "It depends on what you want. Coinbase has a simpler app and is better for complete beginners. Kraken has lower fees, staking, and more features — better for traders who want more control. Both are FCA registered and reputable. Many UK crypto users start with Coinbase and move to Kraken as they get more confident.",
  },
  {
    q: "Is Kraken FCA registered?",
    a: "Yes. Payward Ltd (Kraken) is registered with the FCA as a cryptoasset firm. Check the FCA register at register.fca.org.uk to verify current status. FCA registration means Kraken complies with UK AML and KYC rules — it does not mean FSCS protection applies to crypto holdings.",
  },
];

export default function KrakenUKReviewPage() {
  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 12px" }}>
        CRYPTO EXCHANGE REVIEW · Updated June 2026
      </p>
      <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>
        Kraken UK Review 2026
      </h1>
      <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 16px" }}>
        One of the most trusted exchanges in crypto — low fees, solid security record, GBP support, and staking. Here's the full picture for UK users in 2026.
      </p>

      {/* Score + verdict */}
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "20px", alignItems: "center", padding: "20px 24px", background: "var(--bg-tint-green-strong)", border: "1px solid oklch(55% 0.2 140 / 0.4)", borderRadius: "12px", marginBottom: "24px" }}>
        <div style={{ textAlign: "center", minWidth: "80px" }}>
          <span style={{ fontSize: "42px", fontWeight: 900, color: "var(--amber)", lineHeight: 1 }}>9</span>
          <span style={{ fontSize: "20px", fontWeight: 900, color: "var(--amber)" }}>/10</span>
          <p style={{ fontSize: "11px", color: "var(--muted)", margin: "4px 0 0", fontWeight: 600 }}>DigiTech Score</p>
        </div>
        <div>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#22c55e", margin: "0 0 6px" }}>Best value for UK traders</p>
          <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.7 }}>
            Never been hacked, consistently low fees via Kraken Pro, strong GBP support, and staking for ETH, ADA, DOT and more. Slightly steeper learning curve than Coinbase but worth it for active traders.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{ padding: "14px 18px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "10px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "36px" }}>
        <strong style={{ color: "var(--fg)" }}>Disclaimer:</strong> Educational content only — not financial advice. Crypto is high risk. Some links are affiliate links. We may earn a commission at no extra cost to you. Always verify FCA status at <a href="https://register.fca.org.uk" target="_blank" rel="noopener" style={{ color: "var(--amber)" }}>register.fca.org.uk</a>.
      </div>

      {/* CTA */}
      <div style={{ padding: "24px 28px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "14px", marginBottom: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <p style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 4px" }}>Kraken — Low Fees, Strong Security</p>
          <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>FCA registered · GBP Faster Payments · Staking available</p>
        </div>
        <a href="https://kraken.app.link/PzxrgWP7Qzb" target="_blank" rel="noopener sponsored"
          style={{ display: "inline-block", padding: "12px 24px", background: "var(--amber)", color: "oklch(8% 0.015 60)", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none", whiteSpace: "nowrap" }}>
          Join Kraken →
        </a>
      </div>

      {/* Pros/Cons */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>Kraken Pros and Cons</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "40px" }}>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", padding: "20px 22px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#22c55e", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Pros</p>
          <ul style={{ margin: 0, padding: "0 0 0 16px", display: "grid", gap: "8px" }}>
            {[
              "Never been hacked — 12+ year security record",
              "Low fees via Kraken Pro (from 0.16% maker)",
              "GBP Faster Payments deposits and withdrawals",
              "FCA registered for UK users",
              "Staking for ETH, ADA, DOT, SOL and more",
              "200+ coins available",
              "Futures and margin trading (experienced users)",
              "Transparent proof of reserves",
            ].map((p) => <li key={p} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{p}</li>)}
          </ul>
        </div>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", padding: "20px 22px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#f87171", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Cons</p>
          <ul style={{ margin: 0, padding: "0 0 0 16px", display: "grid", gap: "8px" }}>
            {[
              "Standard Kraken app fees are still high — use Kraken Pro",
              "Less beginner-friendly interface than Coinbase",
              "Identity verification can take longer than competitors",
              "Customer support quality varies",
              "Smaller coin selection than Binance",
            ].map((c) => <li key={c} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{c}</li>)}
          </ul>
        </div>
      </div>

      {/* Fees */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>Kraken Fees for UK Users</h2>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", overflow: "hidden", marginBottom: "16px" }}>
        {[
          { method: "Kraken Pro — maker (≤$10K/month)", fee: "0.16%", note: "Limit orders that add liquidity" },
          { method: "Kraken Pro — taker (≤$10K/month)", fee: "0.26%", note: "Market orders that take liquidity" },
          { method: "Standard Kraken app", fee: "0.9%+", note: "Simple buy — use Kraken Pro instead" },
          { method: "GBP deposit (Faster Payments)", fee: "Free", note: "Standard UK bank transfer" },
          { method: "GBP withdrawal (Faster Payments)", fee: "Free", note: "To UK bank account" },
        ].map((row, i) => (
          <div key={row.method} style={{ display: "grid", gridTemplateColumns: "1fr 100px 1fr", gap: "12px", padding: "13px 18px", borderBottom: i < 4 ? "1px solid var(--line)" : "none", fontSize: "13px" }}>
            <span style={{ color: "var(--fg)", fontWeight: 600 }}>{row.method}</span>
            <span style={{ color: "var(--amber)", fontWeight: 700 }}>{row.fee}</span>
            <span style={{ color: "var(--muted)" }}>{row.note}</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "40px" }}>Fees drop significantly at higher monthly volumes. See kraken.com/features/fee-schedule for the full tier structure.</p>

      {/* Staking */}
      <div style={{ padding: "20px 24px", background: "var(--bg-tint-purple)", border: "1px solid oklch(55% 0.15 280 / 0.3)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 12px" }}>📈 Kraken Staking for UK Users</h3>
        <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, margin: "0 0 12px" }}>
          Kraken offers on-chain staking directly from your account. No separate wallet needed. Rewards vary by asset and network conditions — check Kraken's staking page for current APY rates.
        </p>
        <div style={{ display: "grid", gap: "8px" }}>
          {[
            { coin: "Ethereum (ETH)", note: "Variable APY — network staking rewards" },
            { coin: "Cardano (ADA)", note: "Variable APY — popular with UK holders" },
            { coin: "Polkadot (DOT)", note: "Variable APY" },
            { coin: "Solana (SOL)", note: "Variable APY" },
          ].map((s) => (
            <div key={s.coin} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "12px", fontSize: "13px" }}>
              <span style={{ fontWeight: 700, color: "var(--fg)" }}>{s.coin}</span>
              <span style={{ color: "var(--muted)" }}>{s.note}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "12px", color: "var(--muted)", margin: "12px 0 0" }}>⚠️ Staking rewards are taxable as income under HMRC rules. Keep records of all rewards received.</p>
      </div>

      {/* Internal links */}
      <div style={{ padding: "20px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 14px" }}>Related guides</h3>
        <div style={{ display: "grid", gap: "8px" }}>
          {[
            { label: "Best Crypto Exchanges for UK Beginners 2026", href: "/reviews/best-crypto-exchanges-uk" },
            { label: "Coinbase UK Review 2026", href: "/reviews/coinbase-uk-review" },
            { label: "Ledger Wallet Review — Secure Your Kraken Holdings", href: "/reviews/ledger-wallet-review" },
            { label: "Koinly UK Review — Calculate Your Kraken Tax", href: "/reviews/koinly-uk-review" },
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
        <p style={{ fontSize: "18px", fontWeight: 900, color: "var(--fg)", margin: "0 0 8px" }}>Low fees. Strong security. 12 years without a hack.</p>
        <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 18px" }}>FCA registered · Free GBP deposits · Staking available</p>
        <a href="https://kraken.app.link/PzxrgWP7Qzb" target="_blank" rel="noopener sponsored"
          style={{ display: "inline-block", padding: "14px 32px", background: "var(--amber)", color: "oklch(8% 0.015 60)", borderRadius: "8px", fontWeight: 800, fontSize: "15px", textDecoration: "none" }}>
          Join Kraken →
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
