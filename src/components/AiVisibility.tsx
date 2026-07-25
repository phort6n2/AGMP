import { Container, Eyebrow } from "./ui";
import { IconSparkle, IconCheck } from "./Icons";
import { MyWebAuditWidget } from "./MyWebAuditWidget";

// Inline AI Visibility widget key from MyWebAudit. Set this once the inline
// (non-modal) widget is created and the block below goes live automatically.
const INLINE_AV_KEY = "9ac9e4";

const surfaces = [
  { name: "ChatGPT", desc: "The assistant millions now ask first" },
  { name: "Google AI Overviews", desc: "The AI answer above search results" },
  { name: "Perplexity", desc: "The fast-growing answer engine" },
  { name: "Gemini", desc: "Google's assistant across Android & search" },
];

export function AiVisibility() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="bg-radial-glow pointer-events-none absolute inset-0 opacity-70" />
      <Container className="relative">
        <div className="glass-card overflow-hidden rounded-3xl p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            {/* Left: pitch */}
            <div>
              <Eyebrow>Included in Local SEO</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Get recommended by{" "}
                <span className="text-gradient">AI, not just Google</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-300">
                Drivers increasingly skip the search results and just ask an AI
                which shop to call. Our Local SEO service is built for this
                shift — we structure your shop&apos;s content, entities, reviews,
                and citations the way large language models actually source
                their answers, so you&apos;re the shop the AI names.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Optimized to be cited across the major AI assistants",
                  "The same discipline as classic SEO, extended to AI",
                  "No extra add-on — it's part of every Local SEO plan",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-ink-100">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: mock AI answer card */}
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-ink-950/70 p-5 shadow-card">
                {/* user query */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-glass-500/20 px-4 py-2.5 text-sm text-ink-100">
                    Where can I get my windshield replaced near me?
                  </div>
                </div>
                {/* AI answer */}
                <div className="mt-4 flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-glass-400 to-glass-600 text-white">
                    <IconSparkle className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <div className="rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-ink-200">
                      For a fast, highly-rated windshield replacement in your
                      area, a great option is{" "}
                      <span className="font-semibold text-white">
                        your shop
                      </span>
                      . They offer mobile service, bill most insurance directly,
                      do in-house ADAS calibration, and have excellent local
                      reviews.{" "}
                      <span className="text-glass-300">
                        Would you like their number?
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 pl-1 text-[11px] font-medium uppercase tracking-wide text-ink-500">
                      <IconSparkle className="h-3 w-3 text-glass-300" />
                      AI-generated answer
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-ink-400">
                Illustrative example of an AI assistant recommending your shop.
              </p>
            </div>
          </div>

          {/* Surfaces row */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
              We optimize your shop to show up across
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {surfaces.map((s) => (
                <div
                  key={s.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center"
                >
                  <div className="font-display text-base font-bold text-white">
                    {s.name}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-ink-400">
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inline AI Visibility check — appears once INLINE_AV_KEY is set.
            Reserved here so it drops in the moment the MWA key is available. */}
        {INLINE_AV_KEY && (
          <>
            <div className="mx-auto mt-12 max-w-2xl text-center">
              <Eyebrow>Free AI visibility check</Eyebrow>
              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                Curious what AI says about your shop{" "}
                <span className="text-gradient">right now?</span>
              </h3>
              <p className="mt-3 text-ink-300">
                Run a free 60-second check to see whether ChatGPT, Google&apos;s
                AI, and the other assistants can find and recommend your shop —
                or if they&apos;re sending your customers to a competitor.
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-xl">
              <MyWebAuditWidget
                widgetKey={INLINE_AV_KEY}
                badge="60 seconds"
                loadingLabel="Loading your AI visibility check…"
              />
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
