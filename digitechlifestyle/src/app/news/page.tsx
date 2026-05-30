import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { getArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "News",
  description: "Latest crypto and AI news for UK readers — honest, independent, no hype.",
  alternates: { canonical: "/news" },
};

export default async function NewsPage() {
  const all = await getArticles();
  const articles = all.filter((a) => a.category !== "Reviews");

  return (
    <main className="container py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Latest</p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">News</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            Crypto and AI news for UK readers — honest, independent, no hype.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
        <aside className="grid content-start gap-4">
          <AdSlot label="right sidebar" className="min-h-72" />
          <NewsletterForm compact />
        </aside>
      </div>
    </main>
  );
}
