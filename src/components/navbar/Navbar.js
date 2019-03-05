import React from 'react';
import '../../style/css/Navbar.minx.css';

const Navbar = ({english}) => {
    const toggleNavClass = () => {
        let nav = document.getElementsByClassName("navigation-bar")[0];                     //opens / closes navbar (mobile)
        nav.classList.toggle("nav-open");
    };
    return (<navbar class="navigation-bar">
        <button className="hamburger" onClick={toggleNavClass}/>
        <ul className={"links-list"}>
            <li><a href={"# "}>Home</a></li>
            <li><a href={"#about_me"}>{!english ? "O mnie" : "About me"}</a></li>
            <li><a href={"#technologies"}>{!english ? "Technologie" : "Technologies"}</a></li>
            <li><a href={"#projects"}>{!english ? "Projekty" : "Projects"}</a></li>
            <li><a href={"#career"}>{!english ? "Kariera" : "Career"}</a></li>
            <li><a href={"#contact"}>{!english ? "Kontakt" : "Contact"}</a></li>
        </ul>
    </navbar>);
};

export default Navbar;