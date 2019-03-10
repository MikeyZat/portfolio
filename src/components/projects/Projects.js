import React from 'react';
import '../../style/css/Projects.minx.css';
import ProjectComponent from "./ProjectComponent";

const Projects = ({english}) =>{

    return <section id={"projects"} className={"projects-section"}>
        <h2>{!english?"Projekty":"Projects"}</h2>
        <div className={"projects-container"}>
            <ProjectComponent english={english}
                              name={"flaneczki.pl"}
                              imgSrc={"flaneczki.png"}
                              githubLink={""}
                              liveLink={"https://flaneczki.pl/"}/>
            <ProjectComponent english={english}
                              name={"Portfolio"}
                              imgSrc={"portfolio.png"}
                              githubLink={"https://github.com/MikeyZat/portfolio"}
                              liveLink={"https://mikeyzat.github.io/"}/>
            <ProjectComponent english={english}
                              name={"Air Condition App"}
                              imgSrc={"airCondition.png"}
                              githubLink={"https://github.com/MikeyZat/AirCondition"}
                              liveLink={"https://mikeyzat.github.io/AirCondition/"}/>
            <ProjectComponent english={english}
                              name={"Paypal Invoice Calculator"}
                              imgSrc={"priceConverter.png"}
                              githubLink={"https://github.com/MikeyZat/PriceConverted"}
                              liveLink={"https://mikeyzat.github.io/PriceConverted/"}/>
            <ProjectComponent english={english}
                              name={"To Do List"}
                              imgSrc={"notes.png"}
                              githubLink={"https://github.com/MikeyZat/bestNotes"}
                              liveLink={"https://mikeyzat.github.io/bestNotes/"}/>
        </div>

    </section>
};

export default Projects;