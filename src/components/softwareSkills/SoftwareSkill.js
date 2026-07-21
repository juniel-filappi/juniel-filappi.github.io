import React from "react";
import "./SoftwareSkill.css";

export default function SoftwareSkill({ logos }) {
  return (
    <ul aria-label="Tecnologias" className="dev-icons">
      {logos.slice(0, 12).map((logo, index) => (
        <li
          aria-label={logo.skillName}
          className="software-skill-inline"
          key={`${logo.skillName}-${index}`}
        >
          {logo.skillName}
        </li>
      ))}
    </ul>
  );
}
