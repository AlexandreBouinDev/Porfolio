import React from "react";

interface IProjectItemProps {
    title: string;
    description: string;
    img: any;
    link?: string;
    role?: string;
    tech?: Array<any>;
}

export default function ProjectItem({
    title,
    description,
    img,
    link,
    role,
    tech,
}: IProjectItemProps) {
    let techlist: any = [];
    tech?.forEach((item) =>
        techlist.push(
            <span className="tech-block" style={{ background: item.color }}>
                {item.name}
            </span>
        )
    );

    return (
        <a className="project-item" href={link} target="_blank">
            <img src={img} alt={title} />
            <div className="project-description">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>
                    <b>Rôle : </b>
                    {role}
                </p>
                <p>
                    <b>Technologies utilisées : </b>
                    {techlist.map((item: any) => item)}
                </p>
            </div>
        </a>
    );
}
