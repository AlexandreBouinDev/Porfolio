import React from "react";

import "../styles/contact.style.scss";

import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

export default function Contact() {
    return (
        <div className="contact-root" id="contact">
            <h1>Contact</h1>
            <div className="contact-block">
                <div className="contact-col">
                    <h2>Par mail </h2>
                    <a
                        className="button"
                        href="mailto:alexandre.bouin.dev@gmail.com"
                    >
                        <b>alexandre.bouin.dev@gmail.com</b>
                    </a>
                </div>
                <div className="contact-col">
                    <h2>Via les réseaux </h2>
                    <div className="networks">
                        <a
                            href="https://github.com/AlexandreBouinDev"
                            className="button"
                            target="_blank"
                        >
                            <img src={github} alt="github" />
                            <b>GitHub</b>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alexandre-bouin-dev/"
                            className="button"
                            target="_blank"
                        >
                            <img src={linkedin} alt="linkedin" />
                            <b>LinkedIn</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
