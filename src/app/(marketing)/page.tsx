import { CurriculumSection } from "@/components/sections/curriculum-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MethodSection } from "@/components/sections/method-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { QualifierSection } from "@/components/sections/qualifier-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <QualifierSection />
      <MethodSection />
      <CurriculumSection />
      <FaqSection />
    </>
  );
}
