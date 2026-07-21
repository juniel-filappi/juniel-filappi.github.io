import React from "react";
import "./DegreeCard.css";

const cleanDescription = (description) => description.replace(/^⚡\s*/, "");

export default function DegreeCard({ degree }) {
  return (
    <article className="degree-record">
      {degree.logo_path && (
        <div className="degree-record__logo">
          <img
            alt={degree.alt_name}
            src={require(`../../assests/images/${degree.logo_path}`)}
          />
        </div>
      )}
      <div className="degree-record__content">
        <div className="degree-record__header">
          <div>
            <h3>{degree.title}</h3>
            <p className="degree-record__institution">{degree.subtitle}</p>
          </div>
          <p className="degree-record__duration">{degree.duration}</p>
        </div>
        <div className="degree-record__descriptions">
          {degree.descriptions.map((description) => (
            <p key={description}>{cleanDescription(description)}</p>
          ))}
        </div>
        {degree.website_link && (
          <a
            className="degree-record__link"
            href={degree.website_link}
            rel="noopener noreferrer"
            target="_blank"
          >
            Visitar instituição
          </a>
        )}
      </div>
    </article>
  );
}
