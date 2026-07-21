import React from "react";
import { socialMediaLinks } from "../../portfolio";
import "./SocialMedia.css";

const actionLabels = {
  Github: "Ver GitHub",
  LinkedIn: "Ver LinkedIn",
  Gmail: "Enviar e-mail",
};

function getActionLabel(media) {
  return actionLabels[media.name] || `Ver ${media.name}`;
}

export default function SocialMedia() {
  return (
    <ul aria-label="Canais de contato" className="social-media-list">
      {socialMediaLinks.map((media) => {
        const isExternalLink = media.link.startsWith("http");

        return (
          <li key={media.name}>
            <a
              className="social-media-link"
              href={media.link}
              rel={isExternalLink ? "noopener noreferrer" : undefined}
              target={isExternalLink ? "_blank" : undefined}
            >
              <i
                aria-hidden="true"
                className={`fab ${media.fontAwesomeIcon}`}
              />
              <span>{getActionLabel(media)}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
