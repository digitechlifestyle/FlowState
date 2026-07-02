import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Crypto Resources for UK Beginners 2026 — Where to Start",
  description: "Best free and paid crypto resources for UK beginners in 2026. Where to learn, which exchanges to use, how to stay safe, and how to handle HMRC tax — everything in one place.",
  alternates: { canonical: "/reviews/best-crypto-resources-beginners" },
  openGraph: {
    title: "Best Crypto Resources for UK Beginners 2026",
    description: "Complete guide to crypto resources for UK beginners — exchanges, wallets, tax tools, learning sites, and safety checklist.",
  },
};

const SECTIONS = [
  {
    title: "Start Here: Best Exchanges for UK Beginners",
    items: [
      { name: "Coinbase", desc: "Simplest app, FCA registered, GBP bank transfers. Best first exchange.", href: "/reviews/coinbase-uk-review", external: "https://www.coinbase.com/join/jrobertson_1A8sYA", externalLabel: "Join Coinbase", sponsored: true },
      { name: "Kraken", desc: "Lower fees, staking, never been hacked. Best value for active buyers.", href: "/reviews/kraken-uk-review", external: "https://kraken.app.link/PzxrgWP7Qzb", externalLabel: "Join Kraken", sponsored: true },
    ],
  },
  {
    title: "Protect Your Crypto: Hardware Wallets",
    items: [
      { name: "Ledger Nano S Plus", desc: "Best hardware wallet for most UK users. £79. Secure element chip, 5,500+ coins.", href: "/reviews/ledger-wallet-review", external: "https://shop.ledger.com/?referral_code=FN50B8J0VZNVR", externalLabel: "Shop Ledger", sponsored: true },
      { name: "Trezor Safe 3", desc: "Open-source alternative. £79. Fully auditable firmware, EAL6+ chip.", href: "/reviews/trezor-wallet-review", external: "https://trezor.io/", externalLabel: "Shop Trezor", sponsored: false },
    ],
  },
  {
    title: "UK Crypto Tax: Sort Your HMRC Reporting",
    items: [
      { name: "Koinly", desc: "Most popular HMRC crypto tax tool. Section 104 pooling, 700+ integrations. Free to track.", href: "/reviews/koinly-uk-review", external: "https://koinly.io/?via=digitechlifestyle", externalLabel: "Try Koinly Free", sponsored: true },
    ],
  },
  {
    title: "Free Learning Resources",
    items: [
      { name: "DigiTech Lifestyle Blog", desc: "UK-focused crypto and AI guides — plain English, no hype, no financial advice.", href: "/blog", external: null, externalLabel: null, sponsored: false },
      { name: "Coinbase Learn", desc: "Free crypto courses with rewards. Cover Bitcoin basics, DeFi, and more. Available inside Coinbase.", href: null, external: "https://coinbase.com/learn", externalLabel: "Visit Coinbase Learn", sponsored: false },
      { name: "HMRC Cryptoassets Guide", desc: "Official HMRC guidance on crypto tax for individuals. Required reading for UK holders.", href: null, external: "https://www.gov.uk/government/publications/tax-on-cryptoassets", externalLabel: "Read HMRC Guide", sponsored: false },
      { name: "FCA Register", desc: "Check if any exchange or financial service is authorised in the UK before using it.", href: null, external: "https://register.fca.org.uk", externalLabel: "Check FCA Register", sponsored: false },
    ],
  },
];

const CHECKLIST = [
  "Use a FCA-registered exchange (Coinbase or Kraken recommended for beginners)",
  "Enable two-factor authentication (2FA) using an authenticator app — not SMS",
  "Never share your password, private keys, or seed phrase with anyone",
  "Start with a small amount — only invest what you can afford to lose entirely",
  "Move significant holdings to a hardware wallet (Ledger or Trezor)",
  "Keep records of every transaction from day one — HMRC requires this",
  "Use Koinly or similar to calculate tax before self-assessment deadline (31 January)",
  "Check the FCA register before using any new exchange or financial service",
  "Ignore unsolicited messages about crypto 'opportunities' — these are almost always scams",
  "Do not invest based on social media tips, YouTube promotions, or influencer calls",
];

const FAQ = [
  {
    q: "How much money do I need to start buying crypto in the UK?",
    a: "Coinbase and Kraken allow you to start with as little as £1–2 worth of Bitcoin or Ethereum. There is no minimum investment requirement. Many beginners start with £50–100 to learn how the platform works before committing more.",
  },
  {
    q: "Is crypto legal in the UK?",
    a: "Yes. Buying, selling, and holding cryptocurrency is legal in the UK. You must report capital gains to HMRC on your self-assessment tax return if your profits exceed the annual CGT allowance (£3,000 for 2024/25). See gov.uk for official HMRC cryptoassets guidance.",
  },
  {
    q: "What is the safest way to buy crypto in the UK?",
    a: "Use a FCA-registered exchange (Coinbase or Kraken), enable 2FA, and move significant holdings to a hardware wallet like Ledger. Never click links in emails claiming to be from an exchange — always go directly to the exchange website.",
  },
  {
    q: "Should I start with Bitcoin or Ethereum?",
    a: "Bitcoin (BTC) and Ethereum (ETH) are the two most established cryptocurrencies with the longest track records. Most UK beginners start with one or both. Altcoins (smaller coins) carry significantly higher risk — understand the majors first.",
  },
];

export default function BestCryptoResourcesBeginnersPage() {
  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 12px" }}>
        BEGINNER GUIDE · Updated June 2026
      </p>
      <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>
        Best Crypto Resources for UK Beginners 2026
      </h1>
      <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 16px" }}>
        Everything a UK beginner needs in one place — where to buy, how to stay safe, how to handle HMRC tax, and free resources to actually understand what you're investing in.
      </p>

      {/* Disclaimer */}
      <div style={{ padding: "14px 18px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "10px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "40px" }}>
        <strong style={{ color: "var(--fg)" }}>Disclaimer:</strong> Educational content only — not financial advice. Crypto is high risk. Some links are affiliate links. We may earn a commission at no extra cost to you.
      </div>

      {/* Resource sections */}
      {SECTIONS.map((section) => (
        <div key={section.title} style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "19px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>{section.title}</h2>
          <div style={{ display: "grid", gap: "12px" }}>
            {section.items.map((item) => (
              <div key={item.name} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <p style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 4px" }}>{item.name}</p>
                  <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {item.href && (
                    <Link href={item.href} style={{ fontSize: "12px", fontWeight: 700, color: "var(--amber)", textDecoration: "none", padding: "7px 12px", border: "1px solid oklch(73% 0.17 78 / 0.4)", borderRadius: "7px", whiteSpace: "nowrap" }}>
                      Review →
                    </Link>
                  )}
                  {item.external && (
                    <a href={item.external} target="_blank" rel={item.sponsored ? "noopener sponsored" : "noopener"}
                      style={{ fontSize: "12px", fontWeight: 800, color: "oklch(8% 0.015 60)", background: "var(--amber)", textDecoration: "none", padding: "7px 12px", borderRadius: "7px", whiteSpace: "nowrap" }}>
                      {item.externalLabel} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Safety checklist */}
      <div style={{ padding: "24px 28px", background: "var(--bg-tint-red-strong)", border: "1px solid oklch(55% 0.15 25 / 0.3)", borderRadius: "12px", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>🔒 UK Beginner Safety Checklist</h2>
        <div style={{ display: "grid", gap: "8px" }}>
          {CHECKLIST.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", fontSize: "13px", alignItems: "flex-start" }}>
              <span style={{ color: "#22c55e", fontWeight: 900, flexShrink: 0, marginTop: "1px" }}>✓</span>
              <span style={{ color: "var(--muted)", lineHeight: 1.5 }}>{item}</span>
            </div>
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
