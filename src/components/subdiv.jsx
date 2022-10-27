import React from "react";
import "../css/Subdiv.css";
import "../css/subdivtext.scss";

export default function Subdiv() {
    const mystyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL+"/images/codes2.png"})`,
    }
    return (
        <>
            <div className="subdiv" style={mystyle}>
                <div className="textme">
                    <h1 data-aos="fade-down">
                        {/* Organizing the Biggest Competition */}
                        <span className="text">Organized the Biggest Coding Competition</span>
                    </h1>
                </div>
                    <button id="regbtn" className="regbtn" data-aos="zoom-in" data-aos-delay="800"> <a href="https://competition.codesclever.com/"> REGISTER NOW </a></button>
                <div className="img">
                    {/* <img src={process.env.PUBLIC_URL +"/images/finalcodecap.png"}/> */}
                </div>
            </div>
        </>
    );
}
