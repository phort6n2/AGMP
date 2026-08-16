"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const PROJECT_ID = "y3chtuz8t7";

/**
 * Microsoft Clarity (session recordings & heatmaps) via the official
 * @microsoft/clarity package.
 *
 * Sessions are tagged with the funnel attribution captured by
 * <AuditConversion/> (which must mount BEFORE this component so its effect
 * writes sessionStorage first), so recordings can be filtered by source —
 * e.g. every session that arrived from Windshield Repair HQ, or from a
 * specific rank/city.
 */
export function ClarityAnalytics() {
  useEffect(() => {
    try {
      Clarity.init(PROJECT_ID);
      const raw = sessionStorage.getItem("agmp_attribution");
      if (raw) {
        const a = JSON.parse(raw) as Record<string, string>;
        if (a.utm_source) Clarity.setTag("source", a.utm_source);
        if (a.utm_campaign) Clarity.setTag("campaign", a.utm_campaign);
        if (a.rank) Clarity.setTag("rank", a.rank);
        if (a.city) Clarity.setTag("city", a.city);
        if (a.landing) Clarity.setTag("landing", a.landing);
      }
    } catch {
      // Analytics must never break the page.
    }
  }, []);

  return null;
}
