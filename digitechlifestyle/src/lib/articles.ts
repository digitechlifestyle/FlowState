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

const WP_API = "https://digitechlifestyle-com-206789.hostingersite.com/wp-json/wp/v2";

type WPPost = {
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  categories: number[];
  sticky: boolean;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
  };
};

type WPCategory = {
  id: number;
  name: string;
};

async function getCategories(): Promise<Record<number, string>> {
  try {
    const res = await fetch(`${WP_API}/categories?per_page=50`, {
      cache: "force-cache",
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

// Pool of varied fallback images per category — selected deterministically by slug
const FALLBACK_POOLS: Record<string, string[]> = {
  Crypto: [
    "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
    "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
    "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=800&q=80",
    "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80",
    "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?w=800&q=80",
    "https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?w=800&q=80",
    "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?w=800&q=80",
  ],
  AI: [
    "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    "https://images.unsplash.com/photo-1655720031554-a929595ffad7?w=800&q=80",
    "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&q=80",
    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=800&q=80",
    "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?w=800&q=80",
    "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?w=800&q=80",
  ],
  Reviews: [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?w=800&q=80",
    "https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?w=800&q=80",
  ],
  default: [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=800&q=80",
    "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?w=800&q=80",
  ],
};

function slugHash(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

function getFallbackImage(slug: string, category: string): string {
  const pool = FALLBACK_POOLS[category] ?? FALLBACK_POOLS.default;
  return pool[slugHash(slug) % pool.length];
}

function wpToArticle(post: WPPost, categories: Record<number, string>): Article {
  const rawExcerpt = stripHtml(post.excerpt?.rendered || "").slice(0, 160);
  const category = categories[post.categories?.[0]] || "AI Tools";
  const wpImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const image = wpImage || getFallbackImage(post.slug, category);
  return {
    slug: post.slug,
    title: post.title.rendered,
    description: rawExcerpt || site.description,
    category,
    date: post.date.slice(0, 10),
    author: "DigitechLifestyle Editorial",
    readingTime: post.content?.rendered
      ? estimateReadingTime(post.content.rendered)
      : `${Math.max(1, Math.ceil(rawExcerpt.split(/\s+/).length / 40))} min read`,
    featured: post.sticky || false,
    content: post.content?.rendered || "",
    image,
  };
}

// Fetch a single page of posts (listings — no content, lighter payload)
async function fetchPage(page: number): Promise<{ posts: WPPost[]; totalPages: number }> {
  const res = await fetch(
    `${WP_API}/posts?per_page=100&page=${page}&status=publish&_embed=wp:featuredmedia&_fields=slug,title,excerpt,date,categories,sticky,_links`,
    { cache: "force-cache" }
  );
  if (!res.ok) return { posts: [], totalPages: 1 };
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
  const posts: WPPost[] = await res.json();
  return { posts, totalPages };
}

export async function getArticles(): Promise<Article[]> {
  try {
    const categories = await getCategories();

    // Fetch page 1 to discover total pages
    const { posts: firstPage, totalPages } = await fetchPage(1);

    // Fetch remaining pages in parallel
    const remainingPages = Array.from({ length: totalPages - 1 }, (_, i) => i + 2);
    const remainingResults = await Promise.all(remainingPages.map((p) => fetchPage(p)));

    const allPosts = [
      ...firstPage,
      ...remainingResults.flatMap((r) => r.posts),
    ];

    return allPosts
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
        `${WP_API}/posts?slug=${encodeURIComponent(slug)}&status=publish&_embed=wp:featuredmedia`,
        { cache: "force-cache" }
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
