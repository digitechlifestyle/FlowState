import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — DigiTech Lifestyle",
  description: "DigiTech Lifestyle's full affiliate disclosure. We earn commissions from some partner links — here's exactly how that works and how it affects our editorial independence.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "12px" }}>
        DigiTech Lifestyle
      </p>
      <h1 style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>
        Affiliate Disclosure
      </h1>
      <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.75, maxWidth: "640px", margin: "0 0 48px" }}>
        Transparency is important to us. This page explains exactly how affiliate relationships work on DigiTech Lifestyle, which companies we partner with, and how those relationships affect — and do not affect — our content.
      </p>

      <div style={{ padding: "20px 24px", background: "oklch(73% 0.17 78 / 0.1)", border: "2px solid oklch(73% 0.17 78 / 0.35)", borderRadius: "12px", marginBottom: "32px" }}>
        <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--fg)", margin: "0 0 6px" }}>Short version</p>
        <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
          Some links on DigiTech Lifestyle are affiliate links. If you click one and buy something or sign up, we may earn a small commission — at no extra cost to you. We only recommend products and services we genuinely think are worth your time. Commissions never change what we write.
        </p>
      </div>

      <div style={{ display: "grid", gap: "20px" }}>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>What Is Affiliate Marketing?</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
            Affiliate marketing is a common way for websites to earn revenue by referring readers to products and services. When we include an affiliate link and you click it, a cookie or tracking code tells the company that you arrived via DigiTech Lifestyle. If you then make a purchase or sign up within the tracking window, we receive a referral commission.
          </p>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "10px 0 0" }}>
            The price you pay is never higher because of an affiliate link. In many cases, affiliate links offer the same price as going directly to the company&apos;s website — and occasionally better deals through promotional codes.
          </p>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>Our Current Affiliate Partners</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 16px" }}>
            DigiTech Lifestyle currently has affiliate relationships with the following companies. This list is updated when new partnerships are added or removed.
          </p>

          <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--amber)", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 10px" }}>Crypto Exchanges</p>
          <div style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
            {[
              { name: "Coinbase UK", desc: "FCA-registered crypto exchange. Popular with UK beginners.", note: "Commission paid on qualifying signups." },
              { name: "Kraken", desc: "Established exchange with a strong UK presence and competitive fees.", note: "Commission paid on qualifying signups." },
              { name: "Binance", desc: "One of the world's largest exchanges by volume.", note: "Commission paid on qualifying signups and trading fees." },
              { name: "Bybit", desc: "Derivatives and spot trading platform.", note: "Commission paid on qualifying signups." },
            ].map((partner) => (
              <div key={partner.name} style={{ padding: "12px 14px", background: "var(--bg-tint-amber)", borderRadius: "8px", display: "grid", gap: "3px" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--fg)", margin: 0 }}>{partner.name}</p>
                <p style={{ fontSize: "12px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{partner.desc}</p>
                <p style={{ fontSize: "11px", color: "var(--amber)", margin: 0 }}>{partner.note}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--amber)", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 10px" }}>Hardware Wallets</p>
          <div style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
            {[
              { name: "Ledger", desc: "Industry-leading hardware wallet manufacturer. We recommend the Nano X and Flex models.", note: "Commission paid on device sales." },
              { name: "Trezor", desc: "Open-source hardware wallet with a strong security track record.", note: "Commission paid on device sales." },
            ].map((partner) => (
              <div key={partner.name} style={{ padding: "12px 14px", background: "var(--bg-tint-amber)", borderRadius: "8px", display: "grid", gap: "3px" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--fg)", margin: 0 }}>{partner.name}</p>
                <p style={{ fontSize: "12px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{partner.desc}</p>
                <p style={{ fontSize: "11px", color: "var(--amber)", margin: 0 }}>{partner.note}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--amber)", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 10px" }}>Crypto Tax & Portfolio Tools</p>
          <div style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
            {[
              { name: "Koinly", desc: "HMRC-compatible crypto tax reporting software. Widely used by UK investors.", note: "Commission paid on plan upgrades." },
            ].map((partner) => (
              <div key={partner.name} style={{ padding: "12px 14px", background: "var(--bg-tint-amber)", borderRadius: "8px", display: "grid", gap: "3px" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--fg)", margin: 0 }}>{partner.name}</p>
                <p style={{ fontSize: "12px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{partner.desc}</p>
                <p style={{ fontSize: "11px", color: "var(--amber)", margin: 0 }}>{partner.note}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--amber)", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 10px" }}>AI & Content Tools</p>
          <div style={{ display: "grid", gap: "8px" }}>
            {[
              { name: "Writesonic", desc: "AI writing platform for blogs, ads, and long-form content.", note: "Commission paid on plan upgrades." },
            ].map((partner) => (
              <div key={partner.name} style={{ padding: "12px 14px", background: "var(--bg-tint-amber)", borderRadius: "8px", display: "grid", gap: "3px" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--fg)", margin: 0 }}>{partner.name}</p>
                <p style={{ fontSize: "12px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{partner.desc}</p>
                <p style={{ fontSize: "11px", color: "var(--amber)", margin: 0 }}>{partner.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>How to Identify Affiliate Links</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
            Affiliate links appear throughout our reviews, comparison guides, and resource pages. You can identify them by:
          </p>
          <ul style={{ margin: "10px 0 0", paddingLeft: "20px", display: "grid", gap: "6px" }}>
            {[
              "A note at the top or bottom of the relevant page stating \"This page contains affiliate links\"",
              "The presence of tracking parameters in the URL (such as ref=, referral_code=, or similar)",
              "Any link to a partner company listed above on our reviews or comparison pages",
            ].map((item) => (
              <li key={item} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.65 }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "10px 0 0" }}>
            If you prefer not to use affiliate links, you can always navigate directly to any partner website — we will not earn a commission, but that is entirely your choice and we respect it.
          </p>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>Our Editorial Independence Pledge</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 12px" }}>
            Affiliate revenue helps keep DigiTech Lifestyle free to read. However, we have strict rules about how it does and does not affect our content:
          </p>
          <div style={{ display: "grid", gap: "10px" }}>
            {[
              { icon: "✅", label: "We do", text: "Research products and exchanges independently before recommending them. Write honest assessments including drawbacks and weaknesses. Remove affiliate links from products we no longer recommend." },
              { icon: "❌", label: "We never", text: "Accept payment for positive coverage or inflated ratings. Include affiliate links without disclosing them. Recommend products solely because they pay higher commissions. Receive products or services in exchange for positive reviews." },
            ].map((item) => (
              <div key={item.label} style={{ padding: "14px 16px", background: "var(--bg-tint-amber)", borderRadius: "8px", display: "flex", gap: "12px" }}>
                <span style={{ fontSize: "18px", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--fg)", margin: "0 0 4px" }}>{item.label}</p>
                  <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>UK Advertising Standards</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
            DigiTech Lifestyle operates in accordance with the UK&apos;s Advertising Standards Authority (ASA) guidelines and the Consumer Protection from Unfair Trading Regulations 2008. We are required by law to clearly identify commercial relationships. This disclosure page — and the in-page affiliate notices on relevant articles — fulfil that obligation.
          </p>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "10px 0 0" }}>
            If you ever believe a commercial relationship has not been disclosed appropriately on this website, please <Link href="/contact" style={{ color: "var(--amber)" }}>contact us</Link> and we will investigate and correct it promptly.
          </p>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>Financial Content Disclaimer</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
            DigiTech Lifestyle is not authorised by the Financial Conduct Authority (FCA). Nothing on this website — including product reviews, exchange comparisons, or cryptocurrency guides — constitutes financial advice, investment advice, or a recommendation to buy, sell, or hold any financial asset.
          </p>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "10px 0 0" }}>
            Cryptocurrency investments carry significant risk. The value of crypto assets can go up or down, and you could lose the money you invest. Always do your own research and, if in doubt, seek independent financial advice from a qualified, FCA-authorised adviser.
          </p>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>Questions or Concerns</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
            If you have any questions about our affiliate relationships, how a specific link works, or whether a particular piece of content is influenced by a commercial relationship, please get in touch. We are happy to explain our process.
          </p>
          <div style={{ marginTop: "14px" }}>
            <Link href="/contact" style={{ fontSize: "13px", fontWeight: 700, color: "var(--amber)", textDecoration: "none" }}>
              Contact DigiTech Lifestyle →
            </Link>
          </div>
        </div>

      </div>

      <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "40px", lineHeight: 1.6, opacity: 0.6 }}>
        Last updated: June 2026. This disclosure applies to all pages and articles on digitechlifestyle.com. DigiTech Lifestyle is an independent UK publication operated by Joe Robertson.
      </p>

    </main>
  );
}
