"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="work" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <BlurFade>
          <p className="font-mono text-[11px] uppercase tracking-wider text-accent">01 — Work</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-4xl">
            직접 설계하고 만든 것들
          </h2>
        </BlurFade>

        <div className="mt-12 space-y-8 sm:mt-16 sm:space-y-12">
          {projects.map((p, idx) => (
            <BlurFade key={p.id} delay={0.1 * idx}>
              <article className="group overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/30">
                {p.images.length > 0 && (
                  <div className="grid gap-px bg-border sm:grid-cols-[1.6fr_1fr]">
                    <div className="relative aspect-[4/3] overflow-hidden bg-surface-2 sm:aspect-auto sm:min-h-[340px]">
                      <Image
                        src={p.images[0].src}
                        alt={p.images[0].alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 60vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        priority={idx === 0}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-px bg-border sm:grid-cols-1">
                      {p.images.slice(1, 4).map((img) => (
                        <div
                          key={img.src}
                          className="relative aspect-square overflow-hidden bg-surface-2 sm:aspect-auto"
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 640px) 33vw, 25vw"
                            className="object-cover transition-transform duration-700 hover:scale-[1.06]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-5 sm:p-8">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] text-muted">
                    <span>{p.period}</span>
                    {p.award && (
                      <>
                        <span className="text-border">/</span>
                        <span className="rounded border border-accent/30 bg-accent/10 px-2 py-0.5 text-accent">
                          {p.award}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{p.subtitle}</p>

                  <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-foreground/85">
                    {p.description}
                  </p>

                  {p.highlights.length > 0 && (
                    <ul className="mt-6 space-y-2.5">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-7 flex flex-wrap items-center gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-foreground"
                    >
                      {p.linkLabel}
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
