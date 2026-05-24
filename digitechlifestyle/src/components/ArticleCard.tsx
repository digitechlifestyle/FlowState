import Link from "next/link";
import type { Article } from "@/lib/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="surface rounded-lg p-5 transition hover:border-[rgba(33,214,164,0.45)]">
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
        <span className="rounded-full bg-white/5 px-3 py-1 text-[var(--accent)]">{article.category}</span>
        <span>{article.readingTime}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold leading-tight text-white">
        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{article.description}</p>
    </article>
  );
}
