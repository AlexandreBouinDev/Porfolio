import React from "react";

interface ICareerEventProps {
    date: number;
    title: string;
    skills?: string;
    details: string;
}

export default function CareerEvent({
    date,
    title,
    skills,
    details,
}: ICareerEventProps) {
    let xSkills;
    if (skills !== undefined) {
        xSkills = (
            <div className="content-skills">
                <b>Compétences acquises : </b>
                {skills}
            </div>
        );
    }

    return (
        <div className="event-block">
            <div className="date">
                <b>{date}</b>
            </div>
            <div className="marker"></div>
            <div className="content">
                <div className="content-title">
                    <b>{title}</b>
                </div>
                <div className="content-details">
                    <em>{details}</em>
                </div>
                {xSkills}
            </div>
        </div>
    );
}
