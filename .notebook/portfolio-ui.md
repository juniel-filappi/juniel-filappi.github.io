# Portfolio UI

> Shared route shell, visual tokens, responsive navigation, and content sources

Entry: `src/App.js:App()` → `src/containers/Main.js:Main.render()`

Route shell: `src/components/pageShell/PageShell.js:PageShell()`

- Shell owns skip link → `Header` → `main#main-content` → `Footer` → `TopButton`
- Redesigned route consumers: `src/pages/home/HomeComponent.js`, `src/pages/projects/Projects.js`, `src/pages/experience/Experience.js`, `src/pages/education/EducationComponent.js`, `src/pages/contact/ContactComponent.js`, `src/pages/errors/error404/Error.js`

Navigation: `src/components/header/Header.js:Header()`

- `navigationItems` is the shared primary/footer route list; mobile state opens `#primary-navigation` and closes on Escape or route selection

Design tokens: `src/index.css` (L48-84)

- Color, typography, spacing, container, motion, and z-index variables
- Global visible focus: `src/index.css` (L106-109); reduced-motion fallback: `src/index.css` (L147-158)

Responsive breakpoints: `src/components/header/Header.css` (L96-130)

- Mobile navigation at `47.99rem` and below; global container narrows at `src/index.css` (L141-145)

Content sources: `src/portfolio.js`, `src/shared/experience_data.json`, `src/shared/contact_data.json`, `src/shared/opensource/projects.json`

Integration coverage: `src/App.test.js`

- Direct route mounts in `MemoryRouter`; asserts one `main`, one route `h1`, shared primary navigation, and non-empty anchors

Updated: 2026-07-20
