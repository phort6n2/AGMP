import { frameworkPillars } from "@/lib/framework";
import { IconSearch, IconStar, IconPhone, IconChart, IconArrow } from "../Icons";

const icons = {
  search: IconSearch,
  star: IconStar,
  phone: IconPhone,
  chart: IconChart,
};

/**
 * The four pillars rendered as a left-to-right engine: Get Found → Get Chosen
 * → Get Booked → Get Paid Well. Ordered the way a customer actually moves
 * through it, so the diagram doubles as a funnel.
 */
export function PillarEngine() {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {frameworkPillars.map((pillar, i) => {
        const Icon = icons[pillar.icon];
        return (
          <div key={pillar.n} className="relative">
            {/* connector arrow between pillars on desktop */}
            {i < frameworkPillars.length - 1 && (
              <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-glass-400/40 lg:block">
                <IconArrow className="h-5 w-5" />
              </span>
            )}
            <div className="glass-card flex h-full flex-col rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glass-500/15 text-glass-300">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-3xl font-extrabold text-white/10">
                  {pillar.n}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm font-medium italic leading-relaxed text-glass-200">
                {pillar.question}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                {pillar.body}
              </p>
              <ul className="mt-5 space-y-2 border-t border-white/5 pt-4">
                {pillar.levers.map((lever) => (
                  <li
                    key={lever}
                    className="flex items-start gap-2 text-xs leading-relaxed text-ink-400"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-glass-300" />
                    {lever}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
