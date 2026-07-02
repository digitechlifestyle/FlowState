import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = { title: "Affiliate Disclosure", alternates: { canonical: "/affiliate-disclosure" } };

export default function AffiliateDisclosurePage() {
  return (
    <StandardPage eyebrow="Disclosure" title="Affiliate Disclosure" description="DigitechLifestyle may earn commissions from qualifying purchases or signups through partner links.">
      <p>Some pages include affiliate links. If you click a link and make a purchase or signup, DigitechLifestyle may earn a commission at no additional cost to you.</p>
      <p>Editorial recommendations should be based on relevance, usefulness, and fit for the reader. Sponsored placements should be clearly identified when used.</p>
    </StandardPage>
  );
}
