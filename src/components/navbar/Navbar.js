import React from 'react';
import '../../style/css/Navbar.minx.css';

const Navbar = ({english, onClick}) => {

    const toggleNavClass = () => {
        let nav = document.getElementsByClassName("navigation-bar")[0];                     //opens / closes navbar (mobile)
        nav.classList.toggle("nav-open");
    };
    return (<nav className={"navigation-bar"}>
        <label className={"check-container"} >
            <input type={"checkbox"} name={""} onClick={onClick}/>
            <span className={"check"}> </span>
            <span className={"light polish"}>Polski</span>
            <span className={"light english"}>English</span>
        </label>
        <button className="hamburger" onClick={toggleNavClass}/>
        <ul className={"links-list"}>
            <li><a href={"# "} onClick={toggleNavClass}>Home</a></li>
            <li><a href={"#about"} onClick={toggleNavClass}>{!english ? "O mnie" : "About me"}</a></li>
            <li><a href={"#technologies"} onClick={toggleNavClass}>{!english ? "Technologie" : "Technologies"}</a></li>
            <li><a href={"#projects"} onClick={toggleNavClass}>{!english ? "Projekty" : "Projects"}</a></li>
            <li><a href={"#career"} onClick={toggleNavClass}>{!english ? "Kariera" : "Career"}</a></li>
            <li><a href={"#contact"} onClick={toggleNavClass}>{!english ? "Kontakt" : "Contact"}</a></li>
        </ul>
    </nav>);
};

export default Navbar;