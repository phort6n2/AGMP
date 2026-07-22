import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * On-demand blog revalidation.
 *
 * Point BabyLoveGrowth's webhook (or a Zapier/Make step) here after it
 * publishes so the new article appears immediately instead of waiting for the
 * ISR window. Secure with the REVALIDATE_SECRET env var.
 *
 *   POST /api/revalidate            body: { "secret": "...", "slug": "my-post" }
 *   GET  /api/revalidate?secret=... &slug=my-post
 *
 * If REVALIDATE_SECRET is unset, the endpoint is disabled (returns 401).
 */
async function handle(secret: string | null, slug: string | null) {
  const expected = process.env.REVALIDATE_SECRET;
  if (!expected || secret !== expected) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  revalidatePath("/blog");
  if (slug) revalidatePath(`/blog/${slug}`);
  revalidatePath("/sitemap.xml");
  return NextResponse.json({ ok: true, revalidated: true, slug: slug ?? "all" });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return handle(body?.secret ?? null, body?.slug ?? null);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  return handle(searchParams.get("secret"), searchParams.get("slug"));
}
