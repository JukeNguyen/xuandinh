"use client";

import { Analytics } from "@vercel/analytics/react";
import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Global app-wide providers. MotionConfig with reducedMotion="user" enforces
 * prefers-reduced-motion for every Framer Motion animation added by later
 * features, so reduced-motion support doesn't need to be re-implemented
 * per component (see DESIGN_SYSTEM.md §Motion Rules).
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
      <Analytics />
    </MotionConfig>
  );
}
