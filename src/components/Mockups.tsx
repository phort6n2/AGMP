import type { ReactNode } from "react";
import { IconPhone, IconMessage, IconCheck, IconStar, IconMap } from "./Icons";

/**
 * Coded product mockups for the service pages and /platform.
 *
 * Every mockup is ILLUSTRATIVE: demo layout only, no real shop, customer or
 * figure. Numbers are drawn as grey bars on purpose so nothing reads as a
 * result we promise. Each frame carries `data-screenshot-slot`, naming the
 * real (anonymized) portal screenshot that can replace it later.
 */

export type MockupKind =
  | "portal"
  | "alert"
  | "coaching"
  | "report"
  | "rankGrid"
  | "quoteForm"
  | "partnerListing";

export const screenshotSlots: Record<MockupKind, string> = {
  portal:
    "Shop portal on a phone, Leads tab on Today: three leads (form, call, text), 'Ring these back' list. Customer names and numbers blurred.",
  alert:
    "New-lead email alert with the Call / Text back / We booked it buttons and the damage photo. Customer details blurred.",
  coaching:
    "Call coaching report for one recorded call: score, praise, one 'Try next time'. Caller name and number removed.",
  report:
    "Monthly report: 'Google's own figures', jobs marked booked, 'What we did', 'What's next'. All figures blurred.",
  rankGrid:
    "Reports, Rankings: the 10x10 map grid for one search around the shop. Shop name and competitor names hidden.",
  quoteForm:
    "A hosted shop site on a phone: quote form with the damage-photo field and sticky call bar. Shop branding swapped for demo branding.",
  partnerListing:
    "Windshield Repair HQ city page with a Partner listing at the top and the Partner badge. Use a demo or consenting shop.",
};

function Bar({ w = "w-10", tone = "bg-white/15" }: { w?: string; tone?: string }) {
  return <span className={`inline-block h-2.5 rounded-full ${w} ${tone}`} />;
}

export function MockupFrame({
  kind,
  caption,
  children,
  className = "",
}: {
  kind: MockupKind;
  caption?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure
      data-screenshot-slot={screenshotSlots[kind]}
      className={`relative ${className}`}
    >
      <div className="relative rounded-2xl border border-white/10 bg-ink-950/70 p-4 shadow-card sm:p-5">
        <span className="absolute right-3 top-3 z-10 rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-400">
          Illustrative
        </span>
        {children}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-ink-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function PortalMockup() {
  const leads = [
    { icon: IconPhone, src: "Call", vehicle: "2019 SUV · windshield", tag: "New" },
    { icon: IconMessage, src: "Text + photo", vehicle: "2021 sedan · chip", tag: "New" },
    { icon: IconCheck, src: "Form", vehicle: "2017 truck · side glass", tag: "Quoted" },
  ];
  return (
    <div className="mx-auto max-w-[300px] rounded-[2rem] border border-white/15 bg-ink-900 p-3">
      <div className="rounded-[1.5rem] bg-ink-850 p-3">
        <div className="flex items-center justify-between px-1 pr-16 text-[11px] text-ink-400">
          <span className="font-semibold text-white">Leads</span>
          <span>Today</span>
        </div>
        <div className="mt-3 space-y-2">
          {leads.map((l) => (
            <div
              key={l.src}
              className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-glass-500/15 text-glass-300">
                <l.icon className="h-3.5 w-3.5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-semibold text-ink-100">{l.src}</div>
                <div className="truncate text-[11px] text-ink-400">{l.vehicle}</div>
              </div>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                  l.tag === "New"
                    ? "bg-amber-500/15 text-amber-400"
                    : "bg-glass-500/15 text-glass-200"
                }`}
              >
                {l.tag}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-2.5">
          <div className="text-[11px] font-semibold text-amber-400">Ring these back</div>
          <div className="mt-1.5 flex items-center justify-between">
            <span className="text-[11px] text-ink-300">Missed call, not returned</span>
            <span className="rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-semibold text-ink-950">
              Call
            </span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1 border-t border-white/10 pt-2 text-center text-[10px] text-ink-500">
          <span>Home</span>
          <span className="font-semibold text-glass-300">Leads</span>
          <span>Reports</span>
        </div>
      </div>
    </div>
  );
}

export function AlertMockup() {
  return (
    <div className="space-y-3 pt-6">
      <div className="text-xs font-semibold text-white">New lead: windshield replacement</div>
      <div className="grid grid-cols-[72px_1fr] gap-3">
        <div className="flex h-[72px] items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-ink-700 to-ink-800 text-[10px] text-ink-400">
          Damage photo
        </div>
        <div className="space-y-2 text-[11px] text-ink-300">
          <div>Vehicle: 2020 SUV</div>
          <div>ZIP / postal: <Bar w="w-12" /></div>
          <div>Phone: <Bar w="w-16" /></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-center text-[11px] font-semibold">
        <span className="rounded-full bg-amber-500 py-1.5 text-ink-950">Call</span>
        <span className="rounded-full border border-white/15 py-1.5 text-ink-100">Text back</span>
        <span className="rounded-full border border-signal/40 py-1.5 text-signal">We booked it</span>
        <span className="rounded-full border border-white/15 py-1.5 text-ink-300">Didn&apos;t book</span>
      </div>
    </div>
  );
}

export function CoachingMockup() {
  return (
    <div className="pt-6">
      <div className="flex items-center gap-4">
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-signal/60">
          <span className="text-[10px] font-semibold uppercase text-signal">Score</span>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Booked on call</div>
          <div className="text-[11px] text-ink-400">Recorded call · player and transcript</div>
        </div>
      </div>
      <div className="mt-4 space-y-2.5 text-[12px] leading-relaxed">
        <div className="rounded-xl border border-signal/25 bg-signal/10 px-3 py-2 text-ink-100">
          Good: you confirmed the vehicle and gave a clear next step.
        </div>
        <div className="rounded-xl border border-glass-300/25 bg-glass-500/10 px-3 py-2 text-ink-100">
          <span className="font-semibold text-glass-200">Try next time:</span> ask
          if the car has a camera behind the mirror.
        </div>
      </div>
      <div className="mt-4 flex items-end gap-1.5" aria-hidden>
        {[6, 7, 5, 7, 6, 7, 5, 6].map((h, i) => (
          <span key={i} className="w-full rounded-sm bg-glass-400/40" style={{ height: `${h * 4}px` }} />
        ))}
      </div>
      <div className="mt-1 text-[10px] text-ink-500">Call quality, last 12 weeks</div>
    </div>
  );
}

export function ReportMockup() {
  const rows: [string, string][] = [
    ["Google's own figures", "w-20"],
    ["Enquiries: forms, calls, texts", "w-14"],
    ["Marked booked, $ in work", "w-16"],
  ];
  return (
    <div className="pt-6">
      <div className="text-xs font-semibold uppercase tracking-wide text-ink-400">Monthly report</div>
      <div className="mt-3 space-y-2">
        {rows.map(([label, w]) => (
          <div key={label} className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-2.5">
            <span className="text-[12px] text-ink-200">{label}</span>
            <Bar w={w} />
          </div>
        ))}
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 px-3 py-2.5">
          <div className="text-[11px] font-semibold text-white">What we did</div>
          <div className="mt-2 space-y-1.5"><Bar w="w-full" /><Bar w="w-3/4" /></div>
        </div>
        <div className="rounded-xl border border-glass-300/25 bg-glass-500/5 px-3 py-2.5">
          <div className="text-[11px] font-semibold text-glass-200">What&apos;s next</div>
          <div className="mt-2 space-y-1.5"><Bar w="w-full" /><Bar w="w-2/3" /></div>
        </div>
      </div>
    </div>
  );
}

export function RankGridMockup() {
  // Deterministic demo pattern: stronger near the shop pin (centre).
  const cells = Array.from({ length: 100 }, (_, i) => {
    const x = i % 10;
    const y = Math.floor(i / 10);
    const d = Math.hypot(x - 4.5, y - 4.5) + ((x * 7 + y * 3) % 3) * 0.6;
    return d < 2.5 ? 0 : d < 4.2 ? 1 : d < 5.8 ? 2 : 3;
  });
  const tones = [
    "bg-signal/70",
    "bg-glass-400/60",
    "bg-amber-500/50",
    "bg-white/10",
  ];
  return (
    <div className="pt-6">
      <div className="flex items-center gap-2 text-xs text-ink-300">
        <IconMap className="h-4 w-4 text-glass-300" />
        <span className="font-semibold text-white">&ldquo;windshield replacement&rdquo;</span>
        <span className="ml-auto text-ink-500">Weekly</span>
      </div>
      <div className="mt-3 grid grid-cols-10 gap-1" aria-hidden>
        {cells.map((t, i) => (
          <span
            key={i}
            className={`aspect-square rounded-[3px] ${tones[t]} ${i === 44 ? "ring-2 ring-white" : ""}`}
          />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-ink-400">
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-signal/70" />Top 3</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-glass-400/60" />4-10</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-amber-500/50" />11-20</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-white/10" />Not found</span>
      </div>
    </div>
  );
}

export function QuoteFormMockup() {
  return (
    <div className="mx-auto max-w-[300px] rounded-[2rem] border border-white/15 bg-ink-900 p-3">
      <div className="rounded-[1.5rem] bg-white/[0.04] p-4 pt-8">
        <div className="text-sm font-bold text-white">Get a free quote</div>
        <div className="mt-3 space-y-2">
          {["Name", "Phone", "Year, make, model", "ZIP or postal code"].map((f) => (
            <div key={f} className="rounded-lg border border-white/10 bg-ink-950/60 px-3 py-2 text-[11px] text-ink-500">
              {f}
            </div>
          ))}
          <div className="rounded-lg border border-dashed border-glass-300/40 px-3 py-2.5 text-center text-[11px] text-glass-200">
            + Add a photo of the damage
          </div>
          <div className="rounded-full bg-amber-500 py-2 text-center text-xs font-semibold text-ink-950">
            Send my quote request
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 rounded-full bg-glass-500 py-2 text-xs font-semibold text-white">
          <IconPhone className="h-3.5 w-3.5" /> Call the shop
        </div>
      </div>
    </div>
  );
}

export function PartnerListingMockup() {
  return (
    <div className="pt-6">
      <div className="text-[11px] uppercase tracking-wide text-ink-500">Auto glass shops in your city</div>
      <div className="mt-3 rounded-xl border border-glass-300/40 bg-glass-500/10 p-4">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[10px] text-ink-300">
            Logo
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-bold text-white">Your shop</span>
              <span className="rounded-full bg-signal/15 px-2 py-0.5 text-[10px] font-semibold uppercase text-signal">
                Partner
              </span>
            </div>
            <div className="mt-1 flex items-center gap-0.5 text-ink-500" aria-label="Google rating">
              {[0, 1, 2, 3, 4].map((i) => (
                <IconStar key={i} className="h-3 w-3" />
              ))}
              <span className="ml-1 text-[10px] text-ink-400">Google rating</span>
            </div>
            <div className="mt-2 space-y-1.5"><Bar w="w-full" /><Bar w="w-4/5" /></div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-center text-[11px] font-semibold">
          <span className="rounded-full bg-amber-500 py-1.5 text-ink-950">Get a quote</span>
          <span className="rounded-full border border-white/15 py-1.5 text-ink-100">Visit website</span>
        </div>
      </div>
      <div className="mt-2 space-y-2 opacity-60">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-3 py-2.5">
            <span className="h-6 w-6 rounded-md bg-white/10" />
            <Bar w="w-28" />
          </div>
        ))}
      </div>
    </div>
  );
}

const registry: Record<MockupKind, () => ReactNode> = {
  portal: PortalMockup,
  alert: AlertMockup,
  coaching: CoachingMockup,
  report: ReportMockup,
  rankGrid: RankGridMockup,
  quoteForm: QuoteFormMockup,
  partnerListing: PartnerListingMockup,
};

/** Render a mockup by kind inside its labelled frame. */
export function Mockup({ kind, caption, className }: { kind: MockupKind; caption?: string; className?: string }) {
  const Inner = registry[kind];
  return (
    <MockupFrame kind={kind} caption={caption} className={className}>
      <Inner />
    </MockupFrame>
  );
}
