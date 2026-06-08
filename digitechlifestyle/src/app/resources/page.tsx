import type { Metadata } from "next";
import Link from "next/link";
import { StandardPage } from "@/components/StandardPage";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Resources & Tools",
  description: "Free downloads, checklists, and a curated directory of AI, automation, crypto, and digital lifestyle tools.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <StandardPage
      eyebrow="Resources & Tools"
      title="Resources"
      description="Free downloads and a curated directory of the best AI, automation, crypto, and digital lifestyle tools."
    >
      {/* Downloads */}
      <h2 className="text-2xl font-bold text-white mb-4">Free Downloads</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["AI Business Toolkit", "A starter pack for prompts, SOPs, and AI-assisted operations."],
          ["Automation Audit Checklist", "Map repetitive work and identify the best no-code automation targets."],
          ["Affiliate Launch Planner", "Plan niche research, content clusters, offers, and email capture."],
          ["Digital Wealth Tracker", "A template for apps, wallets, assets, subscriptions, and recurring reviews."],
        ].map(([title, text]) => (
          <Link key={title} href="/newsletter" className="surface rounded-lg p-5">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{text}</p>
          </Link>
        ))}
      </div>

      {/* Tool Directory */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Tool Directory</h2>
      <p className="text-[var(--muted)] mb-6">Curated AI, automation, crypto, and creator tools — reviewed and recommended.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </StandardPage>
  );
}
