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
      <p className="font-display text-h2 text-foreground">Đã có lỗi xảy ra</p>
      <p className="text-body text-muted max-w-md">
        Đã xảy ra lỗi không mong muốn. Bạn có thể thử lại, hoặc quay lại sau.
      </p>
      <Button ctaLocation="error-retry" onClick={reset}>
        Thử lại
      </Button>
    </Container>
  );
}
