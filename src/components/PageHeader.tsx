import { Container, Badge } from "./ui";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-16">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="bg-radial-glow pointer-events-none absolute inset-0" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <Badge>
              <span className="h-1.5 w-1.5 rounded-full bg-glass-300" />
              {eyebrow}
            </Badge>
          )}
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-300">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
