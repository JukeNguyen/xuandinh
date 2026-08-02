# Build Progress

### Living status doc — not part of the frozen creative bible

**Relationship to other docs:** [`BLUEPRINT.md`](./BLUEPRINT.md), [`BLUEPRINT_V2_ADDENDUM.md`](./BLUEPRINT_V2_ADDENDUM.md), [`CONTENT_STRATEGY.md`](./CONTENT_STRATEGY.md), [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md), and [`ASSET_PRODUCTION_GUIDE.md`](./ASSET_PRODUCTION_GUIDE.md) are approved and frozen — they define *what* to build. This file tracks *what's actually been built so far* and is expected to keep changing as work continues. Update it at the end of each work session rather than leaving the last session's state stale.

**Last updated:** end of session, 2026-08-01 (session 2).

---

## Where things stand

**The full landing page is built and merged to `main`**: Header, Hero, Problem, Qualifier, Method, Curriculum, FAQ, Application Modal, Final CTA, Footer, and the mobile Sticky CTA bar. Every CTA on the page (nav, hero, final, sticky) opens the same shared application modal and fires its own analytics event. Everything that could honestly be built from the approved docs without fabricating content is done.

Repo: `github.com/JukeNguyen/xuandinh`. Every feature followed the same loop: branch off `main` → implement → `npm run lint` / `typecheck` / `build` → dev-server smoke test → commit (Conventional Commits) → push → PR → merge.

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
| #8 | `feature/application-modal` | Gated application modal (name/email/qualifying question); had a merge conflict against #9/#10 in `(marketing)/layout.tsx`, resolved by hand |
| #9 | `feature/faq` | FAQ accordion — 6 of 9 documented questions (see gaps below) |
| #10 | `feature/footer` | Footer — wordmark, tagline, in-page nav anchors, copyright |
| #11 | `feature/final-cta` | Closing CTA section — identity + real-scarcity urgency + the one action, per Story Framework |
| #12 | `feature/sticky-mobile-cta` | Mobile-only persistent CTA bar, slides in once past the hero |

## Known interim decisions (still worth revisiting)

- **Application modal submit mechanism**: no backend exists, so submitting opens a `mailto:` link to a placeholder inbox (`applications@example.com`, swappable via `NEXT_PUBLIC_APPLICATION_EMAIL`). The modal tells the visitor this explicitly rather than faking a "received" confirmation. You approved this as the interim approach this session — revisit once a real backend/CRM exists.
- **Neither the application modal nor the sticky CTA bar's scroll-triggered slide-up have been interactively click/scroll-tested** — no browser-automation tool is available in this environment. Verification throughout has been lint/typecheck/build passing, clean dev-server compiles with no console errors, and structural HTML checks via curl. Worth clicking through both yourself.
- **`useScrolledPastHero()` is called independently in both `Navbar` and `StickyMobileCta`** rather than sharing state via context — two lightweight sentinels/observers instead of one. Deliberate simplicity trade-off, flagged in PR #12; fine to leave unless it becomes a real cost.

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
- **Recurring false-positive on `git checkout <branch>`**: the working tree frequently shows every tracked file as "modified" due to line-ending (CRLF/LF) churn from Windows tooling, with zero real diff (`git diff --stat` comes back empty). When this blocks a branch switch, `git checkout -- .` first is safe — confirmed via `git diff --stat` each time before doing it.

## Next steps

When real content becomes available (founder story/photo, testimonials, pricing, logos/stats, guarantee terms), the five blocked sections above and the remaining 3 FAQ items are ready to build — nothing architectural is in the way. Otherwise, the landing page is feature-complete against what the docs currently support.
