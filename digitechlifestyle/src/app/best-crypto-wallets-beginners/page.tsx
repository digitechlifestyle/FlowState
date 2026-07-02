import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Crypto Wallets for Beginners UK 2026 — Simple & Safe | DigiTech Lifestyle",
  description: "Best crypto wallets for UK beginners in 2026. MetaMask, Trust Wallet, Exodus and hardware wallets explained — which to use and why.",
  alternates: { canonical: "/best-crypto-wallets-beginners" },
  openGraph: {
    title: "Best Crypto Wallets for Beginners UK 2026",
    description: "MetaMask vs Trust Wallet vs Exodus vs Ledger — which crypto wallet is right for UK beginners?",
    url: "https://digitechlifestyle.com/best-crypto-wallets-beginners",
    type: "website", siteName: "DigiTech Lifestyle",
  },
};

const WALLETS = [
  {
    rank: 1, name: "MetaMask", badge: "Best for Ethereum/DeFi", badgeColor: "#f97316", score: "9/10",
    type: "Software (Browser + Mobile)", cost: "Free", custodial: "❌ Non-custodial",
    tagline: "The industry standard Ethereum wallet — essential for DeFi and NFTs",
    pros: ["Most widely supported wallet for DeFi apps", "Free to use", "Works in browser and on mobile", "Easy to add custom networks", "Hardware wallet compatible"],
    cons: ["Ethereum and EVM chains only (no Bitcoin natively)", "Can be confusing for absolute beginners", "Phishing attacks target MetaMask users heavily"],
    bestFor: "Anyone using Ethereum, DeFi protocols, or NFT marketplaces",
    avoid: "Bitcoin-only holders — MetaMask doesn't support BTC natively",
    url: "https://metamask.io",
  },
  {
    rank: 2, name: "Trust Wallet", badge: "Best Multi-Chain", badgeColor: "#1d4ed8", score: "8.5/10",
    type: "Software (Mobile)", cost: "Free", custodial: "❌ Non-custodial",
    tagline: "Supports 100+ blockchains — best all-in-one beginner mobile wallet",
    pros: ["Supports Bitcoin, Ethereum, BNB, Solana, and 100+ chains", "Simple mobile interface", "Built-in browser for DeFi", "Owned by Binance but non-custodial", "Staking built in"],
    cons: ["Mobile only (no browser extension)", "Less DeFi integration depth than MetaMask", "Customer support is community-only"],
    bestFor: "Beginners who want one wallet for multiple coins on mobile",
    avoid: "Desktop-first users or power DeFi users — MetaMask is better there",
    url: "https://trustwallet.com",
  },
  {
    rank: 3, name: "Exodus", badge: "Best for Beginners", badgeColor: "#16a34a", score: "8/10",
    type: "Software (Desktop + Mobile)", cost: "Free", custodial: "❌ Non-custodial",
    tagline: "Most beginner-friendly wallet — beautiful interface, portfolio tracker built in",
    pros: ["Beautiful, simple design", "Works on desktop and mobile", "Built-in crypto swap", "Portfolio tracking dashboard", "24/7 customer support (unusual for a wallet)"],
    cons: ["Not open source (some security concern)", "Swap fees are higher than DEX alternatives", "Not ideal for advanced DeFi"],
    bestFor: "Absolute beginners who want a pretty, easy interface",
    avoid: "Security purists — closed source is a dealbreaker for some",
    url: "https://www.exodus.com",
  },
  {
    rank: 4, name: "Ledger Nano X", badge: "Best Hardware", badgeColor: "#7c3aed", score: "9/10",
    type: "Hardware Wallet", cost: "~£149", custodial: "❌ Non-custodial",
    tagline: "Once you hold significant amounts — move to hardware. This is the one.",
    pros: ["Private keys never leave the device", "Supports 5,500+ coins", "Bluetooth for mobile use", "Ledger Live is beginner-friendly", "Best protection against hacks"],
    cons: ["Costs money upfront", "2023 customer data breach (emails exposed)", "Slightly complex for day-1 beginners"],
    bestFor: "Anyone holding crypto worth more than they'd be comfortable losing on an exchange",
    avoid: "Day traders who need constant fast access — hardware wallets slow you down",
    url: "https://www.ledger.com",
  },
];

export default function BestCryptoWalletsBeginners() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 20px 80px" }}>
      <nav style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "32px", display: "flex", gap: "6px" }}>
        <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>Home</Link>
        <span>›</span><Link href="/resources" style={{ color: "var(--muted)", textDecoration: "none" }}>Resources</Link>
        <span>›</span><span style={{ color: "var(--fg)" }}>Best Crypto Wallets for Beginners</span>
      </nav>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "12px" }}>Updated July 2026 · By Joe Robertson</p>
      <h1 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>Best Crypto Wallets for Beginners UK 2026</h1>
      <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 12px", maxWidth: "720px" }}>
        Not your keys, not your coins. Leaving crypto on an exchange means the exchange controls your funds. Here's which wallet to use — and when to upgrade to hardware.
      </p>

      <div style={{ fontSize: "12px", color: "var(--muted)", padding: "12px 16px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "8px", marginBottom: "20px", lineHeight: 1.6 }}>
        <strong style={{ color: "var(--fg)" }}>Affiliate disclosure:</strong> Some links may be affiliate links. Rankings are based on merit only.
      </div>

      <div style={{ padding: "16px 20px", background: "var(--bg-tint-blue)", border: "1px solid oklch(40% 0.04 240 / 0.3)", borderRadius: "8px", marginBottom: "32px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--amber)", margin: "0 0 6px" }}>Custodial vs Non-Custodial — what it means</p>
        <p style={{ fontSize: "12px", color: "var(--muted)", margin: 0, lineHeight: 1.7 }}>
          <strong style={{ color: "var(--fg)" }}>Custodial wallets</strong> (exchanges like Coinbase) hold your keys. If they go bust, your funds may be at risk.<br />
          <strong style={{ color: "var(--fg)" }}>Non-custodial wallets</strong> give you full control via a seed phrase. You own the keys. You are responsible for keeping them safe.
        </p>
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
              {[{ label: "Type", value: w.type }, { label: "Cost", value: w.cost }, { label: "Custody", value: w.custodial }].map(s => (
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
              Visit {w.name} →
            </a>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: "16px", fontWeight: 800, color: "var(--fg)", margin: "0 0 12px" }}>Related Guides</h2>
      <div style={{ display: "grid", gap: "8px", marginBottom: "32px" }}>
        {[
          { label: "Best Hardware Wallets UK 2026 — Ledger vs Trezor", href: "/best-hardware-wallets-uk" },
          { label: "Self-Custody: Why You Should Own Your Crypto Keys", href: "/blog/self-custody-why-you-should-own-your-crypto-keys" },
          { label: "Best Crypto Exchanges UK 2026", href: "/best-crypto-exchanges-uk" },
          { label: "Scam Watch — Fake Wallet Scams", href: "/scam-watch" },
        ].map(l => (
          <Link key={l.href} href={l.href} style={{ fontSize: "13px", fontWeight: 600, color: "var(--fg)", textDecoration: "none", padding: "12px 16px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "8px", display: "block" }}>→ {l.label}</Link>
        ))}
      </div>
      <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, opacity: 0.6 }}>Educational only. Not financial advice. Crypto is high risk.</p>
    </main>
  );
}
