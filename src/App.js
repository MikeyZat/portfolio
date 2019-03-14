import React, {Component} from 'react';
import Navbar from "./components/navbar/Navbar";
import AboutMe from "./components/aboutMe/AboutMe";
import Technologies from "./components/technologies/Technologies";
import Projects from "./components/projects/Projects";
import CareerPath from "./components/careerPath/CareerPath";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

class App extends Component {

    state = {
        english: false
    };

    componentDidMount() {
        document.addEventListener("scroll", this.handleScroll);
    }

    changeLanguage = () => {
        this.setState({
            english: !this.state.english
        });
    };

    handleScroll = () => {
        try {
            this.handleScrollNav();
            this.handleScrollCards();
            this.handleScrollTechs();
            this.handleScrollProjects();
            this.handleScrollEmail();
            this.handleAllSectionsScroll();
        } catch (e) {
            console.log(e);
        }
    };

    handleScrollNav() {
        let aboutY_top = document.getElementById("about").getBoundingClientRect().top;
        let nav = document.getElementsByClassName("navigation-bar")[0];
        if (aboutY_top < 10) {
            nav.classList.add("nav-scrolled");
        } else {
            nav.classList.remove("nav-scrolled");
        }
    }

    handleScrollCards() {
        let card1 = document.getElementById("card1");
        let card2 = document.getElementById("card2");
        let card3 = document.getElementById("card3");
        let width = window.innerWidth;
        let height = window.innerHeight;
        if (width > 1020 && (card1.getBoundingClientRect().top < height)) {
            setTimeout(() => card1.classList.add("show"), 500);
            setTimeout(() => card2.classList.add("show"), 2000);
            setTimeout(() => card3.classList.add("show"), 3500);
        } else {
            if (card1.getBoundingClientRect().top < height)
                setTimeout(() => card1.classList.add("show"), 500);
            if (card2.getBoundingClientRect().top < height)
                setTimeout(() => card2.classList.add("show"), 500);
            if (card3.getBoundingClientRect().top < height)
                setTimeout(() => card3.classList.add("show"), 500);
        }
    }

    handleScrollTechs = () => {
        let height = window.innerHeight;
        let divs = document.getElementsByClassName("techs");
        for (let i = 0; i < divs.length; i++) {
            if (divs[i].getBoundingClientRect().top + 50 < height)
                divs[i].classList.add("show");
        }
    };

    handleScrollProjects = () => {
        let height = window.innerHeight;
        let projects = document.getElementsByClassName("project");
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].getBoundingClientRect().top < height)
                projects[i].classList.add("show");
            else
                projects[i].classList.remove("show");
        }
    };

    handleAllSectionsScroll = () => {
        let about = document.getElementById("about");
        let technologies = document.getElementById("technologies");
        let projects = document.getElementById("projects");
        let career = document.getElementById("career");
        let contact = document.getElementById("contact");
        let links = document.getElementsByClassName("links-list")[0].children;
        let linksList = Array.from(links).map(e => e.children);
        this.cleanLinks(linksList);
        if (about.getBoundingClientRect().top > 200) {
            linksList[0][0].classList.add("active");
        } else if (technologies.getBoundingClientRect().top > 200) {
            linksList[1][0].classList.add("active");
            about.children[0].classList.remove("slide-left");
        } else if (projects.getBoundingClientRect().top > 200) {
            linksList[2][0].classList.add("active");
            technologies.children[0].classList.remove("slide-left");
        } else if (career.getBoundingClientRect().top > 200) {
            linksList[3][0].classList.add("active");
            projects.children[0].classList.remove("slide-left");
        } else if (contact.getBoundingClientRect().bottom - window.innerHeight > 100) {
            linksList[4][0].classList.add("active");
            career.children[0].classList.remove("slide-left");
        } else {
            linksList[5][0].classList.add("active");
            contact.children[0].classList.remove("slide-left");
            this.showSocials();
        }
    };

    cleanLinks = (links) => {
        links.forEach(link => {
            link[0].classList.remove("active");
        })
    };

    showSocials = () => {
        let icons = Array.from(
            document.getElementsByClassName("hide")
        );
        icons.forEach((icon, index) => {
            setTimeout(() => {
                icon.classList.remove("hide")
            }, (index + 3) * 300)
        });
    };

    handleScrollEmail = () => {
        let email = document.getElementsByClassName("hideEmail")[0];
        if (email && email.getBoundingClientRect().top + 30 < window.innerHeight)
            setTimeout(() => {
                email.classList.remove("hideEmail");
            }, 500);
    };


    render() {
        let {english} = this.state;
        return (
            <div className={"App"}>
                <Navbar english={english} onClick={this.changeLanguage}/>
                <Header english={english}/>
                <AboutMe english={english}/>
                <Technologies english={english}/>
                <Projects english={english}/>
                <CareerPath english={english}/>
                <Footer english={english}/>
            </div>
        );
    }
}

export default App;
