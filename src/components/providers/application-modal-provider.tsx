"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

import { ApplicationModal } from "@/components/shared/application-modal";

interface ApplicationModalContextValue {
  openModal: (ctaLocation: string) => void;
}

const ApplicationModalContext = createContext<ApplicationModalContextValue | null>(null);

export function useApplicationModal() {
  const context = useContext(ApplicationModalContext);
  if (!context) {
    throw new Error("useApplicationModal must be used within ApplicationModalProvider");
  }
  return context;
}

/** Shared modal instance so every CTA across the page opens the same dialog (BLUEPRINT.md §CTA Strategy). */
export function ApplicationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ctaLocation, setCtaLocation] = useState("unknown");

  function openModal(location: string) {
    setCtaLocation(location);
    setIsOpen(true);
  }

  return (
    <ApplicationModalContext.Provider value={{ openModal }}>
      {children}
      <ApplicationModal open={isOpen} onOpenChange={setIsOpen} ctaLocation={ctaLocation} />
    </ApplicationModalContext.Provider>
  );
}
