"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/** Counts 0 → `value` once the element scrolls into view. */
export function NumberTicker({
  value,
  decimals = 0,
  duration = 1400,
  className,
}: {
  value: number;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = value.toFixed(decimals);
      return;
    }

    let raf = 0;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      // easeOutExpo — fast start, long settle, reads like an instrument.
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      // Written to the DOM rather than through state: this ticks every frame,
      // and re-rendering React 60x a second to move one text node is waste.
      el.textContent = (value * eased).toFixed(decimals);
      if (p < 1) raf = requestAnimationFrame(step);
    };

    // Shrink the observer box on the bottom only. A uniform inset also pulls
    // the sides in, and a narrow element (one digit in a left column) then
    // never intersects at all.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        raf = requestAnimationFrame(step);
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, decimals, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {(0).toFixed(decimals)}
    </span>
  );
}
