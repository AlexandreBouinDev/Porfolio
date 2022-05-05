import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Portfolio`,
        siteUrl: `https://alexandrebouindev.netlify.app/`,
    },
    plugins: ["gatsby-plugin-sass"],
};

export default config;
