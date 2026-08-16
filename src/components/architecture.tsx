"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { architecture } from "@/data/content";
import { cn } from "@/lib/utils";

/** Vertical link between layers, with a pulse traveling down it. */
function Link({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto h-10 w-px bg-border", className)} aria-hidden>
      <span className="absolute inset-x-[-1px] top-0 h-4 animate-[flow_2.2s_linear_infinite] bg-gradient-to-b from-transparent via-accent to-transparent" />
    </div>
  );
}

function Node({
  label,
  sub,
  tone = "default",
  className,
}: {
  label: string;
  sub: string;
  tone?: "default" | "accent";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-surface px-4 py-3 text-center transition-colors",
        tone === "accent" ? "border-accent/40 bg-accent/5" : "border-border",
        className,
      )}
    >
      <p className="text-[13px] font-semibold sm:text-sm">{label}</p>
      <p className="mt-0.5 font-mono text-[10px] text-muted sm:text-[11px]">{sub}</p>
    </div>
  );
}

export function Architecture() {
  const n = architecture.nodes;

  return (
    <section id="architecture" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <BlurFade>
          <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
            02 — Architecture
          </p>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-4xl">
            {architecture.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
            {architecture.body}
          </p>
        </BlurFade>

        <BlurFade delay={0.15}>
          <div className="mt-12 rounded-xl border border-border bg-surface/40 p-5 sm:mt-16 sm:p-10">
            {/* Perception layer */}
            <Node
              label={n.perception.label}
              sub={n.perception.sub}
              tone="accent"
              className="mx-auto max-w-xs"
            />
            <Link />

            {/* Split: one bus, two independent arms */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute left-1/4 right-1/4 top-0 h-px bg-border"
              />
              <div className="grid grid-cols-2 gap-4 pt-0 sm:gap-8">
                <div className="flex flex-col">
                  <Link className="mt-0" />
                  <Node label={n.left.label} sub={n.left.sub} />
                </div>
                <div className="flex flex-col">
                  <Link className="mt-0" />
                  <Node label={n.right.label} sub={n.right.sub} />
                </div>
              </div>
            </div>

            <Link />

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
              <Node label={n.hand.label} sub={n.hand.sub} />
              <Node label={n.sensor.label} sub={n.sensor.sub} />
            </div>

            <p className="mt-8 border-t border-border pt-5 text-center font-mono text-[11px] leading-relaxed text-muted">
              좌우 제어기와 배터리 계통 분리 · 한쪽 노드가 정지해도 반대쪽은 독립 동작
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
