import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AffiliateCta() {
  return (
    <section className="surface rounded-lg p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Partner picks</p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Build a smarter digital stack</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
            Explore curated AI, automation, wealth, and creator tools selected for practical value, transparent pricing, and clear use cases.
          </p>
        </div>
        <Link
          href="/tool-directory"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 text-sm font-bold text-slate-950"
        >
          Browse tools <ArrowRight size={18} />
        </Link>
      </div>
      <p className="mt-5 text-xs leading-6 text-slate-500">
        Disclosure: some links may be affiliate links. DigitechLifestyle may earn a commission at no additional cost to you.
      </p>
    </section>
  );
}
