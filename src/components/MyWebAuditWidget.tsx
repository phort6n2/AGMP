"use client";

import { useEffect, useState } from "react";
import { IconShield } from "./Icons";
import { site } from "@/lib/site";

type Props = {
  /** MyWebAudit widget key. Defaults to the GBP marketing audit (925479). */
  widgetKey?: string;
  /** Small pill in the header (hidden on mobile). */
  badge?: string;
  /** Loading message. */
  loadingLabel?: string;
  /** Minimum height (px) of the tool body — the frame grows past this to fit
   *  the form, so shorter forms don't leave a void. */
  minHeight?: number;
};

/**
 * MyWebAudit lead widget, wrapped in a branded frame (dark header/footer)
 * so the third-party form sits cleanly inside the dark design. The widget's
 * own styling is controlled in the MyWebAudit dashboard.
 *
 * Loads mywebaudit.com/w/js/lead-widget.js and re-injects on mount so it also
 * initializes on client-side navigation into the page. Parameterized by
 * `widgetKey` so the same frame powers both the GBP marketing audit (/audit)
 * and the AI Visibility audit (Local SEO page).
 */
export function MyWebAuditWidget({
  widgetKey = "925479",
  badge = "No cost",
  loadingLabel = "Loading your free audit tool…",
  minHeight = 520,
}: Props) {
  const [ready, setReady] = useState(false);

  // The MWA script is loaded site-wide by <MyWebAuditLoader/> (which re-injects
  // on navigation and re-runs MWA's widget scan), so here we only drive the
  // loading spinner while the injected form initializes.
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, [widgetKey]);

  return (
    <div className="relative">
      {/* ambient glow so the panel lifts off the dark background */}
      <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-glass-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-amber-500/15 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-ink-850 shadow-card">
        {/* header — brand logo only, so the form's own heading isn't duplicated */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-white.png"
            alt={site.name}
            width={500}
            height={200}
            className="h-7 w-auto sm:h-8"
          />
          {badge && (
            <span className="hidden items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-ink-300 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              {badge}
            </span>
          )}
        </div>

        {/* tool body — the MyWebAudit widget brings its own card, so keep this
            surface transparent (no double-boxing) and let it sit in the panel */}
        <div
          className="relative flex items-start justify-center p-3 sm:p-4"
          style={{ minHeight }}
        >
          {!ready && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-glass-300" />
              <p className="text-sm text-ink-400">{loadingLabel}</p>
            </div>
          )}
          <div
            role="main"
            id={`mwa-key-${widgetKey}`}
            data-key={widgetKey}
            className="mwa-widget-container w-full"
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
