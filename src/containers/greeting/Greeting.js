import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import "./Greeting.css";

export default function Greeting() {
  return (
    <section className="home-hero section section--dark" id="greeting">
      <div className="site-container home-hero__grid">
        <div className="home-hero__content">
          <p className="home-hero__role">Full Stack Developer Sênior</p>
          <h1>Engenharia de software para produtos que precisam evoluir.</h1>
          <p>{greeting.subTitle}</p>
          <div className="home-hero__actions">
            <Link className="action-link action-link--primary" to="/projects">
              Ver projetos
            </Link>
            <Button
              href={greeting.resumeLink}
              newTab
              text="Ver currículo"
              variant="secondary-on-dark"
            />
          </div>
        </div>
        <div className="technical-plane" aria-hidden="true">
          <span>backend / frontend / cloud</span>
          <strong>Arquitetura, integração e entrega contínua.</strong>
        </div>
      </div>
    </section>
  );
}
