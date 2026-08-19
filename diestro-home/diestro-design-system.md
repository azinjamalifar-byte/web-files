# DIESTRO COFFEE — Style System
> Two canvases, one rare accent. A navy-and-gold identity extracted from Diestro's own proposal deck and packaging — disciplined the way a museum label is disciplined: say less, in the right weight.

**Theme:** dual (deep navy + warm cream, alternating full-viewport sections)

**Source of truth:** every value below was sampled directly from real Diestro artifacts, not invented or borrowed from a reference site:
- `AzinJamalifarDiestroProposal.pdf` — pixel-sampled from the rendered slides (cover, problem cards, principle pills, pricing cards)
- `01-diestro-logo-transparent.png` — the brand mark
- Product packaging photography (Alto, Sereno, Bizarro, Ciento, Duro, Unico, Ciento, Lienzo, Sabio, Rico, Encanto, Mercado)

The Oryzo `DESIGN.md` supplied alongside this system was used **only** as a structural reference — for the *level* of token discipline, the idea of one rare accent, and weight-driven hierarchy. None of its colors, type, or values appear below.

The Diestro system reads as: a proposal deck that already knew what it was. Deep navy canvas, a second warm-cream canvas for product/trust moments, and exactly one accent — an antique gold — that shows up only where the source document itself used it: numerals, eyebrows, a single highlighted card per group, and price emphasis. It never fills a button.

## Tokens — Colors

### Core (6 — the entire brand palette)

| Name | Value | Token | Role |
|------|-------|-------|------|
| Deep Navy | `#003057` | `--color-navy-deep` | Dark-canvas background — sampled from the proposal cover and the logo mark itself (`#003058`, effectively identical). Also reused as primary text color on cream surfaces — one hue, two jobs. |
| Elevated Navy | `#0b416a` | `--color-navy-surface` | Card/elevated surface on the dark canvas — the one chromatic step up from Deep Navy, sampled from the proposal's unselected problem-cards and pricing panel. |
| Warm Cream | `#f5f1e8` | `--color-cream-canvas` | Light-canvas background — sampled from the proposal's principle-pill and pricing pages. |
| Cream Surface | `#eae3d3` | `--color-cream-surface` | Card/elevated surface on the light canvas — one step down from Warm Cream, sampled from the proposal's unselected principle pills. |
| Antique Gold | `#977124` | `--color-gold-accent` | The single accent. Sampled identically in three independent places in the proposal — the cover headline, the price figures, and the bullet dots — confirming it's a deliberate, consistent brand color, not a slide-theme default. Reserved for numerals, eyebrows, one highlighted card per group, and price emphasis. **Never a button fill.** |
| Paper White | `#ffffff` | `--color-white` | Text and iconography on dark surfaces — sampled from proposal card headings. |

### Structural neutrals (derived, not sampled — the connective tissue between the two canvases)

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ink Soft | `#7f94a2` | `--color-ink-soft` | Secondary/muted text on cream surfaces. |
| Cream Soft | `#99afc0` | `--color-cream-soft` | Secondary/muted text on navy surfaces. |
| Border Dark | `#2d5c7f` | `--color-border-dark` | Hairline dividers and card outlines on the navy canvas. |
| Border Light | `#c9cac2` | `--color-border-light` | Hairline dividers and card outlines on the cream canvas. |

### Product-line accents (a separate sub-palette — not part of the brand's one-accent rule)

Sourced from real packaging label colors. Each SKU carries its own identity color, used **only** as a small flavor-note dot and profile bar inside that product's own card — never promoted to page-level UI.

| Product | Value | Token |
|---|---|---|
| Alto | `#0d6944` | `--color-line-green` |
| Sereno | `#8a6427` | `--color-line-tan` |
| Bizarro | `#1d6fa5` | `--color-line-blue` |
| Ciento | `#a6453b` | `--color-line-terracotta` |

Why two accent systems and not one: the gold is the *brand's* rare emphasis — it marks "this is the important thing on the page." Product-line colors mark "this is which product," a different, lower-stakes job that happens every time a product card renders. Conflating them would either bury the gold in noise or force every product photo to compete with the brand's one accent.

## Tokens — Typography

### Vazirmatn — the workhorse. Self-hosted, Arabic+Latin subset. Carries every piece of Persian content on the site: headings, body, navigation, buttons, labels. Hierarchy comes from **weight**, the way Oryzo's system uses case — Persian has no uppercase, so weight is the signal that does the job case does elsewhere. · `--font-vazirmatn`
- **Weights used:** 400 (body), 500 (UI/labels), 600 (subheadings), 700 (nav/buttons), 800 (headlines)
- **Line height:** 1.16–1.7, tightening as size increases
- **Role:** The only typeface for Persian text, at every scale. No sentence-case/heading-weight ambiguity: weight ≥700 always means "label or heading," weight 400 always means "body copy."

### Fraunces — the accent voice. Latin-only, used sparingly for English brand moments: the "DIESTRO COFFEE" eyebrow, product names (ALTO, SERENO, BIZARRO, CIENTO), and step numerals. Never touches Persian text. · `--font-fraunces`
- **Weights:** 500 (product names), 600 normal (subheads), 600 italic (eyebrows)
- **Role:** A deliberately *different* typeface signals "this is a brand moment, not a reading moment" — the same logic Oryzo uses when it drops to Arial for legal text, inverted: here the shift marks emphasis, not subordination.

### Type Scale

| Role | Size | Weight | Line Height | Token |
|------|------|--------|-------------|-------|
| eyebrow | 13px | Fraunces 600 italic | 1 | `--text-eyebrow` |
| caption | 13px | Vazirmatn 500 | 1.4 | `--text-caption` |
| body | 16px | Vazirmatn 400 | 1.7 | `--text-body` |
| body-lg | 17px | Vazirmatn 400 | 1.7 | `--text-body-lg` |
| label | 15px | Vazirmatn 600 | 1.3 | `--text-label` |
| heading-sm | 22px | Vazirmatn 700 | 1.3 | `--text-heading-sm` |
| heading-md | clamp(1.9rem, 4.5vw, 3rem) | Vazirmatn 800 | 1.22 | `--text-heading-md` |
| display | clamp(2.3rem, 8vw, 4.6rem) | Vazirmatn 800 | 1.16 | `--text-display` |

## Tokens — Spacing & Shapes

**Density:** generous — full-viewport sections need room to breathe; a 4px base grid keeps every gap predictable.

### Spacing Scale (4px base)

| Name | Value | Token |
|------|-------|-------|
| 1 | 4px | `--space-1` |
| 2 | 8px | `--space-2` |
| 3 | 12px | `--space-3` |
| 4 | 16px | `--space-4` |
| 5 | 24px | `--space-5` |
| 6 | 32px | `--space-6` |
| 7 | 48px | `--space-7` |
| 8 | 64px | `--space-8` |
| 9 | 96px | `--space-9` |
| 10 | 128px | `--space-10` |
| 11 | 192px | `--space-11` |

Every margin, gap, and padding on the site resolves to one of these eleven values — no arbitrary pixel figures in component CSS.

### Border Radius (4 values — the entire vocabulary)

| Element | Value | Token |
|---------|-------|-------|
| tags, badges, small controls | 8px | `--radius-sm` |
| cards, product media frames | 20px | `--radius-md` |
| large feature panels, hero visual frame | 32px | `--radius-lg` |
| buttons, pill-shaped highlight cards | 9999px | `--radius-pill` |

Sourced from the proposal's own two card shapes: the moderately-rounded rectangular problem/pricing cards (~20px) and the fully-pill principle cards (page 5) and CTA button (page 9).

## Components

### Primary Button (Filled)
**Role:** The one solid CTA per section — inverse-filled, never gold

Pill radius, weight 700, uppercase-tracked, `--space-3` `--space-6` padding. **On navy canvas:** Warm Cream fill, Deep Navy text — sourced directly from the "اول موبایل" button on the proposal's Bizarro product card (page 9). **On cream canvas:** Deep Navy fill, Warm Cream text — the inverse pairing, sourced from the solid-navy "اول برند" pill on the proposal's principle page (page 5). One filled button per section; restraint is the signal, exactly as the source deck uses it — a single filled surface per slide, never more.

### Ghost Button
**Role:** Secondary action — border only, no fill

Pill radius, 1.5px border in the surface's ink color (Cream on navy, Navy on cream), transparent background, same text color as border. Border does the work; no fill needed.

### Text Link
**Role:** Inline navigation and footer links

0px radius, transparent, underline-on-hover only. No container.

### Highlight Card (Solid Gold)
**Role:** The single most important item in a numbered group — never more than one at a time

`--radius-md`, Antique Gold fill, Paper White text. Sourced from the proposal's own pattern: exactly one of every 5–7 numbered cards is solid gold (the current problem being solved, the featured flavor profile, the active roast step). This is gold's *only* fill use anywhere in the system.

### Content Card (Surface)
**Role:** Standard card — the default container

`--radius-md`, Elevated Navy surface on the dark canvas or Cream Surface on the light canvas, no shadow (depth comes from the two-step surface stack, not blur — same principle as the Oryzo reference, applied to two canvases instead of one).

### Neutral Tag / Badge
**Role:** Low-emphasis label — roast level, "new," "coming soon"

`--radius-sm` or `--radius-pill`, low-opacity tint of the surrounding surface, never gold — tags are frequent and gold must stay rare.

### Eyebrow Label
**Role:** Section kicker — appears once per section header

Fraunces 600 italic, Antique Gold, `13px`, uppercase tracking, paired with a short hairline rule. Sourced from the proposal's own small gold kicker labels ("فرصت‌های خلاق," "هزینه پروژه") that sit above every section heading.

### Hairline Divider
**Role:** Structural separator, never decorative

1px solid, Border Dark or Border Light depending on canvas. Used only where it carries meaning (between a heading and its supporting stat row), never as page decoration.

### Product Flavor Dot / Bar
**Role:** Per-SKU identity marker inside product cards only

4–7px dot or bar in the product's own line-accent color (see Product-line accents above). Confined entirely to its own card — never appears in navigation, buttons, or section chrome.

## Do's and Don'ts

### Do
- Use `#977124` (Antique Gold) only for numerals, eyebrows, one highlighted card per group, and price/stat emphasis — the same restraint the source deck itself uses across 17 slides.
- Reuse Deep Navy (`#003057`) as both the dark canvas *and* the text color on cream surfaces — one token, two roles, which is what the proposal itself does.
- Signal heading vs. body through Vazirmatn weight (800/700 vs. 400), not size alone.
- Alternate full-viewport navy and cream sections — this rhythm is already in both the proposal and the current live site; it is Diestro's own pattern, not an Oryzo import.
- Use real product photography as the visual centerpiece of every product-focused section — never a 3D render or stock photo.

### Don't
- Never fill a button with gold — gold is editorial/numeric emphasis only, exactly as it behaves in the source deck (no gold buttons appear anywhere in the 17 rendered slides).
- Never use more than one gold-filled Highlight Card per group of cards — restraint is the entire point.
- Never use a border-radius outside the four defined values.
- Never use a spacing value outside the eleven-step 4px scale.
- Never promote a product's line-accent color (green/tan/blue/terracotta) outside its own card — those colors mean nothing to the brand's identity system, only to that one SKU.
- Never add drop shadows to cards or buttons — depth comes from the surface-step stack, not blur.

## Surfaces

| Canvas | Level | Name | Value | Purpose |
|---|-------|------|-------|---------|
| Dark | 0 | Deep Navy | `#003057` | Full-bleed section background |
| Dark | 1 | Elevated Navy | `#0b416a` | Card surface, the only elevated solid on dark |
| Light | 0 | Warm Cream | `#f5f1e8` | Full-bleed section background |
| Light | 1 | Cream Surface | `#eae3d3` | Card surface, the only elevated solid on light |
| Both | accent | Antique Gold | `#977124` | Single-item emphasis on either canvas |

## Elevation

No shadows anywhere in the system. Depth on the dark canvas is a one-step luminance move (`#003057` → `#0b416a`); on the light canvas, the same move in the opposite direction (`#f5f1e8` → `#eae3d3`). This mirrors the Oryzo reference's shadow-free philosophy exactly, just doubled to cover both of Diestro's canvases instead of one.

## Layout — the repeating full-viewport pattern

Both the Roasting Story and Featured Products sections (and any future product-focused section) follow one fixed pattern, the direct equivalent of Oryzo's "Product Reveal":

- **100svh minimum height**, Deep Navy canvas.
- **Centered visual** — the real product photograph or the bean-state illustration — occupying the vertical and horizontal center.
- **Eyebrow + heading** above the visual, using the defined type scale.
- **Supporting copy** flanking or beneath the visual at a fixed `--space-6` gutter.
- **A numbered progress indicator** (dots or step counter) only where the content is a genuine sequence — the roast steps are literally ordered; a features grid is not, and does not get numbers.

Reused verbatim across every product-focused section so the site reads as one system, not a set of one-off page layouts.

## Agent Prompt Guide

### Quick Color Reference
- background (dark canvas): `#003057`
- background (light canvas): `#f5f1e8`
- surface (dark): `#0b416a`
- surface (light): `#eae3d3`
- text (on dark): `#ffffff`
- text (on light): `#003057`
- accent: `#977124` — numerals, eyebrows, one highlight per group, never buttons
- primary action (dark canvas): Warm Cream fill, Deep Navy text
- primary action (light canvas): Deep Navy fill, Warm Cream text

### Example Component Prompts

1. **Hero Lockup:** Full-bleed Deep Navy (`#003057`) canvas. Eyebrow "DIESTRO COFFEE" in Fraunces 600 italic, Antique Gold (`#977124`), 13px, uppercase tracking. Headline in Vazirmatn 800, Paper White, with the single emphasized phrase in Antique Gold — never more than one gold phrase per headline.

2. **Primary Button (dark canvas):** Pill radius, Warm Cream (`#f5f1e8`) fill, Deep Navy (`#003057`) text, Vazirmatn 700, `--space-3` `--space-6` padding. One per section, maximum.

3. **Highlight Card:** `--radius-md`, Antique Gold (`#977124`) fill, Paper White text, reserved for exactly one card in a numbered group — the current step, the featured price tier, the active flavor profile.

4. **Content Card:** `--radius-md`, Elevated Navy (`#0b416a`) surface on dark canvas or Cream Surface (`#eae3d3`) on light canvas, no shadow, 1px Border Dark/Light outline only where separation is needed.

5. **Product Card:** Real product photography, `--radius-md` media frame, product name in Fraunces 500, one flavor-note dot in the product's own line-accent color — never the brand gold.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Core colors */
  --color-navy-deep: #003057;
  --color-navy-surface: #0b416a;
  --color-cream-canvas: #f5f1e8;
  --color-cream-surface: #eae3d3;
  --color-gold-accent: #977124;
  --color-white: #ffffff;

  /* Structural neutrals */
  --color-ink-soft: #7f94a2;
  --color-cream-soft: #99afc0;
  --color-border-dark: #2d5c7f;
  --color-border-light: #c9cac2;

  /* Product-line accents (sub-palette, card-scoped only) */
  --color-line-green: #0d6944;
  --color-line-tan: #8a6427;
  --color-line-blue: #1d6fa5;
  --color-line-terracotta: #a6453b;

  /* Typography */
  --font-vazirmatn: "Vazirmatn", "Tahoma", sans-serif;
  --font-fraunces: "Fraunces", "Georgia", serif;

  --text-eyebrow: 13px;
  --text-caption: 13px;
  --text-body: 16px;
  --text-body-lg: 17px;
  --text-label: 15px;
  --text-heading-sm: 22px;
  --text-heading-md: clamp(1.9rem, 4.5vw, 3rem);
  --text-display: clamp(2.3rem, 8vw, 4.6rem);

  /* Spacing (4px base) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;
  --space-11: 192px;

  /* Border radius (4 values, the entire vocabulary) */
  --radius-sm: 8px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --radius-pill: 9999px;
}
```
