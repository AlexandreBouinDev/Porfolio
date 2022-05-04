import React from "react";

interface ITechnoLogoProps {
    src: any;
    title: string;
}

export default function TechnoLogo({ src, title }: ITechnoLogoProps) {
    return (
        <div className="logo-desc">
            <img src={src} alt={title} />
            <p>
                <b>{title}</b>
            </p>
        </div>
    );
}
