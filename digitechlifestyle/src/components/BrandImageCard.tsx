"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

/**
 * Reusable brand-style image card.
 * Used for: resource download cards, review headers, article thumbnails, sidebar promo.
 *
 * Sizes produced by CSS:
 *   full    → 100% width, max 480px tall (hero card)
 *   medium  → 100% width, max 280px tall (content section)
 *   thumb   → 100% width, max 200px tall (article thumbnail)
 *   sidebar → 100% width, max 180px tall (sidebar promo)
 *   mobile  → 100% width, max 80px tall  (in-article strip)
 */
export type CardSize = "full" | "medium" | "thumb" | "sidebar" | "mobile";

type BrandImageCardProps = {
  src: string;
  alt: string;
  size?: CardSize;
  title?: string;
  description?: string;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** amber | purple */
  accentColor?: "amber" | "purple";
  /** Show the image with lazy fade-in */
  lazy?: boolean;
  className?: string;
};

const MAX_HEIGHTS: Record<CardSize, number> = {
  full:    480,
  medium:  280,
  thumb:   200,
  sidebar: 180,
  mobile:  80,
};

export function BrandImageCard({
  src,
  alt,
  size = "medium",
  title,
  description,
  badge,
  ctaLabel,
  ctaHref,
  accentColor = "amber",
  lazy = true,
  className,
}: BrandImageCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const maxH = MAX_HEIGHTS[size];
  const accent = accentColor === "purple" ? "var(--purple)" : "var(--amber)";
  const glowClass = accentColor === "purple" ? "dtl-purple-glow" : "dtl-amber-glow";

  useEffect(() => {
    if (!lazy) return;
    const img = imgRef.current;
    if (!img) return;
    if (img.complete) img.classList.add("loaded");
    else img.addEventListener("load", () => img.classList.add("loaded"));
  }, [lazy]);

  const hasText = title || description || ctaLabel;
  const isMobile = size === "mobile";

  return (
    <div
      className={`${glowClass}${className ? ` ${className}` : ""}`}
      style={{
        position: "relative",
        borderRadius: isMobile ? "8px" : "12px",
        overflow: "hidden",
        background: "oklch(5% 0.01 270)",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={lazy ? "lazy" : "eager"}
          decoding="async"
          className={lazy ? "dtl-lazy-img" : undefined}
          style={{
            width: "100%",
            maxHeight: `${maxH}px`,
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
          sizes={
            size === "sidebar"
              ? "320px"
              : size === "mobile"
              ? "640px"
              : "(max-width: 640px) 100vw, 800px"
          }
        />

        {/* Gradient overlay */}
        {hasText && !isMobile && (
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 30%, oklch(4% 0.01 270 / 0.88) 100%)",
            pointerEvents: "none",
          }} />
        )}

        {/* Badge */}
        {badge && (
          <div style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: `${accent}22`,
            border: `1px solid ${accent}55`,
            borderRadius: "20px",
            padding: "3px 10px",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: accent,
          }}>
            {badge}
          </div>
        )}
      </div>

      {/* Text content */}
      {hasText && !isMobile && (
        <div style={{
          padding: size === "sidebar" ? "14px" : "20px",
          background: "oklch(8% 0.018 270)",
        }}>
          {title && (
            <h3 style={{
              margin: "0 0 6px",
              fontSize: size === "sidebar" ? "13px" : "16px",
              fontWeight: 800,
              color: "var(--fg)",
              fontFamily: "'Sora', sans-serif",
              lineHeight: 1.2,
            }}>
              {title}
            </h3>
          )}
          {description && (
            <p style={{
              margin: "0 0 14px",
              fontSize: "12px",
              color: "var(--muted)",
              lineHeight: 1.5,
            }}>
              {description}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                background: accent,
                color: "oklch(8% 0.015 60)",
                fontWeight: 800,
                fontSize: "11px",
                padding: size === "sidebar" ? "7px 14px" : "9px 18px",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              ↗ {ctaLabel}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Convenience: 300×600 skyscraper sidebar promo
 */
export function SidebarPromo({
  src,
  alt,
  title,
  description,
  ctaLabel,
  ctaHref,
  badge,
  accentColor = "amber",
}: Omit<BrandImageCardProps, "size">) {
  return (
    <BrandImageCard
      src={src}
      alt={alt}
      size="sidebar"
      title={title}
      description={description}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
      badge={badge}
      accentColor={accentColor}
    />
  );
}

/**
 * Convenience: 640×80 mobile in-article strip
 */
export function MobileBannerStrip({
  src,
  alt,
  ctaHref,
}: { src: string; alt: string; ctaHref: string }) {
  return (
    <Link href={ctaHref} style={{ display: "block", textDecoration: "none" }}>
      <BrandImageCard
        src={src}
        alt={alt}
        size="mobile"
        lazy
        accentColor="amber"
      />
    </Link>
  );
}
