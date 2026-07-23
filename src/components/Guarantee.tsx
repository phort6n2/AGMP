import { Container, Eyebrow } from "./ui";
import { IconShield, IconCheck } from "./Icons";

const promises = [
  "Month-to-month — cancel anytime, for any reason",
  "No long-term contracts, ever",
  "You own your website, ad account, and data",
  "We report on booked jobs, not vanity metrics",
];

/**
 * A named risk-reversal guarantee built only on what's actually true
 * (no contracts, you own everything) — the thing a burned owner buys first.
 */
export function Guarantee() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="glass-card relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-signal/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow>Our promise to you</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                The{" "}
                <span className="text-gradient">No-Hostages Guarantee</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                We&apos;ve heard every horror story — the year-long contract, the
                bill for &quot;impressions,&quot; the agency that held your
                website and ad account hostage. So we do the opposite. If
                we&apos;re not driving jobs, you walk — and you take everything
                with you.
              </p>
              <span className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-sm font-semibold text-signal">
                <IconShield className="h-4 w-4" />
                We earn your business every single month
              </span>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {promises.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink-100">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
