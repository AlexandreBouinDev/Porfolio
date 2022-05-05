import React from "react";

import alexandre from "../images/alexandre.jpg";

import "../styles/presentation.style.scss";

export default function Presentation() {
    return (
        <div className="presentation-root" id="#">
            <div>
                <img src={alexandre} alt="Avatar" />
                <h1 className="title resp">"Salut à toi jeune recruteur !"</h1>
            </div>
            <div className="presentation-text">
                <h1 className="title notresp">
                    "Salut à toi jeune recruteur !"
                </h1>
                <p>
                    J'ai 27 ans et suis originaire de Rouen (76). À la base
                    scientifique de formation majoritairement universitaire,
                    puis enseignant en biologie, je suis désormais en
                    reconversion professionnelle dans le domaine du
                    développement web.
                </p>
                <p>
                    Actuellement, je me forme en alternance et sur des projets
                    personnels. Cela me permet à la fois un apport de
                    connaissances techniques de par ma formation accélérée via
                    OpenClassrooms, mais aussi de compétences pratiques par
                    l'expérience en entreprise. Ainsi, la double casquette
                    étudiant/salarié m'offre une courbe de progression
                    extrêmement intéressante. En très peu de temps j'ai pu
                    apprendre et maîtriser des technologies diverses : React,
                    Vue, Node, Python, etc...
                </p>
                <p>
                    En dehors de l'aspect professionnel, je m'intéresse à
                    beaucoup d'autres choses : passionné de Musique Assistée par
                    Ordinateur (MAO) et de musiques électroniques, adepte des
                    logiciels de graphisme également (Photoshop, Illustrator,
                    After Effects), je suis très porté par l'univers du jeu
                    vidéo et particulièrement par les jeux de réflexion (se
                    prendre la tête c'est une passion) et joueur de boardgames.
                </p>
                <p style={{ alignSelf: "flex-end" }}>
                    <b>- Alexandre Bouin</b>
                </p>
            </div>
        </div>
    );
}
