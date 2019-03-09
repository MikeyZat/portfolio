import React from 'react';
import '../../style/css/Technologies.minx.css';

const Technologies = ({english}) => {
    return <section id={"technologies"} className={"section-tech"}>
        <h2>{!english ? "Technologie" : "Technologies"}</h2>
        <div className={"container"}>
            <article className={"tech-container"}>
                <h3>{!english ? "Znam i używam na codzień" : "Known and daily used"}:</h3>
                <div className={"techs"}>
                    <span><img src={"js.png"} alt={"js logo"}/></span>
                    <span><img src={"react.png"} alt={"react logo"}/></span>
                    <span><img src={"redux.png"} alt={"redux logo"}/></span>
                    <span><img src={"html.png"} alt={"html logo"}/></span>
                    <span><img src={"css.png"} className={"css"} alt={"css logo"}/></span>
                    <span><img src={"sass.png"} alt={"sass logo"}/></span>
                    <span><img src={"gulp.png"} className={"gulp"} alt={"gulp logo"}/></span>
                    <span><img src={"git.png"} alt={"git logo"}/></span>
                    <span><img src={"rwd.png"} alt={"rwd logo"}/></span>
                    <span><img src={"pwa.png"} className={"pwa"} alt={"pwa logo"}/></span>
                    <span className={"rest-span"}><img src={"rest.png"} className={"rest"} alt={"rest logo"}/></span>
                    <span><img src={"webstorm.png"} alt={"webstorm logo"}/></span>
                </div>
            </article>
            <article className={"tech-container"} >
                <h3>{!english ? "Poznałem ale jeszcze nie używam" : "Known but not used yet"}:</h3>
                <div className={"techs"}>
                    <span><img src={"ts.png"} alt={"ts logo"}/></span>
                    <span><img src={"linux.png"} alt={"linux logo"}/></span>
                    <span><img src={"mysql.png"} alt={"mySQL logo"}/></span>
                </div>
            </article>
            <article className={"tech-container"} >
                <h3>{!english ? "Chciałbym się nauczyć" : "I would like to learn"}:</h3>
                <div className={"techs"} >
                    <span><img src={"node.png"} alt={"node logo"}/></span>
                    <span><img src={"docker.png"} alt={"dodcker logo"}/></span>
                    <span><img src={"jest.png"} alt={"jest logo"}/></span>
                    <span><img src={"webpack.png"} alt={"webpack logo"}/></span>
                </div>
            </article>
        </div>
    </section>
};

export default Technologies;