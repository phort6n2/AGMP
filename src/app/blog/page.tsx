import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { IconArrow } from "@/components/Icons";
import { posts, formatDate } from "@/lib/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources — Auto Glass Marketing Guides",
  description:
    "Practical marketing guides for auto glass shops: local SEO, Google Ads, web design, and growth strategy from Auto Glass Marketing Pros.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Resources — Auto Glass Marketing Guides",
    description:
      "Practical, no-fluff marketing guides written specifically for auto glass shops.",
    url: `${site.url}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title={
          <>
            Grow your shop with{" "}
            <span className="text-gradient">real-world guides</span>
          </>
        }
        subtitle="No fluff, no theory — practical marketing advice written specifically for auto glass shops. Steal our playbook."
      />

      <section className="pb-8">
        <Container>
          {/* Featured */}
          <Link
            href={`/blog/${featured.slug}`}
            className="glass-card group grid gap-6 rounded-3xl p-7 sm:p-9 lg:grid-cols-2 lg:items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-glass-500/15 px-3 py-1 font-semibold text-glass-200">
                  {featured.category}
                </span>
                <span className="text-ink-500">
                  {formatDate(featured.date)} · {featured.readingTime}
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-300">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white">
                Read the guide
                <IconArrow className="h-4 w-4 text-glass-300 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            <div className="relative order-1 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-ink-700 to-ink-850 lg:order-2">
              <div className="bg-radial-glow pointer-events-none absolute inset-0" />
              <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
              <span className="relative font-display text-6xl font-extrabold text-white/15">
                AGMP
              </span>
            </div>
          </Link>

          {/* Grid */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="glass-card group flex flex-col rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-glass-500/15 px-2.5 py-0.5 font-semibold text-glass-200">
                    {p.category}
                  </span>
                </div>
                <h3 className="mt-4 flex-1 font-display text-lg font-bold leading-snug text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-400 line-clamp-3">
                  {p.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-ink-500">
                  <span>{formatDate(p.date)}</span>
                  <span>{p.readingTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Rather we just did it for you?"
        subtitle="Reading is great. Booked bays are better. Let's build your growth engine together."
      />
    </>
  );
}
