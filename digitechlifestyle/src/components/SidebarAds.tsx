"use client";

import { useEffect, useState } from "react";

// ─── AFFILIATE LINKS ──────────────────────────────────────────────────────────
// Replace each "#PLACEHOLDER" with your real affiliate URL when ready
const LINKS = {
  dcent:    "#AFFILIATE-DCENT",
  ledger:   "#AFFILIATE-LEDGER",
  trezor:   "#AFFILIATE-TREZOR",
  exodus:   "#AFFILIATE-EXODUS",
  coinbase: "#AFFILIATE-COINBASE",
  koinly:   "#AFFILIATE-KOINLY",
  kraken:   "#AFFILIATE-KRAKEN",
};
// ─────────────────────────────────────────────────────────────────────────────

const PARTNERS = [
  {
    id: "dcent",
    brand: "D'CENT Wallet",
    tagline: "Biometric Hardware Wallet",
    sub: "Fingerprint security. Self-custody. Supports 3000+ coins. UK-ready.",
    cta: "Get D'CENT",
    href: LINKS.dcent,
    bg: "linear-gradient(135deg,#0a0f1a 0%,#0f1e2e 100%)",
    accent: "#3b82f6",
    textAccent: "#60a5fa",
    shimmer: "rgba(59,130,246,0.15)",
    logo: "https://dcentwallet.com/favicon.ico",
  },
  {
    id: "ledger",
    brand: "Ledger",
    tagline: "Secure Your Crypto",
    sub: "The world's best hardware wallet. CC EAL5+ certified cold storage.",
    cta: "Shop Ledger",
    href: LINKS.ledger,
    bg: "linear-gradient(135deg,#0f0f1a 0%,#1a1a2e 100%)",
    accent: "#f59e0b",
    textAccent: "#fbbf24",
    shimmer: "rgba(245,158,11,0.15)",
    logo: "https://www.ledger.com/favicon.ico",
  },
  {
    id: "trezor",
    brand: "Trezor Safe 5",
    tagline: "Open-Source Security",
    sub: "EAL6+ secure chip. Fully auditable firmware. Shamir Backup included.",
    cta: "Get Trezor Safe 5",
    href: LINKS.trezor,
    bg: "linear-gradient(135deg,#0f1a0f 0%,#1a2e1a 100%)",
    accent: "#22c55e",
    textAccent: "#4ade80",
    shimmer: "rgba(34,197,94,0.15)",
    logo: "https://trezor.io/favicon.ico",
  },
  {
    id: "exodus",
    brand: "Exodus Wallet",
    tagline: "Your Crypto. Your Keys.",
    sub: "Free, non-custodial wallet. 50+ blockchains. Beautiful design. No sign-up.",
    cta: "Download Free",
    href: LINKS.exodus,
    bg: "linear-gradient(135deg,#1a0f2e 0%,#2e1a4a 100%)",
    accent: "#a855f7",
    textAccent: "#c084fc",
    shimmer: "rgba(168,85,247,0.15)",
    logo: "https://www.exodus.com/favicon.ico",
  },
  {
    id: "coinbase",
    brand: "Coinbase UK",
    tagline: "Buy Bitcoin in Minutes",
    sub: "FCA-registered. Instant GBP deposits. The UK's most trusted exchange.",
    cta: "Start on Coinbase",
    href: LINKS.coinbase,
    bg: "linear-gradient(135deg,#0a1628 0%,#0f2044 100%)",
    accent: "#0052ff",
    textAccent: "#4d8bff",
    shimmer: "rgba(0,82,255,0.2)",
    logo: "https://www.coinbase.com/favicon.ico",
  },
  {
    id: "koinly",
    brand: "Koinly",
    tagline: "HMRC Crypto Tax — Done",
    sub: "Auto-calculates CGT for UK self-assessment. Supports 700+ exchanges. From £49.",
    cta: "Try Free",
    href: LINKS.koinly,
    bg: "linear-gradient(135deg,#0a1a16 0%,#0f2820 100%)",
    accent: "#10b981",
    textAccent: "#34d399",
    shimmer: "rgba(16,185,129,0.15)",
    logo: "https://koinly.io/favicon.ico",
  },
  {
    id: "kraken",
    brand: "Kraken",
    tagline: "Advanced Crypto Trading",
    sub: "Low fees from 0.16%. Staking, futures, and spot. Trusted since 2011.",
    cta: "Trade on Kraken",
    href: LINKS.kraken,
    bg: "linear-gradient(135deg,#0f0a1a 0%,#1a0f2e 100%)",
    accent: "#7c3aed",
    textAccent: "#a78bfa",
    shimmer: "rgba(124,58,237,0.15)",
    logo: "https://www.kraken.com/favicon.ico",
  },
];

export function SidebarAds() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % PARTNERS.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const p = PARTNERS[current];

  return (
    <>
      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        className="dtl-partner"
        style={{ display: "block", textDecoration: "none" }}
      >
        <div
          style={{
            background: p.bg,
            border: `1px solid ${p.accent}44`,
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
            padding: "20px",
            transition: "filter 0.2s",
          }}
        >
          {/* Shimmer */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(105deg, transparent 30%, ${p.shimmer} 50%, transparent 70%)`,
              animation: "dtl-shimmer 3s infinite",
              pointerEvents: "none",
            }}
          />
          {/* Glow border */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "12px",
              boxShadow: `0 0 0 1px ${p.accent}44, 0 0 20px ${p.accent}22`,
              animation: "dtl-glowPulse 2.5s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Header: logo + brand name */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <img
                src={p.logo}
                alt={p.brand}
                width={28}
                height={28}
                style={{ borderRadius: "6px", flexShrink: 0 }}
              />
              <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: p.textAccent }}>
                {p.brand}
              </span>
              <span style={{ marginLeft: "auto", fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>
                Partner
              </span>
            </div>

            {/* Tagline */}
            <p style={{ fontSize: "18px", fontWeight: 800, lineHeight: 1.25, color: "#fff", marginBottom: "8px" }}>
              {p.tagline}
            </p>

            {/* Sub */}
            <p style={{ fontSize: "12px", lineHeight: 1.6, color: "rgba(255,255,255,0.55)", marginBottom: "16px" }}>
              {p.sub}
            </p>

            {/* CTA */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "9px 16px", borderRadius: "8px", background: p.accent, color: "#000", fontSize: "13px", fontWeight: 700 }}>
              {p.cta} <span>→</span>
            </div>

            {/* Disclosure */}
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", marginTop: "10px" }}>
              Partner link. We may earn a commission.
            </p>
          </div>
        </div>
      </a>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "10px" }}>
        {PARTNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Partner ${i + 1}`}
            style={{
              width: i === current ? "18px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === current ? PARTNERS[current].accent : "rgba(255,255,255,0.2)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>
    </>
  );
}
