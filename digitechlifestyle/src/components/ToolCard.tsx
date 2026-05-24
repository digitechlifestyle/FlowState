import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Tool } from "@/lib/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="surface rounded-lg p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">{tool.category}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{tool.name}</h3>
        </div>
        {tool.featured ? <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold text-slate-950">Featured</span> : null}
      </div>
      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{tool.description}</p>
      <div className="mt-5 grid gap-2 text-sm text-slate-300">
        <span>Best for: {tool.bestFor}</span>
        <span>Pricing: {tool.pricing}</span>
      </div>
      <Link href={tool.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
        View guide <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
