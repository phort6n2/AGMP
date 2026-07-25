"use client";

import { useEffect } from "react";

/**
 * Captures audit conversions and the attribution MyWebAudit can't see.
 *
 * The MWA widget dispatches a `mwaWidgetAfterSubmit` event on `document` when a
 * lead submits. MWA records the shop's name, email and website — but not that
 * the visitor arrived from Windshield Repair HQ ranked #7 in Denver, because
 * that lives in our URL, not in their form. That context is the wedge for the
 * whole post-audit sequence (see docs/post-audit-nurture.md), so we capture it
 * here at the moment of conversion and POST it to /api/lead.
 *
 * Attribution is stashed in sessionStorage on arrival, since the visitor may
 * navigate (e.g. /rank -> /audit) before submitting and the params would
 * otherwise be gone by then.
 */
const KEY = "agmp_attribution";

type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  rank?: string;
  city?: string;
  landing?: string;
  referrer?: string;
};

function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const existing = sessionStorage.getItem(KEY);

    // First touch wins — don't let a later internal navigation overwrite the
    // original source.
    if (existing) return;

    const attribution: Attribution = {};
    for (const k of [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "rank",
      "city",
    ] as const) {
      const v = params.get(k);
      if (v) attribution[k] = v.slice(0, 100);
    }

    // Only store if there's something worth attributing, or an external referrer.
    const ref = document.referrer;
    const externalRef =
      ref && !ref.includes(window.location.host) ? ref.slice(0, 200) : undefined;

    if (Object.keys(attribution).length === 0 && !externalRef) return;

    attribution.landing = window.location.pathname;
    if (externalRef) attribution.referrer = externalRef;
    sessionStorage.setItem(KEY, JSON.stringify(attribution));
  } catch {
    // sessionStorage can throw in private modes — attribution is best-effort.
  }
}

function readAttribution(): Attribution {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

export function AuditConversion() {
  useEffect(() => {
    captureAttribution();

    const onSubmit = () => {
      const attribution = readAttribution();
      // Which audit converted — the widget key is on the container element.
      const widget = document.querySelector<HTMLElement>("[id^='mwa-key-']");
      const payload = {
        event: "audit_submitted",
        widgetKey: widget?.dataset.key ?? null,
        page: window.location.pathname,
        submittedAt: new Date().toISOString(),
        ...attribution,
      };

      // keepalive so the request survives the widget's post-submit redirect.
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {
        // Never let analytics failure affect the visitor's experience.
      });
    };

    document.addEventListener("mwaWidgetAfterSubmit", onSubmit);
    return () => document.removeEventListener("mwaWidgetAfterSubmit", onSubmit);
  }, []);

  return null;
}
