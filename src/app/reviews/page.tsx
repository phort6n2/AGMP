import type { Metadata } from "next";
import { Container, SectionHeading, Button } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { IconStar, IconCheck } from "@/components/Icons";
import { clientLogos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "See why auto glass shops choose Auto Glass Marketing Pros. Clear communication, industry expertise, month-to-month service, and real performance data.",
};

const reviews = [
  {
    quote:
      "Finally an agency that speaks our language. They knew the difference between a chip repair and a full replacement on day one — and built our whole plan around it.",
    author: "Mobile auto glass owner",
    context: "Illustrative client story",
  },
  {
    quote:
      "The reporting is refreshingly honest. We can see exactly which calls came from which campaign. No fluff, no vanity metrics — just jobs.",
    author: "Single-location shop",
    context: "Illustrative client story",
  },
  {
    quote:
      "We went from praying the phone would ring to turning work away during peak season. The Map Pack work alone changed our business.",
    author: "Two-location auto glass shop",
    context: "Illustrative client story",
  },
  {
    quote:
      "Month-to-month made it easy to say yes. Then they earned the long-term relationship by actually delivering booked jobs, month after month.",
    author: "Windshield replacement specialist",
    context: "Illustrative client story",
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
        eyebrow="Reviews"
        title={
          <>
            Shops trust us to keep them{" "}
            <span className="text-gradient">booked</span>
          </>
        }
        subtitle="We're a young, focused agency — and we're building our reputation the right way: one busy shop at a time. Here's what working with us looks like."
      >
        <div className="flex items-center justify-center gap-2">
          <span className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <IconStar key={i} className="h-5 w-5" />
            ))}
          </span>
          <span className="text-sm text-ink-300">
            Built around real results
          </span>
        </div>
      </PageHeader>

      {/* Transparency note */}
      <section className="pb-6">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-glass-300/20 bg-glass-500/5 px-6 py-5 text-center">
            <p className="text-sm leading-relaxed text-ink-300">
              <span className="font-semibold text-white">
                Straight with you:
              </span>{" "}
              the stories below illustrate the outcomes our framework is
              designed to deliver. As shops opt in to be featured, we&apos;ll
              replace them with named, verifiable reviews — because honest
              reporting is the whole point.
            </p>
          </div>
        </Container>
      </section>

      {/* Review cards */}
      <section className="py-12">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {reviews.map((r) => (
              <figure key={r.quote} className="glass-card rounded-2xl p-7">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 text-lg leading-relaxed text-ink-100">
                  &quot;{r.quote}&quot;
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-white">{r.author}</span>
                  <span className="text-ink-500"> · {r.context}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

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

      {/* Logo wall */}
      <section className="py-12">
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
            Shops in the AGMP network
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {clientLogos.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center text-sm font-semibold text-ink-400"
              >
                {name}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact" size="lg" withArrow>
              {site.ctaText}
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Want to be our next success story?"
        subtitle="Let's build a marketing engine you'll actually want to brag about. Book your free growth call today."
      />
    </>
  );
}
