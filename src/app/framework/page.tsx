import type { Metadata } from "next";
import { Container, SectionHeading, Button, Eyebrow } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { StageJourney } from "@/components/framework/StageJourney";
import { PillarEngine } from "@/components/framework/PillarEngine";
import { LeakMap } from "@/components/framework/LeakMap";
import { IconCheck, IconChart, IconBolt, IconTarget } from "@/components/Icons";
import {
  frameworkStages,
  timeline,
  frameworkFaqs,
} from "@/lib/framework";
import { site } from "@/lib/site";

const title = "The Auto Glass Marketing Framework";
const description =
  "The four-stage system we use to move auto glass shops from Invisible to Dominant — what each stage looks like, what's actually blocking you, and the work that moves you up.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/framework" },
  openGraph: {
    title: `${title} — ${site.name}`,
    description,
    url: `${site.url}/framework`,
    type: "article",
  },
};

const accentText: Record<string, string> = {
  amber: "text-amber-400",
  glass: "text-glass-300",
  signal: "text-signal",
};

const accentBorder: Record<string, string> = {
  amber: "border-amber-500/30",
  glass: "border-glass-300/30",
  signal: "border-signal/30",
};

export default function FrameworkPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${title}™`,
      description,
      author: { "@type": "Organization", name: site.name, url: site.url },
      publisher: { "@type": "Organization", name: site.name, url: site.url },
      mainEntityOfPage: `${site.url}/framework`,
      about: {
        "@type": "Thing",
        name: "Auto glass shop marketing",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: frameworkFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: site.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: title,
          item: `${site.url}/framework`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="Our methodology"
        title={
          <>
            The Auto Glass{" "}
            <span className="text-gradient">Marketing Framework</span>™
          </>
        }
        subtitle="Every auto glass shop sits at one of four stages. Each stage has a different bottleneck — and doing the right work in the wrong order is why most shop marketing fails. Here's the whole system, in the open."
      >
        <Button href="/audit" size="lg" withArrow>
          Find out which stage you&apos;re in
        </Button>
      </PageHeader>

      {/* ---------- The journey ---------- */}
      <section className="pb-8">
        <Container>
          <StageJourney />
        </Container>
      </section>

      {/* ---------- Why order matters ---------- */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Why a framework at all</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Most shop marketing fails because the work is{" "}
                <span className="text-gradient-amber">out of order</span>
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-300">
                <p>
                  A shop that isn&apos;t in the Map Pack yet doesn&apos;t need
                  Google Ads — it needs to exist as a business Google
                  understands. Selling that shop ads produces expensive clicks
                  that land on a profile nobody trusts.
                </p>
                <p>
                  That&apos;s the whole reason this framework exists. It tells us
                  what to do <span className="text-white">next</span> for your
                  shop specifically, and — just as often — what to{" "}
                  <span className="text-white">wait</span> on.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-7 sm:p-8">
              <div className="space-y-5">
                {[
                  {
                    icon: IconTarget,
                    title: "Diagnose before prescribing",
                    body: "We establish your stage first. The audit exists for exactly this reason.",
                  },
                  {
                    icon: IconBolt,
                    title: "Fix the bottleneck, not everything",
                    body: "One constraint governs each stage. Working on the rest is motion without progress.",
                  },
                  {
                    icon: IconChart,
                    title: "Measure in booked jobs",
                    body: "Impressions and clicks are diagnostics, never the scoreboard. Jobs are the scoreboard.",
                  },
                ].map((p) => (
                  <div key={p.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-glass-500/15 text-glass-300">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-white">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-300">
                        {p.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Where jobs leak ---------- */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="bg-radial-glow pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative">
          <SectionHeading
            center
            eyebrow="The diagnosis"
            title={
              <>
                Where auto glass jobs{" "}
                <span className="text-gradient-amber">actually leak</span>
              </>
            }
            subtitle="These are the six failure points we find over and over. Most shops are losing jobs to at least three of them right now."
          />
          <div className="mt-14">
            <LeakMap />
          </div>
        </Container>
      </section>

      {/* ---------- The four pillars ---------- */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            center
            eyebrow="The engine"
            title={
              <>
                Four pillars that move you{" "}
                <span className="text-gradient">up a stage</span>
              </>
            }
            subtitle="Get Found, Get Chosen, Get Booked, Get Paid Well — in the order a driver actually experiences your shop. Every stage pulls the same four levers, just at different intensities."
          />
          <div className="mt-14">
            <PillarEngine />
          </div>
        </Container>
      </section>

      {/* ---------- Stage-by-stage deep dive ---------- */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            center
            eyebrow="Stage by stage"
            title="Find your shop below"
            subtitle="Read the symptoms. Whichever set sounds like your Monday morning is where you are — and the work listed is what actually moves you up."
          />

          <div className="mt-14 space-y-6">
            {frameworkStages.map((stage) => (
              <article
                key={stage.n}
                id={stage.name.toLowerCase()}
                className={`glass-card scroll-mt-24 rounded-3xl border-l-2 p-7 sm:p-9 ${
                  accentBorder[stage.accent]
                }`}
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span
                    className={`font-display text-sm font-bold uppercase tracking-[0.2em] ${
                      accentText[stage.accent]
                    }`}
                  >
                    Stage {stage.n}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {stage.name}
                  </h3>
                </div>
                <p className="mt-2 font-display text-lg text-ink-200 sm:text-xl">
                  {stage.headline}
                </p>

                <div className="mt-7 grid gap-7 lg:grid-cols-2">
                  {/* symptoms */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                      You&apos;re here if…
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {stage.symptoms.map((s) => (
                        <li key={s} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-500" />
                          <span className="text-sm leading-relaxed text-ink-200">
                            {s}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                        The real bottleneck
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink-200">
                        {stage.bottleneck}
                      </p>
                    </div>
                  </div>

                  {/* moves + scoreboard */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                      What we do about it
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {stage.moves.map((m) => (
                        <li key={m} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                            <IconCheck className="h-3 w-3" />
                          </span>
                          <span className="text-sm leading-relaxed text-ink-200">
                            {m}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                      How we keep score
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {stage.scoreboard.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-ink-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- First 90 days ---------- */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="bg-radial-glow pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative">
          <SectionHeading
            center
            eyebrow="Implementation"
            title="What the first 90 days look like"
            subtitle="No mystery, no black box. This is the sequence regardless of which stage you start from — the work inside each window is what changes."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {timeline.map((t, i) => (
              <div key={t.window} className="glass-card rounded-2xl p-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-glass-300/25 bg-glass-500/10 px-3 py-1 text-xs font-semibold text-glass-300">
                    {t.window}
                  </span>
                  <span className="font-display text-3xl font-extrabold text-white/10">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {t.body}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/5 pt-4">
                  {t.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex items-start gap-2.5 text-sm text-ink-200"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                        <IconCheck className="h-2.5 w-2.5" />
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            center
            eyebrow="Questions"
            title="About the framework"
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {frameworkFaqs.map((faq) => (
              <details
                key={faq.q}
                className="glass-card group rounded-2xl px-6 py-5"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-bold text-white marker:content-none">
                  {faq.q}
                  <svg
                    className="h-4 w-4 shrink-0 text-glass-300 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-300">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Not sure which stage you're in?"
        subtitle="The free audit checks your Map Pack position, reviews, website, and AI visibility — then tells you exactly where you sit on the framework and what moves you up."
      />
    </>
  );
}
