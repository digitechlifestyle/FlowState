import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = { title: "Terms", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <StandardPage eyebrow="Legal" title="Terms" description="Terms for using DigitechLifestyle content, resources, and future digital products.">
      <h2>Educational content</h2>
      <p>Content is provided for informational purposes only and should not be considered financial, legal, tax, or investment advice.</p>
      <h2>Digital products</h2>
      <p>Future templates, guides, and downloads may include their own license terms, refund terms, or access rules.</p>
      <h2>External links</h2>
      <p>We are not responsible for third-party websites, tools, pricing, availability, policies, or claims.</p>
    </StandardPage>
  );
}
