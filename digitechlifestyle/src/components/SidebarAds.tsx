"use client";

import { useState } from "react";
import Link from "next/link";

type Partner = {
  id: string;
  brand: string;
  initial: string;
  tagline: string;
  accent: string;
  url: string;
};

type Category = {
  label: string;
  partners: Partner[];
};

const CATEGORIES: Category[] = [
  {
    label: "🏦 Crypto Exchanges",
    partners: [
      { id: "coinbase",    brand: "Coinbase UK",          initial: "C", tagline: "Buy Bitcoin in Minutes",       accent: "#0052ff", url: "https://www.coinbase.com/join/jrobertson_1A8sYA" },
      { id: "kraken",      brand: "Kraken",               initial: "K", tagline: "Advanced Crypto Trading",      accent: "#7c3aed", url: "https://kraken.app.link/PzxrgWP7Qzb" },
      { id: "cryptocom",   brand: "Crypto.com",           initial: "C", tagline: "Crypto App for Everyone",      accent: "#1199fa", url: "https://crypto.com/app/hwa7p9m8yh" },
      { id: "bybit",       brand: "Bybit",                initial: "B", tagline: "Trade Crypto Like a Pro",      accent: "#f7a600", url: "https://www.bybit.com/invite?ref=2WKAA" },
      { id: "binance",     brand: "Binance",              initial: "B", tagline: "World's Largest Exchange",     accent: "#f3ba2f", url: "https://www.binance.com/en/activity/referral-entry/CPA?ref=CPA_00JDHMDHBA" },
      { id: "bitpanda",    brand: "Bitpanda",             initial: "B", tagline: "Crypto, Stocks and ETFs",      accent: "#05b0ff", url: "https://www.bitpanda.com/?ref=881962803509321830" },
      { id: "bitrue",      brand: "Bitrue",               initial: "B", tagline: "Earn More on Your Crypto",     accent: "#1a6fc4", url: "https://www.bitrue.com/referral/landing?cn=600000&inviteCode=ZLZQZW" },
      { id: "uphold",      brand: "Uphold",               initial: "U", tagline: "Multi-Asset Trading",          accent: "#00c4b4", url: "https://uphold.sjv.io/jr0kOM" },
    ],
  },
  {
    label: "🔐 Crypto Wallets",
    partners: [
      { id: "dcent",       brand: "D'CENT Wallet",        initial: "D", tagline: "Biometric Hardware Wallet",    accent: "#3b82f6", url: "https://dcentwallet.com" },
      { id: "ledger",      brand: "Ledger",               initial: "L", tagline: "Secure Your Crypto",           accent: "#f59e0b", url: "https://shop.ledger.com/?referral_code=FN50B8J0VZNVR" },
      { id: "trezor",      brand: "Trezor Safe 5",        initial: "T", tagline: "Open-Source Security",         accent: "#22c55e", url: "https://trezor.io" },
      { id: "exodus",      brand: "Exodus Wallet",        initial: "E", tagline: "Your Crypto. Your Keys.",      accent: "#a855f7", url: "https://www.exodus.com" },
    ],
  },
  {
    label: "₿ Bitcoin",
    partners: [
      { id: "swan",        brand: "Swan Bitcoin",         initial: "S", tagline: "Stack Sats Automatically",     accent: "#f7931a", url: "https://www.swanbitcoin.com/digicoindigitalassetsinvestor" },
    ],
  },
  {
    label: "📊 Crypto Tax",
    partners: [
      { id: "koinly",      brand: "Koinly",               initial: "K", tagline: "HMRC Crypto Tax — Done",       accent: "#10b981", url: "https://koinly.io" },
      { id: "tokentax",    brand: "TokenTax",             initial: "T", tagline: "Crypto Taxes Made Easy",       accent: "#0ea5e9", url: "https://tokentax.co?via=digitech" },
    ],
  },
  {
    label: "💰 Earn & Mine",
    partners: [
      { id: "ledn",        brand: "Ledn",                 initial: "L", tagline: "Earn Interest on Bitcoin",     accent: "#3b82f6", url: "https://platform.ledn.io/join/a11e95377e48315b1ec0acccbd095014" },
      { id: "ecos",        brand: "ECOS Mining",          initial: "E", tagline: "Mine Bitcoin — No Hardware",   accent: "#16a34a", url: "https://ecos.finance/en/cloud-mining?ref=ABxYnIJs" },
    ],
  },
  {
    label: "🤖 AI & Tools",
    partners: [
      { id: "writesonic",  brand: "Writesonic",           initial: "W", tagline: "AI Writing That Works",        accent: "#8b5cf6", url: "https://writesonic.com/botsonic?fpr=joe52" },
      { id: "artsi",       brand: "Artsi.ai",             initial: "A", tagline: "AI Art for Your Brand",        accent: "#ec4899", url: "https://artsi.ai/ref/digitechlifestyle/" },
      { id: "shipfast",    brand: "ShipFast",             initial: "S", tagline: "Launch Your SaaS in Days",     accent: "#4f46e5", url: "https://shipfa.st/?via=digitech" },
    ],
  },
  {
    label: "🌐 Web & Hosting",
    partners: [
      { id: "hostinger",   brand: "Hostinger",            initial: "H", tagline: "Fast Web Hosting — £1.99/mo", accent: "#673de6", url: "https://hostinger.co.uk?REFERRALCODE=1JOE975" },
      { id: "freewebguys", brand: "Free Website Guys",    initial: "F", tagline: "Free Business Website",        accent: "#059669", url: "https://thefreewebsiteguys.com/?js=360012" },
    ],
  },
];

const TOTAL = CATEGORIES.reduce((sum, cat) => sum + cat.partners.length, 0);

export function SidebarAds() {
  const [open, setOpen] = useState(true);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          width: "100%",
          background: "var(--bg-card)",
          border: "1px solid var(--line)",
          borderRadius: "10px",
          padding: "12px 16px",
          color: "var(--muted)",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        Partner Picks ({TOTAL}) ↓
      </button>
    );
  }

  return (
    <div>
      {/* Promo image card — Automation Playbook */}
      <Link
        href="/resources"
        style={{ display: "block", textDecoration: "none", marginBottom: "12px" }}
      >
        <div style={{
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
          background: "oklch(5% 0.01 270)",
          animation: "dtl-glow-amber 3.5s ease-in-out infinite",
        }}>
          <img
            src="/images/automation-playbook.png"
            alt="DigiTech Lifestyle Automation Playbook — free no-code workflow guide"
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              maxHeight: "160px",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 40%, oklch(4% 0.01 60 / 0.85) 100%)",
          }} />
          <div style={{
            position: "absolute",
            bottom: "12px",
            left: "12px",
            right: "12px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}>
            <div>
              <p style={{ margin: 0, fontSize: "11px", fontWeight: 700, color: "var(--amber)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Free Resource</p>
              <p style={{ margin: "2px 0 0", fontSize: "13px", fontWeight: 800, color: "var(--fg)", fontFamily: "'Sora', sans-serif" }}>Automation Playbook</p>
            </div>
            <span style={{
              background: "var(--amber)",
              color: "oklch(8% 0.015 60)",
              fontWeight: 800,
              fontSize: "10px",
              padding: "5px 10px",
              borderRadius: "6px",
              whiteSpace: "nowrap",
            }}>Get free ↗</span>
          </div>
        </div>
      </Link>

    <div style={{
      background: "var(--bg-card)",
      border: "1px solid var(--line)",
      borderRadius: "12px",
      overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 14px",
        borderBottom: "1px solid var(--line)",
      }}>
        <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>
          Partner Picks
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "11px", color: "var(--muted)", opacity: 0.5 }}>
            {TOTAL} partners
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close partner picks"
            style={{
              background: "none",
              border: "none",
              color: "var(--muted)",
              fontSize: "16px",
              lineHeight: 1,
              cursor: "pointer",
              padding: "2px 4px",
              opacity: 0.6,
            }}
          >✕</button>
        </div>
      </div>

      {/* Partner list with category separators */}
      <div style={{ maxHeight: "520px", overflowY: "auto" }}>
        {CATEGORIES.map((cat, ci) => (
          <div key={cat.label}>
            {/* Category separator */}
            <div style={{
              padding: "6px 14px 4px",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--accent)",
              background: "rgba(255,255,255,0.02)",
              borderTop: ci > 0 ? "1px solid var(--line)" : undefined,
            }}>
              {cat.label}
            </div>
            {cat.partners.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "9px 14px",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  textDecoration: "none",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{
                  width: "28px", height: "28px", borderRadius: "6px",
                  background: p.accent,
                  color: "#000",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "12px", fontWeight: 900, flexShrink: 0,
                }}>
                  {p.initial}
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--fg)", margin: 0, letterSpacing: "0.02em" }}>
                    {p.brand}
                  </p>
                  <p style={{ fontSize: "11px", color: "var(--muted)", margin: 0, opacity: 0.7, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {p.tagline}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <p style={{ fontSize: "10px", color: "var(--muted)", opacity: 0.4, padding: "8px 14px", margin: 0 }}>
        Affiliate links — DigiTech may earn a commission.
      </p>
    </div>
    </div>
  );
}
