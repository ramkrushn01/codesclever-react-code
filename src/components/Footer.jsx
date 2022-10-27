import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import "../css/Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

    return (
        <div className="footer">
            {/* <p>All Right Reserved &copy; codesclever</p> */}
            <div className="right-web-name">
                <img
                    src="/images/codesclever-logo-192x192.png"
                    alt="codes clever logo"
                />
                <hr />
                <div className="nameNtnc">
                    <p className="copyText">
                        All Right Reserved &copy; CodesClever
                    </p>

                    {/* <p
                        onClick={() => {
                            navigate("/tnc");
                        }}
                        className="tncp">
                        Terms and Conditions*
                    </p> */}
                </div>
            </div>
            <div className="social-media">
                <div className="socialmain">
                    <a
                        href="https://www.instagram.com/codesclever/"
                        target="_blank">
                        <SlSocialInstagram size={20} />
                    </a>
                </div>

                <div className="ppnc">
                    <p>Contact: <a href="mailto:admin@codesclever.com">admin@codesclever.com</a></p>
                    <p onClick={() => {
                            navigate("/privacy-policy");
                        }} className="tncp">
                        Privacy Policy
                    </p>

                    
                    <p
                        onClick={() => {
                            navigate("/tnc");
                        }}
                        className="tncp">
                        Terms and Conditions*
                    </p>

                </div>
            </div>
        </div>
    );
}
