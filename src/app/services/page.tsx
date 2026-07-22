import Link from "next/link";
import type { Metadata } from "next";
import { Container, SectionHeading, Button, Eyebrow } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { services, site } from "@/lib/site";
import { IconArrow, IconCheck, IconSparkle, iconMap } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services — SEO, Google Ads, Web Design & Directory",
  description:
    "The complete auto glass growth system: Local SEO, Google Ads, conversion-focused web design, and our driver directory. Everything your shop needs to stay booked.",
};

const included = [
  "A dedicated auto glass marketing expert",
  "Transparent reporting tied to booked jobs",
  "Month-to-month — cancel anytime",
  "A custom plan built around your goals",
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title={
          <>
            One system to get your shop{" "}
            <span className="text-gradient">found &amp; booked</span>
          </>
        }
        subtitle="Four channels that work together to turn local drivers into scheduled installs. Use one, or stack them into a complete growth engine."
      >
        <Button href="/contact" size="lg" withArrow>
          {site.ctaText}
        </Button>
      </PageHeader>

      {/* Service cards */}
      <section className="pb-8">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <div
                  key={s.slug}
                  className="glass-card group flex flex-col rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-glass-500/15 text-glass-300 ring-1 ring-glass-300/20">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-display text-2xl font-bold text-white">
                          {s.name}
                        </h2>
                        {s.badge && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-glass-300/30 bg-glass-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-glass-200">
                            <IconSparkle className="h-3 w-3" />
                            {s.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-glass-300">{s.tagline}</p>
                    </div>
                  </div>
                  <p className="mt-5 flex-1 leading-relaxed text-ink-300">
                    {s.summary}
                  </p>
                  <div className="mt-7">
                    <Button
                      href={`/services/${s.slug}`}
                      variant="outline"
                      withArrow
                    >
                      Learn more
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section className="py-16">
        <Container>
          <div className="glass-card grid gap-8 rounded-3xl p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Every engagement includes</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">
                The AGMP standard
              </h2>
              <p className="mt-4 text-ink-300">
                No matter which services you choose, you get the same
                foundation: real expertise, honest reporting, and the freedom of
                a month-to-month relationship.
              </p>
            </div>
            <ul className="grid gap-3">
              {included.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-ink-100">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Not sure banner */}
      <section className="pb-8">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-glass-300/20 bg-glass-500/5 px-6 py-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                Not sure where to start?
              </h3>
              <p className="text-sm text-ink-300">
                Tell us about your shop and we&apos;ll recommend the right mix —
                no upsell, just what will move the needle.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-glass-200 hover:text-white"
            >
              Get a recommendation
              <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
