# AGENTS.md — Repository Instructions for AI Agents

General operational guidelines and repository rules for AI coding agents working on the personal portfolio codebase of Hadinata Jenta.

---

## 1. Project Overview

This repository is a personal engineering portfolio for **Hadinata Jenta**, a Backend & Systems Engineer specializing in Go microservices, event-driven architectures (RabbitMQ), and enterprise integrations at Bank Rakyat Indonesia.

The site is built with **Vue 3**, styled with **Tailwind CSS v4** and CSS theme tokens, and statically prerendered using **vite-ssg**. All portfolio data is statically sourced from a single local database file (`db.json`).

---

## 2. Architecture

* **Framework**: Vue 3 (v3.5.x) using Composition API with `<script setup>`.
* **Build System**: Vite (v7.x) with `@vitejs/plugin-vue` and `@tailwindcss/vite`.
* **Prerendering (SSG)**: `vite-ssg` builds 13+ static HTML pages into `dist/` at build time. Dynamic routes (`/projects/:id`) are discovered via `includedRoutes()` in `src/main.js`.
* **Postbuild Processing**: `scripts/generate-sitemap.mjs` generates `sitemap.xml` for both `public/` and `dist/`, and creates flat `.html` aliases in `dist/` (e.g. `dist/projects.html`, `dist/404.html`) for clean URL resolution across static hosts.
* **Routing**: `vue-router` (v4.x) with HTML5 history mode, prerendered into static HTML files by `vite-ssg`.
* **Styling**: Tailwind CSS v4 `@theme` tokens and semantic CSS custom properties in `src/style.css` supporting light and dark themes.
* **State Management**: Lightweight Vue 3 reactive singletons (`ref`, `computed`) housed in domain composables (`src/composables/`). No external state library (Pinia/Vuex) is used.
* **Data Layer**: Static local JSON (`db.json`) imported via `src/data/localDb.js`. No runtime database or backend API server.
* **Hosting / Deployment**: Configured for Vercel static deployment via `vercel.json` with canonical redirect rules and clean URLs.

---

## 3. Important Directories

* [`src/views/`](file:///Users/erendt/Code/portofolio/src/views): Route-level page components (`LandingPage.vue`, `Projects.vue`, `ProjectDetail.vue`, `Experience.vue`, `Contact.vue`, `NotFound.vue`).
* [`src/components/`](file:///Users/erendt/Code/portofolio/src/components): Reusable UI components:
  * `common/`: Shared building blocks (`HeroSection.vue`, `BaseButton.vue`, `BaseCard.vue`, `AboutSection.vue`).
  * `layout/`: Global layout components (`Header.vue`, `Footer.vue`).
  * `projects/`: Project archive, cards, table rows, and detail section tabs (`detail/sections/`).
  * `ui/`: Floating utilities (`ThemeToggle.vue`).
* [`src/composables/`](file:///Users/erendt/Code/portofolio/src/composables): Domain logic and reactive singletons (`useProjectsData.js`, `useTheme.js`, `useContactData.js`, `useHeroData.js`, `useExperienceData.js`, `useFooterData.js`, `useAboutData.js`).
* [`src/data/`](file:///Users/erendt/Code/portofolio/src/data): Data adapters (`localDb.js` re-exporting `db.json`).
* [`src/router/`](file:///Users/erendt/Code/portofolio/src/router): Route definitions in `index.js`.
* [`src/layouts/`](file:///Users/erendt/Code/portofolio/src/layouts): Global wrapper (`DefaultLayout.vue`) with skip links, header, main container, footer, and theme toggle.
* [`public/`](file:///Users/erendt/Code/portofolio/public): Static assets served directly at the root (favicon suite, `Me2.png`, `diagrams/`, `manifest.json`, `robots.txt`, `sitemap.xml`, `Hadinata_Jenta_Latest.pdf`).
* [`scripts/`](file:///Users/erendt/Code/portofolio/scripts): Node.js build automation scripts (`generate-sitemap.mjs`).
* [`db.json`](file:///Users/erendt/Code/portofolio/db.json): Single source of truth for portfolio content (projects, experiences, hero text, contact methods, social links).

---

## 4. Development Commands

The repository uses npm. All available commands from `package.json`:

```bash
# Install dependencies
npm install

# Start local development server (Vite dev server)
npm run dev

# Run full production build (SSG prerender + sitemap generation)
npm run build

# Preview the built production dist directory locally (http://localhost:4173)
npm run preview
```

> **Testing, Linting & Formatting**: Not currently configured in `package.json`. Always run `npm run build` to validate template syntax, imports, and SSR/SSG compatibility.

---

## 5. Coding Rules

* **Vue 3 Composition API**: Always use `<script setup>`. Do not use the Options API.
* **Component Responsibility**: Views manage page-level metadata (`useHead`), layout composition, and route params. Components handle presentation and localized interaction. Composables handle data transformation and reactive state.
* **Composables**: Keep composables focused on a single domain. Export reactive refs and computed properties. Do not create composables for single-use trivial template logic.
* **SSR/SSG Safety**: Guard any browser-only APIs (`window`, `document`, `localStorage`, `matchMedia`) with `typeof window !== 'undefined'` checks. Code in module scopes or setup functions executes in Node.js during `vite-ssg build`.
* **State Ownership**: Centralize state in existing composables (`src/composables/`). Do not introduce Pinia, Vuex, or ad-hoc global event buses.
* **Routing**: Use `<router-link>` for internal navigation. Use standard `<a>` with `target="_blank"` and `rel="noopener noreferrer"` for external links. Never attach `@click` handlers to `div` or `span` for routing.
* **Styling Conventions**:
  * Use Tailwind CSS v4 utility classes.
  * Use semantic CSS variables (`var(--color-text)`, `var(--color-bg)`, `var(--color-border)`, `var(--color-surface)`) defined in `src/style.css`.
  * Do not hardcode raw hex colors in component templates when theme tokens exist.
* **Pixel Typography**: The `font-dot` class (`DotGothic16`) is reserved for the brand identity (brand mark, hero headings, tech badges, terminal labels, and stats). Do not apply `font-dot` to long-form body text or paragraphs.

---

## 6. Responsive Design Rules

* **Mobile-First Approach**: Write base styles for mobile viewports (`< 640px`), layer progressive enhancements with `sm:`, `md:`, `lg:`, and `xl:`.
* **Standard Container Strategy**: Keep layout widths bound to `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` as defined in `DefaultLayout.vue`.
* **Header Constraints**: Header height must remain locked at `h-16` (64px). Ensure brand wordmark and action buttons fit within 375px screens without horizontal scroll.
* **Touch Targets**: Interactive elements on mobile must have a minimum touch target of 36x36px to 44x44px.
* **Intrinsic Layouts**: Prefer CSS Grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) and Flexbox over fixed pixel widths. Avoid unnecessary custom breakpoints.

---

## 7. Performance Rules

* **Zero Heavy Dependencies**: Do not add runtime animation libraries, UI component libraries, or charting libraries. Keep the bundle lightweight.
* **Image Optimization**:
  * Keep source images in `public/` web-optimized (PNG/WebP/SVG). Avoid uncompressed multi-megabyte assets.
  * Always provide explicit `alt` attributes on images.
  * Use vector SVGs (such as `favicon.svg`) where resolution independence is required.
* **Prerendering Considerations**: Because the site uses SSG, avoid expensive runtime computations on initial load. Compute filters and summaries in composables using `computed`.
* **Fonts**: `DotGothic16` and `Inter` are loaded via Google Fonts with `preconnect` in `index.html`. Do not add additional font families.

---

## 8. Accessibility Rules

* **Semantic HTML First**: Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`, and `<a>`.
* **Skip Link**: Preserve the skip-to-content link in `DefaultLayout.vue` (`<a href="#main-content">Skip to content</a>`) pointing to `<main id="main-content" tabindex="-1">`.
* **Keyboard Accessibility**:
  * Ensure all interactive elements have visible focus rings (`focus-visible:ring-2`).
  * Modals and mobile drawers must close on `Escape` key press.
  * Modal overlays must lock body scroll and trap focus when active.
* **Screen Reader Labels**: Decorative icons and brand marks must have `aria-hidden="true"`. Icon-only buttons must have descriptive `aria-label` attributes.
* **Color Contrast**: Verify that text satisfies WCAG AA contrast in both light mode and dark mode against background tokens.

---

## 9. Data & Security

* **Public Nature of Data**: All data in `db.json` and `src/` is bundled and delivered to the client as static JavaScript/HTML. Treat all content in this repository as entirely public.
* **No Secrets**: Never commit API keys, private tokens, passwords, or personal credentials.
* **Enterprise Confidentiality**: Content describing projects at Bank Rakyat Indonesia (BRI) or previous companies must respect confidentiality. Never include private internal IP addresses, production database credentials, unreleased proprietary code, or confidential customer data.
* **Direct Asset Access**: Files placed in `public/` are served at the web root `/`. Keep file names organized and avoid leaving unused temporary files in `public/`.

---

## 10. Change Safety Workflow

When modifying code in this repository, follow this sequence:

1. **Inspect**: Read relevant files, composables, and data structures.
2. **Make Focused Change**: Modify only the necessary files. Avoid sweeping refactors.
3. **Build**: Execute `npm run build` and ensure `vite-ssg build` and `generate-sitemap.mjs` succeed with 0 errors.
4. **Verify Routes**: Check affected routes (`/`, `/projects`, `/projects/:id`, `/experience`, `/contact`, `/404`).
5. **Verify Themes & Viewports**: Check both Light and Dark themes, and verify layout at 375px, 430px, and desktop widths.

---

## 11. Things Agents Must NOT Do

* **DO NOT** add Pinia, Vuex, or any state management library.
* **DO NOT** convert static `db.json` imports into mock REST API or fetch services.
* **DO NOT** remove or break `includedRoutes()` in `src/main.js` (this will break SSG builds).
* **DO NOT** change canonical URLs or page routes without explicit user instruction (affects SEO).
* **DO NOT** add arbitrary fonts or heavy UI component libraries (e.g. Vuetify, Element Plus, Bootstrap).
* **DO NOT** invent false metrics, exaggerated achievements, or fake companies in `db.json`.
* **DO NOT** break the 64px header height constraint or modify navigation structure when editing wordmarks.
* **DO NOT** commit placeholder or "Lorem ipsum" copy to production views.
