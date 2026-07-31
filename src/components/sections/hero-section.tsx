"use client";

import { motion, type Variants } from "framer-motion";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/hero";
import { track } from "@/lib/analytics";

// Matches --ease-out-weighted / --duration-slower (globals.css) — Framer Motion
// reads transition values as JS, not CSS custom properties.
const EASE_OUT_WEIGHTED = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT_WEIGHTED },
  },
};

export function HeroSection() {
  return (
    <section className="bg-bg py-section-md lg:py-section-xl flex min-h-screen items-center">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto flex max-w-3xl flex-col items-center gap-8"
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              level="h1"
              title={heroContent.headline}
              subtitle={heroContent.subheadline}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              ctaLocation={heroContent.primaryCta.ctaLocation}
              onClick={() => track("hero_cta_click", { cta_location: "hero" })}
            >
              {heroContent.primaryCta.label}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
