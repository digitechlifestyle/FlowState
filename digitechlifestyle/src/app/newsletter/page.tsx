import type { Metadata } from "next";
import { NewsletterPageClient } from "./NewsletterPageClient";

export const metadata: Metadata = {
  title: "Newsletter — DigiTech Lifestyle",
  description: "Join the DigitechLifestyle newsletter for weekly AI, automation, digital wealth, and online income ideas.",
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterPage() {
  return <NewsletterPageClient />;
}
