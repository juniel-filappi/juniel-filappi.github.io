import React from "react";
import Certifications from "../../containers/certifications/Certifications";
import Educations from "../../containers/education/Educations";
import PageHero from "../../components/pageHero/PageHero";
import PageShell from "../../components/pageShell/PageShell";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";

export default function Education({ theme }) {
  return (
    <PageShell pageClassName="education-page" theme={theme}>
      <PageHero
        title="Educação"
        description="Formação acadêmica e certificações que sustentam uma prática de engenharia de software orientada a fundamentos e evolução contínua."
      />
      <Educations theme={theme} />
      {certifications.certifications.length > 0 && (
        <Certifications theme={theme} />
      )}
    </PageShell>
  );
}
