import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import getuserinfo from "../context/auth/getuserinfo";
import Notification from "./Notification";
import "../css/Profile.css";
import authContext from "../context/auth/authContext";


export default function Profile() {
    const context = useContext(authContext);
    const { logoutUser, loggedInUser}  = context;
    const [fullname, setFullName] = useState(0);
    const [email, setEmail] = useState(0);
    const [username, setUsername] = useState(0);
    const [phone, setPhone] = useState(0);
    const [dataSet, setDataSet] = useState(null);
    const [startEff,setStartEff] = useState(null);
    const [user,setUser] = useState();

    const [notiMessage,setNotiMessage] = useState();
    const [notiType,setNotiType] = useState('success');


    // const topCart = useRef();
    // const cartImgRef = useRef();
    const cartRef = useRef();
    const cartRef1 = useRef();
    let navigate = useNavigate();


    async function getInfo() {
        let res = await getuserinfo();
        setDataSet(res);
        setStartEff('r');
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        getInfo();
        if (dataSet) {
            setFullName(dataSet.fullname);
            setEmail(dataSet.email);
            setUsername(dataSet.email.split("@")[0]);
            setPhone(dataSet.phone);
        }

        setStartEff('a');
        setUser(loggedInUser);

    },[]);

    const handleLogOut = (e) =>{
        setNotiType('success');
        setNotiMessage('Logout Successfully');
        navigate('/logout');
    }

    const handleMouseOnCart = (e)=>{
        console.log('adding class');
        // e.target.classList.add('cart-zoom')
        // console.log(e);
        cartRef.current.className += " cart-zoom";
    }

    const handleMouseLeave = (e)=>{
        // e.target.classList.remove('cart-zoom')
        cartRef.current.className = "cart-1 ";
        // console.log(e.target.className);
    }

    
    const handleMouseOnCart1 = (e)=>{
        console.log('adding class');
        // e.target.classList.add('cart-zoom')
        // console.log(e);
        cartRef1.current.className += " cart-zoom cart-zoom-1";
    }

    const handleMouseLeave1 = (e)=>{
        // e.target.classList.remove('cart-zoom')
        cartRef1.current.className = "cart-1";
        // console.log(e.target.className);
    }

    if (user) {
        return (
            <div>
            <Notification type={notiType} message={notiMessage}/>
                
                {/* <div className="top" ref={topCart}>
                    <div className="cart-1">
                        <h2 className="cart-head">Coding Competition</h2>
                        <img src="/images/event-cart-img.png" alt="" />
                        <button>Enroll Now</button>
                    </div>
                </div> */}

                <div className="maindivprofile">
                    <div className="profileinfo">
                        <div className="left">
                            <p>Name: {fullname}</p>
                            <p>Email Address: {email}</p>
                        </div>
                        <div className="right">
                            <p>Username: {username}</p>
                            <p>Phone No: {phone}</p>
                        </div>
                        <button className="editbtn" onClick={handleLogOut}>Log out</button>
                    </div>

                    <div className="reward">
                        <h3>REWARD</h3>

                        <div className="reward-div">
                            <div className="cart-1" ref={cartRef} onMouseEnter={handleMouseOnCart} onMouseLeave={handleMouseLeave} data-aos="fade-left">
                                <img src="/images/reward-cart-img.png" alt="rewarad by codes clever" />
                                <h2 className="cart-head">Handwritten Notes</h2>
                                <p>Get Now Python Handwritten Notes By Codes Clever ! </p>
                                <button className="getBtn">Get Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="event">
                        <h3>EVENT</h3>
                        <div className="event-div">
                            <div className="cart-1" ref={cartRef1} onMouseEnter={handleMouseOnCart1} onMouseLeave={handleMouseLeave1} data-aos="fade-left">
                                <img src="/images/event-cart-img.png" alt="" />
                                <h2 className="cart-head">
                                    Coding Competition
                                </h2>
                                <p>Enroll Now And Get Surprising Cash Prize And Beautiful Gifts ! </p>
                                <button onClick={()=>{navigate('/payment')}}>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        navigate("/login");
    }
}
