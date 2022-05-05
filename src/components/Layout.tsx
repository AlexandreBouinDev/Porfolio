import React from "react";
import Helmet from "react-helmet";
import Scroll from "./Scroll";

interface ILayoutProps {
    children: any;
}
function Layout({ children }: ILayoutProps) {
    console.log("TOTO");
    return (
        <div>
            <Helmet>
                <title>Alexandre Bouin - Portfolio</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <Scroll showBelow={250} />
            <div className="root">{children}</div>
        </div>
    );
}
export default Layout;
