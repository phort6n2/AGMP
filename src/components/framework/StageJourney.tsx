import { frameworkStages } from "@/lib/framework";

const accentRing: Record<string, string> = {
  amber: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  glass: "border-glass-300/40 bg-glass-500/10 text-glass-300",
  signal: "border-signal/40 bg-signal/10 text-signal",
};

const accentBar: Record<string, string> = {
  amber: "from-amber-500 to-amber-400",
  glass: "from-glass-500 to-glass-300",
  signal: "from-glass-300 to-signal",
};

/**
 * The signature framework infographic — an ascending path from Invisible to
 * Dominant. Each stage sits progressively higher with a taller signal bar, so
 * the climb reads at a glance before any copy is processed.
 *
 * Desktop: a horizontal ascending path. Mobile: a vertical rail.
 * Pure CSS/SVG — no image assets to load or maintain.
 */
export function StageJourney() {
  return (
    <div className="relative">
      {/* ---------- Desktop: ascending path ---------- */}
      <div className="hidden lg:block">
        <div className="relative h-[430px]">
          {/* connecting rail */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1000 430"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="fw-rail" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#ff6b1a" stopOpacity="0.5" />
                <stop offset="45%" stopColor="#2563eb" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path
              d="M 125 355 C 240 355, 260 270, 375 270 C 490 270, 510 185, 625 185 C 740 185, 760 100, 875 100"
              stroke="url(#fw-rail)"
              strokeWidth="2"
              strokeDasharray="7 7"
            />
          </svg>

          <div className="relative grid h-full grid-cols-4 gap-6">
            {frameworkStages.map((stage, i) => (
              <div
                key={stage.n}
                className="flex flex-col justify-end"
                style={{ paddingBottom: `${i * 85}px` }}
              >
                <div className="glass-card rounded-2xl p-5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl border font-display text-sm font-bold ${
                        accentRing[stage.accent]
                      }`}
                    >
                      {stage.n}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white">
                      {stage.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">
                    {stage.headline}
                  </p>
                  {/* signal strength bar — grows with the stage */}
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${
                        accentBar[stage.accent]
                      }`}
                      style={{ width: `${(i + 1) * 25}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* axis label */}
        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4 text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
          <span>Referrals &amp; luck</span>
          <span className="text-glass-300">Predictable booked jobs</span>
        </div>
      </div>

      {/* ---------- Mobile / tablet: vertical rail ---------- */}
      <div className="lg:hidden">
        <div className="relative space-y-4 border-l border-white/10 pl-7">
          {frameworkStages.map((stage, i) => (
            <div key={stage.n} className="relative">
              <span
                className={`absolute -left-[37px] flex h-[22px] w-[22px] items-center justify-center rounded-full border bg-ink-900 text-[10px] font-bold ${
                  accentRing[stage.accent]
                }`}
              >
                {stage.n}
              </span>
              <div className="glass-card rounded-2xl p-5">
                <h3 className="font-display text-lg font-bold text-white">
                  {stage.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {stage.headline}
                </p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${
                      accentBar[stage.accent]
                    }`}
                    style={{ width: `${(i + 1) * 25}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
