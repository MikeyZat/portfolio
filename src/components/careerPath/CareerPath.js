import React from 'react';
import '../../style/css/CareerPath.minx.css';

const CareerPath = ({english}) => {

    return (<section id={"career"} className={"career-section"}>
        <h2 className={"slide-left"}>{!english ? "Ścieżka kariery" : "Career path"}</h2>
        <div className={"timeline-box"}>
            <ul className={"timeline"}>
                <li>
                    <div className={"item"}>
                        <span className={"date"}>09.2017</span>
                        <h3 className={"text"}>{!english ? "Pierwszy kontakt z programowaniem" : "First contact with programming"}</h3>
                    </div>
                </li>
                <li>
                    <div className={"item"}>
                        <span className={"date"}>06.2018</span>
                        <h3 className={"text"}>{!english ? "Nauka Javy i pierwsze własne projekty" : "Learning java and creating first own projects"}</h3>
                    </div>
                </li>
                <li>
                    <div className={"item"}>
                        <span className={"date"}>10.2018</span>
                        <h3 className={"text"}>{!english ? "Początek nauki JavaScript'u i biblioteki React.js" : "Started to learn JavaScript and React.js"}</h3>
                    </div>
                </li>
                <li>
                    <div className={"item"}>
                        <span className={"date"}>03.2019</span>
                        <h3 className={"text"}>{!english ? "Opublikowanie największego dotychczas projektu  flaneczki.pl" : "Publishing the greatest project so far flaneczki.pl"}</h3>
                    </div>
                </li>
            </ul>
        </div>
    </section>);
};

export default CareerPath;