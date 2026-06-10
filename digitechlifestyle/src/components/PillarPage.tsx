import type { Metadata } from "next";
import { SidebarAds } from "@/components/SidebarAds";
import { AffiliateCta } from "@/components/AffiliateCta";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { getArticles } from "@/lib/articles";
import { pillarPages } from "@/lib/pages";
import { site } from "@/lib/site";

type PillarPageProps = {
  slug: string;
};

export function getPillarMetadata(slug: string): Metadata {
  const page = pillarPages.find((item) => item.slug === slug);

  return {
    title: page?.title,
    description: page?.description || site.description,
    alternates: { canonical: `/${slug}` },
  };
}

export async function PillarPage({ slug }: PillarPageProps) {
  const page = pillarPages.find((item) => item.slug === slug);
  const allArticles = await getArticles();
  const articles = allArticles.filter((article) => article.category === page?.category).slice(0, 6);

  if (!page) return null;

  return (
    <main className="container py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">{page.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">{page.description}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {page.bullets.map((item) => (
              <div key={item} className="surface rounded-lg p-4 text-sm font-semibold text-white">
                {item}
              </div>
            ))}
          </div>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-white">Latest {page.title} guides</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
            </div>
          </section>
          <div className="mt-10">
            <AffiliateCta />
          </div>
        </div>
        <aside className="grid content-start gap-4">
          <SidebarAds />
          <NewsletterForm compact />
        </aside>
      </div>
    </main>
  );
}
