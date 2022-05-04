import React from "react";
import TechnoLogo from "./TechnoLogo";

import "../styles/skills.style.scss";

import html from "../images/html.png";
import css from "../images/css.png";
import sass from "../images/sass.png";
import js from "../images/js.png";
import react from "../images/react.png";
import vue from "../images/vuejs.png";
import gatsby from "../images/icon.png";
import node from "../images/nodejs.png";
import express from "../images/expressjs.png";
import feathers from "../images/feathersjs.svg";
import python from "../images/python.png";
import mysql from "../images/mysql.png";

export default function Skills() {
    return (
        <div className="skills-root" id="skills">
            <h1>💻 Mes technologies 💻</h1>
            <div className="skills-list">
                <div className="skills-cat">
                    <h2>FRONT</h2>
                    <TechnoLogo title="HTML 5" src={html} />
                    <div className="duo">
                        <TechnoLogo title="CSS 3" src={css} />
                        <TechnoLogo title="Sass" src={sass} />
                    </div>
                    <TechnoLogo title="JS ES6" src={js} />
                    <div className="duo">
                        <TechnoLogo title="React" src={react} />
                        <TechnoLogo title="Gatsby" src={gatsby} />
                    </div>
                    <TechnoLogo title="VueJS" src={vue} />
                </div>
                <div className="skills-cat">
                    <h2>BACK</h2>
                    <TechnoLogo title="NodeJS" src={node} />
                    <div className="duo">
                        <TechnoLogo title="ExpressJS" src={express} />
                        <TechnoLogo title="FeathersJS" src={feathers} />
                    </div>
                </div>
                <div className="skills-cat">
                    <h2>AUTRES</h2>
                    <TechnoLogo title="Python" src={python} />
                    <TechnoLogo title="MySQL" src={mysql} />
                </div>
            </div>
        </div>
    );
}
