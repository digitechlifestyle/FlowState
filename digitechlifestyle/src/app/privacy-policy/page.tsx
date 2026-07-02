import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy-policy" } };

export default function PrivacyPolicyPage() {
  return (
    <StandardPage eyebrow="Legal" title="Privacy Policy" description="How DigitechLifestyle handles visitor data, email subscriptions, analytics, and advertising placeholders.">
      <h2>Information we collect</h2>
      <p>We may collect email addresses when visitors subscribe, contact details when forms are submitted, and standard analytics data such as pages visited, device type, and referral source.</p>
      <h2>How information is used</h2>
      <p>Information may be used to send newsletters, improve content, respond to inquiries, measure site performance, and support advertising or affiliate operations.</p>
      <h2>Advertising and affiliates</h2>
      <p>Future advertising partners may use cookies or similar technologies. Affiliate links may track referrals when readers click partner offers.</p>
    </StandardPage>
  );
}
