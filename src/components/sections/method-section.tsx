import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { methodContent } from "@/content/method";

export function MethodSection() {
  return (
    <section id="method" className="bg-surface py-section-md lg:py-section-lg">
      <Container>
        <SectionHeading
          level="h2"
          align="center"
          eyebrow={methodContent.eyebrow}
          title={methodContent.title}
          subtitle={methodContent.subtitle}
        />
        <ul className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methodContent.pillars.map((pillar) => (
            <li
              key={pillar.name}
              className="border-border bg-surface-raised shadow-card flex flex-col gap-4 rounded-lg border p-6"
            >
              <p className="font-display text-h3 text-foreground">{pillar.name}</p>
              <p className="text-body text-muted">{pillar.mission}</p>
              <p className="border-border text-caption text-accent-muted mt-auto border-t pt-4">
                {pillar.transformation}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
