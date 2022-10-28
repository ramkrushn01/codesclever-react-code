import React, { useContext, useEffect, useRef, useState } from "react";
import "../css/Navbar.css";
import { FaUserAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import authContext from "../context/auth/authContext";

function Navbar(props) {
    const context = useContext(authContext);
    const { loggedInUser } = context;
    const [user, setUser] = useState();
    const navigate = useNavigate();
    let isDoggle = false;

    const showNavBar = (e) => {
        if(document.body.offsetWidth > 800){
            return
        }
        
        const navbar = document.getElementById("navbar");
        const bar = document.getElementById("bar");
        if (navbar.style.display === "flex") {
            navbar.style.display = "none";
            bar.innerHTML = "&#8801;";
        } else {
            navbar.style.display = "flex";
            bar.innerHTML = "&#10007;";
        }
    };

    useEffect(() => {
        setUser(loggedInUser);
        // console.log("[+]",localStorage.getItem("auth-token"));
    });

    let locate = useLocation().pathname;
    return (
        <>
            <nav>
                <div
                    className="title"
                    onClick={() => {
                        navigate("/");
                    }}>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/codesclever-logo-192x192.png"
                        }
                        alt="codesclever"></img>
                </div>
                <p className="bar" id="bar" onClick={showNavBar}>
                    &#8801;
                    {/* <AiOutlineBars/> */}
                </p>

                <ul id="navbar" className="navul">
                    <li className="navli">
                        <Link
                            to="/"
                            className={locate === "/" ? "active" : ""}
                            onClick={!isDoggle ? showNavBar : ""}>
                            Home
                        </Link>
                    </li>
                    {/* <li className="navli">
                        <Link to="/competition" className={locate==='/competition'?'active':''}>Competition</Link>
                    </li> */}
                    <li className="navli">
                        <Link
                            to="/leaderbord"
                            className={locate === "/leaderbord" ? "active" : ""}
                            onClick={!isDoggle ? showNavBar : ""}>
                            Leaderbord
                        </Link>
                    </li>
                    {
                        <li className="navli">
                            <Link
                                to="/contact"
                                className={
                                    locate === "/contact" ? "active" : ""
                                }
                                onClick={!isDoggle ? showNavBar : ""}>
                                Contact
                            </Link>
                        </li>
                    }

                    <li className="navli">
                        <Link
                            to="/about"
                            className={locate === "/about" ? "active" : ""}
                            onClick={!isDoggle ? showNavBar : ""}>
                            About
                        </Link>
                    </li>

                    <li className="login">
                        <Link
                            to="/login"
                            className={locate === "/login" ? "active" : ""}
                            onClick={!isDoggle ? showNavBar : ""}>
                            {!user && "Login"}
                        </Link>
                        <Link
                            to="/signin"
                            className={locate === "/signin" ? "active" : ""}
                            onClick={!isDoggle ? showNavBar : ""}>
                            {!user && "Sign up"}
                        </Link>
                        <Link
                            to="/profile"
                            className={locate === "/profile" ? "active" : ""}
                            onClick={!isDoggle ? showNavBar : ""}>
                            {user && <FaUserAlt size="20px" />}
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
