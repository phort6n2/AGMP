import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Button } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { IconArrow } from "@/components/Icons";
import { getArticle, getArticles, staticArticleSlugs } from "@/lib/blog-source";
import { formatDate } from "@/lib/posts";
import { site } from "@/lib/site";

// Pre-render static posts; BabyLoveGrowth articles render on-demand + cache.
export function generateStaticParams() {
  return staticArticleSlugs.map((slug) => ({ slug }));
}
export const dynamicParams = true;
export const revalidate = 600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getArticle(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${site.url}/blog/${slug}`,
      publishedTime: post.date,
      authors: [site.name],
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getArticle(slug);
  if (!post) notFound();

  const related = (await getArticles())
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        image: post.image,
        author: { "@type": "Organization", name: site.name, url: site.url },
        publisher: { "@type": "Organization", name: site.name, url: site.url },
        mainEntityOfPage: `${site.url}/blog/${slug}`,
        url: `${site.url}/blog/${slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Resources",
            item: `${site.url}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${site.url}/blog/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Article + FAQ schema supplied by BabyLoveGrowth, when present */}
      {post.jsonLd != null && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.jsonLd) }}
        />
      )}
      {post.faqJsonLd != null && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.faqJsonLd) }}
        />
      )}
      <article>
        {/* Header */}
        <section className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="bg-radial-glow pointer-events-none absolute inset-0" />
          <Container className="relative">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-ink-400 transition-colors hover:text-white"
              >
                <IconArrow className="h-4 w-4 rotate-180" />
                All resources
              </Link>
              <div className="mt-6 flex items-center gap-3 text-xs">
                <span className="rounded-full bg-glass-500/15 px-3 py-1 font-semibold text-glass-200">
                  {post.category}
                </span>
                <span className="text-ink-400">
                  {formatDate(post.date)}
                  {post.readingTime ? ` · ${post.readingTime}` : ""}
                </span>
              </div>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                {post.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-ink-300">
                {post.excerpt}
              </p>
            </div>
          </Container>
        </section>

        {/* Body */}
        <section className="pb-12">
          <Container>
            <div className="mx-auto max-w-3xl">
              {post.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.image}
                  alt={post.title}
                  className="mb-8 w-full rounded-2xl border border-white/10"
                />
              )}

              {post.html ? (
                <div
                  className="article-prose"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
              ) : (
                <div className="space-y-5">
                  {post.body?.map((block, i) => {
                    if (block.type === "h2")
                      return (
                        <h2
                          key={i}
                          className="pt-4 font-display text-2xl font-bold text-white"
                        >
                          {block.text}
                        </h2>
                      );
                    if (block.type === "quote")
                      return (
                        <blockquote
                          key={i}
                          className="border-l-2 border-glass-400 pl-5 font-display text-xl font-medium italic leading-relaxed text-white"
                        >
                          {block.text}
                        </blockquote>
                      );
                    if (block.type === "ul")
                      return (
                        <ul key={i} className="space-y-2.5">
                          {block.items.map((item) => (
                            <li key={item} className="flex gap-3 text-ink-200">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-glass-300" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    return (
                      <p key={i} className="text-lg leading-relaxed text-ink-200">
                        {block.text}
                      </p>
                    );
                  })}
                </div>
              )}

              {/* Inline CTA */}
              <div className="mt-12 rounded-2xl border border-glass-300/20 bg-glass-500/5 p-7 text-center">
                <h3 className="font-display text-xl font-bold text-white">
                  Want this handled for your shop?
                </h3>
                <p className="mx-auto mt-2 max-w-md text-ink-300">
                  We do this every day for auto glass shops. Start with a free
                  marketing audit and we&apos;ll build the plan for you.
                </p>
                <div className="mt-5">
                  <Button href="/audit" size="lg" withArrow>
                    Get Your Free Audit
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-12">
          <Container>
            <h2 className="font-display text-2xl font-bold text-white">
              Keep reading
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="glass-card group flex flex-col rounded-2xl p-6"
                >
                  <span className="w-fit rounded-full bg-glass-500/15 px-2.5 py-0.5 text-xs font-semibold text-glass-200">
                    {p.category}
                  </span>
                  <h3 className="mt-4 flex-1 font-display text-lg font-bold leading-snug text-white">
                    {p.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-glass-200">
                    Read
                    <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  );
}
