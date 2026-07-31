"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <p className="font-display text-h2 text-foreground">Something went wrong</p>
      <p className="text-body text-muted max-w-md">
        An unexpected error occurred. You can try again, or come back later.
      </p>
      <Button ctaLocation="error-retry" onClick={reset}>
        Try again
      </Button>
    </Container>
  );
}
