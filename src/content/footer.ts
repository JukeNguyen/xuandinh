// Nav labels reuse each section's own eyebrow (already-established section identity)
// rather than inventing new footer-specific labels. Only links to sections that
// actually exist on the page — no legal-page links yet, since those routes don't exist.
export const footerContent = {
  nav: [
    { label: "The Enemy", href: "#problem" },
    { label: "The Shift", href: "#qualifier" },
    { label: "The System", href: "#method" },
    { label: "The Mechanism", href: "#curriculum" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;
