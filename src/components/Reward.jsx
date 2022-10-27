import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Reward.css";

export default function Reward() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="mainreward">
                <div className="text-banner" data-aos='fade-right' >
                  <div className="text-div">
                    <h1>Gift Hamper</h1>
                    <h2>Get Beautiful Gift Hamper By Codes Clever For Winning The Coding Competition</h2>
                    <h2  data-aos="fade-right">
                    <span>Top 100 Winner </span>  will get Special <span>CODESCLEVER</span> Gift Hamper
                    delivered at their <span >DORESTEP</span>
                </h2>
                  </div>
                </div>

                <div className="img-div" data-aos='fade-left'>
                <img
                        src={"/images/home-tshirt-1.png"}
                        alt="gift hamper by codes clever"
                    />
                </div>
            </div>
        </div>
    );
}
