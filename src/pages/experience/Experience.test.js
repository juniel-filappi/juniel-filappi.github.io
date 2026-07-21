import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Experience from "./Experience";
import { experience } from "../../portfolio";
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
  const cards = Array.from(root.querySelectorAll(".experience-card"));
  const expectedEntryCount = experience.sections.reduce(
    (count, section) => count + section.experiences.length,
    0
  );

  experience.sections.forEach((section) => {
    expect(root.textContent).toContain(section.title);

    section.experiences.forEach((entry) => {
      expect(
        cards.some(
          (card) =>
            card.textContent.includes(entry.title) &&
            card.textContent.includes(entry.company) &&
            card.textContent.includes(entry.description)
        )
      ).toBe(true);
    });
  });

  expect(cards).toHaveLength(expectedEntryCount);
  expect(root.querySelector(".experience-sections [aria-expanded]")).toBeNull();

  ReactDOM.unmountComponentAtNode(root);
});
