import React from 'react';
import '../../style/css/Technologies.minx.css';
import Rating from './Rating';
const Technologies = ({english}) => {
    return <section id={"technologies"} className={"section-tech"}>
        <h2>{!english ? "Technologie" : "Technologies"}</h2>
        <div className={"container"}>
            <article className={"tech-container"}>
                <h3>{!english ? "Znam i używam na codzień" : "Known and daily used"}:</h3>
                <div className={"techs"}>
                    <span className={"technology"}>
                        <img src={"js.png"} alt={"js logo"}/><Rating english={english} stars={5}/><span className={"name"}>JavaScript/ES6</span>
                    </span>
                    <span className={"technology"}>
                        <img src={"react.png"} alt={"react logo"}/><Rating english={english} stars={4}/><span className={"name"}>React.js</span>
                    </span>
                    <span className={"technology"}>
                        <img src={"redux.png"} alt={"redux logo"}/><Rating english={english} stars={3}/><span className={"name"}>Redux</span>
                    </span>
                    <span className={"technology"}>
                        <img src={"html.png"} alt={"html logo"}/><Rating english={english} stars={4}/><span className={"name"}>HTML5</span>
                    </span>
                    <span className={"technology"}>
                        <img src={"css.png"} className={"css"} alt={"css logo"}/><Rating english={english} stars={4}/><span className={"name"}>CSS3</span>
                    </span>
                    <span className={"technology"}>
                        <img src={"sass.png"} alt={"sass logo"}/><Rating english={english} stars={3}/><span className={"name"}>Sass</span>
                    </span>
                    <span className={"technology gulp-span"}>
                        <img src={"gulp.png"} className={"gulp"} alt={"gulp logo"}/><Rating english={english} stars={2}/><span className={"name"}>Gulp</span>
                    </span>
                    <span className={"technology"}>
                        <img src={"git.png"} alt={"git logo"}/><Rating english={english} stars={4}/><span className={"name"}>Git</span>
                    </span>
                    <span className={"technology"}>
                        <img src={"rwd.png"} alt={"rwd logo"}/><Rating english={english} stars={4}/><span className={"name"}>RWD</span>
                    </span>
                    <span className={"technology pwa-span"}>
                        <img src={"pwa.png"} className={"pwa"} alt={"pwa logo"}/><Rating english={english} stars={2}/><span className={"name"}>PWA</span>
                    </span>
                    <span className={"technology rest-span"}>
                        <img src={"rest.png"} className={"rest"} alt={"rest logo"}/><span className={"name"}>REST api</span><Rating english={english} stars={4}/>
                    </span>
                    <span className={"technology"}>
                        <img src={"webstorm.png"} alt={"webstorm logo"}/><Rating english={english} stars={4}/><span className={"name"}>WebStorm</span>
                    </span>
                </div>
            </article>
            <article className={"tech-container"} >
                <h3>{!english ? "Poznałem ale aktualnie nie używam" : "Known but not used"}:</h3>
                <div className={"techs"}>
                    <span className={"technology"}>
                        <img src={"ts.png"} alt={"ts logo"}/><Rating english={english} stars={2}/><span className={"name"}>TypeScript</span>
                    </span>
                    <span className={"technology"}>
                        <img src={"linux.png"} alt={"linux logo"}/><Rating english={english} stars={3}/><span className={"name"}>Linux</span>
                    </span>
                    <span className={"technology"}>
                        <img src={"mysql.png"} alt={"mySQL logo"}/><Rating english={english} stars={4}/><span className={"name"}>MySQL</span>
                    </span>
                </div>
            </article>
            <article className={"tech-container"} >
                <h3>{!english ? "Chciałbym się nauczyć" : "I would like to learn"}:</h3>
                <div className={"techs"} >
                    <span className={"technology"}>
                        <img src={"node.png"} alt={"node logo"}/><span className={"name"}>Node.js</span>
                    </span>
                    <span className={"technology"}>
                        <img src={"docker.png"} alt={"dodcker logo"}/><span className={"name"}>Docker</span>
                    </span>
                    <span className={"technology"}>
                        <img src={"jest.png"} alt={"jest logo"}/><span className={"name"}>Jest</span>
                    </span>
                    <span className={"technology"}>
                        <img src={"webpack.png"} alt={"webpack logo"}/><span className={"name"}>Webpack</span>
                    </span>
                </div>
            </article>
        </div>
    </section>
};

export default Technologies;