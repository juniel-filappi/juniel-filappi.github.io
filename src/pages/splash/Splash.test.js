import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import Splash from "./Splash";
import { precisionTheme } from "../../theme";

function renderSplash(root) {
  act(() => {
    ReactDOM.render(
      <MemoryRouter initialEntries={["/splash"]}>
        <Switch>
          <Route exact path="/home">
            <p>Início</p>
          </Route>
          <Route path="/splash">
            <Splash theme={precisionTheme} />
          </Route>
        </Switch>
      </MemoryRouter>,
      root
    );
  });
}

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

it("redirects to the home route after 1200ms", () => {
  const root = document.createElement("div");
  renderSplash(root);

  act(() => {
    jest.advanceTimersByTime(1199);
  });
  expect(root.querySelector(".splash-screen")).not.toBeNull();

  act(() => {
    jest.advanceTimersByTime(1);
  });
  expect(root.textContent).toBe("Início");

  ReactDOM.unmountComponentAtNode(root);
});

it("clears its pending redirect when unmounted", () => {
  const root = document.createElement("div");
  const clearTimeoutSpy = jest.spyOn(global, "clearTimeout");

  renderSplash(root);
  clearTimeoutSpy.mockClear();
  ReactDOM.unmountComponentAtNode(root);

  expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
  clearTimeoutSpy.mockRestore();
});
