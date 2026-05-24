import { NewsletterForm } from "@/components/NewsletterForm";

type StandardPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function StandardPage({ eyebrow, title, description, children }: StandardPageProps) {
  return (
    <main className="container py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">{description}</p>
          <div className="prose-content mt-10">{children}</div>
        </div>
        <NewsletterForm compact />
      </div>
    </main>
  );
}
