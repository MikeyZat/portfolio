import React from 'react';
import '../../style/css/Header.minx.css';

const Header = ({english}) =>{
    return(<header>
        <div className={"smoke-container"}>
            <video src="smoke.mp4" autoPlay muted> </video>
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
        </div>
    </header>)
};

export default Header;