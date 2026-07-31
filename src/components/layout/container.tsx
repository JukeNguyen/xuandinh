import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  width?: "standard" | "narrow" | "wide";
  className?: string;
}

const widthClasses = {
  standard: "max-w-7xl",
  narrow: "max-w-narrow",
  wide: "max-w-wide",
} as const;

/** Shared content-width wrapper (DESIGN_SYSTEM.md §Container). */
export function Container({
  children,
  as: Tag = "div",
  width = "standard",
  className,
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-6 md:px-8 lg:px-12", widthClasses[width], className)}>
      {children}
    </Tag>
  );
}
