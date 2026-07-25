"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SCRIPT_ID = "mwa-script";
const SRC = "https://www.mywebaudit.com/w/js/lead-widget.js";

/**
 * Site-wide MyWebAudit manager.
 *
 * - Loads mywebaudit.com/w/js/lead-widget.js on pages that actually use a MWA
 *   widget (the money pages for the modal, plus /audit for the inline form),
 *   re-injecting on navigation so MWA re-runs its widget scan after SPA route
 *   changes. Centralizing this avoids the inline form and the modal racing to
 *   inject the script.
 * - Mounts the AI Visibility modal (key f20501) ONLY on money pages
 *   (Home + Services, which includes Local SEO). MWA's Display Rules decide the
 *   actual trigger (delay / exit-intent / frequency).
 * - Tears down any modal MWA already built when navigating to a page where it
 *   shouldn't appear, so it can't linger on /audit, the blog, or legal pages.
 */
export function MyWebAuditLoader() {
  const pathname = usePathname();
  const isMoneyPage = pathname === "/" || pathname.startsWith("/services");
  const isAuditPage = pathname === "/audit" || pathname.startsWith("/audit/");
  const needsScript = isMoneyPage || isAuditPage;

  useEffect(() => {
    // If the modal shouldn't show here, remove any overlay MWA built earlier.
    if (!isMoneyPage) {
      document
        .querySelectorAll(".modal-popup, .mwa-overlay")
        .forEach((el) => el.remove());
    }

    // Remove the previous script instance so re-insertion re-runs MWA's scan.
    document.getElementById(SCRIPT_ID)?.remove();
    if (!needsScript) return;

    const j = document.createElement("script");
    j.async = true;
    j.id = SCRIPT_ID;
    j.src = `${SRC}?t=${Date.now()}`;
    document.body.appendChild(j);
  }, [pathname, isMoneyPage, needsScript]);

  // Bare mount point for the AI Visibility modal — money pages only. MWA builds
  // its own fixed-position overlay from this, so its DOM location is cosmetic.
  if (!isMoneyPage) return null;
  return (
    <div
      role="main"
      id="mwa-key-f20501"
      data-key="f20501"
      className="mwa-widget-container"
    />
  );
}
