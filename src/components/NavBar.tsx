import React from "react";

import "../styles/navbar.style.scss";

export default function NavBar() {
    return (
        <div className="navbar-root">
            <a href="#career">Parcours</a>
            <a href="#skills">Mes technologies</a>
            <a href="#projects">Projets</a>
            <a href="#contact">Contact</a>
        </div>
    );
}
