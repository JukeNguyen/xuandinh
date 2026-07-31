import type { ElementType } from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Required so heading hierarchy is always deliberate — h1 is reserved for the hero. */
  level: "h1" | "h2";
  align?: "center" | "left";
  className?: string;
}

/** Shared eyebrow + title + subtitle rhythm used across every section (DESIGN_SYSTEM.md §Component Standards). */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  level,
  align = "center",
  className,
}: SectionHeadingProps) {
  const Title: ElementType = level;
  const isHero = level === "h1";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-eyebrow font-body tracking-eyebrow text-accent-muted font-semibold uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Title
        className={cn(
          "font-display text-foreground",
          isHero ? "text-hero tracking-hero" : "text-h2 tracking-[-0.01em]",
        )}
      >
        {title}
      </Title>
      {subtitle ? (
        <p className={cn("text-body-lg text-muted", align === "center" ? "max-w-2xl" : "max-w-xl")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
