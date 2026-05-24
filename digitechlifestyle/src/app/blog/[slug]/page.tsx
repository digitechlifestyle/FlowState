import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
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

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Organization", name: article.author },
  };

  return (
    <main className="container py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <article>
          <div className="surface rounded-lg p-6 md:p-10">
            <div className="flex flex-wrap gap-2 text-sm text-slate-400">
              <span className="rounded-full bg-white/5 px-3 py-1 text-[var(--accent)]">{article.category}</span>
              <span>{article.readingTime}</span>
              <span>{new Date(article.date).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}</span>
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">{article.title}</h1>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{article.description}</p>
          </div>
          <div className="prose-content mt-8" dangerouslySetInnerHTML={{ __html: markdownToHtml(article.content) }} />
          <div className="mt-10">
            <AffiliateCta />
          </div>
        </article>
        <aside className="grid content-start gap-4">
          <AdSlot label="right sidebar" className="min-h-72" />
          <NewsletterForm compact />
        </aside>
      </div>
    </main>
  );
}
