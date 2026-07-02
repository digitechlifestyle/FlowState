import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SidebarAds } from "@/components/SidebarAds";
import { ToolCard } from "@/components/ToolCard";
import { BrandHeroImage } from "@/components/BrandHeroImage";
import { BrandImageCard } from "@/components/BrandImageCard";
import { tools } from "@/lib/tools";
import { DownloadButton } from "@/components/DownloadButton";

export const metadata: Metadata = {
  title: "Resources & Tools — DigiTech Lifestyle",
  description: "Free downloads, checklists, and a curated directory of AI, automation, crypto, and digital lifestyle tools.",
  alternates: { canonical: "/resources" },
};

const DOWNLOADS = [
  {
    title: "AI Business Toolkit",
    text: "Stop starting from scratch. 30+ battle-tested prompts, SOPs, and templates covering content creation, newsletter planning, social repurposing, and lead magnet building. Used by solo operators who want to run a professional digital business without a team.",
    badge: "Free PDF",
    img: "/images/generated/ai_driven_business_interface_concept.png",
    alt: "AI Business Toolkit — prompts and SOPs for digital entrepreneurs",
    accent: "purple" as const,
    pdf: "/downloads/ai-business-toolkit.html",
    affiliates: [] as { label: string; href: string }[],
  },
  {
    title: "Automation Audit Checklist",
    text: "Most people waste hours on tasks a £0 tool could handle. This 8-step audit reveals exactly which parts of your business to automate first, with a scoring matrix to prioritise your wins and a 30-day action plan to get it done.",
    badge: "Free PDF Checklist",
    img: "/images/generated/futuristic_tech_automation_banner_design.png",
    alt: "Automation Audit Checklist — no-code workflow guide",
    accent: "amber" as const,
    pdf: "/downloads/automation-checklist.html",
    affiliates: [] as { label: string; href: string }[],
  },
  {
    title: "Automation Playbook",
    text: "The step-by-step guide to building no-code workflows across email, content, admin, and social — using tools like Zapier and Make. Real workflows, not theory. Includes 12 copy-paste automations you can deploy today.",
    badge: "Free Guide",
    img: "/images/generated/no_code_automation_playbook_design.png",
    alt: "Automation Playbook — no-code workflow guide for digital business",
    accent: "amber" as const,
    pdf: "/downloads/automation-playbook.html",
    affiliates: [] as { label: string; href: string }[],
  },
  {
    title: "Affiliate Launch Planner",
    text: "From zero to your first commission — in writing. Covers niche selection, picking the right affiliate programmes, mapping content clusters that actually rank, and building an email list that converts. The exact framework used to launch digitechlifestyle.com.",
    badge: "Free Guide",
    img: "/images/generated/affiliate_launch_planner_dashboard.png",
    alt: "Affiliate Launch Planner — niche research and content planning guide",
    accent: "purple" as const,
    pdf: "/downloads/affiliate-launch-planner.html",
    affiliates: [] as { label: string; href: string }[],
  },
  {
    title: "Digital Wealth Tracker",
    text: "Most people don't know what they actually own — or what it's costing them. This tracker gives you a clear picture: crypto wallets, exchange balances, affiliate income, subscriptions, and recurring costs. One dashboard, full financial clarity.",
    badge: "Free Tracker",
    img: "/images/generated/digital_wealth_tracker_interface.png",
    alt: "Digital Wealth Tracker — crypto and income tracker template",
    accent: "purple" as const,
    pdf: "/downloads/digital-wealth-tracker.html",
    affiliates: [] as { label: string; href: string }[],
  },
  {
    title: "Secure Your Crypto",
    text: "One hack and it's gone forever. This guide covers every layer of crypto security: wallet types, seed phrase storage, exchange hardening, SIM swap protection, and scam recognition. Includes a 4-week setup plan so you can lock everything down properly — not just hope for the best.",
    badge: "Free Security Guide",
    img: "/images/generated/secure_your_crypto_future.png",
    alt: "Secure Your Crypto — hardware wallet and security guide",
    accent: "amber" as const,
    pdf: "/downloads/secure-your-crypto.html",
    affiliates: [
      { label: "Ledger Hardware Wallet", href: "https://shop.ledger.com/?referral_code=FN50B8J0VZNVR" },
    ],
  },
  {
    title: "Trade Smarter",
    text: "AI is changing how people trade — but most beginners get burned before they learn the rules. This guide covers AI trading principles, the difference between bot types, how exchange APIs work, and how to manage risk properly. Includes a 30-day beginner plan to get started without blowing your account.",
    badge: "Free AI Trading Guide",
    img: "/images/generated/trade_smarter_with_crypto_exchange_tools.png",
    alt: "Trade Smarter — AI trading guide for beginners",
    accent: "amber" as const,
    pdf: "/downloads/trade-smarter-guide.html",
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
                <div key={d.title} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <img src={d.img} alt={d.alt} loading="lazy" style={{ width: "100%", height: "160px", objectFit: "cover", objectPosition: "center top", display: "block" }} />
                  <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                    <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: d.accent === "purple" ? "var(--purple)" : "var(--amber)" }}>{d.badge}</span>
                    <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: 0, lineHeight: 1.3 }}>{d.title}</h3>
                    <p style={{ fontSize: "12px", color: "var(--muted)", margin: 0, lineHeight: 1.5, flex: 1 }}>{d.text}</p>
                    <DownloadButton title={d.title} downloadUrl={d.pdf} accent={d.accent} />
                    {d.affiliates.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                        {d.affiliates.map((aff) => (
                          <a key={aff.label} href={aff.href} target="_blank" rel="noopener sponsored" style={{ fontSize: "10px", fontWeight: 700, padding: "4px 10px", borderRadius: "20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--muted)", textDecoration: "none" }}>
                            ↗ {aff.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
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
            background: "var(--bg-tint-amber)",
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
