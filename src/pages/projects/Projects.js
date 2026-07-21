import React from "react";
import Button from "../../components/button/Button";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PageHero from "../../components/pageHero/PageHero";
import PageShell from "../../components/pageShell/PageShell";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import { greeting, projectsHeader } from "../../portfolio";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";

export function ProjectsContent({ projects }) {
  if (projects.length === 0) {
    return (
      <section className="section projects-content">
        <div className="site-container projects-empty-state">
          <SectionHeading
            title="Projetos em atualização"
            description="Novos estudos e entregas podem ser consultados diretamente no GitHub."
          />
          <Button
            className="projects-empty-state__action"
            href={greeting.githubProfile}
            newTab={true}
            text="Veja todos os projetos no GitHub"
            variant="secondary"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="section projects-content">
      <div className="site-container">
        <SectionHeading
          title="Repositórios selecionados"
          description="Cada projeto reúne decisões técnicas, tecnologias e contexto para uma leitura objetiva do trabalho realizado."
        />
        <div className="projects-showcase">
          {projects.map((repo, index) => (
            <GithubRepoCard index={index} key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Projects({ theme }) {
  return (
    <PageShell pageClassName="projects-page" theme={theme}>
      <PageHero
        title={projectsHeader.title}
        description={projectsHeader.description}
      />
      <ProjectsContent projects={ProjectsData.data} />
    </PageShell>
  );
}
