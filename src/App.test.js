import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { navigationItems } from "./components/header/Header";
import Main from "./containers/Main";
import { precisionTheme } from "./theme";
import { chosenTheme } from "./theme";
import Home from "./pages/home/HomeComponent";
import Projects from "./pages/projects/Projects";
import Experience from "./pages/experience/Experience";
import Education from "./pages/education/EducationComponent";
import Contact from "./pages/contact/ContactComponent";
import Error404 from "./pages/errors/error404/Error";

it("renders the portfolio with the precision theme", () => {
  const root = document.createElement("div");

  act(() => {
    ReactDOM.render(<App />, root);
  });

  expect(chosenTheme.primary).toBe("#1c69d4");
  expect(chosenTheme.surfaceDark).toBe("#1a2129");

  act(() => {
    ReactDOM.unmountComponentAtNode(root);
  });
});

const routes = [
  { path: "/home", Component: Home },
  { path: "/projects", Component: Projects },
  { path: "/experience", Component: Experience },
  { path: "/education", Component: Education },
  { path: "/contact", Component: Contact },
  { path: "/missing-route", Component: Error404 },
];

routes.forEach(({ path, Component }) => {
  it(`renders the shared page structure for ${path}`, () => {
    const root = document.createElement("div");
    document.body.appendChild(root);

    act(() => {
      ReactDOM.render(
        <MemoryRouter initialEntries={[path]}>
          <Component theme={precisionTheme} />
        </MemoryRouter>,
        root
      );
    });

    expect(root.querySelectorAll("main")).toHaveLength(1);
    expect(root.querySelectorAll("main h1")).toHaveLength(1);

    const navigation = root.querySelector(
      'nav[aria-label="Navegação principal"]'
    );
    expect(navigation).not.toBeNull();
    navigationItems.forEach(({ label, to }) => {
      const link = Array.from(navigation.querySelectorAll("a")).find(
        (anchor) => anchor.textContent === label
      );
      expect(link.getAttribute("href")).toBe(to);
    });

    expect(
      Array.from(root.querySelectorAll("a")).some(
        (anchor) => !anchor.getAttribute("href")
      )
    ).toBe(false);

    act(() => {
      ReactDOM.unmountComponentAtNode(root);
    });
    root.remove();
  });
});

const routedPaths = [
  { path: "/projects", heading: "Projetos" },
  { path: "/projects/unknown", heading: "Página não encontrada" },
  { path: "/contact-old", heading: "Página não encontrada" },
];

routedPaths.forEach(({ path, heading }) => {
  it(`routes ${path} through Main`, () => {
    const root = document.createElement("div");

    act(() => {
      ReactDOM.render(
        <MemoryRouter initialEntries={[path]}>
          <Main theme={precisionTheme} />
        </MemoryRouter>,
        root
      );
    });

    expect(root.querySelector("main h1").textContent).toBe(heading);

    act(() => {
      ReactDOM.unmountComponentAtNode(root);
    });
  });
});
