export type Tool = {
  name: string;
  category: string;
  description: string;
  bestFor: string;
  pricing: string;
  href: string;
  featured?: boolean;
};

export const tools: Tool[] = [
  {
    name: "ChatGPT",
    category: "AI Assistant",
    description: "Research, drafting, workflow planning, code help, and business ideation in one general-purpose assistant.",
    bestFor: "Solo operators and small teams",
    pricing: "Free and paid plans",
    href: "/blog/how-to-use-chatgpt-for-business",
    featured: true,
  },
  {
    name: "Notion AI",
    category: "Workspace AI",
    description: "Docs, wikis, project notes, and AI summaries for content and operations teams.",
    bestFor: "Knowledge management",
    pricing: "Paid add-on",
    href: "/blog/best-productivity-tools",
    featured: true,
  },
  {
    name: "Zapier",
    category: "Automation",
    description: "Connect thousands of apps and automate repetitive marketing, sales, and admin tasks.",
    bestFor: "No-code app workflows",
    pricing: "Free and paid plans",
    href: "/blog/best-no-code-automation-tools",
    featured: true,
  },
  {
    name: "Make",
    category: "Automation",
    description: "Visual automation builder for multi-step business processes and data routing.",
    bestFor: "Advanced no-code automations",
    pricing: "Free and paid plans",
    href: "/blog/best-no-code-automation-tools",
  },
  {
    name: "ConvertKit",
    category: "Newsletter",
    description: "Email capture, automations, landing pages, and creator commerce for newsletter-led businesses.",
    bestFor: "Creators and affiliates",
    pricing: "Free and paid plans",
    href: "/newsletter",
  },
  {
    name: "Ledger",
    category: "Crypto Wallet",
    description: "Hardware wallet storage for people who want more control over long-term digital assets.",
    bestFor: "Self-custody",
    pricing: "Paid device",
    href: "/blog/best-crypto-wallets",
  },
  {
    name: "Grammarly",
    category: "AI Writing",
    description: "Writing quality checks, tone adjustments, and grammar support for everyday publishing.",
    bestFor: "Content production",
    pricing: "Free and paid plans",
    href: "/blog/best-ai-writing-tools",
  },
  {
    name: "Canva",
    category: "Creator Tools",
    description: "Fast design, brand kits, short-form creative assets, and AI-assisted visual production.",
    bestFor: "Content creators",
    pricing: "Free and paid plans",
    href: "/blog/ai-for-content-creators",
  },
  {
    name: "DeepSeek",
    category: "AI Assistant",
    description: "High-performance AI reasoning and chat from China's DeepSeek lab — competitive with GPT-4 class models at a fraction of the cost.",
    bestFor: "Cost-effective AI reasoning",
    pricing: "Free and paid plans",
    href: "https://www.deepseek.com/en/",
    featured: true,
  },
];
