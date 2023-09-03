import React from "react";
import CardList from "../Cards/CardList";
import { cardInfo } from "../../Info/Cardinfo";
function Projects() {
    return (
        <section className="projects">
        <div>
         <CardList cardList={cardInfo} />
        </div>
        </section>
    );
}

export default Projects;