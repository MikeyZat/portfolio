import React from 'react';
import '../../style/css/Footer.minx.css';

const Footer = ({english}) => {
    return <footer id={"contact"} className={"contact-section"}>
        <h2 className={"slide-left"}>{!english ? "Kontakt" : "Contact"}</h2>
        <div className={"contact-info"}>
            <div className={"email-container"}>
                <a href={"mailto:mikolajzatorski1@gmail.com"}><i className="fas fa-envelope"/>
                    <span>MikolajZatorski1@gmail.com</span></a>
            </div>
            <ul className={"social-media"}>
                <li>
                    <a href={"https://www.facebook.com/profile.php?id=100000994784631"} target="_blank"
                       rel="noopener noreferrer"><i className="fab fa-facebook-f"/></a>
                </li>
                <li><a href={"https://www.linkedin.com/in/miko%C5%82aj-zatorski-108852161/"} target="_blank"
                       rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"/>
                </a>
                </li>
                <li>
                    <a href={"https://github.com/MikeyZat"} target="_blank"
                       rel="noopener noreferrer">
                        <i className="fab fa-github"/>
                    </a>
                </li>
            </ul>


            <span className="copyright">&copy;2019 Mikołaj Zatorski wszystkie prawa zastrzeżone</span>

        </div>
    </footer>;
};

export default Footer;