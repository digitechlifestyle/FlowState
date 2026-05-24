import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact DigitechLifestyle for partnerships, editorial feedback, and business inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="container py-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Contact</p>
        <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">Work with DigitechLifestyle</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          For partnerships, affiliate programs, tool submissions, and editorial feedback, contact {site.email}.
        </p>
      </div>
      <form className="surface mt-10 grid max-w-3xl gap-4 rounded-lg p-6">
        <input className="h-12 rounded-lg border border-white/10 bg-black/30 px-4 text-sm text-white" placeholder="Name" aria-label="Name" />
        <input className="h-12 rounded-lg border border-white/10 bg-black/30 px-4 text-sm text-white" placeholder="Email" aria-label="Email" />
        <textarea className="min-h-36 rounded-lg border border-white/10 bg-black/30 p-4 text-sm text-white" placeholder="Message" aria-label="Message" />
        <button className="h-12 rounded-lg bg-[var(--accent)] px-5 text-sm font-bold text-slate-950" type="submit">Send message</button>
      </form>
    </main>
  );
}
