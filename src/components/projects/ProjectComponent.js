import React from 'react';
import '../../style/css/Projects.minx.css';

const ProjectComponent = ({english, imgSrc, name, liveLink, githubLink}) => {

    return <article className={"project"}>
        <div className={"img-container"}>
            <img src={imgSrc} alt={name} className={"project-img"}/>
        </div>
        <span className={"prohect-title"}>{name}</span>
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className={"live-link"}>Live</a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer"
           className={"code-link"}>{!english ? "Kod" : "Code"}</a>
    </article>
};

export default ProjectComponent;