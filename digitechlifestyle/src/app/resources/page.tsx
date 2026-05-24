import type { Metadata } from "next";
import Link from "next/link";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Resources",
  description: "Free resources, lead magnets, checklists, and templates from DigitechLifestyle.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <StandardPage
      eyebrow="Downloads"
      title="Resources"
      description="Lead magnets and digital product placeholders ready for downloadable templates, checklists, and playbooks."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["AI Business Toolkit", "A starter pack for prompts, SOPs, and AI-assisted operations."],
          ["Automation Audit Checklist", "Map repetitive work and identify the best no-code automation targets."],
          ["Affiliate Launch Planner", "Plan niche research, content clusters, offers, and email capture."],
          ["Digital Wealth Tracker", "A template for apps, wallets, assets, subscriptions, and recurring reviews."],
        ].map(([title, text]) => (
          <Link key={title} href="/newsletter" className="surface rounded-lg p-5">
            <h2>{title}</h2>
            <p>{text}</p>
          </Link>
        ))}
      </div>
    </StandardPage>
  );
}
