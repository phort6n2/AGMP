import { Container, Eyebrow } from "./ui";
import { IconClock, IconSearch, IconChart, IconGlass } from "./Icons";

/**
 * "Always-on systems" — surfaces the real fulfillment automation behind the
 * Local SEO service at the what-and-when level, deliberately not the how.
 * Cadences and outcomes are shown; tools, data sources, and pipeline internals
 * stay out. The claims map 1:1 to systems that actually run — keep it that way
 * when editing.
 */
const systems = [
  {
    icon: IconGlass,
    cadence: "Every week",
    title: "Your shop photos, synced",
    body: "The real install photos your techs post to your Google profile get pulled, prepped, and published to your website — automatically. Your listing and your site always agree, and neither goes stale. When your photo pool runs low, we know before it shows.",
  },
  {
    icon: IconSearch,
    cadence: "Daily",
    title: "Driver questions, harvested",
    body: "Our system captures the exact questions drivers in markets like yours are asking Google — every weekday, straight from live search results. Those questions become the pages and answers on your site, so you rank for what people actually type.",
  },
  {
    icon: IconChart,
    cadence: "Before launch",
    title: "Competitors, profiled",
    body: "Before we write a single page, the system pulls apart every shop ranking above you — what they cover, what they rank for, and where the holes are. Your build plan comes from their gaps, not a template.",
  },
];

export function AlwaysOn() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Always-on systems</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Your SEO runs on {" "}
            <span className="text-gradient">schedule — not on memory</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-300">
            Most agencies work your account off a monthly checklist. We built
            software that works it continuously — the same systems, running for
            every shop we manage, whether anyone&apos;s watching or not.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {systems.map((s) => (
            <div key={s.title} className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glass-500/15 text-glass-300">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-glass-300/25 bg-glass-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-glass-300">
                  <IconClock className="h-3 w-3" />
                  {s.cadence}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-400">
          How the machinery works under the hood is the part we keep in-house —
          what you see is the phone ringing.
        </p>
      </Container>
    </section>
  );
}
