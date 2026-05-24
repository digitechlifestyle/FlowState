export const site = {
  name: "DigitechLifestyle",
  tagline: "The Future of Digital Living, Wealth, AI & Automation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://digitechlifestyle.com",
  description:
    "Modern guides, tools, and digital products for AI workflows, online income, automation, digital wealth, and smarter connected living.",
  email: "hello@digitechlifestyle.com",
};

export const navItems = [
  { label: "AI Tools", href: "/ai-tools" },
  { label: "Digital Wealth", href: "/digital-wealth" },
  { label: "Automation", href: "/automation" },
  { label: "Smart Lifestyle", href: "/smart-lifestyle" },
  { label: "Make Money Online", href: "/make-money-online" },
  { label: "Tools", href: "/tool-directory" },
  { label: "Blog", href: "/blog" },
];

export const categories = [
  "AI Tools",
  "Digital Wealth",
  "Automation",
  "Smart Lifestyle",
  "Make Money Online",
  "Productivity",
  "Web3",
] as const;

export type Category = (typeof categories)[number];
