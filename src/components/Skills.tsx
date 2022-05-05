import React from "react";
import TechnoLogo from "./TechnoLogo";

import "../styles/skills.style.scss";

import html from "../images/html.png";
import css from "../images/css.png";
import sass from "../images/sass.png";
import js from "../images/js.png";
import ts from "../images/typescript.png";
import react from "../images/react.png";
import vue from "../images/vuejs.png";
import gatsby from "../images/icon.png";
import node from "../images/nodejs.png";
import express from "../images/expressjs.png";
import feathers from "../images/feathersjs.svg";
import python from "../images/python.png";
import mysql from "../images/mysql.png";
import mongodb from "../images/mongodb.png";

export default function Skills() {
    return (
        <div className="skills-root" id="skills">
            <h1>Mes technologies</h1>
            <div className="skills-list">
                <div className="skills-leftpart">
                    <div className="skills-cat front">
                        <h2>FRONT</h2>
                        <div className="logos">
                            <TechnoLogo title="HTML 5" src={html} />
                            <div className="duo">
                                <TechnoLogo title="CSS 3" src={css} />
                                <TechnoLogo title="Sass" src={sass} />
                            </div>
                            <div className="duo">
                                <TechnoLogo title="JS ES6" src={js} />
                                <TechnoLogo title="TypeScript" src={ts} />
                            </div>
                            <div className="duo">
                                <TechnoLogo title="React" src={react} />
                                <TechnoLogo title="Gatsby" src={gatsby} />
                            </div>
                            <TechnoLogo title="VueJS" src={vue} />
                        </div>
                    </div>
                    <div className="skills-cat">
                        <h2>BACK</h2>
                        <div className="logos">
                            <TechnoLogo title="NodeJS" src={node} />
                            <div className="duo">
                                <TechnoLogo title="ExpressJS" src={express} />
                                <TechnoLogo title="FeathersJS" src={feathers} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills-cat others">
                    <h2>AUTRES</h2>
                    <div className="logos others">
                        <TechnoLogo title="Python" src={python} />
                        <div className="duo">
                            <TechnoLogo title="MongoDB" src={mongodb} />
                            <TechnoLogo title="MySQL" src={mysql} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
