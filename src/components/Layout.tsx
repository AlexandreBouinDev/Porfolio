import React from "react";
import Helmet from "react-helmet";

interface ILayoutProps {
  children: any;
}
function Layout({ children }: ILayoutProps) {
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
      <div className="root">{children}</div>
    </div>
  );
}
export default Layout;
