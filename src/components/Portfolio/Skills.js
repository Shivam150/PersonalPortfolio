import React from "react";
import SkillList from "../Cards/SkillList";
// import CardList f";
import { skillInfo } from "../../Info/Cardinfo"; // Import skillInfo

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
