import { leaks } from "@/lib/framework";

/**
 * Where auto glass jobs leak. Each card names a specific, recognizable failure
 * so an owner can self-diagnose — which is what makes the free audit the
 * natural next step rather than a pitch.
 */
export function LeakMap() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {leaks.map((leak) => (
        <div
          key={leak.title}
          className="glass-card group relative overflow-hidden rounded-2xl p-6"
        >
          {/* leak indicator */}
          <span className="absolute right-5 top-5 h-2 w-2 rounded-full bg-amber-500/70" />
          <div className="font-display text-2xl font-extrabold text-gradient-amber">
            {leak.stat}
          </div>
          <h3 className="mt-3 font-display text-base font-bold text-white">
            {leak.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-300">
            {leak.body}
          </p>
        </div>
      ))}
    </div>
  );
}
