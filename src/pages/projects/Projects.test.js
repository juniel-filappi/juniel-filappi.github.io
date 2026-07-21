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

  expect(link.textContent).toBe("Abrir repositório →");
  expect(link.getAttribute("rel")).toBe("noopener noreferrer");
  expect(root.textContent).toContain(
    "Descrição disponível no repositório do projeto."
  );
});

it("renders a useful state when no projects are available", () => {
  const root = renderProjects([]);
  expect(root.textContent).toContain("Veja todos os projetos no GitHub");
});
