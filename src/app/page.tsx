import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { Container, Button, Badge, SectionHeading, Eyebrow } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { LogoMarquee } from "@/components/LogoMarquee";
import { DirectoryProof } from "@/components/DirectoryProof";
import { Guarantee } from "@/components/Guarantee";
import { MarketingJobFlow } from "@/components/MarketingJobFlow";
import { services, stages, site } from "@/lib/site";
import {
  IconArrow,
  IconBolt,
  IconChart,
  IconCheck,
  IconClock,
  IconMessage,
  IconShield,
  IconSparkle,
  IconX,
  iconMap,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: { absolute: "Auto Glass Marketing Agency | More Booked Jobs | AGMP" },
  description:
    "Auto glass marketing for independent shops: local SEO, Google Ads, websites, and AI visibility measured in qualified calls and booked glass jobs.",
  alternates: { canonical: "/" },
};

const stats = [
  { value: "Calls + forms", label: "Qualified opportunities tracked" },
  { value: "100%", label: "Focused on auto glass" },
  { value: "4 channels", label: "One job-focused system" },
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
    title: "Systems, not monthly chores",
    body: "Most agencies touch your account once a month. Our software works continuously — syncing your newest shop photos to your site and harvesting the questions drivers ask Google, automatically — so improvements keep moving between reports.",
  },
  {
    icon: IconBolt,
    title: "Multi-channel visibility",
    body: "Map Pack, organic search, Google Ads, and AI answers like ChatGPT — we make sure drivers find you everywhere.",
  },
];

const ownerEconomics = [
  {
    title: "The job mix you actually want",
    body: "Tell us whether the priority is replacements, profitable cash work, insurance claims, ADAS calibration, fleet, or a smarter mix. We build campaigns around capacity and margin — not raw lead volume.",
  },
  {
    title: "Your real service radius",
    body: "A mobile route can look busy and still lose money to windshield time. We focus spend and visibility on the ZIP codes your techs can serve profitably.",
  },
  {
    title: "The call-to-book gap",
    body: "A qualified driver who hangs up or never gets a text-back is not a marketing win. Tracking shows where calls come from and where booking opportunities leak.",
  },
  {
    title: "Cash, claim, and calibration intent",
    body: "A driver asking about insurance has different questions than a cash customer or a calibration referral. Pages and ads should match the job, vehicle, and buying path.",
  },
];

const faqs = [
  {
    question: "What is auto glass marketing?",
    answer:
      "Auto glass marketing is the system that helps local drivers find, trust, and contact your shop when they need windshield replacement, chip repair, side or back glass, or ADAS calibration. It usually combines Google Maps and local SEO, paid search, a conversion-focused website, reviews, and call or form tracking.",
  },
  {
    question: "Why hire an auto glass marketing specialist?",
    answer:
      "A specialist already understands mobile service areas, cash versus insurance intent, calibration attachment, insurer steering, urgent search behavior, and the difference between a cheap lead and a profitable glass job. That context changes the keywords, landing pages, tracking, and reporting.",
  },
  {
    question: "How much does auto glass marketing cost?",
    answer:
      "Cost depends on your market, service radius, competition, capacity, and whether you need SEO, ads, a website, or the full system. Your ad spend stays in your own account. We start with a free audit and scope a month-to-month plan around the jobs and territory you want.",
  },
  {
    question: "How quickly should an auto glass shop expect results?",
    answer:
      "Google Ads can create qualified opportunities soon after a well-tracked campaign launches. Local SEO, reviews, and organic visibility compound over months. Timing varies by market and starting point, so we establish a baseline first and do not promise a specific ranking or job count.",
  },
  {
    question: "Do you work with mobile-only auto glass businesses?",
    answer:
      "Yes. Mobile shops need especially careful service-area targeting so ad spend and Maps visibility line up with profitable drive times, technician capacity, and the job types each route can handle.",
  },
  {
    question: "How do you track whether marketing creates real jobs?",
    answer:
      "We track qualified calls and forms back to the campaign or search channel that created them. When your booking process or CRM supports it, those opportunities can be reconciled with scheduled installs so reporting moves beyond clicks and rankings.",
  },
  {
    question: "Do I own my website, ad account, and data?",
    answer:
      "Yes. You keep the website, accounts, data, and creative built for your shop. The relationship is month-to-month, so our work has to earn the next month.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="bg-radial-glow pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-glass-500/20 blur-[120px]" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="max-w-3xl text-center lg:text-left">
              <div>
                <Badge>
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  100% auto glass. Nothing else.
                </Badge>
              </div>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
                Auto glass marketing that books more jobs.
                <span className="mt-2 block text-gradient">
                  Not clicks. Not empty calls.
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-300 lg:mx-0">
                Local SEO, Google Ads, and conversion-focused websites built only
                for auto glass shops. We track qualified calls and scheduled
                installs — not impressions that never reach your bays.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button href="/audit" size="lg" withArrow>
                  Get Your Free Audit
                </Button>
                <Button href={site.smsHref} variant="outline" size="lg">
                  <IconMessage className="h-5 w-5 text-glass-300" />
                  Text us instead
                </Button>
              </div>
              <p className="mt-4 text-sm text-ink-400">
                Free 60-second audit · or text {site.phone} — we actually answer
                texts
              </p>
              <p className="mt-5 flex items-center justify-center gap-2 text-sm text-ink-300 lg:justify-start">
                <IconShield className="h-4 w-4 text-glass-300" />
                Built by auto glass marketing specialists — not a generalist agency
              </p>
            </div>

            <div>
              <MarketingJobFlow />
            </div>
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
          <p className="pt-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
            Built for every kind of auto glass shop
          </p>
        </Container>
        <LogoMarquee />
      </section>

      {/* Real, inspectable proof belongs near the promise. */}
      <DirectoryProof />

      {/* ---------- PROBLEM / CALLOUT ---------- */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>The hard truth</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Most marketing agencies sell you everything{" "}
                <span className="text-gradient-amber">except more jobs.</span>
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
                "Insurers steering your customers straight to the national chain",
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
                    <IconX className="h-4 w-4" />
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
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl font-bold text-white">
                          {s.name}
                        </h3>
                        {s.badge && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-glass-300/30 bg-glass-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-glass-200">
                            <IconSparkle className="h-3 w-3" />
                            {s.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-glass-300">{s.short}</p>
                    </div>
                  </div>
                  <p className="mt-5 leading-relaxed text-ink-300">
                    {s.summary}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white">
                    See how it works
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
          <div className="mt-12 text-center">
            <Button href="/framework" variant="outline" size="lg" withArrow>
              Explore the full framework
            </Button>
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

      {/* ---------- SHOP ECONOMICS ---------- */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            center
            eyebrow="Built around your shop"
            title={
              <>
                Marketing that understands how an auto glass shop{" "}
                <span className="text-gradient">actually makes money</span>
              </>
            }
            subtitle="More leads is not the goal. More of the right jobs, in the right service area, at a margin and pace your team can handle — that's the goal."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {ownerEconomics.map((item, index) => (
              <article key={item.title} className="glass-card rounded-2xl p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-glass-500/15 font-display text-sm font-bold text-glass-200">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink-300">{item.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- FOUNDER PROMISE ---------- */}
      <section className="py-16">
        <Container>
          <div className="glass-card mx-auto max-w-3xl rounded-3xl p-8 text-center sm:p-12">
            <Image
              src="/founder.webp"
              alt={`${site.owner}, founder of ${site.name}`}
              width={860}
              height={860}
              className="mx-auto mb-6 h-16 w-16 rounded-full border border-white/15 object-cover"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-glass-300">
              The only result we count
            </p>
            <blockquote className="mt-5 font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
              &quot;Not impressions. Not rankings you can&apos;t cash. We show you
              which marketing created qualified calls and real booking
              opportunities — every single month.&quot;
            </blockquote>
            <figcaption className="mt-6 text-sm text-ink-300">
              <span className="font-semibold text-white">{site.owner}</span> ·
              Founder, {site.name}
            </figcaption>
          </div>
        </Container>
      </section>

      {/* ---------- GUARANTEE ---------- */}
      <Guarantee />

      {/* ---------- PRICING TEASER ---------- */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="glass-card relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-glass-500/15 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <Eyebrow>Simple, honest partnership</Eyebrow>
                <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                  One plan. Your market, your margins,{" "}
                  <span className="text-gradient-amber">your calendar.</span>
                </h2>
                <p className="mt-4 max-w-lg text-lg text-ink-300">
                  Get highly targeted paid search, stronger visibility in Google&apos;s
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
                <Button
                  href="/audit"
                  variant="glass"
                  size="lg"
                  withArrow
                  className="w-full sm:w-auto"
                >
                  Get your free audit
                </Button>
                <p className="mt-4 text-sm text-ink-400">
                  Free 60-second audit. A real plan for your shop. Zero pressure.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- FAQ / COMMERCIAL INTENT ---------- */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            center
            eyebrow="Straight answers"
            title="Auto glass marketing FAQ"
            subtitle="What shop owners usually want to know before trusting an agency with their market, accounts, and phone volume."
          />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-ink-850/70 px-6 sm:px-8">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-white sm:text-lg">
                  {faq.question}
                  <span className="text-xl font-normal text-glass-300 transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <Script
        id="homepage-auto-glass-marketing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <CtaBand />
    </>
  );
}
