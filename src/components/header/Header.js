import React from 'react';
import '../../style/css/Header.minx.css';

const Header = ({english, ...props}) => {
    let playing = () =>{
        document.getElementById("header-section").classList.add("go");
    };
    return (<header className={"smoke-container"} id={"header-section"}>
        <video src="smoke.mp4" muted={true} autoPlay={true} onPlaying={playing}> </video>
        <h1>
            <span>M</span>
            <span>i</span>
            <span>k</span>
            <span>o</span>
            <span>ł</span>
            <span>a</span>
            <span>j</span>
            <br/>
            <span>Z</span>
            <span>a</span>
            <span>t</span>
            <span>o</span>
            <span>r</span>
            <span>s</span>
            <span>k</span>
            <span>i</span>
        </h1>
        <p className={"intro"}>
            {!english ? "Aspirujący na web developera student Informatyki." : "Aspiring web developer & Computer Science student."}
        </p>
        <a href={"#about"} className={"start"}><span className={"arrow"}> </span></a>
    </header>)
};

export default Header;