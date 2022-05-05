import React from "react";
import Helmet from "react-helmet";
import Scroll from "./Scroll";
import favicon from "../images/favicon.png";
interface ILayoutProps {
    children: any;
}
function Layout({ children }: ILayoutProps) {
    console.log("TOTO");
    return (
        <div>
            <Helmet
                link={[
                    {
                        rel: "shortcut icon",
                        type: "image/png",
                        href: `${favicon}`,
                    },
                ]}
            >
                <title>Alexandre Bouin - Portfolio</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href={favicon} />{" "}
            </Helmet>
            <Scroll showBelow={250} />
            <div className="root">{children}</div>
        </div>
    );
}
export default Layout;
