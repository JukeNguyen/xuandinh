import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site-config";

export default function HomePage() {
  return (
    <Container className="py-section-lg flex min-h-[60vh] items-center">
      <p className="font-body text-body text-muted">
        {siteConfig.name} — foundation build. Landing page sections land in subsequent features.
      </p>
    </Container>
  );
}
