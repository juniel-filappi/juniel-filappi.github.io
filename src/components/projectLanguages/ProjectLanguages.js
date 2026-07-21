import React from "react";
import "./ProjectLanguages.css";

export default function ProjectLanguages({ logos = [] }) {
  if (logos.length === 0) return null;

  return (
    <ul className="project-languages" aria-label="Tecnologias do projeto">
      {logos.map((logo) => (
        <li key={logo.name}>{logo.name}</li>
      ))}
    </ul>
  );
}
