import Link from "next/link";
import { site } from "@/lib/site";
import { IconMessage, IconArrow } from "./Icons";

/**
 * Persistent mobile-only bottom bar with one-tap call + book actions.
 * Auto glass is a phone-first, high-urgency category — this keeps the
 * primary conversion paths one thumb-tap away on every page.
 */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/95 backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        <a
          href={site.smsHref}
          className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink-500 px-4 py-3 text-sm font-semibold text-white"
        >
          <IconMessage className="h-4 w-4 text-glass-300" />
          Text us
        </a>
        <Link
          href="/audit"
          className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-amber-500 px-4 py-3 text-sm font-semibold text-ink-950"
        >
          Free audit
          <IconArrow className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
