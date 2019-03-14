import React from 'react';
import '../../style/css/Technologies.minx.css';
import Technology from "./Technology";

const Technologies = ({english}) => {
    return <section id={"technologies"} className={"tech-section"}>
        <h2 className={"slide-left"}>{!english ? "Technologie" : "Technologies"}</h2>
        <div className={"container"}>
            <article className={"tech-container"}>
                <h3>{!english ? "Znam i używam na codzień" : "Known and daily used"}:</h3>
                <div className={"techs"}>
                    <Technology english={english}
                                src={"js"}
                                stars={5}
                                name={"JavaScript/ES6"}/>
                    <Technology english={english}
                                src={"react"}
                                stars={4}
                                name={"React.js"}/>
                    <Technology english={english}
                                src={"redux"}
                                stars={3}
                                name={"Redux"}/>
                    <Technology english={english}
                                src={"html"}
                                stars={4}
                                name={"HTML5"}/>
                    <Technology english={english}
                                src={"css"}
                                stars={4}
                                name={"CSS3"}
                                additionalClass={"css"}/>
                    <Technology english={english}
                                src={"sass"}
                                stars={3}
                                name={"Sass"}/>
                    <Technology english={english}
                                src={"gulp"}
                                stars={2}
                                name={"Gulp"}
                                additionalClass={"gulp"}/>
                    <Technology english={english}
                                src={"git"}
                                stars={4}
                                name={"Git"}/>
                    <Technology english={english}
                                src={"rwd"}
                                stars={4}
                                name={"RWD"}/>
                    <Technology english={english}
                                src={"pwa"}
                                stars={2}
                                name={"PWA"}
                                additionalClass={"pwa"}/>
                    <Technology english={english}
                                src={"rest"}
                                stars={4}
                                name={"REST api"}
                                additionalClass={"rest"}/>
                    <Technology english={english}
                                src={"webstorm"}
                                stars={3}
                                name={"WebStorm"}/>
                </div>
            </article>
            <article className={"tech-container"}>
                <h3>{!english ? "Poznałem ale aktualnie nie używam" : "Known but not used"}:</h3>
                <div className={"techs"}>
                    <Technology english={english}
                                src={"ts"}
                                stars={2}
                                name={"TypeScript"}/>
                    <Technology english={english}
                                src={"linux"}
                                stars={3}
                                name={"Linux"}/>
                    <Technology english={english}
                                src={"mysql"}
                                stars={4}
                                name={"MySQL"}/>
                </div>
            </article>
            <article className={"tech-container"}>
                <h3>{!english ? "Chciałbym się nauczyć" : "I would like to learn"}:</h3>
                <div className={"techs"}>
                    <Technology english={english}
                                src={"node"}
                                name={"Node.js"}/>
                    <Technology english={english}
                                src={"docker"}
                                name={"Docker"}/>
                    <Technology english={english}
                                src={"jest"}
                                name={"Jest"}/>
                    <Technology english={english}
                                src={"webpack"}
                                name={"Webpack"}/>
                </div>
            </article>
        </div>
    </section>
};

export default Technologies;