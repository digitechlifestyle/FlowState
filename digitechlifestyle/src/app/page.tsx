import Link from "next/link";
import { getArticles } from "@/lib/articles";
import type { Article } from "@/lib/articles";
import { SidebarAds } from "@/components/SidebarAds";

const TOPICS = [
  { label: "Bitcoin & Crypto",        href: "/blog?category=Cryptocurrencies" },
  { label: "XRP & Ripple",            href: "/blog?category=XRP" },
  { label: "Artificial Intelligence", href: "/blog?category=AI" },
  { label: "DeFi & Blockchain",       href: "/blog?category=DeFi" },
  { label: "Exchange Reviews",        href: "/blog?category=Reviews" },
  { label: "Crypto Tools",            href: "/blog?category=Wallets" },
];

const EXPLORE = [
  { label: "Crypto Guides",      href: "/blog?category=Cryptocurrencies" },
  { label: "AI & Technology",    href: "/blog?category=AI" },
  { label: "Exchange Reviews",   href: "/blog?category=Reviews" },
  { label: "Digital Tools",      href: "/free-tools" },
  { label: "Latest News",        href: "/news" },
  { label: "About Joe",          href: "/about" },
];

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function tagClass(category: string) {
  const c = category.toLowerCase();
  if (c.includes("crypto") || c.includes("bitcoin") || c.includes("xrp") || c.includes("defi") || c.includes("blockchain")) return "tag-crypto";
  if (c.includes("ai") || c.includes("artificial")) return "tag-ai";
  if (c.includes("review")) return "tag-review";
  if (c.includes("news")) return "tag-news";
  return "tag-default";
}

function ArticleRowItem({ article }: { article: Article }) {
  return (
    <div className="article-row">
      <div>
        <div className="article-row-meta">
          <span className={`tag ${tagClass(article.category)}`}>{article.category}</span>
          <span className="meta-date">{fmtDate(article.date)}{article.readingTime ? ` · ${article.readingTime}` : ""}</span>
        </div>
        <h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3>
        <div className="article-row-author">Joe Robertson</div>
      </div>
      {article.image && (
        <div className="article-row-thumb">
          <img src={article.image} alt={article.title} loading="lazy" />
        </div>
      )}
    </div>
  );
}

export default async function Home() {
  const articles = await getArticles();
  const [featured, ...rest] = articles;
  const latest = rest.slice(0, 8);

  return (
    <main style={{ paddingBottom: "48px" }}>
      <div className="wrap">
        {/* Hero — 2-column */}
        <section className="home-hero">
          <div className="home-hero-content">
            <div className="home-hero-eyebrow">Connecting Technology, Innovation &amp; Everyday Life</div>
            <h1>
              Make sense of crypto,<br />
              AI, and the digital world.
            </h1>
            <p className="home-hero-sub">
              Educational guides, honest reviews, and breaking news — from an
              independent writer who&apos;s been in crypto since 2017. No hype.
              No financial advice. Just clarity.
            </p>
            <div className="home-hero-actions">
              <Link href="/blog" className="btn-primary">Read the Blog →</Link>
              <Link href="/blog?category=Reviews" className="btn-secondary">Exchange Reviews</Link>
            </div>
          </div>

          {/* Stats — right column */}
          <div className="home-stats-col">
            <div className="stat-item">
              <span className="stat-num">100+</span>
              <span className="stat-label">Articles published</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">2017</span>
              <span className="stat-label">Covering crypto since</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">100%</span>
              <span className="stat-label">Educational, not advice</span>
            </div>
          </div>
        </section>

        {/* FREE FOR READERS */}
        <div className="free-strip">
          <div className="free-strip-label">Free for readers</div>
          <div className="free-strip-title">
            6 free AI tools most people don&apos;t know exist — no paid plans needed.{" "}
            <Link href="/free-tools" style={{ color: "var(--amber)" }}>Get the free list →</Link>
          </div>
          <div className="topic-links">
            <span style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 600 }}>Topics:</span>
            {TOPICS.map((t) => (
              <Link key={t.href} href={t.href} className="topic-link">{t.label}</Link>
            ))}
          </div>
        </div>

        {/* ─── START HERE ─── */}
        <section style={{ marginTop: "32px", padding: "20px 24px", background: "oklch(13% 0.02 240 / 0.6)", border: "1px solid oklch(40% 0.04 240 / 0.3)", borderRadius: "12px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "6px" }}>New here?</div>
          <h2 style={{ fontSize: "17px", fontWeight: 800, color: "var(--fg)", margin: "0 0 10px" }}>Start Here — Beginner&apos;s Guide to Crypto &amp; AI</h2>
          <p style={{ color: "var(--muted)", fontSize: "13px", margin: "0 0 14px", lineHeight: 1.55 }}>
            Never bought crypto? Not sure which AI tools are worth it? These are the best places to start — plain English, no hype.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {[
              { label: "What is Bitcoin?",          href: "/blog?category=Cryptocurrencies" },
              { label: "How to buy crypto safely",  href: "/blog?category=Cryptocurrencies" },
              { label: "Best free AI tools",        href: "/free-tools" },
              { label: "Exchange reviews",          href: "/blog?category=Reviews" },
              { label: "DeFi explained",            href: "/blog?category=DeFi" },
              { label: "Crypto safety guide",       href: "/resources" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="topic-link">{l.label}</Link>
            ))}
          </div>
        </section>

        {/* ─── CRYPTO SAFETY HUB + TOP AI TOOLS ─── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginTop: "16px" }}>
          <div style={{ padding: "20px 22px", background: "oklch(13% 0.03 25 / 0.5)", border: "1px solid oklch(55% 0.15 25 / 0.3)", borderRadius: "12px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f87171", marginBottom: "6px" }}>🔒 Crypto Safety Hub</div>
            <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 8px" }}>Protect your crypto</h3>
            <p style={{ color: "var(--muted)", fontSize: "12px", margin: "0 0 12px", lineHeight: 1.55 }}>
              Scams, hacks, and exchange collapses happen. Learn how to keep your assets safe — hardware wallets, seed phrase security, and exchange hardening.
            </p>
            <Link href="/resources" className="read-more-link">Get the free security guide →</Link>
          </div>
          <div style={{ padding: "20px 22px", background: "oklch(13% 0.03 280 / 0.5)", border: "1px solid oklch(55% 0.15 280 / 0.3)", borderRadius: "12px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(72% 0.18 280)", marginBottom: "6px" }}>🤖 Top AI Tools 2026</div>
            <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--fg)", margin: "0 0 8px" }}>Best free AI tools right now</h3>
            <p style={{ color: "var(--muted)", fontSize: "12px", margin: "0 0 12px", lineHeight: 1.55 }}>
              Writing assistants, image generators, research tools — the most useful AI tools available for free, tested and reviewed for UK users.
            </p>
            <Link href="/free-tools" className="read-more-link">Browse free AI tools →</Link>
          </div>
        </div>

        {/* FEATURED + sidebar */}
        {featured && (
          <div className="content-grid" style={{ marginTop: "36px" }}>
            <div>
              <div className="section-title">Featured</div>
              <div className="featured-article">
                <div className="featured-meta">
                  <span className={`tag ${tagClass(featured.category)}`}>{featured.category}</span>
                  <span className="meta-date">{fmtDate(featured.date)}</span>
                </div>
                <h2><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2>
                <p className="excerpt">{featured.description}</p>
                <Link href={`/blog/${featured.slug}`} className="read-more-link">Read more →</Link>
              </div>

              {/* LATEST */}
              <div className="section-title" style={{ marginTop: "28px" }}>Latest</div>
              <div className="article-list">
                {latest.map((article, i) => (
                  <>
                    <ArticleRowItem key={article.slug} article={article} />
                    {/* Free Tools promo strip after article 4 */}
                    {i === 3 && (
                      <div key="free-tools-strip" style={{
                        margin: "4px 0",
                        background: "oklch(14% 0.025 78 / 0.6)",
                        border: "1px solid oklch(73% 0.17 78 / 0.25)",
                        borderRadius: "10px",
                        padding: "16px 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        flexWrap: "wrap",
                      }}>
                        <div>
                          <p style={{ margin: 0, fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "4px" }}>
                            🔓 Free download
                          </p>
                          <p style={{ margin: 0, fontSize: "14px", fontWeight: 700, color: "var(--fg)", lineHeight: 1.3 }}>
                            7 free AI tools — no subscriptions needed
                          </p>
                          <p style={{ margin: "4px 0 0", fontSize: "12px", color: "var(--muted)" }}>
                            Enter your email and download the full list instantly.
                          </p>
                        </div>
                        <Link href="/free-tools" style={{
                          display: "inline-block",
                          background: "var(--amber)",
                          color: "oklch(8% 0.015 60)",
                          fontWeight: 800,
                          fontSize: "12px",
                          padding: "9px 18px",
                          borderRadius: "7px",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}>
                          Get free bundle →
                        </Link>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="sidebar">
              <SidebarAds />

              <div className="disclaimer-box" style={{ marginTop: "16px" }}>
                <div className="disclaimer-box-header">🔒 Educational only</div>
                <p>
                  Everything on DigiTech Lifestyle is for informational purposes.
                  Not financial advice. Crypto involves significant risk — always
                  do your own research.
                </p>
              </div>

              <div className="sidebar-widget">
                <div className="section-title" style={{ marginBottom: "8px" }}>Explore</div>
                <div className="explore-list">
                  {EXPLORE.map((item) => (
                    <Link key={item.href} href={item.href} className="explore-link">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="sidebar-widget">
                <div className="section-title" style={{ marginBottom: "8px" }}>Follow Us</div>
                <div className="follow-list">
                  {[
                    { name: "YouTube",    href: "https://www.youtube.com/@digitechlifestyle" },
                    { name: "X / Twitter", href: "https://x.com/DigiTechLife" },
                    { name: "Facebook",   href: "https://www.facebook.com/digitechlifestyle" },
                  ].map((s) => (
                    <div key={s.name} className="follow-row">
                      <span>{s.name}</span>
                      <a href={s.href} className="follow-btn" target="_blank" rel="noopener">Follow</a>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        )}

        {/* Newsletter */}
        <div className="newsletter-strip">
          <h2>Stay ahead of the market — free</h2>
          <p>Join 4,200+ readers getting weekly crypto, DeFi, blockchain and AI insights every Thursday. No spam.</p>
          <form className="newsletter-form" action="/newsletter" method="GET">
            <input type="email" name="email" placeholder="Enter your email address" required autoComplete="email" />
            <button type="submit">Join free</button>
          </form>
          <p style={{ fontSize: "11px", color: "var(--muted)", margin: 0 }}>Free forever. No spam. Unsubscribe any time.</p>
        </div>
      </div>
    </main>
  );
}
