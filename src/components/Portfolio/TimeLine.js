import React from "react";
import ExperienceList from "../Cards/ExperienceList";
import { experienceInfo} from "../../Info/Cardinfo";
function Experience() {
    return (
        <section className="experience">
         <div>
            <ExperienceList experienceList={experienceInfo} />
         </div>
        </section>
    );
}

export default Experience;