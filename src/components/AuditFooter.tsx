import { site } from "@/lib/site";

/**
 * Minimal footer for the /audit landing page — a single legal line, no
 * navigation. Keeps the page focused on the one action that matters here.
 */
export function AuditFooter() {
  return (
    <footer className="border-t border-white/5 py-8">
      <p className="text-center text-xs text-ink-400">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
