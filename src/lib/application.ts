import { z } from "zod";

import { siteConfig } from "@/content/site-config";

export const applicationSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  qualifyingAnswer: z
    .string()
    .trim()
    .min(10, "Give a real answer — a few words is enough, but not none."),
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
  const subject = `Application — ${values.name}`;
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    "",
    "What's the one area of discipline you're most ready to fix?",
    values.qualifyingAnswer,
  ].join("\n");

  return `mailto:${siteConfig.applicationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
