"use client";

import { useEffect, useState } from "react";
import { IconSparkle, IconShield } from "./Icons";

/**
 * MyWebAudit lead widget (key 925479) — the audit tool from the current site,
 * wrapped in a branded frame (dark header/footer + white tool body) so the
 * third-party form sits cleanly inside the dark design. The widget's own
 * styling is controlled in the MyWebAudit dashboard.
 *
 * Loads mywebaudit.com/w/js/lead-widget.js and re-injects on mount so it also
 * initializes on client-side navigation into /audit.
 */
export function MyWebAuditWidget() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.getElementById("mwa-script")?.remove();
    const j = document.createElement("script");
    j.async = true;
    j.id = "mwa-script";
    j.src = "https://www.mywebaudit.com/w/js/lead-widget.js?t=" + Date.now();
    document.body.appendChild(j);
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative">
      {/* ambient glow so the panel lifts off the dark background */}
      <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-glass-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-amber-500/15 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-ink-850 shadow-card">
        {/* header */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-glass-500/15 text-glass-300 ring-1 ring-glass-300/20">
              <IconSparkle className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white">
                Free Auto Glass Marketing Audit
              </div>
              <div className="text-[11px] text-ink-400">
                Takes about 60 seconds
              </div>
            </div>
          </div>
          <span className="hidden items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-ink-300 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            No cost
          </span>
        </div>

        {/* white tool body — houses the MyWebAudit widget */}
        <div className="relative min-h-[520px] bg-white p-3 sm:p-4">
          {!ready && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <span className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-slate-500" />
              <p className="text-sm text-slate-500">
                Loading your free audit tool…
              </p>
            </div>
          )}
          <div
            role="main"
            id="mwa-key-925479"
            data-key="925479"
            className="mwa-widget-container"
          />
        </div>

        {/* footer */}
        <div className="flex items-center justify-center gap-2 border-t border-white/10 px-5 py-3 text-center text-xs text-ink-400">
          <IconShield className="h-3.5 w-3.5 text-glass-300" />
          No obligation · We never sell your info
        </div>
      </div>
    </div>
  );
}
