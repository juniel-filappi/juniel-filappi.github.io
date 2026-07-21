# Portfolio redesign implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use
> `superpowers:subagent-driven-development` or `superpowers:executing-plans` to
> implement this plan task by task. Steps use checkbox syntax for tracking.

**Goal:** Redesign every public portfolio route with the approved Precision
Engineering Showcase system while preserving the current React application and
content sources.

**Architecture:** Keep React 16, React Router 5, Create React App 3, and the
existing route/data structure. Introduce a small shared page shell and semantic
action component, centralize visual tokens in global CSS, and update existing
domain components in place. Local profile and repository files remain the only
data sources.

**Tech Stack:** React 16.10, React Router DOM 5.1, styled-components 5, Jest via
react-scripts 3, React DOM test utilities, and Playwright MCP for browser QA.

## Global constraints

- Preserve `/`, `/home`, `/experience`, `/education`, `/projects`, `/contact`,
  and the wildcard 404 route.
- Use `#1c69d4` as the only interactive accent and `#1a2129` for dark bands.
- Use local Google Sans files. Do not add remote font requests.
- Use 0px radius for buttons, panels, inputs, and navigation surfaces.
- Do not add drop shadows, glass panels, gradient text, decorative side stripes,
  or generic hero illustrations.
- Keep body text at 70 characters per line or fewer.
- Keep content visible without JavaScript-triggered reveal classes.
- Provide reduced-motion styles even though formal accessibility certification
  is out of scope.
- Do not add runtime dependencies.
- Do not run or request Git terminal commands. Git steps are intentionally
  omitted from this plan.

---

### Task 1: Install dependencies and establish the design foundation

**Files:**

- Modify: `src/index.css`
- Modify: `src/global.js`
- Modify: `src/App.css`
- Modify: `src/theme.js`
- Modify: `src/App.test.js`

**Interfaces:**

- Produces: global `--color-*`, `--space-*`, `--type-*`, `--ease-*`, and
  `--z-*` CSS properties used by every later task.
- Produces: `.site-container`, `.section`, `.section--dark`, `.section--soft`,
  `.sr-only`, and global focus styles.

- [ ] **Step 1: Restore the locked dependency tree**

Run:

```bash
npm ci
```

Expected: dependencies install from `package-lock.json` without changing the
lockfile.

- [ ] **Step 2: Replace the smoke test with design-foundation assertions**

Use this test in `src/App.test.js` before changing the styles:

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { chosenTheme } from "./theme";

it("renders the portfolio with the precision theme", () => {
  const root = document.createElement("div");

  ReactDOM.render(<App />, root);

  expect(chosenTheme.primary).toBe("#1c69d4");
  expect(chosenTheme.surfaceDark).toBe("#1a2129");

  ReactDOM.unmountComponentAtNode(root);
});
```

- [ ] **Step 3: Run the focused test and verify it fails**

Run:

```bash
CI=true npm test -- --runInBand src/App.test.js
```

Expected: FAIL because the current theme has no `primary` or `surfaceDark`
properties.

- [ ] **Step 4: Define the semantic theme object**

Replace the selected theme in `src/theme.js` with this exported object. Keep the
legacy theme exports only if another source file still imports them.

```js
export const precisionTheme = {
  body: "#ffffff",
  text: "#262626",
  expTxtColor: "#262626",
  highlight: "#f7f7f7",
  dark: "#1a2129",
  secondaryText: "#3c3c3c",
  imageHighlight: "#1c69d4",
  compImgHighlight: "#fafafa",
  jacketColor: "#1c69d4",
  headerColor: "#e6e6e6",
  splashBg: "#1a2129",
  primary: "#1c69d4",
  primaryActive: "#0653b6",
  surfaceDark: "#1a2129",
  surfaceDarkElevated: "#262e38",
  surfaceSoft: "#f7f7f7",
  border: "#e6e6e6",
};

export const chosenTheme = precisionTheme;
```

- [ ] **Step 5: Establish the complete global token layer**

Add the following declarations to `src/index.css`, then remove the conflicting
font and body declarations from `src/global.js` and leave only box sizing,
background, text color, and transition behavior there.

```css
:root {
  --color-primary: #1c69d4;
  --color-primary-active: #0653b6;
  --color-ink: #262626;
  --color-body: #3c3c3c;
  --color-muted: #6b6b6b;
  --color-line: #e6e6e6;
  --color-line-strong: #cccccc;
  --color-canvas: #ffffff;
  --color-surface-soft: #f7f7f7;
  --color-surface-card: #fafafa;
  --color-surface-strong: #ebebeb;
  --color-surface-dark: #1a2129;
  --color-surface-dark-elevated: #262e38;
  --color-on-dark: #ffffff;
  --color-on-dark-soft: #bbbbbb;
  --font-display: "Google Sans Bold", "Segoe UI", sans-serif;
  --font-body: "Google Sans Regular", "Segoe UI", sans-serif;
  --type-display-xl: clamp(2.5rem, 6vw, 4rem);
  --type-display-lg: clamp(2rem, 4vw, 3rem);
  --type-display-md: clamp(1.75rem, 3vw, 2rem);
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-section: clamp(4rem, 8vw, 6rem);
  --container: 90rem;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 180ms;
  --duration-enter: 520ms;
  --z-sticky: 20;
  --z-menu: 30;
  --z-tooltip: 50;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 20rem;
  background: var(--color-canvas);
  color: var(--color-body);
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a,
button {
  -webkit-tap-highlight-color: transparent;
}

:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}

.site-container {
  width: min(100% - 3rem, var(--container));
  margin-inline: auto;
}

.section {
  padding-block: var(--space-section);
}

.section--dark {
  background: var(--color-surface-dark);
  color: var(--color-on-dark);
}

.section--soft {
  background: var(--color-surface-soft);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 47.99rem) {
  .site-container {
    width: min(100% - 2rem, var(--container));
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 6: Remove obsolete CRA demo styles from `src/App.css`**

Keep only application-level utilities that are still referenced. Delete
`.App-logo`, `.App-header`, `.App-link`, and unused `fade_down` and `fade_up`
keyframes after confirming no source file refers to them.

- [ ] **Step 7: Run the focused test**

Run:

```bash
CI=true npm test -- --runInBand src/App.test.js
```

Expected: PASS.

---

### Task 2: Build the shared shell, navigation, actions, and back-to-top behavior

**Files:**

- Create: `src/components/pageShell/PageShell.js`
- Create: `src/components/pageShell/PageShell.css`
- Create: `src/components/pageHero/PageHero.js`
- Create: `src/components/pageHero/PageHero.css`
- Create: `src/components/sectionHeading/SectionHeading.js`
- Create: `src/components/sectionHeading/SectionHeading.css`
- Modify: `src/components/header/Header.js`
- Modify: `src/components/header/Header.css`
- Modify: `src/components/button/Button.js`
- Modify: `src/components/button/Button.css`
- Modify: `src/components/footer/Footer.js`
- Modify: `src/components/footer/Footer.css`
- Modify: `src/components/topButton/TopButton.js`
- Modify: `src/components/topButton/TopButton.css`
- Create: `src/components/pageShell/PageShell.test.js`
- Modify: `src/App.test.js`

**Interfaces:**

- Produces: `<PageShell theme pageClassName>{children}</PageShell>`.
- Produces: `<Button text href newTab variant className theme>` where `variant`
  is `primary`, `secondary`, `secondary-on-dark`, or `text`.
- Produces: `<PageHero tone title description actions>` and
  `<SectionHeading title description align>`.
- Consumes: `greeting.resumeLink`, route links, and the selected theme.

- [ ] **Step 1: Write shared-shell behavior tests**

Create `src/components/pageShell/PageShell.test.js`:

```js
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import PageShell from "./PageShell";
import { precisionTheme } from "../../theme";

it("renders landmarks and identifies the active route", () => {
  const root = document.createElement("div");

  act(() => {
    ReactDOM.render(
      <MemoryRouter initialEntries={["/projects"]}>
        <PageShell theme={precisionTheme}>
          <h1>Projetos</h1>
        </PageShell>
      </MemoryRouter>,
      root
    );
  });

  expect(root.querySelector("header")).not.toBeNull();
  expect(root.querySelector("main h1").textContent).toBe("Projetos");
  expect(root.querySelector('a[aria-current="page"]').textContent).toBe(
    "Projetos"
  );
  expect(root.querySelector("footer")).not.toBeNull();

  ReactDOM.unmountComponentAtNode(root);
});

it("opens and closes the mobile navigation", () => {
  const root = document.createElement("div");

  act(() => {
    ReactDOM.render(
      <MemoryRouter>
        <PageShell theme={precisionTheme}>Conteúdo</PageShell>
      </MemoryRouter>,
      root
    );
  });

  const menuButton = root.querySelector(".header__menu-button");
  act(() =>
    menuButton.dispatchEvent(new MouseEvent("click", { bubbles: true }))
  );
  expect(menuButton.getAttribute("aria-expanded")).toBe("true");

  ReactDOM.unmountComponentAtNode(root);
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run:

```bash
CI=true npm test -- --runInBand src/components/pageShell/PageShell.test.js
```

Expected: FAIL because `PageShell` does not exist.

- [ ] **Step 3: Implement `PageShell`**

Create `src/components/pageShell/PageShell.js`:

```js
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import TopButton from "../topButton/TopButton";
import "./PageShell.css";

export default function PageShell({ children, pageClassName = "", theme }) {
  return (
    <div className={`page-shell ${pageClassName}`.trim()}>
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <Header theme={theme} />
      <main id="main-content">{children}</main>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
```

`PageShell.css` defines the skip link off-canvas until focused and ensures
`main` has `min-height: calc(100vh - 64px)`.

- [ ] **Step 4: Implement shared hero and section-heading components**

Create `PageHero.js`:

```js
import React from "react";
import "./PageHero.css";

export default function PageHero({
  actions,
  description,
  title,
  tone = "light",
}) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="site-container page-hero__content">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {actions && <div className="page-hero__actions">{actions}</div>}
      </div>
    </section>
  );
}
```

Create `SectionHeading.js`:

```js
import React from "react";
import "./SectionHeading.css";

export default function SectionHeading({
  align = "start",
  description,
  title,
}) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
```

Style both components from the global tokens. `PageHero` uses either white or
Engineering Navy and keeps copy within 70 characters per line.

- [ ] **Step 5: Replace the checkbox menu with component state**

Update `Header.js` to use `isMenuOpen`, a real button, `activeClassName`, and
`aria-current` supplied by React Router 5. The route data must be defined once:

```js
const navigationItems = [
  { to: "/home", label: "Início" },
  { to: "/experience", label: "Experiência" },
  { to: "/projects", label: "Projetos" },
  { to: "/education", label: "Educação" },
  { to: "/contact", label: "Contato" },
];
```

The menu button must use `aria-expanded`, `aria-controls="primary-navigation"`,
and the visible labels **Abrir menu** and **Fechar menu** through an `.sr-only`
span. Each navigation click closes the mobile menu.

- [ ] **Step 6: Make `Button` semantic and variant-driven**

Replace mouse-event style mutation with class variants:

```js
export default function Button({
  text,
  className = "",
  href,
  newTab = false,
  variant = "primary",
}) {
  if (!href) return null;

  return (
    <a
      className={`action-link action-link--${variant} ${className}`.trim()}
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {text}
    </a>
  );
}
```

Style all variants with 0px radius, 48px minimum height, and the token colors.

- [ ] **Step 7: Rebuild Footer and TopButton with semantic elements**

`Footer` becomes a `<footer>` with route links, social links, and copyright copy.
`TopButton` becomes a `<button type="button">`. Manage the scroll listener with
`useEffect` and remove it in the cleanup function. Use `window.scrollTo` and a
localized `aria-label="Voltar ao topo"`.

- [ ] **Step 8: Run shell and app tests**

Run:

```bash
CI=true npm test -- --runInBand src/components/pageShell/PageShell.test.js src/App.test.js
```

Expected: PASS.

---

### Task 3: Redesign the home route around positioning, proof, and capabilities

**Files:**

- Modify: `src/pages/home/HomeComponent.js`
- Modify: `src/containers/greeting/Greeting.js`
- Modify: `src/containers/greeting/Greeting.css`
- Modify: `src/containers/skills/Skills.js`
- Modify: `src/containers/skills/SkillSection.js`
- Modify: `src/containers/skills/Skills.css`
- Modify: `src/components/softwareSkills/SoftwareSkill.js`
- Modify: `src/components/softwareSkills/SoftwareSkill.css`
- Create: `src/pages/home/HomeComponent.test.js`

**Interfaces:**

- Consumes: `greeting`, `skills`, `experience`, and project JSON.
- Produces: the home information sequence documented in the approved spec.

- [ ] **Step 1: Write the home content test**

```js
import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Home from "./HomeComponent";
import { precisionTheme } from "../../theme";

it("presents positioning, proof, projects, and contact actions", () => {
  const root = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Home theme={precisionTheme} />
    </MemoryRouter>,
    root
  );

  expect(root.querySelector("h1").textContent).toContain(
    "Engenharia de software"
  );
  expect(root.textContent).toContain("Projetos selecionados");
  expect(root.textContent).toContain("Capacidades técnicas");
  expect(root.querySelector('a[href="/projects"]')).not.toBeNull();
  expect(root.querySelector('a[href="/contact"]')).not.toBeNull();

  ReactDOM.unmountComponentAtNode(root);
});
```

- [ ] **Step 2: Run the focused test and verify it fails**

Run:

```bash
CI=true npm test -- --runInBand src/pages/home/HomeComponent.test.js
```

Expected: FAIL because the current home has no approved heading or project proof
section.

- [ ] **Step 3: Recompose the home route**

Wrap content in `PageShell`. Replace the illustration-led greeting with:

```jsx
<section className="home-hero section section--dark">
  <div className="site-container home-hero__grid">
    <div className="home-hero__content">
      <p className="home-hero__role">Full Stack Developer Sênior</p>
      <h1>Engenharia de software para produtos que precisam evoluir.</h1>
      <p>{greeting.subTitle}</p>
      <div className="home-hero__actions">
        <Link className="action-link action-link--primary" to="/projects">
          Ver projetos
        </Link>
        <Button
          text="Ver currículo"
          href={greeting.resumeLink}
          newTab
          variant="secondary-on-dark"
        />
      </div>
    </div>
    <div className="technical-plane" aria-hidden="true">
      <span>backend / frontend / cloud</span>
      <strong>Arquitetura, integração e entrega contínua.</strong>
    </div>
  </div>
</section>
```

Add a selected-project section from the first three non-fork repositories, a
capability section from the authored skill sentences, a career-proof band from
the first work entry, and a dark contact CTA.

- [ ] **Step 4: Replace the skill icon wall with applied capability groups**

`SkillSection` must render authored skill sentences first. `SoftwareSkill`
renders at most the first 12 technologies as text labels with accessible names.
Remove `GetSkillSvg` and all imported generic skill illustrations from the active
home path.

- [ ] **Step 5: Add the coordinated hero entrance**

Use one `@keyframes hero-enter` sequence on `.home-hero__content > *` and the
technical plane. Content starts visible in the base rule; the animation only
adds movement. Apply `animation-delay` to at most four hero groups. The global
reduced-motion block from Task 1 disables it.

- [ ] **Step 6: Run the focused test**

Run:

```bash
CI=true npm test -- --runInBand src/pages/home/HomeComponent.test.js
```

Expected: PASS.

---

### Task 4: Convert projects into semantic evidence rows with an empty state

**Files:**

- Modify: `src/pages/projects/Projects.js`
- Modify: `src/pages/projects/Projects.css`
- Modify: `src/components/githubRepoCard/GithubRepoCard.js`
- Modify: `src/components/githubRepoCard/GithubRepoCard.css`
- Modify: `src/components/projectLanguages/ProjectLanguages.js`
- Modify: `src/components/projectLanguages/ProjectLanguages.css`
- Create: `src/pages/projects/Projects.test.js`

**Interfaces:**

- Produces: `<GithubRepoCard repo index>` rendered as an `<article>` containing
  one semantic external link.
- Consumes: `ProjectsData.data`, including nullable `description` and possibly
  empty `languages`.

- [ ] **Step 1: Write project and empty-state tests**

Export a named `ProjectsContent` component that accepts a `projects` prop for
testing, while the default route passes `ProjectsData.data`.

```js
import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { ProjectsContent } from "./Projects";
import { precisionTheme } from "../../theme";

const mountedRoots = [];

function renderProjects(projects) {
  const root = document.createElement("div");
  mountedRoots.push(root);
  ReactDOM.render(
    <MemoryRouter>
      <ProjectsContent projects={projects} theme={precisionTheme} />
    </MemoryRouter>,
    root
  );
  return root;
}

afterEach(() => {
  mountedRoots.forEach((root) => ReactDOM.unmountComponentAtNode(root));
  mountedRoots.length = 0;
});

it("renders repositories as accessible external links", () => {
  const projects = [
    {
      id: "project-1",
      name: "project-ed-tech",
      createdAt: "2024-04-24T20:22:51Z",
      url: "https://github.com/juniel-filappi/project-ed-tech",
      description: null,
      languages: [{ name: "JavaScript", iconifyClass: "logos-javascript" }],
    },
  ];
  const root = renderProjects(projects);
  const link = root.querySelector("article a");

  expect(link.textContent).toContain("Abrir repositório");
  expect(link.getAttribute("rel")).toBe("noopener noreferrer");
  expect(root.textContent).toContain("Descrição disponível no GitHub");
});

it("renders a useful state when no projects are available", () => {
  const root = renderProjects([]);
  expect(root.textContent).toContain("Veja todos os projetos no GitHub");
});
```

The local `renderProjects` helper mounts `ProjectsContent` in `MemoryRouter` and
returns the root element.

- [ ] **Step 2: Run the focused test and verify it fails**

Run:

```bash
CI=true npm test -- --runInBand src/pages/projects/Projects.test.js
```

Expected: FAIL because `ProjectsContent` and the empty state do not exist.

- [ ] **Step 3: Replace click-driven cards with articles and anchors**

Remove `window.open`, the clickable `div`, inline theme styles, and
`react-reveal`. Render the repository name as authored text, convert the ISO date
with `Intl.DateTimeFormat("pt-BR", { month: "short", year: "numeric" })`, and
use this description fallback:

```js
const description =
  repo.description || "Descrição disponível no repositório do projeto.";
```

Use stable `repo.id` keys in `Projects.js`.

- [ ] **Step 4: Simplify language rendering**

Remove Bootstrap overlays from the active project path. Render languages as a
plain `<ul aria-label="Tecnologias do projeto">` with visible names. When the
array is empty, render no list.

- [ ] **Step 5: Implement alternating project-row layout**

Use a two-column editorial row at desktop and one column below 768px. Alternate
the order with `.project-showcase:nth-child(even)` rather than duplicate markup.
Use `--color-surface-card` for the media plate, hairline dividers between rows,
and no shadows or radius.

- [ ] **Step 6: Run the focused test**

Run:

```bash
CI=true npm test -- --runInBand src/pages/projects/Projects.test.js
```

Expected: PASS.

---

### Task 5: Replace the experience accordion with a readable chronology

**Files:**

- Modify: `src/pages/experience/Experience.js`
- Modify: `src/pages/experience/Experience.css`
- Modify: `src/containers/experienceAccordion/ExperienceAccordion.js`
- Modify: `src/containers/experienceAccordion/ExperienceAccordion.css`
- Modify: `src/components/experienceCard/ExperienceCard.js`
- Modify: `src/components/experienceCard/ExperienceCard.css`
- Create: `src/pages/experience/Experience.test.js`

**Interfaces:**

- Keeps: `<ExperienceAccordion sections theme>` to avoid changing its caller.
- Changes: the implementation renders all section content without BaseUI
  `Accordion` or `Panel`.

- [ ] **Step 1: Write the chronology test**

```js
import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Experience from "./Experience";
import { precisionTheme } from "../../theme";

function renderExperience() {
  const root = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Experience theme={precisionTheme} />
    </MemoryRouter>,
    root
  );
  return root;
}

it("renders every experience section and entry without collapsed content", () => {
  const root = renderExperience();

  expect(root.textContent).toContain("Trabalho");
  expect(root.textContent).toContain("Estágio");
  expect(root.textContent).toContain("Voluntariado");
  expect(root.textContent).toContain("PipeRun");
  expect(root.querySelector("[aria-expanded]")).toBeNull();

  ReactDOM.unmountComponentAtNode(root);
});
```

`renderExperience` mounts the route in `MemoryRouter` with `precisionTheme`.

- [ ] **Step 2: Run the focused test and verify it fails**

Run:

```bash
CI=true npm test -- --runInBand src/pages/experience/Experience.test.js
```

Expected: FAIL because the current BaseUI accordion hides section content and
renders expand controls.

- [ ] **Step 3: Rebuild `ExperienceAccordion` as semantic sections**

Use this structure:

```jsx
<div className="experience-sections">
  {sections.map((section) => (
    <section className="experience-group" key={section.title}>
      <h2>{section.title}</h2>
      <div className="experience-group__entries">
        {section.experiences.map((entry) => (
          <ExperienceCard
            key={`${entry.company}-${entry.title}-${entry.duration}`}
            experience={entry}
          />
        ))}
      </div>
    </section>
  ))}
</div>
```

- [ ] **Step 4: Rebuild `ExperienceCard` as an article row**

Use an `<article>` with a fixed logo column, a scan layer for role/company, a
metadata line for period/location, and the description. Use meaningful image alt
text: `${company} logo`. Omit the period separator when `duration` is empty.

- [ ] **Step 5: Replace the illustrated hero**

Use `PageShell` and the shared light `PageHero` containing the existing
title, subtitle, and description. Remove `ExperienceImg` and `Fade` from the
active route. Add a dark career-summary band after the chronology.

- [ ] **Step 6: Run the focused test**

Run:

```bash
CI=true npm test -- --runInBand src/pages/experience/Experience.test.js
```

Expected: PASS.

---

### Task 6: Redesign education and certificates as flat records

**Files:**

- Modify: `src/pages/education/EducationComponent.js`
- Modify: `src/pages/education/EducationComponent.css`
- Modify: `src/containers/education/Educations.js`
- Modify: `src/containers/education/Educations.css`
- Modify: `src/components/degreeCard/DegreeCard.js`
- Modify: `src/components/degreeCard/DegreeCard.css`
- Modify: `src/containers/certifications/Certifications.js`
- Modify: `src/containers/certifications/Certifications.css`
- Modify: `src/components/certificationCard/CertificationCard.js`
- Modify: `src/components/certificationCard/CertificationCard.css`
- Create: `src/pages/education/EducationComponent.test.js`

**Interfaces:**

- Consumes: `degrees.degrees` and `certifications.certifications`.
- Preserves: optional degree and certificate URLs.

- [ ] **Step 1: Write education edge-state tests**

```js
import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Education from "./EducationComponent";
import { precisionTheme } from "../../theme";

function renderEducation() {
  const root = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Education theme={precisionTheme} />
    </MemoryRouter>,
    root
  );
  return root;
}

it("renders degree details and keeps empty certificate links non-interactive", () => {
  const root = renderEducation();

  expect(root.textContent).toContain("Engenharia da Computação");
  expect(root.textContent).toContain("Certificações");

  const emptyCertificateLink = Array.from(root.querySelectorAll("a")).find(
    (link) => link.getAttribute("href") === ""
  );
  expect(emptyCertificateLink).toBeUndefined();

  ReactDOM.unmountComponentAtNode(root);
});
```

- [ ] **Step 2: Run the focused test and verify it fails**

Run:

```bash
CI=true npm test -- --runInBand src/pages/education/EducationComponent.test.js
```

Expected: FAIL on the new heading and redesigned structure.

- [ ] **Step 3: Recompose the education route**

Use `PageShell`, remove `EducationImg` and `Fade`, and render the shared light
`PageHero`. Place the degree record in a soft section, followed by certifications
on white.

- [ ] **Step 4: Rebuild the degree record**

Render the degree as one two-column section with logo and content. Convert the
emoji-prefixed description strings into normal paragraphs by removing the
leading `⚡` at render time:

```js
const cleanDescription = (description) => description.replace(/^⚡\s*/, "");
```

The institution link uses **Visitar instituição** and only renders when the URL
exists.

- [ ] **Step 5: Rebuild certificates with conditional links**

Each certificate renders as an `<article>`. Wrap it in an anchor only when
`certificate_link` is truthy. Use stable keys based on
`${certificate.title}-${certificate.subtitle}`. The grid uses
`repeat(auto-fit, minmax(240px, 1fr))`, 1px hairlines, and no shadow.

- [ ] **Step 6: Run the focused test**

Run:

```bash
CI=true npm test -- --runInBand src/pages/education/EducationComponent.test.js
```

Expected: PASS.

---

### Task 7: Finish contact, 404, splash, social links, and SEO-facing copy

**Files:**

- Modify: `src/pages/contact/ContactComponent.js`
- Modify: `src/pages/contact/ContactComponent.css`
- Modify: `src/components/socialMedia/SocialMedia.js`
- Modify: `src/components/socialMedia/SocialMedia.css`
- Modify: `src/pages/errors/error404/Error.js`
- Modify: `src/pages/errors/error404/Error.css`
- Modify: `src/pages/splash/Splash.js`
- Modify: `src/pages/splash/Splash.css`
- Modify: `public/index.html`
- Create: `src/pages/contact/ContactComponent.test.js`
- Create: `src/pages/errors/error404/Error.test.js`

**Interfaces:**

- Consumes: `contactPageData.contactSection`, `socialMediaLinks`, `greeting`, and
  the selected theme.
- Produces: localized action labels and a consistent optional splash route.

- [ ] **Step 1: Write contact and 404 tests**

```js
import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Contact from "./ContactComponent";
import Error404 from "../errors/error404/Error";
import { precisionTheme } from "../../theme";

function renderRoute(Component) {
  const root = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Component theme={precisionTheme} />
    </MemoryRouter>,
    root
  );
  return root;
}

const renderContact = () => renderRoute(Contact);
const renderError = () => renderRoute(Error404);

it("renders direct contact actions with useful names", () => {
  const root = renderContact();
  expect(root.querySelector('a[href^="mailto:"]').textContent).toContain(
    "Enviar e-mail"
  );
  expect(root.textContent).toContain("Ver currículo");
  ReactDOM.unmountComponentAtNode(root);
});

it("renders a localized recovery action", () => {
  const root = renderError();
  expect(root.textContent).toContain("Página não encontrada");
  expect(root.querySelector('a[href="/home"]').textContent).toBe(
    "Voltar ao início"
  );
  ReactDOM.unmountComponentAtNode(root);
});
```

Both helpers mount routes in `MemoryRouter` with `precisionTheme`.

- [ ] **Step 2: Run focused tests and verify they fail**

Run:

```bash
CI=true npm test -- --runInBand src/pages/contact/ContactComponent.test.js src/pages/errors/error404/Error.test.js
```

Expected: FAIL because contact icons lack visible labels and the 404 copy is in
English.

- [ ] **Step 3: Rebuild contact as one focused dark composition**

Use `PageShell`, remove unused `BlogsImg` and `AddressImg` imports, and render one
headline, the authored description, visible social action labels, and the resume
action. Use `mailto:` as **Enviar e-mail**, GitHub as **Ver GitHub**, and LinkedIn
as **Ver LinkedIn**.

- [ ] **Step 4: Make social links data-driven and visible**

Remove styled-components hover color injection from `SocialMedia.js`. Render the
social name beside each icon and add `aria-hidden="true"` to decorative icons.
Use `target="_blank"` only for HTTP links, not `mailto:` links.

- [ ] **Step 5: Rebuild the 404 route**

Use `PageShell`, a dark hero, `h1` text **Página não encontrada**, supporting copy
**O endereço informado não existe ou foi movido.**, and a React Router `Link`
labeled **Voltar ao início**.

- [ ] **Step 6: Refine the optional splash route**

Keep the route optional, replace the circular grow animation with a static dark
screen and one short logo reveal, and move timer cleanup from the deprecated
`componentWillMount` method to `componentWillUnmount`:

```js
componentWillUnmount() {
  clearTimeout(this.redirectTimer);
}
```

Use a duration of 1200ms so enabling the splash never blocks visitors for 5.5
seconds. Honor reduced motion.

- [ ] **Step 7: Localize public document metadata**

Set `<html lang="pt-BR">`, update the document title and description from the
authored SEO copy, remove duplicate description tags, and retain the SPA routing
script.

- [ ] **Step 8: Run the focused tests**

Run:

```bash
CI=true npm test -- --runInBand src/pages/contact/ContactComponent.test.js src/pages/errors/error404/Error.test.js
```

Expected: PASS.

---

### Task 8: Complete integration, static checks, build, and browser QA

**Files:**

- Modify: `src/pages/home/HomeComponent.js`
- Modify: `src/pages/experience/Experience.js`
- Modify: `src/pages/education/EducationComponent.js`
- Modify: `src/pages/projects/Projects.js`
- Modify: `src/pages/contact/ContactComponent.js`
- Modify: `src/pages/errors/error404/Error.js`
- Modify: any redesigned CSS file only when verification identifies a defect
- Modify: `.notebook/INDEX.md`
- Create: `.notebook/portfolio-ui.md`

**Interfaces:**

- Verifies: every route uses `PageShell`, has one `h1`, and exposes consistent
  primary navigation.
- Produces: durable CodeNavi notes for the route and design-system structure.

- [ ] **Step 1: Add route integration assertions to `src/App.test.js`**

Render the application through `MemoryRouter`-compatible route content or mount
each route directly. Assert that each route has exactly one `h1`, a `main`
landmark, the shared navigation, and no anchor with an empty `href`.

- [ ] **Step 2: Run all tests**

Run:

```bash
CI=true npm test -- --runInBand
```

Expected: PASS with no failing suites.

- [ ] **Step 3: Run the production build**

Run:

```bash
npm run build
```

Expected: build completes successfully. Resolve only warnings introduced by this
redesign. Record unrelated pre-existing warnings in the final handoff.

- [ ] **Step 4: Scan for banned or fragile patterns in active surfaces**

Run:

```bash
rg -n "react-reveal|box-shadow|border-radius: (2[4-9]|[3-9][0-9])px|background-clip: text|target=\"_\"|window\.onscroll|onMouseEnter" src/pages src/components/header src/components/footer src/components/button src/components/topButton src/components/githubRepoCard src/components/experienceCard src/components/degreeCard src/components/certificationCard src/containers/greeting src/containers/skills src/containers/experienceAccordion
```

Expected: no matches in redesigned active surfaces, except circular social icon
or back-to-top controls when their radius is intentionally `50%`.

- [ ] **Step 5: Start the development server**

Run:

```bash
npm start
```

Expected: development server becomes available without compilation errors.

- [ ] **Step 6: Inspect every route with Playwright MCP**

At 1440 by 1000 and 390 by 844, inspect:

- `/home`
- `/projects`
- `/experience`
- `/education`
- `/contact`
- `/missing-route`

For every route, verify:

- no horizontal overflow;
- no clipped headings or technology labels;
- one visible `h1`;
- usable mobile navigation;
- visible keyboard focus;
- external links with safe attributes;
- no console errors;
- correct light/dark section rhythm.

- [ ] **Step 7: Verify reduced motion**

Use Playwright's reduced-motion emulation, reload `/home`, and confirm that
animation durations resolve to the near-instant global fallback while all content
remains visible.

- [ ] **Step 8: Capture durable CodeNavi knowledge**

Create `.notebook/portfolio-ui.md` with pointers to the route shell, design
tokens, content source, and responsive breakpoints. Create `.notebook/INDEX.md`
and link the note under a `portfolio-ui` tag. Do not copy implementation code
into the note.

- [ ] **Step 9: Re-run tests and the production build after browser fixes**

Run:

```bash
CI=true npm test -- --runInBand
npm run build
```

Expected: both commands pass. The browser checks from Steps 6 and 7 remain clean.
