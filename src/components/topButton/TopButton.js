import React, { useEffect, useState } from "react";
import "./TopButton.css";

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(window.pageYOffset > 30);
    }

    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function scrollToTop() {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <button
      aria-label="Voltar ao topo"
      className={`top-button ${isVisible ? "top-button--visible" : ""}`.trim()}
      onClick={scrollToTop}
      type="button"
    >
      <i aria-hidden="true" className="fas fa-arrow-up" />
    </button>
  );
}
