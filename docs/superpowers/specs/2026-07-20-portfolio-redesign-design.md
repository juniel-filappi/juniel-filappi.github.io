# Portfolio redesign design

## Goal

Redesign every public route as a coherent, modern, and professional personal
brand site that serves recruiters and prospective clients equally.

## Approved direction

The approved direction is **Precision Engineering Showcase**. It adapts the
provided corporate automotive design analysis into a software-engineering
portfolio. The result uses strict geometry, flat surfaces, strong type contrast,
one blue action color, and alternating white and dark bands.

The redesign uses no BMW marks, model imagery, M stripes, or licensed fonts.
Google Sans, already stored in the repository, provides the typographic voice.

## Technical boundaries

- Keep React 16, React Router 5, Create React App 3, and styled-components 5.
- Do not introduce a component framework or migrate the build system.
- Keep portfolio content in `src/portfolio.js` and project data in the existing
  local JSON files.
- Replace `react-reveal` usage on redesigned routes with CSS motion where doing
  so reduces duplicated behavior and improves reduced-motion handling.
- Preserve the existing public URLs: `/`, `/home`, `/experience`, `/education`,
  `/projects`, `/contact`, and the wildcard 404 route.

## Information architecture

### Shared shell

Every route uses the same sticky 64px header, route navigation, resume action,
footer, and back-to-top control. The active route has a visible state. Mobile
navigation opens as a full-width sheet and returns focus predictably.

### Home

The home route contains:

1. A dark hero with Juniel's role, concise positioning, a **Ver projetos**
   primary action, and a **Ver currículo** secondary action.
2. A selected-work section that presents repositories as evidence, not as equal
   generic cards.
3. A capabilities section that groups backend, frontend, architecture, and
   platform skills with applied descriptions.
4. A short career-proof band that points to the experience route.
5. A dark closing contact band.

### Projects

The projects route starts with a concise light hero, then renders repository
entries as editorial project rows. Each row includes name, description,
languages, repository activity, and a clear **Abrir repositório** action. The
layout alternates text and a technical media plate when sufficient data exists.

If the local project list is empty, the route shows a single explanatory state
with links to GitHub and contact. It does not render an empty grid.

### Experience

The experience route uses a chronological list grouped by work, internship, and
volunteering. Each entry exposes company, role, location, period when available,
and responsibility. Long descriptions use controlled line length and remain
fully visible, with no hidden accordion content required for comprehension.

### Education

The education route gives the degree primary visual weight. Certifications use
a compact responsive grid because they are comparable objects. Empty certificate
links render as non-interactive records instead of links with empty destinations.

### Contact

The contact route is intentionally short. It uses one direct invitation,
GitHub, LinkedIn, email, and resume actions. The page avoids decorative contact
illustrations and presents expected response timing only when it remains true in
the source content.

### 404

The 404 route uses Portuguese copy, names the unavailable page clearly, and
provides a **Voltar ao início** action. It shares the standard header and footer.

## Component model

The implementation extracts only components reused by several routes:

- `PageShell`: header, main landmark, footer, and back-to-top control.
- `PageHero`: light and dark route introductions with optional actions.
- `SectionHeading`: consistent heading and supporting copy.
- `ActionLink`: primary, secondary, and text-link variants.
- `ProjectShowcase`: repository evidence row.

Existing domain components remain responsible for experience entries, degrees,
certifications, social links, and software skills. Their markup and styling are
updated instead of creating parallel component trees.

## Data flow

`src/portfolio.js` remains the source for authored profile content. Local JSON
files remain the source for repository metadata. Route components pass semantic
content into shared presentation components. No new network request is added.

Lists receive stable keys from existing IDs or stable authored identifiers. A
component checks optional URLs before rendering an anchor. External links open in
a new tab only when they also include `rel="noopener noreferrer"`.

## Responsive behavior

- Below 768px: one-column heroes and lists, full-width navigation sheet, 40px
  maximum hero heading, and 24px horizontal gutters.
- From 768px to 1023px: two-column project and certification layouts, compact
  navigation, and 40px to 64px section spacing.
- From 1024px to 1440px: full navigation and 12-column compositions.
- Above 1440px: content remains capped at 1440px while outer gutters grow.

No heading, label, or long technology name may overflow at any supported width.
Touch targets remain at least 44px in both dimensions.

## Motion and interaction

The interface uses one coordinated first-load sequence in the home hero and
short state transitions for navigation and controls. Content remains visible by
default. Motion uses opacity and transform, avoids layout animation, and has an
instant or crossfade alternative under `prefers-reduced-motion: reduce`.

Hover is never the only way to reveal important content. Keyboard focus is
visible on every interactive element. The back-to-top control uses a real button
and an event listener managed by the component lifecycle.

## Error and edge states

- Empty projects show a GitHub fallback action.
- Empty certifications omit the section cleanly.
- Missing optional company or certificate links render as text.
- Missing images render a neutral initials or text fallback without broken-image
  chrome.
- The 404 route uses the shared shell and Portuguese copy.
- Long descriptions wrap without clipping and remain readable at mobile widths.

## Verification

1. Run focused component and route tests for shared navigation, actions, empty
   states, and route rendering.
2. Run the full test command in non-watch mode.
3. Run the production build and resolve compiler warnings introduced by the
   redesign.
4. Inspect every route with Playwright at desktop and mobile widths.
5. Verify keyboard navigation, visible focus, menu behavior, external-link
   attributes, text overflow, console errors, and reduced-motion behavior.
6. Check foreground and background color pairs against the contrast thresholds
   defined by the design skill.

## Acceptance criteria

- All six route surfaces use the same approved design system.
- The home route communicates role, capability, proof, and next action in its
  first two sections.
- Projects, experience, and education prioritize evidence over decoration.
- The layout works without horizontal scrolling from 320px through wide desktop.
- No generic hero illustrations, decorative shadows, gradient text, glass panels,
  or oversized rounded cards remain in the redesigned surfaces.
- Tests and the production build pass.
- Browser inspection finds no blocking console errors on any route.

## Out of scope

- Framework migration, TypeScript conversion, CMS integration, and backend work.
- New project case-study content that is not present in the repository.
- Contact forms, analytics, authentication, and deployment changes.
- Formal accessibility certification.
