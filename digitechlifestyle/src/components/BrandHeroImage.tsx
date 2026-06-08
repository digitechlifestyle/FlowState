"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

type BrandHeroImageProps = {
  /** "resource-hub" uses the wide landscape banner; "automation" uses the portrait card */
  variant: "resource-hub" | "automation";
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** Override image filename — defaults to variant filenames */
  imageSrc?: string;
  imageAlt?: string;
};

const VARIANTS = {
  "resource-hub": {
    src: "/images/resource-hub-hero.png",
    alt: "DigiTech Lifestyle Resource Hub — crypto and AI guides, checklists, and tools for UK investors",
    aspect: "56.25%",   // 16:9
    maxH: 520,
    caption: "Powered by AI. Built for Web3.",
    headingDefault: "Discover smarter crypto & AI resources",
    subDefault: "Guides, checklists, tools, and playbooks to help you grow faster.",
    ctaDefault: "Explore the Resource Hub",
    ctaHrefDefault: "/resources",
    glow: "var(--purple)",
  },
  "automation": {
    src: "/images/automation-playbook.png",
    alt: "DigiTech Lifestyle Automation Playbook — no-code workflow guide for digital business owners",
    aspect: "125%",     // 4:5 portrait
    maxH: 520,
    caption: "No-code automation",
    headingDefault: "Automation Playbook",
    subDefault: "Build simple workflows, save time, and scale your digital business.",
    ctaDefault: "Get the free playbook",
    ctaHrefDefault: "/resources",
    glow: "var(--amber)",
  },
};

export function BrandHeroImage({
  variant,
  heading,
  subheading,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
  imageSrc,
  imageAlt,
}: BrandHeroImageProps) {
  const v = VARIANTS[variant];
  const imgRef = useRef<HTMLImageElement>(null);

  // Lazy-load fade-in
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", () => img.classList.add("loaded"));
    }
  }, []);

  const src = imageSrc ?? v.src;
  const alt = imageAlt ?? v.alt;
  const title = heading ?? v.headingDefault;
  const sub = subheading ?? v.subDefault;
  const cta = ctaLabel ?? v.ctaDefault;
  const ctaUrl = ctaHref ?? v.ctaHrefDefault;
  const isWide = variant === "resource-hub";

  return (
    <div style={{
      position: "relative",
      borderRadius: "16px",
      overflow: "hidden",
      background: "oklch(5% 0.01 270)",
    }}>
      {/* Animated neon border */}
      <div
        className={variant === "resource-hub" ? "dtl-purple-glow" : "dtl-amber-glow"}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "16px",
          pointerEvents: "none",
          zIndex: 4,
        }}
      />

      {/* The image */}
      <div style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        maxHeight: `${v.maxH}px`,
      }}>
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="dtl-lazy-img dtl-hero-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
            maxHeight: `${v.maxH}px`,
          }}
          // Responsive srcset hint — browser picks best size
          sizes={isWide
            ? "(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 1200px"
            : "(max-width: 640px) 100vw, 400px"
          }
        />

        {/* Gradient overlay for text readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: isWide
            ? "linear-gradient(90deg, oklch(4% 0.01 270 / 0.92) 0%, oklch(4% 0.01 270 / 0.60) 50%, transparent 100%)"
            : "linear-gradient(180deg, transparent 30%, oklch(4% 0.01 270 / 0.90) 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }} />

        {/* Particle dots overlay (CSS only, no JS) */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 1, pointerEvents: "none" }}>
          {[
            { left: "8%",  top: "20%", delay: "0s",    size: 3, color: "var(--amber)" },
            { left: "15%", top: "60%", delay: "1.2s",  size: 2, color: "var(--purple)" },
            { left: "22%", top: "40%", delay: "2.4s",  size: 2, color: "var(--amber)" },
            { left: "85%", top: "25%", delay: "0.8s",  size: 3, color: "var(--purple)" },
            { left: "78%", top: "70%", delay: "1.8s",  size: 2, color: "var(--amber)" },
            { left: "92%", top: "55%", delay: "3.0s",  size: 2, color: "var(--purple)" },
          ].map((p, i) => (
            <div key={i} style={{
              position: "absolute",
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: "50%",
              background: p.color,
              animation: `dtl-particle-up 4s ease-in-out ${p.delay} infinite`,
              opacity: 0.7,
            }} />
          ))}
        </div>

        {/* Text content — over overlay */}
        {isWide && (
          <div style={{
            position: "absolute",
            top: 0, left: 0, bottom: 0,
            width: "min(480px, 55%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(24px, 4vw, 48px)",
            zIndex: 3,
          }}>
            <TextContent
              title={title}
              sub={sub}
              cta={cta}
              ctaUrl={ctaUrl}
              secondaryLabel={secondaryLabel}
              secondaryHref={secondaryHref}
              caption={v.caption}
              glowColor={v.glow}
            />
          </div>
        )}
      </div>

      {/* Portrait variant — text below image */}
      {!isWide && (
        <div style={{
          padding: "24px",
          background: "oklch(8% 0.018 270)",
          position: "relative",
          zIndex: 3,
        }}>
          <TextContent
            title={title}
            sub={sub}
            cta={cta}
            ctaUrl={ctaUrl}
            secondaryLabel={secondaryLabel}
            secondaryHref={secondaryHref}
            caption={v.caption}
            glowColor={v.glow}
          />
        </div>
      )}
    </div>
  );
}

function TextContent({ title, sub, cta, ctaUrl, secondaryLabel, secondaryHref, caption, glowColor }: {
  title: string;
  sub: string;
  cta: string;
  ctaUrl: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  caption: string;
  glowColor: string;
}) {
  return (
    <>
      {/* Caption badge */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: `${glowColor}22`,
        border: `1px solid ${glowColor}44`,
        borderRadius: "20px",
        padding: "4px 12px",
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: glowColor,
        marginBottom: "16px",
        width: "fit-content",
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: glowColor, animation: "dtl-glowPulse 2s ease-in-out infinite", display: "inline-block" }} />
        {caption}
      </div>

      <h2 style={{
        margin: "0 0 12px",
        fontSize: "clamp(22px, 3.5vw, 36px)",
        fontWeight: 900,
        lineHeight: 1.1,
        color: "var(--fg)",
        fontFamily: "'Sora', sans-serif",
      }}>
        {title}
      </h2>

      <p style={{
        margin: "0 0 24px",
        fontSize: "clamp(13px, 1.5vw, 15px)",
        lineHeight: 1.6,
        color: "var(--muted)",
        maxWidth: "40ch",
      }}>
        {sub}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
        {/* Primary CTA with pulse ring */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <div style={{
            position: "absolute",
            inset: "-2px",
            borderRadius: "10px",
            background: "var(--amber)",
            animation: "dtl-ring-pulse 2s ease-out infinite",
            opacity: 0,
          }} />
          <Link
            href={ctaUrl}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "var(--amber)",
              color: "oklch(8% 0.015 60)",
              fontWeight: 800,
              fontSize: "13px",
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              position: "relative",
              zIndex: 1,
            }}
          >
            <span>↗</span> {cta}
          </Link>
        </div>

        {secondaryLabel && secondaryHref && (
          <Link
            href={secondaryHref}
            style={{
              fontSize: "12px",
              color: "var(--muted)",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            {secondaryLabel} →
          </Link>
        )}
      </div>
    </>
  );
}
