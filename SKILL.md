# Skill: Editorial Instrument Frontend — Portfolio Edition

A design discipline for personal portfolio sites that read like a precision
instrument: quiet, technical, editorial, unhurried. The output should feel
like a _practice documented with care_, not a marketing funnel.

---

## 0. When this skill does NOT fit

Be honest before starting. This aesthetic fails when:

- The person's work is loud, playful, or maximalist (illustration, fashion,
  music, motion design). A dark instrument frame will undersell them.
- The work is highly visual and needs full-bleed treatment (photography,
  print, art direction). Hairlines and small type get in the way.
- The audience is non-technical and expects warmth (coaching, wellness,
  education for kids). The cool restraint reads as cold.

This skill fits: engineers, product designers, design engineers,
researchers, technical founders, writers, editors, systems thinkers —
anyone whose work is _structural_ rather than _chromatic_.

If the person's practice doesn't fit, borrow the discipline (tokens,
motion, grid) but change the aesthetic entirely.

---

## 1. Core philosophy

**One practitioner. One body of work. One accent.**

- The site is a document, not a brochure. It should read like a well-set
  catalog, not a pitch deck.
- Structure comes from thin lines, numbered sections, and negative space —
  never from stacked cards or drop shadows.
- Typography carries hierarchy. Mono for metadata (year, role, medium),
  sans for prose. The contrast does the work.
- One accent color. It marks links, active state, and section numbers.
  Nothing else.
- Motion is a whisper. It confirms arrival, never performs.

Reference feeling: a Massimo Vignelli catalog, a Swiss design annual,
a technical manual for a camera. Not a Behance profile.

---

## 2. Design tokens

```css
:root {
  /* ---- color ---- */
  --bg:      /* near-black, slight blue cast — e.g. #06080F */
    --bg-2: /* secondary surface, one step up from bg */
      --fg: /* primary text, near-white but never pure #FFF */
      --fg-2: /* body copy, muted */ --fg-3: /* mono labels, quiet */
      --fg-4: /* faint structure, line numbers */ --line: rgba(fg, 0.09)
      --line-2: rgba(fg, 0.055) --line-str: rgba(fg, 0.16)
      --accent: /* single hue — see candidates below */
      --accent-30: /* accent at 30% for borders */
      --accent-12: /* accent at 12% for tinted fills */ /* ---- type ---- */
      --sans: "Instrument Sans",
    system-ui, sans-serif;
  --mono: "JetBrains Mono", ui-monospace, monospace;
  --fs-micro: 10px;
  --fs-mono: 11px;
  --fs-body: 15px;
  --fs-display-2: clamp(28px, 3.6vw, 52px);

  /* ---- space ---- */
  --s1..--s10: 4px → 136px geometric scale --gutter: clamp(18px, 4.4vw, 64px)
    --maxw: 1360px --topbar-h: 52px /* ---- reading measure ---- */
    --measure: 68ch;
  --measure-sm: 52ch;

  /* ---- motion ---- */
  --ease: cubic-bezier(0.16, 1, 0.3, 1)
    --ease-io: cubic-bezier(0.65, 0, 0.35, 1) --d-fast: 120ms --d-base: 180ms
    --d-slow: 260ms;
}
```

Accent candidates (pick one, never combine):

- #E8B44A warm gold — editorial, calm, literary
- #E85D3D burnt sienna — grounded, print-like
- #4EA1FF signal blue — technical, precise
- #8FA68E muted sage — restrained, natural

---

## 3. Typography

| Role             | Family | Weight | Size              | Tracking | Case      |
| ---------------- | ------ | ------ | ----------------- | -------- | --------- |
| Display headline | sans   | 500    | clamp(36→78px)    | -0.038em | Sentence  |
| Section title    | sans   | 500    | clamp(22→34px)    | -0.032em | Sentence  |
| Case study lede  | sans   | 400    | 18–20px           | 0        | Sentence  |
| Case study body  | sans   | 400    | 16–17px / lh 1.7  | 0        | Sentence  |
| Pull quote       | sans   | 400    | 22–26px / lh 1.35 | -0.01em  | Sentence  |
| Data value       | sans   | 500    | clamp(26→40px)    | -0.038em | as-is     |
| Mono label       | mono   | 400    | 11px              | 0.14em   | UPPERCASE |
| Mono micro       | mono   | 400    | 10px              | 0.16em   | UPPERCASE |
| Data row text    | mono   | 400    | 12px              | 0.01em   | as-is     |

Rules:

- Metadata is mono. Prose is sans. Never mixed inside a sentence.
- Numbers in data contexts: font-variant-numeric: tabular-nums.
- Uppercase only for short mono labels (≤ 4 words). Never uppercase a
  headline.
- text-wrap: balance on headlines.

---

## 4. Information architecture

Recommended sections:

1. Welcome / hero — name, one-line positioning, 2 links max
2. About / practice — 2–3 short paragraphs. Not a CV.
3. Selected work (index) — 4–8 items as rows, not cards
4. Case study 01 — numbered section, split layout
5. Case study 02 — split--reverse, columns flipped
6. Writing / talks / archive — optional, still as rows
7. Contact — a single line with an email. Weighted like a section.

Every section gets a numbered header with border-top. 01 … 07.

### The work index row

Instead of a QA ledger, the work index is a list of rows:

    Year    Project                          Role              Status
    2024    Northwind — design system        Lead designer     Live
    2023    Cartography of a checkout        Design engineer   Case study
    2023    Type specimen: Grotesk 42        Type designer     Archive
    2022    Field notes on component APIs    Writer            Essay

- Grid columns: 88px 1fr 180px 108px
- Mono for year/role/status, sans for project name
- Hairline dividers between rows
- Hover: opacity fade behind row (0.035), no color change
- Whole row is a link. aria-label on the row link.

---

## 5. The hero visual — earned, not borrowed

The QA tool used an orbit because the product _was_ an orbit. A
portfolio's hero visual must be derived from the person's practice.

Candidate metaphors (pick one, never combine):

- Type specimen — a large letter or set of letters at precise size with
  technical annotations (baseline, cap-height, side bearings). Fits
  type/editorial designers.
- Grid system — a modular grid diagram with real proportions annotated.
  Fits systems and product designers.
- Data portrait — a small generative plot from the person's actual work
  (commit cadence, publishing rhythm, project timelines). Fits engineers
  and researchers.
- Material study — a single rendered object in the person's medium (a
  page, a chip, a component) with callouts. Fits product/industrial.
- Typographic composition — the name or a phrase set distinctively, with
  technical measurement marks. Fits anyone, but must be set with real
  craft or it fails.

Rules:

- No stock illustrations. No abstract blobs. No 3D character. No AI art.
- No WebGL unless the person _builds_ WebGL.
- SVG + CSS geometry is enough for most portfolios.
- The visual must be reproducible by the person in their own tool
  (Figma, code, print). If they can't extend it, it doesn't belong.

---

## 6. Case study section skeleton

```html
<section class="sec" id="northwind" aria-labelledby="northwind-title">
  <div class="wrap">
    <header class="sec-head" data-reveal>
      <span class="sec-num">04</span>
      <h2 class="sec-title" id="northwind-title">Northwind</h2>
      <span class="sec-note">Design system · 2024 · Live</span>
    </header>

    <div class="split">
      <div class="split-copy" data-reveal>
        <p class="lede">One paragraph — what it was, what you did.</p>
        <ul class="specs">
          <li><span class="k">Role</span><span class="v">…</span></li>
          <li><span class="k">Team</span><span class="v">…</span></li>
          <li><span class="k">Stack</span><span class="v">…</span></li>
          <li><span class="k">Outcome</span><span class="v">…</span></li>
        </ul>
      </div>

      <div class="split-viz" data-reveal>
        <figure class="frame">
          <!-- SVG diagram, product fragment, or code panel -->
          <figcaption>
            <span>Fig. 04 — component inventory</span>
            <span>42 primitives / 8 patterns</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>
```

Alternate split and split--reverse on adjacent projects so the eye
zigzags down the page.

Rules for case study figures:

- Never a full-bleed screenshot with fake browser chrome.
- Prefer one fragment — a single component, flow, or diagram —
  annotated with mono labels.
- If showing real product screenshots, crop tight and caption
  technically. No perspective mockups.

---

## 7. Long-form prose rules

- Max --measure width (68ch). Never full width.
- Paragraph spacing: 1.2em via margin-top, no text-indent.
- One idea per paragraph. Three to five sentences max.
- Headings inside a case study use the numbered pattern: 04.1, 04.2 —
  mono, accent color, small.
- Pull quotes set in sans at 22–26px, with a single accent rule above.
  One per case study, maximum.

---

## 8. Contact section

A portfolio's contact is not a footer. It's a section.

- Numbered header like all others.
- One line of prose: what you're open to, if anything.
- One link: mailto or a single form field. Not both.
- No "let's chat" language. No emoji. No calendar embed.

```html
<section class="sec" id="contact" aria-labelledby="contact-title">
  <div class="wrap">
    <header class="sec-head">
      <span class="sec-num">07</span>
      <h2 class="sec-title" id="contact-title">Contact</h2>
      <span class="sec-note">Open to selected projects</span>
    </header>
    <p class="lede">One sentence.</p>
    <a class="btn btn--primary" href="mailto:…">hello@example.com</a>
  </div>
</section>
```

---

## 9. Motion

Same rules as base skill: transform + opacity only, custom cubic-bezier
easings, sub-300ms durations, IntersectionObserver reveals, full
prefers-reduced-motion contract.

Portfolios have less justification for ambient motion than tools, so
use it more sparingly. If the hero has a moving element, nothing else
on the page should move except reveals.

---

## 10. Anti-patterns

In addition to base skill's forbidden list:

- No avatar/headshot in hero at large size
- No "Currently at [Company]" badge as primary hero content
- No grid of 6 equal project cards with thumbnails
- No testimonial carousel
- No process diagram with 4 steps and arrows
- No "Skills" section with progress bars or tag clouds
- No email signup in footer
- No autoplay video in hero
- No logo wall of "companies I've worked with"
- No count of followers, stars, or downloads
- No drop shadows, glassmorphism, border-radius > 4px
- No gradient purple-blue
- No animation of anything other than transform / opacity
- No animate-on-load (only animate on scroll-into-view)
- The word "passionate" appears zero times

---

## 11. Applying to an EXISTING site

Redesigning an existing portfolio is not the same as building fresh.
The constraint is inventory, not imagination.

### Step 1 — Audit (before writing any code)

List every existing page and classify:

    | Page / section   | Type | Keep | Restyle | Rewrite | Cut |
    |------------------|------|------|---------|---------|-----|
    | Home             | Hero |      | ✓       | ✓       |     |
    | About            | Prose|      |         | ✓       |     |
    | Project: X       | Case |      | ✓       |         |     |
    | Blog index       | List |      | ✓       |         |     |
    | Old contact form | Form |      |         |         | ✓   |

Do not redesign before you've decided what to cut. Most portfolios have
30–50% dead weight. Removing is the first design decision.

### Step 2 — Content rewrite pass

Before touching CSS:

- Rewrite every headline to ≤ 8 words.
- Rewrite every project description to ≤ 3 sentences.
- Extract one technical caption per figure (what it is, how many, year).
- Collect all metadata (year, role, medium, stack, outcome) into a
  single key-value list per project.

The redesign is 60% writing, 40% styling.

### Step 3 — Tokenize before styling

- Open current CSS. List every unique color. Consolidate to token set.
  Expect to delete 20–30 colors.
- List every font-size. Consolidate to type scale.
- List every transition. Consolidate to --d-fast / --d-base / --d-slow.
- Do not restyle a single component until tokens are locked.

### Step 4 — Section-by-section refactor

Work top-down, one section at a time. For each:

1. Replace wrapper with .wrap + .sec + .sec-head.
2. Replace cards with rows or splits.
3. Replace prose with new copy from step 2.
4. Add data-reveal and wire IntersectionObserver once, globally.
5. Test at 360px before moving to the next section.

Do not refactor two sections in parallel. The design system drifts.

### Step 5 — Delete the old CSS

At the end, delete every old rule that isn't used. Do not leave legacy
styles. If a component isn't in the new site, its CSS goes too.

### Step 6 — Accessibility and performance pass

- focus-visible visible on every link and button.
- Every image has real alt text (portfolio images must describe content,
  not just say "project screenshot").
- Reduced motion verified in browser devtools.
- Lighthouse ≥ 95 on all four categories.
- Total page weight < 500kb if no WebGL. < 1.5MB if WebGL.

---

## 12. Delivery checklist

- [ ] Every project is a row in the index, not a card
- [ ] Every case study uses the numbered section pattern
- [ ] Metadata is mono, prose is sans, never mixed
- [ ] Hero visual is derived from the person's actual practice
- [ ] Contact is a numbered section, not a footer afterthought
- [ ] Word "passionate" appears zero times
- [ ] Dead pages from audit have been removed, not hidden
- [ ] Old CSS has been deleted, not commented out
- [ ] Every figure has a technical caption with a count or year
- [ ] At least one project was cut during the audit
- [ ] One accent, used in ≤ 8 places total
- [ ] Works at 360px without horizontal scroll
- [ ] focus-visible outline visible on all interactive elements
- [ ] prefers-reduced-motion honored in CSS and JS
