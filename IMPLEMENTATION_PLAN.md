# ProveIt — One-Week From-Scratch Implementation Plan

**Window:** Mon 2026-04-06 → Sun 2026-04-12
**Branch:** `ReProveIt`
**Strategy:** Build the `webapp/` app from scratch, matching the Figma `PROVEITCONTINUATION` hi-fi prototype. Do **not** port from `main` (different stack/syntax).

---

## 0. Tech Stack & Ground Truth

**Stack** (from `webapp/package.json`):
- Nuxt `^4.4.2` + Nuxt UI `^4.6.1`
- Tailwind CSS `^4.2.2` (Nuxt UI handles config)
- Vue `^3.5` (`<script setup>` + Composition API)
- Drizzle ORM `^0.45` + `pg` (Postgres, for logging study responses)
- TypeScript

**Figma:** `https://www.figma.com/design/1pa2sYVLVLou55PbUwd1Xl/PROVEITCONTINUATION`
- fileKey: `1pa2sYVLVLou55PbUwd1Xl`
- Canvas size: 1280×832 (desktop-only, don't worry about mobile)
- **No design tokens defined** in Figma — you'll extract colors/typography visually per frame (see PRV-001).

**Tools you'll use constantly:**
- Figma MCP `get_design_context` + `get_screenshot` on specific `nodeId`s to pull reference code/styling
- Nuxt UI component library (check `https://ui.nuxt.com/components` — buttons, cards, modals, progress all already built for you)
- `pnpm dev` running in `webapp/` the entire week

---

## 1. Figma Frame → Route Map

This is your ground-truth map. Every ticket refers back to this.

| Figma Frame | Route | Component/Page File |
|---|---|---|
| `LearnPage` (`1:7`) | `/` or `/learn` | `pages/index.vue` |
| `ConceptsPage` (`3:773`) | `/concepts` | `pages/concepts.vue` |
| `BeforeTutorial` (`1:34`) | `/tutorial/before` | `pages/tutorial/before.vue` |
| `TutorialIntroduction1/2/3` (`1:45`, `1:65`, `1:76`) | `/tutorial/intro/1..3` | `pages/tutorial/intro/[step].vue` |
| `TutorialDisplayingProblem` (`3:528`) | `/tutorial/problem` | `pages/tutorial/problem.vue` |
| `TutorialSolvingProblem2..15` (~14 frames) | `/tutorial/solve/[step]` | `pages/tutorial/solve/[step].vue` |
| `AfterTutorial` (`14:552`) | `/tutorial/after` | `pages/tutorial/after.vue` |
| `Exercise1DisplayingProblem` (`7:72`) | `/exercise-1/problem` | `pages/exercise-1/problem.vue` |
| `Exercise1SolvingProblem1` + WrongInput/CorrectInput (`8:99`, `8:144`, `9:36`) | `/exercise-1/solve/1` | `pages/exercise-1/solve/1.vue` (states inside) |
| `Exercise1SolvingProblemBaseCase` (4 variants) | `/exercise-1/solve/base-case` | `pages/exercise-1/solve/base-case.vue` |
| `Exercise1InductionHypothesis` (`10:219`) | `/exercise-1/solve/hypothesis` | `pages/exercise-1/solve/hypothesis.vue` |
| `Exercise1InductionStep*` (with Hint1/Hint2 variants) | `/exercise-1/solve/step` | `pages/exercise-1/solve/step.vue` |
| `AfterIndependent` (`14:594`) | `/exercise-1/after` | `pages/exercise-1/after.vue` |
| `Exercise2DisplayingProblem` (`15:627`) | `/exercise-2/problem` | `pages/exercise-2/problem.vue` |
| `Exercise2SolvingProblem1` + variants | `/exercise-2/solve/1` | `pages/exercise-2/solve/1.vue` |
| `Exercise2SolvingProblemBaseCase` (many variants) | `/exercise-2/solve/base-case` | `pages/exercise-2/solve/base-case.vue` |
| `Exercise2InductionHypothesis` | `/exercise-2/solve/hypothesis` | `pages/exercise-2/solve/hypothesis.vue` |
| `Exercise2InductionStep*` + Hint variants | `/exercise-2/solve/step` | `pages/exercise-2/solve/step.vue` |
| `FinalExerciseIntroduction1` | `/final/intro` | `pages/final/intro.vue` |
| `Exercise2DisplayingProblem` (reused for final) + `MacBook Air - 1/2` | `/final/problem`, `/final/review` | `pages/final/problem.vue`, `pages/final/review.vue` |

**Tip:** Before coding any route, open the Figma frame at that row and either screenshot it (`get_screenshot`) or pull code (`get_design_context`). Work one route at a time.

---

## 2. Time Budget

Today = **Sunday 2026-04-05**.

| Day | Date | Constraints | Hours |
|---|---|---|---|
| Mon | 04-06 | Free | **10h** |
| Tue | 04-07 | −2h basketball | **8h** |
| Wed | 04-08 | Work + basketball | **3h evening** |
| Thu | 04-09 | Work | **5h evening** |
| Fri | 04-10 | Work + basketball | **3h evening** |
| Sat | 04-11 | Free | **8h** |
| Sun | 04-12 | Buffer + deploy | **6h** |
| | | **Total** | **~43h** |

---

## 3. Epic & Ticket List

Epics are numbered. Tickets are `PRV-###` with estimates. Each ticket has: **Files**, **Description**, **Acceptance**, and where relevant a **Figma ref**.

### EPIC 0 — Foundation (Mon, ~5h)

#### PRV-001 — Extract design tokens from Figma `[45 min]`
**Why:** The Figma has no defined tokens. Before building any UI, pin down the values so you're not eyeballing them 50 times.
**Files:** `webapp/app/assets/css/main.css`, `webapp/app.config.ts`
**Description:**
1. Open Figma. Use `get_design_context` on the `LearnPage` (`1:7`) frame. Copy the color hex values from the output.
2. Repeat for `TutorialSolvingProblem2` — this usually shows the full UI chrome (buttons, text, math input).
3. Identify: primary bg color, card bg color, primary accent (likely blue/teal), correct-state green, wrong-state red, text primary, text secondary, border color.
4. Identify 2–3 font sizes: headings, body, small/captions. Check the font-family (likely a single sans-serif across).
5. Write them as CSS vars in `main.css` under `:root`, e.g.
   ```css
   :root {
     --color-bg: #...;
     --color-primary: #...;
     --color-correct: #...;
     --color-wrong: #...;
     /* etc */
   }
   ```
6. Configure Nuxt UI's primary color in `app.config.ts` to match:
   ```ts
   export default defineAppConfig({
     ui: { colors: { primary: 'blue' /* or closest match */ } }
   })
   ```
**Acceptance:** You have a `:root` CSS block with 8–12 variables and Nuxt UI's primary color matches the Figma accent visually.

#### PRV-002 — Folder scaffolding `[20 min]`
**Files:** create empty folders + `.gitkeep` if needed
**Description:** Create the following structure in `webapp/app/`:
```
app/
  assets/
    css/main.css       (exists)
    images/            (copy character PNGs here later)
  components/
    layout/            (NavBar, ProgressBar)
    proof/             (MathBlock, MathInput, StepCard, DrCubeAgent)
    ui/                (custom buttons not in Nuxt UI)
  composables/
    useProgress.ts
    useSession.ts
  layouts/
    default.vue
    exercise.vue
  pages/
    index.vue
    concepts.vue
    tutorial/
    exercise-1/
    exercise-2/
    final/
  server/
    api/
      log.post.ts       (later, Epic 6)
    db/
      schema.ts
      client.ts
  types/
    proof.ts            (ProofStep, ProgressState types)
```
**Acceptance:** `pnpm dev` still runs without errors. Structure matches the tree above.

#### PRV-003 — Global layout + nav bar `[1.5h]`
**Files:** `layouts/default.vue`, `components/layout/NavBar.vue`, `components/layout/ProgressBar.vue`
**Description:**
- `NavBar.vue`: top bar with logo on the left, section title in the middle, close/exit button on the right. Matches Figma `LearnPage` header. Use Nuxt UI's `<UButton>` for icon buttons.
- `ProgressBar.vue`: horizontal bar with current step / total steps. Accept `current` and `total` as props. Use CSS (or Nuxt UI's `<UProgress>`) — keep it a thin strip matching Figma's styling on `TutorialSolvingProblem*` frames.
- `layouts/default.vue`: wraps `<slot/>` in a container with the nav bar on top.
- `layouts/exercise.vue`: adds the progress bar below the nav bar, plus a footer area.
**Acceptance:** `pages/index.vue` with a dummy `<h1>hello</h1>` renders inside the default layout with nav bar visible. `/tutorial/problem` with the exercise layout shows nav + progress bar.

#### PRV-004 — `useProgress` composable + sessionStorage `[1h]`
**Files:** `composables/useProgress.ts`, `types/proof.ts`
**Description:**
A reactive store for where the user is in each flow. Persist to `sessionStorage` on change. Read from storage on mount.
```ts
// shape
type FlowKey = 'tutorial' | 'exercise-1' | 'exercise-2' | 'final'
interface ProgressState {
  tutorial: { step: number; completed: boolean }
  exercise1: { step: number; completed: boolean }
  exercise2: { step: number; completed: boolean }
  final:     { step: number; completed: boolean }
}
```
Export:
- `useProgress()` returns `{ state, setStep(flow, step), markCompleted(flow), reset() }`
- On load: hydrate from `sessionStorage.getItem('proveit:progress')`
- On any state change: write back to `sessionStorage`
**Acceptance:** Calling `useProgress()` in two different pages returns the same reactive state. Refreshing the page preserves it.

#### PRV-005 — Types for proof steps `[30 min]`
**Files:** `types/proof.ts`
**Description:** Define the shapes you'll use throughout exercises.
```ts
export interface ProofProblem {
  id: string
  statement: string        // e.g. "Prove 1+2+...+n = n(n+1)/2"
  statementLatex: string
  baseCase: { n: number; expectedLeft: string; expectedRight: string }
  hypothesis: string
  stepGoal: string
}
export interface UserAnswer {
  stepId: string
  value: string
  correct: boolean | null
  hintsUsed: number
}
```
**Acceptance:** File compiles (`pnpm dev` has no TS errors).

---

### EPIC 1 — Landing & Navigation Pages (Mon evening, ~3h)

#### PRV-010 — `LearnPage` (index) `[1.5h]`
**Figma:** `LearnPage` (`1:7`)
**Files:** `pages/index.vue`
**Description:** Hero/landing page. From Figma: title, short description, big CTA button into the tutorial. Likely has two entry cards ("Learn Concepts" / "Start Tutorial") — verify against the frame.
**How to build:**
1. Call `get_design_context` on nodeId `1:7` via the Figma MCP.
2. Use the returned structure to lay out a Nuxt UI `<UCard>` or custom divs.
3. Buttons: `<UButton>` linking to `/concepts` and `/tutorial/before`.
**Acceptance:** Visits to `/` show the landing page. Both buttons navigate. Matches Figma within "close enough" visual fidelity (colors, rough spacing, text).

#### PRV-011 — `ConceptsPage` `[1h]`
**Figma:** `ConceptsPage` (`3:773`)
**Files:** `pages/concepts.vue`
**Description:** Static content page explaining induction. Use `get_design_context` on `3:773` to get text + layout.
**Acceptance:** `/concepts` renders the concept explainer. Back button returns to `/`.

#### PRV-012 — `BeforeTutorial` screen `[30 min]`
**Figma:** `BeforeTutorial` (`1:34`)
**Files:** `pages/tutorial/before.vue`
**Description:** Short transition screen between landing and tutorial start. Title + "Let's begin" button.
**Acceptance:** `/tutorial/before` renders; button navigates to `/tutorial/intro/1`.

---

### EPIC 2 — Tutorial Flow (Tue, ~8h)

This is the **biggest single epic**. Don't start Exercise 1 until this whole epic passes.

#### PRV-020 — Core proof-display components `[2h]`
**Files:** `components/proof/MathBlock.vue`, `components/proof/MathInput.vue`, `components/proof/StepCard.vue`, `components/proof/DrCubeAgent.vue`
**Description:**
- `MathBlock.vue`: displays a math expression. **Simplest path:** accept raw string or HTML with superscripts (`n<sup>2</sup>`). Don't install KaTeX/MathJax unless you have to — your Figma uses plain typography. If some formulas need fractions/sums and plain text breaks, then install `vue-katex` or use `katex` directly (30 min extra). Start without it.
- `MathInput.vue`: text input with big friendly font + placeholder. Props: `modelValue`, `placeholder`, `state` ('idle' | 'correct' | 'wrong'). Border color changes with state. Uses Nuxt UI `<UInput>` underneath.
- `StepCard.vue`: the white rounded card that holds one proof step. Props: `title`, default slot for content.
- `DrCubeAgent.vue`: the character (Dr. Cube / box agent) with a speech bubble. Props: `message`, `mood` ('default' | 'thinking' | 'good' | 'bad'). Uses images from Figma `Thinking` / `Bad` / `Default` / `Good` rectangles (`41:432`, `41:433`, `41:434`, `41:464`). Export those as PNG from Figma and drop in `assets/images/drcube-*.png`.
**Acceptance:** Each component renders in isolation on a test page with all prop variants working.

#### PRV-021 — Tutorial intro screens (1, 2, 3) `[1.5h]`
**Figma:** `TutorialIntroduction1/2/3` (`1:45`, `1:65`, `1:76`)
**Files:** `pages/tutorial/intro/[step].vue`
**Description:** One dynamic page that reads the `step` param and renders the correct intro content. Array of 3 intro objects in the page's script, indexed by step. Each has a heading, body text, and Dr. Cube message.
**Acceptance:** `/tutorial/intro/1`, `/2`, `/3` each render distinct content matching their Figma frames. "Next" button advances step. On step 3 "Next" goes to `/tutorial/problem`.

#### PRV-022 — Tutorial problem display `[30 min]`
**Figma:** `TutorialDisplayingProblem` (`3:528`)
**Files:** `pages/tutorial/problem.vue`
**Description:** Shows the tutorial problem statement in a big card with a "Let's solve it" button.
**Acceptance:** `/tutorial/problem` shows the problem; button → `/tutorial/solve/1`.

#### PRV-023 — Tutorial solve steps (the big one) `[3.5h]`
**Figma:** `TutorialSolvingProblem2` through `TutorialSolvingProblem15` (~14 frames)
**Files:** `pages/tutorial/solve/[step].vue`, `composables/useTutorialScript.ts`
**Description:**
This is the guided walk-through. Each step shows some combination of: problem statement, current proof state, Dr. Cube dialogue, and a user action (pick button, fill in blank, click next). Since it's the **tutorial**, most steps are mostly-automatic with the user clicking "Next" and occasionally making a guided choice.

**Data-driven approach** — don't create 14 separate pages. Instead:
1. Create `composables/useTutorialScript.ts` exporting an array of ~14 step objects:
   ```ts
   interface TutorialStep {
     id: number
     drCubeMessage: string
     drCubeMood: 'default' | 'thinking' | 'good'
     proofLines: string[]          // accumulated so far
     interaction:
       | { type: 'next' }
       | { type: 'choice'; options: string[]; correctIndex: number }
       | { type: 'input'; expected: string; placeholder: string }
     explanation?: string           // shown after interaction
   }
   ```
2. Fill this array by walking through frames `TutorialSolvingProblem2..15` in Figma **once**. Write 1–2 sentences per step. Don't agonize over wording — you can refine Saturday.
3. `pages/tutorial/solve/[step].vue` reads the step index from the route, pulls the matching object from the array, renders the UI.
4. On "Next" or correct answer: `router.push(`/tutorial/solve/${step+1}`)`, updating `useProgress` along the way. After the last step: `/tutorial/after`.
**Acceptance:** You can click/play through all 14 steps in the browser. Progress bar advances. Dr. Cube dialogue changes per step.

#### PRV-024 — `AfterTutorial` screen `[30 min]`
**Figma:** `AfterTutorial` (`14:552`)
**Files:** `pages/tutorial/after.vue`
**Description:** Congratulations screen, "Now try Exercise 1" button.
**Acceptance:** `/tutorial/after` renders; button → `/exercise-1/problem`.

---

### EPIC 3 — Exercise 1 (Wed + Thu part, ~6h)

Exercise 1 is where the **user actually inputs** answers. Unlike the tutorial, their input is validated and wrong answers show a different state.

#### PRV-030 — Exercise 1 problem + solve index `[1h]`
**Figma:** `Exercise1DisplayingProblem` (`7:72`), `Exercise1SolvingProblem1` (`8:99`)
**Files:** `pages/exercise-1/problem.vue`, `pages/exercise-1/solve/1.vue`, `composables/useExercise1.ts`
**Description:**
- `problem.vue`: shows the Ex1 problem, button to start solving.
- `useExercise1.ts`: holds the problem data + validators for each step (string comparison normalized — trim whitespace, lowercase where applicable).
- `solve/1.vue`: first interactive step (reformulate the statement / pick the form). Shows `Exercise1SolvingProblem1` state by default, `Exercise1SolvingProblem1WrongInput` (`8:144`) when the user submits something wrong, `Exercise1SolvingProblem1CorrectInput` (`9:36`) when correct.
**Acceptance:** User can type in the input. Wrong answer → red border + Dr. Cube shows `bad` mood + hint message. Correct → green + "Next" button appears.

#### PRV-031 — Exercise 1 base case `[1h]`
**Figma:** `Exercise1SolvingProblemBaseCase` (4 variants at `10:57`, `10:95`, `10:142`, `10:118`)
**Files:** `pages/exercise-1/solve/base-case.vue`
**Description:** The 4 variants show progression: empty → filled partially → filled correctly → explanation shown. Use a single page with a local state machine:
```ts
const phase = ref<'empty' | 'filling' | 'correct' | 'explained'>('empty')
```
Render content conditionally based on `phase`. User fills in `P(1)` values, submits, sees correct state, clicks "Got it" → `explained`, clicks "Next" → `/exercise-1/solve/hypothesis`.
**Acceptance:** All 4 visual states from Figma reachable in the browser. Correct answer validated.

#### PRV-032 — Exercise 1 induction hypothesis `[45 min]`
**Figma:** `Exercise1InductionHypothesis` (`10:219`)
**Files:** `pages/exercise-1/solve/hypothesis.vue`
**Description:** Guided fill-in of the hypothesis statement. Usually just one blank to fill.
**Acceptance:** Renders, validates, navigates.

#### PRV-033 — Exercise 1 induction step + hints `[2h]`
**Figma:** `Exercise1InductionStep` (`10:233`, `10:249`, `12:269`, `12:345`, `12:364`, `13:414`), `Exercise1InductionStepHint1` (`12:288`), `Exercise1InductionStepHint2` (`12:307`, `12:326`)
**Files:** `pages/exercise-1/solve/step.vue`
**Description:** The induction step is the hardest part. Multiple substates:
- Default: user types the step
- Hint 1 revealed (after 1 wrong attempt or user clicks "hint")
- Hint 2 revealed (after 2 attempts)
- Correct
Manage with local refs `attemptCount` and `hintLevel`. Track hints used in `useProgress` for study data.
**Acceptance:** Hints appear progressively. User can reach "correct" state. Navigation → `/exercise-1/after`.

#### PRV-034 — `AfterIndependent` screen `[15 min]`
**Figma:** `AfterIndependent` (`14:594`)
**Files:** `pages/exercise-1/after.vue`
**Description:** Between-exercise transition. "Ready for Exercise 2?" button.
**Acceptance:** Renders; navigates to `/exercise-2/problem`.

---

### EPIC 4 — Exercise 2 (Thu, ~5h)

Exercise 2 is **structurally the same as Exercise 1** — same pages, different problem data and different wrong-answer hint content. **Reuse the component structure from Epic 3.**

#### PRV-040 — Extract Exercise 1 into reusable components `[1h]`
**Files:** `components/proof/ProblemDisplay.vue`, `components/proof/InteractiveSolveStep.vue`, `components/proof/BaseCaseStep.vue`, `components/proof/InductionStepWithHints.vue`
**Description:** After Exercise 1 works, refactor: lift the repeating structure out of the pages into components that take `problem` and `validator` as props. Exercise 1 pages become thin wrappers around these. Keep this refactor tight — if it balloons, revert and duplicate instead.
**Acceptance:** Exercise 1 still works after refactor.

#### PRV-041 — Exercise 2 data + pages `[2.5h]`
**Figma:** `Exercise2*` frames
**Files:** `composables/useExercise2.ts`, `pages/exercise-2/problem.vue`, `pages/exercise-2/solve/1.vue`, `pages/exercise-2/solve/base-case.vue`, `pages/exercise-2/solve/hypothesis.vue`, `pages/exercise-2/solve/step.vue`
**Description:** Mirror Exercise 1's file structure. Fill in the Exercise 2 problem + validators in `useExercise2.ts`. Each page is a thin wrapper:
```vue
<template><InteractiveSolveStep :problem :validator /></template>
<script setup>
const { problem, validators } = useExercise2()
</script>
```
**Acceptance:** Exercise 2 playable end-to-end.

#### PRV-042 — Exercise 2 hint variants `[1h]`
**Figma:** `Exercise2SolvingProblem1Hint1` (`20:93`, `20:112`), `Exercise2SolvingProblem1Correct` (`20:131`), `Exercise2InductionStepHint1` (multiple)
**Description:** Write out the Exercise 2 hint text content in `useExercise2.ts`. Make sure the `InductionStepWithHints` component surfaces them.
**Acceptance:** Wrong answer → Ex2-specific hint shown. Two wrong → Hint 2. Etc.

#### PRV-043 — Exercise 2 success screen `[30 min]`
**Figma:** `Exercise2SolvingProblemBaseCaseSuccess` (`22:138`)
**Files:** `pages/exercise-2/after.vue`
**Description:** Transition to final exercise.
**Acceptance:** Renders; navigates to `/final/intro`.

---

### EPIC 5 — Final Exercise (Fri, ~3h)

Final exercise is **less guided** — the user writes more freely. It's the "independent" stage.

#### PRV-050 — Final intro + problem `[45 min]`
**Figma:** `FinalExerciseIntroduction1` (`30:630`), `Exercise2DisplayingProblem` (`30:639`)
**Files:** `pages/final/intro.vue`, `pages/final/problem.vue`
**Description:** Straightforward transition and problem display.
**Acceptance:** Both pages render; navigation works.

#### PRV-051 — Final solve flow `[1.5h]`
**Files:** `pages/final/solve/base-case.vue`, `pages/final/solve/hypothesis.vue`, `pages/final/solve/step.vue`, `composables/useFinalExercise.ts`
**Description:** Reuse components from Epic 4 refactor. Looser validation — maybe accept any non-empty answer, log it, move on. (The study analyzes these manually from the logs.)
**Acceptance:** User can complete all three stages end-to-end.

#### PRV-052 — Final review screen `[45 min]`
**Figma:** `MacBook Air - 1/2` (`33:169`, `34:384`) — taller frames (1280×1836), scrollable review of the full proof the user wrote.
**Files:** `pages/final/review.vue`
**Description:** Pull the user's answers from `useProgress` / session storage, render the complete proof in a scrollable card.
**Acceptance:** `/final/review` shows everything the user typed in order.

---

### EPIC 6 — Data Logging (Fri evening OR Sat morning, ~2h)

**Critical** — this is a research study. Without logging, the study has no data.

#### PRV-060 — Drizzle schema + DB client `[45 min]`
**Files:** `server/db/schema.ts`, `server/db/client.ts`, `drizzle.config.ts` (if not exists), `.env`
**Description:**
```ts
// schema.ts
import { pgTable, serial, text, timestamp, jsonb, integer } from 'drizzle-orm/pg-core'
export const sessions = pgTable('sessions', {
  id: serial('id').primaryKey(),
  sessionId: text('session_id').notNull(),   // uuid generated client-side
  startedAt: timestamp('started_at').defaultNow(),
})
export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  sessionId: text('session_id').notNull(),
  flow: text('flow').notNull(),              // 'tutorial'|'exercise-1'|...
  step: text('step').notNull(),
  eventType: text('event_type').notNull(),   // 'view'|'submit'|'hint'|'correct'|'wrong'
  payload: jsonb('payload'),                 // { answer, attemptNum, hintLevel }
  createdAt: timestamp('created_at').defaultNow(),
})
```
Run `drizzle-kit push` (or `generate` + `migrate`) to create the tables.
**Acceptance:** Tables exist in your Postgres DB. `pnpm dev` starts without DB errors.

#### PRV-061 — Logging API endpoint `[30 min]`
**Files:** `server/api/log.post.ts`
**Description:**
```ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  await db.insert(events).values({
    sessionId: body.sessionId,
    flow: body.flow,
    step: body.step,
    eventType: body.eventType,
    payload: body.payload,
  })
  return { ok: true }
})
```
**Acceptance:** `curl -X POST /api/log -d '{...}'` inserts a row.

#### PRV-062 — Client logging composable `[45 min]`
**Files:** `composables/useLogger.ts`
**Description:**
```ts
export function useLogger() {
  const sessionId = /* persist in sessionStorage, generate with crypto.randomUUID() */
  async function log(flow, step, eventType, payload = {}) {
    await $fetch('/api/log', { method: 'POST', body: { sessionId, flow, step, eventType, payload } })
  }
  return { sessionId, log }
}
```
Then sprinkle `log(...)` calls in: page mount (view), answer submit (submit+correct/wrong), hint request.
**Acceptance:** Playing through one exercise in the browser produces rows in the `events` table.

---

### EPIC 7 — Polish & Deploy (Sat + Sun)

#### PRV-070 — Full playthrough + bug list `[1h]`
**Description:** Play every flow end-to-end in the browser. Write down every bug and visual mismatch in a scratchpad. **Do not fix during this pass.**
**Acceptance:** You have a concrete list of 10–30 items to fix.

#### PRV-071 — Visual polish pass `[3h]`
**Description:** Go frame-by-frame through Figma against the deployed screens. For each screen that's noticeably off, use Figma MCP `get_design_context` on the specific frame and translate the returned Tailwind classes. Focus order: LearnPage, Tutorial solve steps, Exercise 1 states, Final review.
**Acceptance:** All "critical path" screens match Figma within acceptable fidelity.

#### PRV-072 — Bug fixes from Saturday list `[2h]`
**Description:** Work through the list from PRV-070.
**Acceptance:** Critical bugs fixed. Minor ones triaged to the cut list.

#### PRV-073 — Character illustrations `[1h]`
**Description:** Export `Thinking`/`Bad`/`Default`/`Good` from Figma as PNG (or WebP), drop into `assets/images/`, wire into `DrCubeAgent.vue`. If you already did this in PRV-020, verify the moods switch correctly in context.
**Acceptance:** Dr. Cube's mood changes during exercises.

#### PRV-074 — Deploy `[1.5h]`
**Description:** Pick **Nuxt Hub** (easiest for Nuxt 4) or **Vercel** (needs a hosted Postgres — Neon/Supabase free tier works).
1. Set up hosted Postgres (Neon is 2-min signup)
2. Migrate schema to hosted DB (`drizzle-kit push` with prod DATABASE_URL)
3. Deploy webapp
4. Set env vars in deployment platform
**Acceptance:** Public URL that works end-to-end on a fresh browser.

#### PRV-075 — README + final merge `[1h]`
**Files:** `webapp/README.md`
**Description:** Document: run locally, required env vars, deploy, schema migration, known issues. Open PR `ReProveIt → main`, merge.
**Acceptance:** Someone else could clone the repo and run it.

---

## 4. Daily Schedule (tickets mapped to days)

### Monday 04-06 (10h)
- [ ] PRV-001 Extract tokens (45m)
- [ ] PRV-002 Folder scaffolding (20m)
- [ ] PRV-003 Layouts + nav (1.5h)
- [ ] PRV-004 useProgress composable (1h)
- [ ] PRV-005 Types (30m)
- [ ] PRV-010 LearnPage (1.5h)
- [ ] PRV-011 ConceptsPage (1h)
- [ ] PRV-012 BeforeTutorial (30m)
- [ ] Buffer / get ahead on PRV-020 (1.5h)

### Tuesday 04-07 (8h, −2h basketball)
- [ ] PRV-020 Proof components (2h)
- [ ] PRV-021 Tutorial intros (1.5h)
- [ ] PRV-022 Tutorial problem display (30m)
- [ ] PRV-023 Tutorial solve steps (3.5h)
- [ ] PRV-024 AfterTutorial (30m)

**🏀 Basketball break — do not skip**

**End-of-day checkpoint:** Tutorial plays start-to-finish. This is the most important milestone. If it's incomplete, cut Exercise 2's Hint variants from Epic 4 to reclaim time.

### Wednesday 04-08 (3h evening, −2h basketball)
- [ ] PRV-030 Ex1 problem + solve 1 (1h)
- [ ] PRV-031 Ex1 base case (1h)
- [ ] PRV-032 Ex1 hypothesis (45m)
- [ ] 15m buffer

### Thursday 04-09 (5h evening)
- [ ] PRV-033 Ex1 induction step + hints (2h)
- [ ] PRV-034 AfterIndependent (15m)
- [ ] PRV-040 Extract reusable components (1h)
- [ ] PRV-041 Ex2 pages (start) (1.5h)
- [ ] 15m buffer

### Friday 04-10 (3h evening, −2h basketball)
- [ ] PRV-041 Finish Ex2 pages (1h)
- [ ] PRV-042 Ex2 hint content (1h)
- [ ] PRV-043 Ex2 after (30m)
- [ ] PRV-050 Final intro + problem (start) (30m)

### Saturday 04-11 (8h)
- [ ] PRV-050 Final intro + problem (15m if needed)
- [ ] PRV-051 Final solve flow (1.5h)
- [ ] PRV-052 Final review (45m)
- [ ] PRV-060 Drizzle schema (45m)
- [ ] PRV-061 Log API (30m)
- [ ] PRV-062 Client logger + sprinkle calls (45m)
- [ ] PRV-070 Full playthrough + bug list (1h)
- [ ] PRV-071 Visual polish pass (start) (1.5h)

### Sunday 04-12 (6h)
- [ ] PRV-071 Visual polish (finish) (1.5h)
- [ ] PRV-072 Bug fixes (2h)
- [ ] PRV-073 Character illustrations (1h)
- [ ] PRV-074 Deploy (1.5h)
- [ ] PRV-075 README + merge (1h — or spillover to Monday if needed)

---

## 5. Execution Rules

1. **One ticket at a time.** Open one, finish it, check the box, commit, next. No jumping.
2. **Commit per ticket** with format `PRV-XXX: short message`. You can find your way back later.
3. **Figma MCP is your friend.** Every time you start a new page ticket, your first action is `get_design_context` on the Figma nodeId from section 1. Do not try to eyeball layouts from screenshots.
4. **Nuxt UI first, custom second.** Before styling anything from scratch, check if Nuxt UI has a component for it (`UButton`, `UCard`, `UInput`, `UProgress`, `UModal`, `UAlert`). 80% of what you need is already there.
5. **Time-box hard problems.** Stuck >45 min? Leave a `// TODO PRV-XXX` comment, commit, move on. Come back Saturday.
6. **No refactors mid-epic.** Only refactor at epic boundaries (e.g., PRV-040 is a deliberate refactor). Mid-epic refactors destroy timelines.
7. **Desktop only.** 1280 width. No responsive work this week.
8. **Don't install new packages casually.** Every new dep costs 15+ min of debugging. If you think you need KaTeX/MathJax, verify you can't do it with plain HTML first.
9. **Basketball is not optional.** Tue/Wed/Fri — it resets your brain.
10. **Stop at 11pm on weekdays.** Tired code creates bugs that cost 2× to fix tomorrow.
11. **Skip `.env` commits.** Postgres connection string never goes in git.

---

## 6. Cut List (if falling behind)

Cut top-down:

1. **Character illustrations** (PRV-073) — replace with plain emoji or skip entirely. Logic still works.
2. **Visual polish pass** (PRV-071) — ship functional but less-pretty.
3. **Exercise 2 hint variants** (PRV-042) — ship with single-attempt validation.
4. **`ConceptsPage`** (PRV-011) — make it a placeholder "Coming soon".
5. **Final review screen** (PRV-052) — skip review, jump to a plain "Thank you".
6. **Entire Exercise 2** (Epic 4) — if catastrophically behind Thursday, ship Tutorial + Ex1 + Final only.
7. **Data logging** (Epic 6) — **NEVER CUT THIS.** Without it, the study has no data. If you have to cut something from Saturday, cut polish, not logging.

**Hard floor (must ship):** Tutorial + Exercise 1 + Final Exercise + Data logging + Deployed.

---

## 7. Monday Morning Pre-Flight (15 min, before any code)

- [ ] `cd webapp && pnpm install && pnpm dev` — confirm dev server runs
- [ ] Open Figma file in browser in a second monitor / tab
- [ ] Open this file (`IMPLEMENTATION_PLAN.md`) in a third tab
- [ ] Decide deploy target (Nuxt Hub vs Vercel+Neon) — write it here: `___`
- [ ] Confirm Postgres: do you have a local one running, or will you use a hosted one from day 1? Write it here: `___`
- [ ] Start PRV-001

---

*Check boxes as you finish tickets. Commit per ticket. Rest when the schedule says rest. You've already done the hard creative work — this week is execution.*
