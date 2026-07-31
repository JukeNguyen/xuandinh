import type { Metadata } from "next";

import { siteConfig } from "@/content/site-config";

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: BuildMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}
