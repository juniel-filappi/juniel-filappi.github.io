import React from "react";
import "./SectionHeading.css";

export default function SectionHeading({
  align = "start",
  description,
  title,
}) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
