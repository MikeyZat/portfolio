import React from 'react';
import '../../style/css/AboutMe.minx.css';

const AboutMe = ({english}) => {
    return (
        <section id={"about"} className={"about-section"}>
            <h2>{!english ? "O mnie" : "About me"}</h2>
            <div className={"cards-container"}>
                <article className="card">
                    <h3 className={"long"}>{!english?"Edukacja i doświadczenie":"Education and experience"}</h3>
                    <p>{!english?"Od 2018 roku jestem studentem Informatyki na wydziale Informatyki, Elektroniki i Telekomunikacji na AGH w Krakowie. Dotychczas nie posiadam żadnego doświadczenia komercyjnego. Mimo to, mam za sobą sporo własnych projektów.":"Since 2018 I am a Computer Science student at AGH University of Science and Technology in Cracow. I have not had any commercial experience yet. However, I have completed a lot of my own projects."}
                    </p>
                </article>
                <article className="card">
                    <h3>{!english?"Programowanie":"Programming"}</h3>
                    <p>{!english?"Moja przygoda z programowaniem rozpoczęła się w 2018 roku. Na studiach używam języka C++ / C, prywatnie tworzę projekty w JavaScript, przy pomocy biblioteki ReactJS. W przeszłości zdarzyło mi się programować w języku Java, Python i używać baz danych SQL, jednak teraz skupiam się na technologiach front-endowych.":"My adventure with programming began in 2018. At the university I mostly use C++ / C, privately I make my projects in JavaScript using ReactJS library. In the past I happened to use Java, Python and SQL databases, however, I am focused on front-end technologies now."}
                    </p>
                </article>
                <article className="card">
                    <h3>{!english?"Przyszłość":"Future"}</h3>
                    <p>{!english?"W najbliższym czasie chciałbym zacząć uczyć się programowania w NodeJS, aby tworzyć również back-end moich aplikacji. Tym samym chciałbym zostać full-stack developerem i w tym kierunku się dalej rozwijać.":"In the nearest future I would like to start learning NodeJS. Therefore, I would be able not only to write front-end but back-end for my applications. Definitely, Full-Stack is something I would love to do in the future."}
                    </p>
                </article>
            </div>
        </section>
    )
};

export default AboutMe;