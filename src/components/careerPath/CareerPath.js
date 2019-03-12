import React from 'react';
import '../../style/css/CareerPath.minx.css';

const CareerPath = ({english}) => {

    return (<section id={"career"} className={"career-section"}>
        <h2>{!english ? "Ścieżka kariery" : "Career path"}</h2>
            <div className={"timeline-box"}>
                <ul className={"timeline"}>
                    <li>
                        <div className={"item"}>
                            <span className={"date"}>3rd January 2017</span>
                            <h3 className={"text"}>Bla bla bla</h3>
                        </div>
                    </li>
                    <li>
                        <div className={"item"}>
                            <span className={"date"}>30st January 2017</span>
                            <h3 className={"text"}>Bla bla bla</h3>
                        </div>
                    </li>
                    <li>
                        <div className={"item"}>
                            <span className={"date"}>21 February 2017</span>
                            <h3 className={"text"}>Bla bla bla</h3>
                        </div>
                    </li>
                    <li>
                        <div className={"item"}>
                            <span className={"date"}>1st August 2017</span>
                            <h3 className={"text"}>Bla bla bla</h3>
                        </div>
                    </li>
                </ul>
            </div>
    </section>);
};

export default CareerPath;