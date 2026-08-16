"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { stack, strengths } from "@/data/content";

export function Stack() {
  return (
    <section id="stack" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <BlurFade>
          <p className="font-mono text-[11px] uppercase tracking-wider text-accent">03 — Stack</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-4xl">
            멈추지 않는 시스템을 만들기 위해 쌓아온 것들
          </h2>
        </BlurFade>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-5">
          {strengths.map((s, i) => (
            <BlurFade key={s.title} delay={0.08 * i}>
              <div className="h-full rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/30 sm:p-6">
                <span className="font-mono text-[11px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.2}>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((t) => (
              <div
                key={t.name}
                className="group flex items-center justify-between gap-4 bg-surface px-5 py-4 transition-colors hover:bg-surface-2"
              >
                <span className="text-sm font-medium">{t.name}</span>
                <span className="shrink-0 text-right font-mono text-[10px] text-muted transition-colors group-hover:text-accent">
                  {t.note}
                </span>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
