import {
  IconArrow,
  IconCheck,
  IconMap,
  IconPhone,
  IconSearch,
  IconTarget,
} from "./Icons";

const channels = [
  { icon: IconMap, label: "Google Maps", detail: "High-intent local searches" },
  { icon: IconTarget, label: "Google Ads", detail: "Ready-to-book drivers" },
  { icon: IconSearch, label: "Organic + AI", detail: "Answers that recommend you" },
];

/**
 * A visual explanation of the AGMP promise. It deliberately uses no invented
 * performance figures: the graphic shows the system and the measurement model,
 * not a fabricated client dashboard.
 */
export function MarketingJobFlow() {
  return (
    <div className="glass-card relative mx-auto w-full max-w-xl overflow-hidden rounded-3xl p-5 shadow-card sm:p-7">
      <div className="bg-radial-glow pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-glass-300">
              The job flow
            </p>
            <p className="mt-1 text-sm text-ink-300">
              Every channel points to one result.
            </p>
          </div>
          <span className="rounded-full border border-signal/25 bg-signal/10 px-3 py-1 text-xs font-semibold text-signal">
            Built for glass shops
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {channels.map((channel) => (
            <div
              key={channel.label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/55 p-3.5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-glass-500/15 text-glass-300">
                <channel.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">{channel.label}</p>
                <p className="text-xs text-ink-400">{channel.detail}</p>
              </div>
              <IconArrow className="ml-auto h-4 w-4 shrink-0 text-glass-300" />
            </div>
          ))}
        </div>

        <div className="my-3 flex justify-center" aria-hidden="true">
          <div className="h-5 w-px bg-gradient-to-b from-glass-300/20 to-glass-300" />
        </div>

        <div className="rounded-2xl border border-amber-400/30 bg-amber-500/10 p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-ink-950 shadow-amber">
              <IconPhone className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-white">
                Qualified call → booked job
              </p>
              <p className="text-xs text-ink-300">
                Calls, forms, and scheduled installs tracked back to marketing.
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-ink-200">
            {["Windshield replacement", "Chip repair", "ADAS calibration", "Fleet glass"].map(
              (job) => (
                <span key={job} className="flex items-center gap-1.5">
                  <IconCheck className="h-3.5 w-3.5 text-signal" />
                  {job}
                </span>
              ),
            )}
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] leading-relaxed text-ink-500">
          No vanity dashboard. You see which marketing created real shop opportunities.
        </p>
      </div>
    </div>
  );
}
