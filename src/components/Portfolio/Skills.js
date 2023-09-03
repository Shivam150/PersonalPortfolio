import React from "react";
import SkillList from "../Cards/SkillList";
import { skillInfo } from "../../Info/Skillinfo"; // Import skillInfo

function Skills() {
  return (
    <section className="skills">
      <div>
        <SkillList skillList={skillInfo} />
      </div>
    </section>
  );
}

export default Skills;
