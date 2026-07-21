import React from "react";
import "./PageHero.css";

export default function PageHero({
  actions,
  description,
  title,
  tone = "light",
}) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="site-container page-hero__content">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {actions && <div className="page-hero__actions">{actions}</div>}
      </div>
    </section>
  );
}
