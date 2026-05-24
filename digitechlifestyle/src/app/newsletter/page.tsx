import type { Metadata } from "next";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Join the DigitechLifestyle newsletter for weekly AI, automation, digital wealth, and online income ideas.",
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterPage() {
  return (
    <main className="container py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_460px] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Inbox advantage</p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">Digital Living Brief</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            A weekly digest for people building smarter workflows, stronger income channels, and more useful technology habits.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Tool picks", "Automation ideas", "Affiliate angles"].map((item) => (
              <div key={item} className="surface rounded-lg p-4 text-sm font-semibold text-white">{item}</div>
            ))}
          </div>
        </div>
        <NewsletterForm />
      </div>
    </main>
  );
}
