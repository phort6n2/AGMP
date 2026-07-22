import Link from "next/link";
import type { ReactNode } from "react";
import { IconArrow } from "./Icons";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "amber" | "glass" | "ghost" | "outline";
  size?: "md" | "lg";
  className?: string;
  withArrow?: boolean;
};

export function Button({
  href,
  children,
  variant = "amber",
  size = "md",
  className = "",
  withArrow = false,
}: ButtonProps) {
  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };
  const variants = {
    amber:
      "bg-amber-500 text-ink-950 font-semibold shadow-amber hover:bg-amber-400 hover:-translate-y-0.5",
    glass:
      "bg-glass-500 text-white font-semibold hover:bg-glass-400 hover:-translate-y-0.5",
    outline:
      "border border-ink-500 text-ink-100 hover:border-glass-300 hover:text-white hover:bg-white/5",
    ghost: "text-ink-200 hover:text-white",
  };
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 ${sizes[size]} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {withArrow && (
        <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-glass-300/30 bg-glass-500/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-glass-200 ${className}`}
    >
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-glass-300">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-ink-300">{subtitle}</p>
      )}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold text-white sm:text-4xl">
        <span className="text-gradient">{value}</span>
      </div>
      <div className="mt-1 text-sm text-ink-300">{label}</div>
    </div>
  );
}
