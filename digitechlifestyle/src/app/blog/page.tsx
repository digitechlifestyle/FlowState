import type { Metadata } from "next";
import { Suspense } from "react";
import { getArticles } from "@/lib/articles";
import BlogListClient from "@/components/BlogListClient";

export const metadata: Metadata = {
  title: "Blog — DigiTech Lifestyle",
  description: "Crypto, AI, and digital lifestyle guides — honest, independent, UK-focused. No hype, no financial advice.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const articles = await getArticles();
  return (
    <Suspense>
      <BlogListClient articles={articles} />
    </Suspense>
  );
}
