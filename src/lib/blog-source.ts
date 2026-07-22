import { posts as staticPosts, type Post, type Block } from "./posts";

/**
 * Unified blog article — either a hand-written static post (rendered from
 * `body` blocks) or an article pulled from BabyLoveGrowth (rendered from `html`).
 */
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  image?: string;
  relatedService?: { slug: string; anchor: string };
  /** Rendered HTML (external articles, e.g. BabyLoveGrowth). */
  html?: string;
  /** Structured blocks (static posts). */
  body?: Block[];
  external: boolean;
};

function fromStatic(p: Post): Article {
  return { ...p, external: false };
}

/* ------------------------------------------------------------------ *
 * BabyLoveGrowth integration (pull / API model)
 *
 * Configure via environment variables (from your BabyLoveGrowth dashboard):
 *   BABYLOVEGROWTH_API_URL  – full articles endpoint that returns your posts
 *   BABYLOVEGROWTH_API_KEY  – your API key / bearer token
 *
 * If BABYLOVEGROWTH_API_URL is unset, the blog falls back to static posts,
 * so the site always works. Field mapping is defensive to tolerate common
 * response shapes.
 * ------------------------------------------------------------------ */

function estimateReadingTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function normalize(raw: any): Article | null {
  if (!raw || typeof raw !== "object") return null;
  const title = raw.title ?? raw.name ?? raw.headline;
  const html =
    raw.content_html ?? raw.contentHtml ?? raw.html ?? raw.content ?? raw.body ?? "";
  if (!title || !html) return null;
  const slug = raw.slug ?? raw.permalink ?? slugify(String(title));
  const excerpt =
    raw.metaDescription ??
    raw.meta_description ??
    raw.description ??
    raw.excerpt ??
    raw.summary ??
    String(html).replace(/<[^>]+>/g, " ").trim().slice(0, 160);
  const date =
    raw.publishedAt ??
    raw.published_at ??
    raw.date ??
    raw.createdAt ??
    raw.created_at ??
    new Date().toISOString();
  const category =
    raw.category ??
    (Array.isArray(raw.tags) ? raw.tags[0] : raw.tags) ??
    (Array.isArray(raw.keywords) ? raw.keywords[0] : undefined) ??
    "Auto Glass Marketing";
  const image =
    raw.heroImageUrl ?? raw.hero_image_url ?? raw.image ?? raw.coverImage ?? raw.featuredImage;

  return {
    slug: String(slug),
    title: String(title),
    excerpt: String(excerpt),
    category: String(category),
    date: String(date),
    readingTime: raw.readingTime ?? estimateReadingTime(String(html)),
    image: image ? String(image) : undefined,
    html: String(html),
    external: true,
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */

async function fetchExternalArticles(): Promise<Article[]> {
  const url = process.env.BABYLOVEGROWTH_API_URL;
  if (!url) return [];
  const key = process.env.BABYLOVEGROWTH_API_KEY ?? "";
  try {
    const res = await fetch(url, {
      headers: {
        ...(key ? { Authorization: `Bearer ${key}`, "x-api-key": key } : {}),
        Accept: "application/json",
      },
      // Refresh at most every 10 minutes; new auto-posts appear without redeploy.
      next: { revalidate: 600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const list = Array.isArray(data)
      ? data
      : data.articles ?? data.posts ?? data.data ?? data.items ?? [];
    return (Array.isArray(list) ? list : [])
      .map(normalize)
      .filter((a): a is Article => a !== null);
  } catch {
    return [];
  }
}

/** All articles, newest first — external (BabyLoveGrowth) merged over static. */
export async function getArticles(): Promise<Article[]> {
  const external = await fetchExternalArticles();
  const seen = new Set(external.map((a) => a.slug));
  const merged = [...external, ...staticPosts.map(fromStatic).filter((a) => !seen.has(a.slug))];
  return merged.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  const all = await getArticles();
  return all.find((a) => a.slug === slug);
}

/** Slugs known at build time (static posts). External slugs render on-demand. */
export const staticArticleSlugs = staticPosts.map((p) => p.slug);
