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
        this.handleScrollNav();
        this.handleScrollCards();
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
        }else{
            if(card1.getBoundingClientRect().top<height)
                setTimeout(() => card1.classList.add("show"), 500);
            if(card2.getBoundingClientRect().top<height)
                setTimeout(() => card2.classList.add("show"), 500);
            if(card3.getBoundingClientRect().top<height)
                setTimeout(() => card3.classList.add("show"), 500);
        }


    }

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
