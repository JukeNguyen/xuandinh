/**
 * Global fine-grain texture layer (DESIGN_SYSTEM.md §Noise). Rendered once in
 * the root layout — never per-section — so there is exactly one place to
 * tune its cost or disable it.
 */
export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.04] mix-blend-overlay"
    >
      <svg className="h-full w-full" preserveAspectRatio="none">
        <filter id="grain-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" />
      </svg>
    </div>
  );
}
