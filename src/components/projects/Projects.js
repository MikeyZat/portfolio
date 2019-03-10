import React from 'react';
import '../../style/css/Projects.minx.css';
import ProjectComponent from "./ProjectComponent";

const Projects = ({english}) =>{

    return <section id={"projects"} className={"projects-section"}>
        <h2>{!english?"Projekty":"Projects"}</h2>
        <div className={"projects-container"}>
            <ProjectComponent english={english} name={"flaneczki.pl"} imgSrc={"flaneczki.png"} githubLink={""} liveLink={"https://flaneczki.pl/"}/>
            <ProjectComponent english={english} name={"portfolio"} imgSrc={"portfolio.png"} githubLink={""} liveLink={"https://flaneczki.pl/"}/>
            <ProjectComponent english={english} name={""} imgSrc={"flaneczki.jpg"} githubLink={""} liveLink={"https://flaneczki.pl/"}/>
            <ProjectComponent english={english} name={"flaneczki.pl"} imgSrc={"flaneczki.jpg"} githubLink={""} liveLink={"https://flaneczki.pl/"}/>
            <ProjectComponent english={english} name={"flaneczki.pl"} imgSrc={"flaneczki.jpg"} githubLink={""} liveLink={"https://flaneczki.pl/"}/>
            <ProjectComponent english={english} name={"flaneczki.pl"} imgSrc={"flaneczki.jpg"} githubLink={""} liveLink={"https://flaneczki.pl/"}/>
        </div>

    </section>
};

export default Projects;