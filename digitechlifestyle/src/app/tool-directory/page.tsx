import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Tool Directory",
  description: "A curated directory of AI, automation, newsletter, productivity, creator, finance, and digital wealth tools.",
  alternates: { canonical: "/tool-directory" },
};

export default function ToolDirectoryPage() {
  return (
    <main className="container py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Curated stack</p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">Tool Directory</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            CMS-ready cards for affiliate reviews, comparison tables, product pages, and newsletter recommendations.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {tools.map((tool) => <ToolCard key={tool.name} tool={tool} />)}
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
