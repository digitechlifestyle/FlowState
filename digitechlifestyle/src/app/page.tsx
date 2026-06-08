import Link from "next/link";
import { getArticles } from "@/lib/articles";
import type { Article } from "@/lib/articles";
import { BrandHeroImage } from "@/components/BrandHeroImage";
import { MobileBannerStrip } from "@/components/BrandImageCard";

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

        {/* RESOURCE HUB BANNER */}
        <div style={{ marginTop: "32px", marginBottom: "8px" }}>
          <BrandHeroImage
            variant="resource-hub"
            heading="Discover smarter crypto & AI resources"
            subheading="Guides, checklists, tools, and playbooks to help you grow faster."
            ctaLabel="Explore the Resource Hub"
            ctaHref="/resources"
            secondaryLabel="Free AI tools"
            secondaryHref="/free-tools"
          />
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
                    {/* Mobile banner strip after article 4 */}
                    {i === 3 && (
                      <div key="mobile-banner" style={{ margin: "4px 0" }}>
                        <MobileBannerStrip
                          src="/images/resource-hub-hero.png"
                          alt="DigiTech Lifestyle Resource Hub — free crypto and AI guides"
                          ctaHref="/resources"
                        />
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="sidebar">
              <div className="disclaimer-box">
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

              <p className="sidebar-disclaimer">
                Some links are affiliate links. We may earn a commission at no extra cost to you. This never influences our editorial stance.
              </p>
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
