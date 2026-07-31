// Sourced verbatim from CONTENT_STRATEGY.md §Unique Mechanism (The Three-Phase Install).
export const curriculumContent = {
  eyebrow: "The Mechanism",
  title: "The Three-Phase Install",
  subtitle: "A structured 90-day sequence — not a pile of modules released all at once.",
  phases: [
    {
      name: "DETOX",
      days: "Days 1–30",
      description:
        "Remove the friction-free access points that feed The Drift (environment redesign, default-setting audit); establish the non-negotiable baseline (sleep, movement, communication rules) before adding anything new.",
    },
    {
      name: "INSTALL",
      days: "Days 31–60",
      description:
        "Layer in the four Pillars (Body, Communication, Discipline, Warrior Mindset) as fixed daily/weekly protocols — repetition-first, motivation-independent.",
    },
    {
      name: "COMPOUND",
      days: "Days 61–90",
      description:
        "Remove scaffolding, test the system under real friction (travel, bad weeks, social pressure), correct in real time with cohort/coach accountability, until the system runs without needing to be thought about.",
    },
  ],
} as const;
