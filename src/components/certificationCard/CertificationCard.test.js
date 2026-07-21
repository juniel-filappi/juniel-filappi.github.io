import React from "react";
import ReactDOM from "react-dom";
import CertificationCard from "./CertificationCard";

it("wraps a certificate with a URL in one secure external link", () => {
  const root = document.createElement("div");
  const certificate = {
    title: "Certificação de teste",
    subtitle: "Instituição de teste",
    logo_path: "upinside_logo.png",
    alt_name: "Logo de teste",
    certificate_link: "https://example.com/certificate",
  };

  ReactDOM.render(<CertificationCard certificate={certificate} />, root);

  const links = root.querySelectorAll("a");
  const link = links[0];
  const articles = link.querySelectorAll("article");

  expect(links).toHaveLength(1);
  expect(link.getAttribute("href")).toBe(certificate.certificate_link);
  expect(link.getAttribute("target")).toBe("_blank");
  expect(link.getAttribute("rel")).toBe("noopener noreferrer");
  expect(articles).toHaveLength(1);
  expect(articles[0].textContent).toContain(certificate.title);
  expect(articles[0].textContent).toContain(certificate.subtitle);

  ReactDOM.unmountComponentAtNode(root);
});
