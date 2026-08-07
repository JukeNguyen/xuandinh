import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <p className="font-display text-h2 text-foreground">Không tìm thấy trang</p>
      <p className="text-body text-muted max-w-md">
        Trang bạn đang tìm không tồn tại hoặc đã được di chuyển.
      </p>
      <Link href="/" data-cta-location="not-found" className={buttonVariants({ size: "md" })}>
        Về trang chủ
      </Link>
    </Container>
  );
}
