import { IconCheck } from "./Icons";

/**
 * Rank position visual for shops arriving from the Windshield Repair HQ
 * directory. Shows the top 3 (where the jobs go) against where the shop
 * actually sits — the gap is the entire argument, so it's shown, not stated.
 *
 * Falls back to a generic "top 3 vs. the rest" illustration when WRHQ hasn't
 * passed a rank.
 */
export function RankVisual({
  rank,
  total,
  city,
}: {
  rank?: number;
  total?: number;
  city?: string;
}) {
  const showActual = typeof rank === "number" && rank > 3;

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
        {city ? `Auto glass shops in ${city}` : "Auto glass shops in your city"}
      </p>

      <div className="mt-5 space-y-2.5">
        {/* the top three — where the jobs actually go */}
        {[1, 2, 3].map((pos) => {
          const isYou = rank === pos;
          return (
            <div
              key={pos}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
                isYou
                  ? "border-signal/40 bg-signal/10"
                  : "border-glass-300/25 bg-glass-500/10"
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                  isYou
                    ? "bg-signal/20 text-signal"
                    : "bg-glass-500/20 text-glass-200"
                }`}
              >
                {pos}
              </span>
              <span className="text-sm font-medium text-white">
                {isYou ? "Your shop" : "A competitor"}
              </span>
              {isYou && (
                <span className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-signal">
                  <IconCheck className="h-3.5 w-3.5" />
                  In the money
                </span>
              )}
            </div>
          );
        })}

        <p className="pt-1 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-glass-300">
          ↑ Where the calls go
        </p>

        {showActual ? (
          <>
            <div className="flex items-center justify-center py-1">
              <span className="text-ink-600">· · ·</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-sm font-bold text-amber-400">
                {rank}
              </span>
              <span className="text-sm font-medium text-white">Your shop</span>
              <span className="ml-auto text-xs font-semibold text-amber-400">
                {total ? `of ${total}` : "Below the fold"}
              </span>
            </div>
          </>
        ) : (
          !rank && (
            <>
              <div className="flex items-center justify-center py-1">
                <span className="text-ink-600">· · ·</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sm font-bold text-ink-400">
                  ?
                </span>
                <span className="text-sm text-ink-300">
                  Everyone else — including, maybe, you
                </span>
              </div>
            </>
          )
        )}
      </div>

      <p className="mt-5 border-t border-white/5 pt-4 text-sm leading-relaxed text-ink-300">
        {showActual ? (
          <>
            Drivers with a cracked windshield almost never scroll past the top
            three. At{" "}
            <span className="font-semibold text-white">#{rank}</span>, you
            aren&apos;t losing on price or quality — you&apos;re losing because
            they never see you.
          </>
        ) : (
          <>
            Drivers with a cracked windshield almost never scroll past the top
            three. Everything below that is competing for the leftovers.
          </>
        )}
      </p>
    </div>
  );
}
