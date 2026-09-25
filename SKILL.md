# Skill: Editorial Instrument Frontend — Portfolio Edition

A design discipline for personal portfolio sites that read like a precision
instrument: quiet, technical, editorial, unhurried. The output should feel
like a _practice documented with care_, not a marketing funnel.

This is a variant of the base Editorial Instrument skill, adapted for
sites that present a person's work rather than a live tool.

---

## 0. When this skill does NOT fit [NEW]

Be honest before starting. This aesthetic fails when:

- The person's work is **loud, playful, or maximalist** (illustration,
  fashion, music, motion design). A dark instrument frame will
  undersell them.
- The work is **highly visual** and needs to be seen at full bleed
  (photography, print, art direction). Hairlines and small type get in
  the way.
- The audience is **non-technical and expects warmth** (coaching,
  wellness, education for kids). The cool restraint reads as cold.

This skill fits: engineers, product designers, design engineers,
researchers, technical founders, writers, editors, systems thinkers,
anyone whose work is _structural_ rather than _chromatic_.

If the person's practice doesn't fit, borrow the discipline
(tokens, motion, grid) but change the aesthetic entirely.

---

## 1. Core philosophy

**One practitioner. One body of work. One accent.** [CHANGED]

- The site is a _document_, not a _brochure_. It should read like a
  well-set catalog, not a pitch deck.
- Structure comes from **thin lines, numbered sections, and negative
  space** — never from stacked cards or drop shadows.
- Typography carries hierarchy. Mono for metadata (year, role, medium),
  sans for prose. The contrast does the work.
- One accent color. It marks links, active state, and section numbers.
  Nothing else.
- Motion is a whisper. It confirms arrival, never performs.

Reference feeling: a Massimo Vignelli catalog, a Swiss design annual,
a technical manual for a camera. Not a Behance profile.

---

## 2. Design tokens

Same token structure as the base skill. Two additions for portfolio: [CHANGED]

```css
:root {
  /* ... color, type, space, motion — same as base ... */

  /* NEW: reading measure for long-form case studies */
  --measure: 68ch;
  --measure-sm: 52ch;

  /* NEW: an extra large type step for project titles in index */
  --fs-display-2: clamp(28px, 3.6vw, 52px);
}
```
