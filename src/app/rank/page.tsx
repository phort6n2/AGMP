import type { Metadata } from "next";
import Link from "next/link";
import { Container, Button, Eyebrow } from "@/components/ui";
import { RankVisual } from "@/components/RankVisual";
import { Guarantee } from "@/components/Guarantee";
import {
  IconCheck,
  IconMessage,
  IconShield,
  IconBolt,
  IconArrow,
} from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Your Shop's Ranking — What It's Costing You",
  description:
    "You've seen where your shop ranks. Here's what that position actually costs in booked jobs — and the fastest way to move up.",
  alternates: { canonical: "/rank" },
  // Landing page for directory traffic — no independent search value.
  robots: { index: false, follow: true },
};

/** Accepts a positive integer from a query param, else undefined. */
function num(v: string | string[] | undefined): number | undefined {
  const s = Array.isArray(v) ? v[0] : v;
  if (!s) return undefined;
  const n = Number.parseInt(s, 10);
  return Number.isFinite(n) && n > 0 && n < 1000 ? n : undefined;
}

/** Trims and length-caps a free-text param before rendering it. */
function text(v: string | string[] | undefined): string | undefined {
  const s = Array.isArray(v) ? v[0] : v;
  const t = s?.trim();
  return t ? t.slice(0, 60) : undefined;
}

export default async function RankPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const rank = num(sp.rank);
  const total = num(sp.of);
  const city = text(sp.city);
  const shop = text(sp.shop);

  // Carry directory attribution into the audit so conversions are traceable
  // back to Windshield Repair HQ rather than looking like direct traffic.
  //
  // rank and city ride in utm_term / utm_content on purpose: MyWebAudit
  // natively captures the five standard utm_* params and submits them WITH the
  // lead, so the CRM receives attribution already joined to the shop's name and
  // email. A separate webhook would arrive with nothing to match on. The values
  // are kept raw ("7", "Denver") so they merge straight into messages —
  // "You're #{{utm_term}} in {{utm_content}}".
  const auditParams = new URLSearchParams({
    utm_source: "windshieldrepairhq",
    utm_medium: "referral",
    utm_campaign: "rank-reveal",
  });
  if (rank) auditParams.set("utm_term", String(rank));
  if (city) auditParams.set("utm_content", city);
  // Kept for our own /api/lead listener and for readability in analytics.
  if (rank) auditParams.set("rank", String(rank));
  if (city) auditParams.set("city", city);
  const auditHref = `/audit?${auditParams.toString()}`;

  const inTop3 = typeof rank === "number" && rank <= 3;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="bg-radial-glow pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>From {site.directory.name}</Eyebrow>

              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
                {inTop3 ? (
                  <>
                    You&apos;re in the top 3
                    {city ? ` in ${city}` : ""}.{" "}
                    <span className="text-gradient">Now hold it.</span>
                  </>
                ) : rank ? (
                  <>
                    You&apos;re{" "}
                    <span className="text-gradient-amber">#{rank}</span>
                    {city ? ` in ${city}` : ""}. Here&apos;s what that&apos;s{" "}
                    <span className="text-gradient">costing you</span>
                  </>
                ) : (
                  <>
                    You&apos;ve seen your listing. Now see what it&apos;s{" "}
                    <span className="text-gradient">costing you</span>
                  </>
                )}
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-300">
                {shop ? `${shop} is listed on ` : "You found your shop on "}
                {site.directory.name} — a directory drivers use to find glass
                work.{" "}
                {inTop3
                  ? "Top-3 position is the most valuable spot in local search, and it's also the easiest to lose. Holding it is a maintenance job."
                  : "But the directory is only one place drivers look. The bigger question is where you land on Google — because that's where most of the searching happens."}
              </p>

              <ul className="mt-7 space-y-3">
                {[
                  "A free audit of your Google ranking, reviews, and website",
                  "Built only for auto glass — we know insurance, steering & calibration",
                  "No cost, no contract, no pressure",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-ink-100">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href={auditHref} size="lg" withArrow>
                  Get my free audit
                </Button>
                <a
                  href={site.smsHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink-200 hover:text-white"
                >
                  <IconMessage className="h-4 w-4 text-glass-300" />
                  Or text us — {site.phone}
                </a>
              </div>
            </div>

            <RankVisual rank={rank} total={total} city={city} />
          </div>
        </Container>
      </section>

      {/* ---------- Why this matters ---------- */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>The gap</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Being listed and being{" "}
              <span className="text-gradient">found</span> aren&apos;t the same
              thing
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-300">
              A directory listing helps. But most drivers with a cracked
              windshield open Google or ask an AI assistant — and whoever shows
              up there gets the call, usually before anyone else is considered.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: IconBolt,
                title: "The search is urgent",
                body: "A crack spreads and a driver acts the same day. The first shop that shows up and answers usually books the job.",
              },
              {
                icon: IconShield,
                title: "The chains outspend you",
                body: "National chains have budget and TPA relationships. Local ranking is where an independent can actually beat them.",
              },
              {
                icon: IconCheck,
                title: "It's fixable",
                body: "Ranking isn't luck. It's profile completeness, review signal, and relevance — all of it work you can actually control.",
              },
            ].map((c) => (
              <div key={c.title} className="glass-card rounded-2xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glass-500/15 text-glass-300">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/framework"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-glass-300 hover:text-white"
            >
              See the full framework we use to move shops up
              <IconArrow className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Container>
      </section>

      <Guarantee />

      {/* ---------- Close ---------- */}
      <section className="pb-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-glass-300/20 bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-14 text-center sm:px-14">
            <div className="bg-radial-glow pointer-events-none absolute inset-0" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                {rank && !inTop3
                  ? `Let's find out why you're #${rank}`
                  : "Let's see where you actually stand"}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
                The free audit checks your Map Pack position, reviews, website,
                and whether AI assistants recommend you. Takes about a minute,
                and you keep it either way.
              </p>
              <div className="mt-8">
                <Button href={auditHref} size="lg" withArrow>
                  Get my free audit
                </Button>
              </div>
              <p className="mt-5 text-sm text-ink-300">
                {site.owner} reads these personally. No contracts, no pressure.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
