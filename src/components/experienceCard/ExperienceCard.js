import React from "react";
import "./ExperienceCard.css";

export default function ExperienceCard({ experience }) {
  const {
    company,
    description,
    duration,
    location,
    logo_path: logoPath,
    title,
  } = experience;

  return (
    <article className="experience-card">
      <div className="experience-card__logo-column">
        <img
          alt={`${company} logo`}
          className="experience-card__logo"
          src={require(`../../assests/images/${logoPath}`)}
        />
      </div>
      <div className="experience-card__content">
        <div className="experience-card__scan-layer">
          <h3>{title}</h3>
          <p className="experience-card__company">{company}</p>
        </div>
        {(duration || location) && (
          <p className="experience-card__metadata">
            {duration && <span>{duration}</span>}
            {duration && location && <span aria-hidden="true"> · </span>}
            {location && <span>{location}</span>}
          </p>
        )}
        <p className="experience-card__description">{description}</p>
      </div>
    </article>
  );
}
