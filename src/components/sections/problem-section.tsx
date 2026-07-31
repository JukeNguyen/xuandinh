import { Compass, Ruler, Smartphone, Sofa, UserX } from "lucide-react";
import type { ComponentType } from "react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { problemContent, type ProblemMechanismIcon } from "@/content/problem";

const ICONS: Record<
  ProblemMechanismIcon,
  ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  comfort: Sofa,
  distraction: Smartphone,
  isolation: UserX,
  standards: Ruler,
  mission: Compass,
};

export function ProblemSection() {
  return (
    <section id="problem" className="bg-surface py-section-md lg:py-section-lg">
      <Container>
        <SectionHeading
          level="h2"
          align="center"
          eyebrow={problemContent.eyebrow}
          title={problemContent.title}
          subtitle={problemContent.subtitle}
        />
        <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {problemContent.mechanisms.map((mechanism) => {
            const Icon = ICONS[mechanism.icon];
            return (
              <li
                key={mechanism.label}
                className="border-border bg-surface-raised shadow-card flex flex-col items-center gap-3 rounded-lg border p-6 text-center"
              >
                <Icon aria-hidden className="text-accent-muted h-6 w-6" strokeWidth={1.5} />
                <p className="font-display text-h3 text-foreground">{mechanism.label}</p>
                <p className="text-body text-muted">{mechanism.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
