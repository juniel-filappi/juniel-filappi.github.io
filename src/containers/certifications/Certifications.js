import React from "react";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import { certifications } from "../../portfolio";
import "./Certifications.css";

export default function Certifications({ theme }) {
  return (
    <section
      aria-labelledby="certifications-heading"
      className="certifications-section section"
      id="certs"
    >
      <div className="site-container">
        <div className="certifications-section__heading">
          <p className="certifications-section__eyebrow">
            Desenvolvimento contínuo
          </p>
          <h2 id="certifications-heading">Certificações</h2>
        </div>
        <div className="certifications-grid">
          {certifications.certifications.map((certificate) => (
            <CertificationCard
              certificate={certificate}
              key={`${certificate.title}-${certificate.subtitle}`}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
