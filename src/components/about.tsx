"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { about, profile } from "@/data/content";

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <BlurFade>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border lg:aspect-[4/5]">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
              />
            </div>
          </BlurFade>

          <BlurFade delay={0.12}>
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
              04 — About
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-4xl">
              {profile.name}입니다
            </h2>
            <div className="mt-6 space-y-5">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-[15px] leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>

            <dl className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
              {[
                ["소속", "동아대학교 전기공학과"],
                ["관심 분야", "제어설계 · 로보틱스"],
              ].map(([k, v]) => (
                <div key={k} className="bg-surface px-4 py-3">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">{k}</dt>
                  <dd className="mt-1 text-[13px] font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
