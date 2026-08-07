import Link from "next/link";

import { Container } from "@/components/layout/container";
import { footerContent } from "@/content/footer";
import { siteConfig } from "@/content/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-bg pt-section-sm md:pb-section-sm border-t pb-24">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div className="flex flex-col gap-2">
          <Link href="/" className="font-display tracking-hero text-foreground text-lg">
            {siteConfig.shortName}
          </Link>
          <p className="text-caption text-muted-2 max-w-xs">{siteConfig.tagline}</p>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-end"
        >
          {footerContent.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-caption text-muted ease-standard hover:text-foreground transition-colors duration-(--duration-fast)"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
      <Container className="mt-8">
        <p className="border-border text-caption text-muted-2 border-t pt-6">
          © {year} {siteConfig.name}. Bảo lưu mọi quyền.
        </p>
      </Container>
    </footer>
  );
}
