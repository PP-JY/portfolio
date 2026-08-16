"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { GridPattern } from "@/components/ui/grid-pattern";
import { profile } from "@/data/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-border py-20 sm:py-32"
    >
      <GridPattern className="-z-10 text-border/40 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[300px] w-[700px] max-w-none -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[110px]"
        style={{ background: "radial-gradient(circle, #0e7490 0%, transparent 65%)" }}
      />

      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <BlurFade>
          <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
            05 — Contact
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-4xl">
            같이 만들 프로젝트가 있다면
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted">
            새로운 프로젝트나 협업, 채용 제안은 이메일로 편하게 연락 주세요.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-9 inline-flex items-center gap-3 rounded-lg border border-border bg-surface px-5 py-4 transition-colors hover:border-accent"
          >
            <Mail size={18} className="text-accent" />
            <span className="font-mono text-sm sm:text-base">{profile.email}</span>
            <ArrowUpRight
              size={16}
              className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </a>
        </BlurFade>
      </div>
    </section>
  );
}
