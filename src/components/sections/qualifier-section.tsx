import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { qualifierContent } from "@/content/qualifier";

export function QualifierSection() {
  return (
    <section id="qualifier" className="bg-bg py-section-md lg:py-section-lg">
      <Container width="narrow">
        <SectionHeading
          level="h2"
          align="center"
          eyebrow={qualifierContent.eyebrow}
          title={qualifierContent.title}
        />
        <div className="divide-border border-border mt-12 divide-y border-y">
          {qualifierContent.rows.map((row) => (
            <div key={row.dimension} className="py-6">
              <p className="text-caption text-foreground mb-3 font-semibold">{row.dimension}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-caption tracking-eyebrow text-muted-2 mb-1 uppercase">
                    Current
                  </p>
                  <p className="text-body text-muted">{row.current}</p>
                </div>
                <div>
                  <p className="text-caption tracking-eyebrow text-accent-muted mb-1 uppercase">
                    Desired
                  </p>
                  <p className="text-body-lg text-foreground">{row.desired}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
