"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide MyWebAudit loader.
 *
 * Loads mywebaudit.com/w/js/lead-widget.js on navigation and mounts the
 * AI Visibility modal (key f20501) on every page. MWA's Display Rules control
 * the trigger — currently exit-intent only, so a whole-site mount is
 * low-friction. Re-injecting the same cacheable URL on pathname changes re-runs
 * MWA's widget scan for client-side navigation without forcing visitors to
 * download a cache-busted copy on every page.
 */
export function MyWebAuditLoader() {
  const pathname = usePathname();

  useEffect(() => {
    document.getElementById("mwa-script")?.remove();
    const j = document.createElement("script");
    j.async = true;
    j.id = "mwa-script";
    j.src = "https://www.mywebaudit.com/w/js/lead-widget.js";
    document.body.appendChild(j);
  }, [pathname]);

  // Bare mount point for the AI Visibility modal. MWA builds its own
  // fixed-position overlay from this, so its location in the DOM is cosmetic.
  return (
    <div
      id="mwa-key-f20501"
      data-key="f20501"
      className="mwa-widget-container"
    />
  );
}
