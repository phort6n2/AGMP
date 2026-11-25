import { Container, Eyebrow } from "./ui";
import {
  IconClock,
  IconSearch,
  IconSparkle,
  IconShield,
  IconBolt,
  IconMessage,
  IconMap,
} from "./Icons";

/**
 * "Always-on work" for Local SEO. Copy comes from services-content.ts and is
 * kept to what actually runs; the link reinforcement is described by outcome
 * only, never by method or tool.
 */
const icons = [IconShield, IconBolt, IconMessage, IconMap, IconSparkle, IconSearch];

export type AlwaysOnCopy = {
  eyebrow: string;
  title: string;
  body: string;
  cards: { cadence: string; title: string; body: string }[];
  footnote: string;
};

export function AlwaysOn({ copy }: { copy: AlwaysOnCopy }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-300">
            {copy.body}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.cards.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
            <div key={s.title} className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glass-500/15 text-glass-300">
                  <Icon className="h-5 w-5" />
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
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-400">
          {copy.footnote}
        </p>
      </Container>
    </section>
  );
}
