"use client";

import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site-config";
import { useScrolledPastHero } from "@/hooks/use-scrolled-past-hero";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

// The one consistent CTA label repeated across the page (DESIGN_SYSTEM.md /
// CONTENT_STRATEGY.md §CTA Strategy) — never fragment into competing labels.
const NAV_CTA_LABEL = "Apply Now";

export function Navbar() {
  const { sentinelRef, scrolledPast } = useScrolledPastHero();

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-screen"
      />
      <header
        className={cn(
          "ease-standard fixed inset-x-0 top-0 z-(--z-sticky-nav) transition-colors duration-(--duration-base)",
          scrolledPast
            ? "border-border bg-bg/90 border-b backdrop-blur-(--blur-nav)"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-display tracking-hero text-foreground focus-visible:outline-accent text-lg outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {siteConfig.shortName}
          </Link>
          <Button
            size="md"
            ctaLocation="nav"
            onClick={() => track("nav_cta_click", { cta_location: "nav" })}
          >
            {NAV_CTA_LABEL}
          </Button>
        </Container>
      </header>
    </>
  );
}
