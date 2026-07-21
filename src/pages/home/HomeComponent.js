import React from "react";
import { Link } from "react-router-dom";
import PageShell from "../../components/pageShell/PageShell";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import { experience } from "../../portfolio";
import projectsData from "../../shared/opensource/projects.json";

const selectedProjects = projectsData.data
  .filter((project) => !project.isFork)
  .slice(0, 3);

const firstWorkExperience = experience.sections.find((section) => section.work)
  .experiences[0];

function Home({ theme }) {
  return (
    <PageShell pageClassName="home-page" theme={theme}>
      <Greeting theme={theme} />

      <section className="section home-projects">
        <div className="site-container">
          <SectionHeading
            description="Uma seleção de repositórios para explorar decisões técnicas e tecnologias aplicadas."
            title="Projetos selecionados"
          />
          <div className="home-projects__grid">
            {selectedProjects.map((project) => (
              <article className="home-project-card" key={project.id}>
                <p className="home-project-card__eyebrow">Repositório</p>
                <h3>{project.name}</h3>
                <p>
                  {project.description ||
                    "Repositório selecionado para consulta técnica."}
                </p>
                {project.languages.length > 0 && (
                  <ul aria-label={`Tecnologias em ${project.name}`}>
                    {project.languages.map((language) => (
                      <li key={`${project.id}-${language.name}`}>
                        {language.name}
                      </li>
                    ))}
                  </ul>
                )}
                <a href={project.url} rel="noopener noreferrer" target="_blank">
                  Ver no GitHub <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
          <Link className="action-link action-link--text" to="/projects">
            Ver todos os projetos
          </Link>
        </div>
      </section>

      <Skills theme={theme} />

      <section className="home-career-proof">
        <div className="site-container home-career-proof__content">
          <p>Experiência em produto</p>
          <div>
            <h2>
              {firstWorkExperience.title} na {firstWorkExperience.company}
            </h2>
            <p>{firstWorkExperience.description}</p>
          </div>
          <Link className="action-link action-link--secondary" to="/experience">
            Ver experiência
          </Link>
        </div>
      </section>

      <section className="section section--dark home-contact-cta">
        <div className="site-container home-contact-cta__content">
          <div>
            <p className="home-contact-cta__eyebrow">Próximo passo</p>
            <h2>Vamos construir a próxima evolução do seu produto.</h2>
          </div>
          <Link className="action-link action-link--primary" to="/contact">
            Entrar em contato
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

export default Home;
