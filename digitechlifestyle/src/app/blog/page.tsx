import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { getArticles } from "@/lib/articles";
import type { Article } from "@/lib/articles";
import { SidebarAds } from "@/components/SidebarAds";
import CategoryFilterClient from "@/components/CategoryFilterClient";

export const metadata: Metadata = {
  title: "Blog — DigiTech Lifestyle",
  description: "Crypto, AI, and digital lifestyle guides — honest, independent, UK-focused. No hype, no financial advice.",
  alternates: { canonical: "/blog" },
};

const EXPLORE = [
  { label: "Crypto Guides",    href: "/blog?category=Cryptocurrencies" },
  { label: "AI & Technology",  href: "/blog?category=AI" },
  { label: "Exchange Reviews", href: "/blog?category=Reviews" },
  { label: "Digital Tools",    href: "/free-tools" },
  { label: "Latest News",      href: "/news" },
  { label: "About Joe",        href: "/about" },
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

function dataCat(category: string): string {
  const c = category.toLowerCase();
  if (c === "crypto guides") return "guides";
  if (c.includes("ai") || c.includes("artificial")) return "ai";
  if (c.includes("news")) return "news";
  if (c.includes("bitcoin") || c.includes("crypto") || c.includes("blockchain") || c.includes("xrp") || c.includes("defi") || c.includes("ethereum")) return "cryptocurrencies xrp defi";
  if (c.includes("review")) return "reviews";
  return c;
}

function ArticleRowItem({ article }: { article: Article }) {
  return (
    <div data-cat={dataCat(article.category)}>
      <Link href={`/blog/${article.slug}`} style={{ textDecoration: "none", display: "block" }}>
        <div className="article-row">
          <div>
            <div className="article-row-meta">
              <span className={`tag ${tagClass(article.category)}`}>{article.category}</span>
              <span className="meta-date">{fmtDate(article.date)}{article.readingTime ? ` · ${article.readingTime}` : ""}</span>
            </div>
            <h3 style={{ color: "var(--fg)" }}>{article.title}</h3>
            <div className="article-row-author">Joe Robertson</div>
          </div>
          {article.image && (
            <div className="article-row-thumb">
              <img src={article.image} alt={article.title} loading="lazy" />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default async function BlogPage() {
  const articles = await getArticles();
  const [featured, ...rest] = articles;

  return (
    <main style={{ paddingBottom: "48px" }}>
      <div className="wrap" style={{ paddingTop: "32px" }}>

        {/* Category filter — client only, progressive enhancement */}
        <Suspense fallback={null}>
          <CategoryFilterClient />
        </Suspense>

        <div className="content-grid">
          <div>
            {/* Featured */}
            <div id="featured-section">
              {featured && (
                <>
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
                </>
              )}
            </div>

            <div className="section-title" id="articles-section-title" style={{ marginTop: "28px" }}>Latest</div>
            <div className="article-list">
              {rest.map((article) => (
                <ArticleRowItem key={article.slug} article={article} />
              ))}
            </div>

            <div className="newsletter-strip">
              <h2>Stay ahead of the market — free</h2>
              <p>Weekly crypto, DeFi, blockchain and AI insights every Thursday. Join our community of nearly 5,000 across YouTube, LinkedIn, X, and Facebook. No spam.</p>
              <form className="newsletter-form" action="/newsletter" method="GET">
                <input type="email" name="email" placeholder="Enter your email address" required autoComplete="email" />
                <button type="submit">Join free</button>
              </form>
              <p style={{ fontSize: "11px", marginTop: "4px" }}>Free forever. No spam. Unsubscribe any time.</p>
            </div>
          </div>

          <aside className="sidebar">
            <div className="disclaimer-box">
              <div className="disclaimer-box-header">🔒 Educational only</div>
              <p>Everything on DigiTech Lifestyle is for informational purposes. Not financial advice. Crypto involves significant risk — always do your own research.</p>
            </div>
            <div className="sidebar-widget">
              <div className="section-title" style={{ marginBottom: "8px" }}>Explore</div>
              <div className="explore-list">
                {EXPLORE.map((item) => (
                  <Link key={item.href} href={item.href} className="explore-link">{item.label}</Link>
                ))}
              </div>
            </div>
            <div className="sidebar-widget">
              <div className="section-title" style={{ marginBottom: "8px" }}>Follow Us</div>
              <div className="follow-list">
                {[
                  { name: "YouTube",     href: "https://www.youtube.com/@digitechlifestyle" },
                  { name: "X / Twitter", href: "https://x.com/DigiTechLife" },
                  { name: "Facebook",    href: "https://www.facebook.com/digitechlifestyle" },
                ].map((s) => (
                  <div key={s.name} className="follow-row">
                    <span>{s.name}</span>
                    <a href={s.href} className="follow-btn" target="_blank" rel="noopener">Follow</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="sidebar-widget"><SidebarAds /></div>
            <p className="sidebar-disclaimer">Some links are affiliate links. We may earn a commission at no extra cost to you. This never influences our editorial stance.</p>
          </aside>
        </div>
      </div>
    </main>
  );
}
