import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowState — Premium Social Media Management",
  description:
    "AI-powered social media management platform. Create, schedule, and publish content across all platforms with built-in SEO optimization.",
  keywords: "social media management, AI content generation, social media scheduler, content calendar",
  openGraph: {
    title: "FlowState — Premium Social Media Management",
    description: "AI-powered social media management platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#f8f8ff]" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
