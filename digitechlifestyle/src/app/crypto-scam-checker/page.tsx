import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crypto Scam Checker UK — Is This Platform Legit? | DigiTech Lifestyle",
  description: "Check if a crypto platform, exchange, or investment site is a scam. UK red flag checklist, FCA register link, and real scam examples investigated by DigiTech Lifestyle.",
  alternates: { canonical: "/crypto-scam-checker" },
  openGraph: {
    title: "Crypto Scam Checker UK — Is This Platform Legit?",
    description: "Use our UK crypto scam checklist to verify any platform before investing. FCA register, red flags, and real scam investigations.",
    url: "https://digitechlifestyle.com/crypto-scam-checker",
    type: "website", siteName: "DigiTech Lifestyle",
  },
};

const RED_FLAGS = [
  { icon: "🚨", flag: "Guaranteed returns", detail: "No legitimate investment guarantees profits. Fixed daily/weekly returns of 1–5% are a hallmark of Ponzi schemes." },
  { icon: "🚨", flag: "Not on the FCA register", detail: "Any firm offering financial services in the UK must be FCA authorised. Check every platform at register.fca.org.uk before depositing." },
  { icon: "🚨", flag: "Withdrawal fees or taxes to release funds", detail: "Legitimate platforms don't charge fees to release your own money. If you're asked to pay to withdraw, the money doesn't exist." },
  { icon: "🚨", flag: "Anonymous or unverifiable team", detail: "Check LinkedIn, company registration, and news. If the founders don't exist or have fake credentials — run." },
  { icon: "🚨", flag: "Pressure to recruit friends", detail: "Pyramid structures require recruitment to survive. If a crypto platform pays you to bring in others, it's almost certainly a scam." },
  { icon: "🚨", flag: "Celebrity or influencer endorsement in ads", detail: "Martin Lewis, Elon Musk, and major crypto influencers are constantly impersonated in AI deepfake video ads. These are always scams." },
  { icon: "🚨", flag: "Too-good-to-be-true returns", detail: "Bitcoin averages ~60% per year in bull markets. Any platform promising 10–40% per month is mathematically impossible without Ponzi mechanics." },
  { icon: "🚨", flag: "Domain registered recently", detail: "Check the domain registration date on whois.domaintools.com. Scam sites often appear days or weeks before going live." },
  { icon: "🚨", flag: "No company registration number (UK)", detail: "All UK companies must be registered at Companies House. Search companieshouse.gov.uk for any UK crypto firm." },
  { icon: "🚨", flag: "Requests your seed phrase or private key", detail: "No legitimate service, support agent, or wallet app will ever ask for your seed phrase. Giving it away means instant total loss." },
];

const INVESTIGATED = [
  { name: "Lyndora", verdict: "SCAM", color: "#dc2626", href: "/blog/is-lyndora-a-scam-what-uk-investors-need-to-know-about-this-suspicious-site", summary: "Fake investment platform promising fixed returns. Multiple red flags including unverifiable team and blocked withdrawals." },
  { name: "Aurum Foundation", verdict: "SCAM", color: "#dc2626", href: "/blog/is-aurum-foundation-a-scam-the-warning-signs-uk-investors-must-know", summary: "Promoted via social media with celebrity imagery. No FCA registration, fake team profiles, and victim reports of lost funds." },
  { name: "Robincapitaltrader.com", verdict: "HIGH RISK", color: "#d97706", href: "/blog/nan0%9f%9a%a8-robincapitaltrader-com-high-risk-investment-platform-with-multiple-red-flags", summary: "Multiple red flags including aggressive social media promotion, no verifiable company details, and guaranteed return claims." },
];

const CHECKLIST = [
  { step: "1", action: "Search the FCA register", url: "https://register.fca.org.uk", label: "Check FCA Register", detail: "Enter the company name. If it's not there, do not invest." },
  { step: "2", action: "Search Companies House", url: "https://find-and-update.company-information.service.gov.uk", label: "Search Companies House", detail: "Verify the company is registered and active in the UK." },
  { step: "3", action: "Check the FCA Warning List", url: "https://www.fca.org.uk/consumers/warning-list-unauthorised-firms", label: "FCA Warning List", detail: "The FCA maintains a list of known scam firms. Check it first." },
  { step: "4", action: "Search '[company name] scam Reddit'", url: null, label: null, detail: "Reddit, Trustpilot, and Twitter often have victim reports before official action." },
  { step: "5", action: "Check domain age on WHOIS", url: "https://whois.domaintools.com", label: "WHOIS Lookup", detail: "New domains (under 6 months) for 'investment platforms' are a major red flag." },
  { step: "6", action: "Report fraud to Action Fraud", url: "https://www.actionfraud.police.uk", label: "Action Fraud", detail: "If you've been scammed, report immediately. Every report helps build the case." },
];

export default function CryptoScamChecker() {
  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 20px 80px" }}>
      <nav style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "32px", display: "flex", gap: "6px" }}>
        <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>Home</Link>
        <span>›</span><Link href="/scam-watch" style={{ color: "var(--muted)", textDecoration: "none" }}>Scam Watch</Link>
        <span>›</span><span style={{ color: "var(--fg)" }}>Crypto Scam Checker</span>
      </nav>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f87171", marginBottom: "12px" }}>🔒 DigiTech Lifestyle — Scam Checker</p>
      <h1 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>Crypto Scam Checker UK</h1>
      <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 32px", maxWidth: "700px" }}>
        Not sure if a platform is legitimate? Use this checklist before depositing a single pound. UK crypto scams cost investors over £300 million per year — most were avoidable.
      </p>

      {/* Step-by-step check */}
      <h2 style={{ fontSize: "18px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>Step-by-Step Verification Checklist</h2>
      <div style={{ display: "grid", gap: "12px", marginBottom: "48px" }}>
        {CHECKLIST.map((c) => (
          <div key={c.step} style={{ padding: "18px 20px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "10px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "var(--amber)", color: "oklch(8% 0.015 60)", fontWeight: 900, fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>{c.step}</div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--fg)", margin: "0 0 4px" }}>{c.action}</p>
              <p style={{ fontSize: "12px", color: "var(--muted)", margin: "0 0 8px", lineHeight: 1.55 }}>{c.detail}</p>
              {c.url && c.label && (
                <a href={c.url} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "12px", fontWeight: 700, color: "var(--amber)", textDecoration: "none" }}>
                  → {c.label} ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Red flags */}
      <h2 style={{ fontSize: "18px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>10 Red Flags That Scream Scam</h2>
      <div style={{ display: "grid", gap: "10px", marginBottom: "48px" }}>
        {RED_FLAGS.map((r) => (
          <div key={r.flag} style={{ padding: "14px 18px", background: "var(--bg-tint-red)", border: "1px solid oklch(55% 0.15 25 / 0.25)", borderRadius: "10px" }}>
            <p style={{ fontSize: "13px", fontWeight: 800, color: "#f87171", margin: "0 0 4px" }}>{r.icon} {r.flag}</p>
            <p style={{ fontSize: "12px", color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{r.detail}</p>
          </div>
        ))}
      </div>

      {/* Investigated scams */}
      <h2 style={{ fontSize: "18px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>Platforms We've Investigated</h2>
      <div style={{ display: "grid", gap: "12px", marginBottom: "40px" }}>
        {INVESTIGATED.map((s) => (
          <Link key={s.name} href={s.href} style={{ textDecoration: "none", padding: "16px 20px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "10px", display: "block" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "6px" }}>
              <span style={{ fontSize: "14px", fontWeight: 800, color: "var(--fg)" }}>{s.name}</span>
              <span style={{ fontSize: "10px", fontWeight: 800, padding: "2px 8px", borderRadius: "4px", background: s.color, color: "#fff" }}>{s.verdict}</span>
            </div>
            <p style={{ fontSize: "12px", color: "var(--muted)", margin: 0, lineHeight: 1.55 }}>{s.summary}</p>
            <p style={{ fontSize: "11px", color: "var(--amber)", margin: "6px 0 0", fontWeight: 700 }}>Read full investigation →</p>
          </Link>
        ))}
      </div>

      {/* Emergency box */}
      <div style={{ padding: "22px 24px", background: "var(--bg-tint-red-strong)", border: "2px solid oklch(55% 0.15 25 / 0.5)", borderRadius: "12px", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "16px", fontWeight: 800, color: "#f87171", margin: "0 0 10px" }}>Think you've been scammed? Act now.</h2>
        <div style={{ display: "grid", gap: "8px" }}>
          {[
            { label: "Call Action Fraud: 0300 123 2040", href: "https://www.actionfraud.police.uk" },
            { label: "Report to the FCA", href: "https://www.fca.org.uk/consumers/report-scam-us" },
            { label: "Contact your bank immediately to block further payments", href: null },
            { label: "Citizens Advice consumer helpline: 0808 223 1133", href: "https://www.citizensadvice.org.uk" },
          ].map((item) => (
            <div key={item.label} style={{ fontSize: "13px", color: "var(--muted)" }}>
              {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--amber)", fontWeight: 700 }}>→ {item.label}</a> : `→ ${item.label}`}
            </div>
          ))}
        </div>
      </div>

      <h2 style={{ fontSize: "16px", fontWeight: 800, color: "var(--fg)", margin: "0 0 12px" }}>More Scam Resources</h2>
      <div style={{ display: "grid", gap: "8px", marginBottom: "32px" }}>
        {[
          { label: "Full Scam Watch Guide — All 7 Scam Types Explained", href: "/scam-watch" },
          { label: "Crypto and AI Scams 2026 — Deepfakes and Fraud", href: "/blog/crypto-ai-scams-2026-fake-calls-deepfakes-social-media" },
          { label: "Best Crypto Exchanges UK — Safe and FCA Registered", href: "/best-crypto-exchanges-uk" },
        ].map(l => (
          <Link key={l.href} href={l.href} style={{ fontSize: "13px", fontWeight: 600, color: "var(--fg)", textDecoration: "none", padding: "12px 16px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "8px", display: "block" }}>→ {l.label}</Link>
        ))}
      </div>
      <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, opacity: 0.6 }}>Educational only. Not legal or financial advice. If you've been a victim of fraud, contact Action Fraud and your bank immediately.</p>
    </main>
  );
}
