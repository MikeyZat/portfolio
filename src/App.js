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
        let height = window.innerHeight;
        let aboutY_top = document.getElementById("about").getBoundingClientRect().top;
        let aboutY = document.getElementById("about").getBoundingClientRect().bottom;
        let nav = document.getElementsByClassName("navigation-bar")[0];
        if (aboutY_top < 10) {
            nav.classList.add("nav-scrolled");
        } else {
            nav.classList.remove("nav-scrolled");
        }


        // let technologiesY = document.getElementById("technologies").getBoundingClientRect().bottom;
        // let projectsY = document.getElementById("projects").getBoundingClientRect().bottom;
        // let careerY = document.getElementById("career").getBoundingClientRect().bottom;
        // let contactY = document.getElementById("contact").getBoundingClientRect().bottom;
    };

    render() {
        let {english} = this.state;
        return (
            <div className={"App"}>
                <Navbar english={english} onClick={this.changeLanguage}/>
                <Header english={english}/>
                <AboutMe english={english}/>
                {/*<Technologies/>*/}
                {/*<Projects/>*/}
                {/*<CareerPath/>*/}
                {/*<Footer/>*/}
            </div>
        );
    }
}

export default App;
