import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";

const projectDateFormatter = new Intl.DateTimeFormat("pt-BR", {
  month: "short",
  year: "numeric",
});

export default function GithubRepoCard({ repo, index }) {
  const description =
    repo.description || "Descrição disponível no repositório do projeto.";
  const createdAt = projectDateFormatter.format(new Date(repo.createdAt));

  return (
    <article className="project-showcase">
      <div className="project-showcase__media" aria-hidden="true">
        <span>Projeto</span>
        <strong>{String(index + 1).padStart(2, "0")}</strong>
      </div>
      <div className="project-showcase__content">
        <p className="project-showcase__eyebrow">Repositório</p>
        <h3>{repo.name}</h3>
        <p className="project-showcase__description">{description}</p>
        <div className="project-showcase__details">
          <p>Criado em {createdAt}</p>
          <ProjectLanguages logos={repo.languages} />
        </div>
        <a href={repo.url} rel="noopener noreferrer" target="_blank">
          Abrir repositório <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
