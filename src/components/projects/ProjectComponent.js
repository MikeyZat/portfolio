import React from 'react';
import '../../style/css/Projects.minx.css';

const ProjectComponent = ({english, imgSrc, name, liveLink, githubLink, right}) => {

    return <article className={"project"}>
        <div className={"img-container"}>
            <img src={imgSrc} alt={name} className={"project-img"}/>
        </div>
        <div className={"info-container " + (right ? "right" : "left")}>
            <span className={"project-title"}><span className={"title"}>{name}</span></span>
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className={"live-link"}>
                <span className={"text"}>Live</span>
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer"
               className={"code-link"}>
                <i className="fab fa-github"/>
                <span className={"text"}>{!english ? "Kod" : "Code"}</span>
            </a>
        </div>
    </article>
};

export default ProjectComponent;