"use client";

import { useEffect } from "react";

const CATEGORY_NAV = [
  { label: "All",       href: "/blog",                           param: "" },
  { label: "Crypto",    href: "/blog?category=Cryptocurrencies", param: "cryptocurrencies" },
  { label: "XRP",       href: "/blog?category=XRP",              param: "xrp" },
  { label: "AI",        href: "/blog?category=AI",               param: "ai" },
  { label: "DeFi",      href: "/blog?category=DeFi",             param: "defi" },
  { label: "Reviews",   href: "/blog?category=Reviews",          param: "reviews" },
  { label: "News",      href: "/news",                           param: "" },
  { label: "Resources", href: "/resources",                      param: "" },
];

function applyFilter(category: string) {
  const rows = document.querySelectorAll<HTMLElement>("[data-cat]");
  rows.forEach((el) => {
    if (!category) {
      el.style.display = "";
    } else {
      const cat = (el.dataset.cat ?? "").toLowerCase();
      el.style.display = cat.includes(category) ? "" : "none";
    }
  });
  const label = CATEGORY_NAV.find((n) => n.param === category)?.label;
  const titleEl = document.getElementById("articles-section-title");
  if (titleEl) titleEl.textContent = label && label !== "All" ? `${label} articles` : "Latest";
  const featured = document.getElementById("featured-section");
  if (featured) featured.style.display = category ? "none" : "";
  // update pill active states
  document.querySelectorAll<HTMLElement>("[data-filter-pill]").forEach((pill) => {
    const active = pill.dataset.filterPill === category;
    pill.style.background = active ? "var(--amber)" : "var(--bg-card)";
    pill.style.color = active ? "oklch(8% 0.015 60)" : "var(--muted)";
    pill.style.border = active ? "1px solid var(--amber)" : "1px solid var(--line)";
  });
}

export default function CategoryFilterClient() {
  useEffect(() => {
    // Read category from URL on mount and on popstate
    const getCategory = () => {
      const params = new URLSearchParams(window.location.search);
      return (params.get("category") ?? "").toLowerCase();
    };

    const run = () => applyFilter(getCategory());
    run();
    window.addEventListener("popstate", run);
    return () => window.removeEventListener("popstate", run);
  }, []);

  return (
    <nav aria-label="Browse by category" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
      {CATEGORY_NAV.map((n) => (
        <a
          key={n.label}
          href={n.href}
          data-filter-pill={n.param}
          onClick={(e) => {
            if (n.href.startsWith("/blog")) {
              e.preventDefault();
              window.history.pushState({}, "", n.href);
              applyFilter(n.param);
            }
          }}
          style={{
            fontSize: "12px", fontWeight: 700, padding: "6px 14px", borderRadius: "20px",
            textDecoration: "none", cursor: "pointer",
            background: "var(--bg-card)",
            color: "var(--muted)",
            border: "1px solid var(--line)",
          }}
        >{n.label}</a>
      ))}
    </nav>
  );
}
