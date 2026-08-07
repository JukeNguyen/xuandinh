import { z } from "zod";

import { siteConfig } from "@/content/site-config";

export const applicationSchema = z.object({
  name: z.string().trim().min(2, "Vui lòng nhập họ và tên."),
  email: z.string().trim().email("Vui lòng nhập email hợp lệ."),
  qualifyingAnswer: z
    .string()
    .trim()
    .min(10, "Hãy trả lời thật — vài từ cũng được, nhưng đừng bỏ trống."),
});

export type ApplicationFormValues = z.infer<typeof applicationSchema>;

/**
 * No backend exists yet (BLUEPRINT.md: frontend-only). "Local capture" per
 * DESIGN_SYSTEM.md's ApplicationModal spec means routing through the
 * visitor's own email client for now — the only mechanism that actually
 * reaches a human without a server. Swap this function's body for a real
 * API call once a backend exists; no call site needs to change.
 */
export function buildApplicationMailto(values: ApplicationFormValues): string {
  const subject = `Đơn đăng ký — ${values.name}`;
  const body = [
    `Họ và tên: ${values.name}`,
    `Email: ${values.email}`,
    "",
    "Đâu là điều kỷ luật bạn sẵn sàng thay đổi nhất ngay lúc này?",
    values.qualifyingAnswer,
  ].join("\n");

  return `mailto:${siteConfig.applicationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
