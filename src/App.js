import React, {Component} from 'react';
import Navbar from "./components/navbar/Navbar";
import AboutMe from "./components/aboutMe/AboutMe";
import Technologies from "./components/technologies/Technologies";
import Projects from "./components/projects/Projects";
import CareerPath from "./components/careerPath/CareerPath";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

class App extends Component {

    state={
        english:false
    };

    render() {
        let {english} = this.state;
        return (
            <div className={"App"}>
                <Navbar english={english}/>
                <Header/>
                {/*<AboutMe/>*/}
                {/*<Technologies/>*/}
                {/*<Projects/>*/}
                {/*<CareerPath/>*/}
                {/*<Footer/>*/}
            </div>
        );
    }
}

export default App;
