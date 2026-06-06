"use client";

import { useEffect, useState } from "react";

const PARTNERS = [
  {
    id: "dcent",
    brand: "D'CENT Wallet",
    initial: "D",
    tagline: "Biometric Hardware Wallet",
    sub: "Fingerprint security. Self-custody. 3000+ coins. UK-ready.",
    cta: "Get D'CENT →",
    url: "https://dcentwallet.com",
    bg: "linear-gradient(135deg,#0a0f1a 0%,#0f1e2e 100%)",
    accent: "#3b82f6",
    text: "#60a5fa",
  },
  {
    id: "ledger",
    brand: "Ledger",
    initial: "L",
    tagline: "Secure Your Crypto",
    sub: "World's best hardware wallet. CC EAL5+ certified cold storage.",
    cta: "Shop Ledger →",
    url: "https://shop.ledger.com/?referral_code=FN50B8J0VZNVR",
    bg: "linear-gradient(135deg,#0f0f1a 0%,#1a1a2e 100%)",
    accent: "#f59e0b",
    text: "#fbbf24",
  },
  {
    id: "trezor",
    brand: "Trezor Safe 5",
    initial: "T",
    tagline: "Open-Source Security",
    sub: "EAL6+ secure chip. Fully auditable. Shamir Backup included.",
    cta: "Get Trezor →",
    url: "https://trezor.io",
    bg: "linear-gradient(135deg,#0f1a0f 0%,#1a2e1a 100%)",
    accent: "#22c55e",
    text: "#4ade80",
  },
  {
    id: "exodus",
    brand: "Exodus Wallet",
    initial: "E",
    tagline: "Your Crypto. Your Keys.",
    sub: "Free non-custodial wallet. 50+ blockchains. No sign-up.",
    cta: "Download Free →",
    url: "https://www.exodus.com",
    bg: "linear-gradient(135deg,#1a0f2e 0%,#2e1a4a 100%)",
    accent: "#a855f7",
    text: "#c084fc",
  },
  {
    id: "coinbase",
    brand: "Coinbase UK",
    initial: "C",
    tagline: "Buy Bitcoin in Minutes",
    sub: "FCA-registered. Instant GBP deposits. Best for beginners.",
    cta: "Start on Coinbase →",
    url: "https://www.coinbase.com/join/jrobertson_1A8sYA",
    bg: "linear-gradient(135deg,#0a1628 0%,#0f2044 100%)",
    accent: "#0052ff",
    text: "#4d8bff",
  },
  {
    id: "kraken",
    brand: "Kraken",
    initial: "K",
    tagline: "Advanced Crypto Trading",
    sub: "Fees from 0.16%. Staking, futures and spot. Since 2011.",
    cta: "Trade on Kraken →",
    url: "https://kraken.app.link/PzxrgWP7Qzb",
    bg: "linear-gradient(135deg,#0f0a1a 0%,#1a0f2e 100%)",
    accent: "#7c3aed",
    text: "#a78bfa",
  },
  {
    id: "cryptocom",
    brand: "Crypto.com",
    initial: "C",
    tagline: "Crypto App for Everyone",
    sub: "250+ coins. Metal Visa card. 5% cashback. FCA-registered.",
    cta: "Get Crypto.com →",
    url: "https://crypto.com/app/hwa7p9m8yh",
    bg: "linear-gradient(135deg,#001133 0%,#002766 100%)",
    accent: "#1199fa",
    text: "#4db8ff",
  },
  {
    id: "bybit",
    brand: "Bybit",
    initial: "B",
    tagline: "Trade Crypto Like a Pro",
    sub: "Top-3 global exchange. Copy trading. 0.1% fees.",
    cta: "Join Bybit →",
    url: "https://www.bybit.com/invite?ref=2WKAA",
    bg: "linear-gradient(135deg,#0d0d0d 0%,#1a1400 100%)",
    accent: "#f7a600",
    text: "#ffc933",
  },
  {
    id: "binance",
    brand: "Binance",
    initial: "B",
    tagline: "World's Largest Exchange",
    sub: "Lowest fees. 350+ coins. Earn, trade and stake.",
    cta: "Join Binance →",
    url: "https://www.binance.com/en/activity/referral-entry/CPA?ref=CPA_00JDHMDHBA",
    bg: "linear-gradient(135deg,#0d0a00 0%,#1a1400 100%)",
    accent: "#f3ba2f",
    text: "#ffd060",
  },
  {
    id: "bitpanda",
    brand: "Bitpanda",
    initial: "B",
    tagline: "Crypto, Stocks and ETFs",
    sub: "EU-regulated. Buy from one app. From €1.",
    cta: "Try Bitpanda →",
    url: "https://www.bitpanda.com/?ref=881962803509321830",
    bg: "linear-gradient(135deg,#001a2e 0%,#002244 100%)",
    accent: "#05b0ff",
    text: "#4dcfff",
  },
  {
    id: "swan",
    brand: "Swan Bitcoin",
    initial: "S",
    tagline: "Stack Sats Automatically",
    sub: "Bitcoin-only DCA. Auto-buy daily or weekly.",
    cta: "Start Stacking →",
    url: "https://www.swanbitcoin.com/digicoindigitalassetsinvestor",
    bg: "linear-gradient(135deg,#1a0800 0%,#2e1400 100%)",
    accent: "#f7931a",
    text: "#ffb347",
  },
  {
    id: "koinly",
    brand: "Koinly",
    initial: "K",
    tagline: "HMRC Crypto Tax — Done",
    sub: "Auto CGT reports. 700+ exchanges. From £49.",
    cta: "Try Free →",
    url: "https://koinly.io",
    bg: "linear-gradient(135deg,#0a1a16 0%,#0f2820 100%)",
    accent: "#10b981",
    text: "#34d399",
  },
  {
    id: "tokentax",
    brand: "TokenTax",
    initial: "T",
    tagline: "Crypto Taxes Made Easy",
    sub: "HMRC, IRS and 20+ tax authorities. Auto-synced.",
    cta: "Calculate Tax →",
    url: "https://tokentax.co?via=digitech",
    bg: "linear-gradient(135deg,#001a18 0%,#002e28 100%)",
    accent: "#0ea5e9",
    text: "#38bdf8",
  },
  {
    id: "ledn",
    brand: "Ledn",
    initial: "L",
    tagline: "Earn Interest on Bitcoin",
    sub: "Up to 6.1% APY on BTC and USDC. No lockup.",
    cta: "Earn with Ledn →",
    url: "https://platform.ledn.io/join/a11e95377e48315b1ec0acccbd095014",
    bg: "linear-gradient(135deg,#001233 0%,#001d4d 100%)",
    accent: "#3b82f6",
    text: "#93c5fd",
  },
  {
    id: "ecos",
    brand: "ECOS Mining",
    initial: "E",
    tagline: "Mine Bitcoin — No Hardware",
    sub: "Cloud mining from $49. No electricity bills.",
    cta: "Start Mining →",
    url: "https://ecos.finance/en/cloud-mining?ref=ABxYnIJs",
    bg: "linear-gradient(135deg,#001a0a 0%,#002e12 100%)",
    accent: "#16a34a",
    text: "#4ade80",
  },
  {
    id: "uphold",
    brand: "Uphold",
    initial: "U",
    tagline: "Multi-Asset Trading",
    sub: "Crypto, metals, equities and forex. 250+ assets.",
    cta: "Open Uphold →",
    url: "https://uphold.sjv.io/jr0kOM",
    bg: "linear-gradient(135deg,#001a1a 0%,#002e2e 100%)",
    accent: "#00c4b4",
    text: "#34d3c4",
  },
  {
    id: "hostinger",
    brand: "Hostinger",
    initial: "H",
    tagline: "Fast Web Hosting — £1.99/mo",
    sub: "Free domain and SSL. 99.9% uptime guaranteed.",
    cta: "Get Hosting →",
    url: "https://hostinger.co.uk?REFERRALCODE=1JOE975",
    bg: "linear-gradient(135deg,#1a0a2e 0%,#2e1050 100%)",
    accent: "#673de6",
    text: "#a78bfa",
  },
  {
    id: "writesonic",
    brand: "Writesonic",
    initial: "W",
    tagline: "AI Writing That Works",
    sub: "SEO articles, ads and chatbots in seconds.",
    cta: "Try Free →",
    url: "https://writesonic.com/botsonic?fpr=joe52",
    bg: "linear-gradient(135deg,#0d0a2e 0%,#1a1050 100%)",
    accent: "#8b5cf6",
    text: "#c4b5fd",
  },
  {
    id: "artsi",
    brand: "Artsi.ai",
    initial: "A",
    tagline: "AI Art for Your Brand",
    sub: "Generate stunning visuals in seconds. No skills needed.",
    cta: "Create with Artsi →",
    url: "https://artsi.ai/ref/digitechlifestyle/",
    bg: "linear-gradient(135deg,#1a0a1a 0%,#2e0f2e 100%)",
    accent: "#ec4899",
    text: "#f9a8d4",
  },
  {
    id: "shipfast",
    brand: "ShipFast",
    initial: "S",
    tagline: "Launch Your SaaS in Days",
    sub: "Next.js boilerplate with auth and payments.",
    cta: "Get ShipFast →",
    url: "https://shipfa.st/?via=digitech",
    bg: "linear-gradient(135deg,#0a0e2e 0%,#0f1550 100%)",
    accent: "#4f46e5",
    text: "#818cf8",
  },
  {
    id: "freewebguys",
    brand: "Free Website Guys",
    initial: "F",
    tagline: "Free Business Website",
    sub: "Professional sites built and hosted free. UK-based.",
    cta: "Get Your Free Site →",
    url: "https://thefreewebsiteguys.com/?js=360012",
    bg: "linear-gradient(135deg,#001a0d 0%,#002e18 100%)",
    accent: "#059669",
    text: "#34d399",
  },
  {
    id: "bitrue",
    brand: "Bitrue",
    initial: "B",
    tagline: "Earn More on Your Crypto",
    sub: "High-yield staking. XRP specialist. 700+ coins.",
    cta: "Start on Bitrue →",
    url: "https://www.bitrue.com/referral/landing?cn=600000&inviteCode=ZLZQZW",
    bg: "linear-gradient(135deg,#001a3a 0%,#002d66 100%)",
    accent: "#1a6fc4",
    text: "#4d9de0",
  },
];

export function SidebarAds() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % PARTNERS.length), 7000);
    return () => clearInterval(t);
  }, []);

  const p = PARTNERS[idx];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {/* Banner card */}
      <div
        style={{
          background: p.bg,
          borderRadius: "12px",
          padding: "20px",
          cursor: "pointer",
          border: `1px solid ${p.accent}33`,
        }}
        onClick={() => window.open(p.url, "_blank", "noopener,noreferrer")}
      >
        {/* Brand header */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
          <div style={{
            width: "32px", height: "32px", borderRadius: "8px",
            background: p.accent, color: "#000",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "14px", fontWeight: 900, flexShrink: 0,
          }}>
            {p.initial}
          </div>
          <span style={{ fontSize: "13px", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: p.text }}>
            {p.brand}
          </span>
        </div>

        {/* Tagline */}
        <p style={{ fontSize: "17px", fontWeight: 800, color: "#fff", lineHeight: 1.3, margin: "0 0 8px" }}>
          {p.tagline}
        </p>

        {/* Description */}
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: "0 0 16px" }}>
          {p.sub}
        </p>

        {/* CTA */}
        <div style={{
          display: "inline-block",
          background: p.accent,
          color: "#000",
          fontSize: "13px",
          fontWeight: 700,
          padding: "9px 16px",
          borderRadius: "8px",
        }}>
          {p.cta}
        </div>

        <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", margin: "12px 0 0" }}>
          Disclosure: DigiTech may earn a commission.
        </p>
      </div>

      {/* Dot navigation */}
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        {PARTNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            style={{
              width: i === idx ? "18px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === idx ? PARTNERS[idx].accent : "rgba(255,255,255,0.15)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
