"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useApplicationModal } from "@/components/providers/application-modal-provider";
import { Button } from "@/components/ui/button";
import { useScrolledPastHero } from "@/hooks/use-scrolled-past-hero";
import { track } from "@/lib/analytics";

const CTA_LABEL = "Đăng Ký Ngay";

/** Mobile-only persistent CTA bar (DESIGN_SYSTEM.md §Component Standards). */
export function StickyMobileCta() {
  const { scrolledPast } = useScrolledPastHero();
  const { openModal } = useApplicationModal();

  return (
    <AnimatePresence>
      {scrolledPast ? (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="border-border bg-bg fixed inset-x-0 bottom-0 z-(--z-sticky-cta) border-t p-4 md:hidden"
        >
          <Button
            size="md"
            className="w-full"
            ctaLocation="sticky"
            onClick={() => {
              track("sticky_cta_click", { cta_location: "sticky" });
              openModal("sticky");
            }}
          >
            {CTA_LABEL}
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
