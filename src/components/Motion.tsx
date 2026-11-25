"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide motion, with no animation library.
 *
 * 1. Scroll reveals: section headings, cards, FAQ rows and product mockups
 *    fade up as they scroll into view, staggered across a row of siblings.
 *    Only elements BELOW the fold when the page loads are hidden first, so
 *    nothing above the fold flickers and the page is fully visible without
 *    JavaScript.
 * 2. Mockups play their entrance animation (rank grid filling outward,
 *    leads arriving one by one) when they reveal.
 * 3. Cursor spotlight on glass cards (mouse and trackpad only).
 *
 * Everything is skipped when the visitor asks for reduced motion.
 */

const TARGETS = [
  "[data-reveal]",
  "[data-mockup]",
  "main section h2",
  "main .glass-card",
  "main details",
].join(",");

export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const all = Array.from(document.querySelectorAll<HTMLElement>(TARGETS)).filter(
      (el) => !el.closest("[data-no-reveal], header, nav")
    );
    // Animate the outermost element only; nested targets ride along.
    const targets = all.filter(
      (el) => !all.some((other) => other !== el && other.contains(el))
    );

    const fold = window.innerHeight;
    const pending = targets.filter((el) => el.getBoundingClientRect().top > fold * 0.92);

    // Stagger siblings that share a parent (e.g. cards in one grid row).
    const byParent = new Map<Element | null, HTMLElement[]>();
    for (const el of pending) {
      const list = byParent.get(el.parentElement) ?? [];
      list.push(el);
      byParent.set(el.parentElement, list);
    }
    for (const list of byParent.values()) {
      list.forEach((el, i) => {
        el.style.setProperty("--reveal-delay", `${Math.min(i, 5) * 80}ms`);
      });
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.classList.add("reveal-in");
          el.classList.remove("reveal-pending");
          // Hand transitions back to the element's own hover styles.
          window.setTimeout(() => el.classList.remove("reveal-in"), 1400);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    for (const el of pending) {
      el.classList.add("reveal-pending");
      io.observe(el);
    }

    return () => {
      io.disconnect();
      for (const el of pending) el.classList.remove("reveal-pending", "reveal-in");
    };
  }, [pathname]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    let last: HTMLElement | null = null;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const card = (e.target as Element | null)?.closest?.<HTMLElement>(".glass-card") ?? null;
        if (last && last !== card) {
          last.style.removeProperty("--mx");
          last.style.removeProperty("--my");
        }
        last = card;
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
