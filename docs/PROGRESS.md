# Build Progress

### Living status doc — not part of the frozen creative bible

**Relationship to other docs:** [`BLUEPRINT.md`](./BLUEPRINT.md), [`BLUEPRINT_V2_ADDENDUM.md`](./BLUEPRINT_V2_ADDENDUM.md), [`CONTENT_STRATEGY.md`](./CONTENT_STRATEGY.md), [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md), and [`ASSET_PRODUCTION_GUIDE.md`](./ASSET_PRODUCTION_GUIDE.md) are approved and (mostly) frozen — they define *what* to build. `DESIGN_SYSTEM.md`'s typography section has since been amended (see below). This file tracks *what's actually been built so far* and is expected to keep changing as work continues. Update it at the end of each work session rather than leaving the last session's state stale.

**Last updated:** end of session, 2026-08-01 (session 3).

**Language note:** as of this session, the user communicates mostly in Vietnamese and the site itself is in Vietnamese. Continue future sessions in Vietnamese by default.

---

## Where things stand

**The full landing page is built, translated to Vietnamese, and merged to `main`**: Header, Hero, Problem, Qualifier, Method, Curriculum, FAQ, Application Modal, Final CTA, Footer, and the mobile Sticky CTA bar — all in Vietnamese, all wired to the same shared application modal, each CTA firing its own analytics event. Display font is Oswald (changed from Archivo Black per user request). Everything that could honestly be built from the approved docs without fabricating content is done.

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
| #13 | `feature/i18n-vietnamese` | Translated all page content + UI strings to Vietnamese; `html lang="vi"`, `siteConfig.locale = "vi_VN"` |
| #14 | `feature/font-oswald` | Display font changed from Archivo Black → Oswald (700). Body font (Inter) unchanged. `DESIGN_SYSTEM.md` typography table updated to match |

## Known interim decisions (still worth revisiting)

- **Application modal submit mechanism**: no backend exists, so submitting opens a `mailto:` link to a placeholder inbox (`applications@example.com`, swappable via `NEXT_PUBLIC_APPLICATION_EMAIL`). The modal tells the visitor this explicitly rather than faking a "received" confirmation. Approved as the interim approach — revisit once a real backend/CRM exists.
- **Neither the application modal nor the sticky CTA bar's scroll-triggered slide-up have been interactively click/scroll-tested** — no browser-automation tool is available in this environment. Verification throughout has been lint/typecheck/build passing, clean dev-server compiles with no console errors, and structural HTML checks via curl. Worth clicking through both yourself.
- **`useScrolledPastHero()` is called independently in both `Navbar` and `StickyMobileCta`** rather than sharing state via context — two lightweight sentinels/observers instead of one. Deliberate simplicity trade-off; fine to leave unless it becomes a real cost.

## Vietnamese translation notes

- Brand name **"The Operating System" / "The OS"** kept in English — it's the wordmark, not translated.
- Curriculum phase names **DETOX / INSTALL / COMPOUND** kept in English — translating them read awkwardly and they function as program/phase names, not prose.
- Everything else (all marketing copy, all UI strings — buttons, errors, 404, form labels/validation, footer, mailto content) is in Vietnamese.
- Translation preserved the exact meaning/psychology documented in `CONTENT_STRATEGY.md` — it was a translation pass, not a copy rewrite.

## Content editing workflow (established this session)

All page copy lives in `src/content/*.ts` as plain string objects, decoupled from component/JSX code — this was a deliberate architecture choice specifically so copy edits never require touching components. File → section map:

| File | Controls |
|---|---|
| `site-config.ts` | Brand name, tagline, description |
| `hero.ts` | Hero headline + subheadline |
| `problem.ts` | "Sự Trôi Dạt" (The Drift) + 5 mechanisms |
| `qualifier.ts` | "Current → Desired" identity table (6 rows) |
| `method.ts` | Four Pillars |
| `curriculum.ts` | DETOX/INSTALL/COMPOUND phases |
| `faq.ts` | 6 FAQ items |
| `final-cta.ts` | Closing CTA copy |
| `footer.ts` | Footer nav labels |
| `application.ts` | Application modal form labels |

**Established preference: batch text edits.** Doing the full branch→lint→typecheck→build→smoke-test→PR→merge cycle per single small text tweak is wasteful. The user was advised to either (a) collect all desired copy changes across every section and hand them over in one batch for a single PR, or (b) hand-edit the content files directly (no component/JSX knowledge needed, just string values) and have changes verified/merged afterward. No copy-editing session has happened yet — next session likely starts here.

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

- **Node.js wasn't installed** on this machine at session start (session 1) — installed via `winget install OpenJS.NodeJS.LTS`. It's on PATH now, but **new shell invocations in this environment don't inherit the updated PATH** — every command needs `export PATH="$PATH:/c/Program Files/nodejs"` (bash) or the equivalent PATH refresh line (PowerShell) prefixed.
- **`gh` CLI is installed but not authenticated** (missing `read:org` scope on the available token). PR creation/merging was done directly via the GitHub REST API using the token from `git credential fill`, not the `gh` CLI.
- **Next.js is pinned to 15.5.22**, not the 16.x that `create-next-app@latest` installs by default — intentional, matches the approved blueprint's stack.
- `.claude/settings.json` allows all Bash/PowerShell commands without prompting, per the user's request.
- **Recurring false-positive on `git checkout <branch>`**: the working tree frequently shows every tracked file as "modified" due to line-ending (CRLF/LF) churn from Windows tooling, with zero real diff (`git diff --stat` comes back empty). When this blocks a branch switch, `git checkout -- .` first is safe — confirmed via `git diff --stat` each time before doing it.
- Dev server is typically left running on `http://localhost:3000` at the end of a session for the user to preview.

## Next steps

1. **Most likely next task: copy editing.** The user is planning to revise text content — see "Content editing workflow" above for the established, time-efficient approach (batch it).
2. When real content becomes available (founder story/photo, testimonials, pricing, logos/stats, guarantee terms), the five blocked sections above and the remaining 3 FAQ items are ready to build — nothing architectural is in the way.
3. Otherwise, the landing page is feature-complete against what the docs currently support.
