import React from "react";
import "./CertificationCard.css";

export default function CertificationCard({ certificate }) {
  const certificateContent = (
    <article className="certification-card">
      <div className="certification-card__logo">
        <img
          alt={certificate.alt_name}
          src={require(`../../assests/images/${certificate.logo_path}`)}
        />
      </div>
      <div className="certification-card__content">
        <h3>{certificate.title}</h3>
        <p>{certificate.subtitle}</p>
      </div>
    </article>
  );

  if (!certificate.certificate_link) {
    return certificateContent;
  }

  return (
    <a
      className="certification-card__link"
      href={certificate.certificate_link}
      rel="noopener noreferrer"
      target="_blank"
    >
      {certificateContent}
    </a>
  );
}
