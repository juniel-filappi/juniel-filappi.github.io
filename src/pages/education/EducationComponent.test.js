import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Education from "./EducationComponent";
import { certifications, degrees } from "../../portfolio";
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

afterEach(() => {
  document.body.innerHTML = "";
});

it("renders the degree record with its period and clean descriptions", () => {
  const root = renderEducation();
  const degree = degrees.degrees[0];
  const record = root.querySelector(".degree-record");

  expect(root.querySelector("main")).not.toBeNull();
  expect(record.textContent).toContain(degree.title);
  expect(record.textContent).toContain(degree.subtitle);
  expect(record.textContent).toContain(degree.duration);
  degree.descriptions.forEach((description) => {
    expect(record.textContent).toContain(description.replace(/^⚡\s*/, ""));
  });
  expect(record.textContent).not.toContain("⚡");

  const institutionLink = Array.from(record.querySelectorAll("a")).find(
    (link) => link.textContent === "Visitar instituição"
  );
  expect(institutionLink.getAttribute("href")).toBe(degree.website_link);
  expect(institutionLink.getAttribute("rel")).toBe("noopener noreferrer");

  ReactDOM.unmountComponentAtNode(root);
});

it("renders certificates as articles without empty interactive links", () => {
  const root = renderEducation();
  const certificateSection = root.querySelector(".certifications-section");
  const certificates = Array.from(
    certificateSection.querySelectorAll("article")
  );

  expect(certificateSection.querySelector("h2").textContent).toBe(
    "Certificações"
  );
  expect(certificates).toHaveLength(certifications.certifications.length);
  certifications.certifications.forEach((certificate) => {
    expect(certificateSection.textContent).toContain(certificate.title);
    expect(certificateSection.textContent).toContain(certificate.subtitle);
  });
  expect(
    Array.from(certificateSection.querySelectorAll("a")).find(
      (link) => !link.getAttribute("href")
    )
  ).toBeUndefined();

  ReactDOM.unmountComponentAtNode(root);
});
