import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll reveal driven by the CSS view timeline — no observer, no client JS.
 * `delay` shifts where in the element's entry the reveal happens, which is how
 * a stagger survives on a timeline that has no clock to delay against.
 */
export function BlurFade({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn("reveal", className)}
      style={{ "--reveal-shift": `${delay * 30}%` } as CSSProperties}
    >
      {children}
    </div>
  );
}
