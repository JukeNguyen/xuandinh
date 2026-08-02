import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { ApplicationModalProvider } from "@/components/providers/application-modal-provider";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <ApplicationModalProvider>
      <a
        href="#main-content"
        className="focus:bg-accent focus:font-body focus:text-accent-foreground sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-(--z-toast) focus:rounded-md focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyMobileCta />
    </ApplicationModalProvider>
  );
}
