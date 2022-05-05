import React, { useState, useEffect } from "react";
import clx from "clsx";

import { showable } from "../helpers/showable";

import "../styles/scroll.style.scss";
import img from "../images/scrolltop.png";

interface IScrollProps {
    showBelow: number;
}

function Scroll({ showBelow }: IScrollProps) {
    console.log("button");
    const [show, setShow] = useState(showable(showBelow));

    const handleScroll = () => {
        setShow(showable(showBelow));
        console.log(show);
    };

    const handleClick = () => {
        window["scrollTo"]({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <img
            src={img}
            className={clx("scrolltop-btn", {
                hide: show === false,
            })}
            onClick={handleClick}
        />
    );
}

export default Scroll;
