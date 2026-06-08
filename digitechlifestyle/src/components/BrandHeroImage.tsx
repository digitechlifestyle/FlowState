"use client";

import Link from "next/link";

type BrandHeroImageProps = {
  variant: "resource-hub" | "automation";
  heading?: string;       // kept for API compat but no longer rendered over image
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const VARIANTS = {
  "resource-hub": {
    src: "/images/resource-hub-hero.png",
    alt: "DigiTech Lifestyle Resource Hub — crypto and AI guides, checklists, and tools",
    href: "/resources",
    glowColor: "rgba(139,92,246,0.4)",   // purple
  },
  "automation": {
    src: "/images/automation-playbook.png",
    alt: "DigiTech Lifestyle Automation Playbook — no-code workflow guide",
    href: "/resources",
    glowColor: "rgba(245,158,11,0.4)",   // amber
  },
};

export function BrandHeroImage({
  variant,
  ctaHref,
  imageSrc,
  imageAlt,
}: BrandHeroImageProps) {
  const v = VARIANTS[variant];
  const src = imageSrc ?? v.src;
  const alt = imageAlt ?? v.alt;
  const href = ctaHref ?? v.href;

  return (
    <Link
      href={href}
      style={{ display: "block", textDecoration: "none" }}
      aria-label={alt}
    >
      <div style={{
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: `0 0 0 1px ${v.glowColor}, 0 8px 32px ${v.glowColor}`,
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        background: "oklch(5% 0.01 270)",
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 2px ${v.glowColor}, 0 12px 48px ${v.glowColor}`;
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 1px ${v.glowColor}, 0 8px 32px ${v.glowColor}`;
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            maxHeight: "480px",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </div>
    </Link>
  );
}
