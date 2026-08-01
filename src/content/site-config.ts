export const siteConfig = {
  name: "The Operating System",
  shortName: "The OS",
  tagline: "The operating system running underneath everything else you've tried to fix.",
  description:
    "A 90-day, cohort-based system for men who are done starting over — installed in three phases: Detox, Install, Compound.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  // Placeholder pending a real inbox — swap via env var once one exists.
  applicationEmail: process.env.NEXT_PUBLIC_APPLICATION_EMAIL ?? "applications@example.com",
  locale: "en_US",
} as const;
