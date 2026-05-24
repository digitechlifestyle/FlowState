import { Mail } from "lucide-react";

type NewsletterFormProps = {
  compact?: boolean;
};

export function NewsletterForm({ compact = false }: NewsletterFormProps) {
  return (
    <form className={`surface rounded-lg p-5 ${compact ? "" : "md:p-8"}`}>
      <div className="flex items-center gap-3 text-[var(--accent)]">
        <Mail size={20} />
        <span className="text-sm font-semibold uppercase tracking-[0.2em]">Newsletter</span>
      </div>
      <h2 className="mt-4 text-2xl font-semibold text-white">Get the Digital Living Brief</h2>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
        Weekly AI tools, automation ideas, affiliate opportunities, and digital wealth notes. No noise.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
        <input
          aria-label="Email address"
          type="email"
          placeholder="you@example.com"
          className="h-12 rounded-lg border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[var(--accent)]"
        />
        <button className="h-12 rounded-lg bg-white px-5 text-sm font-bold text-slate-950" type="submit">
          Join free
        </button>
      </div>
    </form>
  );
}
