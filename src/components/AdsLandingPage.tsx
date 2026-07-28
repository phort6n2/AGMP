import { Container, Eyebrow } from "./ui";
import { IconCheck, IconBolt, IconPhone, IconLayout } from "./Icons";

const comparison = [
  {
    label: "Your website",
    tone: "muted" as const,
    points: [
      "Speaks to everyone — drivers, fleets, job seekers",
      "Many paths: services, about, reviews, contact",
      "Built to inform and to rank in search",
      "Stays exactly as it is",
    ],
  },
  {
    label: "Your ad landing page",
    tone: "accent" as const,
    points: [
      "Speaks to one driver who needs glass work today",
      "One path: call now or request a quote",
      "Built to convert a paid click, nothing else",
      "We build it, host it, and keep tuning it",
    ],
  },
];

const included = [
  {
    icon: IconLayout,
    title: "We build it",
    body: "A separate, purpose-built page for your ad traffic — written for auto glass, not a generic template.",
  },
  {
    icon: IconBolt,
    title: "We host it",
    body: "Nothing to install, no plugin, no work for you. It lives at its own address, entirely separate from your site.",
  },
  {
    icon: IconPhone,
    title: "We keep optimizing it",
    body: "Headlines, offers, form length, trust signals — reworked as we learn what actually earns the call. Not a one-time build.",
  },
];

/**
 * Explains the landing page included with Google Ads management — the piece
 * shop owners consistently don't realize is part of the service. The
 * website-vs-landing-page comparison is the distinction that otherwise has to
 * be explained in every sales conversation.
 */
export function AdsLandingPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="bg-radial-glow pointer-events-none absolute inset-0 opacity-60" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Included with Google Ads</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            You also get a landing page{" "}
            <span className="text-gradient">built to convert</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-300">
            Most agencies point your ads at your homepage and call it done. We
            build you a separate page designed to turn a paid click into a phone
            call — then host it and keep improving it. It&apos;s part of the
            service, not an upsell.
          </p>
        </div>

        {/* website vs landing page */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {comparison.map((col) => (
            <div
              key={col.label}
              className={`rounded-2xl border p-6 sm:p-7 ${
                col.tone === "accent"
                  ? "border-glass-300/30 bg-glass-500/[0.07]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <h3
                className={`font-display text-lg font-bold ${
                  col.tone === "accent" ? "text-white" : "text-ink-200"
                }`}
              >
                {col.label}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                        col.tone === "accent" ? "bg-glass-300" : "bg-ink-500"
                      }`}
                    />
                    <span
                      className={`text-sm leading-relaxed ${
                        col.tone === "accent" ? "text-ink-100" : "text-ink-300"
                      }`}
                    >
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink-400">
          Both, working together — your website keeps doing its job, and the
          landing page does this one.
        </p>

        {/* what's included */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {included.map((i) => (
            <div key={i.title} className="glass-card rounded-2xl p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glass-500/15 text-glass-300">
                <i.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">
                {i.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {i.body}
              </p>
            </div>
          ))}
        </div>

        {/* the quality score angle — a real, checkable mechanic */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-signal/20 bg-signal/[0.06] p-6 sm:p-7">
          <div className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal/15 text-signal">
              <IconCheck className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-base font-bold text-white">
                It also makes your clicks cheaper
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">
                Google factors landing page experience into Quality Score, and
                Quality Score affects what you pay per click. A fast, relevant
                page doesn&apos;t just convert better — it usually lowers your
                cost for the same ad position. Sending paid traffic to a slow
                homepage costs you twice.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
