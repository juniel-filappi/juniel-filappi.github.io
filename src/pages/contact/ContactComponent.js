import React from "react";
import Button from "../../components/button/Button";
import PageShell from "../../components/pageShell/PageShell";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactPageData, greeting } from "../../portfolio.js";
import "./ContactComponent.css";

const contactSection = contactPageData.contactSection;

export default function Contact({ theme }) {
  return (
    <PageShell pageClassName="contact-page" theme={theme}>
      <section className="contact-hero section section--dark">
        <div className="site-container contact-hero__content">
          <p className="contact-hero__eyebrow">Vamos conversar</p>
          <h1>{contactSection.title}</h1>
          <p className="contact-hero__description">
            {contactSection.description}
          </p>
          <SocialMedia />
          <Button
            className="contact-hero__resume-action"
            href={greeting.resumeLink}
            newTab={true}
            text="Ver currículo"
            variant="secondary-on-dark"
          />
        </div>
      </section>
    </PageShell>
  );
}
