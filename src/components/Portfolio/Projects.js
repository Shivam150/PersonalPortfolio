import React from "react";
// import Card from "../Cards/Card";
import CardList from "../Cards/CardList";
import { cardInfo } from "../../Cardinfo";
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