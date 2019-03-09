import React from 'react';
import '../../style/css/Technologies.minx.css';


const Rating = ({stars}) => {
    let starsView = [];
    for(let i =0 ; i < stars ; i++){
        starsView.push(<span className={"fa fa-star checked"}> </span>)
    }
    for(let i = stars; i<5 ; i++){
        starsView.push(<span className={"fa fa-star"}> </span>);
    }

    return <span className={"details"}>
        <span className={"title"}>Zaawansowanie</span>
        {starsView}
    </span>
};


export default Rating;