# CLAUDE.md — Claude Code Working Instructions

Action-oriented operational guidelines for Claude Code when developing and maintaining this Vue 3 personal portfolio repository.

---

## 1. Primary Goal

> **Prefer the smallest technically sound change that solves the problem.**

Avoid sweeping refactors, speculative future-proofing, and unnecessary architectural layers. Treat this project as a high-performance, statically delivered personal portfolio, not an enterprise SaaS application.

---

## 2. Before Editing

Before touching any file:

1. **Inspect Relevant Files**: Read target components, layouts, and their imported composables or data sources.
2. **Trace Dependencies**: Check where data originates (`db.json` → `src/data/localDb.js` → `src/composables/` → views/components).
3. **Understand Current Behavior**: Check how the component renders in both Light and Dark themes.
4. **Identify Affected Routes**: Determine if the change touches dynamic routes (`/projects/:id`), static views, or global layouts (`DefaultLayout.vue`).
5. **Verify Assumptions**: Do not guess file names, styling tokens, or route paths. Confirm via codebase tools.

---

## 3. Implementation Workflow

### Standard Tasks
```text
Inspect
  ↓
Plan (Mental or concise scratchpad)
  ↓
Implement (Targeted, minimal diff)
  ↓
Build (`npm run build`)
  ↓
Verify (Preview, viewport checks, theme checks)
  ↓
Summarize
```

### Complex / Multi-Component Tasks
```text
Audit current implementation
  ↓
Draft implementation plan
  ↓
Execute changes incrementally
  ↓
Run `npm run build` after each milestone
  ↓
Cross-device & cross-theme verification
  ↓
Report summary
```

---

## 4. Refactoring Rules

* **Prefer deletion over abstraction**: Remove unused variables, dead components, and obsolete styles rather than creating complex fallback wrappers.
* **Avoid premature abstractions**: If a component or calculation is only used in one place, keep it local. Do not create a new composable for a one-line computed property.
* **Preserve existing behavior**: Keep route URLs, header heights (`h-16`), navigation items, and external link behaviors unchanged unless explicitly asked.
* **Do not refactor unrelated code**: When fixing a bug or updating a section, do not reorganize CSS classes or rewrite neighboring components.
* **No global stores**: Do not install Pinia or create artificial event buses. Use the existing composable reactive refs.

---

## 5. Vue Rules

* **Composition API with `<script setup>`**: All components use `<script setup>`.
* **Explicit Props & Emits**:
  ```javascript
  const props = defineProps({
    project: {
      type: Object,
      required: true
    }
  });
  const emit = defineEmits(['close', 'filter-change']);
  ```
* **Reactive State**: Use `ref` for primitives/arrays and `computed` for derived lists (e.g. filtered projects). Avoid deep nested watchers.
* **Lifecycle Hooks**: Use `onMounted` and `onUnmounted` for window event listeners (e.g. `keydown` for Escape key). Always remove event listeners on unmount.
* **SSG Safety**: Guard any DOM/browser access (`window`, `localStorage`, `document`) inside functions or lifecycle hooks:
  ```javascript
  if (typeof window !== 'undefined') {
    // safe browser call
  }
  ```
* **Component Boundaries**:
  * Views (`src/views/`) call `useHead()` and assemble layout sections.
  * Components (`src/components/`) receive data via props and emit events for interactions.
  * Composables (`src/composables/`) encapsulate data manipulation and shared state.

---

## 6. Tailwind / Styling Rules

* **Use Design Tokens**: Use CSS custom properties from `src/style.css`:
  * Backgrounds: `bg-[var(--color-bg)]`, `bg-[var(--color-surface)]`, `bg-[var(--color-bg-elevated)]`
  * Text: `text-[var(--color-text)]`, `text-[var(--color-text-secondary)]`, `text-[var(--color-text-tertiary)]`
  * Borders: `border-[var(--color-border)]`, `border-[var(--color-border-strong)]`
  * Buttons: `bg-[var(--color-btn-bg)]`, `text-[var(--color-btn-text)]`
* **Tailwind v4 Setup**: Styles use `@import "tailwindcss";` and `@theme { --font-dot: "DotGothic16", monospace; }`.
* **Dark Mode**: Dark mode is activated via `<html class="dark">`. Token variables automatically swap values; avoid excessive inline `dark:` overrides when tokens already handle theme adaptation.
* **Class Organization**: Group classes logically: Layout (`flex`, `grid`) → Sizing/Spacing (`h-`, `w-`, `p-`, `m-`) → Typography (`font-`, `text-`) → Colors/Borders (`bg-`, `border-`) → States (`hover:`, `focus-visible:`).
* **Typography Hierarchy**:
  * Brand & Display: `font-dot` (`DotGothic16`) for hero title, brand mark, badges, and terminal stats.
  * Content & UI: Inter / system font for body text, navigation, descriptions, and buttons.

---

## 7. Content & Portfolio Rules

* **Factual Accuracy**: Maintain factual precision regarding Hadinata Jenta's engineering background (Backend & Systems Engineer, Go microservices, RabbitMQ, Laravel, Vue 3, Bank Rakyat Indonesia).
* **Never Invent Metrics**: Do not fabricate transactions per second, user counts, uptime percentages, or system scale numbers unless documented in `db.json`.
* **No Exaggerated Ownership**: Reflect role accurately (team contributor, module owner, microservice developer) rather than claiming sole authorship of enterprise-wide platforms.
* **Enterprise Confidentiality**: Never disclose proprietary API endpoints, internal banking network architectures, unreleased features, or client-sensitive data.
* **Tone**: Technical, restrained, editorial, and professional. Avoid marketing fluff or buzzword-heavy copy.

---

## 8. Image & Asset Rules

* **Asset Location**: Place static images, diagrams, and icons in `public/`.
* **Optimization First**: Never commit unoptimized, multi-megabyte images. Use tools (like `sips` on macOS) to compress and resize assets.
* **Vector Favicon**: Use `public/favicon.svg` as the primary vector icon, backed by `favicon.ico` and sized PNG fallbacks (`16x16`, `32x32`, `180x180`).
* **Semantic Alt Text**: Provide concise, descriptive `alt` attributes for portraits and architecture diagrams. Set `aria-hidden="true"` on decorative icons and marks.
* **Maintain Aspect Ratios**: Use CSS classes (`object-cover`, `object-contain`, `aspect-*`) to prevent layout shifts.

---

## 9. Accessibility Rules

* **Native Elements First**: Use `<button>` for actions and `<router-link>` / `<a>` for links. Never attach click handlers to unstyled `<div>` elements.
* **Visible Focus Indicators**: Ensure interactive elements provide visible keyboard focus indicators (`focus-visible:ring-2 focus-visible:ring-[var(--color-border-strong)]`).
* **Modal / Drawer Trapping & Escape**: Modal dialogs and mobile navigation drawers must listen for `Escape` to close and return focus appropriately.
* **ARIA Usage**: Use ARIA attributes only when semantic HTML is insufficient (e.g. `aria-expanded="false"`, `aria-label="Switch to dark theme"`, `aria-controls="mobile-menu"`).

---

## 10. Verification Checklist

After modifying code, run and verify:

1. **Build Verification**:
   ```bash
   npm run build
   ```
   Must exit with code 0 and render all 13+ static pages cleanly.
2. **Route Integrity**: Verify affected pages:
   * `/` (Home / Hero)
   * `/projects` (Archive)
   * `/projects/:id` (Detail views)
   * `/experience` (Career timeline)
   * `/contact` (Contact channels)
   * `/404` (Error view)
3. **Responsive Verification**:
   * Desktop (1280px–1440px)
   * Tablet (768px–1024px)
   * Mobile (375px & 430px)
4. **Theme Verification**: Toggle between Light Mode and Dark Mode; verify text readability and badge contrast.
5. **No Console Warnings**: Ensure SSR builds do not log `window is not defined` or hydration errors.

---

## 11. Final Response Format

When completing work in this repository, summarize concisely using this structure:

```text
Changes:
- Brief bullet list of what was modified and why.

Files:
- [path/to/file.vue](file:///Users/erendt/Code/portofolio/path/to/file.vue)

Behavior:
- How the user experience or component behavior changed.

Verification:
- Build output status (npm run build)
- Viewports and themes tested

Known Issues:
- Any limitations or intentional edge cases (or "None").
```
