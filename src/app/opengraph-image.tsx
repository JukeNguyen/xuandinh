import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#0a0a0b",
      }}
    >
      <div style={{ width: 56, height: 6, background: "#d4af37", marginBottom: 40 }} />
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          color: "#f5f5f4",
          lineHeight: 1.1,
          maxWidth: 900,
        }}
      >
        {siteConfig.name}
      </div>
      <div
        style={{
          fontSize: 28,
          color: "#a1a1aa",
          marginTop: 24,
          maxWidth: 800,
        }}
      >
        {siteConfig.tagline}
      </div>
    </div>,
    size,
  );
}
