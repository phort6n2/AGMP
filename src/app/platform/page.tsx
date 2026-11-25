import { orgRef, websiteRef } from "@/lib/schema";
import Link from "next/link";
import type { Metadata } from "next";
import { Container, Button, Badge, Eyebrow } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { IconArrow, IconCheck, IconMessage, iconMap } from "@/components/Icons";
import { Mockup } from "@/components/Mockups";
import {
  TopFeatures,
  RhythmSection,
  IncludedGrid,
  StepsSection,
  FaqSection,
} from "@/components/ServiceSections";
import { platformContent as p } from "@/lib/platform-content";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  alternates: { canonical: "/platform" },
  openGraph: {
    title: `${p.metaTitle} | ${site.name}`,
    description: p.metaDescription,
    url: `${site.url}/platform`,
    type: "website",
  },
};

export default function PlatformPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: p.metaTitle,
        description: p.metaDescription,
        url: `${site.url}/platform`,
        isPartOf: websiteRef,
        about: orgRef,
      },
      {
        "@type": "FAQPage",
        mainEntity: p.faqs.map((f) => ({
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
            name: "Your Shop Portal",
            item: `${site.url}/platform`,
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

      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="bg-radial-glow pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Badge>Comes with every service</Badge>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
                {p.hero}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-300">
                {p.heroSub}
              </p>
              <ul className="mt-6 space-y-2.5">
                {p.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-ink-100">{o}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/audit" size="lg" withArrow>
                  {site.ctaText}
                </Button>
                <a
                  href={site.smsHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-600 px-6 py-3.5 text-base font-medium text-ink-100 transition-colors hover:border-glass-300 hover:text-white"
                >
                  <IconMessage className="h-5 w-5 text-glass-300" />
                  Text us
                </a>
              </div>
            </div>
            <Mockup
              kind="portal"
              caption="Illustrative: the Leads tab with demo leads."
            />
          </div>
        </Container>
      </section>

      <TopFeatures
        eyebrow="What matters most"
        title="The four things your shop portal does for you"
        features={p.topFeatures}
      />

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The problem</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              {p.problem.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">
              {p.problem.body}
            </p>
          </div>
        </Container>
      </section>

      <RhythmSection rhythm={p.rhythm} mockups={["alert", "coaching", "report"]} />

      <IncludedGrid title="Everything in your shop portal" items={p.included} />

      <StepsSection steps={p.steps} title="How a lead reaches you" />

      <FaqSection title="Shop portal FAQ" faqs={p.faqs} />

      <section className="py-12">
        <Container>
          <div className="text-center">
            <Eyebrow>Comes with</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-bold text-white">
              Every service feeds the same portal
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((o) => {
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
