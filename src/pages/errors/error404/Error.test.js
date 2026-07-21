import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Error404 from "./Error";
import { precisionTheme } from "../../../theme";

function renderError() {
  const root = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Error404 theme={precisionTheme} />
    </MemoryRouter>,
    root
  );
  return root;
}

it("renders a localized recovery action", () => {
  const root = renderError();
  const recoveryLink = root.querySelector('main a[href="/home"]');

  expect(root.textContent).toContain("Página não encontrada");
  expect(recoveryLink.textContent).toBe("Voltar ao início");

  ReactDOM.unmountComponentAtNode(root);
});
