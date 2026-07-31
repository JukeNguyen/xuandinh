"use client";

import { useEffect, useRef, useState } from "react";

/**
 * True once the user has scrolled past the sentinel region (a stand-in for
 * the hero's height until a real Hero section exists). Backed by
 * IntersectionObserver rather than a per-frame scroll listener, per
 * BLUEPRINT.md §Scroll Behavior.
 */
export function useScrolledPastHero() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(([entry]) => {
      setScrolledPast(!entry.isIntersecting);
    });

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return { sentinelRef, scrolledPast };
}
