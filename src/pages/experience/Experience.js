import React from "react";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion";
import PageHero from "../../components/pageHero/PageHero";
import PageShell from "../../components/pageShell/PageShell";
import { experience } from "../../portfolio";
import "./Experience.css";

export default function Experience({ theme }) {
  return (
    <PageShell pageClassName="experience-page" theme={theme}>
      <PageHero
        title={experience.title}
        description={
          <>
            <span className="experience-hero__subtitle">
              {experience.subtitle}
            </span>
            <span>{experience.description}</span>
          </>
        }
      />
      <ExperienceAccordion sections={experience.sections} theme={theme} />
      <section className="experience-summary section--dark">
        <div className="site-container experience-summary__content">
          <p className="experience-summary__eyebrow">Perfil profissional</p>
          <h2>Resumo de carreira</h2>
          <p>
            Experiência em desenvolvimento full stack, arquitetura de software,
            DevOps e colaboração direta com produto e clientes.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
