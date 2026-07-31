// Sourced verbatim from CONTENT_STRATEGY.md §Enemy.
export const problemContent = {
  eyebrow: "The Enemy",
  title: "The Drift",
  subtitle:
    "The slow, comfortable, dopamine-lubricated slide toward a smaller life — made of a thousand small unkept promises to yourself, none of which feel like a big deal on their own.",
  mechanisms: [
    {
      icon: "comfort",
      label: "Comfort",
      description: "Removing the friction that growth actually requires.",
    },
    {
      icon: "distraction",
      label: "Distraction",
      description:
        'Algorithmic dopamine loops that make "later" feel like a decision instead of what it is.',
    },
    {
      icon: "isolation",
      label: "Isolation",
      description: "No one close enough to notice the standard slipping.",
    },
    {
      icon: "standards",
      label: "Lack of Standards",
      description:
        "Nothing written down, nothing visible, so nothing to fall short of on paper, only privately.",
    },
    {
      icon: "mission",
      label: "No Mission",
      description: "With no fixed point to move toward, any direction feels equally justified.",
    },
  ],
} as const;

export type ProblemMechanismIcon = (typeof problemContent.mechanisms)[number]["icon"];
