# Technical Implementation Blueprint
### Premium Discipline / Self-Development Course — Landing Page

**Status:** Awaiting approval — no application code has been written yet.
**References analyzed:** the90daysavage.com, zedanmutluapply.com (cinematic dark aesthetic, masculine authority tone, application-style high-ticket funnel structure, heavy scroll-triggered motion, gold/light-on-black contrast system).

---

## 0. Open Decisions (need your call before section-by-section build starts)

| # | Decision | **Confirmed** | Why it matters |
|---|---|---|---|
| 1 | **Conversion model** | ✅ Gated application modal (shadcn `Dialog` + `react-hook-form` + `zod`), swappable later for Stripe Checkout / Typeform embed | Changes CTA component design (§26), pricing section framing (single price vs. "apply to see if you qualify") |
| 2 | **Typography pairing** | ✅ Condensed poster grotesk (Archivo Black/Anton) + Inter body — masculine, blunt, 90-Day-Savage energy | Sets tone of entire design system |
| 3 | **Hero media** | ✅ Static cinematic image + subtle parallax (no video dependency at launch; can upgrade once footage supplied) | Keeps M2 unblocked by asset availability |
| 4 | Real testimonials/curriculum/pricing content not yet supplied | Build with structured placeholder content in `src/content/*.ts` now, swap later without touching components | Keeps timeline unblocked |

All decisions confirmed — blueprint below reflects the locked-in choices. Ready to start at M0 on approval.

---

## 1. Project Architecture

- **Next.js 15 App Router**, fully static-renderable marketing site (no `output: 'export'` — we stay on standard Vercel build so the future member area can add dynamic/auth routes without a migration).
- **Server Components by default.** `'use client'` is pushed to the smallest possible leaf (a button, a counter, a carousel) — never at section or page level.
- **Route groups split the app in two from day one**: `(marketing)` for everything public today, `(app)` reserved empty for the future authenticated member area. This means adding auth later is additive, not a refactor.
- **No backend, no DB, no auth now** — but `lib/auth`, `middleware.ts`, and `app/api/` are stubbed as empty seams so the future member area has an obvious slot.
- **Content/data is decoupled from components.** Every section reads from typed objects in `src/content/`, never hardcodes copy inline. This is what lets a future CMS swap (or just a copywriter edit) happen without touching JSX.

---

## 2. Folder Structure

```
xuandinh/
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── layout.tsx              # marketing-only providers (e.g. sticky mobile CTA)
│   │   │   ├── page.tsx                # the landing page (composes sections)
│   │   │   ├── privacy-policy/page.tsx
│   │   │   ├── terms/page.tsx
│   │   │   └── refund-policy/page.tsx
│   │   ├── (app)/                      # empty stub for future member dashboard
│   │   │   └── .gitkeep
│   │   ├── api/                        # empty stub (future: lead capture, Stripe webhook)
│   │   │   └── .gitkeep
│   │   ├── layout.tsx                  # root layout: html/body, fonts, metadata, analytics
│   │   ├── globals.css                 # Tailwind v4 @theme tokens live here
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── manifest.ts
│   │   ├── opengraph-image.tsx
│   │   ├── icon.tsx
│   │   ├── not-found.tsx
│   │   └── error.tsx
│   ├── components/
│   │   ├── ui/                         # shadcn primitives (button, dialog, accordion, carousel...)
│   │   ├── sections/                   # one file per landing-page section (see §9)
│   │   ├── layout/                     # header, footer, nav, sticky-cta-bar, container
│   │   ├── shared/                     # composite reusable pieces (stat-block, badge, section-heading, video-player, countdown-timer)
│   │   └── motion/                     # animation primitives (fade-in, reveal, parallax-image, magnetic-button)
│   ├── content/                        # typed copy/data, zero JSX
│   │   ├── curriculum.ts
│   │   ├── testimonials.ts
│   │   ├── faq.ts
│   │   ├── pricing.ts
│   │   └── site-config.ts              # nav links, socials, legal copy
│   ├── lib/
│   │   ├── utils.ts                    # cn()
│   │   ├── metadata.ts                 # SEO helper (buildMetadata())
│   │   ├── fonts.ts                    # next/font instances
│   │   └── auth/                       # empty stub, future member area
│   ├── hooks/
│   │   ├── use-scroll-progress.ts
│   │   ├── use-media-query.ts
│   │   └── use-reduced-motion.ts
│   └── types/
│       └── index.ts
├── public/
│   ├── images/{hero,curriculum,testimonials,founder,og}/
│   ├── videos/
│   └── fonts/                          # only if a non-Google font needs manual hosting
├── docs/
│   └── BLUEPRINT.md                    # this file
├── middleware.ts                       # no-op today, seam for future auth guard on (app)
├── components.json                     # shadcn config
├── next.config.ts
├── tsconfig.json
└── package.json
```

**Rationale for the `content/` split:** every section component takes typed props/data rather than inlining strings. This is the single change that makes "future CMS" or "marketing team edits copy" possible without a component rewrite — and it's free to do now.

---

## 3. Design System

### Colors
Dark-first, single theme (no light/dark toggle — cinematic premium implies a committed aesthetic, not a mode).

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#0A0A0B` | page background |
| `--color-surface` | `#141416` | card/section alt background |
| `--color-surface-raised` | `#1C1C1F` | elevated cards, modals |
| `--color-border` | `#2A2A2E` | hairline dividers |
| `--color-foreground` | `#F5F5F4` | primary text (off-white, not pure white — avoids clinical glare) |
| `--color-muted` | `#A1A1AA` | secondary/body text |
| `--color-muted-2` | `#71717A` | tertiary/caption text |
| `--color-accent` | `#D4AF37` | primary gold accent — CTAs, highlights, numerals |
| `--color-accent-foreground` | `#1A1400` | text on gold-filled surfaces |
| `--color-accent-muted` | `#8A7328` | gold at low emphasis (borders, icons) |

**Contrast note (flagged in Risk Assessment too):** `#D4AF37` gold text directly on `#0A0A0B` measures ~7:1 for large text but body-size gold text should be avoided — reserve saturated gold for headlines ≥24px, buttons, and icons; body copy always uses `--color-foreground` or `--color-muted`.

### Typography
- **Display** (headlines, hero, section titles): condensed bold grotesk — **Archivo Black** or **Anton** (Google Fonts, free, self-hosted via `next/font`).
- **Body**: **Inter** (variable weight, excellent legibility at small sizes, free).
- Scale (fluid via `clamp()`, mobile→desktop):
  - `--text-hero`: `clamp(2.5rem, 6vw + 1rem, 6rem)`
  - `--text-h1`: `clamp(2rem, 4vw + 1rem, 3.5rem)`
  - `--text-h2`: `clamp(1.5rem, 2.5vw + 1rem, 2.5rem)`
  - `--text-h3`: `clamp(1.25rem, 1.5vw + 1rem, 1.75rem)`
  - `--text-body-lg`: `1.125rem`
  - `--text-body`: `1rem`
  - `--text-caption`: `0.875rem`
- Line-height: 1.05–1.1 for display, 1.6 for body. Letter-spacing: slight negative tracking on display (`-0.02em`), slight positive tracking on eyebrow/labels (`0.15em`, uppercase) for that cinematic poster-credit feel.

### Spacing
Tailwind's default 4px scale for component-level spacing, plus **semantic section-rhythm tokens** so every section breathes consistently:

| Token | Value | Use |
|---|---|---|
| `--space-section-sm` | `4rem` (64px) | tight sections (FAQ, footer) |
| `--space-section-md` | `6rem` (96px) | standard sections, mobile default |
| `--space-section-lg` | `8rem` (128px) | hero, major transitions, desktop |
| `--space-section-xl` | `10rem` (160px) | desktop-only hero/final-CTA breathing room |

Container: `max-width: 80rem` (1280px), padding `1.5rem` mobile → `2rem` tablet → `3rem` desktop.

### Border Radius
Masculine/premium skews sharper, not soft/friendly:

| Token | Value | Use |
|---|---|---|
| `--radius-none` | `0` | dividers, image edges |
| `--radius-sm` | `4px` | tags, small badges |
| `--radius-md` | `8px` | cards, inputs |
| `--radius-lg` | `16px` | large media cards, modals |
| `--radius-pill` | `9999px` | primary CTA buttons only — the one "soft" element, makes the CTA visually pop against otherwise sharp geometry |

### Shadows
Dark backgrounds make black-based drop shadows nearly invisible — lean on **borders + gradients + accent glow** instead of elevation shadows:

- `--shadow-card`: `0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 24px -12px rgba(0,0,0,0.6)` (subtle top hairline + soft depth)
- `--shadow-glow-accent`: `0 0 32px -4px rgba(212,175,55,0.35)` — used on CTA hover/focus only, never at rest (keeps it special)

### Reusable Components (design-system layer)
`Button` (primary-gold, outline, ghost, link variants), `Badge`, `SectionHeading` (eyebrow + title + subtitle, centered/left variants), `Container`, `StatCounter`, `Card` primitives (`TestimonialCard`, `CurriculumModuleCard`, `PricingCard`), `Accordion` (FAQ), `VideoPlayer`, `CountdownTimer`, `StickyMobileCTA`, `LogoMarquee`, `GrainOverlay` (subtle film-grain texture via CSS, reinforces cinematic feel cheaply), `Navbar`, `Footer`.

---

## 4. Responsive Strategy (see also §16 Mobile-First)

Breakpoints follow Tailwind defaults: `sm 640` `md 768` `lg 1024` `xl 1280` `2xl 1536`. Three effective layout tiers: **mobile** (<768, single column, stacked), **tablet** (768–1024, mostly still stacked but 2-col grids appear for testimonials/curriculum), **desktop** (≥1024, full multi-column layouts, parallax/hover-dependent interactions activate). No component ships a desktop-only layout with no mobile equivalent — every section is authored mobile-first and enhanced upward.

---

## 5. Animation Strategy

- **Library:** Framer Motion (`framer-motion` package — actively maintained, matches your stated stack).
- **Entrance choreography:** hero content staggers in (headline → subheadline → CTA → trust row) on mount, ~80–120ms stagger, `opacity`+`y` transform only (GPU-cheap, no layout thrash).
- **Scroll reveals:** every section below the fold uses `whileInView` with `viewport={{ once: true, margin: "-10% 0px" }}` — animates once, doesn't re-trigger on scroll-back (avoids distracting repeat animation and saves cycles).
- **Parallax:** hero background image gets a subtle `useScroll` + `useTransform` vertical drift (±5–8%), not a heavy 3D effect — cinematic, not gimmicky.
- **Micro-interactions:** CTA buttons get scale (1 → 1.03) + accent glow on hover/focus; cards get a subtle lift (`y: -4`) on hover.
- **Counters:** stat numbers animate via `useMotionValue` + `useTransform` count-up when scrolled into view.
- **Reduced motion:** a `useReducedMotion` hook (wrapping Framer's built-in `useReducedMotion()`) globally disables parallax/stagger/glow and falls back to instant opacity fades. This is a hard requirement, not optional polish.
- **What we deliberately avoid:** scroll-jacking, pinned/scrubbed sections, and Lenis-style smooth-scroll takeover — native `scroll-behavior: smooth` is used instead (see §25) because it respects OS-level reduced-motion automatically and costs zero JS.

---

## 6. Accessibility Strategy

- Semantic landmarks (`header`, `nav`, `main`, `footer`, one `h1` in hero, logical heading order down the page).
- Skip-to-content link, visible on keyboard focus.
- Custom focus-visible ring in accent gold (`outline` not `box-shadow`, so it survives Windows High Contrast Mode).
- All interactive components (accordion, modal, carousel) keyboard-operable — shadcn/Radix primitives give this for free; we must not override their built-in ARIA behavior.
- Color contrast audited per §3 (gold reserved for large text/UI, never small body copy).
- Alt text required on every `next/image` usage — enforced via a lint rule / component prop requirement, not left optional.
- `prefers-reduced-motion` respected globally (§5).
- Minimum touch target 44×44px on all mobile-tappable elements.
- Video (if hero video is used later) must be muted-autoplay only, with a visible pause control — never audio-autoplay.

---

## 7. SEO Strategy

- Next.js Metadata API: static `generateMetadata`/`metadata` export per route, title template (`%s | {Brand}`), meta description, canonical URL.
- Open Graph + Twitter Card images via `opengraph-image.tsx` (generated) or a static premium branded image.
- **Structured data (JSON-LD):** `Course` schema for the program, `Organization` schema, `FAQPage` schema generated straight from `content/faq.ts` (single source of truth, no duplication), `AggregateRating`/`Review` only if testimonials are real and reviewable (do not fabricate ratings — schema abuse risks manual action from Google).
- `sitemap.ts` and `robots.ts` generated from route list.
- Single `h1`, logical heading hierarchy, descriptive (not "click here") link text.
- Core Web Vitals treated as an SEO input, not just a UX nicety (§9 Performance).

---

## 8. Performance Optimization Strategy

- `next/image` everywhere: explicit `sizes`, `priority` **only** on the true LCP element (hero image/heading art), blur placeholder for everything else.
- `next/font` self-hosts Archivo Black + Inter — zero external font requests, `font-display: swap`, latin subset only, variable weight for Inter to cut file count.
- Server Components everywhere possible; `'use client'` boundary kept as small/deep as possible (a single interactive button, not its whole section).
- Below-the-fold heavy client pieces (testimonial carousel, countdown timer, video player) loaded via `next/dynamic` where they have no SSR value, with lightweight skeleton fallback.
- Third-party scripts (analytics/pixels, added later) loaded via `next/script` with `strategy="afterInteractive"` or `"lazyOnload"` — never blocking render.
- Bundle audited via `@next/bundle-analyzer` before each milestone close.
- Lucide icons imported individually (`lucide-react` is already tree-shakeable per-icon — avoid importing the whole barrel in a way that defeats it).

---

## 9. Component Hierarchy

```
RootLayout
└── (marketing) Layout
    └── Page
        ├── Navbar (sticky, transparent→solid on scroll)
        ├── main
        │   ├── HeroSection
        │   │   ├── ParallaxImage (motion)
        │   │   ├── SectionHeading / hero variant
        │   │   ├── Button (primary CTA) + Button (ghost, "watch")
        │   │   └── TrustStatRow (StatCounter × n)
        │   ├── SocialProofStrip
        │   │   └── LogoMarquee
        │   ├── ProblemSection
        │   │   └── SectionHeading + PainPointList
        │   ├── QualifierSection ("this is for you if…")
        │   ├── MethodSection
        │   │   └── PillarCard × n
        │   ├── CurriculumSection
        │   │   └── CurriculumModuleCard × n (Accordion)
        │   ├── FounderSection
        │   │   └── Portrait (next/image) + Bio + CredibilityStats
        │   ├── TestimonialsSection
        │   │   └── Carousel (embla, via shadcn) → TestimonialCard × n
        │   ├── ResultsSection
        │   │   └── StatBlock grid
        │   ├── PricingSection
        │   │   └── PricingCard (value stack, guarantee, CTA)
        │   ├── FAQSection
        │   │   └── Accordion (shadcn)
        │   └── FinalCTASection
        │       └── CountdownTimer (optional) + Button (primary CTA)
        ├── Footer
        └── StickyMobileCTA (fixed, mobile-only, appears after hero scrolls out)
```

---

## 10. Section Hierarchy (page order)

1. Announcement/urgency bar *(optional, toggleable via content flag)*
2. Navbar
3. Hero
4. Social proof strip (logos / "N men transformed" marquee)
5. Problem / pain agitation
6. Qualifier ("this is for you if / not for you if")
7. Method / framework (3–5 pillars)
8. Curriculum breakdown
9. Founder / credibility
10. Testimonials
11. Results / proof stats
12. Pricing / offer
13. FAQ
14. Final CTA (urgency)
15. Footer
16. Sticky mobile CTA bar (persistent, cross-section)

---

## 11. Reusable UI Components (inventory)

shadcn primitives to install: `button`, `dialog`, `accordion`, `carousel`, `badge`, `separator`, `sheet` (mobile nav drawer), `form` + `input` (application modal), `sonner` (toast feedback).

Custom composites on top: `SectionHeading`, `StatCounter`, `Container`, `CountdownTimer`, `LogoMarquee`, `GrainOverlay`, `ParallaxImage`, `FadeIn`/`Reveal` (motion wrappers), `StickyMobileCTA`, `VideoPlayer`.

---

## 12. State Management Plan

No global state library — there is no backend and no cross-page shared state to justify one. Everything is local `useState`/`useReducer` scoped to the component that needs it:

- Mobile nav open/closed → `Sheet` internal state
- Accordion open item → `Accordion` internal state (Radix-managed)
- Carousel active slide → Embla internal state
- Countdown timer → local `useEffect` interval, or better, a lazy target-timestamp calc via `useMemo` (no interval needed if just displaying "ends in X" against a fixed date — avoid unnecessary re-render ticking where a coarser update suffices)
- Application modal open/step → local `useState` (or `useReducer` if the form grows past 2 steps)

**When this changes:** once a member area exists with real auth/session state, introduce React Context or Zustand for session data, and TanStack Query for server state — not before, and not speculatively.

---

## 13. Future Scalability Considerations

- `(app)` route group + `middleware.ts` stub = auth gate slots in without touching `(marketing)`.
- `lib/auth/` reserved as an interface boundary — swap in NextAuth/Clerk later without leaking provider specifics into components.
- `content/*.ts` decoupling = copy can move to a CMS (Sanity/Contentful) later by changing the data-fetching layer only, not the section components (they already take typed props).
- `app/api/` reserved for lead capture endpoint, Stripe webhook, or CMS revalidation webhook.
- Design tokens centralized in `globals.css` `@theme` so a future member dashboard inherits the same visual language for free.
- CTA/application modal built as a swappable module — start as a local form, swap internals for Stripe Checkout redirect or Typeform embed without changing where it's invoked from.

---

## 14. Recommended npm Packages

**Core**
- `next@15`, `react@19`, `react-dom@19`, `typescript`

**Styling / UI**
- `tailwindcss@4`, `@tailwindcss/postcss`
- shadcn/ui (CLI-installed; pulls in `@radix-ui/*` primitives, `class-variance-authority`, `clsx`, `tailwind-merge`)
- `tailwind-merge`, `clsx` (explicit, used by our own `cn()`)

**Animation / Icons**
- `framer-motion`
- `lucide-react`

**Carousel / Forms (via shadcn deps or direct)**
- `embla-carousel-react` (testimonials carousel)
- `react-hook-form`, `zod`, `@hookform/resolvers` (application form validation)
- `sonner` (toast feedback)
- `vaul` (only if a mobile drawer beyond shadcn `Sheet` is needed)

**Dev tooling**
- `eslint`, `eslint-config-next`, `prettier`, `prettier-plugin-tailwindcss`
- `@next/bundle-analyzer`

Explicitly **not** adding yet: any state library (Zustand/Redux), any data-fetching library (TanStack Query/SWR), any CMS SDK, any auth library — all future-area concerns.

---

## 15. Design Tokens

Tailwind v4 is CSS-first, so tokens live as native CSS custom properties inside `globals.css` under `@theme`, not in a `tailwind.config.ts` JS object:

```css
@theme {
  --color-bg: #0A0A0B;
  --color-surface: #141416;
  --color-foreground: #F5F5F4;
  --color-muted: #A1A1AA;
  --color-accent: #D4AF37;
  --font-display: "Archivo Black", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius-pill: 9999px;
  --space-section-md: 6rem;
  /* ...full set per §3 */
}
```
This makes every token usable directly as a Tailwind utility (`bg-bg`, `text-accent`, `font-display`) with no config-file indirection — and it's the one file a designer/developer touches to reskin the whole site.

---

## 16. Mobile-First Strategy

Every component is authored with unprefixed (mobile) Tailwind classes as the base case, `sm:`/`md:`/`lg:` classes layer on complexity upward — never the reverse. Concretely: hero stacks text over full-bleed image on mobile (video, if adopted, degrades to poster image below `md` to save mobile data); multi-column grids (testimonials, curriculum, pillars) collapse to a single column below `md`; the sticky mobile CTA bar is mobile-only (`md:hidden`) since desktop has the always-visible navbar CTA instead; typography uses `clamp()` so it never needs discrete per-breakpoint font-size overrides.

---

## 17. Code Conventions

- Strict TypeScript (`strict: true`), no `any`.
- Server Components by default; `'use client'` declared only on the smallest leaf that needs interactivity/browser APIs.
- Named exports for all components except Next.js special files (`page.tsx`, `layout.tsx`, etc., which require default export).
- Props typed via `interface ComponentNameProps` colocated with the component.
- `cn()` (clsx + tailwind-merge) for all conditional class composition — no manual string concatenation.
- No inline `style` props except for genuinely dynamic values Tailwind can't express (e.g., a computed scroll-driven transform), and even those go through Framer Motion's `style` prop, not raw DOM style.

---

## 18. Naming Conventions

- Components: `PascalCase` (e.g., `HeroSection`)
- Hooks: `camelCase`, `use-` prefixed (e.g., `useScrollProgress`)
- Utility functions: `camelCase`
- True constants: `SCREAMING_SNAKE_CASE`; config objects: `camelCase`
- Types/interfaces: `PascalCase`, props suffixed `Props` (e.g., `HeroSectionProps`)

---

## 19. File Naming Conventions

- All filenames **kebab-case** (`hero-section.tsx`, `use-scroll-progress.ts`) — matches shadcn/Next.js community convention and avoids case-sensitivity foot-guns on Windows dev machines vs. case-sensitive CI/deploy environments.
- The component identifier inside the file stays PascalCase regardless of the kebab-case filename.
- Route segment folders: kebab-case (`privacy-policy/`, `refund-policy/`).

---

## 20. Route Strategy

- `/` — the landing page (everything lives here for MVP; a single-page app-like scroll experience is the convention for this funnel type).
- `/privacy-policy`, `/terms`, `/refund-policy` — static legal pages, required for payment-processor and ad-platform (Meta/Google) compliance.
- `/apply` — reserved: if the application flow (Decision #1 above) grows beyond a modal, it graduates to its own route without restructuring anything else.
- `(app)/*` — empty today, reserved for the future member dashboard behind auth.

---

## 21. Asset Organization

```
public/
├── images/
│   ├── hero/
│   ├── curriculum/
│   ├── testimonials/
│   ├── founder/
│   └── og/
├── videos/
└── fonts/          # only if a non-Google/self-hosted font is ever needed
```
Naming: descriptive kebab-case (`hero-bg-desktop.jpg`, `hero-bg-mobile.jpg`, `founder-portrait.jpg`). Source images should be delivered pre-cropped for their primary aspect ratio; `next/image` handles format/responsive transforms, not art-direction cropping.

---

## 22. Image Optimization Strategy

- `next/image` for every image, no raw `<img>`.
- Explicit `width`/`height` (or `fill` inside a sized/aspect-ratio container) to prevent CLS.
- `priority` reserved for the single true LCP image (hero); everything else lazy-loads.
- `sizes` attribute tuned per breakpoint so the browser never downloads a desktop-sized asset on mobile.
- Blur placeholder (base64 or `plaiceholder`) on large hero/founder imagery.
- Format/compression (AVIF/WebP) handled automatically by Vercel's image pipeline.
- **Art-directed mobile vs. desktop hero crops**: two `next/image` instances toggled via `hidden md:block` / `md:hidden` pairs — flagged tradeoff: both may be requested by the browser's preloader on some browsers, so only the visible one gets `priority`, and we accept this minor overhead in exchange for correct cropping per device (cheaper than a JS `matchMedia` gate that risks a flash/hydration mismatch).

---

## 23. Font Loading Strategy

- `next/font/google` for both Archivo Black (display) and Inter (body) — self-hosted automatically at build time, zero external font-request round-trip.
- `display: "swap"` to avoid invisible-text flash while respecting perf.
- Latin subset only (no need for extended character sets).
- Inter loaded as a variable font (single file, multiple weights) to minimize payload; Archivo Black only needs its single 900 weight.
- Exposed as CSS variables (`--font-display`, `--font-body`) wired into the Tailwind `@theme` so utility classes (`font-display`) work everywhere.

---

## 24. Loading Strategy

- The landing page is fully static — no meaningful loading state needed for the initial route.
- `Suspense` boundaries wrap client-heavy islands that are dynamically imported (testimonial carousel, countdown timer) with a lightweight skeleton (matching final layout dimensions, to avoid CLS on hydration).
- `loading.tsx` defined at the root for future dynamic routes (member area), not meaningfully exercised by the static marketing page today.
- `next/link` prefetch (default behavior) covers the legal pages and any future `/apply` route.

---

## 25. Scroll Behavior

- Native CSS `scroll-behavior: smooth` for in-page anchor navigation — deliberately **not** a JS smooth-scroll library (e.g. Lenis): native scroll automatically respects OS-level `prefers-reduced-motion` and costs zero JS/runtime overhead, which matters more here than the marginal "smoothness" difference.
- Anchor targets get `scroll-margin-top` equal to the sticky navbar height so in-page links don't land underneath it.
- Scroll-triggered reveals via Framer Motion `whileInView` (see §5), triggered once, not on every scroll direction change.
- Sticky navbar transitions from transparent (over hero) to solid background once scrolled past the hero's height (tracked via a lightweight `IntersectionObserver`-backed hook, not a scroll-position calculation on every frame).

---

## 26. CTA Strategy

- **One consistent primary action** repeated throughout ("Apply Now" / equivalent) — no competing secondary conversion paths that fragment intent. A single ghost-style secondary CTA ("Watch the video") is permitted only in the hero.
- CTA appears: hero, after problem/agitation, after curriculum, after testimonials, pricing section, final CTA section, and the mobile sticky bar — always the same label/action, never a different offer at each touchpoint.
- Visual treatment: gold-filled pill button, scale + accent-glow on hover/focus (see §3, §5).
- Every CTA instance carries a `data-cta-location` attribute (e.g. `"hero"`, `"final-cta"`, `"sticky-bar"`) from day one — free to add now, and it's exactly what a future analytics/A-B-testing layer needs to attribute conversions per placement.
- Default implementation (pending Decision #1): CTA opens a shadcn `Dialog` housing a short qualifying form (`react-hook-form` + `zod`), architected so swapping its internals for a Stripe Checkout redirect or embedded Typeform later doesn't change any call site.

---

## 27. Lighthouse Optimization Plan

Target: 95+ across Performance/Accessibility/Best Practices/SEO.

- **LCP < 2.5s**: `priority` + preload on hero image, self-hosted fonts with `swap`, no render-blocking hero JS.
- **CLS ~0**: explicit media dimensions everywhere, skeleton placeholders sized to match final content, fonts loaded via `next/font` (no FOIT/layout shift on swap).
- **TBT < 200ms**: Server Components minimize hydration JS; client boundaries kept small; third-party scripts deferred via `next/script` `afterInteractive`/`lazyOnload`.
- Tailwind's JIT purges unused CSS automatically — no manual purge config needed in v4.
- Bundle checked with `@next/bundle-analyzer` at the close of each milestone (§29), not just at the end.
- Framer Motion animations restricted to `transform`/`opacity` to stay off the main-thread layout/paint path.

---

## 28. Risk Assessment

| Risk | Impact | Mitigation |
|---|---|---|
| Cinematic hero video hurts mobile perf/data cost | High (LCP, bounce on mobile) | Default to static image + parallax (Decision #3); if video is added later, mandatory poster fallback, muted-autoplay only, served from a CDN not `public/` |
| Gold-on-black fails WCAG AA at small sizes | Medium (accessibility, legal exposure for some markets) | Gold reserved for large text (≥24px)/buttons/icons only; body copy always uses foreground/muted tokens (§3) |
| Heavy scroll-motion janks on low-end/Android devices | Medium (UX, perceived quality — ironic for a "premium" site) | `transform`/`opacity`-only animations, `prefers-reduced-motion` support mandatory, test on a mid-tier Android device before milestone sign-off |
| Real content (curriculum, testimonials, pricing, founder bio/photo) not yet provided | High (blocks true "done") | Build against typed placeholder content now (§0); swapping in real copy/media is a data-file edit, not a rebuild |
| Conversion-model ambiguity (checkout vs. application) unresolved | Medium (affects CTA/pricing section shape) | Default to swappable application-modal pattern (§26); flagged for your explicit confirmation |
| Course/results marketing claims need compliance disclaimers | Medium (ad-platform account risk — Meta/Google routinely suspend accounts for unsubstantiated income/results claims) | Footer + pricing section carry a results-disclaimer block from the start, not bolted on later |
| Premium/paid fonts (if you prefer a licensed serif over free Google Fonts) | Low–Medium (licensing cost/legal) | Default picks (Archivo Black, Inter) are free/Google-hosted; flag if you want a paid alternative and we budget for it |

---

## 29. Development Milestones

- **M0** — Scaffold: Next.js project, TypeScript config, Tailwind v4 setup, shadcn init, design tokens in `globals.css`, font wiring.
- **M1** — Layout shell: root/marketing layout, Navbar, Footer, Container, sticky-mobile-CTA shell.
- **M2** — Hero + social proof strip.
- **M3** — Problem, qualifier, method sections.
- **M4** — Curriculum + founder/credibility sections.
- **M5** — Testimonials + results/proof sections.
- **M6** — Pricing/offer + FAQ (incl. application modal, per Decision #1).
- **M7** — Final CTA + legal pages (privacy/terms/refund).
- **M8** — Animation pass: Framer Motion polish across every section, reduced-motion QA.
- **M9** — Accessibility audit (keyboard pass, contrast check, screen-reader spot check).
- **M10** — SEO pass: metadata, OG image, JSON-LD, sitemap/robots.
- **M11** — Performance/Lighthouse pass, cross-browser/device QA, launch prep.

---

## 30. Implementation Roadmap

Each milestone (§29) follows the same per-section loop, applied in page order (§10):

1. Build the section as a Server Component, structurally complete, unstyled-to-styled in one pass using design tokens (§3, §15).
2. Wire content from the matching `content/*.ts` file — no inline copy.
3. Responsive pass, mobile-first (§16), verified at `sm`/`md`/`lg` breakpoints.
4. Framer Motion reveal added (§5), reduced-motion fallback verified.
5. Accessibility spot-check (keyboard nav, contrast, alt text) before moving to the next section.
6. Section-level Lighthouse/bundle spot-check at milestone close, not deferred to the end.

We do not move to the next milestone with a known accessibility or CLS regression outstanding — fix at the section level while context is fresh, rather than batching into a single audit pass at the end.

---

**Next step:** confirm or override the four Open Decisions in §0, then we start at M0.
