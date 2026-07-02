import type { Metadata } from "next";
import Link from "next/link";
import { getArticles } from "@/lib/articles";
import type { Article } from "@/lib/articles";
import { SidebarAds } from "@/components/SidebarAds";

export const metadata: Metadata = {
  title: "Reviews — Crypto Exchanges, AI Tools & Wallets",
  description: "Honest, independent reviews of crypto exchanges, AI tools, hardware wallets, and digital services — UK-focused, no hype.",
  alternates: { canonical: "/reviews" },
};

const REVIEW_CATEGORIES = [
  { label: "All Reviews",     href: "/reviews" },
  { label: "Exchanges",       href: "/reviews?type=exchange" },
  { label: "AI Tools",        href: "/reviews?type=ai" },
  { label: "Wallets",         href: "/reviews?type=wallet" },
];

const FEATURED_REVIEWS = [
  {
    category: "Crypto Exchanges",
    items: [
      { name: "Best Crypto Exchanges UK 2026", badge: "Comparison", href: "/reviews/best-crypto-exchanges-uk", desc: "Coinbase vs Kraken vs Binance vs Bybit — fees, safety, FCA status" },
      { name: "Coinbase UK Review", badge: "9/10", href: "/reviews/coinbase-uk-review", desc: "Best for beginners — GBP deposits, FCA registered, simple app" },
      { name: "Kraken UK Review", badge: "9/10", href: "/reviews/kraken-uk-review", desc: "Best value — lowest fees, staking, never been hacked" },
    ],
  },
  {
    category: "Hardware Wallets",
    items: [
      { name: "Best Hardware Wallets UK 2026", badge: "Comparison", href: "/reviews/best-hardware-wallets-uk", desc: "Ledger vs Trezor — which to buy, full comparison" },
      { name: "Ledger Wallet Review 2026", badge: "8.5/10", href: "/reviews/ledger-wallet-review", desc: "Nano S Plus vs Ledger Flex — secure element, 5,500+ coins" },
      { name: "Trezor Wallet Review 2026", badge: "8.5/10", href: "/reviews/trezor-wallet-review", desc: "Model One vs Safe 3 — open-source firmware, EAL6+ security" },
    ],
  },
  {
    category: "Crypto Tax Tools",
    items: [
      { name: "Best Crypto Tax Tools UK 2026", badge: "Comparison", href: "/reviews/best-crypto-tax-tools-uk", desc: "Koinly vs Recap vs CoinTracker — HMRC CGT comparison" },
      { name: "Koinly UK Review 2026", badge: "8.5/10", href: "/reviews/koinly-uk-review", desc: "Best for HMRC — Section 104 pooling, 700+ exchange integrations" },
    ],
  },
  {
    category: "AI Tools",
    items: [
      { name: "Best AI Tools for Bloggers 2026", badge: "Comparison", href: "/reviews/best-ai-tools-bloggers", desc: "Writesonic, ChatGPT, Surfer SEO — ranked for content creators" },
      { name: "Best AI Tools for Small Businesses UK 2026", badge: "Comparison", href: "/reviews/best-ai-tools-small-business", desc: "Save time and cut costs — honest picks for UK SMEs" },
      { name: "Writesonic Review 2026", badge: "7.5/10", href: "/reviews/writesonic-review", desc: "AI writing for blogs and marketing — honest verdict" },
    ],
  },
  {
    category: "Beginner Guides",
    items: [
      { name: "Best Crypto Resources for UK Beginners 2026", badge: "Guide", href: "/reviews/best-crypto-resources-beginners", desc: "Where to start, how to stay safe, HMRC tax — everything in one place" },
    ],
  },
  {
    category: "UK Comparison Guides 2026",
    items: [
      { name: "Best Crypto Exchanges UK 2026", badge: "Updated", href: "/best-crypto-exchanges-uk", desc: "Kraken vs Coinbase vs Binance — fees, FCA status, GBP deposits compared" },
      { name: "Best Hardware Wallets UK 2026", badge: "Updated", href: "/best-hardware-wallets-uk", desc: "Ledger Nano X vs Trezor Model T — which protects your coins best" },
      { name: "Best Crypto Tax Software UK", badge: "Updated", href: "/best-crypto-tax-software-uk", desc: "Koinly vs Recap vs CoinTracker — HMRC-compatible self-assessment tools" },
      { name: "Best Crypto Wallets for Beginners", badge: "New", href: "/best-crypto-wallets-beginners", desc: "MetaMask vs Trust Wallet vs Exodus — best starter wallets explained" },
      { name: "Best AI Tools for Bloggers 2026", badge: "Updated", href: "/best-ai-tools-bloggers", desc: "Claude vs ChatGPT vs Surfer SEO — what actually moves the needle" },
      { name: "Best Web Hosting for a Crypto Blog", badge: "New", href: "/best-web-hosting-crypto-blog", desc: "Hostinger vs SiteGround vs Cloudways for UK bloggers" },
      { name: "Crypto Scam Checker", badge: "New", href: "/crypto-scam-checker", desc: "Is this platform legit? UK verification checklist and red flags" },
      { name: "Beginner Crypto Toolkit UK 2026", badge: "New", href: "/beginner-crypto-toolkit", desc: "Everything you need to start safely — exchange, wallet, tax, security" },
    ],
  },
];

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function ReviewCard({ article }: { article: Article }) {
  return (
    <Link href={`/blog/${article.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div style={{
        background: "var(--bg-card)",
        border: "1px solid var(--line)",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "border-color 0.15s",
      }}>
        {article.image && (
          <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
            <img
              src={article.image}
              alt={article.title}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        )}
        <div style={{ padding: "18px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <span className="tag tag-review">Review</span>
            <span className="meta-date">{fmtDate(article.date)}</span>
          </div>
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--fg)", lineHeight: 1.3, margin: "0 0 8px" }}>
            {article.title}
          </h3>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.55, margin: "0 0 14px" }}>
            {article.description}
          </p>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--amber)" }}>
            Read review →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default async function ReviewsPage() {
  const all = await getArticles();
  const reviews = all.filter((a) =>
    a.category === "Reviews" ||
    a.category === "Exchange Reviews" ||
    a.slug.includes("review") ||
    a.title.toLowerCase().includes("review")
  );

  return (
    <main style={{ paddingBottom: "48px" }}>
      <div className="wrap" style={{ paddingTop: "32px" }}>

        {/* Page header */}
        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 10px" }}>
            Independent · UK-focused · No bias
          </p>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 12px" }}>
            Reviews
          </h1>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.6, maxWidth: "600px", margin: 0 }}>
            Honest reviews of crypto exchanges, AI tools, hardware wallets, and digital services. Written by Joe Robertson — no sponsored content, no affiliate pressure.
          </p>
        </div>

        <div className="content-grid">
          {/* Main column */}
          <div>
            {/* Featured money pages — affiliate hub */}
            <div style={{ marginBottom: "40px" }}>
              {FEATURED_REVIEWS.map((section) => (
                <div key={section.category} style={{ marginBottom: "28px" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 12px" }}>
                    {section.category}
                  </p>
                  <div style={{ display: "grid", gap: "10px" }}>
                    {section.items.map((item) => (
                      <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                        <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "10px", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                          <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                              <span style={{ fontSize: "14px", fontWeight: 800, color: "var(--fg)" }}>{item.name}</span>
                              <span style={{ fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "20px", background: "oklch(73% 0.17 78 / 0.15)", color: "var(--amber)", border: "1px solid oklch(73% 0.17 78 / 0.3)" }}>{item.badge}</span>
                            </div>
                            <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>{item.desc}</p>
                          </div>
                          <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--amber)", flexShrink: 0 }}>Read →</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: "32px 0 28px" }} />
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px" }}>All Published Reviews</p>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <p style={{ fontSize: "12px", color: "var(--muted)", margin: 0 }}>
                {reviews.length} reviews published
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}>
              {reviews.map((article) => (
                <ReviewCard key={article.slug} article={article} />
              ))}
            </div>

            {reviews.length === 0 && (
              <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--muted)" }}>
                <p>No reviews found.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="sidebar">
            <div className="disclaimer-box">
              <div className="disclaimer-box-header">🔒 Editorial independence</div>
              <p>
                All reviews are independent. Some products use affiliate links — this never influences our verdict or score. We only recommend what we&apos;d use ourselves.
              </p>
            </div>

            <div className="sidebar-widget">
              <div className="section-title" style={{ marginBottom: "8px" }}>Categories</div>
              <div className="explore-list">
                {REVIEW_CATEGORIES.map((item) => (
                  <Link key={item.href} href={item.href} className="explore-link">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="sidebar-widget">
              <SidebarAds />
            </div>

            <p className="sidebar-disclaimer">
              Some links are affiliate links. We may earn a commission at no extra cost to you. This never influences our editorial stance.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
