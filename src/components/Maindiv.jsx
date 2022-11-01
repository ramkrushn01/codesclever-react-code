import React from "react";
import "../css/Maindiv.css";
import "../css/coding.scss";
import { useNavigate } from "react-router-dom";

export default function Maindiv() {
    const styleQ = {
        'font-size': '100px',
        'color':'#00000054',
        'font-family':'Cantora One !important'
    }
    const navigator = useNavigate();
    
    return (
        <>
            <div className="mycontainer1">
                <div id="wrapperme">
                    <p id="stars">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                    </p>
                    <p id="title" contenteditable="false" spellcheck="false">
                        <span>Codes</span>
                        <span>C</span>
                        <span>lever</span>
                    </p>
                </div>

                {/* <h4>CodesClever</h4> */}
                <p>Organizing the Biggest</p>
                {/* <h1 className="" style={mystyle}>
                    CODING
                </h1> */}
                <h1 class="glitch" data-text="CODING">
                    CODING
                </h1>
                <h3 className="mb-4">Competition</h3>

                <div className="cart">
                    <div className="sec mycart" data-aos={"fade-right"}>
                        <img
                            className="bch-img"
                            src={process.env.PUBLIC_URL + "/images/2-bch.png"}
                            alt="second price"
                        />

                        <div className="text-price">
                        <h1 style={styleQ}>?</h1>

                            <p>Cash Prize of</p>
                            {/* <p>RS. 7,000</p> */}
                            <h1>RS. 7,000</h1>
                            <p>With Certificate and Trophy</p>
                        </div>
                    </div>
                    <div className="first mycart" data-aos={"fade-up"}>
                        <img
                            className="bch-img"
                            src={process.env.PUBLIC_URL + "/images/1-bch.png"}
                            alt="second price"
                        />

                        <div className="text-price">
                        <h1 style={styleQ}>?</h1>

                            <p>Cash Prize of</p>
                            {/* <p>RS. 10,000</p> */}
                            <h1>RS. 10,000</h1>
                            <p>With Certificate and Trophy</p>
                        </div>
                    </div>
                    <div className="third mycart" data-aos={"fade-left"}>
                        <img
                            className="bch-img"
                            src={process.env.PUBLIC_URL + "/images/3-bch.png"}
                            alt="second price"
                        />

                        <div className="text-price">
                            <h1 style={styleQ}>?</h1>
                            <p>Cash Prize of</p>
                            {/* <p>RS. 5,000</p> */}
                            <h1>RS. 5,000</h1>
                            <p>With Certificate and Trophy</p>
                        </div>
                    </div>
                </div>
                <h2 className="winner-quote">
                    <p style={{color:"red"}}>Competition will start at 2'o Clock</p> 
                    <button className="rgbtn" onClick={()=>{navigator('/profile')}} >REGISTER NOW</button>
                </h2>
            </div>
        </>
    );
}
