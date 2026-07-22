import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function IconMap(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  );
}

export function IconTarget(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function IconLayout(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </svg>
  );
}

export function IconList(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M8 6h13M8 12h13M8 18h13" />
      <circle cx="3.5" cy="6" r="1" fill="currentColor" stroke="none" />
      <circle cx="3.5" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="3.5" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPhone(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5c0 8.3 6.7 15 15 15a2 2 0 0 0 2-2v-2.6a1 1 0 0 0-.8-1l-3.6-.7a1 1 0 0 0-1 .3l-1.2 1.3a12.4 12.4 0 0 1-5.8-5.8L9.9 8.3a1 1 0 0 0 .3-1L9.5 3.8a1 1 0 0 0-1-.8H6a2 2 0 0 0-2 2Z" />
    </svg>
  );
}

export function IconStar(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
    </svg>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 12.5 9 17.5 20 6.5" strokeWidth={2} />
    </svg>
  );
}

export function IconArrow(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconBolt(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function IconChart(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 20V4M4 20h16" />
      <path d="M8 16l4-5 3 3 4-7" />
    </svg>
  );
}

export function IconShield(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconClock(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconGlass(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 7c0-1 .7-2 1.7-2.2C8 4.3 10 4 12 4s4 .3 6.3.8C19.3 5 20 6 20 7v6c0 3.3-2.7 6-6 6h-4c-3.3 0-6-2.7-6-6V7Z" />
      <path d="M4 9h16M12 4v15" />
    </svg>
  );
}

export function IconSearch(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function IconSparkle(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8c.5 2 1.5 3 3.5 3.5C13.5 12 12.5 13 12 15c-.5-2-1.5-3-3.5-3.5C10.5 11 11.5 10 12 8Z" fill="currentColor" />
    </svg>
  );
}

export function IconX(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" strokeWidth={2} />
    </svg>
  );
}

export function IconMail(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export const iconMap = {
  map: IconMap,
  target: IconTarget,
  layout: IconLayout,
  list: IconList,
} as const;
