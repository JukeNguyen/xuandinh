"use client";

import { Container } from "@/components/layout/container";
import { useApplicationModal } from "@/components/providers/application-modal-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { finalCtaContent } from "@/content/final-cta";
import { track } from "@/lib/analytics";

export function FinalCtaSection() {
  const { openModal } = useApplicationModal();

  return (
    <section className="bg-surface py-section-md lg:py-section-xl relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-[image:var(--gradient-vignette)]" />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <SectionHeading
          level="h2"
          align="center"
          title={finalCtaContent.title}
          subtitle={finalCtaContent.subtitle}
        />
        <div className="flex flex-col items-center gap-3">
          <Button
            size="lg"
            ctaLocation={finalCtaContent.primaryCta.ctaLocation}
            onClick={() => {
              track("final_cta_click", { cta_location: "final-cta" });
              openModal(finalCtaContent.primaryCta.ctaLocation);
            }}
          >
            {finalCtaContent.primaryCta.label}
          </Button>
          <p className="text-caption text-muted-2 max-w-sm">{finalCtaContent.reassurance}</p>
        </div>
      </Container>
    </section>
  );
}
