import { Container, Eyebrow } from "./ui";
import { IconArrow, IconMap, IconCheck } from "./Icons";
import { site } from "@/lib/site";

/**
 * Uses the real directory AGMP operates (Windshield Repair HQ) as verifiable
 * social proof — "proof we can do this, go look" — for a skeptical audience.
 */
export function DirectoryProof() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="glass-card relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div className="pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-glass-500/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>Proof, not promises</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                We don&apos;t just talk rankings — we{" "}
                <span className="text-gradient">run a directory</span> shops
                rank in.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-300">
                We operate{" "}
                <span className="font-semibold text-white">
                  {site.directory.name}
                </span>
                , a consumer auto glass directory real drivers use to find a
                shop across {site.directory.reach} — with {site.directory.shops}{" "}
                shops listed. It&apos;s live proof we can do the exact thing we
                sell: get auto glass shops found. Don&apos;t take our word for
                it — go look.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "A real, ranked directory — not a mockup",
                  "Drivers searching in all 50 states",
                  "The same playbook we run for your shop",
                  "See exactly where you'd stand",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-ink-200">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={site.directory.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-ink-500 px-6 py-3.5 text-base font-medium text-ink-100 transition-colors hover:border-glass-300 hover:text-white"
              >
                Visit {site.directory.name}
                <IconArrow className="h-4 w-4 text-glass-300 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* mock directory card */}
            <div className="rounded-2xl border border-white/10 bg-ink-950/60 p-5 shadow-card">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-glass-500/15 text-glass-300">
                  <IconMap className="h-4 w-4" />
                </span>
                <div className="text-sm font-semibold text-white">
                  {site.directory.name}
                </div>
                <span className="ml-auto text-[11px] text-ink-500">
                  Auto glass near you
                </span>
              </div>
              <div className="mt-3 space-y-2">
                {[
                  ["1", "Top-ranked shop", "Gets the calls", true],
                  ["2", "Second shop", "Steady flow", true],
                  ["3", "Third shop", "In the running", true],
                  ["7", "Your shop today", "Barely seen", false],
                ].map(([n, name, note, good]) => (
                  <div
                    key={n as string}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${
                      good ? "bg-white/[0.03]" : "border border-amber-500/30 bg-amber-500/10"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        good ? "bg-glass-500/20 text-glass-200" : "bg-amber-500/20 text-amber-300"
                      }`}
                    >
                      {n}
                    </span>
                    <span className="text-sm font-medium text-ink-100">{name}</span>
                    <span
                      className={`ml-auto text-xs ${good ? "text-signal" : "text-amber-300"}`}
                    >
                      {note}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-center text-[11px] text-ink-500">
                Illustrative — the top 3 capture most of the driver clicks.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
