import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function formatDateTime(date: Date | string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(date));
}

export const PLANS = {
  free: {
    name: "Free",
    price: 0,
    postsPerDay: 2,
    platforms: 2,
    aiCredits: 5,
    features: ["2 social platforms", "2 posts/day", "5 AI credits/month", "Basic analytics"],
  },
  pro: {
    name: "Pro",
    price: 29.99,
    postsPerDay: 5,
    platforms: 5,
    aiCredits: 100,
    features: ["5 social platforms", "5 posts/day", "100 AI credits/month", "Content calendar", "Advanced analytics", "WordPress integration"],
  },
  agency: {
    name: "Agency",
    price: 99.99,
    postsPerDay: 20,
    platforms: 999,
    aiCredits: 500,
    features: ["Unlimited platforms", "20 posts/day", "500 AI credits/month", "SEO blog generation", "Priority support", "Custom branding", "Team collaboration"],
  },
} as const;

export type Plan = keyof typeof PLANS;

export const PLATFORMS = [
  { id: "twitter",   name: "X (Twitter)", shortName: "Twitter",   color: "#1D9BF0", icon: "𝕏"  },
  { id: "instagram", name: "Instagram",   shortName: "Instagram", color: "#E4405F", icon: "📷"  },
  { id: "facebook",  name: "Facebook",    shortName: "Facebook",  color: "#1877F2", icon: "👥"  },
  { id: "linkedin",  name: "LinkedIn",    shortName: "LinkedIn",  color: "#0A66C2", icon: "💼"  },
  { id: "tiktok",    name: "TikTok",      shortName: "TikTok",    color: "#FF0050", icon: "🎵"  },
  { id: "youtube",   name: "YouTube",     shortName: "YouTube",   color: "#FF0000", icon: "▶️"  },
  { id: "threads",   name: "Threads",     shortName: "Threads",   color: "#6B6B6B", icon: "🧵"  },
  { id: "bluesky",   name: "Bluesky",     shortName: "Bluesky",   color: "#0085FF", icon: "🦋"  },
  { id: "pinterest", name: "Pinterest",   shortName: "Pinterest", color: "#E60023", icon: "📌"  },
  { id: "reddit",    name: "Reddit",      shortName: "Reddit",    color: "#FF4500", icon: "🔴"  },
] as const;
