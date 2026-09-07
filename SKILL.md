# SKILL.md — Engineering Knowledge & Decision Guide

Deep domain knowledge, architectural decision rationale, and engineering judgment principles for the Hadinata Jenta portfolio repository.

---

## 1. Project Mental Model

* **Static Portfolio, Not Enterprise SaaS**: This application delivers a portfolio and case studies to technical recruiters, engineering leaders, and hiring managers. It prioritizes fast initial load, pristine readability, zero runtime errors, and flawless SEO.
* **Content First, Code Subservient**: Every visual element and component exists to highlight Hadinata Jenta's systems engineering capabilities (Go microservices, RabbitMQ event pipelines, enterprise integrations). Complex UI patterns that distract from content comprehension are anti-patterns.
* **Predictable Simplicity**: Static files and local imports eliminate runtime database failures, API latency, cold starts, and infrastructure costs.

---

## 2. Architecture Decision Records (ADRs)

### ADR-01: Static JSON (`db.json`) Over Backend API
* **Decision**: All project metadata, work experience, hero text, and contact information reside in a single local file: `db.json`.
* **Rationale**: Eliminates network roundtrips, database hosting, runtime API latency, and CORS configuration. Enables instantaneous client-side filtering and deterministic prerendering.
* **Implication**: Any content updates must be committed to `db.json`. Agents must never construct mock REST endpoints or Axios/Fetch wrappers around this data.

### ADR-02: Prerendered Static Site Generation (`vite-ssg`)
* **Decision**: Use `vite-ssg` with dynamic route discovery (`includedRoutes` in `src/main.js`).
* **Rationale**: Pre-renders every route (`/`, `/projects`, `/projects/:id`, `/experience`, `/contact`, `/404`) into fully formed static HTML at build time. Guarantees 100% crawlability for search engines, perfect OpenGraph previews, and instant first contentful paint (FCP).
* **Implication**: Any code executed during module evaluation or component `setup()` runs in Node.js at build time. Direct access to `window`, `document`, or `localStorage` must be wrapped in `typeof window !== 'undefined'` or placed in `onMounted()`.

### ADR-03: Reactive Composables Over Global State Stores
* **Decision**: Manage shared state (themes, project filters, contact details) via Vue 3 module-scoped reactive singletons (`ref`, `computed`) inside `src/composables/`.
* **Rationale**: The state requirements of this portfolio are strictly localized (e.g. active filter category, current theme, mobile drawer visibility). Pinia or Vuex would introduce boilerplate, bundle overhead, and cognitive complexity without tangible benefits.
* **Implication**: Do not install Pinia. If shared state is needed across components, place an exported `ref` at the top of a composable module.

### ADR-04: Native Web Platform Semantics
* **Decision**: Standard `<router-link>` for internal routes, `<a target="_blank">` for external links, and `<button type="button">` for UI actions.
* **Rationale**: Native HTML elements provide free keyboard navigation, tab order, screen reader semantics, and browser gesture support without custom JavaScript handlers.

---

## 3. Responsive Design Mental Model

* **Content-Driven, Not Device-Driven**: Breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`) represent points where content readability breaks, not target device dimensions.
* **Intrinsic & Fluid Sizing**:
  * Prefer auto-wrapping grids (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`) over rigid pixel column widths.
  * Use flexible units (`max-w-7xl`, `w-full`, `flex-1`) combined with sensible padding (`px-4 sm:px-6 lg:px-8`).
* **Header Preservation Rule**: The navbar must never cause horizontal scrolling on mobile viewports down to 375px. When space is constrained, reduce gaps (`gap-2 sm:gap-4`) or icon sizes before decreasing font readability.
* **Common Mistakes to Avoid**:
  * Hardcoding explicit pixel widths (`w-[540px]`) that overflow small screens.
  * Overriding font sizes at every breakpoint when standard responsive utility steps (`text-sm sm:text-base md:text-lg`) suffice.
  * Hiding critical information solely on mobile rather than stacking it naturally.

---

## 4. Design System Mental Model

* **Monochrome Palette**: The identity relies on high-contrast black, white, and subtle grays (`--color-bg`, `--color-text`, `--color-border`, `--color-surface`). Color is used sparingly (e.g. status dots in project detail or amber/emerald indicators).
* **Typography Duality**:
  * **Brand / Terminal**: `DotGothic16` (`font-dot`) reflects a technical, backend-oriented pixel aesthetic. Used for the brand monogram badge `[ H ]`, hero headings, system metrics, terminal prompts, and tech badges.
  * **Editorial / Body**: `Inter` / system sans-serif delivers high legibility, comfortable line height (`leading-relaxed`), and clean typographic hierarchy for long-form case studies and role descriptions.
* **Elevation & Surfaces**:
  * Light mode: Crisp white backgrounds, subtle border dividers (`rgba(0, 0, 0, 0.1)`), and strong black accents.
  * Dark mode: Deep charcoal surfaces (`#0f0f11`, `#1a1a1f`), subtle border highlights (`rgba(255, 255, 255, 0.1)`), and soft white text.
* **Borders Over Shadows**: Cards and buttons use crisp 1px borders (`border border-[var(--color-border)]`) rather than heavy drop shadows to preserve an editorial, minimalist aesthetic.

---

## 5. Portfolio Content Rules

* **Primary Professional Positioning**: Hadinata Jenta is a **Backend & Systems Engineer**. Emphasize:
  * High-concurrency Go microservices.
  * Event-driven message queuing with RabbitMQ (retry policies, dead-letter exchanges, idempotency).
  * Reliable data persistence with PostgreSQL, MySQL, and Redis caching.
  * Enterprise banking integrations at Bank Rakyat Indonesia (BRI).
* **De-emphasize / Avoid**:
  * Do not position as a pure frontend developer, UI/UX designer, or generic full-stack freelancer.
  * Do not emphasize obsolete tech stacks (e.g. PHP 5/jQuery) unless explicitly detailing a legacy-to-modern migration case study.
* **Confidentiality Boundaries**: Never detail internal server IPs, internal banking routing codes, raw proprietary schema dumps, or confidential business metrics. Describe systems through architectural principles, design patterns, and reliability trade-offs.

---

## 6. Case Study Writing Rules

When updating or adding project details in `db.json` and `ProjectDetail.vue`, structure content around engineering challenges rather than feature lists:

1. **Context & Problem**: What business or technical bottleneck existed? (e.g. manual batch scheduler failing under peak loan disbursement).
2. **Constraints**: What limitations existed? (e.g. zero-downtime requirements, legacy database schemas, strict bank security policies).
3. **Architecture & Ownership**: What was Hadinata's direct role? (e.g. designed the RabbitMQ consumer pipeline and Go worker pool).
4. **Decisions & Trade-offs**: Why was pattern X chosen over pattern Y? (e.g. chose optimistic locking over distributed Redis locks to minimize external dependencies).
5. **Reliability & Failure Modes**: How does the system handle network drops, unmarshal errors, or worker crashes? (e.g. dead-letter queues, exponential backoff retries).
6. **Result**: Tangible outcome (e.g. replaced hourly cron with real-time async processing, eliminating 3-hour batch delays).

---

## 7. Performance Mental Model

| Category | High Impact (Prioritize) | Low Impact (Avoid / Deprioritize) |
| :--- | :--- | :--- |
| **Assets** | Keeping images under 100 KB, using SVG favicons, serving modern formats. | Micro-compressing CSS by removing 2 class names. |
| **Rendering** | Prerendering full HTML with `vite-ssg`, zero layout shift on fonts. | Memoizing trivial getters that compute 5 items. |
| **Dependencies** | Keeping zero heavy runtime libraries (no Lodash, no Moment, no UI kits). | Writing bespoke custom implementations of standard Vue Router features. |
| **Hydration** | Ensuring SSR HTML matches client initial render (no hydration mismatch). | Refactoring clean reactive state into complex custom proxy objects. |

---

## 8. Common Refactoring Traps

* **The REST API Illusion**: Attempting to add an Express server, Mock Service Worker (MSW), or `fetch()` calls to load `db.json`. Local imports are faster, build-safe, and zero-maintenance.
* **The Component Split Trap**: Breaking a 50-line cohesive card component into 5 micro-components (`CardHeader`, `CardBody`, `CardFooter`, `CardBadge`, `CardIcon`). Favor cohesion over atomization.
* **The Responsive Over-Optimization Trap**: Adding 5 different breakpoint values (`w-full xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6`) where a single CSS auto-fit grid (`grid-cols-[repeat(auto-fit,minmax(280px,1fr))]`) achieves a smoother layout.
* **The Enterprise Pattern Trap**: Introducing dependency injection containers, repository patterns, or factory classes into Vue 3 templates. Vue 3 Composition API already provides clean dependency encapsulation.

---

## 9. When NOT to Refactor (Mandatory)

Do **NOT** refactor existing code when:

1. **The current code is simpler and already works**: Working simple code beats complex "elegant" code.
2. **The abstraction serves only one consumer**: Do not build generic helper functions for a task that occurs only once.
3. **The performance issue is purely theoretical**: Do not optimize loops or computed properties handling fewer than 100 items unless profiling shows measurable UI jank.
4. **The visual variation is intentional**: Differences between the hero section heading (`text-5xl font-dot`) and the navbar wordmark (`text-lg font-dot font-medium`) are intentional design hierarchy, not inconsistencies to be unified.
5. **A proposed package solves a 5-line problem**: Do not install packages for date formatting, clipboard copying, or scroll detection; native browser APIs (`navigator.clipboard`, `Intl.DateTimeFormat`, `IntersectionObserver`) are already sufficient.
