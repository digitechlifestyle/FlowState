"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Blog",     href: "/blog",                                        external: false },
  { label: "Tools",    href: "/tool-directory",                              external: false },
  { label: "News",     href: "/news",                                        external: false },
  { label: "Reviews",  href: "/reviews",                                     external: false },
  { label: "Videos",   href: "https://www.youtube.com/@digitechlifestyle",   external: true  },
  { label: "About",    href: "/about",                                       external: false },
];

type Coin = { symbol: string; price: number; change: number };

const DEFAULT_COINS = ["BTC","ETH","USDT","BNB","SOL","XRP","USDC","ADA","AVAX","DOGE","TRX","DOT","LINK","MATIC","SHIB","UNI","ATOM","LTC","BCH","TON"];

function useTicker() {
  const [coins, setCoins] = useState<Coin[]>(
    DEFAULT_COINS.map((s) => ({ symbol: s, price: 0, change: 0 }))
  );

  useEffect(() => {
    const fetch_ = () =>
      fetch("/prices.php")
        .then((r) => r.json())
        .then((arr: Array<{ symbol: string; price: number; change: number }>) => {
          if (Array.isArray(arr)) setCoins(arr);
        })
        .catch(() => {});
    fetch_();
    const id = setInterval(fetch_, 60_000);
    return () => clearInterval(id);
  }, []);

  return coins;
}

function fmt(price: number, symbol: string) {
  if (!price) return "—";
  if (symbol === "XRP" || symbol === "ADA") return `$${price.toFixed(4)}`;
  if (symbol === "BNB" || symbol === "SOL") return `$${price.toFixed(2)}`;
  return `$${price.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

export function Header() {
  const coins = useTicker();

  return (
    <header className="site-header">
      {/* Crypto ticker — marquee */}
      <div className="ticker-bar" aria-hidden="true">
        <div className="ticker-track">
          {[...coins, ...coins].map((c, i) => (
            <div key={`${c.symbol}-${i}`} className="ticker-item">
              <span className="ticker-coin">{c.symbol}</span>
              <span className="ticker-price">{fmt(c.price, c.symbol)}</span>
              {c.change !== 0 && (
                <span className={c.change >= 0 ? "ticker-up" : "ticker-down"}>
                  {c.change >= 0 ? "+" : ""}{c.change.toFixed(2)}%
                </span>
              )}
              <span style={{ color: "var(--line)", marginLeft: 4 }}>·</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <div className="wrap">
        <div className="header-inner">
          <Link href="/" className="site-logo">
            <span className="logo-badge">DL</span>
            Digi<span className="logo-accent">Tech</span>Lifestyle
          </Link>

          <nav className="site-nav">
            {NAV.map((item) => (
              item.external
                ? <a key={item.href} href={item.href} target="_blank" rel="noopener">{item.label}</a>
                : <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
