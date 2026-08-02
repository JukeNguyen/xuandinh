import { siteConfig } from "@/content/site-config";

// Reassurance line sourced verbatim from CONTENT_STRATEGY.md §CTA Library (Reassurance Headlines #4).
// Button label sourced verbatim from §CTA Library (CTA Button Labels #21).
export const applicationContent = {
  title: `Apply for ${siteConfig.name}`,
  description: "If it's not right for you, we'll tell you — not just take the application.",
  fields: {
    name: { label: "Full name" },
    email: { label: "Email" },
    qualifyingAnswer: {
      label: "What's the one area of discipline you're most ready to fix?",
    },
  },
  submitLabel: "Submit Your Application",
  submitNote:
    "Submitting opens your email client with your application ready to send — hit send there to complete it.",
  successTitle: "Almost done",
  successDescription:
    "Check your email client — your application is ready to send. Once you hit send there, you're done.",
} as const;
