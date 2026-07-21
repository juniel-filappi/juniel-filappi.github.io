import React from "react";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";

export default function SkillSection() {
  return (
    <div className="skill-sections">
      {skills.data.map((skill, skillIndex) => (
        <section
          className="skills-main-div"
          key={`${skill.title}-${skillIndex}`}
        >
          <div className="skills-text-div">
            <h3 className="skills-heading">{skill.title}</h3>
            <div className="skills-sentences">
              {skill.skills.map((skillSentence, sentenceIndex) => (
                <p key={`${skill.title}-${sentenceIndex}`}>{skillSentence}</p>
              ))}
            </div>
          </div>
          <SoftwareSkill logos={skill.softwareSkills} />
        </section>
      ))}
    </div>
  );
}
