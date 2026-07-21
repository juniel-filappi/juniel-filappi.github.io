import React from "react";
import { NavLink } from "react-router-dom";
import { greeting, socialMediaLinks } from "../../portfolio.js";
import { navigationItems } from "../header/Header";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-container footer__content">
        <p className="footer__copyright">
          © {new Date().getFullYear()} {greeting.title}. Todos os direitos
          reservados.
        </p>
        <nav aria-label="Navegação do rodapé">
          <ul className="footer__links">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <NavLink activeClassName="footer__link--active" to={item.to}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ul aria-label="Redes sociais" className="footer__social-links">
          {socialMediaLinks.map((media) => {
            const isExternalLink = media.link.startsWith("http");

            return (
              <li key={media.name}>
                <a
                  aria-label={media.name}
                  href={media.link}
                  rel={isExternalLink ? "noopener noreferrer" : undefined}
                  target={isExternalLink ? "_blank" : undefined}
                >
                  <i
                    aria-hidden="true"
                    className={`fab ${media.fontAwesomeIcon}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
