import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import fs from "fs";
import path from "path";
import PageShell from "./PageShell";
import { precisionTheme } from "../../theme";
import { greeting } from "../../portfolio";

it("renders landmarks and identifies the active route", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);

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
  root.remove();
});

it("keeps the shared header sticky at the top", () => {
  const headerCss = fs.readFileSync(
    path.join(__dirname, "../header/Header.css"),
    "utf8"
  );

  expect(headerCss).toMatch(
    /\.header\s*{[^}]*position:\s*sticky;[^}]*top:\s*0;/s
  );
  expect(headerCss).toMatch(/\.header__content\s*{[^}]*min-height:\s*64px;/s);
  expect(headerCss).not.toMatch(/box-shadow|backdrop-filter/);
});

it("renders a distinct safe resume action in the header", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);

  act(() => {
    ReactDOM.render(
      <MemoryRouter>
        <PageShell theme={precisionTheme}>Conteúdo</PageShell>
      </MemoryRouter>,
      root
    );
  });

  const resumeLink = root.querySelector(".header__resume-action");
  expect(resumeLink).not.toBeNull();
  expect(resumeLink.textContent).toBe("Ver currículo");
  expect(resumeLink.getAttribute("href")).toBe(greeting.resumeLink);
  expect(resumeLink.getAttribute("target")).toBe("_blank");
  expect(resumeLink.getAttribute("rel")).toBe("noopener noreferrer");

  ReactDOM.unmountComponentAtNode(root);
  root.remove();
});

it("closes the mobile navigation when a navigation item is clicked", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);

  act(() => {
    ReactDOM.render(
      <MemoryRouter>
        <PageShell theme={precisionTheme}>Conteúdo</PageShell>
      </MemoryRouter>,
      root
    );
  });

  const menuButton = root.querySelector(".header__menu-button");
  act(() => {
    menuButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(menuButton.getAttribute("aria-expanded")).toBe("true");

  act(() => {
    root
      .querySelector('a[href="/projects"]')
      .dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(menuButton.getAttribute("aria-expanded")).toBe("false");

  ReactDOM.unmountComponentAtNode(root);
  root.remove();
});

it("closes the mobile navigation when Escape is pressed", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);

  act(() => {
    ReactDOM.render(
      <MemoryRouter>
        <PageShell theme={precisionTheme}>Conteúdo</PageShell>
      </MemoryRouter>,
      root
    );
  });

  const menuButton = root.querySelector(".header__menu-button");
  act(() => {
    menuButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(menuButton.getAttribute("aria-expanded")).toBe("true");

  act(() => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
  });
  expect(menuButton.getAttribute("aria-expanded")).toBe("false");

  ReactDOM.unmountComponentAtNode(root);
  root.remove();
});

it("uses instant scrolling when reduced motion is preferred", () => {
  const root = document.createElement("div");
  const originalMatchMedia = window.matchMedia;
  const originalScrollTo = window.scrollTo;
  const scrollTo = jest.fn();
  document.body.appendChild(root);
  window.matchMedia = jest.fn().mockReturnValue({ matches: true });
  window.scrollTo = scrollTo;

  act(() => {
    ReactDOM.render(
      <MemoryRouter>
        <PageShell theme={precisionTheme}>Conteúdo</PageShell>
      </MemoryRouter>,
      root
    );
  });

  act(() => {
    root
      .querySelector('button[aria-label="Voltar ao topo"]')
      .dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "auto" });

  ReactDOM.unmountComponentAtNode(root);
  root.remove();
  window.matchMedia = originalMatchMedia;
  window.scrollTo = originalScrollTo;
});
