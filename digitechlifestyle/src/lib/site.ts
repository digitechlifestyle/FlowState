export const site = {
  name: "DigiTech Lifestyle",
  tagline: "Crypto, AI & Digital Lifestyle — Independent. Honest. UK-focused.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://digitechlifestyle.com",
  description:
    "Educational guides, honest reviews, and breaking news on crypto, AI, and digital lifestyle. Independent writing from a crypto enthusiast since 2017.",
  email: "hello@digitechlifestyle.com",
};

export const navItems = [
  { label: "Blog", href: "/blog" },
  { label: "Crypto", href: "/blog?category=Crypto" },
  { label: "AI", href: "/blog?category=AI" },
  { label: "Reviews", href: "/blog?category=Reviews" },
];

export const categories = [
  "Crypto",
  "AI",
  "Reviews",
] as const;

export type Category = (typeof categories)[number];
