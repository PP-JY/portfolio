"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Particle = { x: number; y: number; vx: number; vy: number; r: number; a: number };

/**
 * Drifting particle field on a canvas. Sized to its parent, DPR-aware, and
 * inert when the visitor asks for reduced motion.
 */
export function Particles({
  className,
  quantity = 60,
  color = "#22d3ee",
}: {
  className?: string;
  quantity?: number;
  color?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const parent = canvas.parentElement;
    if (!parent) return;

    let particles: Particle[] = [];
    let frame = 0;
    let w = 0;
    let h = 0;

    const seed = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Thin the field on small screens so phones don't render a starfield.
      const count = w < 640 ? Math.round(quantity * 0.5) : quantity;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 1.3 + 0.4,
        a: Math.random() * 0.5 + 0.15,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = p.a;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    };

    seed();
    if (reduced) {
      draw();
      cancelAnimationFrame(frame);
    } else {
      draw();
    }

    const ro = new ResizeObserver(seed);
    ro.observe(parent);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, [quantity, color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
}
