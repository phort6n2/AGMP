import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { MyWebAuditWidget } from "@/components/MyWebAuditWidget";
import { IconCheck, IconChart, IconMessage, IconShield } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Auto Glass Marketing Audit",
  description:
    "Get a free marketing audit for your auto glass shop — Map Pack position, reviews, website, and AI visibility. See exactly where you're losing jobs.",
  alternates: { canonical: "/audit" },
  openGraph: {
    title: "Free Auto Glass Marketing Audit",
    description:
      "See exactly where your auto glass shop is losing jobs — Map Pack, reviews, website, and AI visibility. Free, no obligation.",
    url: `${site.url}/audit`,
    type: "website",
  },
};

const steps = [
  {
    n: "01",
    title: "Get your free marketing audit",
    body: "We analyze your Google Business Profile, Map Pack position, reviews, website, and AI visibility — and show you where jobs are slipping away.",
  },
  {
    n: "02",
    title: "Schedule your strategy call",
    body: "A focused 30-minute phone call — no Zoom, no Google Meet — to walk through the findings and what they mean for your shop. No jargon, no pressure.",
  },
  {
    n: "03",
    title: "Receive your custom growth plan",
    body: "A clear plan — Local SEO, Google Ads, or both — built around your market, your margins, and your calendar.",
  },
  {
    n: "04",
    title: "Launch and start booking jobs",
    body: "We put it to work and keep score on the only number that matters: paying jobs on your calendar.",
  },
];

export default function AuditPage() {
  return (
    <>
      {/* Hero + tool */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="bg-radial-glow pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <Eyebrow>Free marketing audit</Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
                See exactly where your shop is{" "}
                <span className="text-gradient">losing jobs</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-300">
                In 60 seconds, get a free audit of your shop&apos;s online
                presence — Map Pack position, reviews, website, and whether
                ChatGPT and Google&apos;s AI even know you exist. Built only for
                auto glass shops.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "No cost, no obligation, no contract",
                  "Built for auto glass — we know insurance, steering & calibration",
                  "A real person reviews it, not just a robot",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-ink-100">{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={site.smsHref}
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink-200 hover:text-white"
              >
                <IconMessage className="h-4 w-4 text-glass-300" />
                Prefer to text? {site.phone} — we reply fast
              </a>
            </div>

            {/* MyWebAudit lead widget (key 925479) — the real audit tool. */}
            <div>
              <MyWebAuditWidget />
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>What happens next</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              From audit to booked jobs
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="glass-card rounded-2xl p-6">
                <span className="font-display text-3xl font-extrabold text-white/10">
                  {s.n}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="pb-20">
        <Container>
          <div className="glass-card grid gap-6 rounded-3xl p-8 sm:grid-cols-3 sm:p-10">
            {[
              {
                icon: IconShield,
                title: "Auto glass only",
                body: "We don't touch other industries. The audit is judged by what wins glass jobs.",
              },
              {
                icon: IconChart,
                title: "Measured in jobs",
                body: "We look at what turns into booked installs — not vanity metrics.",
              },
              {
                icon: IconCheck,
                title: "Zero pressure",
                body: "It's genuinely free. If we're not a fit, you still keep the audit.",
              },
            ].map((t) => (
              <div key={t.title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glass-500/15 text-glass-300">
                  <t.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
