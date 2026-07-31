# V2 Addendum — Creative Bible
### Premium Discipline / Self-Development Course — Landing Page

**Relationship to V1:** this document does not replace [`BLUEPRINT.md`](./BLUEPRINT.md). V1 remains the technical/architectural reference. This addendum is the creative, psychological, and conversion layer on top of it — where the two conflict, this document wins on brand/creative decisions, V1 wins on technical/structural decisions unless explicitly overridden below.

---

## 1. Architecture Review

Self-audit of every major V1 section. "Challenge your own decisions" taken literally — two real reversals are flagged below (§1.9, §1.10), not just praise.

| V1 Section | Verdict | Why |
|---|---|---|
| **§1 Project architecture** | **Improve** | Sound structurally, but it treated analytics and content-governance as afterthoughts. V2 promotes an analytics abstraction (`lib/analytics.ts`) to a first-class module from M0, not something bolted on post-launch (see §9). |
| **§2 Folder structure** | **Improve** | Add `src/analytics/`, and annotate `content/*.ts` files with which copywriting framework each block serves (see §5) so future editors don't just see prose, they see *why* it's phrased that way. |
| **§3 Design system** | **Keep foundation, Improve depth** | Colors/type/spacing tokens are structurally right, but V1 had no actual **visual language** — no moodboard, no photography direction, no "what we never do" list. A dark-+ gold palette without an art-direction doc behind it is a template, not a brand. §2–§4 below fix this. |
| **§4 Responsive strategy** | **Keep** | No changes — mobile-first breakpoint strategy is sound and unaffected by creative direction. |
| **§5 Animation strategy** | **Improve** | Directionally right (transform/opacity only, reduced-motion mandatory) but had no concrete duration/easing values and no per-section choreography. Fixed in §10 (tokens) and §6 (emotional journey mapping). Generic "bounce-free" guidance becomes a specific `ease-out-weighted` curve tied to brand personality (§2). |
| **§6 Accessibility** | **Keep, Improve** | Solid technical baseline. Missing: a screen-reader narrative check — direct-response copy often uses fragments/emphasis for visual effect that can read badly aloud. Add a pass where every section's copy is read through a screen reader and adjusted for spoken coherence, not just markup validity. |
| **§7 SEO** | **Improve significantly** | V1's SEO plan was generically correct but didn't reckon with the actual acquisition model. See §12 — for this niche, SEO is a brand-protection and structured-data play, not a primary traffic channel, and the plan should say that explicitly rather than implying organic search is a growth lever. |
| **§8 Performance** | **Keep, expand into checklist** | Directionally complete; converted into an actionable pre-launch checklist in §13. |
| **§9 Component hierarchy** | **Improve** | Missing analytics instrumentation points and emotional-state annotations per component. Every CTA-adjacent component needs a documented `data-cta-location` and event name from day one (cross-ref §9 Analytics, §11 Component Standards). |
| **§10 Section hierarchy** | **Reconsider — genuine reversal** | V1 ordered: Problem → Qualifier → Method → Curriculum → Founder → Testimonials. **This is wrong per StoryBrand logic.** The Founder is the "Guide" archetype — a Guide must be established as credible *before* the visitor is asked to see themselves in a qualifier or trust a method. **Revised order: Hero → Social Proof → Problem/Agitation → Founder/Authority (moved earlier) → Qualifier → Method → Curriculum → Testimonials → Results → Pricing → FAQ → Final CTA.** Full psychological reasoning in §6. |
| **§11 Reusable UI inventory** | **Keep, formalize** | Inventory was right; format was too thin. Elevated into full Component Standards docs in §11 below. |
| **§12 State management** | **Keep, add** | Still no global state library needed. Add: a lightweight analytics event bus (pub-sub, no dependency) and an exit-intent detection hook (`useExitIntent`) — both local, no architecture change. |
| **§13 Future scalability** | **Improve significantly** | V1 named the right seams (route groups, `lib/auth`, `app/api`) but didn't map them to concrete future features. Expanded into a full ecosystem roadmap in §14. |
| **§14 npm packages** | **Improve** | Add an analytics SDK (§9), no new state/data-fetching library yet — correctly deferred. |
| **§15 Design tokens** | **Improve significantly** | V1 had color/type/spacing/radius/shadow tokens only. Missing animation duration/easing, opacity scale, z-index, blur, gradient, border-opacity tiers — all defined in §10 below. |
| **§16–§19 Mobile-first, code/naming/file conventions** | **Keep** | No creative-direction impact; these are purely engineering conventions and remain correct. |
| **§20 Route strategy** | **Keep, minor note** | `/apply` reserved-but-unused was right — the modal-first approach (confirmed decision) means this route stays dormant until the modal genuinely outgrows itself. |
| **§21 Asset organization** | **Improve significantly** | V1 gave a folder structure with no production guidance behind it. A folder named `testimonials/` is useless without knowing what's supposed to go in it, in what style, shot how. Full production guide in §8 below. |
| **§22–§25 Image optimization, font loading, loading strategy, scroll behavior** | **Keep** | Technically sound, unaffected by creative-direction work. |
| **§26 CTA strategy** | **Improve** | Right instinct (single consistent action, `data-cta-location` tracking) but disconnected from *why* the copy on that button should say what it says. Explicitly wired into the Copywriting System (§5) and Emotional Journey (§6) below. |
| **§27 Lighthouse plan** | **Merged** | Folded into the actionable checklist in §13. |
| **§28 Risk assessment** | **Keep, extend** | V1's risks (contrast, motion jank, content dependency) all still stand. New risks specific to brand/creative work added in §15 (Final Review) rather than duplicated here. |
| **§29 Development milestones** | **Reconsider — genuine reversal** | V1 jumped straight from M0 (technical scaffold) into M2 (Hero section) with placeholder content, implicitly assuming brand/copy would "arrive eventually" during build. **This is backwards for a brand-driven conversion page.** A new gate, **M(-1) — Brand & Content Lock**, must sit before M0: moodboard approval, copy first-drafts against the frameworks in §5, and at minimum a founder voice/story capture session. Building pixel-perfect sections against placeholder copy risks a full rebuild once real copy lands with different length/tone/rhythm. |
| **§30 Implementation roadmap** | **Keep loop, insert gate** | The per-section build loop (structure → content → responsive → motion → a11y → perf) stays correct; it now runs *after* M(-1) confirms real content exists per section, not against placeholders. |

---

## 2. Creative Direction

**Brand personality:** Controlled intensity. Calm, not chaotic — the opposite of hype-influencer energy. Authoritative without being loud. Exclusive without being snobbish. Think a Special Forces instructor, not a motivational speaker.

**Brand archetype:** Primary — **Hero** (the visitor proves their worth through disciplined action; transformation through trial). Secondary influence — **Ruler** (structure, standards, order — the "system" that channels the Hero's effort). Explicitly **not** Outlaw (too reckless/rebellious — contradicts discipline) and **not** Magician (implies a shortcut or trick — contradicts the "no shortcuts" ethos this brand should own).

**Brand voice:** Second person, direct address ("you," never "our clients"). Short, declarative sentences. Confidence expressed through restraint, not exclamation points or superlatives — a brand this sure of itself doesn't need to shout. No corporate softening ("we'd love to help you on your journey"); no toxic-negativity shaming either ("you're weak," "pathetic") — the tone challenges, it does not humiliate. Profanity: **off by default** — the brand can read as intense without vulgarity, which also keeps ad-platform compliance simpler; flag as a deliberate choice, revisit only if the founder's authentic personal voice genuinely requires it.

**Brand values:** Discipline over motivation. Ownership over excuses. Brotherhood through accountability, not comfort. Quiet competence over bragging. Standards that are earned, not given.

**Brand promise:** *"In 90 days, you will trust yourself again."* — framed around identity and self-trust, not just habits or fitness metrics. This is deliberate: habit-tracking apps sell behavior change; this brand sells identity change, which is a stronger and stickier promise and matches the Hero archetype (the visitor becomes someone, not just does something).

**Brand positioning:** Premium, application-gated, small-cohort. Positioned explicitly *against* two adjacent categories: (1) cheap, mass-market "$27 discipline ebook" content, and (2) toxic-alpha/dominance-grifter coaching content. The brand occupies the disciplined middle: elite standard, without either the low production value of the former or the ethical baggage of the latter.

**Masculinity philosophy (define explicitly — this is both a brand and a risk decision):** Masculinity here means protector/provider/disciplined-self, not dominance-over-others. No content implying superiority over women, no "red pill" framing, no dominance hierarchies between men as a selling point. This isn't just an ethical stance — it materially reduces ad-platform suspension risk (Meta/Google actively penalize content that reads as gender-antagonistic) and widens the credible audience beyond the reactionary fringe of this niche.

**Target emotional response, in order:** Recognition ("they're describing my exact pattern") → Challenge (confronted with the gap between current and possible self) → Hope (a real path exists) → Belonging (this is my tribe) → Urgency (acting now matters more than waiting).

**Luxury level:** *Quiet/tactical* luxury, not *flash* luxury. Reference point: Arc'teryx or a bespoke tailor, not a gold Rolex ad. This directly constrains the gold accent token from V1 — it should read as a **precision marking**, not a **flex**. Gold is used the way rank insignia is used: sparingly, meaningfully, never decoratively.

**Visual adjectives:** Austere. Disciplined. Cinematic. Monastic. Weighted. Matte. Precise. Quiet-intense.

**Words people should associate with this brand:** Discipline. Standard. Order. Brotherhood. Weight. Silence. Precision. Command. Earned.

---

## 3. Visual Language

**Moodboard keywords:** Monastery corridor at dawn. Special-forces briefing room. Brutalist concrete architecture. Fog rolling over a training field. Cold iron. Dog-eared field manual. Solitary figure against scale (mountain, ocean, empty stadium). Chiaroscuro.

**Photography direction:** Real men training alone, dawn or dusk, minimal/industrial/natural backdrops. Documentary style — caught-in-the-moment, not posed-catalog. No gym-selfie energy, no forced smiles, no "look at the camera and flex" shots.

**Lighting:** Low-key, single hard directional source, long dramatic shadows. Two lighting moods mapped to emotional beats — **cold blue pre-dawn light** for "before/struggle" imagery, **warm gold rim light** for "after/transformation" imagery. This mapping should be a deliberate, documented rule the photographer/videographer follows, not an accident of whenever shoots happen to occur.

**Camera lenses:** 35mm/50mm primes for portraits (natural perspective, no distortion), 85mm for tight emotional close-ups (eyes, hands, breath), 24mm wide for environmental/scale shots (man small against landscape — visually reinforces "the challenge is bigger than you, discipline is how you meet it").

**Composition:** Rule-of-thirds with generous negative space; subject often deliberately small in frame to convey scale of the challenge. Symmetrical, centered framing reserved for "authority" shots (founder portrait) to signal stability/trust. Off-center, dynamic framing for "struggle" shots to signal tension.

**Depth:** Shallow depth of field for emotional portraits (isolate the subject, blur the noise — literally and thematically). Deep depth of field for environmental/establishing shots (scale, context).

**Color grading:** Desaturated shadows, crushed (not muddy) blacks, warm highlight rim confined to skin tones and gold accents. Subtle teal-orange split toning — restrained, filmic (think Kodak 2383 print stock), never a blockbuster-trailer-cliché grade.

**Textures:** Raw concrete, worn iron/steel, chalk dust, fog/mist, rain on glass, worn leather.

**Film grain:** Fine grain overlay (8–16px equivalent), applied globally at very low opacity (3–5%), implemented as a cheap repeating SVG-noise pattern (not a heavy image asset) — kills the "flat digital" look that undermines cinematic intent. Must degrade gracefully / disable under reduced-data or low-end-GPU conditions.

**Contrast:** High global contrast, crushed blacks — never a washed-out/hazy grade (reads as soft, contradicts "disciplined").

**Negative space:** Generous and deliberate — conveys solitude and control. A cluttered layout directly undermines the brand's core value of discipline; if it feels busy, it's wrong.

**Premium references:** Arc'teryx and Patagonia (understated technical premium, not logo-flash), A24 movie poster design (cinematic restraint), Nike "Dream Crazy"-era campaign tone (emotional weight without cheese), special-forces recruitment films (intensity conveyed through understatement, not spectacle).

**Things we NEVER use:**
- Stock office photography
- Fake smiling business people / handshake photos
- Cheesy motivational-poster typography (gold-foil "HUSTLE" quote cards)
- Oversaturated colors
- Neon cyberpunk aesthetics
- Crypto/NFT gradient-mesh visuals
- Generic Canva-template gradients or layouts
- Over-muscular "juice head" gym-bro stock photography
- Political imagery or flags
- Women used as background/objectification props
- Uncanny-valley AI-generated faces or hands
- Emoji in headlines or body copy
- Comic Sans-tier friendliness in any typographic choice
- Fake countdown timers or fabricated scarcity (real cohort limits only — see §5, §15)

---

## 4. Art Direction

**Image style:** Documentary-cinematic; desaturated grade with fine grain overlay throughout (§3).

**Video style:** 24fps cinematic cadence (not the 30/60fps "vlog" look), slow deliberate camera moves — no fast TikTok-style whip cuts. Pace itself communicates the brand's controlled-intensity personality.

**Motion graphics:** Minimal. Thin geometric gold hairline accents only. No bouncy/playful easing anywhere in the system — motion should feel like it has *mass* (see §10 easing tokens), matching the "weighted" visual adjective from §2.

**Transitions:** Hard cuts or simple cross-fades in edited video. On the page itself: fade + slight upward drift between sections, never a slide-from-side transition (reads as PowerPoint/cheap SaaS template).

**Editing pace:** Slow-to-medium for brand film/VSL — let shots breathe, longer average shot length than typical social content. Faster cut pace reserved specifically for "results montage" hype moments, so the contrast itself signals "this part is different/exciting."

**Typography behavior:** Headline reveal on hero uses a single weighted mask-wipe or letter-reveal animation — once, not repeated on scroll. Body copy uses simple fade only. Restraint is the rule: not every element needs a flourish, and over-animating text undermines the "quiet confidence" personality.

**Icon style:** Lucide's thin-stroke default is the right base. Monochrome only (foreground white or muted gold) — never a multi-color icon set, never illustrated/cartoon-style icons.

**Illustration style:** Avoid illustration entirely wherever possible — this is a photography-first brand. If a process diagram genuinely needs illustration, use thin single-weight line art only; never flat-illustration "SaaS people" style, which reads as friendly/corporate and directly contradicts the masculine-premium positioning.

**Background treatment:** Solid near-black or a subtle radial vignette behind text-heavy sections; grain overlay throughout; occasional full-bleed textured photography (concrete, fog) used specifically at section transitions to reset visual rhythm.

**Section separators:** Thin 1px hairline dividers at low opacity, or a full-bleed image break. Never a decorative wavy-SVG divider — too soft, reads as consumer-app rather than premium-brand.

**Noise:** Global fine grain (§3) — implemented as one shared cheap CSS/SVG layer, not per-image, to keep the performance cost singular and controllable (and to have exactly one place to disable it under `prefers-reduced-motion` or low-end-device detection).

**Gradients:** Sparing use — radial vignettes (black-to-transparent) for depth only. No rainbow-mesh gradients, no glassmorphism-trendy purple/blue gradients — these read as generic SaaS and fight the "iron and concrete" positioning.

**Glass effects:** `backdrop-blur` reserved for exactly two places — the sticky navbar-on-scroll and the modal backdrop. Not a general design motif; overusing glassmorphism is one of the fastest ways to make a premium brand look like a template.

**Shadows:** Per V1 tokens (§10 below) — glow-on-interaction and hairline+depth on cards only. Never soft pastel drop shadows.

**Border treatments:** 1px hairline borders at low opacity by default; gold borders reserved exclusively for hover/active/selected states — a gold border at rest would cheapen the accent through overuse.

---

## 5. Copywriting System

The page is not "text plus a CTA" — every block is written against a specific framework, chosen for the psychological job that section has to do. This table is the single source of truth for *why* copy is phrased the way it will be; content writers should reference the relevant framework before drafting each section.

| Section | Primary Framework(s) | Applied how |
|---|---|---|
| **Hero** | AIDA + Future-Self | **A**ttention via a bold, specific identity claim (not a generic tagline). **I**nterest via a subheadline naming the exact pain in the visitor's own words. **D**esire implied through the promise of who they become. **A**ction = single clear CTA. Future-Self framing: copy addresses the man they're 90 days from being, not the man they are today. |
| **Social proof strip** | Social Proof (light touch) | Numbers/logos only — no claims yet, just an early trust seed ("men like you are already here") that lowers skepticism before the harder sell begins. |
| **Problem/Agitation** | PAS (Problem–Agitate–Solution) | State the exact pattern plainly (the Problem), then agitate with specific relatable scenarios rather than vague generalities (the 2am scroll, the broken promise to yourself, the fifth "Monday restart") — specificity is what creates the "they're describing my life" recognition moment. Bridge to a solution *teaser* only; the real solution isn't revealed until the Method section. |
| **Founder/Authority** *(moved earlier — see §1)* | Authority + StoryBrand "Guide" | Founder is positioned as the **Guide**, not the hero of the story — the visitor is the hero. The Guide's job is to demonstrate empathy (has lived the same struggle) and authority (has a plan that works), in that order. Getting the order backwards (authority before empathy) reads as arrogant, not credible. |
| **Qualifier** ("this is for you if…") | Identity Marketing | Sorts the audience by identity statement, not demographics — "for men who are done starting over" creates in-group belonging and lets the visitor self-select "yes, this is me" before any transaction is asked of them. This self-selection is itself a psychological commitment device (see §6). |
| **Method (pillars)** | Hormozi Value Equation (framing) | Copy here should maximize **perceived likelihood of success** (this is a system, not willpower alone) while implicitly reducing perceived **time delay** and **effort/sacrifice** — e.g., "the 90-day system" bounds the time delay concretely, "step-by-step" language reduces perceived ambiguity/effort. |
| **Curriculum** | Hormozi Value Equation (concrete proof) | Where the Method section makes the *promise* of the value equation, Curriculum makes it *credible* with real specificity — naming actual modules/weeks proves the system is real, not vague hype, which directly raises "perceived likelihood." |
| **Testimonials** | Social Proof (full weight) | Specific, named, numbers-anchored stories — never generic superlatives ("amazing program!"). Third-party proof persuades more than brand claims ever can (halo effect); this is where skepticism actually breaks. |
| **Results/Stats** | Social Proof + Momentum | Aggregate numbers create a bandwagon/momentum feeling ("X men have completed this") distinct from the individual-story trust built in Testimonials — the two sections do different psychological jobs and should not be merged. |
| **Pricing/Offer** | Hormozi Value Equation (full stack) + Loss Aversion + Urgency | Full value stack: list every deliverable with its implied standalone value, then anchor the total against the asking price. Loss Aversion: frame the cost of *not* acting (another 90 days of the same pattern) alongside the cost of acting. Urgency must be **real** cohort-capacity scarcity tied to actual coaching bandwidth — never a fabricated countdown (see §15 risk list; also a direct legal/trust risk). |
| **FAQ** | Objection Handling + Authority + Risk Reversal | Directly names the real objections ("will this work for me," "what if I fail," "is this legitimate") rather than dodging them — dodging an objection reads as evasive; naming it head-on reads as confident. Guarantee/risk-reversal terms live here. |
| **Final CTA** | StoryBrand clarity + Future-Self + Urgency | One unambiguous action, restated plainly ("Apply Now") — no new information introduced here, just a final push combining identity (who you become) and urgency (the cost of waiting). |
| **Throughout (spine)** | StoryBrand 7-part arc | Character (visitor) → has a Problem → meets a Guide (founder) → who gives them a Plan (Method/Curriculum) → calls them to Action (Apply) → helps them avoid Failure (Loss Aversion) → ends in Success (Future-Self). Every section should be checkable against "which beat of this arc am I serving" — if a section doesn't map to a beat, cut it. |

---

## 6. Emotional Journey

Section-by-section arc, with the psychological mechanism behind each transition. Section order reflects the §1 reversal (Founder moved earlier).

```
Hero
  ↓  (bold identity claim breaks pattern-scrolling; specificity → recognition)
Recognition ("they're talking to me")
  ↓  (early, low-stakes proof lowers guard before any ask is made)
Validation / Trust seed  ←  Social Proof strip
  ↓  (specific, not generic, pain scenarios — the "2am scroll" effect)
Discomfort / Recognition  ←  Problem / Agitation
  ↓  (a credible Guide who has lived this reduces perceived risk of trusting the plan)
Trust  ←  Founder / Authority
  ↓  (identity self-selection — "this is for men who..." creates psychological ownership before purchase)
Belonging  ←  Qualifier
  ↓  (a named system replaces vague hope with structured belief)
Hope / Clarity  ←  Method
  ↓  (concrete specificity proves the plan is real, raises perceived likelihood of success)
Confidence  ←  Curriculum
  ↓  (third-party proof persuades harder than brand claims — skepticism actually breaks here)
Belief reinforced  ←  Testimonials
  ↓  (aggregate numbers create bandwagon momentum, distinct from individual trust above)
Excitement / Momentum  ←  Results
  ↓  (value stack lets an already-sold visitor justify the decision rationally to themselves)
Rational justification  ←  Pricing
  ↓  (last objections resolved right before the ask — prevents last-minute drop-off)
Anxiety reduced  ←  FAQ
  ↓  (loss aversion + one clear action converts feeling into behavior)
Urgency / Commitment  ←  Final CTA
  ↓  (a form is a micro-commitment — foot-in-the-door increases completion likelihood once started)
Identity commitment  ←  Application modal
```

**Why Founder moved earlier (the key reversal from V1):** in V1's original order, the visitor was asked to accept a Method and a Curriculum before ever being told *who* is making these claims. That's asking for trust before establishing a reason to give it. Moving Founder/Authority ahead of the Qualifier means the visitor already trusts the Guide by the time they're asked "is this for me" — which makes that self-selection moment land as a genuine invitation rather than a cold sales gate.

---

## 7. Brand Principles — "The Code"

A standalone document members should encounter early and be able to internalize as identity, not marketing copy. Written to double as a shareable artifact in its own right (printable card, wallpaper, community manifesto — see Opportunities in §15).

**The Code**

1. We do hard things on purpose.
2. We keep the promises we make to ourselves before the ones we make to others.
3. We seek discomfort — it is where the man is built.
4. We train regardless of motivation; discipline is the substitute for feeling like it.
5. We finish what we start.
6. We do not perform for an audience; we build in silence and let results speak.
7. We own every outcome — no excuses, no blame.
8. We protect our word — if we say it, it happens.
9. We choose the harder right over the easier wrong.
10. We measure ourselves against who we were yesterday, not against other men.
11. We show up especially on the days we don't want to.
12. We respect the body as the foundation of the mind.
13. We are not loud about our standards; we simply hold them.
14. We build brotherhood through accountability, not comfort.
15. We do not chase shortcuts; we trust the process and the reps.
16. We recover like we train — deliberately.
17. We control what is ours to control and release the rest.
18. We lead ourselves before we try to lead anyone else.
19. We are students first — always sharpening.
20. We become the men our future families and teams can depend on.
21. We choose discipline as an act of self-respect, not self-punishment.

---

## 8. Asset Production Guide

**Photography**
- **Portraits** — founder + any coaches; natural light preference, single hard key when studio-lit; 2–3 outfit/location changes per subject; both indoor (concrete/industrial interior) and outdoor (dawn field/urban) settings.
- **Lifestyle** — morning routine, cold exposure, journaling, reading, deliberate ritual moments. Explicitly **not** staged office/desk-work imagery — this brand's "work" is internal/physical discipline, not corporate productivity.
- **Gym/training** — real training sessions, documentary style, dawn/dusk lighting per §3's lighting-mood mapping. No mirror selfies, no flexing-at-camera shots.
- **Outdoor** — running, rucking, cold water, open landscape — conveys solitude and scale (man small against environment, per §3 composition rule).
- **Community** — small-group training/cohort moments; should read as an authentic brotherhood, not a stock-photo diversity panel — cast and shoot with the actual target cohort in mind, not generic "corporate teamwork" stock energy.

**Video**
- **Drone** — establishing/landscape-scale shots only, used sparingly for scale, not spectacle.
- **B-roll** — tactile detail: hands wrapping, water on face, boots lacing, breath in cold air — these carry the "controlled intensity" tone better than wide action shots.
- **Talking head** — founder direct-to-camera, single key light, minimal set (concrete or dark neutral backdrop), matches Guide positioning from §5.
- **VSL** — scripted per the Copywriting System (§5): Problem → Agitate → Guide → Plan → Offer → Action, mirroring the page's own StoryBrand spine so video and page reinforce each other rather than telling two different stories.
- **Close-up** — eyes, hands, breathing — reserved for the highest-tension emotional beats (Problem/Agitation, Final CTA).
- **Slow-motion** — impact moments only (water droplet, weight drop, breath cloud in cold air) — overusing slow-mo dilutes its impact.

**Music** — sourced from a premium cinematic library (Epidemic Sound / Artlist tier, not generic royalty-free). Low-BPM tension-building tracks for Problem/Agitation sections, restrained rising hybrid-orchestral for Curriculum/Transformation moments. Explicitly avoid generic "corporate uplifting" stock music — it's an instant tell of low production value.

**Sound design** — subtle whoosh on video-internal transitions only (never page-level autoplay audio — accessibility and UX baseline, non-negotiable). Breathing/heartbeat SFX reserved for VSL tension beats. All page UI sound is **off by default**.

**Icons** — Lucide base set, audited for consistent stroke weight; no colorful multi-tone icon packs (§4).

**Mockups** — device mockups only if/when a member dashboard exists to show (§14) — dark-themed frames matching brand, used sparingly.

**Logos** — primary lockup, icon-only mark, monochrome (white/black/gold) variants, documented clear-space and minimum-size rules before any placement in ad creative or the page itself.

**Testimonials** — video preferred over text-only screenshots (materially higher trust). Signed release forms required before any use. Real names, specific and concrete transformation details (not "amazing program!" superlatives). Never fabricate or composite star-rating screenshot images — an easy authenticity tell that damages trust the moment a visitor suspects it.

**Before/After** — must be authentic and consistently framed (same lighting/pose/distance across the pair) for credibility; claims must stay within ad-platform and general advertising-standards bounds — no implied guaranteed outcomes (cross-ref §15 risk list).

---

## 9. Analytics Strategy

**Naming convention:** `snake_case`, `{noun}_{verb}` pattern, consistent across every event so a funnel report doesn't require a lookup table to interpret.

**Core event taxonomy:**

| Event | Trigger | Key properties |
|---|---|---|
| `page_view` | Initial load | `referrer`, `utm_*` |
| `section_viewed` | 50% of section in viewport (IntersectionObserver, fires once per section) | `section_name` |
| `scroll_depth_25` / `_50` / `_75` / `_100` | Scroll milestone crossed, once each | — |
| `hero_cta_click` | Hero primary CTA clicked | `cta_location: "hero"` |
| `nav_cta_click` | Navbar CTA clicked | `cta_location: "nav"` |
| `sticky_cta_click` | Mobile sticky bar CTA clicked | `cta_location: "sticky"` |
| `pricing_cta_click` | Pricing-section CTA clicked | `cta_location: "pricing"` |
| `final_cta_click` | Final CTA section clicked | `cta_location: "final"` |
| `video_started` | VSL/hero video first play | `video_id` |
| `video_progress_25` / `_50` / `_75` / `_100` | Video playback milestone | `video_id` |
| `testimonial_slide_changed` | Carousel slide changes | `slide_index` |
| `faq_item_opened` | Accordion item expanded | `item_id` |
| `pricing_section_viewed` | Pricing section 50% in view | — |
| `application_form_opened` | Modal opened | `cta_location` (which CTA triggered it) |
| `application_form_started` | First field interaction | — |
| `application_form_completed` | Successful submit | — |
| `application_form_abandoned` | Modal closed without submit, after at least one field touched | `last_field_touched` |
| `exit_intent_triggered` | Desktop mouseleave toward top of viewport | — |
| `outbound_link_click` | Social/external link clicked | `destination` |

**Tooling recommendation:** Vercel Analytics for zero-config Web Vitals (already native to the deploy target), plus **PostHog** (or Plausible if session replay isn't needed) for event-level funnel analysis — chosen over GA4 specifically because it avoids GA4's heavier cookie-consent/compliance overhead for a page that otherwise has none. This is a recommendation, not a lock-in decision — flag if you'd prefer otherwise.

**Architecture requirement:** every call site uses a single abstraction, `lib/analytics.ts` exposing `track(event, properties)`, so the underlying provider can be swapped later without touching component code — the same seam-based pattern already used for auth/CMS in V1 §13.

---

## 10. Design Tokens V2

Extends V1 §15 — additive, does not replace those tokens.

**Animation duration**
- `--duration-fast: 150ms` (hover/focus micro-interactions)
- `--duration-base: 300ms` (standard reveals)
- `--duration-slow: 600ms` (section entrances)
- `--duration-slower: 900ms` (hero choreography only)

**Animation curves** — no elastic/bounce easing anywhere in the system (contradicts "weighted," "controlled intensity"):
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--ease-out-weighted: cubic-bezier(0.16, 1, 0.3, 1)` — heavier deceleration, the signature "mass" feel referenced in §4
- `--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)`

**Opacity scale**
- `--opacity-disabled: 0.4`
- `--opacity-muted: 0.7`
- `--opacity-hover-overlay: 0.08`
- `--opacity-border-subtle: 0.08` / `--opacity-border-default: 0.12` / `--opacity-border-emphasis: 0.2`

**Elevation (z-index)**
`base: 0` → `sticky-nav: 40` → `sticky-cta: 45` → `dropdown: 50` → `modal-backdrop: 90` → `modal: 100` → `toast: 110`

**Container widths**
- Standard content: `max-width: 80rem` (1280px)
- Narrow/copy-heavy (FAQ, legal pages): `max-width: 48rem` (768px)
- Wide/media (testimonials, curriculum gallery): `max-width: 96rem` (1536px)

**Grid** — 12-column desktop, 4-column mobile; gutter `1.5rem` mobile / `2rem` desktop.

**Blur** — `--blur-nav: 12px` (sticky nav glass), `--blur-modal-backdrop: 8px` (the only two sanctioned glass-effect uses, per §4).

**Border opacity tiers** — subtle/default/emphasis per Opacity scale above; gold border reserved for active/hover states only, never at rest.

**Gradient system**
- `--gradient-vignette: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 100%)`
- `--gradient-fade-bottom` — used to transition full-bleed imagery into a section's background color.

**Hover behavior** — standard hover transition = `duration-fast` + `ease-standard`; buttons scale 1.0 → 1.02–1.03; images get a subtle brightness lift, never a hard color shift.

**Focus behavior** — 2px solid accent-gold outline, 2px offset, always visible on keyboard focus — restyled for aesthetics if needed, but never removed (non-negotiable per V1 accessibility baseline).

---

## 11. Component Standards

Documentation only — no implementation code. Each entry defines the contract a component must satisfy; the engineer building it chooses the exact code shape.

**Button**
- *Purpose:* the single conversion instrument of the page — every CTA on the site is this component, no exceptions, no one-off buttons.
- *Variants:* `primary` (gold-filled, pill radius, used for the one consistent CTA action), `outline` (hairline border, used for secondary actions like "Watch"), `ghost` (text-only, used in nav/footer).
- *Props (conceptually):* variant, size, `ctaLocation` (feeds `data-cta-location` and the analytics event, non-optional on `primary`), `analyticsEvent` override if a specific button needs a non-default event name, standard `href`/`onClick`.
- *Accessibility:* minimum 44×44px tap target, visible focus ring (§10), `aria-label` required if icon-only.
- *Responsive:* full-width on mobile inside forms/modals, intrinsic width elsewhere.
- *Animation:* scale + gold glow on hover/focus (§4, §10), respects reduced motion (glow/scale disabled, color-only feedback remains).
- *Usage:* exactly one `primary` variant visible per viewport at a time — never two competing primary CTAs on screen simultaneously (§5 CTA strategy).

**SectionHeading**
- *Purpose:* enforces consistent heading rhythm (eyebrow label + headline + optional subhead) across every section so the page reads as one system, not fifteen independently designed blocks.
- *Variants:* centered (default), left-aligned (used for asymmetric layouts like Founder section).
- *Props:* eyebrow text, heading level (h2 by default, h1 reserved for hero only per §12), title, subtitle (optional).
- *Accessibility:* heading level is a required prop, never left to default — prevents accidental heading-hierarchy skips.
- *Responsive:* fluid clamp() type scale (V1 §3), no discrete per-breakpoint overrides needed.
- *Animation:* fade + upward drift on scroll-into-view, once.

**Card family (TestimonialCard, CurriculumModuleCard, PricingCard)**
- *Purpose:* shared visual chrome (border, radius, hover lift) with section-specific content slots.
- *Variants:* each card type is a specialization, not a prop-flag on one mega-component — keeps each simple and avoids a card component with a dozen conditional branches.
- *Accessibility:* testimonial cards use `<blockquote>`/`<cite>` semantics (dual benefit: a11y + SEO, per §12).
- *Responsive:* single column mobile, grid at `md`+.
- *Animation:* subtle lift (`y: -4px`) + border-emphasis on hover; scroll-in stagger for grids of cards.

**Accordion (FAQ)**
- *Purpose:* objection-handling delivery mechanism (§5) — not just a space-saving UI pattern.
- *Accessibility:* built on Radix primitive via shadcn — full keyboard operability and ARIA state comes free; must not be overridden.
- *Animation:* height auto-animate on expand/collapse, `duration-base`/`ease-standard`.
- *Analytics:* `faq_item_opened` fires on every expand (§9).

**ApplicationModal**
- *Purpose:* the single conversion funnel entry point (per confirmed Decision #1 in V1) — every CTA on the page opens this, never a direct link out.
- *Props (conceptually):* `openTrigger` (which CTA opened it, for analytics), form fields (name/email/qualifying question), submit handler (swappable — local capture today, Stripe/Typeform-backed later without changing the call sites that open it).
- *Accessibility:* focus trap while open, `Escape` closes, focus returns to the triggering element on close — Radix Dialog primitive default behavior, must not be suppressed.
- *Animation:* backdrop fade + modal scale-in, `duration-base`/`ease-out-weighted`.
- *Analytics:* `application_form_opened` / `_started` / `_completed` / `_abandoned` (§9).

**StickyMobileCTA**
- *Purpose:* persistent conversion surface once the hero (which has its own CTA) scrolls out of view.
- *Responsive:* mobile-only (`md:hidden`) — desktop already has an always-visible nav CTA, so this would be redundant above `md`.
- *Animation:* slides up into view once hero exits viewport, not present from initial load (avoids competing with hero CTA immediately).

---

## 12. SEO & Content Strategy

**Important framing correction vs. V1:** for this niche, primary discovery is assumed to be paid ads and social, not organic search. SEO here is a **brand-protection and structured-data play** — owning branded/founder-name search results and qualifying for rich results — not a primary acquisition channel. This reframing changes what "good SEO" means for this project: technical correctness matters (it's cheap and has no downside), but investing in broad-keyword content strategy would be effort spent against the wrong growth lever.

**Heading hierarchy:** exactly one `<h1>` (hero headline). Every major section title is `<h2>`. Sub-items (curriculum module titles, FAQ questions) are `<h3>` — FAQ questions specifically should be real headings even though visually styled as accordion triggers, for both crawlability and screen-reader navigation.

**Internal anchor strategy:** navbar and CTA links target in-page anchors (`#curriculum`, `#pricing`, `#faq`) with kebab-case IDs matching section names — supports both in-page jump navigation and gives the sitemap/crawler a legible map of the page's structure.

**Metadata strategy:** unique title (~55–60 chars) framed as a benefit+identity hook, not a generic descriptor; meta description (~155 chars) written with the same voice as the page itself (§2) since it's often a cold prospect's very first impression of the brand.

**OpenGraph:** a custom-designed 1200×630 branded share image (not a raw screenshot) carrying the visual language — dark background, gold accent, founder/hero imagery, headline text baked in. Social shares function as a de facto ad impression; this image deserves the same design rigor as the hero itself.

**Structured data:** `Course`, `Organization`, `FAQPage` (generated directly from `content/faq.ts` — single source of truth, zero duplication risk), `VideoObject` if a VSL is added. Deliberately **not** using `AggregateRating` unless ratings are genuinely collected via a real review platform — fabricated or inferred rating schema is a known cause of manual actions/rich-result suspension.

**Semantic HTML:** audit against div-soup; testimonials specifically should use `<blockquote>`/`<cite>` (a11y and SEO benefit simultaneously, per §11).

**Content readability:** deliberately targets a lower reading-ease grade level (short sentences, 1–3 sentence paragraphs) — this is a direct-response copywriting choice that improves conversion, not an accessibility compromise; the two goals align here rather than conflict.

**Keyword philosophy:** focus on brand-name and founder-name search ownership plus a small set of high-intent long-tail phrases (e.g., "90 day discipline program for men") — explicitly do not chase competition for broad head terms ("self improvement," "discipline"), which would be effort against a channel this brand doesn't depend on for growth.

---

## 13. Performance Checklist

Pre-launch, checked at every milestone close (V1 §29–30), not deferred to the end.

**Images**
- [ ] Every image via `next/image`, none raw `<img>`
- [ ] `sizes` attribute tuned per breakpoint
- [ ] `priority` set on the true LCP element only
- [ ] AVIF/WebP delivery verified in production
- [ ] No image exceeding ~200KB at its rendered size
- [ ] Alt text present on every image, none empty/placeholder

**Fonts**
- [ ] Self-hosted via `next/font`
- [ ] `font-display: swap` confirmed
- [ ] Latin subset only
- [ ] Variable weight used where available
- [ ] No visible FOUT/FOIT under throttled network in manual test

**JS**
- [ ] `'use client'` boundary count audited — no unnecessary client components
- [ ] Third-party scripts deferred (`afterInteractive`/`lazyOnload`)
- [ ] Bundle analyzer run before each milestone close

**CSS**
- [ ] Tailwind purge verified in production build output
- [ ] No dead custom CSS
- [ ] Critical CSS inlined (Next.js default behavior confirmed, not overridden)

**Lazy loading**
- [ ] Below-fold heavy media lazy-loaded
- [ ] Carousel/video components dynamically imported
- [ ] Application modal code-split from initial bundle

**Bundle splitting**
- [ ] Route-level splitting verified
- [ ] Heavy dependencies (Framer Motion, Embla) confirmed tree-shaken, not fully bundled

**Hydration**
- [ ] Zero hydration-mismatch warnings in console
- [ ] Client boundaries minimal and leaf-level only
- [ ] No layout shift observed on hydration

**Lighthouse**
- [ ] Run on both mobile and desktop profiles
- [ ] 95+ target across all four categories
- [ ] Re-run after every milestone, not only pre-launch

**Core Web Vitals**
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] INP < 200ms
- [ ] Field data (not just lab data) checked via Vercel Analytics post-launch

---

## 14. Future Expansion Roadmap

How today's architecture specifically de-risks each future feature — not a wishlist, a traceability map back to decisions already made in V1.

| Future feature | Enabled by (already in place) | What it adds when built |
|---|---|---|
| **Member Dashboard** | `(app)` route group already stubbed empty in V1 §2 | Auth provider slotted behind `lib/auth/` interface — no marketing-page changes required |
| **Habit Tracker** | Content/data decoupling pattern already established | First genuine justification for a global state library (Zustand) and a real backend (Supabase/Neon) — correctly *not* built prematurely now |
| **Mobile App** | Design tokens centralized as CSS custom properties (V1 §15, extended §10) | Tokens are portable to a React Native/Expo token system; shared business logic requires the API layer to be a proper backend service, not tightly-coupled Next.js server actions — a consideration for whenever backend work begins |
| **Challenges / Community** | — | Needs a real-time layer (Supabase Realtime/Pusher) and a content-moderation plan; genuinely new scope, not covered by current seams |
| **Affiliate Program** | Analytics abstraction (`lib/analytics.ts`, §9) | Same seam extends naturally to referral/attribution tracking — no new abstraction needed, just new event types |
| **Coach Portal / Admin Panel** | `lib/auth/` interface designed for extension | Add a `roles` field to the same auth interface; new `(admin)` route group mirrors the `(app)` pattern already proven |
| **Payment (Stripe)** | `app/api/` reserved empty in V1 §2 | Webhook handler slots directly into the reserved seam; `ApplicationModal`'s swappable submit handler (§11) already anticipates this |
| **Certificates** | — | Server-generated PDFs (e.g. `@react-pdf/renderer` or a serverless function) issued on program completion; requires a persistence layer that doesn't exist yet — correctly deferred |
| **Gamification / Achievements / Leaderboard** | Route-group separation + content decoupling | Requires a real data model (users, points, achievements) that doesn't exist today — the discipline is that none of this requires touching the marketing page when it eventually arrives, precisely because marketing and future-app concerns are already separated at the routing level |

**The core architectural insight this table proves out:** every future feature in this list is additive to the current structure, none require restructuring what's being built now. That property is the actual test of whether "scalable for future member area" (the brief's requirement) was honored — not a promise, a traceable fact.

---

## 15. Final Review

Self-critique at the rigor level of a Staff Engineer + Creative Director pairing reviewing this before greenlighting spend.

**10 Weaknesses**
1. No real content/copy exists yet — the entire emotional journey (§6) is theoretical until drafted against the founder's actual voice and story.
2. Single-page architecture concentrates all SEO/conversion weight on one URL, with no long-tail content strategy to capture top-of-funnel organic interest.
3. The dark-background + gold-accent premium-masculine aesthetic is already common in this exact coaching niche — risk of reading as "another template" rather than distinctive, without the differentiation insurance noted in Improvement #3 below.
4. No internationalization/localization consideration defined, if the addressable audience is ever non-English or non-Western.
5. The gated application-modal model (confirmed decision) adds real friction versus direct checkout — an untested assumption that perceived exclusivity offsets the drop-off it causes.
6. The analytics plan (§9) defines *what* to measure but not *target* conversion rates per funnel stage — no way yet to say "is this actually working" post-launch.
7. No content governance plan — since there's no CMS, every copy change post-launch is a code deploy; unclear who owns `content/*.ts` after handoff.
8. No explicit messaging differentiation against the two named references beyond aesthetic similarity — what does this brand say that 90 Day Savage or Zedan Mutlu doesn't?
9. Production plans (§8) assume drone/VSL/talking-head shoot resources that aren't confirmed as budgeted or scheduled.
10. Legal/compliance review (results claims, testimonial releases, guarantee terms) is named as a risk but has no assigned owner or checklist gate before launch.

**10 Improvements**
1. Run an actual brand-voice/copywriting workshop with the founder before M(-1) closes — the frameworks in §5 need a real voice to apply themselves to.
2. Add a small (3–5 article) cornerstone-content route for organic SEO longevity, even though acquisition is primarily paid/social (§12) — cheap insurance against total organic absence.
3. Commit to one genuinely distinctive visual signature (a proprietary grain treatment, a specific typographic quirk, a consistent camera-lens "look") rather than a well-executed pastiche of the genre — this is what prevents Weakness #3 from becoming a real problem.
4. Set explicit conversion-rate targets per funnel stage before launch, so "done" means "hits target," not just "looks right."
5. Consider a lightweight git-based content layer (e.g., MDX/Contentlayer) sooner rather than a full code-deploy-per-copy-change model, given how much a direct-response page's copy typically iterates post-launch against ad performance data.
6. Plan simple A/B test infrastructure now (e.g., a Vercel Edge Config flag for two CTA-copy variants) rather than retrofitting it after launch.
7. Add an explicit legal sign-off checklist item (testimonial releases, results disclaimers, guarantee terms) as a hard launch gate, with a named owner.
8. Define a degraded-experience fallback for slow connections/data-saver mode — auto-disable grain overlay, parallax, and video, not just "hope Lighthouse handles it."
9. Add a short, early "is this legitimate" trust micro-moment (secure-checkout indicators, real business registration info in the footer) — this niche has a real trust deficit that deserves a direct, not implied, answer.
10. Plan a post-launch weekly copy/creative test cadence — treat launch as the start of iteration, not the finish line.

**10 Risks**
1. Ad-platform account suspension risk — Meta in particular scrutinizes masculine-coaching-niche messaging closely; the Masculinity Philosophy (§2) is a real mitigation, not just an ethical nicety.
2. The founder becomes a single point of brand failure — personal reputation risk is directly tied to program credibility given the earlier "Guide" positioning (§1, §5).
3. Frontend quality is necessary but not sufficient — funnel economics (CAC, ad spend efficiency) sit entirely outside this scope and could fail independent of how well the page is built.
4. Production-quality risk: if real photography/video doesn't reach the bar the design system implies, launching with mismatched stock imagery undermines the entire premium positioning immediately.
5. Grain/parallax/motion performance risk on low-end Android devices — a real, not edge-case, segment of this demographic (broad male 20–40 audience, not exclusively high-end iOS).
6. Single-page architecture SEO exposure if organic search ever needs to matter more than currently planned.
7. Analytics implementation delay is itself a risk — without it, there's no way to diagnose an underperforming launch, and this typically gets deprioritized under deadline pressure.
8. Early-cohort testimonial thinness — a new program has limited real proof yet; messaging must stay honest about program maturity rather than overstating social proof.
9. Design-trend risk — the dark+gold masculine-coaching aesthetic could feel dated within 12–18 months as the niche saturates it further; some differentiation insurance (Improvement #3) is warranted now.
10. Dev-environment case-sensitivity risk — Windows development plus kebab-case file conventions is correct, but the Vercel (Linux) deploy target's case-sensitivity should be explicitly verified in CI, since casing bugs are invisible locally on Windows and only surface at deploy time.

**10 Opportunities**
1. The application-modal model captures leads even from visitors who don't convert immediately — sets up an email-nurture opportunity the current data model should anticipate, even if not built now.
2. Founder-driven authority content (VSL, talking-head) can double directly as paid-ad creative — plan the shoot for both landing-page and ad-creative use simultaneously, rather than shooting twice.
3. The structured-data/JSON-LD FAQ approach (§12) is something most competitors in this exact niche neglect technically — genuine SEO/rich-result differentiation through engineering discipline, not just content.
4. The reserved `(app)` route group means a member area can ship fast post-enrollment as a retention lever — directly reduces churn risk for a recurring-cohort business model.
5. The analytics abstraction (§9) sets up cleanly for future ad-platform Conversions API integration without re-architecture.
6. A well-produced VSL/founder story becomes reusable evergreen brand equity — podcast guesting, YouTube, not just the landing page.
7. "The Code" (§7) can become a standalone viral/shareable artifact in its own right (printable card, wallpaper, community manifesto) — a distribution asset beyond the page itself.
8. If the production-quality bar defined in §3–§4 is genuinely hit, it becomes a moat — most competitors in this niche under-invest in production value, and execution quality itself becomes the differentiator flagged as missing in Weakness #3.
9. Real (not fabricated) cohort-based scarcity supports a referral/community flywheel once early cohorts graduate — "graduates" become the next testimonial pipeline at zero acquisition cost.
10. Technical excellence (Core Web Vitals, accessibility) directly affects ad-platform quality scores — this is one of the rare cases where frontend engineering rigor has a *direct* line to lowering paid-acquisition cost, not just an indirect UX benefit.

---

**This document, together with [`BLUEPRINT.md`](./BLUEPRINT.md), constitutes the full creative and technical bible for this project.** No further clarification should be required to begin M(-1) (Brand & Content Lock) followed by M0.
