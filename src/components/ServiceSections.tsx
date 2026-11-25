import Link from "next/link";
import { Container, Eyebrow } from "./ui";
import { IconArrow, IconCheck, IconClock } from "./Icons";
import { Mockup, type MockupKind } from "./Mockups";

/**
 * Shared sections for the service pages and /platform. Copy lives in
 * src/lib/services-content.ts and src/lib/platform-content.ts; every claim
 * there must be true of what the platform actually does.
 */

export type Feature = { title: string; what: string; why: string };
export type Rhythm = {
  intro: string;
  daily: string[];
  weekly: string[];
  monthly: string[];
};

export function TopFeatures({
  eyebrow,
  title,
  features,
}: {
  eyebrow: string;
  title: string;
  features: Feature[];
}) {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {features.map((f, i) => (
            <div key={f.title} className="glass-card rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-glass-500/15 font-display text-sm font-bold text-glass-300">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  {f.title}
                </h3>
              </div>
              <p className="mt-4 leading-relaxed text-ink-100">{f.what}</p>
              <p className="mt-3 border-l-2 border-signal/50 pl-3 text-sm leading-relaxed text-ink-300">
                <span className="font-semibold text-signal">Why it matters: </span>
                {f.why}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const cadenceLabels: [keyof Omit<Rhythm, "intro">, string][] = [
  ["daily", "Every day"],
  ["weekly", "Every week"],
  ["monthly", "Every month"],
];

export function RhythmSection({
  rhythm,
  mockups,
  title = "What you see every day, week and month",
}: {
  rhythm: Rhythm;
  mockups: MockupKind[];
  title?: string;
}) {
  return (
    <section className="py-16">
      <Container>
        <div
          className={`grid gap-10 lg:items-start ${
            mockups.length ? "lg:grid-cols-[1fr_0.9fr]" : "mx-auto max-w-3xl"
          }`}
        >
          <div>
            <Eyebrow>Nothing hidden</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-300">
              {rhythm.intro}
            </p>
            <div className="mt-8 space-y-4">
              {cadenceLabels.map(([key, label]) => (
                <div key={key} className="glass-card rounded-2xl p-5">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-glass-300/25 bg-glass-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-glass-300">
                    <IconClock className="h-3 w-3" />
                    {label}
                  </div>
                  <ul className="mt-3 space-y-2">
                    {rhythm[key].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-200">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                          <IconCheck className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {mockups.length > 0 && (
            <div className="space-y-6 lg:sticky lg:top-28">
              {mockups.map((m) => (
                <Mockup key={m} kind={m} />
              ))}
              <p className="text-center text-xs text-ink-500">
                Illustrative layouts with demo content. No real shop, customer
                or figures shown.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export function IncludedGrid({
  title,
  items,
}: {
  title: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="py-12">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Everything included</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div key={f.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                <IconCheck className="h-3.5 w-3.5" />
              </span>
              <div>
                <h3 className="font-semibold text-white">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-300">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function StepsSection({
  steps,
  title = "How it works",
}: {
  steps: { title: string; body: string }[];
  title?: string;
}) {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="glass-card rounded-2xl p-6">
              <span className="font-display text-3xl font-extrabold text-white/10">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FaqSection({
  title,
  faqs,
}: {
  title: string;
  faqs: { q: string; a: string }[];
}) {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              {title}
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
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
  );
}

/** Cross-link band to the shop portal page, shown on every service page. */
export function PlatformBand({
  title,
  body,
  cta,
}: {
  title: string;
  body: string;
  cta: string;
}) {
  return (
    <section className="py-10">
      <Container>
        <Link
          href="/platform"
          className="glass-card group flex flex-col items-start gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div className="flex-1">
            <Eyebrow>Comes with every service</Eyebrow>
            <h2 className="mt-2 font-display text-2xl font-bold text-white">{title}</h2>
            <p className="mt-2 text-ink-300">{body}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink-500 px-5 py-2.5 text-sm font-medium text-ink-100 transition-colors group-hover:border-glass-300 group-hover:text-white">
            {cta}
            <IconArrow className="h-4 w-4 text-glass-300 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </Container>
    </section>
  );
}
