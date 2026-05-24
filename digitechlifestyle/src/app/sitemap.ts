import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";
import { pillarPages } from "@/lib/pages";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "tool-directory", "blog", "newsletter", "resources", "about", "contact", "privacy-policy", "affiliate-disclosure", "terms"];
  const pageRoutes = pillarPages.map((page) => page.slug);
  const articles = await getArticles();
  const articleRoutes = articles.map((article) => `blog/${article.slug}`);

  return [...staticRoutes, ...pageRoutes, ...articleRoutes].map((route) => ({
    url: `${site.url}/${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("blog") ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
