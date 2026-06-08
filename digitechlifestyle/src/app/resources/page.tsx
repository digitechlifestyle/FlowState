import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SidebarAds } from "@/components/SidebarAds";
import { ToolCard } from "@/components/ToolCard";
import { BrandHeroImage } from "@/components/BrandHeroImage";
import { BrandImageCard } from "@/components/BrandImageCard";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Resources & Tools — DigiTech Lifestyle",
  description: "Free downloads, checklists, and a curated directory of AI, automation, crypto, and digital lifestyle tools.",
  alternates: { canonical: "/resources" },
};

const DOWNLOADS = [
  {
    title: "AI Business Toolkit",
    text: "Prompts, SOPs, and AI-assisted operations for digital entrepreneurs.",
    badge: "Free download",
    img: "/images/generated/ai_driven_business_interface_concept.png",
    alt: "AI Business Toolkit — prompts and SOPs for digital entrepreneurs",
    accent: "purple" as const,
  },
  {
    title: "Automation Audit Checklist",
    text: "Map repetitive workflows and identify no-code automation wins.",
    badge: "Free download",
    img: "/images/generated/futuristic_tech_automation_banner_design.png",
    alt: "Automation Audit Checklist — no-code workflow guide",
    accent: "amber" as const,
  },
  {
    title: "Affiliate Launch Planner",
    text: "Plan niche research, content clusters, offers, and email capture.",
    badge: "Free download",
    img: "/images/generated/affiliate_launch_planner_dashboard.png",
    alt: "Affiliate Launch Planner — niche research and content planning guide",
    accent: "purple" as const,
  },
  {
    title: "Digital Wealth Tracker",
    text: "Track your apps, wallets, assets, subscriptions, and recurring income.",
    badge: "Free download",
    img: "/images/generated/digital_wealth_tracker_interface.png",
    alt: "Digital Wealth Tracker — crypto and subscription asset tracker template",
    accent: "amber" as const,
  },
];

export default function ResourcesPage() {
  return (
    <main className="container" style={{ padding: "32px 0 64px" }}>

      {/* ── Full-width hero banner ── */}
      <div style={{ marginBottom: "48px" }}>
        <BrandHeroImage
          variant="resource-hub"
          heading="Discover smarter crypto & AI resources"
          subheading="Guides, checklists, tools, and playbooks to help you grow faster."
          ctaLabel="Explore the Resource Hub"
          ctaHref="#downloads"
          secondaryLabel="Browse tools"
          secondaryHref="#tool-directory"
        />
      </div>

      {/* ── Two-column layout ── */}
      <div style={{
        display: "grid",
        gap: "32px",
        gridTemplateColumns: "1fr",
      }}
        className="resources-grid"
      >
        <div>

          {/* ── Free Downloads ── */}
          <section id="downloads">
            <h2 style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "var(--fg)",
              margin: "0 0 6px",
              fontFamily: "'Sora', sans-serif",
            }}>
              Free Downloads
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "13px", margin: "0 0 20px" }}>
              Click any resource to unlock via the newsletter. Free forever.
            </p>
            <div style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}>
              {DOWNLOADS.map((d) => (
                <Link key={d.title} href="/newsletter" style={{ textDecoration: "none" }}>
                  <BrandImageCard
                    src={d.img}
                    alt={d.alt}
                    size="thumb"
                    title={d.title}
                    description={d.text}
                    badge={d.badge}
                    ctaLabel="Unlock free"
                    ctaHref="/newsletter"
                    accentColor={d.accent}
                  />
                </Link>
              ))}
            </div>
          </section>

          {/* ── Automation Playbook Feature ── */}
          <section style={{ marginTop: "48px" }}>
            <BrandHeroImage
              variant="automation"
              heading="Automation Playbook"
              subheading="Build simple workflows, save time, and scale your digital business."
              ctaLabel="Get the free playbook"
              ctaHref="/newsletter"
              secondaryLabel="Learn about automation"
              secondaryHref="/automation"
            />
          </section>

          {/* ── Tool Directory ── */}
          <section id="tool-directory" style={{ marginTop: "48px" }}>
            <h2 style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "var(--fg)",
              margin: "0 0 6px",
              fontFamily: "'Sora', sans-serif",
            }}>
              Tool Directory
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "13px", margin: "0 0 20px" }}>
              Curated AI, automation, crypto, and creator tools — reviewed and recommended.
            </p>
            <div style={{
              display: "grid",
              gap: "12px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}>
              {tools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>
          </section>

        </div>

        {/* ── Sidebar ── */}
        <aside style={{
          display: "grid",
          gap: "16px",
          alignContent: "start",
          position: "sticky",
          top: "80px",
        }}>
          <SidebarAds />
          <NewsletterForm compact />
        </aside>

      </div>

      {/* Responsive grid breakpoint */}
      <style>{`
        @media (min-width: 1024px) {
          .resources-grid {
            grid-template-columns: 1fr 360px !important;
          }
        }
      `}</style>
    </main>
  );
}
