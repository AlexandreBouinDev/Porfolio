import React, { useState } from "react";
import CareerEvent from "./CareerEvent";

import "../styles/career.style.scss";

export default function Career() {
    const [opened, setOpened] = useState<string>("career-root");
    const [expendmessage, setExpendMessage] = useState<string>("voir plus");

    function handleOpen() {
        if (opened === "career-root") {
            setOpened("career-root opened");
            setExpendMessage("voir moins");
        } else {
            setOpened("career-root");
            setExpendMessage("voir plus");
        }
    }

    return (
        <div className={opened} id="career">
            <div className="wrapper">
                <div className="time-line"></div>
                <h1>Parcours</h1>
                <div className="event-list">
                    <CareerEvent
                        date={2021}
                        title="💻 Formation Développeur Web Niveau 5 en alternance"
                        skills="Développer en JS (React, Vue, Node), construire une API REST, gérer une Base de donnée (MongoDB et mySQL), versionner un projet avec Git"
                        details="École : OpenClassrooms.com | Entreprise : KerNel Biomedical"
                    />
                    <CareerEvent
                        date={2019}
                        title="🐸 Enseignant en Sciences de la Vie et de la Terre (SVT)"
                        skills="Maîtriser des connaissances techniques et savoir les transmettre, coopérer au sein d'une équipe, développer un raisonnement scientifique et logique"
                        details="Postes en collège-lycée pendant 2 ans dans la zone de Bernay (27)"
                    />
                    <CareerEvent
                        date={2017}
                        title="📚 Licence de Biologie générale et Master Enseignement SVT"
                        skills="Savoirs fondamentaux en sciences, savoir s'autoformer et chercher des informations pour développer ses connaissances"
                        details="1ère année, via l'INSPE et l'Université de Rouen"
                    />
                    <CareerEvent
                        date={2015}
                        title="👨‍🔬 Master Analyse et Qualité en Bio-Industries"
                        skills="Maîtriser un système qualité, gestion de projet, manager une équipe"
                        details="Spécialisation en 2 ans et 9 mois de stages cumulés, via l'Université de Rouen"
                    />
                    <CareerEvent
                        date={2014}
                        title="🧬 Licence de Biochimie, Biologie et Physiologie"
                        skills="Savoir fondamentaux en sciences et méthodologie scientifique"
                        details="Université de Rouen"
                    />
                    <CareerEvent
                        date={2012}
                        title="🧪 BTS Bioanalyses et Contrôles"
                        details="Université de Rouen"
                    />
                    <CareerEvent
                        date={2012}
                        title="👨‍🎓 Baccalauréat Scientifique"
                        details="Obtenu mention bien et mention européenne (anglais), au Lycée André Maurois d'Elbeuf (76)"
                    />
                </div>
            </div>
            <div className="expender" onClick={() => handleOpen()}>
                ({expendmessage})
            </div>
        </div>
    );
}
