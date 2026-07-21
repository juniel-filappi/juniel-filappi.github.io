import React from "react";
import "./Button.css";

export default function Button({
  text,
  className = "",
  href,
  newTab = false,
  variant = "primary",
}) {
  if (!href) return null;

  return (
    <a
      className={`action-link action-link--${variant} ${className}`.trim()}
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {text}
    </a>
  );
}
