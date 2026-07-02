import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Crypto Exchanges for UK Beginners 2026 — DigiTech Lifestyle",
  description: "The best crypto exchanges for UK beginners in 2026. Compare Coinbase, Kraken, Binance, and Bybit — fees, safety, GBP support, and FCA status explained.",
  alternates: { canonical: "/reviews/best-crypto-exchanges-uk" },
  openGraph: {
    title: "Best Crypto Exchanges for UK Beginners 2026",
    description: "Compare the top UK-available crypto exchanges. Fees, security, GBP deposits, and beginner friendliness — honest and independent.",
  },
};

const EXCHANGES = [
  {
    name: "Coinbase",
    badge: "Best for Beginners",
    badgeColor: "#22c55e",
    description: "The most beginner-friendly exchange available in the UK. Clean interface, GBP bank transfers, and strong regulatory standing. Slightly higher fees than competitors but worth it for the simplicity.",
    pros: ["Simple app for complete beginners", "GBP bank transfer deposits", "Strong regulatory compliance", "Built-in crypto education"],
    cons: ["Higher fees than Kraken or Binance", "Spread on simple buys adds up", "Advanced trading on separate Coinbase Advanced platform"],
    fee: "0.5–1.5% on simple buys (lower on Coinbase Advanced)",
    fca: "Registered with FCA",
    href: "https://www.coinbase.com/join/jrobertson_1A8sYA",
    score: "9/10",
  },
  {
    name: "Kraken",
    badge: "Best for Value",
    badgeColor: "#6366f1",
    description: "One of the most trusted exchanges in the world with a long track record of security and low fees. Excellent for UK users who want staking, low trading costs, and a wide range of coins.",
    pros: ["Very competitive fees", "Strong security history", "GBP support and UK bank transfers", "Staking available for ETH, ADA, DOT and more"],
    cons: ["Interface less polished than Coinbase", "Verification can take time", "Customer support slower than ideal"],
    fee: "0.16–0.26% maker/taker (Pro); higher on Kraken app",
    fca: "Registered with FCA",
    href: "https://kraken.app.link/PzxrgWP7Qzb",
    score: "9/10",
  },
  {
    name: "Binance",
    badge: "Best for Coin Range",
    badgeColor: "#f59e0b",
    description: "The world's largest exchange by trading volume. Low fees and an enormous selection of tokens. Check the current FCA registration status before signing up — Binance has had regulatory friction in the UK.",
    pros: ["Lowest fees of major exchanges", "Largest coin selection", "Advanced trading tools", "BNB fee discounts"],
    cons: ["Regulatory uncertainty — check FCA status", "Interface overwhelming for beginners", "Past UK regulatory issues"],
    fee: "0.1% standard (0.075% with BNB)",
    fca: "Check current FCA status at fca.org.uk",
    href: "https://www.binance.com/en/activity/referral-entry/CPA?ref=CPA_00JDHMDHBA",
    score: "7/10",
  },
  {
    name: "Bybit",
    badge: "Best for Traders",
    badgeColor: "#ec4899",
    description: "Popular with more experienced traders. Competitive fees, a wide token range, and strong derivatives products. Less beginner-friendly than Coinbase but solid for those who know what they are doing.",
    pros: ["Competitive spot and derivatives fees", "Good range of tokens", "Copy trading features", "Rewards and promotions for new users"],
    cons: ["Not ideal for beginners", "Less regulated than Coinbase/Kraken in the UK", "Fiat deposit options more limited"],
    fee: "0.1% spot; lower for derivatives",
    fca: "Check current FCA status at fca.org.uk",
    href: "https://www.bybit.com/invite?ref=2WKAA",
    score: "7.5/10",
  },
];

const FAQ = [
  {
    q: "Which crypto exchange is safest for UK beginners?",
    a: "Coinbase and Kraken are the most beginner-friendly and have the strongest regulatory compliance in the UK. Both are registered with the FCA. Start with Coinbase if you want the simplest experience, or Kraken if you want lower fees.",
  },
  {
    q: "Can I buy crypto with GBP?",
    a: "Yes. Coinbase, Kraken, and Binance all support GBP deposits via Faster Payments (bank transfer). Always check the deposit options before signing up as these can change.",
  },
  {
    q: "Do I have to pay tax on crypto in the UK?",
    a: "Yes. HMRC treats crypto as a capital asset. You pay Capital Gains Tax on profits above the annual allowance when you sell, swap, or spend crypto. Keep records of every transaction. Use a tool like Koinly to calculate your tax report. Always speak to a qualified tax adviser for your specific situation.",
  },
  {
    q: "Is crypto safe to invest in?",
    a: "Crypto is a high-risk, highly volatile asset class. You can lose money — including all of it. Only invest what you can genuinely afford to lose. Use regulated exchanges, enable 2FA, and store significant holdings in a hardware wallet like a Ledger.",
  },
  {
    q: "What is the cheapest crypto exchange for UK users?",
    a: "Kraken and Binance have the lowest fees for regular traders. Coinbase has higher fees on simple buys but is significantly easier for beginners.",
  },
  {
    q: "Should I use Coinbase or Kraken?",
    a: "Use Coinbase if you are completely new to crypto and want the simplest experience. Use Kraken if you want lower fees, staking, and a wider feature set — and are comfortable with a slightly steeper learning curve.",
  },
];

export default function BestCryptoExchangesUKPage() {
  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 12px" }}>
        UK CRYPTO GUIDE · Updated June 2026
      </p>
      <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>
        Best Crypto Exchanges for UK Beginners 2026
      </h1>
      <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 16px" }}>
        A straightforward comparison of the top crypto exchanges available in the UK right now — fees, safety, GBP support, and who each one is actually for.
      </p>

      {/* Disclaimer */}
      <div style={{ padding: "14px 18px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "10px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "36px" }}>
        <strong style={{ color: "var(--fg)" }}>Disclaimer:</strong> This is educational content only — not financial advice. Crypto is high-risk. You can lose money. Some links on this page are affiliate links. If you sign up via one, we may earn a commission at no extra cost to you. This never changes our recommendation. Always do your own research and check the FCA register before using any exchange: <a href="https://register.fca.org.uk" target="_blank" rel="noopener" style={{ color: "var(--amber)" }}>register.fca.org.uk</a>.
      </div>

      {/* Quick pick */}
      <div style={{ padding: "20px 24px", background: "var(--bg-tint-purple)", border: "1px solid oklch(55% 0.15 280 / 0.3)", borderRadius: "12px", marginBottom: "36px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(72% 0.18 280)", margin: "0 0 10px" }}>Quick pick</p>
        <div style={{ display: "grid", gap: "10px" }}>
          {[
            { label: "Complete beginners", pick: "Coinbase — simplest app, FCA registered, GBP support" },
            { label: "Best value / low fees", pick: "Kraken — competitive fees, staking, trusted globally" },
            { label: "Widest coin range", pick: "Binance — check current FCA status before signing up" },
            { label: "Experienced traders", pick: "Bybit — derivatives focus, not for beginners" },
          ].map((row) => (
            <div key={row.label} style={{ display: "flex", gap: "12px", fontSize: "13px" }}>
              <span style={{ color: "oklch(72% 0.18 280)", fontWeight: 700, minWidth: "160px", flexShrink: 0 }}>{row.label}:</span>
              <span style={{ color: "var(--muted)" }}>{row.pick}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Exchange cards */}
      <h2 style={{ fontSize: "20px", fontWeight: 800, color: "var(--fg)", margin: "0 0 20px" }}>Exchange Reviews</h2>
      <div style={{ display: "grid", gap: "24px", marginBottom: "48px" }}>
        {EXCHANGES.map((ex) => (
          <div key={ex.name} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "14px", padding: "24px 28px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "12px", flexWrap: "wrap" }}>
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: 900, color: "var(--fg)", margin: "0 0 6px" }}>{ex.name}</h3>
                <span style={{ fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", background: ex.badgeColor + "22", color: ex.badgeColor, border: `1px solid ${ex.badgeColor}44` }}>{ex.badge}</span>
              </div>
              <span style={{ fontSize: "22px", fontWeight: 900, color: "var(--amber)" }}>{ex.score}</span>
            </div>
            <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 16px" }}>{ex.description}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "#22c55e", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Pros</p>
                <ul style={{ margin: 0, padding: "0 0 0 16px", display: "grid", gap: "4px" }}>
                  {ex.pros.map((p) => <li key={p} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{p}</li>)}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "#f87171", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Cons</p>
                <ul style={{ margin: 0, padding: "0 0 0 16px", display: "grid", gap: "4px" }}>
                  {ex.cons.map((c) => <li key={c} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{c}</li>)}
                </ul>
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", fontSize: "12px", color: "var(--muted)", marginBottom: "16px", flexWrap: "wrap" }}>
              <span><strong style={{ color: "var(--fg)" }}>Fees:</strong> {ex.fee}</span>
              <span><strong style={{ color: "var(--fg)" }}>FCA status:</strong> {ex.fca}</span>
            </div>
            <a href={ex.href} target="_blank" rel="noopener sponsored" style={{ display: "inline-block", padding: "10px 22px", background: "var(--amber)", color: "oklch(8% 0.015 60)", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
              Visit {ex.name} →
            </a>
            <span style={{ fontSize: "10px", color: "var(--muted)", marginLeft: "12px" }}>Affiliate link — we may earn a commission</span>
          </div>
        ))}
      </div>

      {/* Safety section */}
      <div style={{ padding: "24px 28px", background: "var(--bg-tint-red-strong)", border: "1px solid oklch(55% 0.15 25 / 0.3)", borderRadius: "12px", marginBottom: "36px" }}>
        <h2 style={{ fontSize: "17px", fontWeight: 800, color: "var(--fg)", margin: "0 0 12px" }}>🔒 How to Stay Safe</h2>
        <ul style={{ margin: 0, padding: "0 0 0 18px", display: "grid", gap: "8px" }}>
          {[
            "Always enable two-factor authentication (2FA) — use an authenticator app, not SMS.",
            "Never share your account password, seed phrase, or private keys with anyone.",
            "Withdraw large amounts to a hardware wallet (Ledger or Trezor) — do not leave significant holdings on an exchange.",
            "Only use the official app or website — beware of fake apps and phishing emails.",
            "Check the FCA register before signing up to any exchange: register.fca.org.uk.",
            "Keep records of every transaction for HMRC tax reporting.",
          ].map((tip) => <li key={tip} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{tip}</li>)}
        </ul>
      </div>

      {/* Internal links */}
      <div style={{ padding: "20px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 14px" }}>Related guides</h3>
        <div style={{ display: "grid", gap: "8px" }}>
          {[
            { label: "Best Hardware Wallets: Ledger vs Trezor", href: "/blog?category=Wallets" },
            { label: "UK Crypto Tax Guide — What HMRC Expects", href: "/blog?category=Crypto" },
            { label: "Crypto Security Checklist — Free Download", href: "/resources" },
            { label: "All Crypto & Exchange Reviews", href: "/reviews" },
            { label: "Free AI & Crypto Tools", href: "/free-tools" },
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
