import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coinbase UK Review 2026 — Fees, Safety & Is It Worth It?",
  description: "Honest Coinbase review for UK users in 2026. Fees, GBP deposits, FCA registration, pros and cons — everything you need to know before signing up.",
  alternates: { canonical: "/reviews/coinbase-uk-review" },
  openGraph: {
    title: "Coinbase UK Review 2026 — Fees, Safety & Is It Worth It?",
    description: "Full Coinbase review for UK users: fees, GBP support, FCA status, pros and cons. Is Coinbase the best exchange for UK beginners in 2026?",
  },
};

const FAQ = [
  {
    q: "Is Coinbase safe for UK users?",
    a: "Coinbase is one of the most regulated crypto exchanges available in the UK. It is registered with the FCA for UK users and listed on the Nasdaq (COIN). It holds most customer funds in cold storage and has insurance for assets held in hot wallets. No exchange is completely risk-free — do not leave large amounts on any exchange long-term.",
  },
  {
    q: "What are Coinbase fees for UK users?",
    a: "Coinbase charges a spread of around 0.5% on simple buys through the main app, plus a flat fee for smaller purchases. For active traders, Coinbase Advanced (previously Coinbase Pro) charges maker/taker fees from 0.00% to 0.60% depending on volume — significantly cheaper. If you trade regularly, use Coinbase Advanced.",
  },
  {
    q: "Can I deposit GBP on Coinbase?",
    a: "Yes. Coinbase supports GBP deposits via Faster Payments bank transfer (free) and debit card (fee applies). Withdrawals to UK bank accounts via Faster Payments are also free. GBP is fully supported throughout the platform.",
  },
  {
    q: "Is Coinbase FCA registered?",
    a: "Yes. Coinbase Europe Limited is registered with the UK Financial Conduct Authority (FCA) as a cryptoasset firm. You can verify this at register.fca.org.uk. Registration means Coinbase must comply with UK AML and KYC requirements — it does not mean your crypto holdings are protected by the FSCS.",
  },
  {
    q: "What is Coinbase Advanced and should I use it?",
    a: "Coinbase Advanced (previously Coinbase Pro) is the professional trading interface available to all Coinbase account holders at no extra cost. It has lower fees than the standard Coinbase app — maker fees as low as 0.00% and taker fees from 0.05%. If you buy more than £200/month in crypto, use Coinbase Advanced to save on fees.",
  },
  {
    q: "Can I stake crypto on Coinbase in the UK?",
    a: "Yes. Coinbase offers staking for Ethereum (ETH), Solana (SOL), Cardano (ADA), and other supported assets for UK users. Staking rewards are paid in the staked asset and vary by network. Note that staking rewards are taxable income under HMRC rules.",
  },
];

export default function CoinbaseUKReviewPage() {
  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 12px" }}>
        CRYPTO EXCHANGE REVIEW · Updated June 2026
      </p>
      <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>
        Coinbase UK Review 2026
      </h1>
      <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 16px" }}>
        The most beginner-friendly crypto exchange available in the UK — but the fees on the standard app are steep. Here's what you need to know before signing up.
      </p>

      {/* Score + verdict */}
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "20px", alignItems: "center", padding: "20px 24px", background: "var(--bg-tint-green-strong)", border: "1px solid oklch(55% 0.2 140 / 0.4)", borderRadius: "12px", marginBottom: "24px" }}>
        <div style={{ textAlign: "center", minWidth: "80px" }}>
          <span style={{ fontSize: "42px", fontWeight: 900, color: "var(--amber)", lineHeight: 1 }}>9</span>
          <span style={{ fontSize: "20px", fontWeight: 900, color: "var(--amber)" }}>/10</span>
          <p style={{ fontSize: "11px", color: "var(--muted)", margin: "4px 0 0", fontWeight: 600 }}>DigiTech Score</p>
        </div>
        <div>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#22c55e", margin: "0 0 6px" }}>Best for UK beginners</p>
          <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.7 }}>
            Simplest app, GBP bank transfers, FCA registered, and built-in crypto education. Fees are higher than Kraken on the standard app — switch to Coinbase Advanced for lower costs.
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
          <p style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 4px" }}>Coinbase — Start Buying Crypto</p>
          <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>FCA registered · GBP deposits · 250+ coins</p>
        </div>
        <a href="https://www.coinbase.com/join/jrobertson_1A8sYA" target="_blank" rel="noopener sponsored"
          style={{ display: "inline-block", padding: "12px 24px", background: "var(--amber)", color: "oklch(8% 0.015 60)", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none", whiteSpace: "nowrap" }}>
          Join Coinbase →
        </a>
      </div>

      {/* Pros/Cons */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>Coinbase Pros and Cons</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "40px" }}>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", padding: "20px 22px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#22c55e", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Pros</p>
          <ul style={{ margin: 0, padding: "0 0 0 16px", display: "grid", gap: "8px" }}>
            {[
              "Simplest app — ideal for complete beginners",
              "GBP deposits via Faster Payments (free)",
              "FCA registered for UK users",
              "Coinbase Advanced for lower trading fees",
              "250+ coins supported",
              "ETH, SOL, ADA staking available",
              "Coinbase Learn — earn crypto while learning",
              "Listed on Nasdaq — publicly audited",
            ].map((p) => <li key={p} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{p}</li>)}
          </ul>
        </div>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", padding: "20px 22px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#f87171", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Cons</p>
          <ul style={{ margin: 0, padding: "0 0 0 16px", display: "grid", gap: "8px" }}>
            {[
              "Standard app fees are high (0.5%+ spread on buys)",
              "Smaller coin selection than Binance or Bybit",
              "Advanced trading on separate Coinbase Advanced platform",
              "Customer support can be slow",
              "Not FSCS protected — crypto is not like bank deposits",
            ].map((c) => <li key={c} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{c}</li>)}
          </ul>
        </div>
      </div>

      {/* Fees */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>Coinbase Fees for UK Users</h2>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", overflow: "hidden", marginBottom: "40px" }}>
        {[
          { method: "Simple buy (Coinbase app)", fee: "~0.5–1.5% spread + flat fee", note: "Easiest but most expensive" },
          { method: "Coinbase Advanced — maker", fee: "0.00%–0.40%", note: "For limit orders (adds liquidity)" },
          { method: "Coinbase Advanced — taker", fee: "0.05%–0.60%", note: "For market orders (takes liquidity)" },
          { method: "GBP deposit (Faster Payments)", fee: "Free", note: "Standard UK bank transfer" },
          { method: "Debit card deposit", fee: "3.99%", note: "Instant but expensive — avoid for large amounts" },
          { method: "GBP withdrawal", fee: "Free", note: "Faster Payments to UK bank" },
        ].map((row, i) => (
          <div key={row.method} style={{ display: "grid", gridTemplateColumns: "1fr 140px 1fr", gap: "12px", padding: "13px 18px", borderBottom: i < 5 ? "1px solid var(--line)" : "none", fontSize: "13px" }}>
            <span style={{ color: "var(--fg)", fontWeight: 600 }}>{row.method}</span>
            <span style={{ color: "var(--amber)", fontWeight: 700 }}>{row.fee}</span>
            <span style={{ color: "var(--muted)" }}>{row.note}</span>
          </div>
        ))}
      </div>

      {/* Advanced tip */}
      <div style={{ padding: "20px 24px", background: "var(--bg-tint-purple)", border: "1px solid oklch(55% 0.15 280 / 0.3)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 10px" }}>💡 Use Coinbase Advanced to Cut Fees</h3>
        <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
          Coinbase Advanced is free for all Coinbase account holders. Go to advanced.coinbase.com or switch in the app. Maker fees start at 0.40% and drop with volume — significantly cheaper than the standard 0.5–1.5% on simple buys. For any purchase over £100, use Coinbase Advanced. Same account, same funds, lower costs.
        </p>
      </div>

      {/* Internal links */}
      <div style={{ padding: "20px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 14px" }}>Related guides</h3>
        <div style={{ display: "grid", gap: "8px" }}>
          {[
            { label: "Best Crypto Exchanges for UK Beginners 2026", href: "/reviews/best-crypto-exchanges-uk" },
            { label: "Kraken UK Review 2026", href: "/reviews/kraken-uk-review" },
            { label: "Ledger Wallet Review — Protect Your Coinbase Holdings", href: "/reviews/ledger-wallet-review" },
            { label: "Koinly UK Review — Calculate Your Coinbase Tax", href: "/reviews/koinly-uk-review" },
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
        <p style={{ fontSize: "18px", fontWeight: 900, color: "var(--fg)", margin: "0 0 8px" }}>Start buying crypto in minutes</p>
        <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 18px" }}>FCA registered · GBP bank transfers · Free to sign up</p>
        <a href="https://www.coinbase.com/join/jrobertson_1A8sYA" target="_blank" rel="noopener sponsored"
          style={{ display: "inline-block", padding: "14px 32px", background: "var(--amber)", color: "oklch(8% 0.015 60)", borderRadius: "8px", fontWeight: 800, fontSize: "15px", textDecoration: "none" }}>
          Join Coinbase →
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
