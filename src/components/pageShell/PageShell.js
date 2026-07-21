import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import TopButton from "../topButton/TopButton";
import "./PageShell.css";

export default function PageShell({ children, pageClassName = "", theme }) {
  return (
    <div className={`page-shell ${pageClassName}`.trim()}>
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <Header theme={theme} />
      <main id="main-content">{children}</main>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
