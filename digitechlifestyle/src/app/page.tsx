import Link from "next/link";
import { ArrowRight, Bot, CircleDollarSign, Gauge, Sparkles } from "lucide-react";
import { AdSlot } from "@/components/AdSlot";
import { AffiliateCta } from "@/components/AffiliateCta";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ToolCard } from "@/components/ToolCard";
import { getArticles } from "@/lib/articles";
import { pillarPages } from "@/lib/pages";
import { site } from "@/lib/site";
import { tools } from "@/lib/tools";

type FeatureCard = {
  title: string;
  text: string;
  Icon: typeof Bot;
};

const stats = [
  { label: "Articles published", value: "100+" },
  { label: "In crypto since", value: "2017" },
  { label: "Financial advice given", value: "Zero" },
];

const featureCards: FeatureCard[] = [
  { title: "Crypto", text: "Bitcoin, Ethereum, DeFi, and the UK tax angle — explained plainly.", Icon: CircleDollarSign },
  { title: "AI Tools", text: "Honest reviews of AI tools that actually earn their place.", Icon: Bot },
  { title: "Exchange Reviews", text: "Unbiased comparisons of UK crypto exchanges and wallets.", Icon: Gauge },
  { title: "Breaking News", text: "What's happening in crypto and AI, without the hype.", Icon: Sparkles },
];

export default async function Home() {
  const articles = await getArticles();
  const featuredArticles = articles.filter((article) => article.featured).slice(0, 3);
  const featuredTools = tools.filter((tool) => tool.featured);

  return (
    <main>
      <section className="container py-12 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
          <div>
            <p className="inline-flex rounded-full border border-[rgba(33,214,164,0.35)] bg-[rgba(33,214,164,0.08)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">
              {site.tagline}
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-white md:text-7xl">
              Make sense of crypto, AI, and the digital world.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Educational guides, honest reviews, and breaking news — from an independent writer who&apos;s been in crypto since 2017. No hype. No financial advice. Just clarity.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/blog" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 text-sm font-bold text-slate-950">
                Read the blog <ArrowRight size={18} />
              </Link>
              <Link href="/blog?category=Reviews" className="inline-flex h-12 items-center justify-center rounded-lg border border-white/10 px-5 text-sm font-bold text-white">
                Exchange reviews
              </Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="surface rounded-lg p-4">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-sm text-[var(--muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <aside className="grid gap-4">
            <AdSlot label="right sidebar" className="min-h-72" />
            <NewsletterForm compact />
          </aside>
        </div>
      </section>

      <section className="container py-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featureCards.map(({ title, text, Icon }) => (
            <div key={title} className="surface rounded-lg p-5">
              <Icon className="text-[var(--accent)]" size={24} />
              <h2 className="mt-4 text-xl font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-10">
        <div className="mb-6 flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Featured articles</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Launch reading list</h2>
          </div>
          <Link href="/blog" className="hidden text-sm font-semibold text-[var(--accent)] sm:inline-flex">View all</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>

      <section className="container py-10">
        <AffiliateCta />
      </section>

      <section className="container py-10">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Featured tools</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Start with these platforms</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredTools.map((tool) => <ToolCard key={tool.name} tool={tool} />)}
        </div>
      </section>

      <section className="container py-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {pillarPages.map((page) => (
            <Link key={page.slug} href={`/${page.slug}`} className="surface rounded-lg p-5 hover:border-[rgba(98,168,255,0.45)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">{page.eyebrow}</p>
              <h2 className="mt-3 text-xl font-semibold text-white">{page.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{page.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
