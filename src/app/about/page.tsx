import type { Metadata } from "next";
import { Container, SectionHeading, Button, Eyebrow } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { IconCheck, IconShield, IconChart, IconClock, IconBolt, IconMessage } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Agency",
  description:
    "Auto Glass Marketing Pros is the only marketing agency built exclusively for auto glass shops. Meet the team obsessed with keeping your bays full.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About the Agency — Auto Glass Marketing Pros",
    description:
      "The only marketing agency built exclusively for auto glass repair & replacement shops.",
    url: `${site.url}/about`,
    type: "website",
  },
};

const values = [
  {
    icon: IconShield,
    title: "One industry, done right",
    body: "We turned down the generalist path. By serving only auto glass shops, every insight we gain for one client makes every other client stronger.",
  },
  {
    icon: IconChart,
    title: "Accountable to jobs",
    body: "We report on booked calls and scheduled installs — the numbers that show up in your bank account, not just your dashboard.",
  },
  {
    icon: IconClock,
    title: "Momentum first",
    body: "We build for quick early wins that fund the compounding, long-term growth of your local presence.",
  },
  {
    icon: IconBolt,
    title: "Straight talk",
    body: "No jargon, no smoke. If something isn't working, we tell you and we fix it. Month-to-month keeps us honest.",
  },
];

const timeline = [
  {
    year: "The problem",
    title: "Shops kept getting burned",
    body: "Owner after owner told us the same story: agencies that promised the world, billed for busy work, and delivered empty calls. Nobody actually understood the auto glass business.",
  },
  {
    year: "The idea",
    title: "Specialize or go home",
    body: "We learned the business owners actually run — NAGS pricing and insurance direct-bill on one side, cash and fleet tickets on the other, OEM versus aftermarket glass, calibration liability, and safe drive-away time. Then we built a marketing framework around how drivers search for all of it — from a highway chip to a full replacement — and how shops win those jobs.",
  },
  {
    year: "Today",
    title: "The Auto Glass Marketing Framework™",
    body: "A repeatable system that moves shops from invisible to fully booked across Maps, search, ads, and AI — measured by paying jobs, nothing else.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            We only do one thing.{" "}
            <span className="text-gradient">Auto glass marketing.</span>
          </>
        }
        subtitle="Auto Glass Marketing Pros exists because auto glass shops deserve a marketing partner who actually understands their business — and is measured by the jobs they book, not the reports they send."
      >
        <Button href="/audit" size="lg" withArrow>
          {site.ctaText}
        </Button>
      </PageHeader>

      {/* Mission */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Our mission</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Keep independent auto glass shops{" "}
                <span className="text-gradient">busy and profitable.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                The national chains don&apos;t just outspend you on marketing —
                they answer the insurance claim line, run the TPA network, and
                steer your customer into their own bay before you ever get a
                shot. You&apos;ve got a better tech and a fair price. Our job is
                to get the driver to call you first — and to know they have the
                right to choose your shop.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-300">
                Our whole company is organized around one question:{" "}
                <span className="text-white">
                  did we put more paying jobs on your calendar this month?
                </span>
              </p>
            </div>
            <div className="glass-card rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  ["100%", "Auto glass focus"],
                  ["30 days", "To first results"],
                  ["4-stage", "Growth framework"],
                  ["Month-to-month", "No lock-in"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                      <span className="text-gradient">{v}</span>
                    </div>
                    <div className="mt-1 text-sm text-ink-400">{l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-glass-300/20 bg-glass-500/5 p-5">
                <p className="text-sm italic leading-relaxed text-ink-200">
                  &quot;We&apos;re not here to bill you for busy work — we&apos;re
                  here to keep your shop busy with paying jobs.&quot;
                </p>
                <p className="mt-3 text-sm font-semibold text-white">
                  {site.owner} · Founder, {site.name}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Meet the founder */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="glass-card grid gap-8 rounded-3xl p-8 sm:p-10 lg:grid-cols-[300px_1fr] lg:items-center">
            {/*
              FOUNDER PHOTO SLOT — drop a real photo at /public/founder.jpg and
              replace this placeholder block with:
              <img src="/founder.jpg" alt="Matt Lubbes, founder" className="aspect-square w-full rounded-2xl object-cover" />
              A real, casual shot (in a shop / by a windshield) beats a stock headshot.
            */}
            <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-700 to-ink-850 lg:w-full">
              <div className="bg-radial-glow pointer-events-none absolute inset-0" />
              <div className="relative flex h-full flex-col items-center justify-center gap-2">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-glass-400 to-glass-600 font-display text-2xl font-extrabold text-ink-950">
                  ML
                </span>
                <span className="text-xs text-ink-500">Photo coming soon</span>
              </div>
            </div>

            <div>
              <Eyebrow>Meet the founder</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                I only work with auto glass shops. Not restaurants, not dentists
                — glass.
              </h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-300">
                <p>
                  I got tired of watching good independent shops get steered out
                  of jobs by the TPAs and buried in the Map Pack by the national
                  chains. I know NAGS pricing, I know what a calibration job is
                  worth, and I know the cash-vs-claim math you&apos;re running in
                  your head. So I built {site.directory.name} to prove I could
                  rank glass shops — and now I do it for shops one at a time.
                </p>
                <p className="text-ink-200">
                  Text me. I answer my own messages, and text is faster — you can
                  do it between jobs. We&apos;ll start with a free audit. No
                  pitch, no contract.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={site.smsHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-glass-300"
                >
                  <IconMessage className="h-4 w-4 text-glass-300" />
                  Text {site.owner.split(" ")[0]} — {site.phone}
                </a>
                <span className="text-sm text-ink-400">
                  {site.owner} · Founder, {site.name}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Story timeline */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            center
            eyebrow="Our story"
            title="Why we built AGMP"
          />
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative space-y-8 border-l border-white/10 pl-8">
              {timeline.map((t) => (
                <div key={t.title} className="relative">
                  <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-glass-300/40 bg-ink-900">
                    <span className="h-2 w-2 rounded-full bg-glass-300" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-glass-300">
                    {t.year}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">
                    {t.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-300">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading center eyebrow="What we stand for" title="Our values" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="glass-card rounded-2xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glass-500/15 text-glass-300">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Guarantee strip */}
      <section className="py-10">
        <Container>
          <div className="glass-card flex flex-col items-center gap-4 rounded-2xl p-8 text-center sm:flex-row sm:text-left">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-signal/15 text-signal">
              <IconCheck className="h-7 w-7" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                No contracts. No hostages.
              </h3>
              <p className="mt-1 text-ink-300">
                We earn your business every single month. If we&apos;re not
                driving jobs, you&apos;re free to walk — that&apos;s the kind of
                accountability the industry needs more of.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
