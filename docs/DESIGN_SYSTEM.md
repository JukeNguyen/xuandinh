# Design System
### Single Source of Truth — Visual & Component Standards

**Relationship to prior documents:** consolidates and expands the design tokens and component standards already established in [`BLUEPRINT.md`](./BLUEPRINT.md) (V1 §3, §15) and [`BLUEPRINT_V2_ADDENDUM.md`](./BLUEPRINT_V2_ADDENDUM.md) (V2 §3, §4, §10, §11). Nothing here contradicts those documents — this is the definitive, expanded reference a designer or engineer should reach for first; where a token value is repeated, this document is the copy to trust going forward.

---

## Design Principles

1. **Restraint is premium.** If a decision is between adding an element and removing one, remove it. This system fails the moment it starts looking busy.
2. **One accent, used rarely, outweighs five accents used often.** Gold means something specifically because it appears sparingly (see Color System).
3. **Motion should feel like it has mass.** Nothing bounces. Nothing arrives weightless. Every transition should feel like it's moving something with real inertia (see Motion Rules).
4. **Hierarchy comes from space, not volume.** The most important element on a screen is usually the one with the most room around it — not the one in the loudest color.
5. **Every screen must work with sound off and animation off.** Motion and audio are enhancements, never load-bearing for comprehension (see Accessibility Rules).
6. **Consistency beats novelty.** The fortieth section of the page should feel exactly as considered as the first. A "creative" one-off treatment on a single section is usually a sign the system has a gap, not a reason to break it.

---

## Grid

- **Desktop (`lg`+):** 12-column grid, `2rem` gutter, `3rem` outer margin.
- **Tablet (`md`):** 8-column grid, `1.5rem` gutter, `2rem` outer margin (content typically still spans full-width per column-group, true 8-col layouts are rare on this page).
- **Mobile (base):** 4-column grid, `1rem` gutter, `1.5rem` outer margin.
- **Common span conventions (desktop):** hero copy block spans columns 1–6 (left-aligned layouts) or is centered across all 12 (centered hero layouts); two-column "split" sections (Founder, Method pillars) span 6/6; three-across card grids (pillars, curriculum) span 4/4/4; testimonial cards in a carousel are sized independent of the grid (fixed card width, horizontal scroll/snap).

---

## Spacing

Two coexisting scales, per V1 §3 / V2 §10 — do not conflate them:

- **Component-level spacing:** Tailwind's default 4px-based scale (`0.25rem` increments) for padding/gaps inside components (button padding, card padding, form field spacing).
- **Section-rhythm spacing (semantic tokens):**

| Token | Value | Use |
|---|---|---|
| `--space-section-sm` | 4rem (64px) | Tight sections: FAQ, footer |
| `--space-section-md` | 6rem (96px) | Standard sections, mobile default for all major sections |
| `--space-section-lg` | 8rem (128px) | Hero, major transitions, desktop |
| `--space-section-xl` | 10rem (160px) | Desktop-only hero/final-CTA breathing room |

**Component internal padding scale** (new — not previously specified): card padding `1.5rem` mobile / `2rem` desktop; button padding `0.75rem × 1.5rem` (medium), `1rem × 2rem` (large, used for primary CTAs); modal padding `1.5rem` mobile / `2.5rem` desktop.

---

## Container

| Name | Max-width | Use |
|---|---|---|
| Standard | 80rem (1280px) | Default content width for most sections |
| Narrow | 48rem (768px) | Copy-heavy sections (FAQ, legal pages) — improves reading line-length |
| Wide | 96rem (1536px) | Media-heavy sections (testimonial carousel, curriculum gallery, full-bleed imagery) |

Padding: `1.5rem` mobile → `2rem` tablet → `3rem` desktop, applied to all three container widths equally.

---

## Typography

**Fonts (updated — display font changed from Archivo Black to Oswald per user request):** Display = Oswald (700 weight); Body = Inter (variable weight).

| Level | Size (fluid `clamp()`) | Weight | Line-height | Tracking | Use |
|---|---|---|---|---|---|
| Eyebrow | 0.875rem fixed | Inter 600 | 1.2 | +0.15em, uppercase | Small label above section headings |
| Hero | `clamp(2.5rem, 6vw + 1rem, 6rem)` | Oswald | 1.05 | −0.02em | Hero headline only — the page's single `<h1>` |
| H1 (non-hero, if ever needed) | `clamp(2rem, 4vw + 1rem, 3.5rem)` | Oswald | 1.08 | −0.02em | Reserved; hero owns the real h1 on this page |
| H2 | `clamp(1.5rem, 2.5vw + 1rem, 2.5rem)` | Oswald | 1.1 | −0.01em | Section titles |
| H3 | `clamp(1.25rem, 1.5vw + 1rem, 1.75rem)` | Inter 700 | 1.2 | 0 | Curriculum module titles, FAQ questions |
| Body Large | 1.125rem | Inter 400 | 1.6 | 0 | Section subheads, lead paragraphs |
| Body | 1rem | Inter 400 | 1.6 | 0 | Default copy |
| Caption | 0.875rem | Inter 400 | 1.5 | 0 | Metadata, image captions, fine print |
| Button label | 1rem | Inter 600 | 1 | +0.01em | All button/CTA text |

**Rules**
- Body copy line length capped at 60–75 characters (`ch` unit) regardless of container width — never let body text stretch full-width on wide containers.
- Never justify text.
- Sentence case for body copy and button labels; eyebrow labels are the sole uppercase+tracked exception.
- One `<h1>` per page, on the hero, always — no exceptions, cross-ref SEO strategy.

---

## Color System

Tokens per V1 §3 / V2 §10, restated here as the canonical reference:

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#0A0A0B` | Page background |
| `--color-surface` | `#141416` | Card/alt-section background |
| `--color-surface-raised` | `#1C1C1F` | Elevated cards, modals |
| `--color-border` | `#2A2A2E` | Hairline dividers (default tier) |
| `--color-foreground` | `#F5F5F4` | Primary text |
| `--color-muted` | `#A1A1AA` | Secondary/body text |
| `--color-muted-2` | `#71717A` | Tertiary/caption text |
| `--color-accent` | `#D4AF37` | Gold — CTAs, highlights, large numerals only |
| `--color-accent-foreground` | `#1A1400` | Text on gold-filled surfaces |
| `--color-accent-muted` | `#8A7328` | Low-emphasis gold (borders, icons) |

**Usage rules**
- Gold may not cover more than roughly 10% of any single viewport — it is a marking, not a wash.
- Gold text is never used below 24px font size (contrast + "flash luxury" risk, per V2 §2 luxury-level philosophy).
- Semantic state colors (error/success) are used only inside forms — a muted red (`#B54A4A`-range, not a bright alert red) for errors, kept low-saturation to stay inside the brand's desaturated palette; no green "success" checkmarks styled brightly — use the gold accent for confirmation states instead, since a bright green would be the single most jarring color in the entire system.

---

## Button System

**Purpose:** the single conversion instrument of the page (Content Strategy §CTA Library) — every clickable action funnels through this component, no bespoke one-off buttons anywhere.

**Variants**
- `primary` — gold-filled, `radius-pill`, `accent-foreground` text. The one CTA action, per V2 §26.
- `outline` — transparent fill, `1px` border at `border-emphasis` opacity, foreground text. Used only for the hero's secondary "Watch" action.
- `ghost` — text-only, no border, muted-to-foreground color on hover. Used in nav/footer utility links.

**Sizes:** `md` (default, most placements), `lg` (hero and final CTA only — the two highest-stakes conversion points get the largest button on the page).

**States:** default → hover (scale 1.02–1.03 + `shadow-glow-accent`, `duration-fast`/`ease-standard`) → focus (visible gold outline, 2px offset, always present on keyboard nav) → active (scale settles to 1.0) → disabled (`opacity-disabled`, no hover effects) → loading (label replaced by a simple non-spinning progress indicator — no bouncy spinner, consistent with "nothing bounces").

**Do**
- Keep exactly one `primary` button visible per viewport at any scroll position.
- Always pair `primary` buttons with a `data-cta-location` value (Content Strategy analytics cross-ref, V2 §9/§11).
- Use `lg` size only on Hero and Final CTA.

**Don't**
- Never use a second competing `primary`-styled button in the same viewport.
- Never remove the focus ring, even if it doesn't match a specific mockup — restyle it, don't delete it.
- Never use elastic/bounce easing on hover or click states.

---

## Cards

**Purpose:** shared visual chrome (hairline border, `radius-md`/`radius-lg`, `shadow-card`) with content slots specialized per section — Testimonial, Curriculum Module, Pricing.

**Variants**
- `TestimonialCard` — portrait/video thumbnail + `<blockquote>`/`<cite>` semantic markup + name/specific-result caption.
- `CurriculumModuleCard` — phase/week label (eyebrow) + module title (H3) + one-line mechanism description, typically inside an `Accordion` for expand/collapse detail.
- `PricingCard` — value-stack list + price + guarantee line + `primary` button, `lg` size.

**Do**
- Apply a subtle lift (`y: -4px`) + border-emphasis on hover for interactive cards (testimonial carousel items, expandable curriculum cards).
- Keep card padding consistent within a variant across the whole page — no per-instance padding tweaks.

**Don't**
- Never introduce a drop-shadow-heavy "floating" card style — depth comes from the hairline-border + `shadow-card` combination only (see Shadows).
- Never mix card variants inside the same grid (e.g., a curriculum card and a generic content card side-by-side) — visual inconsistency reads as an unfinished system.

---

## Icons

**Purpose:** functional wayfinding and emphasis only — never decorative filler.

**System:** Lucide, single consistent stroke width (1.5px at 24px size, scaling proportionally), sizes `16 / 20 / 24 / 32`.

**Do**
- Use monochrome icons only — `foreground` for default, `accent` or `accent-muted` for emphasis states.
- Keep icon-to-text spacing consistent (`0.5rem` gap standard).

**Don't**
- Never use multi-color icon sets or filled/duotone icon styles — they read as friendly/SaaS, contradicting the masculine-premium tone (V2 §4).
- Never use an icon as the sole indicator of an interactive control without an accompanying `aria-label` (accessibility non-negotiable).

---

## Inputs

**Purpose:** the application form (§Forms below) is the only place inputs appear on this page — treat every instance as high-stakes, since it's the literal conversion mechanism.

**Style:** `surface-raised` background, `1px` hairline border (`border-default` opacity), `radius-md`. Focus state: border transitions to solid `accent` at full opacity plus the standard focus ring.

**Do**
- Always show a persistent visible label above the field — never placeholder-as-label (placeholder text disappears on input, destroying context, and fails accessibility guidance).
- Show validation errors on blur, not on every keystroke (keystroke-level validation reads as impatient/hostile).

**Don't**
- Never use a bright red for error states — use the muted error red defined in Color System, consistent with the desaturated palette.
- Never disable the browser's native autofill/autocomplete — friction reduction matters more here than a cosmetic preference.

---

## Forms

**Purpose:** the Application Modal (Content Strategy CTA model, V2 §11) is the only form on the page — its design carries disproportionate conversion weight.

**Layout rules**
- Single column always, regardless of viewport — a multi-column form on a conversion-critical modal adds cognitive load for no layout benefit at this field count.
- Minimum viable fields only (name, email, one qualifying question) — every additional field is a measurable drop-off point; this is a friction-reduction decision, not a data-collection one, consistent with the "Operating System removes friction" brand philosophy (Content Strategy).
- Submit button is full-width on mobile, intrinsic width on desktop, always `primary` variant, always the only button of that weight in the modal.

**Multi-step guidance:** if the qualifying question ever expands beyond one screen, use a simple 2-step pattern with a visible progress indicator (e.g., "Step 1 of 2") — never a silent multi-step flow with no progress signal.

---

## Badges

**Purpose:** small, low-key status/metadata markers — cohort status ("Cohort 4 — Applications Open"), testimonial tags ("Founding Cohort"), not decorative flair.

**Style:** small pill or rectangle (`radius-sm` or `radius-pill`), `surface-raised` background, `caption`-size text, `muted` or `accent-muted` text color.

**Do**
- Use badges to carry real, specific information (a cohort name, a real status) — every badge should be sourced from real data, not filler.

**Don't**
- Never use a bright, saturated badge color to draw attention — a badge that competes visually with the primary CTA has failed its job (hierarchy through space, not volume).

---

## Tables

**Purpose:** used sparingly — curriculum module breakdown, or a pricing-tier comparison if one ever exists.

**Style:** hairline row dividers (`border-subtle`), no zebra striping (alternating row backgrounds read as a generic SaaS data table, directly contradicting the cinematic-premium tone). Column headers use `caption`-size, uppercase, tracked labels matching the eyebrow style.

**Responsive rule:** tables collapse to stacked card-like rows below `md` — never a horizontally-scrolling table on mobile, which is a poor experience for this content type and audience.

---

## Pricing Cards

**Purpose:** the highest-stakes single component on the page — where rational justification (Content Strategy §Story Framework, Pricing rules) happens.

**Structure (fixed order, do not vary):** eyebrow (cohort/tier name) → price → value-stack list (every deliverable, specific, not vague) → guarantee line → `primary` button (`lg` size).

**Do**
- If multiple tiers ever exist, differentiate the recommended tier with a gold-emphasis border only — never a different background color or a separate visual style, which would look like a different product rather than a recommended option.

**Don't**
- Never show a price without the value stack immediately visible above it in the same card — an unanchored price reads as arbitrary (Content Strategy, Pricing story rules).
- Never use a "Most Popular" badge styled in a bright contrasting color — use the same restrained badge system defined above.

---

## Section Templates

Five reusable layout archetypes — every section on the page is one of these, not a bespoke one-off layout.

| Template | Structure | Used by |
|---|---|---|
| **Full-bleed + overlay** | Full-width background image/video with a vignette gradient, centered or left-aligned text overlay | Hero, Final CTA |
| **Split 50/50** | Image one side, copy the other, alternating sides between consecutive uses to avoid visual monotony | Founder, Method (per pillar if expanded individually) |
| **Centered copy-only** | Narrow container, centered text, generous vertical space | Problem/Agitation, Qualifier |
| **Card grid** | 3-across desktop / 1-across mobile grid of a single card variant | Method (pillars), Curriculum (if not accordion), Results/Stats |
| **Accordion list** | Narrow container, vertically stacked expandable items | Curriculum (if accordion-based), FAQ |

**Rule:** if a new section doesn't fit one of these five templates, that's a signal to reconsider the section's content structure before inventing a sixth template — proliferating one-off templates is exactly what breaks system consistency at scale (Design Principle #6).

---

## Motion Rules

Per V2 §5/§10 — restated with a concrete choreography reference:

| Interaction | Trigger | Duration | Easing |
|---|---|---|---|
| Hero entrance stagger | Page mount | `duration-slower` overall, 80–120ms per-element stagger | `ease-out-weighted` |
| Section scroll-reveal | `whileInView`, once, `margin: -10%` | `duration-slow` | `ease-out-weighted` |
| Hero parallax drift | Scroll position | Continuous (scroll-linked, not time-based) | Linear (scroll-linked motion isn't eased in the traditional sense) |
| Button/card hover | Pointer hover / keyboard focus | `duration-fast` | `ease-standard` |
| Modal open/close | User action | `duration-base` | `ease-out-weighted` (open), `ease-standard` (close) |
| Accordion expand/collapse | User action | `duration-base` | `ease-standard` |
| Counter count-up | Scroll into view, once | `duration-slow` | `ease-standard` |

**Reduced motion:** every row above degrades to an instant opacity fade with no transform, triggered automatically by `prefers-reduced-motion` — this is enforced globally, not opted into per component.

---

## Responsive Rules

- Every layout is authored mobile-first (V1 §16) — breakpoints add complexity, never redefine it.
- Minimum touch target 44×44px on every interactive element, no exceptions.
- Any hover-only affordance (e.g., a card lift) must have a visible equivalent on touch devices — never gate essential information behind a hover state on a platform where hover doesn't exist.
- Sticky elements: navbar sticky at all breakpoints; `StickyMobileCTA` is `md:hidden` only (desktop nav already carries a persistent CTA).

---

## Accessibility Rules

- **Contrast:** foreground (`#F5F5F4`) on bg (`#0A0A0B`) exceeds 15:1 — safe for any text size. Muted (`#A1A1AA`) on bg measures ~7:1 — safe for body text. Gold (`#D4AF37`) on bg measures ~7:1 for large text only — **never used below 24px**, per Color System rules.
- **Focus:** every interactive element has a visible 2px gold outline, 2px offset, on keyboard focus — never suppressed, only restyled.
- **Motion:** `prefers-reduced-motion` disables all transform-based animation globally, replaced with instant opacity fades (Motion Rules above).
- **Semantics:** one `<h1>` (hero only), logical heading order down the page, testimonials marked up as `<blockquote>`/`<cite>`, all images carry real (non-empty, non-filename) alt text.
- **Forms:** every field has a persistent visible label; errors are announced via `aria-live` regions, not color alone.

---

## Dark Theme Rules

This is a committed dark-only design (no light mode) — "dark theme rules" here means the specific discipline of designing *for* dark, not a light/dark toggle spec:

- Elevation is communicated by lightness step (`bg` → `surface` → `surface-raised`), never by drop shadow alone — shadows barely register on a near-black background (V1 §3).
- Never use pure black (`#000000`) or pure white (`#FFFFFF`) anywhere in the system — both read as harsh/clinical against the intentionally warmer near-black/off-white tokens.
- Text hierarchy is communicated through the foreground/muted/muted-2 three-tier scale, not through arbitrary opacity values chosen per instance.
- Photography must be color-graded to sit inside this palette (V2 §3 grading spec) — a bright, high-key photo dropped into a dark section without grading will look like an error, not a feature.

---

## Hover Rules

Consistent per element type — no bespoke hover treatment invented per component:

| Element | Hover treatment |
|---|---|
| `primary` button | Scale 1.02–1.03 + `shadow-glow-accent` |
| `outline`/`ghost` button | Background fades to `surface-raised`, no scale |
| Card | `y: -4px` lift + border transitions to `border-emphasis` |
| Nav link | Underline fades in (no color change — underline is sufficient signal) |
| Image (within a card) | Subtle brightness lift, never a hard filter/color shift |

---

## Focus Rules

- Focus ring: `2px solid var(--color-accent)`, `2px` offset, applied via `outline` (not `box-shadow`) so it remains visible under Windows High Contrast Mode.
- Focus order follows visual/DOM order — no `tabindex` values above 0 anywhere in the system.
- Modal traps focus while open and returns focus to the triggering element on close (Radix Dialog default — must not be overridden).

---

## Animation Timing

Quick reference (full detail in Motion Rules above and V2 §10):

`--duration-fast: 150ms` · `--duration-base: 300ms` · `--duration-slow: 600ms` · `--duration-slower: 900ms`
`--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)` · `--ease-out-weighted: cubic-bezier(0.16, 1, 0.3, 1)` · `--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)`

No elastic/bounce/spring easing exists anywhere in this system.

---

## Elevation

Z-index scale (V2 §10): `base: 0` → `sticky-nav: 40` → `sticky-cta: 45` → `dropdown: 50` → `modal-backdrop: 90` → `modal: 100` → `toast: 110`. No ad-hoc z-index values outside this scale.

---

## Radius

`--radius-none: 0` (dividers, image edges) · `--radius-sm: 4px` (tags, small badges) · `--radius-md: 8px` (cards, inputs) · `--radius-lg: 16px` (large media cards, modals) · `--radius-pill: 9999px` (primary CTA buttons only — the single deliberately "soft" element in an otherwise sharp system).

---

## Shadows

`--shadow-card` (hairline top inset + soft depth) for card separation; `--shadow-glow-accent` (gold glow) reserved exclusively for CTA hover/focus states — never present at rest, which is what keeps it feeling special rather than decorative.

---

## Glass Effects

`backdrop-blur` sanctioned in exactly two places: the sticky navbar once scrolled past the hero, and the modal backdrop. Not a general design motif — see V2 §4 for the reasoning (glassmorphism reads as generic SaaS and undermines the "iron and concrete" positioning if overused).

---

## Noise

A single shared fine-grain overlay (8–16px equivalent texture, 3–5% opacity, implemented as one repeating SVG-turbulence layer applied globally) — not per-image grain. One shared layer means one place to test performance impact and one place to disable it under `prefers-reduced-motion` or detected low-end-GPU conditions.

---

## Gradients

Sparing, radial-vignette only: `--gradient-vignette` (transparent center to `rgba(0,0,0,0.6)` edge, for depth behind text over imagery) and `--gradient-fade-bottom` (image-to-section-background transition). No mesh gradients, no multi-color gradients, no glassmorphism-associated purple/blue gradient washes anywhere in the system.

---

## Dividers

1px hairline (`border-subtle` opacity) for in-flow section separation; a full-bleed textured image break reserved for major narrative transitions only (e.g., between Problem/Agitation and Founder). Never a decorative wavy-SVG divider — reads as soft/consumer-app, inconsistent with every other rule in this document.

---

## Background Treatments

Per-section background follows one of three patterns, never improvised per section:

1. **Solid** (`bg` or `surface`) — default for copy-focused sections.
2. **Vignette** (`gradient-vignette` over a solid base) — used behind any section with a floating card grid, to add depth without a full image.
3. **Textured image** — full-bleed photography (concrete, fog, per V2 §3) reserved for Hero, Founder, and Final CTA — the three sections carrying the most emotional/narrative weight (Content Strategy §Emotional Journey).
