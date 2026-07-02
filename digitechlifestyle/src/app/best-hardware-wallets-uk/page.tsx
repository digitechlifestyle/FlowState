import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Hardware Wallets UK 2026 — Ledger vs Trezor Compared | DigiTech Lifestyle",
  description: "The best hardware wallets for UK crypto users in 2026. Ledger vs Trezor vs Coldcard — price, security, coin support, and ease of use compared.",
  alternates: { canonical: "/best-hardware-wallets-uk" },
  openGraph: {
    title: "Best Hardware Wallets UK 2026 — Ledger vs Trezor",
    description: "Ledger vs Trezor vs Coldcard — hardware wallet comparison for UK crypto holders.",
    url: "https://digitechlifestyle.com/best-hardware-wallets-uk",
    type: "website",
    siteName: "DigiTech Lifestyle",
  },
};

const WALLETS = [
  {
    rank: 1,
    name: "Ledger Nano X",
    badge: "Best Overall",
    badgeColor: "#16a34a",
    score: "9/10",
    price: "~£149",
    tagline: "Best balance of security, coin support and ease of use",
    coins: "5,500+",
    bluetooth: "✅ Yes",
    openSource: "Partially",
    pros: ["Massive coin support — 5,500+", "Bluetooth for mobile use", "Ledger Live app is excellent", "Compact and portable", "Trusted by millions worldwide"],
    cons: ["2023 data breach exposed customer emails", "Firmware is closed source", "More expensive than Trezor Model One"],
    bestFor: "UK holders with a large, diverse crypto portfolio",
    avoid: "Privacy-first users — customer data breach history is a concern",
    url: "https://www.ledger.com",
  },
  {
    rank: 2,
    name: "Trezor Model T",
    badge: "Best Open Source",
    badgeColor: "#1d4ed8",
    score: "8.5/10",
    price: "~£179",
    tagline: "Fully open-source firmware — best for security purists",
    coins: "1,800+",
    bluetooth: "❌ No",
    openSource: "✅ Fully",
    pros: ["100% open-source firmware", "Touchscreen interface", "No Bluetooth = smaller attack surface", "Strong reputation for transparency", "Shamir backup support"],
    cons: ["Fewer coins than Ledger", "No Bluetooth (some see this as pro)", "Pricier than Model One"],
    bestFor: "Security-conscious UK holders who want fully auditable firmware",
    avoid: "Users with large altcoin portfolios — coin support is more limited",
    url: "https://trezor.io",
  },
  {
    rank: 3,
    name: "Trezor Model One",
    badge: "Best Budget",
    badgeColor: "#b45309",
    score: "8/10",
    price: "~£59",
    tagline: "Cheapest trusted hardware wallet — ideal first hardware wallet",
    coins: "1,000+",
    bluetooth: "❌ No",
    openSource: "✅ Fully",
    pros: ["Very affordable", "Fully open source", "Battle-tested since 2014", "Simple two-button interface", "Great for Bitcoin and major coins"],
    cons: ["No touchscreen", "Fewer coins than Nano X", "Basic interface"],
    bestFor: "UK Bitcoin and Ethereum holders who want security without high cost",
    avoid: "DeFi users or those holding 50+ different altcoins",
    url: "https://trezor.io",
  },
  {
    rank: 4,
    name: "Ledger Nano S Plus",
    badge: "Best Value Ledger",
    badgeColor: "#7c3aed",
    score: "8/10",
    price: "~£79",
    tagline: "Ledger's affordable option — most features, lower price",
    coins: "5,500+",
    bluetooth: "❌ No",
    openSource: "Partially",
    pros: ["Same 5,500+ coin support as Nano X", "Lower price than Nano X", "USB-C connection", "Ledger Live integration"],
    cons: ["No Bluetooth — desktop only", "Closed-source firmware like all Ledger", "Nano X is better for mobile"],
    bestFor: "UK holders who want Ledger's coin support without the Nano X price",
    avoid: "Mobile-first users — no Bluetooth means no phone use",
    url: "https://www.ledger.com",
  },
];

export default function BestHardwareWalletsUK() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 20px 80px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Best Hardware Wallets UK 2026",
        author: { "@type": "Person", name: "Joe Robertson" },
        dateModified: "2026-07-01",
        breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://digitechlifestyle.com" },
          { "@type": "ListItem", position: 2, name: "Reviews", item: "https://digitechlifestyle.com/reviews" },
          { "@type": "ListItem", position: 3, name: "Best Hardware Wallets UK 2026", item: "https://digitechlifestyle.com/best-hardware-wallets-uk" },
        ]},
      }) }} />

      <nav style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "32px", display: "flex", gap: "6px" }}>
        <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>Home</Link>
        <span>›</span><Link href="/reviews" style={{ color: "var(--muted)", textDecoration: "none" }}>Reviews</Link>
        <span>›</span><span style={{ color: "var(--fg)" }}>Best Hardware Wallets UK</span>
      </nav>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "12px" }}>Updated July 2026 · By Joe Robertson</p>
      <h1 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>Best Hardware Wallets UK 2026</h1>
      <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 12px", maxWidth: "720px" }}>
        If you're holding more crypto than you can afford to lose on an exchange, you need a hardware wallet. I've used Ledger and Trezor devices since 2018. Here's what I recommend for UK holders in 2026.
      </p>

      <div style={{ fontSize: "12px", color: "var(--muted)", padding: "12px 16px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "8px", marginBottom: "20px", lineHeight: 1.6 }}>
        <strong style={{ color: "var(--fg)" }}>Affiliate disclosure:</strong> Some links are affiliate links. We may earn a small commission if you buy via our links — at no extra cost to you. Rankings are based on merit, not commission.
      </div>

      <div style={{ padding: "16px 20px", background: "var(--bg-tint-red)", border: "1px solid oklch(55% 0.15 25 / 0.3)", borderRadius: "8px", marginBottom: "32px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, color: "#f87171", margin: "0 0 6px" }}>⚠️ Only buy from official sources</p>
        <p style={{ fontSize: "12px", color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>Never buy a hardware wallet from Amazon, eBay, or third-party sellers. Tampered devices have been used to steal crypto. Buy directly from Ledger.com or Trezor.io only.</p>
      </div>

      <div style={{ padding: "18px 22px", background: "var(--bg-tint-blue)", border: "1px solid oklch(40% 0.04 240 / 0.3)", borderRadius: "10px", marginBottom: "32px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--amber)", margin: "0 0 10px" }}>Key Takeaways</p>
        <ul style={{ margin: 0, paddingLeft: "18px", display: "grid", gap: "5px" }}>
          {["Ledger Nano X is best overall — widest coin support, excellent app", "Trezor Model T is best for security purists — fully open source", "Trezor Model One is best value — £59, trusted, open source", "Never store your seed phrase digitally or in a photo", "Not your keys, not your coins — hardware wallets are non-negotiable for serious holders"].map(t => (
            <li key={t} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.55 }}>{t}</li>
          ))}
        </ul>
      </div>

      <div style={{ display: "grid", gap: "24px", marginBottom: "40px" }}>
        {WALLETS.map((w) => (
          <div key={w.name} style={{ padding: "24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "14px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "12px" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)" }}>#{w.rank}</span>
              <h2 style={{ fontSize: "20px", fontWeight: 900, color: "var(--fg)", margin: 0 }}>{w.name}</h2>
              <span style={{ fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", background: w.badgeColor, color: "#fff" }}>{w.badge}</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--amber)", marginLeft: "auto" }}>{w.score}</span>
            </div>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 16px", lineHeight: 1.6 }}>{w.tagline}</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "8px", marginBottom: "16px" }}>
              {[{ label: "Price (UK)", value: w.price }, { label: "Coins", value: w.coins }, { label: "Bluetooth", value: w.bluetooth }, { label: "Open Source", value: w.openSource }].map(s => (
                <div key={s.label} style={{ padding: "10px 12px", background: "oklch(8% 0.01 240 / 0.5)", borderRadius: "8px" }}>
                  <div style={{ fontSize: "10px", color: "var(--muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{s.label}</div>
                  <div style={{ fontSize: "12px", color: "var(--fg)", fontWeight: 600 }}>{s.value}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#4ade80", textTransform: "uppercase", margin: "0 0 6px" }}>Pros</p>
                <ul style={{ margin: 0, paddingLeft: "16px", display: "grid", gap: "4px" }}>{w.pros.map(p => <li key={p} style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.5 }}>{p}</li>)}</ul>
              </div>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#f87171", textTransform: "uppercase", margin: "0 0 6px" }}>Cons</p>
                <ul style={{ margin: 0, paddingLeft: "16px", display: "grid", gap: "4px" }}>{w.cons.map(c => <li key={c} style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.5 }}>{c}</li>)}</ul>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
              <div style={{ padding: "10px 14px", background: "var(--bg-tint-green)", border: "1px solid oklch(55% 0.15 140 / 0.25)", borderRadius: "8px" }}>
                <p style={{ fontSize: "10px", fontWeight: 700, color: "#4ade80", textTransform: "uppercase", margin: "0 0 4px" }}>Best for</p>
                <p style={{ fontSize: "12px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{w.bestFor}</p>
              </div>
              <div style={{ padding: "10px 14px", background: "var(--bg-tint-red)", border: "1px solid oklch(55% 0.15 25 / 0.25)", borderRadius: "8px" }}>
                <p style={{ fontSize: "10px", fontWeight: 700, color: "#f87171", textTransform: "uppercase", margin: "0 0 4px" }}>Avoid if</p>
                <p style={{ fontSize: "12px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{w.avoid}</p>
              </div>
            </div>

            <a href={w.url} target="_blank" rel="noopener noreferrer sponsored"
              style={{ display: "inline-block", background: "var(--amber)", color: "oklch(8% 0.015 60)", fontWeight: 800, fontSize: "13px", padding: "10px 22px", borderRadius: "8px", textDecoration: "none" }}>
              Buy from official site →
            </a>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: "16px", fontWeight: 800, color: "var(--fg)", margin: "0 0 12px" }}>Related Guides</h2>
      <div style={{ display: "grid", gap: "8px", marginBottom: "32px" }}>
        {[
          { label: "Self-Custody: Why You Should Own Your Crypto Keys", href: "/blog/self-custody-why-you-should-own-your-crypto-keys" },
          { label: "Best Crypto Exchanges UK 2026", href: "/best-crypto-exchanges-uk" },
          { label: "Crypto Scam Watch — Fake Wallet Scams", href: "/scam-watch" },
          { label: "Best Crypto Wallets for Beginners", href: "/best-crypto-wallets-beginners" },
        ].map(l => (
          <Link key={l.href} href={l.href} style={{ fontSize: "13px", fontWeight: 600, color: "var(--fg)", textDecoration: "none", padding: "12px 16px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "8px", display: "block" }}>→ {l.label}</Link>
        ))}
      </div>

      <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, opacity: 0.6 }}>Educational purposes only. Not financial advice. Crypto carries significant risk.</p>
    </main>
  );
}
