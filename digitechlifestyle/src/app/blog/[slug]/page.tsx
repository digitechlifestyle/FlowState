import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SidebarAds } from "@/components/SidebarAds";
import { AffiliateCta } from "@/components/AffiliateCta";
import { NewsletterForm } from "@/components/NewsletterForm";
import { getArticle, getArticles, markdownToHtml } from "@/lib/articles";

type BlogPostProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) notFound();

  const allArticles = await getArticles();
  const related = allArticles
    .filter((a) => a.category === article.category && a.slug !== slug)
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Organization", name: article.author },
  };

  return (
    <main className="container py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ display: "grid", gap: "32px", gridTemplateColumns: "1fr", alignItems: "start" }}
           className="blog-two-col">
        <article>
          {article.image && (
            <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "24px", maxHeight: "420px" }}>
              <img
                src={article.image}
                alt={article.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          )}
          <div className="surface rounded-lg p-6 md:p-10">
            <div className="flex flex-wrap gap-2 text-sm text-slate-400">
              <span className="rounded-full bg-white/5 px-3 py-1 text-[var(--accent)]">{article.category}</span>
              <span>{article.readingTime}</span>
              <span>{new Date(article.date).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}</span>
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">{article.title}</h1>
            <p className="mt-5 text-xl leading-8 text-[var(--muted)]">{article.description}</p>
          </div>
          <div className="prose-content mt-8" dangerouslySetInnerHTML={{ __html: markdownToHtml(article.content) }} />

          {/* Social share buttons */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            alignItems: "center",
            margin: "32px 0 0",
            padding: "20px",
            background: "var(--bg-card)",
            borderRadius: "12px",
            border: "1px solid var(--line)",
          }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginRight: "4px" }}>Share:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://www.digitechlifestyle.com/blog/${article.slug}`)}&via=DigiTechLife`}
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#000", color: "#fff", fontWeight: 700, fontSize: "12px", padding: "8px 14px", borderRadius: "8px", textDecoration: "none" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              X / Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.digitechlifestyle.com/blog/${article.slug}`)}`}
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#1877f2", color: "#fff", fontWeight: 700, fontSize: "12px", padding: "8px 14px", borderRadius: "8px", textDecoration: "none" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.digitechlifestyle.com/blog/${article.slug}`)}`}
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#0a66c2", color: "#fff", fontWeight: 700, fontSize: "12px", padding: "8px 14px", borderRadius: "8px", textDecoration: "none" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a
              href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(`https://www.digitechlifestyle.com/blog/${article.slug}`)}&description=${encodeURIComponent(article.title)}${article.image ? `&media=${encodeURIComponent(article.image)}` : ""}`}
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#e60023", color: "#fff", fontWeight: 700, fontSize: "12px", padding: "8px 14px", borderRadius: "8px", textDecoration: "none" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              Pinterest
            </a>
          </div>

          {/* Affiliate disclosure */}
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
            <strong style={{ color: "var(--fg)" }}>Disclosure:</strong> Some links in this article may be affiliate links. If you click and purchase, DigiTech Lifestyle may earn a small commission at no extra cost to you. This never influences our editorial stance — we only recommend products we genuinely believe in.
          </div>

          <div className="mt-10">
            <AffiliateCta />
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <div style={{ marginTop: "48px" }}>
              <div className="section-title" style={{ marginBottom: "16px" }}>Related articles</div>
              <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                {related.map((r) => (
                  <a key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: "none", display: "block", padding: "14px 16px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "10px" }}>
                    {r.image && (
                      <img src={r.image} alt={r.title} loading="lazy" style={{ width: "100%", height: "110px", objectFit: "cover", borderRadius: "6px", marginBottom: "10px", display: "block" }} />
                    )}
                    <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "4px" }}>{r.category}</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--fg)", lineHeight: 1.4 }}>{r.title}</div>
                    <div style={{ fontSize: "11px", color: "var(--amber)", marginTop: "8px", fontWeight: 600 }}>Read article →</div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </article>
        <aside style={{ position: "sticky", top: "80px", display: "grid", gap: "16px", alignContent: "start" }}>
          <SidebarAds />
          <NewsletterForm compact />
        </aside>
      </div>
    </main>
  );
}
