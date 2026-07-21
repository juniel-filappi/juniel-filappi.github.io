import React from "react";
import { Link } from "react-router-dom";
import PageShell from "../../../components/pageShell/PageShell";
import "./Error.css";

export default function Error404({ theme }) {
  return (
    <PageShell pageClassName="error-page" theme={theme}>
      <section className="error-hero section section--dark">
        <div className="site-container error-hero__content">
          <p className="error-hero__code">404</p>
          <h1>Página não encontrada</h1>
          <p>O endereço informado não existe ou foi movido.</p>
          <Link
            className="action-link action-link--secondary-on-dark error-hero__action"
            to="/home"
          >
            Voltar ao início
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
