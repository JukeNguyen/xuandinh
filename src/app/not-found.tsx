import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <p className="font-display text-h2 text-foreground">Page not found</p>
      <p className="text-body text-muted max-w-md">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link href="/" data-cta-location="not-found" className={buttonVariants({ size: "md" })}>
        Back to home
      </Link>
    </Container>
  );
}
