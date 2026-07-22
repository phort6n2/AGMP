import { shopTypes } from "@/lib/site";
import { IconGlass } from "./Icons";

export function LogoMarquee() {
  const items = [...shopTypes, ...shopTypes];
  return (
    <div className="relative overflow-hidden py-6" aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-12">
        {items.map((name, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 whitespace-nowrap text-lg font-semibold text-ink-300"
          >
            <IconGlass className="h-4 w-4 text-glass-400" />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
