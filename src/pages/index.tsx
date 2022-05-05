import * as React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";
import Career from "../components/Career";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = () => {
    return (
        <Layout>
            <NavBar />
            <div className="body-content">
                <Presentation />
                <Career />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </Layout>
    );
};

export default IndexPage;
