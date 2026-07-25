"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide MyWebAudit loader.
 *
 * Loads mywebaudit.com/w/js/lead-widget.js once per navigation and mounts the
 * AI Visibility modal (key f20501), which fires per the Display Rules set in
 * the MyWebAudit dashboard (delay / exit-intent). Re-injecting the script on
 * each pathname change re-runs MWA's widget scan, so both this modal and any
 * inline widget (e.g. the GBP audit on /audit) initialize after client-side
 * navigation. A single loader avoids duplicate-script races.
 */
export function MyWebAuditLoader() {
  const pathname = usePathname();

  useEffect(() => {
    document.getElementById("mwa-script")?.remove();
    const j = document.createElement("script");
    j.async = true;
    j.id = "mwa-script";
    j.src = "https://www.mywebaudit.com/w/js/lead-widget.js?t=" + Date.now();
    document.body.appendChild(j);
  }, [pathname]);

  // Bare mount point for the AI Visibility modal. MWA builds its own
  // fixed-position overlay from this, so its location in the DOM is cosmetic.
  return (
    <div
      role="main"
      id="mwa-key-f20501"
      data-key="f20501"
      className="mwa-widget-container"
    />
  );
}
