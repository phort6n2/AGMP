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
  /** Contextual internal link to a non-service page (e.g. the framework). */
  relatedGuide?: { href: string; anchor: string };
  /** Rendered HTML (external articles, e.g. BabyLoveGrowth). */
  html?: string;
  /** Structured blocks (static posts). */
  body?: Block[];
  /** Article/FAQ schema supplied by BabyLoveGrowth. */
  jsonLd?: unknown;
  faqJsonLd?: unknown;
  external: boolean;
};

function fromStatic(p: Post): Article {
  return { ...p, external: false };
}

/* ------------------------------------------------------------------ *
 * BabyLoveGrowth API integration (pull model)
 * Docs: https://www.babylovegrowth.ai/docs/integrations/api
 *
 *   GET {BASE}/v1/articles?limit=50&offset=0   -> summaries (no content)
 *   GET {BASE}/v1/articles/{id}                -> full content_html + schema
 *   Auth header: X-API-Key: <key>
 *
 * Configure with env vars (from Settings -> Integrations -> Next.js Blog / API):
 *   BABYLOVEGROWTH_BLOG_API_KEY  (required, server-side only)
 *   BABYLOVEGROWTH_BLOG_API_URL  (optional base override)
 *
 * Without a key the blog falls back to static posts, so it never breaks.
 * ------------------------------------------------------------------ */

const API_BASE =
  process.env.BABYLOVEGROWTH_BLOG_API_URL?.replace(/\/$/, "") ??
  "https://api.babylovegrowth.ai/api/integrations";

// Revalidate hourly; new auto-posts appear without a redeploy.
const REVALIDATE = 3600;

type BlgSummary = {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  meta_description?: string;
  hero_image_url?: string;
  created_at?: string;
  seedKeyword?: string;
  keywords?: string[];
};

type BlgFull = BlgSummary & {
  content_html?: string;
  content_markdown?: string;
  jsonLd?: unknown;
  faqJsonLd?: unknown;
};

function apiKey() {
  return process.env.BABYLOVEGROWTH_BLOG_API_KEY ?? "";
}

function estimateReadingTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function categoryOf(a: BlgSummary): string {
  return a.keywords?.[0] ?? a.seedKeyword ?? "Auto Glass Marketing";
}

function summaryToArticle(a: BlgSummary): Article {
  return {
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt || a.meta_description || "",
    category: categoryOf(a),
    date: a.created_at ?? new Date().toISOString(),
    readingTime: "",
    image: a.hero_image_url || undefined,
    external: true,
  };
}

async function fetchSummaries(): Promise<BlgSummary[]> {
  const key = apiKey();
  if (!key) return [];
  const all: BlgSummary[] = [];
  const limit = 50;
  let offset = 0;
  try {
    // Paginate, but cap total requests defensively.
    for (let page = 0; page < 20; page++) {
      const res = await fetch(
        `${API_BASE}/v1/articles?limit=${limit}&offset=${offset}`,
        {
          headers: { "X-API-Key": key, "Content-Type": "application/json" },
          next: { revalidate: REVALIDATE },
        }
      );
      if (!res.ok) break;
      const batch = (await res.json()) as BlgSummary[];
      if (!Array.isArray(batch) || batch.length === 0) break;
      all.push(...batch);
      if (batch.length < limit) break;
      offset += limit;
    }
  } catch {
    return all;
  }
  return all;
}

async function fetchFull(id: number): Promise<BlgFull | null> {
  const key = apiKey();
  if (!key) return null;
  try {
    const res = await fetch(`${API_BASE}/v1/articles/${id}`, {
      headers: { "X-API-Key": key, "Content-Type": "application/json" },
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return null;
    return (await res.json()) as BlgFull;
  } catch {
    return null;
  }
}

/** All articles (summaries), newest first — BabyLoveGrowth merged over static. */
export async function getArticles(): Promise<Article[]> {
  const external = (await fetchSummaries()).map(summaryToArticle);
  const seen = new Set(external.map((a) => a.slug));
  const merged = [
    ...external,
    ...staticPosts.map(fromStatic).filter((a) => !seen.has(a.slug)),
  ];
  return merged.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

/** A single article with full content. Falls back to a static post. */
export async function getArticle(slug: string): Promise<Article | undefined> {
  const summaries = await fetchSummaries();
  const match = summaries.find((s) => s.slug === slug);
  if (match) {
    const full = await fetchFull(match.id);
    const html = full?.content_html ?? "";
    return {
      ...summaryToArticle(match),
      html,
      readingTime: html ? estimateReadingTime(html) : "",
      jsonLd: full?.jsonLd,
      faqJsonLd: full?.faqJsonLd,
    };
  }
  const staticMatch = staticPosts.find((p) => p.slug === slug);
  return staticMatch ? fromStatic(staticMatch) : undefined;
}

/** Slugs known at build time (static posts). External slugs render on-demand. */
export const staticArticleSlugs = staticPosts.map((p) => p.slug);
