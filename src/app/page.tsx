import Link from "next/link";
import type { Metadata } from "next";
import { Container, Button, Badge, SectionHeading, Eyebrow } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { LogoMarquee } from "@/components/LogoMarquee";
import { services, stages, site } from "@/lib/site";
import {
  IconArrow,
  IconBolt,
  IconChart,
  IconCheck,
  IconClock,
  IconPhone,
  IconShield,
  IconStar,
  iconMap,
} from "@/components/Icons";

export const metadata: Metadata = {
  description: site.description,
};

const stats = [
  { value: "30 days", label: "To your first new jobs" },
  { value: "100%", label: "Focused on auto glass" },
  { value: "4 stages", label: "Proven growth framework" },
  { value: "Month-to-month", label: "No lock-in contracts" },
];

const differentiators = [
  {
    icon: IconShield,
    title: "Built only for auto glass",
    body: "We don't touch dentists or plumbers. Every campaign, page, and keyword is tuned for windshield repair & replacement.",
  },
  {
    icon: IconChart,
    title: "Jobs, not vanity metrics",
    body: "Impressions don't pay your techs. We optimize for booked calls and scheduled installs — and report on what actually matters.",
  },
  {
    icon: IconClock,
    title: "Results in weeks, not years",
    body: "Our framework is designed to get the phone ringing fast, then compound into predictable, repeatable job flow.",
  },
  {
    icon: IconBolt,
    title: "Multi-channel visibility",
    body: "Map Pack, organic search, Google Ads, and AI answers like ChatGPT — we make sure drivers find you everywhere.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="bg-radial-glow pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-glass-500/20 blur-[120px]" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up">
              <Badge>
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                The auto glass growth agency
              </Badge>
            </div>
            <h1 className="animate-fade-up mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Get more auto glass jobs.
              <span className="mt-2 block text-gradient">
                Not clicks. Not empty calls.
              </span>
            </h1>
            <p className="animate-fade-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              We&apos;re not here to bill you for busy work — we&apos;re here to
              keep your shop busy with paying jobs. The only marketing framework
              built exclusively for auto glass shops.
            </p>
            <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg" withArrow>
                {site.ctaText}
              </Button>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-6 py-3.5 text-base font-medium text-ink-100 transition-colors hover:border-glass-300 hover:text-white"
              >
                <IconPhone className="h-5 w-5 text-glass-300" />
                {site.phone}
              </a>
            </div>
            <p className="animate-fade-up mt-5 flex items-center justify-center gap-2 text-sm text-ink-500">
              <span className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </span>
              Trusted by auto glass shops from coast to coast
            </p>
          </div>

          {/* Stat strip */}
          <div className="animate-fade-up mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink-900/60 px-5 py-6 text-center">
                <div className="font-display text-2xl font-bold text-white">
                  <span className="text-gradient">{s.value}</span>
                </div>
                <div className="mt-1 text-xs text-ink-400">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- LOGO MARQUEE ---------- */}
      <section className="border-y border-white/5 bg-ink-950/50">
        <Container>
          <p className="pt-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
            Shops we help stay booked
          </p>
        </Container>
        <LogoMarquee />
      </section>

      {/* ---------- PROBLEM / CALLOUT ---------- */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>The hard truth</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Most local marketing agencies are full of{" "}
                <span className="text-gradient-amber">🤖 fluff.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                They sell you rankings you can&apos;t cash, dashboards no one
                reads, and &quot;awareness&quot; that never turns into a
                windshield in a bay. Meanwhile your competitors are booking the
                jobs you should be getting.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-300">
                We do it differently. We specialize in one thing — auto glass —
                and we measure our work by one thing: the number of paying jobs
                on your calendar.
              </p>
              <div className="mt-8">
                <Button href="/about" variant="outline" withArrow>
                  Why we&apos;re different
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {[
                "Empty calls from tire-kickers and spam",
                "Ad spend that vanishes with nothing to show",
                "A website that looks fine but never books a job",
                "Ranking reports that don't match your bank account",
              ].map((pain) => (
                <div
                  key={pain}
                  className="glass-card flex items-start gap-4 rounded-2xl p-5 transition-all"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
                    ✕
                  </span>
                  <p className="text-ink-200">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="relative py-20 sm:py-24">
        <Container>
          <SectionHeading
            center
            eyebrow="What we do"
            title={
              <>
                Everything your shop needs to{" "}
                <span className="text-gradient">get found &amp; get booked</span>
              </>
            }
            subtitle="Four channels, one system — engineered to turn local drivers into scheduled installs."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {services.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="glass-card group relative overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-glass-500/15 text-glass-300 ring-1 ring-glass-300/20">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {s.name}
                      </h3>
                      <p className="text-sm text-glass-300">{s.short}</p>
                    </div>
                  </div>
                  <p className="mt-5 leading-relaxed text-ink-300">
                    {s.summary}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white">
                    Explore {s.name}
                    <IconArrow className="h-4 w-4 text-glass-300 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------- FRAMEWORK ---------- */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="bg-radial-glow pointer-events-none absolute inset-0 opacity-70" />
        <Container className="relative">
          <SectionHeading
            center
            eyebrow="The Auto Glass Marketing Framework™"
            title={
              <>
                From <span className="text-gradient-amber">invisible</span> to{" "}
                <span className="text-gradient">fully booked</span>
              </>
            }
            subtitle="Every shop is somewhere on this path. Our job is to move you to the next stage — and keep you there."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {stages.map((stage, i) => (
              <div
                key={stage.n}
                className="glass-card relative rounded-2xl p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-extrabold text-white/10">
                    {stage.n}
                  </span>
                  {i < stages.length - 1 && (
                    <IconArrow className="hidden h-5 w-5 text-glass-400/40 md:block" />
                  )}
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  {stage.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {stage.desc}
                </p>
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-glass-400 to-glass-300"
                    style={{ width: `${(i + 1) * 25}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- DIFFERENTIATORS ---------- */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Why AGMP"
              title={
                <>
                  A marketing partner that actually{" "}
                  <span className="text-gradient">gets your business</span>
                </>
              }
              subtitle="We've spent years learning exactly how drivers search for glass work and how shops win the job. That focus is your edge."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {differentiators.map((d) => (
                <div key={d.title} className="glass-card rounded-2xl p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glass-500/15 text-glass-300">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- TESTIMONIAL ---------- */}
      <section className="py-16">
        <Container>
          <figure className="glass-card mx-auto max-w-3xl rounded-3xl p-8 text-center sm:p-12">
            <div className="flex justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} className="h-5 w-5" />
              ))}
            </div>
            <blockquote className="mt-6 font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
              &quot;We stopped guessing about marketing. The framework gave us a
              clear path — and the phone hasn&apos;t stopped ringing with real
              windshield jobs since.&quot;
            </blockquote>
            <figcaption className="mt-6 text-sm text-ink-400">
              <span className="font-semibold text-white">
                A growing auto glass shop
              </span>{" "}
              · Illustrative of the results our framework is built to deliver
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* ---------- PRICING TEASER ---------- */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="glass-card relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-glass-500/15 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <Eyebrow>Simple, honest partnership</Eyebrow>
                <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                  A plan built around{" "}
                  <span className="text-gradient-amber">your shop</span>
                </h2>
                <p className="mt-4 max-w-lg text-lg text-ink-300">
                  Get highly targeted paid search, top rankings in Google&apos;s
                  Map Pack, and visibility in AI search — with no long-term
                  contracts. We&apos;ll put together a quote that fits your
                  market and your goals, and scale up as the jobs roll in.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Targeted Google Ads",
                    "Map Pack optimization",
                    "AI search visibility",
                    "Real performance reporting",
                    "Month-to-month freedom",
                    "Dedicated auto glass expert",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-ink-200"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-signal/15 text-signal">
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center lg:text-left">
                <Button href="/contact" size="lg" withArrow className="w-full sm:w-auto">
                  Get your custom quote
                </Button>
                <p className="mt-4 text-sm text-ink-500">
                  30-minute call. A real plan for your shop. Zero pressure.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
