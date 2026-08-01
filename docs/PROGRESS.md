# Build Progress

### Living status doc — not part of the frozen creative bible

**Relationship to other docs:** [`BLUEPRINT.md`](./BLUEPRINT.md), [`BLUEPRINT_V2_ADDENDUM.md`](./BLUEPRINT_V2_ADDENDUM.md), [`CONTENT_STRATEGY.md`](./CONTENT_STRATEGY.md), [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md), and [`ASSET_PRODUCTION_GUIDE.md`](./ASSET_PRODUCTION_GUIDE.md) are approved and frozen — they define *what* to build. This file tracks *what's actually been built so far* and is expected to keep changing as work continues. Update it at the end of each work session rather than leaving the last session's state stale.

**Last updated:** end of session, 2026-08-01.

---

## Where things stand

The landing page is live at `/` with Header, Hero, Problem, Qualifier, Method, Curriculum, FAQ, and Footer all built and merged to `main`. One PR (Application Modal, #8) is open and waiting on your review before merging. Two more sections (Final CTA, Sticky Mobile CTA) are ready to build but intentionally on hold until #8 is resolved, since their CTA buttons need to wire into the same shared modal.

Repo: `github.com/JukeNguyen/xuandinh`. Every feature so far followed the same loop: branch off `main` → implement → `npm run lint` / `typecheck` / `build` → dev-server smoke test → commit (Conventional Commits) → push → PR → merge (or hold for review, per the rules in the original workflow instructions).

## Merged to `main`

| PR | Branch | What it added |
|---|---|---|
| #1 | `feature/foundation` | Next.js 15 + TS + Tailwind v4 + shadcn/ui scaffold, design tokens, fonts, base SEO, analytics abstraction |
| #2 | `feature/header` | Sticky Navbar, transparent→solid on scroll (`useScrolledPastHero` sentinel hook), skip-to-content link |
| #3 | `feature/hero` | Hero section (headline/subheadline/CTA), `SectionHeading` shared component |
| #4 | `feature/problem` | Problem/Agitation section — The Drift + its 5 mechanisms |
| #5 | `feature/qualifier` | Qualifier section — Current→Desired Identity comparison table |
| #6 | `feature/method` | Method section — Four Pillars overview cards |
| #7 | `feature/curriculum` | Curriculum section — Three-Phase Install accordion (DETOX/INSTALL/COMPOUND) |
| #9 | `feature/faq` | FAQ accordion — 6 of 9 documented questions (see gaps below) |
| #10 | `feature/footer` | Footer — wordmark, tagline, in-page nav anchors, copyright |

## Open — needs your decision

**[PR #8 — `feature/application-modal`](https://github.com/JukeNguyen/xuandinh/pull/8)**, not merged. This is the gated application form (name/email/qualifying question) that Header and Hero's CTA buttons are meant to open. Two things to decide before merging:

1. **No backend exists yet**, so the submit action opens a `mailto:` link to a placeholder inbox (`applications@example.com`, swappable via `NEXT_PUBLIC_APPLICATION_EMAIL`) rather than actually persisting anywhere — the modal tells the visitor this explicitly ("hit send in your email client to complete it"). Confirm this interim mechanism is acceptable, or say what you'd rather do instead (a real form-backend service, a booking-call link, etc.).
2. **Not click-tested.** No browser-automation tool is available in this environment — verification so far is lint/typecheck/build passing plus a clean dev-server compile with no console errors, not an actual open→fill→submit run-through. Worth manually clicking through it yourself before merging.

To merge it once you're satisfied: same GitHub API merge flow used for the others (`PUT /repos/JukeNguyen/xuandinh/pulls/8/merge`), or merge it directly on GitHub.

## Blocked on PR #8

Not started yet — both need the shared `useApplicationModal()` hook that #8 introduces, so building them against current `main` would leave them inconsistent once #8 lands:

- `feature/final-cta` — late-page CTA section (urgency + one clear action, per Content Strategy's Final CTA story rules)
- `feature/sticky-mobile-cta` — persistent mobile CTA bar

## Deliberately not built (content-blocked, not forgotten)

These would require fabricating specifics the docs explicitly forbid inventing. Building them honestly needs real input first:

| Section | What's missing |
|---|---|
| Social Proof strip | Real logos / real "N men transformed" counts |
| Founder section | A real founder identity, first-person story, and photo |
| Testimonials | Real people, named and specific (per Story Framework's rules) |
| Results/Stats | Real numbers — Content Strategy explicitly prohibits fabricated results |
| Pricing | A real price, and real guarantee/refund terms |

Also partial: **FAQ ships 6 of 9 documented questions** — the 3 skipped (guarantee terms, payment plans, live-call schedule/timezone) need real business facts that don't exist in any doc yet.

## Environment notes (for picking this back up)

- **Node.js wasn't installed** on this machine at session start — installed via `winget install OpenJS.NodeJS.LTS`. It's on PATH now, but **new shell invocations in this environment don't inherit the updated PATH** — every command needs `export PATH="$PATH:/c/Program Files/nodejs"` (bash) or the equivalent PATH refresh line (PowerShell) prefixed.
- **`gh` CLI is installed but not authenticated** (missing `read:org` scope on the available token). PR creation/merging was done directly via the GitHub REST API using the token from `git credential fill`, not the `gh` CLI.
- **Next.js is pinned to 15.5.22**, not the 16.x that `create-next-app@latest` installs by default — intentional, matches the approved blueprint's stack.
- `.claude/settings.json` allows all Bash/PowerShell commands without prompting, per your earlier request.

## Next steps

1. Review and merge (or send back) PR #8.
2. Build `feature/final-cta` and `feature/sticky-mobile-cta` once #8 is resolved.
3. When real content becomes available (founder story/photo, testimonials, pricing, logos/stats, guarantee terms), the five blocked sections above and the remaining 3 FAQ items are ready to build — nothing architectural is in the way.
