import { Container, Eyebrow } from "./ui";
import { IconArrow, IconCheck } from "./Icons";
import { Mockup } from "./Mockups";
import { site } from "@/lib/site";

export type DirectoryProofCopy = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
};

/**
 * Uses the real directory AGMP operates (Windshield Repair HQ) as proof a
 * skeptical owner can check for themselves. No shop counts or traffic
 * figures: only what the directory visibly shows.
 */
export function DirectoryProof({ copy }: { copy: DirectoryProofCopy }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-12">
          <div className="pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-glass-500/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>{copy.eyebrow}</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                {copy.title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-300">
                {copy.body}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {copy.points.map((point) => (
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

            <Mockup
              kind="partnerListing"
              caption="Illustrative layout of a Partner listing on a city page."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
