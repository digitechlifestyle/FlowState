import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trezor Wallet Review 2026 — Is It Better Than Ledger for UK Users?",
  description: "Honest Trezor hardware wallet review for UK users. Model One vs Trezor Safe 3 — open-source security, setup, coin support, and how it compares to Ledger in 2026.",
  alternates: { canonical: "/reviews/trezor-wallet-review" },
  openGraph: {
    title: "Trezor Wallet Review 2026 — Is It Better Than Ledger?",
    description: "Full Trezor review: open-source security, UK pricing, supported coins, and Trezor vs Ledger comparison for UK crypto holders in 2026.",
  },
};

const MODELS = [
  {
    name: "Trezor Model One",
    badge: "Budget Pick",
    badgeColor: "#22c55e",
    price: "£49",
    description: "The original hardware wallet. Simple two-button interface, micro-USB, and fully open-source firmware. Supports Bitcoin, Ethereum, and thousands of tokens. Does not support Cardano (ADA) or Ripple (XRP) natively — check compatibility before buying.",
    pros: ["Cheapest reputable hardware wallet", "Fully open-source firmware", "Established 10+ year track record", "Simple interface — hard to make mistakes"],
    cons: ["No USB-C (micro-USB)", "No secure element chip", "Does not support ADA or XRP natively", "Older display — very small screen"],
    score: "7.5/10",
  },
  {
    name: "Trezor Safe 3",
    badge: "Best Trezor",
    badgeColor: "#6366f1",
    price: "£79",
    description: "Trezor's current best-value device. Adds a secure element chip (EAL6+) to the open-source foundation — addressing the one major criticism of earlier Trezor models. USB-C, wider coin support, and a better screen than the Model One.",
    pros: ["Secure element chip (EAL6+)", "Fully open-source firmware", "USB-C connection", "Supports wider coin range than Model One", "Good value at £79"],
    cons: ["Still no touchscreen", "Slightly less polished app than Ledger Live", "Newer model — less community track record than Ledger"],
    score: "8.5/10",
  },
];

const FAQ = [
  {
    q: "Is Trezor safer than Ledger?",
    a: "Both are secure for most users. The key difference: Trezor firmware is fully open-source (auditable by anyone); Ledger's secure element chip has some proprietary code. Trezor Safe 3 added a secure element chip in 2023, narrowing the hardware gap. Ledger had a customer data breach in 2020 (addresses exposed, not funds). Neither has lost user funds through a hardware exploit. Most security experts consider both acceptable — the bigger risk is user error, not device vulnerabilities.",
  },
  {
    q: "Does Trezor work with UK exchanges like Coinbase and Kraken?",
    a: "Yes. Trezor works with most major exchanges via Trezor Suite (their desktop app) or MetaMask for Ethereum tokens. You keep private keys on the device — the exchange never controls your coins.",
  },
  {
    q: "What coins does Trezor support?",
    a: "Trezor supports Bitcoin, Ethereum, Litecoin, Bitcoin Cash, and thousands of ERC-20 tokens natively. The Model One does not support Cardano (ADA) or Ripple (XRP) — the Safe 3 has broader support. Check trezor.io/coins for the full list.",
  },
  {
    q: "Is Trezor open source?",
    a: "Yes — Trezor's firmware is fully open source and available on GitHub. Anyone can audit the code. This is Trezor's main security advantage over Ledger, which has some proprietary code in its secure element chip.",
  },
  {
    q: "Should I buy Ledger or Trezor?",
    a: "For most UK users, both work well. Choose Trezor if you value fully open-source firmware and transparency. Choose Ledger if you want the widest coin support and a more polished app experience (Ledger Live is generally more feature-rich than Trezor Suite). The Trezor Safe 3 and Ledger Nano S Plus are similarly priced at around £79 — either is a solid choice.",
  },
  {
    q: "Where should I buy a Trezor in the UK?",
    a: "Buy from trezor.io directly. Avoid secondhand devices — a tampered Trezor can steal funds. Trezor also ships to the UK with standard delivery times.",
  },
];

export default function TrezorWalletReviewPage() {
  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 12px" }}>
        HARDWARE WALLET REVIEW · Updated June 2026
      </p>
      <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>
        Trezor Wallet Review 2026
      </h1>
      <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 16px" }}>
        Trezor invented the hardware wallet category in 2014 and still makes some of the most trusted cold storage devices in crypto. Here's the honest picture for UK users in 2026.
      </p>

      {/* Verdict */}
      <div style={{ padding: "20px 24px", background: "var(--bg-tint-green-strong)", border: "1px solid oklch(55% 0.2 140 / 0.4)", borderRadius: "12px", marginBottom: "24px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#22c55e", margin: "0 0 8px" }}>Quick verdict</p>
        <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.7 }}>
          Trezor Safe 3 at £79 is the pick — secure element chip plus fully open-source firmware. If budget is tight, the Model One at £49 still works for Bitcoin and Ethereum holders. Both are solid. Neither should be bought secondhand.
        </p>
      </div>

      {/* Disclaimer */}
      <div style={{ padding: "14px 18px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "10px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "36px" }}>
        <strong style={{ color: "var(--fg)" }}>Disclaimer:</strong> Educational content only — not financial advice. Some links are affiliate links. We may earn a commission at no extra cost to you. This never changes our recommendations.
      </div>

      {/* CTA */}
      <div style={{ padding: "24px 28px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "14px", marginBottom: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <p style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 4px" }}>Trezor Hardware Wallets</p>
          <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>From £49 · Open source firmware · Buy from trezor.io only</p>
        </div>
        <a href="https://trezor.io/" target="_blank" rel="noopener"
          style={{ display: "inline-block", padding: "12px 24px", background: "var(--amber)", color: "oklch(8% 0.015 60)", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none", whiteSpace: "nowrap" }}>
          Shop Trezor →
        </a>
      </div>

      {/* Model cards */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 20px" }}>Which Trezor Model?</h2>
      <div style={{ display: "grid", gap: "24px", marginBottom: "48px" }}>
        {MODELS.map((m) => (
          <div key={m.name} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "14px", padding: "24px 28px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "12px", flexWrap: "wrap" }}>
              <div>
                <h3 style={{ fontSize: "19px", fontWeight: 900, color: "var(--fg)", margin: "0 0 6px" }}>{m.name}</h3>
                <span style={{ fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", background: m.badgeColor + "22", color: m.badgeColor, border: `1px solid ${m.badgeColor}44` }}>{m.badge}</span>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "22px", fontWeight: 900, color: "var(--amber)", display: "block" }}>{m.score}</span>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--fg)" }}>{m.price}</span>
              </div>
            </div>
            <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 16px" }}>{m.description}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "#22c55e", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Pros</p>
                <ul style={{ margin: 0, padding: "0 0 0 16px", display: "grid", gap: "4px" }}>
                  {m.pros.map((p) => <li key={p} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{p}</li>)}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "#f87171", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Cons</p>
                <ul style={{ margin: 0, padding: "0 0 0 16px", display: "grid", gap: "4px" }}>
                  {m.cons.map((c) => <li key={c} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{c}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trezor vs Ledger */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>Trezor vs Ledger — Key Differences</h2>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", overflow: "hidden", marginBottom: "40px" }}>
        {[
          { feature: "Firmware", trezor: "Fully open source", ledger: "Partially proprietary (secure element)" },
          { feature: "Secure element", trezor: "Safe 3: EAL6+ / Model One: none", ledger: "EAL5+ on all current models" },
          { feature: "Best price", trezor: "£49 (Model One)", ledger: "£79 (Nano S Plus)" },
          { feature: "Coin support", trezor: "Wide — check trezor.io/coins", ledger: "5,500+ including ADA, XRP" },
          { feature: "App quality", trezor: "Trezor Suite (good)", ledger: "Ledger Live (more features)" },
          { feature: "Data breach history", trezor: "Minor phishing incidents (no device exploits)", ledger: "2020 customer data breach (no funds lost)" },
        ].map((row, i) => (
          <div key={row.feature} style={{ display: "grid", gridTemplateColumns: "160px 1fr 1fr", gap: "12px", padding: "13px 18px", borderBottom: i < 5 ? "1px solid var(--line)" : "none", fontSize: "13px" }}>
            <span style={{ fontWeight: 700, color: "var(--fg)" }}>{row.feature}</span>
            <span style={{ color: "var(--muted)" }}>{row.trezor}</span>
            <span style={{ color: "var(--muted)" }}>{row.ledger}</span>
          </div>
        ))}
      </div>

      {/* Internal links */}
      <div style={{ padding: "20px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 14px" }}>Related guides</h3>
        <div style={{ display: "grid", gap: "8px" }}>
          {[
            { label: "Ledger Wallet Review 2026", href: "/reviews/ledger-wallet-review" },
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

      {/* Bottom CTA */}
      <div style={{ padding: "28px", background: "var(--bg-tint-amber-strong)", border: "1px solid oklch(73% 0.17 78 / 0.25)", borderRadius: "14px", textAlign: "center" }}>
        <p style={{ fontSize: "18px", fontWeight: 900, color: "var(--fg)", margin: "0 0 8px" }}>Keep your crypto off exchanges</p>
        <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 18px" }}>Buy from trezor.io only — never buy secondhand.</p>
        <a href="https://trezor.io/" target="_blank" rel="noopener"
          style={{ display: "inline-block", padding: "14px 32px", background: "var(--amber)", color: "oklch(8% 0.015 60)", borderRadius: "8px", fontWeight: 800, fontSize: "15px", textDecoration: "none" }}>
          Shop Trezor →
        </a>
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
