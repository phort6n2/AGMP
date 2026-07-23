"use client";

import { useEffect, useState } from "react";

/**
 * MyWebAudit lead widget (key 925479) — the audit tool from the current site.
 * Loads mywebaudit.com/w/js/lead-widget.js, which renders into the container
 * div by its data-key. Re-injected on mount so it also initializes on
 * client-side navigation into /audit.
 */
export function MyWebAuditWidget() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.getElementById("mwa-script")?.remove();
    const j = document.createElement("script");
    j.async = true;
    j.id = "mwa-script";
    j.src =
      "https://www.mywebaudit.com/w/js/lead-widget.js?t=" + Date.now();
    document.body.appendChild(j);
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-card sm:p-4">
      {!ready && (
        <p className="py-16 text-center text-sm text-slate-500">
          Loading your free audit tool…
        </p>
      )}
      <div
        role="main"
        id="mwa-key-925479"
        data-key="925479"
        className="mwa-widget-container min-h-[460px]"
      />
    </div>
  );
}
