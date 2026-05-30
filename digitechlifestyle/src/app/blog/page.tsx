import type { Metadata } from "next";
import Link from "next/link";
import { getArticles } from "@/lib/articles";
import type { Article } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog — DigiTech Lifestyle",
  description: "Crypto, AI, and digital lifestyle guides — honest, independent, UK-focused. No hype, no financial advice.",
  alternates: { canonical: "/blog" },
};

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

export default async function BlogPage() {
  const articles = await getArticles();
  const [featured, ...rest] = articles;

  return (
    <main style={{ paddingBottom: "48px" }}>
      <div className="wrap" style={{ paddingTop: "32px" }}>
        <div className="content-grid">
          {/* Main column */}
          <div>
            {/* FEATURED */}
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

            {/* LATEST */}
            <div className="section-title" style={{ marginTop: "28px" }}>Latest</div>
            <div className="article-list">
              {rest.map((article) => (
                <ArticleRowItem key={article.slug} article={article} />
              ))}
            </div>

            {/* Newsletter */}
            <div className="newsletter-strip">
              <h2>Stay ahead of the market — free</h2>
              <p>Join 4,200+ readers getting weekly crypto, DeFi, blockchain and AI insights every Thursday. No spam.</p>
              <form className="newsletter-form" action="/newsletter" method="GET">
                <input type="email" name="email" placeholder="Enter your email address" required autoComplete="email" />
                <button type="submit">Join free</button>
              </form>
              <p style={{ fontSize: "11px", marginTop: "4px" }}>Free forever. No spam. Unsubscribe any time.</p>
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
      </div>
    </main>
  );
}
