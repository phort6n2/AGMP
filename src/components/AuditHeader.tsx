import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Minimal, distraction-free header for the /audit landing page.
 * The only navigation offered is the logo, which returns to the home page —
 * everything else is removed so the single conversion path is the audit form.
 */
export function AuditHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-center px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          aria-label={`${site.name} — back to home`}
          className="inline-flex"
        >
          <Image
            src="/logo-white.png"
            alt={site.name}
            width={500}
            height={200}
            className="h-9 w-auto sm:h-10"
          />
        </Link>
      </div>
    </header>
  );
}
