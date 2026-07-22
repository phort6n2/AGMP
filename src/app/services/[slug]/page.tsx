import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Button, Badge, Eyebrow } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import {
  IconArrow,
  IconCheck,
  IconPhone,
  iconMap,
} from "@/components/Icons";
import { AiVisibility } from "@/components/AiVisibility";
import { servicesContent, serviceSlugs } from "@/lib/services-content";
import { services, site } from "@/lib/site";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = servicesContent[slug];
  if (!s) return {};
  const title = `${s.name} for Auto Glass Shops`;
  return {
    title,
    description: s.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${title} — ${site.name}`,
      description: s.metaDescription,
      url: `${site.url}/services/${slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = servicesContent[slug];
  if (!s) notFound();

  const Icon = iconMap[s.icon as keyof typeof iconMap];
  const others = services.filter((o) => o.slug !== slug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: s.name,
        name: `${s.name} for Auto Glass Shops`,
        description: s.metaDescription,
        areaServed: "United States",
        provider: { "@type": "Organization", name: site.name, url: site.url },
        url: `${site.url}/services/${slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${site.url}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: s.name,
            item: `${site.url}/services/${slug}`,
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
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="bg-radial-glow pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Badge>
                <span className="flex h-4 w-4 items-center justify-center text-glass-300">
                  <Icon className="h-4 w-4" />
                </span>
                {s.eyebrow}
              </Badge>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
                {s.hero}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-300">
                {s.heroSub}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" size="lg" withArrow>
                  {site.ctaText}
                </Button>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-600 px-6 py-3.5 text-base font-medium text-ink-100 transition-colors hover:border-glass-300 hover:text-white"
                >
                  <IconPhone className="h-5 w-5 text-glass-300" />
                  {site.phone}
                </a>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-8">
              <Eyebrow>What you get</Eyebrow>
              <ul className="mt-5 space-y-3.5">
                {s.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-ink-100">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The problem</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              {s.problem.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">
              {s.problem.body}
            </p>
          </div>
        </Container>
      </section>

      {/* AI/LLM visibility highlight — Local SEO only */}
      {slug === "local-seo" && <AiVisibility />}

      {/* Features */}
      <section className="py-12">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>What&apos;s included</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Everything in your {s.name} engagement
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.features.map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-glass-500/15 text-glass-300">
                  <IconCheck className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Steps */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Our process
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {s.steps.map((step, i) => (
              <div key={step.title} className="glass-card rounded-2xl p-6">
                <span className="font-display text-3xl font-extrabold text-white/10">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <Eyebrow>Questions</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                {s.name} FAQ
              </h2>
            </div>
            <div className="mt-10 space-y-4">
              {s.faqs.map((f) => (
                <details
                  key={f.q}
                  className="glass-card group rounded-2xl p-6 [&_summary]:cursor-pointer"
                >
                  <summary className="flex items-center justify-between gap-4 font-display text-lg font-semibold text-white marker:content-none">
                    {f.q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-glass-300 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-ink-300">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Other services */}
      <section className="py-12">
        <Container>
          <div className="text-center">
            <Eyebrow>Keep exploring</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-bold text-white">
              Other ways we grow your shop
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {others.map((o) => {
              const OIcon = iconMap[o.icon as keyof typeof iconMap];
              return (
                <Link
                  key={o.slug}
                  href={`/services/${o.slug}`}
                  className="glass-card group flex items-center gap-4 rounded-2xl p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glass-500/15 text-glass-300">
                    <OIcon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{o.name}</div>
                    <div className="text-xs text-ink-400">{o.short}</div>
                  </div>
                  <IconArrow className="h-4 w-4 text-ink-500 transition-transform group-hover:translate-x-1 group-hover:text-glass-300" />
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
