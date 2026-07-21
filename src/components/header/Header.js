import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import Button from "../button/Button";
import SeoHeader from "../seoHeader/SeoHeader";
import "./Header.css";

export const navigationItems = [
  { to: "/home", label: "Início" },
  { to: "/experience", label: "Experiência" },
  { to: "/projects", label: "Projetos" },
  { to: "/education", label: "Educação" },
  { to: "/contact", label: "Contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const homeLink = settings.isSplash ? "/splash" : "/home";

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <SeoHeader />
      <header className="header">
        <div className="site-container header__content">
          <Link className="header__brand" to={homeLink} onClick={closeMenu}>
            {greeting.title}
          </Link>
          <button
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            className="header__menu-button"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            <span aria-hidden="true" className="header__menu-icon" />
            <span className="sr-only">
              {isMenuOpen ? "Fechar menu" : "Abrir menu"}
            </span>
          </button>
          <nav
            aria-label="Navegação principal"
            className={`header__navigation ${
              isMenuOpen ? "header__navigation--open" : ""
            }`.trim()}
            id="primary-navigation"
          >
            <ul>
              {navigationItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    activeClassName="header__link--active"
                    className="header__link"
                    onClick={closeMenu}
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            className="header__resume-action"
            href={greeting.resumeLink}
            newTab={true}
            text="Ver currículo"
            variant="secondary"
          />
        </div>
      </header>
    </>
  );
}
