import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import "./ExperienceAccordion.css";

export default function ExperienceAccordion({ sections }) {
  return (
    <div className="experience-accord">
      <div className="site-container experience-sections">
        {sections.map((section) => (
          <section className="experience-group" key={section.title}>
            <h2>{section.title}</h2>
            <div className="experience-group__entries">
              {section.experiences.map((entry) => (
                <ExperienceCard
                  experience={entry}
                  key={`${entry.company}-${entry.title}-${entry.duration}`}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
