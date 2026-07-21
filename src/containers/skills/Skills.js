import React from "react";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import SkillSection from "./SkillSection";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="section home-skills" id="skills">
      <div className="site-container">
        <SectionHeading
          description="Da interface à infraestrutura, com foco em escolhas que deixam o produto pronto para crescer."
          title="Capacidades técnicas"
        />
        <SkillSection />
      </div>
    </section>
  );
}
