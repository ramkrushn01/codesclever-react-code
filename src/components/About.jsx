import React from "react";
import "../css/About.css";

export default function About() {
    return (
        <div className="aboutmaindiv">
            <div className="aboutText" >
                <div className="quat" data-aos='fade-right'>
                    <h3>
                    We are a Pvt. Organization who is finding the best talented
                    people all over the world and giving them a great reward to
                    start their journey in the Tech field.
                    </h3>
                    <span> -Team CodesClever</span>
                </div>
                <div className="ins-img" data-aos='fade-left'>
                  <img src="/images/about-ins-img.jpg" alt="Codes Clever Inspiration" />
                </div>
            </div>

            <div className="aboutteam">
                <div className="about-cart" data-aos='fade-right'>
                    <img src="/images/aparan khunger.jpg" alt="aparan khunger"/>
                    <h5 className="name">Apran Khunger</h5>
                    <p className="position">Founder (Manager)</p>
                </div>

                <div className="about-cart" data-aos='fade-left'>
                    <img src="/images/ramkrushn salunkhe.png" alt="ramkrushn salunkhe"/>
                    <h5 className="name">Ramkrushn Salunkhe</h5>
                    <p className="position">Co-Founder (Developer)</p>
                </div>

            </div>
        </div>
    );
}
