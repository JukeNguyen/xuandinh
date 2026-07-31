import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { curriculumContent } from "@/content/curriculum";

export function CurriculumSection() {
  return (
    <section id="curriculum" className="bg-bg py-section-md lg:py-section-lg">
      <Container width="narrow">
        <SectionHeading
          level="h2"
          align="center"
          eyebrow={curriculumContent.eyebrow}
          title={curriculumContent.title}
          subtitle={curriculumContent.subtitle}
        />
        <Accordion className="mt-12" defaultValue={[curriculumContent.phases[0].name]}>
          {curriculumContent.phases.map((phase) => (
            <AccordionItem key={phase.name} value={phase.name}>
              <AccordionTrigger>
                <span className="flex flex-col gap-1">
                  <span>{phase.name}</span>
                  <span className="text-caption font-body text-muted-2 font-normal">
                    {phase.days}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>{phase.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
