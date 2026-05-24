import { site } from "./site";

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  readingTime: string;
  featured: boolean;
  content: string;
  image?: string;
};

const WP_API = "https://digitechlifestyle.com/wp-json/wp/v2";

type WPPost = {
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  categories: number[];
  sticky: boolean;
};

type WPCategory = {
  id: number;
  name: string;
};

async function getCategories(): Promise<Record<number, string>> {
  try {
    const res = await fetch(`${WP_API}/categories?per_page=50`, {
      next: { revalidate: 3600 },
    });
    const cats: WPCategory[] = await res.json();
    return Object.fromEntries(cats.map((c) => [c.id, c.name]));
  } catch {
    return {};
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function estimateReadingTime(html: string): string {
  const words = stripHtml(html).split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function wpToArticle(post: WPPost, categories: Record<number, string>): Article {
  const rawExcerpt = stripHtml(post.excerpt.rendered).slice(0, 160);
  return {
    slug: post.slug,
    title: post.title.rendered,
    description: rawExcerpt || site.description,
    category: categories[post.categories?.[0]] || "AI Tools",
    date: post.date.slice(0, 10),
    author: "DigitechLifestyle Editorial",
    readingTime: estimateReadingTime(post.content.rendered),
    featured: post.sticky || false,
    content: post.content.rendered,
  };
}

export async function getArticles(): Promise<Article[]> {
  try {
    const [postsRes, categories] = await Promise.all([
      fetch(
        `${WP_API}/posts?per_page=100&status=publish&_fields=slug,title,excerpt,content,date,categories,sticky`,
        { next: { revalidate: 3600 } }
      ),
      getCategories(),
    ]);
    if (!postsRes.ok) return [];
    const posts: WPPost[] = await postsRes.json();
    return posts
      .map((p) => wpToArticle(p, categories))
      .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  } catch {
    return [];
  }
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  try {
    const [postsRes, categories] = await Promise.all([
      fetch(
        `${WP_API}/posts?slug=${encodeURIComponent(slug)}&status=publish`,
        { next: { revalidate: 3600 } }
      ),
      getCategories(),
    ]);
    if (!postsRes.ok) return undefined;
    const posts: WPPost[] = await postsRes.json();
    if (!posts.length) return undefined;
    return wpToArticle(posts[0], categories);
  } catch {
    return undefined;
  }
}

// WordPress content is already HTML — return as-is.
export function markdownToHtml(content: string): string {
  return content;
}
