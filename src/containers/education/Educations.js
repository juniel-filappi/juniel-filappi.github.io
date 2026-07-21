import React from "react";
import DegreeCard from "../../components/degreeCard/DegreeCard";
import { degrees } from "../../portfolio";
import "./Educations.css";

export default function Educations({ theme }) {
  return (
    <section
      aria-labelledby="education-heading"
      className="education-section section section--soft"
      id="educations"
    >
      <div className="site-container">
        <div className="education-section__heading">
          <p className="education-section__eyebrow">Formação acadêmica</p>
          <h2 id="education-heading">Graduação</h2>
        </div>
        <div className="education-records">
          {degrees.degrees.map((degree) => (
            <DegreeCard
              degree={degree}
              key={`${degree.title}-${degree.subtitle}`}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
