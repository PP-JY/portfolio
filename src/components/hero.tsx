"use client";

import { motion } from "motion/react";
import { ArrowDown, Mail } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { GridPattern } from "@/components/ui/grid-pattern";
import { NumberTicker } from "@/components/ui/number-ticker";
import { profile, stats } from "@/data/content";

const lines = profile.headline.split("\n");

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Background stack. Both layers are positioned, so they need an explicit
          negative z to stay under the (unpositioned) content flow. */}
      <GridPattern className="-z-10 text-border/40 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
      <Particles className="-z-10" quantity={70} />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] max-w-none -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, #0e7490 0%, transparent 65%)" }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2.5 font-mono text-[11px] tracking-wider text-muted sm:text-xs"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="uppercase">{profile.affiliation}</span>
        </motion.div>

        <h1 className="font-semibold leading-[1.12] tracking-tight [font-size:clamp(1.9rem,8vw,4.25rem)]">
          {lines.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.12 * i, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.58 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#work"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-[#04222a] transition-transform hover:scale-[1.02] active:scale-[0.99]"
          >
            프로젝트 보기
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={16} />
            연락하기
          </a>
        </motion.div>

        {/* Measured figures — the substance behind the headline. */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:mt-24 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-surface p-4 sm:p-5">
              <dd className="font-mono text-2xl font-semibold text-accent sm:text-3xl">
                <NumberTicker value={s.value} decimals={s.decimals} />
                <span className="text-lg text-accent/70 sm:text-xl">{s.suffix}</span>
              </dd>
              <dt className="mt-2 text-[13px] font-medium text-foreground">{s.label}</dt>
              <p className="mt-0.5 font-mono text-[10px] leading-snug text-muted sm:text-[11px]">
                {s.note}
              </p>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
