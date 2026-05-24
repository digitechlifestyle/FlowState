import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { getArticles } from "@/lib/articles";
import { categories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Launch guides on AI tools, automation, digital wealth, smart lifestyle technology, and online income.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <main className="container py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Editorial hub</p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">Blog</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            Crypto, AI, and digital lifestyle guides — honest, independent, no hype.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300">
                {category}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
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
