import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";

function tagClass(category: string) {
  const c = category.toLowerCase();
  if (c.includes("crypto") || c.includes("bitcoin") || c.includes("xrp") || c.includes("defi") || c.includes("blockchain")) return "tag-crypto";
  if (c.includes("ai") || c.includes("artificial")) return "tag-ai";
  if (c.includes("review")) return "tag-review";
  if (c.includes("news")) return "tag-news";
  return "tag-default";
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="post-card">
      {article.image && (
        <div className="post-card-img">
          <img src={article.image} alt={article.title} loading="lazy" />
        </div>
      )}
      <div className="post-card-body">
        <span className={`tag ${tagClass(article.category)}`}>{article.category}</span>
        <h3>
          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="post-card-excerpt">{article.description}</p>
        <div className="post-card-footer">
          <Link href={`/blog/${article.slug}`} className="read-more">Read article →</Link>
          <time className="post-date" dateTime={article.date}>{fmtDate(article.date)}</time>
        </div>
      </div>
    </article>
  );
}
