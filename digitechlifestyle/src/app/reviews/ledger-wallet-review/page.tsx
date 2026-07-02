import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ledger Wallet Review 2026 — Is It Worth It for UK Users?",
  description: "Honest Ledger hardware wallet review for UK users. Nano S Plus vs Ledger Flex — security, setup, supported coins, and whether it's worth buying in 2026.",
  alternates: { canonical: "/reviews/ledger-wallet-review" },
  openGraph: {
    title: "Ledger Wallet Review 2026 — Is It Worth It for UK Users?",
    description: "Full Ledger review: security, setup, coin support, and UK pricing. Is Ledger still the best hardware wallet in 2026?",
  },
};

const MODELS = [
  {
    name: "Ledger Nano S Plus",
    badge: "Best Value",
    badgeColor: "#22c55e",
    price: "£79",
    description: "The entry-level Ledger. Compact USB-C device with a small display, secure element chip, and support for 5,500+ coins. No wireless — connect via USB cable. Best for most UK buyers who want solid cold storage without the premium price.",
    pros: ["Secure element chip (CC EAL5+)", "5,500+ supported coins", "USB-C connection", "Compact, pocket-sized", "Backed by Ledger Live app"],
    cons: ["Small display — hard to read long addresses", "No wireless or Bluetooth", "No touchscreen"],
    score: "8.5/10",
  },
  {
    name: "Ledger Flex",
    badge: "Best for Ease of Use",
    badgeColor: "#6366f1",
    price: "£249",
    description: "Ledger's mid-range device with a large touchscreen and Bluetooth. Much easier to verify transactions on screen. Worth it if you hold significant amounts and want a better UX — not necessary for occasional users.",
    pros: ["Large E Ink touchscreen", "Bluetooth + USB-C", "Easier address verification", "Secure element chip", "Looks and feels premium"],
    cons: ["High price tag", "Bluetooth connection divides opinion on security", "Heavier than Nano S Plus"],
    score: "8/10",
  },
];

const FAQ = [
  {
    q: "Is Ledger safe to use in 2026?",
    a: "Yes — the hardware itself remains secure. Ledger had a data breach in 2020 that exposed customer email and postal addresses (not funds). The private keys never left devices. Since then Ledger has improved security practices. The Recover service (optional, subscription-based seed backup) is controversial but opt-in — you do not need to use it.",
  },
  {
    q: "What is the difference between Ledger Nano S Plus and Ledger Flex?",
    a: "The Nano S Plus (£79) is a USB-C device with a small display — solid and affordable. The Ledger Flex (£249) has a large touchscreen and Bluetooth, making it easier to verify long wallet addresses. For most people, the Nano S Plus is enough.",
  },
  {
    q: "Can I use Ledger with Coinbase or Kraken?",
    a: "Yes. Ledger works with most major exchanges via the Ledger Live app or MetaMask. You keep the private keys on your device — the exchange never controls your coins. This is the point of a hardware wallet.",
  },
  {
    q: "How many coins does Ledger support?",
    a: "5,500+ cryptocurrencies across Bitcoin, Ethereum, Solana, Cardano, Polkadot, and thousands of ERC-20 tokens. Check ledger.com for a full list — support expands regularly.",
  },
  {
    q: "Do I need a Ledger if I only hold a small amount of crypto?",
    a: "Not necessarily. For amounts under £500, exchange storage with 2FA enabled is reasonable. Once you hold more — especially if self-custody matters to you — a hardware wallet is worth the cost. The Nano S Plus at £79 is cheaper than losing your holdings.",
  },
  {
    q: "Where can I buy a Ledger in the UK?",
    a: "Buy directly from Ledger's official website. Avoid secondhand Ledger devices from eBay or Amazon marketplace — a tampered device could steal your funds. Only buy from ledger.com or authorised resellers.",
  },
];

export default function LedgerWalletReviewPage() {
  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 12px" }}>
        HARDWARE WALLET REVIEW · Updated June 2026
      </p>
      <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>
        Ledger Wallet Review 2026
      </h1>
      <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 16px" }}>
        Still the most popular hardware wallet on the market. Here's whether it's the right choice for UK crypto holders in 2026 — honest pros, cons, and which model to buy.
      </p>

      {/* Verdict box */}
      <div style={{ padding: "20px 24px", background: "var(--bg-tint-green-strong)", border: "1px solid oklch(55% 0.2 140 / 0.4)", borderRadius: "12px", marginBottom: "24px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#22c55e", margin: "0 0 8px" }}>Quick verdict</p>
        <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.7 }}>
          Ledger remains the go-to hardware wallet for most UK users. The <strong style={{ color: "var(--fg)" }}>Nano S Plus at £79</strong> is the best value. The Flex is excellent but expensive. Buy direct from Ledger only — never secondhand.
        </p>
      </div>

      {/* Disclaimer */}
      <div style={{ padding: "14px 18px", background: "var(--bg-tint-amber)", border: "1px solid oklch(73% 0.17 78 / 0.2)", borderRadius: "10px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "36px" }}>
        <strong style={{ color: "var(--fg)" }}>Disclaimer:</strong> Educational content only — not financial advice. Some links are affiliate links. We may earn a commission if you buy via our link at no extra cost to you. This never changes our recommendations.
      </div>

      {/* Affiliate CTA */}
      <div style={{ padding: "24px 28px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "14px", marginBottom: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <p style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 4px" }}>Ledger Hardware Wallets</p>
          <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>From £79 · Official store · 5,500+ coins supported</p>
        </div>
        <a href="https://shop.ledger.com/?referral_code=FN50B8J0VZNVR" target="_blank" rel="noopener sponsored"
          style={{ display: "inline-block", padding: "12px 24px", background: "var(--amber)", color: "oklch(8% 0.015 60)", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none", whiteSpace: "nowrap" }}>
          Shop Ledger →
        </a>
      </div>

      {/* Model cards */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 20px" }}>Which Ledger Model?</h2>
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
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
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

      {/* Security section */}
      <div style={{ padding: "24px 28px", background: "var(--bg-tint-purple)", border: "1px solid oklch(55% 0.15 280 / 0.3)", borderRadius: "12px", marginBottom: "36px" }}>
        <h2 style={{ fontSize: "17px", fontWeight: 800, color: "var(--fg)", margin: "0 0 14px" }}>🔐 How Ledger Security Works</h2>
        <div style={{ display: "grid", gap: "12px" }}>
          {[
            { label: "Secure Element chip", desc: "CC EAL5+ certified chip stores private keys in hardware — same tech used in passports and bank cards. Cannot be extracted by software attacks." },
            { label: "Air-gapped keys", desc: "Private keys never leave the device. Transactions are signed inside the chip and only the signed transaction is sent out." },
            { label: "PIN protection", desc: "3 incorrect PIN attempts wipes the device. Recovery requires your 24-word seed phrase." },
            { label: "24-word seed phrase", desc: "Write this down on paper, store offline. Anyone with your seed phrase owns your crypto. Never store it digitally." },
            { label: "Open-source firmware", desc: "Ledger's firmware is partially open source. The secure element chip has proprietary elements — a trade-off vs fully open-source Trezor." },
          ].map((item) => (
            <div key={item.label} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "12px", fontSize: "13px" }}>
              <span style={{ fontWeight: 700, color: "var(--fg)" }}>{item.label}</span>
              <span style={{ color: "var(--muted)", lineHeight: 1.6 }}>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recover controversy */}
      <div style={{ padding: "20px 24px", background: "var(--bg-tint-red)", border: "1px solid oklch(55% 0.15 25 / 0.3)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 10px" }}>⚠️ About Ledger Recover</h3>
        <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
          Ledger Recover is an optional paid service (£7.99/month) that backs up your seed phrase in encrypted shards with three custodians. It caused controversy in 2023 because it revealed Ledger devices <em>can</em> extract and transmit seed phrases — contradicting earlier claims. You <strong style={{ color: "var(--fg)" }}>do not need to use Recover</strong>. It is opt-in and requires ID verification. If you don't sign up, your seed phrase stays on your device only. This doesn't change the core security of the device for non-Recover users.
        </p>
      </div>

      {/* Internal links */}
      <div style={{ padding: "20px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 14px" }}>Related guides</h3>
        <div style={{ display: "grid", gap: "8px" }}>
          {[
            { label: "Best Crypto Exchanges for UK Beginners 2026", href: "/reviews/best-crypto-exchanges-uk" },
            { label: "Trezor vs Ledger — Which Hardware Wallet?", href: "/reviews/trezor-wallet-review" },
            { label: "UK Crypto Tax Guide — What HMRC Expects", href: "/blog?category=Crypto" },
            { label: "Best Crypto Tax Tools for UK Users", href: "/reviews/best-crypto-exchanges-uk" },
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
        <p style={{ fontSize: "18px", fontWeight: 900, color: "var(--fg)", margin: "0 0 8px" }}>Ready to secure your crypto?</p>
        <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 18px" }}>Buy direct from Ledger only. Never buy secondhand.</p>
        <a href="https://shop.ledger.com/?referral_code=FN50B8J0VZNVR" target="_blank" rel="noopener sponsored"
          style={{ display: "inline-block", padding: "14px 32px", background: "var(--amber)", color: "oklch(8% 0.015 60)", borderRadius: "8px", fontWeight: 800, fontSize: "15px", textDecoration: "none" }}>
          Shop Ledger →
        </a>
        <p style={{ fontSize: "10px", color: "var(--muted)", marginTop: "10px" }}>Affiliate link — we may earn a commission at no extra cost to you</p>
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
