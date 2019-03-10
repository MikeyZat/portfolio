import React from 'react';
import '../../style/css/Technologies.minx.css';
import Rating from "./Rating";

const Technology = ({english, src, stars, name, additionalClass = "",}) => {
    return <span className={"technology " + (additionalClass ? additionalClass + "-span" : "")}>
                <img src={src + ".png"} alt={src + " logo"} className={additionalClass ? additionalClass : ""}/>
                {stars && <Rating english={english} stars={stars}/>}
                <span className={"name"}>{name} </span>
            </span>

};

export default Technology;