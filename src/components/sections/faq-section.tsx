import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqContent } from "@/content/faq";

export function FaqSection() {
  return (
    <section id="faq" className="bg-surface py-section-md lg:py-section-lg">
      <Container width="narrow">
        <SectionHeading
          level="h2"
          align="center"
          eyebrow={faqContent.eyebrow}
          title={faqContent.title}
        />
        <Accordion className="mt-12">
          {faqContent.items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
