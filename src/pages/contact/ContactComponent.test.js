import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Contact from "./ContactComponent";
import { precisionTheme } from "../../theme";

function renderContact() {
  const root = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Contact theme={precisionTheme} />
    </MemoryRouter>,
    root
  );
  return root;
}

it("renders direct contact actions with useful names", () => {
  const root = renderContact();
  const emailLink = root.querySelector('a[href^="mailto:"]');

  expect(emailLink.textContent).toContain("Enviar e-mail");
  expect(root.textContent).toContain("Ver currículo");

  ReactDOM.unmountComponentAtNode(root);
});
