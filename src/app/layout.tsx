import type { Metadata, Viewport } from "next";

import { GrainOverlay } from "@/components/shared/grain-overlay";
import { Providers } from "@/components/providers/providers";
import { siteConfig } from "@/content/site-config";
import { inter, oswald } from "@/lib/fonts";
import { buildMetadata } from "@/lib/metadata";

import "./globals.css";

export const metadata: Metadata = {
  ...buildMetadata(),
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${oswald.variable} ${inter.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col">
        <Providers>
          <GrainOverlay />
          {children}
        </Providers>
      </body>
    </html>
  );
}
