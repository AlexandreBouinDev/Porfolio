import React from "react";
import ProjectItem from "./ProjectItem";
import "../styles/projects.style.scss";

import dotter from "../images/dotter.png";
import documentation from "../images/documentation.png";
import encours from "../images/wip.png";
import moltak from "../images/Moltak.jpg";

export default function Projects() {
    return (
        <div className="projects-root" id="projects">
            <h1>🕸 Mes projets web</h1>
            <div className="projects-list">
                <ProjectItem
                    title="Dotter.science"
                    img={dotter}
                    description="Dotter.science est une plateforme en ligne permettant d’optimiser la conception, la saisie (eCRF) et le management électronique des protocoles de recherche clinique."
                    link="http://dotter.science"
                    role="Développement de features, résolution de bugs, conception et maquettage de fonctionnalités"
                    tech={[
                        { name: "JSReact", color: "#1caaaf" },
                        { name: "Gatsby", color: "#5316c4" },
                        { name: "Feathers", color: "#535157" },
                        { name: "Python", color: "#cca31b" },
                    ]}
                />
                <ProjectItem
                    title="Documentation officielle de Dotter.science"
                    img={documentation}
                    description="Cette documentation offre des tutoriels et des guides avancés pour exploiter toutes les fonctionnalités de Dotter.science"
                    link="http://doc.dotter.science"
                    role="Développement de A à Z du projet, rédaction des tutoriels"
                    tech={[
                        { name: "JSReact", color: "#1caaaf" },
                        { name: "Gatsby", color: "#5316c4" },
                        { name: "Sass", color: "#ad199a" },
                    ]}
                />
                <ProjectItem
                    title="My Little Budget"
                    img={encours}
                    description="Gérez vos dépenses mensuelles et prévisualisez votre budget au jour près !"
                    role="Conception et développement complet du projet"
                    tech={[
                        { name: "JSReact", color: "#1caaaf" },
                        { name: "Gatsby", color: "#5316c4" },
                        { name: "Sass", color: "#ad199a" },
                        { name: "Express", color: "#535157" },
                    ]}
                />
            </div>
            <div className="more-projects">
                <a
                    href="https://github.com/AlexandreBouinDev"
                    target={"_blank"}
                >
                    <h3>👉 Plus de projets sur mon profil GitHub</h3>
                </a>
            </div>
            <h1>🎵 Mes autres projets</h1>
            <div className="projects-list">
                <a
                    className="project-item"
                    href="https://open.spotify.com/artist/1vSLGjF1KA7LQt9QX3Kvar?si=vBoUUlNUTqWB8SecxBjYmw&dl_branch=1"
                    target="_blank"
                >
                    <img src={moltak} alt="MOLTAK Music Prod" />
                    <div className="project-description">
                        <h2>MOLTAK Music Prod</h2>
                        <p>
                            MOLTAK est mon nom d'artiste par lequel j'ai publié
                            deux albums et un EP :
                            <li>
                                <b>Red Old Recorder</b> ( 2014)
                            </li>
                            <li>
                                <b>Project K Recoded</b> (2020-2021)
                            </li>
                            <li>
                                <b>The Great Update</b> (2021)
                            </li>
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
}
