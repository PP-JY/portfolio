"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/data/content";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Freeze the page behind the mobile overlay.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="group flex items-baseline gap-2">
            <span className="text-base font-semibold tracking-tight">{profile.name}</span>
            <span className="hidden font-mono text-[11px] text-muted transition-colors group-hover:text-accent sm:inline">
              {profile.role}
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 font-mono text-[13px] text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            className="-mr-2 grid h-10 w-10 place-items-center rounded-md text-foreground transition-colors hover:bg-surface md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Read progress, scrubbed by the document scroll — no listener. */}
        <div
          aria-hidden
          className="scroll-progress absolute inset-x-0 bottom-0 h-px bg-accent"
        />
      </header>

      {/* Kept mounted so the close can transition; `display` rides the
          transition via allow-discrete, which is what used to need
          AnimatePresence. */}
      <div
        data-open={open}
        inert={!open}
        className="menu-overlay fixed inset-0 z-40 bg-background/95 backdrop-blur-xl"
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-8">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={
                {
                  "--rise-y": "0px",
                  "--rise-blur": "0px",
                  animationDelay: `${0.05 * i + 0.05}s`,
                } as CSSProperties
              }
              className="border-b border-border py-5 text-2xl font-medium tracking-tight"
            >
              <span className="mr-3 font-mono text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
