import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Hardware Wallets for UK Users 2026 — Ledger vs Trezor",
  description: "Best hardware wallets for UK crypto holders in 2026. Ledger vs Trezor — security, price, coin support and which one to buy. Honest comparison, no bias.",
  alternates: { canonical: "/reviews/best-hardware-wallets-uk" },
  openGraph: {
    title: "Best Hardware Wallets for UK Users 2026 — Ledger vs Trezor",
    description: "Ledger vs Trezor: which hardware wallet should UK crypto investors buy in 2026? Full comparison of security, price, coins, and ease of use.",
  },
};

const WALLETS = [
  {
    rank: 1,
    name: "Ledger Nano S Plus",
    badge: "Best Overall",
    badgeColor: "#22c55e",
    price: "£79",
    href: "/reviews/ledger-wallet-review",
    buyHref: "https://shop.ledger.com/?referral_code=FN50B8J0VZNVR",
    buyLabel: "Shop Ledger",
    secureElement: "✅ CC EAL5+",
    openSource: "Partial",
    coinSupport: "5,500+",
    connection: "USB-C",
    desc: "Best all-round hardware wallet. Secure element chip, widest coin support, and a polished app (Ledger Live). The go-to recommendation for most UK buyers.",
    sponsored: true,
  },
  {
    rank: 2,
    name: "Trezor Safe 3",
    badge: "Best Open Source",
    badgeColor: "#6366f1",
    price: "£79",
    href: "/reviews/trezor-wallet-review",
    buyHref: "https://trezor.io/",
    buyLabel: "Shop Trezor",
    secureElement: "✅ EAL6+",
    openSource: "Fully open source",
    coinSupport: "8,000+",
    connection: "USB-C",
    desc: "Fully open-source firmware — every line of code is publicly auditable. Added a secure element chip in 2023. Best for privacy-focused buyers who want maximum transparency.",
    sponsored: false,
  },
  {
    rank: 3,
    name: "Ledger Flex",
    badge: "Best Premium",
    badgeColor: "#f59e0b",
    price: "£249",
    href: "/reviews/ledger-wallet-review",
    buyHref: "https://shop.ledger.com/?referral_code=FN50B8J0VZNVR",
    buyLabel: "Shop Ledger",
    secureElement: "✅ CC EAL6+",
    openSource: "Partial",
    coinSupport: "5,500+",
    connection: "USB-C + Bluetooth",
    desc: "Large E Ink touchscreen makes address verification much easier. Worth it for significant holdings. Overkill for casual users — the Nano S Plus does the same job at a third of the price.",
    sponsored: true,
  },
  {
    rank: 4,
    name: "Trezor Model One",
    badge: "Budget Pick",
    badgeColor: "#64748b",
    price: "£49",
    href: "/reviews/trezor-wallet-review",
    buyHref: "https://trezor.io/",
    buyLabel: "Shop Trezor",
    secureElement: "❌ No secure element",
    openSource: "Fully open source",
    coinSupport: "1,800+",
    connection: "Micro-USB",
    desc: "The original hardware wallet — still works well for Bitcoin and Ethereum holders on a budget. No secure element and no ADA/XRP support are its main limitations. Fine for small holdings.",
    sponsored: false,
  },
];

const FAQ = [
  {
    q: "Do I need a hardware wallet?",
    a: "If you hold more than £500 in crypto, a hardware wallet is worth the cost. The Ledger Nano S Plus at £79 protects you from exchange hacks, phishing attacks, and malware — threats that have cost crypto users billions. For small amounts, exchange storage with 2FA is acceptable.",
  },
  {
    q: "Should I buy Ledger or Trezor?",
    a: "Both are excellent. Ledger has a slight edge on coin support and app quality (Ledger Live). Trezor wins on transparency — fully open-source firmware means anyone can audit the code. The Ledger Nano S Plus and Trezor Safe 3 are similarly priced at £79. Either is a solid choice for most UK buyers.",
  },
  {
    q: "Is it safe to buy a hardware wallet from Amazon?",
    a: "Only buy from the official Ledger or Trezor websites. Amazon marketplace sellers — including fulfilled by Amazon — carry risk of tampered devices. A compromised hardware wallet can steal all your crypto. ledger.com and trezor.io are the only safe sources.",
  },
  {
    q: "What happens if my hardware wallet breaks or is lost?",
    a: "Your crypto is not on the device — it's on the blockchain. Your 24-word seed phrase is the only thing that matters. Write it on paper, store it offline in a safe place. If your device breaks, buy a new one and restore with your seed phrase. Never store your seed phrase digitally.",
  },
  {
    q: "Can I use a hardware wallet with Coinbase or Kraken?",
    a: "Yes. Hardware wallets work alongside exchange accounts. Buy crypto on Coinbase or Kraken, then withdraw to your hardware wallet address for long-term storage. Your private keys never touch the exchange.",
  },
];

export default function BestHardwareWalletsUKPage() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 12px" }}>
        HARDWARE WALLET COMPARISON · Updated June 2026
      </p>
      <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>
        Best Hardware Wallets for UK Users 2026
      </h1>
      <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 16px" }}>
        Exchanges get hacked. Hardware wallets keep your private keys offline and your crypto safe. Here's which one to buy in the UK in 2026 — no fluff.
      </p>

      {/* Quick picks */}
      <div style={{ padding: "20px 24px", background: "var(--bg-tint-purple)", border: "1px solid oklch(55% 0.15 280 / 0.3)", borderRadius: "12px", marginBottom: "24px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(72% 0.18 280)", margin: "0 0 12px" }}>Quick picks</p>
        <div style={{ display: "grid", gap: "8px" }}>
          {[
            { label: "Best overall", pick: "Ledger Nano S Plus — £79, secure element, 5,500+ coins, great app" },
            { label: "Best open source", pick: "Trezor Safe 3 — £79, fully auditable code, EAL6+ chip" },
            { label: "Best premium", pick: "Ledger Flex — £249, large touchscreen, Bluetooth" },
            { label: "Tightest budget", pick: "Trezor Model One — £49, works for BTC + ETH, no secure element" },
          ].map((row) => (
            <div key={row.label} style={{ display: "flex", gap: "12px", fontSize: "13px" }}>
              <span style={{ color: "oklch(72% 0.18 280)", fontWeight: 700, minWidth: "140px", flexShrink: 0 }}>{row.label}:</span>
              <span style={{ color: "var(--muted)" }}>{row.pick}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{ padding: "14px 18px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "10px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "40px" }}>
        <strong style={{ color: "var(--fg)" }}>Disclaimer:</strong> Educational content only — not financial advice. Some links are affiliate links. We may earn a commission at no extra cost to you. This never changes our recommendations — buy only from official manufacturer websites.
      </div>

      {/* Wallet cards */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 20px" }}>Full Comparison</h2>
      <div style={{ display: "grid", gap: "20px", marginBottom: "48px" }}>
        {WALLETS.map((w) => (
          <div key={w.name} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "14px", padding: "22px 26px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "10px", flexWrap: "wrap" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "13px", fontWeight: 800, color: "var(--muted)" }}>#{w.rank}</span>
                  <h3 style={{ fontSize: "18px", fontWeight: 900, color: "var(--fg)", margin: 0 }}>{w.name}</h3>
                  <span style={{ fontSize: "11px", fontWeight: 700, padding: "2px 9px", borderRadius: "20px", background: w.badgeColor + "22", color: w.badgeColor, border: `1px solid ${w.badgeColor}44` }}>{w.badge}</span>
                </div>
                <span style={{ fontSize: "16px", fontWeight: 700, color: "var(--amber)" }}>{w.price}</span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <Link href={w.href} style={{ fontSize: "13px", fontWeight: 700, color: "var(--amber)", textDecoration: "none", padding: "8px 14px", border: "1px solid oklch(73% 0.17 78 / 0.4)", borderRadius: "7px" }}>
                  Full review →
                </Link>
                <a href={w.buyHref} target="_blank" rel={w.sponsored ? "noopener sponsored" : "noopener"}
                  style={{ fontSize: "13px", fontWeight: 800, color: "oklch(8% 0.015 60)", background: "var(--amber)", textDecoration: "none", padding: "8px 14px", borderRadius: "7px" }}>
                  {w.buyLabel} →
                </a>
              </div>
            </div>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 14px" }}>{w.desc}</p>
            <div style={{ display: "flex", gap: "20px", fontSize: "12px", flexWrap: "wrap" }}>
              <span><strong style={{ color: "var(--fg)" }}>Secure element:</strong> <span style={{ color: "var(--muted)" }}>{w.secureElement}</span></span>
              <span><strong style={{ color: "var(--fg)" }}>Firmware:</strong> <span style={{ color: "var(--muted)" }}>{w.openSource}</span></span>
              <span><strong style={{ color: "var(--fg)" }}>Coins:</strong> <span style={{ color: "var(--muted)" }}>{w.coinSupport}</span></span>
              <span><strong style={{ color: "var(--fg)" }}>Connection:</strong> <span style={{ color: "var(--muted)" }}>{w.connection}</span></span>
            </div>
          </div>
        ))}
      </div>

      {/* Safety rules */}
      <div style={{ padding: "24px 28px", background: "var(--bg-tint-red-strong)", border: "1px solid oklch(55% 0.15 25 / 0.3)", borderRadius: "12px", marginBottom: "36px" }}>
        <h2 style={{ fontSize: "17px", fontWeight: 800, color: "var(--fg)", margin: "0 0 14px" }}>🔒 Hardware Wallet Safety Rules</h2>
        <ul style={{ margin: 0, padding: "0 0 0 18px", display: "grid", gap: "8px" }}>
          {[
            "Only buy from ledger.com or trezor.io — never secondhand, never Amazon marketplace.",
            "Write your 24-word seed phrase on paper. Store offline in a safe place. Never photograph or type it anywhere.",
            "Never enter your seed phrase into any website, app, or form — legitimate hardware wallets never ask for it digitally.",
            "Enable PIN protection — 3 wrong attempts wipes the device (recover with seed phrase).",
            "Test a small withdrawal before moving significant amounts.",
            "Consider a metal seed phrase backup (Cryptosteel, Bilodeau) for fire and flood protection.",
          ].map((tip) => <li key={tip} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{tip}</li>)}
        </ul>
      </div>

      {/* Internal links */}
      <div style={{ padding: "20px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 14px" }}>Related guides</h3>
        <div style={{ display: "grid", gap: "8px" }}>
          {[
            { label: "Ledger Wallet Review 2026 — Full Review", href: "/reviews/ledger-wallet-review" },
            { label: "Trezor Wallet Review 2026 — Full Review", href: "/reviews/trezor-wallet-review" },
            { label: "Best Crypto Exchanges for UK Beginners 2026", href: "/reviews/best-crypto-exchanges-uk" },
            { label: "Koinly UK Review — Sort Your Crypto Tax", href: "/reviews/koinly-uk-review" },
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
