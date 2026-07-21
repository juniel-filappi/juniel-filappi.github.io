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
