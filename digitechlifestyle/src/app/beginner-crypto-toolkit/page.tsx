import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beginner Crypto Toolkit UK 2026 — Everything You Need to Start | DigiTech Lifestyle",
  description: "The complete beginner crypto toolkit for UK readers. The right exchange, wallet, tax tool, and safety checklist — all in one place. Start safely in 2026.",
  alternates: { canonical: "/beginner-crypto-toolkit" },
  openGraph: {
    title: "Beginner Crypto Toolkit UK 2026",
    description: "Everything a UK beginner needs to start investing in crypto safely — exchange, wallet, tax, and security in one place.",
    url: "https://digitechlifestyle.com/beginner-crypto-toolkit",
    type: "website", siteName: "DigiTech Lifestyle",
  },
};

const STEPS = [
  {
    num: "01", title: "Choose a UK Exchange",
    desc: "Buy your first crypto from an FCA-registered exchange. For most beginners, Coinbase is the simplest. Kraken is better value once you're comfortable.",
    links: [
      { label: "Coinbase — Simplest for Beginners", href: "https://www.coinbase.com", external: true, sponsored: true },
      { label: "Kraken — Best Fees, FCA Registered", href: "https://www.kraken.com", external: true, sponsored: true },
      { label: "Compare All UK Exchanges →", href: "/best-crypto-exchanges-uk", external: false, sponsored: false },
    ],
    warning: "Only use FCA-registered exchanges. Check every platform at register.fca.org.uk before depositing.",
  },
  {
    num: "02", title: "Set Up a Wallet",
    desc: "Start with a software wallet like Exodus or Trust Wallet. Once you're holding significant amounts, move to a hardware wallet like Ledger.",
    links: [
      { label: "Exodus — Best Beginner Wallet", href: "https://www.exodus.com", external: true, sponsored: true },
      { label: "Trust Wallet — Best Multi-Chain Mobile", href: "https://trustwallet.com", external: true, sponsored: true },
      { label: "Ledger Nano X — Best Hardware Wallet", href: "https://www.ledger.com", external: true, sponsored: true },
      { label: "Full Wallet Comparison →", href: "/best-crypto-wallets-beginners", external: false, sponsored: false },
    ],
    warning: "Write your seed phrase on paper and store it somewhere safe. Never photograph it or store it digitally.",
  },
  {
    num: "03", title: "Understand UK Tax Rules",
    desc: "HMRC treats crypto as a capital asset. You pay CGT on profits and income tax on staking/mining. Keep records from day one — use Koinly or Recap to automate this.",
    links: [
      { label: "Koinly — Best UK Crypto Tax Tool", href: "https://koinly.io", external: true, sponsored: true },
      { label: "Recap — Built for HMRC", href: "https://recap.io", external: true, sponsored: true },
      { label: "Compare All Tax Tools →", href: "/best-crypto-tax-software-uk", external: false, sponsored: false },
    ],
    warning: "The CGT annual allowance is £3,000 (2026/27). Track every trade — HMRC can request records up to 6 years back.",
  },
  {
    num: "04", title: "Learn to Spot Scams",
    desc: "UK investors lose £300m+ per year to crypto scams. Deepfakes, fake platforms, and pig butchering scams are at an all-time high in 2026. Know the red flags before you invest.",
    links: [
      { label: "Full Scam Watch Guide →", href: "/scam-watch", external: false, sponsored: false },
      { label: "Crypto Scam Checker →", href: "/crypto-scam-checker", external: false, sponsored: false },
    ],
    warning: "If a platform promises guaranteed returns or you can't withdraw your funds — it's a scam. Always check the FCA register.",
  },
  {
    num: "05", title: "Secure Your Accounts",
    desc: "Use 2FA on every exchange. Use an authenticator app (not SMS). Use a unique email address for crypto. Consider a hardware wallet for anything you don't plan to trade.",
    links: [
      { label: "Top 4 Security Risks in Digital Assets →", href: "/blog/top-4-security-risks-in-digital-assets-and-how-to-avoid-them", external: false, sponsored: false },
      { label: "Self-Custody Guide →", href: "/blog/self-custody-why-you-should-own-your-crypto-keys", external: false, sponsored: false },
      { label: "Best Hardware Wallets UK →", href: "/best-hardware-wallets-uk", external: false, sponsored: false },
    ],
    warning: "SMS 2FA is weak — SIM-swap attacks are common. Use Google Authenticator or Authy instead.",
  },
  {
    num: "06", title: "Keep Learning",
    desc: "Crypto moves fast. New scams appear every week. Follow reliable UK-focused sources and keep reading. DigiTech Lifestyle publishes new guides and news every day.",
    links: [
      { label: "Latest Crypto News →", href: "/news", external: false, sponsored: false },
      { label: "All Crypto Guides →", href: "/blog?category=Cryptocurrencies", external: false, sponsored: false },
      { label: "Free Weekly Newsletter →", href: "/newsletter", external: false, sponsored: false },
    ],
    warning: null,
  },
];

const QUICK_LINKS = [
  { label: "Best Crypto Exchanges UK 2026", href: "/best-crypto-exchanges-uk" },
  { label: "Best Hardware Wallets UK 2026", href: "/best-hardware-wallets-uk" },
  { label: "Best Crypto Wallets for Beginners", href: "/best-crypto-wallets-beginners" },
  { label: "Best Crypto Tax Software UK", href: "/best-crypto-tax-software-uk" },
  { label: "Crypto Scam Checker", href: "/crypto-scam-checker" },
  { label: "Full Scam Watch Guide", href: "/scam-watch" },
  { label: "Resources & Free Downloads", href: "/resources" },
];

export default function BeginnerCryptoToolkit() {
  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 20px 80px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Beginner Crypto Toolkit UK 2026",
        author: { "@type": "Person", name: "Joe Robertson" },
        dateModified: "2026-07-01",
        breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://digitechlifestyle.com" },
          { "@type": "ListItem", position: 2, name: "Resources", item: "https://digitechlifestyle.com/resources" },
          { "@type": "ListItem", position: 3, name: "Beginner Crypto Toolkit", item: "https://digitechlifestyle.com/beginner-crypto-toolkit" },
        ]},
      }) }} />

      <nav style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "32px", display: "flex", gap: "6px" }}>
        <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>Home</Link>
        <span>›</span><Link href="/resources" style={{ color: "var(--muted)", textDecoration: "none" }}>Resources</Link>
        <span>›</span><span style={{ color: "var(--fg)" }}>Beginner Crypto Toolkit</span>
      </nav>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "12px" }}>Updated July 2026 · By Joe Robertson</p>
      <h1 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>Beginner Crypto Toolkit UK 2026</h1>
      <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 12px", maxWidth: "720px" }}>
        Everything you need to start investing in crypto safely in the UK — the right exchange, wallet, tax tool, and security checklist. I've been in crypto since 2017. Here's the no-hype starter kit I wish I'd had.
      </p>

      <div style={{ fontSize: "12px", color: "var(--muted)", padding: "12px 16px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "8px", marginBottom: "32px", lineHeight: 1.6 }}>
        <strong style={{ color: "var(--fg)" }}>Affiliate disclosure:</strong> Some links in this toolkit are affiliate links. DigiTech Lifestyle may earn a commission — at no extra cost to you. This doesn't affect what we recommend.
      </div>

      {/* Quick links */}
      <div style={{ padding: "18px 22px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "10px", marginBottom: "40px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>Jump to guide</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {QUICK_LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize: "12px", fontWeight: 600, padding: "5px 12px", borderRadius: "20px", border: "1px solid var(--line)", color: "var(--muted)", textDecoration: "none" }}>{l.label}</Link>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div style={{ display: "grid", gap: "24px", marginBottom: "48px" }}>
        {STEPS.map((step) => (
          <div key={step.num} style={{ padding: "24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "14px" }}>
            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "var(--amber)", color: "oklch(8% 0.015 60)", fontWeight: 900, fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{step.num}</div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: "17px", fontWeight: 800, color: "var(--fg)", margin: "0 0 8px" }}>{step.title}</h2>
                <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 14px", lineHeight: 1.7 }}>{step.desc}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: step.warning ? "14px" : "0" }}>
                  {step.links.map(l => (
                    l.external
                      ? <a key={l.href} href={l.href} target="_blank" rel={`noopener noreferrer${l.sponsored ? " sponsored" : ""}`}
                          style={{ fontSize: "12px", fontWeight: 700, color: "var(--amber)", textDecoration: "none", padding: "7px 14px", border: "1px solid oklch(73% 0.17 78 / 0.35)", borderRadius: "7px", display: "inline-block" }}>
                          {l.label}
                        </a>
                      : <Link key={l.href} href={l.href}
                          style={{ fontSize: "12px", fontWeight: 700, color: "var(--fg)", textDecoration: "none", padding: "7px 14px", border: "1px solid var(--line)", borderRadius: "7px", display: "inline-block" }}>
                          {l.label}
                        </Link>
                  ))}
                </div>

                {step.warning && (
                  <div style={{ fontSize: "12px", color: "#f87171", padding: "10px 14px", background: "var(--bg-tint-red)", borderRadius: "7px", lineHeight: 1.55 }}>
                    ⚠️ {step.warning}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div style={{ padding: "24px", background: "var(--bg-tint-amber-strong)", border: "1px solid oklch(73% 0.17 78 / 0.25)", borderRadius: "12px", marginBottom: "40px" }}>
        <p style={{ fontSize: "13px", fontWeight: 800, color: "var(--fg)", margin: "0 0 6px" }}>📬 Stay ahead — free weekly newsletter for UK crypto beginners</p>
        <p style={{ fontSize: "12px", color: "var(--muted)", margin: "0 0 14px" }}>Every Thursday. Plain English. No spam. Unsubscribe any time.</p>
        <Link href="/newsletter" style={{ display: "inline-block", background: "var(--amber)", color: "oklch(8% 0.015 60)", fontWeight: 800, fontSize: "12px", padding: "9px 18px", borderRadius: "7px", textDecoration: "none" }}>
          Join free →
        </Link>
      </div>

      <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, opacity: 0.6 }}>This toolkit is for educational purposes only. Not financial advice. Crypto involves significant risk — never invest more than you can afford to lose.</p>
    </main>
  );
}
