import type { Metadata } from "next";
import { Container, SectionHeading, Button } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { DirectoryProof } from "@/components/DirectoryProof";
import { IconChart, IconCheck, IconMap, IconShield } from "@/components/Icons";
import { shopTypes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Results & Verifiable Proof",
  description:
    "See the proof behind Auto Glass Marketing Pros: an inspectable national shop directory, transparent measurement, and month-to-month accountability.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Results & Verifiable Proof — Auto Glass Marketing Pros",
    description:
      "Why auto glass shops trust AGMP: honest communication, deep industry focus, and month-to-month accountability.",
    url: `${site.url}/reviews`,
    type: "website",
  },
};

const proofPoints = [
  {
    icon: IconMap,
    title: "A live national directory",
    body: "Windshield Repair HQ lists 300+ shops across all 50 states. It is a public, inspectable example of the auto glass search work we build and operate.",
  },
  {
    icon: IconChart,
    title: "Measurement tied to opportunities",
    body: "We connect qualified calls and forms to the channel that created them, so a ranking or click only matters when it creates a real chance to book glass work.",
  },
  {
    icon: IconShield,
    title: "Accountability without a hostage clause",
    body: "Our work is month-to-month, and you keep the website, accounts, data, and creative we build. Retention has to be earned through useful work and clear reporting.",
  },
];

const reasons = [
  "Clear, jargon-free communication",
  "Deep auto glass industry expertise",
  "Month-to-month — no long contracts",
  "Real performance data you can verify",
  "One dedicated point of contact",
  "Focused on booked jobs, not clicks",
];

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Results & proof"
        title={
          <>
            Proof you can inspect. Results you can{" "}
            <span className="text-gradient">measure.</span>
          </>
        }
        subtitle="We're building our client-results library the honest way. Until a shop gives us permission to publish its name and numbers, we will show what is verifiable and be precise about what is not."
      >
        <Button href="/audit" size="lg" withArrow>
          Audit my shop
        </Button>
      </PageHeader>

      {/* Transparency note */}
      <section className="pb-6">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-glass-300/20 bg-glass-500/5 px-6 py-5 text-center">
            <p className="text-sm leading-relaxed text-ink-300">
              <span className="font-semibold text-white">No borrowed stars. No anonymous success quotes.</span>{" "}
              When we publish a client result here, it will include the market,
              timeframe, starting point, work completed, and the metric that
              changed — with the shop&apos;s permission.
            </p>
          </div>
        </Container>
      </section>

      {/* Proof cards */}
      <section className="py-12">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {proofPoints.map((point) => (
              <article key={point.title} className="glass-card rounded-2xl p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glass-500/15 text-glass-300">
                  <point.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-white">
                  {point.title}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-300">{point.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <DirectoryProof />

      {/* Why shops choose us */}
      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="Why shops choose AGMP"
              title={
                <>
                  The reasons owners{" "}
                  <span className="text-gradient">stick with us</span>
                </>
              }
              subtitle="We keep it simple: understand the auto glass business, communicate clearly, and prove our value every month."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {reasons.map((r) => (
                <div
                  key={r}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-ink-200">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Shop types wall */}
      <section className="py-12">
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
            The kinds of auto glass shops we&apos;re built for
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {shopTypes.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center text-sm font-semibold text-ink-300"
              >
                {name}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/audit" size="lg" withArrow>
              {site.ctaText}
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Want a baseline you can measure?"
        subtitle="Start with a free shop audit. We'll show you the search, conversion, and tracking gaps before we ask you to buy anything."
      />
    </>
  );
}
