import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SidebarAds } from "@/components/SidebarAds";
import { ToolCard } from "@/components/ToolCard";
import { BrandHeroImage } from "@/components/BrandHeroImage";
import { BrandImageCard } from "@/components/BrandImageCard";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Resources & Tools — DigiTech Lifestyle",
  description: "Free downloads, checklists, and a curated directory of AI, automation, crypto, and digital lifestyle tools.",
  alternates: { canonical: "/resources" },
};

const DOWNLOADS = [
  {
    title: "AI Business Toolkit",
    text: "30+ prompts, SOPs & workflow templates. Content engine, newsletter planner, social repurposing, lead magnet builder, and more.",
    badge: "Free PDF",
    img: "/images/generated/ai_driven_business_interface_concept.png",
    alt: "AI Business Toolkit — prompts and SOPs for digital entrepreneurs",
    accent: "purple" as const,
    pdf: "/newsletter?resource=ai-business-toolkit",
    affiliates: [] as { label: string; href: string }[],
  },
  {
    title: "Automation Audit Checklist",
    text: "8-step audit to map repetitive tasks and find no-code automation wins. Includes scoring matrix and 30-day plan.",
    badge: "Free PDF Checklist",
    img: "/images/generated/futuristic_tech_automation_banner_design.png",
    alt: "Automation Audit Checklist — no-code workflow guide",
    accent: "amber" as const,
    pdf: "/newsletter?resource=automation-checklist",
    affiliates: [] as { label: string; href: string }[],
  },
  {
    title: "Automation Playbook",
    text: "Build no-code workflows for email, content, admin, and social. Save time and scale your digital business.",
    badge: "Free Guide",
    img: "/images/generated/no_code_automation_playbook_design.png",
    alt: "Automation Playbook — no-code workflow guide for digital business",
    accent: "amber" as const,
    pdf: "/newsletter?resource=automation-playbook",
    affiliates: [] as { label: string; href: string }[],
  },
  {
    title: "Affiliate Launch Planner",
    text: "Choose a niche, pick affiliate offers, map content clusters, and set up email capture — step by step.",
    badge: "Free Guide",
    img: "/images/generated/affiliate_launch_planner_dashboard.png",
    alt: "Affiliate Launch Planner — niche research and content planning guide",
    accent: "purple" as const,
    pdf: "/newsletter?resource=affiliate-launch-planner",
    affiliates: [] as { label: string; href: string }[],
  },
  {
    title: "Digital Wealth Tracker",
    text: "Track crypto wallets, subscriptions, assets, affiliate income, and recurring costs — all in one place.",
    badge: "Free Tracker",
    img: "/images/generated/digital_wealth_tracker_interface.png",
    alt: "Digital Wealth Tracker — crypto and income tracker template",
    accent: "purple" as const,
    pdf: "/newsletter?resource=digital-wealth-tracker",
    affiliates: [] as { label: string; href: string }[],
  },
  {
    title: "Secure Your Crypto",
    text: "Wallet types, seed phrase protection, exchange hardening, scam prevention, and a 4-week security setup plan.",
    badge: "Free Security Guide",
    img: "/images/generated/secure_your_crypto_future.png",
    alt: "Secure Your Crypto — hardware wallet and security guide",
    accent: "amber" as const,
    pdf: "/newsletter?resource=secure-your-crypto",
    affiliates: [
      { label: "Ledger Hardware Wallet", href: "https://shop.ledger.com/?referral_code=FN50B8J0VZNVR" },
    ],
  },
  {
    title: "Trade Smarter",
    text: "AI trading principles, bot types, exchange API basics, risk control, and a 30-day beginner setup plan.",
    badge: "Free AI Trading Guide",
    img: "/images/generated/trade_smarter_with_crypto_exchange_tools.png",
    alt: "Trade Smarter — AI trading guide for beginners",
    accent: "amber" as const,
    pdf: "/newsletter?resource=trade-smarter",
    affiliates: [
      { label: "Coinbase UK", href: "https://www.coinbase.com/join/jrobertson_1A8sYA" },
      { label: "Kraken", href: "https://kraken.app.link/PzxrgWP7Qzb" },
      { label: "Binance", href: "https://www.binance.com/en/activity/referral-entry/CPA?ref=CPA_00JDHMDHBA" },
      { label: "Bybit", href: "https://www.bybit.com/invite?ref=2WKAA" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main className="container" style={{ padding: "32px 0 64px" }}>

      {/* ── Full-width hero banner ── */}
      <div style={{ marginBottom: "48px" }}>
        <BrandHeroImage
          variant="resource-hub"
          heading="Discover smarter crypto & AI resources"
          subheading="Guides, checklists, tools, and playbooks to help you grow faster."
          ctaLabel="Explore the Resource Hub"
          ctaHref="#downloads"
          secondaryLabel="Browse tools"
          secondaryHref="#tool-directory"
        />
      </div>

      {/* ── Two-column layout ── */}
      <div style={{
        display: "grid",
        gap: "32px",
        gridTemplateColumns: "1fr",
      }}
        className="resources-grid"
      >
        <div>

          {/* ── Free Downloads ── */}
          <section id="downloads">
            <h2 style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "var(--fg)",
              margin: "0 0 6px",
              fontFamily: "'Sora', sans-serif",
            }}>
              Free Downloads
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "13px", margin: "0 0 20px" }}>
              Seven free guides — enter your email once to download any guide instantly.
            </p>
            <div style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}>
              {DOWNLOADS.map((d) => (
                <div key={d.title} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <BrandImageCard
                    src={d.img}
                    alt={d.alt}
                    size="thumb"
                    title={d.title}
                    description={d.text}
                    badge={d.badge}
                    ctaLabel="Get it free →"
                    ctaHref={d.pdf}
                    accentColor={d.accent}
                  />
                  {d.affiliates.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", padding: "0 2px" }}>
                      {d.affiliates.map((aff) => (
                        <a
                          key={aff.label}
                          href={aff.href}
                          target="_blank"
                          rel="noopener sponsored"
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            padding: "4px 10px",
                            borderRadius: "20px",
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "var(--muted)",
                            textDecoration: "none",
                            letterSpacing: "0.05em",
                            whiteSpace: "nowrap",
                          }}
                        >
                          ↗ {aff.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── Automation Playbook Feature ── */}
          <section style={{ marginTop: "48px" }}>
            <BrandHeroImage
              variant="automation"
              heading="Automation Playbook"
              subheading="Build simple workflows, save time, and scale your digital business."
              ctaLabel="Get the free playbook"
              ctaHref="/newsletter"
              secondaryLabel="Learn about automation"
              secondaryHref="/automation"
            />
          </section>

          {/* ── Affiliate disclosure ── */}
          <div style={{
            marginTop: "32px",
            padding: "14px 18px",
            background: "oklch(14% 0.02 78 / 0.4)",
            border: "1px solid oklch(73% 0.17 78 / 0.2)",
            borderRadius: "10px",
            fontSize: "12px",
            color: "var(--muted)",
            lineHeight: 1.6,
          }}>
            <strong style={{ color: "var(--fg)" }}>Affiliate disclosure:</strong> Some links on this page are affiliate links. DigiTech Lifestyle may earn a small commission if you make a purchase — at no extra cost to you. We only list tools and products we genuinely recommend.
          </div>

          {/* ── Tool Directory ── */}
          <section id="tool-directory" style={{ marginTop: "48px" }}>
            <h2 style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "var(--fg)",
              margin: "0 0 6px",
              fontFamily: "'Sora', sans-serif",
            }}>
              Tool Directory
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "13px", margin: "0 0 20px" }}>
              Curated AI, automation, crypto, and creator tools — reviewed and recommended.
            </p>
            <div style={{
              display: "grid",
              gap: "12px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}>
              {tools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section id="faq" style={{ marginTop: "56px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 6px", fontFamily: "'Sora', sans-serif" }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "13px", margin: "0 0 20px" }}>
              Common questions about crypto safety, AI tools, and getting started.
            </p>
            <div style={{ display: "grid", gap: "12px" }}>
              {[
                {
                  q: "Is crypto safe to invest in?",
                  a: "Crypto is a high-risk, high-volatility asset class. Only invest what you can afford to lose. Use regulated UK exchanges (Coinbase, Kraken), enable 2FA, and store large amounts in a hardware wallet like a Ledger. Our free security guide walks you through the full setup.",
                },
                {
                  q: "What is the safest way to store crypto?",
                  a: "A hardware wallet (cold storage) is the safest option for significant holdings. Your private keys never touch the internet. For smaller amounts used regularly, a reputable exchange with 2FA and withdrawal whitelisting is acceptable.",
                },
                {
                  q: "Which AI tools are actually free in 2026?",
                  a: "ChatGPT (free tier), Google Gemini, Microsoft Copilot, Perplexity, Claude, and Canva AI are all free to use at a meaningful level. Our free AI tools list covers 7 of the best with no subscription needed.",
                },
                {
                  q: "Do I need to pay tax on crypto in the UK?",
                  a: "Yes — HMRC treats crypto as a capital asset. You pay Capital Gains Tax on profits above the annual allowance when you sell, swap, or spend crypto. Always keep records of every transaction. Consult a tax professional for your specific situation.",
                },
                {
                  q: "How do I spot a crypto scam?",
                  a: "Red flags: guaranteed returns, pressure to act fast, requests to send crypto first, unofficial Telegram groups, unsolicited DMs. No legitimate exchange or wallet will ever ask for your seed phrase. If in doubt, don't.",
                },
                {
                  q: "What is DeFi and is it safe?",
                  a: "DeFi (Decentralised Finance) uses smart contracts on blockchains like Ethereum to offer lending, trading, and yield without a central authority. It carries significant risks — smart contract bugs, rug pulls, and token volatility. Research thoroughly before using any DeFi protocol.",
                },
              ].map((item) => (
                <details key={item.q} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "10px", padding: "0" }}>
                  <summary style={{ padding: "16px 18px", fontSize: "14px", fontWeight: 700, color: "var(--fg)", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {item.q}
                    <span style={{ fontSize: "18px", color: "var(--muted)", flexShrink: 0, marginLeft: "12px" }}>＋</span>
                  </summary>
                  <div style={{ padding: "0 18px 16px", fontSize: "13px", color: "var(--muted)", lineHeight: 1.65, borderTop: "1px solid var(--line)", marginTop: "-1px", paddingTop: "14px" }}>
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

        </div>

        {/* ── Sidebar ── */}
        <aside style={{
          display: "grid",
          gap: "16px",
          alignContent: "start",
          position: "sticky",
          top: "80px",
        }}>
          <SidebarAds />
          <NewsletterForm compact />
        </aside>

      </div>

      {/* Responsive grid breakpoint */}
      <style>{`
        @media (min-width: 1024px) {
          .resources-grid {
            grid-template-columns: 1fr 360px !important;
          }
        }
      `}</style>
    </main>
  );
}
