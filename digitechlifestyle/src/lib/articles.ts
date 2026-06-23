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

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function estimateReadingTime(html: string): string {
  const words = stripHtml(html).split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

// Unique fallback per article: picsum.photos uses slug as seed → deterministic, never duplicates
function getFallbackImage(slug: string): string {
  return `https://picsum.photos/seed/${encodeURIComponent(slug)}/800/500`;
}

/** Guess a display category from slug/title when WP categories are empty */
function inferCategory(slug: string, title: string): string {
  const t = (slug + " " + title).toLowerCase();
  if (/xrp|ripple/.test(t)) return "XRP & Ripple";
  if (/bitcoin|btc|satoshi|sats/.test(t)) return "Bitcoin";
  if (/ethereum|eth\b/.test(t)) return "Ethereum";
  if (/defi|decentrali[sz]|liquidity|yield|uniswap|aave/.test(t)) return "DeFi";
  if (/crypto|blockchain|altcoin|token|coin|wallet|exchange|binance|coinbase|kraken/.test(t)) return "Crypto";
  if (/ai\b|artificial intelligence|chatgpt|openai|claude|gemini|llm|machine learning/.test(t)) return "AI";
  if (/review/.test(t)) return "Reviews";
  if (/news|breaking|alert/.test(t)) return "News";
  return "Crypto & AI";
}

function wpToArticle(post: WPPost, categories: Record<number, string>): Article {
  const rawExcerpt = stripHtml(post.excerpt?.rendered || "").slice(0, 160);
  const wpCategory = post.categories?.[0] ? categories[post.categories[0]] : null;
  const category = wpCategory || inferCategory(post.slug, post.title?.rendered || "");
  const rawImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  // WP Snippet 5 rewrites subdomain → www in REST API responses.
  // www.digitechlifestyle.com/wp-content/* doesn't exist on the static server, so rewrite back.
  const wpImage = rawImage?.replace(
    'https://www.digitechlifestyle.com',
    'https://digitechlifestyle-com-206789.hostingersite.com'
  );
  const image = wpImage || getFallbackImage(post.slug);
  return {
    slug: post.slug,
    title: decodeHtmlEntities(post.title.rendered),
    description: rawExcerpt || site.description,
    category,
    date: post.date.slice(0, 10),
    author: "DigitechLifestyle Editorial",
    readingTime: post.content?.rendered
      ? estimateReadingTime(post.content.rendered)
      : "7 min read",
    featured: post.sticky || false,
    content: post.content?.rendered || "",
    image,
  };
}

// Fetch a single page of posts (listings — no content, lighter payload)
async function fetchPage(page: number): Promise<{ posts: WPPost[]; totalPages: number }> {
  const res = await fetch(
    `${WP_API}/posts?per_page=100&page=${page}&status=publish&_embed=wp:featuredmedia&_fields=slug,title,excerpt,date,categories,sticky,_links,_embedded`,
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
