import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "About",
  description: "About DigitechLifestyle and its mission to make digital living, wealth, AI, and automation practical.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <StandardPage
      eyebrow="Mission"
      title="About DigitechLifestyle"
      description="DigitechLifestyle helps readers turn fast-moving technology into practical systems for work, income, and everyday life."
    >
      <p>
        We publish guides, comparisons, and playbooks across AI tools, automation, digital wealth, smart lifestyle technology, and online business.
      </p>
      <p>
        The platform is built for long-term SEO publishing, affiliate partnerships, newsletter growth, and future digital products.
      </p>
    </StandardPage>
  );
}
