import React from "react";
import CardList from "../Cards/CardList";
import { projectInfo } from "../../Info/Cardinfo";
function Projects() {
    return (
        <section className="projects">
        <div>
          <CardList cardList={projectInfo} />
        </div>
         </section>
    );
}

export default Projects;