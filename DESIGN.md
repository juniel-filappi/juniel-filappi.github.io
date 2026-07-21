---
version: alpha
name: Juniel Filappi Portfolio
description: A precise technical portfolio for recruiters and prospective clients.
colors:
  primary: "#1c69d4"
  primary-active: "#0653b6"
  ink: "#262626"
  body: "#3c3c3c"
  muted: "#6b6b6b"
  muted-soft: "#9a9a9a"
  hairline: "#e6e6e6"
  hairline-strong: "#cccccc"
  canvas: "#ffffff"
  surface-soft: "#f7f7f7"
  surface-card: "#fafafa"
  surface-strong: "#ebebeb"
  surface-dark: "#1a2129"
  surface-dark-elevated: "#262e38"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-dark-soft: "#bbbbbb"
  success: "#167d3f"
  warning: "#a96000"
  error: "#c62828"
typography:
  display-xl:
    fontFamily: "'Google Sans Bold', 'Segoe UI', sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0"
  display-lg:
    fontFamily: "'Google Sans Bold', 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0"
  display-md:
    fontFamily: "'Google Sans Bold', 'Segoe UI', sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0"
  title:
    fontFamily: "'Google Sans Bold', 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0"
  body:
    fontFamily: "'Google Sans Regular', 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "'Google Sans Bold', 'Segoe UI', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  xs: "2px"
  sm: "4px"
  full: "9999px"
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "clamp(64px, 8vw, 96px)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
    height: "48px"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "13px 31px"
    height: "48px"
  hero-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "clamp(64px, 8vw, 96px)"
  project-panel:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "24px"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    height: "64px"
---

# Design System: Juniel Filappi Portfolio

## Overview

**Creative North Star: "Precision Engineering Showcase"**

The interface borrows the measured rhythm of a corporate automotive system and
adapts it to software engineering. Pure white editorial surfaces alternate with
focused dark bands. Strong headings, light body copy, strict alignment, and one
blue action color create a technical and settled tone.

The system rejects generic developer-template decoration. Work evidence replaces
cartoon illustrations, code rain, and ornamental gradients. The visual language
must feel constructed, not decorated.

Key characteristics:

- White is the default canvas; dark navy appears in one major band per route.
- Blue is reserved for primary actions, focus, links, and active navigation.
- Rectangular controls and flat panels communicate precision.
- Sections alternate density and surface color to create rhythm without shadows.
- Content stays within a 1440px container and uses a 12-column desktop grid.

## Colors

The palette is restrained and high contrast, with corporate blue as the only
interactive accent.

- **Action Blue** (`#1c69d4`): Primary buttons, active navigation, links, and
  focus indicators. Pressed actions use `#0653b6`.
- **Engineering Navy** (`#1a2129`): Hero and closing CTA bands. Nested technical
  surfaces may use `#262e38`.
- **Precision Ink** (`#262626`): Headings and primary text on light surfaces.
- **Body Graphite** (`#3c3c3c`): Paragraph text on white and soft surfaces.
- **Utility Gray** (`#6b6b6b`): Metadata and secondary labels only.
- **Canvas White** (`#ffffff`): Default page background.
- **Instrument Grays** (`#f7f7f7`, `#fafafa`, `#ebebeb`): Section contrast,
  project media plates, and structural separation.
- **Hairlines** (`#e6e6e6`, `#cccccc`): Dividers and outlined controls.

**The One-Blue Rule.** Do not introduce a second decorative accent. Semantic
colors communicate status only.

## Typography

**Display Font:** Google Sans Bold with Segoe UI fallback  
**Body Font:** Google Sans Regular with Segoe UI fallback

The local Google Sans files provide a geometric, engineered voice without
depending on BMW's licensed typeface or an external font request. Weight contrast
drives hierarchy: 700 for display and labels, 400 for reading text.

- **Display XL** (700, `clamp(2.5rem, 6vw, 4rem)`, 1.05): One hero heading per
  route.
- **Display LG** (700, `clamp(2rem, 4vw, 3rem)`, 1.1): Major section headings.
- **Display MD** (700, `clamp(1.75rem, 3vw, 2rem)`, 1.15): Subsection headings.
- **Title** (700, 1.125rem, 1.4): Project, company, degree, and certification
  titles.
- **Body** (400, 1rem, 1.6): Descriptions, limited to 70 characters per line.
- **Label** (700, 0.8125rem, 0.08em): Short CTA and category labels only.

Headings use balanced wrapping. Paragraphs use pretty wrapping. Display text
never uses negative letter spacing and never exceeds 4rem.

## Elevation

The system uses no drop shadows. Depth comes from alternating white, soft gray,
and dark navy bands, plus hairline dividers. Hover states use color, underline,
or a small translation of no more than 2px. Never combine a border with a wide
decorative shadow.

## Components

### Buttons

- Use 0px radius, a minimum 48px height, and a clear verb-plus-object label.
- Primary buttons use Action Blue with white text.
- Secondary buttons use a white or transparent background with a 1px outline.
- Hover changes color only. Focus uses a visible 2px Action Blue outline with
  offset.

### Cards and containers

- Use flat sections, lists, and panels before using cards.
- Project panels use soft gray media areas with no shadow and no rounded corners.
- Certification cards may use a 1px hairline because each certificate is a
  discrete object.
- Never nest cards.

### Navigation

- The top navigation is sticky, 64px high, and white with a hairline bottom edge.
- Desktop shows the full route list and a distinct resume action.
- Mobile uses a labeled menu button and a full-width navigation sheet.
- Active routes use a blue underline and `aria-current="page"`.

### Hero

- Each route has one decisive hero composition with a single message.
- The home hero uses Engineering Navy, the primary statement, two actions, and a
  restrained technical code plane.
- Interior routes may use white heroes with a dark band later in the page to
  avoid repeating the same surface mode.

### Experience timeline

- Experience entries use a two-column row on desktop and one column on mobile.
- Company, role, and period form the scan layer; responsibility copy follows.
- Dividers establish sequence. Colored side stripes and floating cards are not
  allowed.

### Technology lists

- Technologies appear as compact text groups tied to applied work.
- Brand-colored technology logos may appear as secondary evidence, never as a
  wall of unexplained icons.

## Do's and Don'ts

### Do:

- **Do** use `#ffffff` as the main canvas and `#1a2129` for focused hero bands.
- **Do** reserve `#1c69d4` for actions, focus, links, and selected states.
- **Do** keep buttons rectangular, 48px high, and labeled with a clear outcome.
- **Do** connect technologies to projects, responsibilities, and engineering
  decisions.
- **Do** vary section density and surface color to create page rhythm.
- **Do** provide visible keyboard focus and a reduced-motion fallback.

### Don't:

- **Don't** use generic developer portfolio templates centered on cartoon
  illustrations.
- **Don't** use rounded SaaS dashboards, floating glass panels, or decorative
  drop shadows.
- **Don't** use purple gradients, neon accents, terminal cosplay, or noisy code
  rain effects.
- **Don't** build repetitive icon-card grids that list tools without applied
  context.
- **Don't** use excessive animation, novelty cursors, or delayed navigation.
- **Don't** use BMW logos, model imagery, M stripes, licensed typefaces, or other
  proprietary brand elements.
- **Don't** use colored side-stripe borders, gradient text, or radii above 16px
  on content containers.
