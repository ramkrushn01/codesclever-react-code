import React, { useEffect, useRef, useState } from "react";
import getuserinfo from "../context/auth/getuserinfo";
import Notification from "./Notification";
import { RiSendPlaneFill } from "react-icons/ri";

export default function Influence() {
    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [phone, setPhone] = useState();

    const handleOnSendMsg = (e)=>{
        e.preventDefault();
    }


    const nameRef = useRef();
    const emailRef = useRef();
    const msgRef = useRef();
    const sendBtn = useRef();
    const [notiMessage, setNotiMessage] = useState();
    const [notiType, setNotiType] = useState("success");

    useEffect(() => {
        let resp = getuserinfo();
        resp.then((res) => {
            console.log(res);
            setFullname(res.fullname);
            setEmail(res.email);
            setUsername(res.email.split("@")[0]);
            setPhone(res.phone);
        });

        console.log(fullname);
    }, []);

    return (
        <div>
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
                </div>

                <div className="condiv">
                    <Notification type={notiType} message={notiMessage} />
                    <section id="contact" data-aos="zoom-in">
                        <div class="contact-box">
                            <div class="contact-links">
                                <h2>Referal Program</h2>
                                <div class="links">
                                    <RiSendPlaneFill size="40px" />
                                    <a href="mailto:admin@codesclever.com">
                                        <p>admin@codesclever.com</p>
                                    </a>
                                </div>
                            </div>
                            <div class="contact-form-wrapper">
                                <form onSubmit={handleOnSendMsg}>
                                    <div class="form-item">
                                        <input
                                            type="text"
                                            name="sender"
                                            required
                                            ref={nameRef}
                                        /> 
                                        <label>Name:</label>
                                    </div>
                                    <div class="form-item">
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            ref={emailRef}
                                        />
                                        <label>Email:</label>
                                    </div>

                                    <div class="form-item">
                                        <textarea
                                            class=""
                                            name="message"
                                            ref={msgRef}
                                            required></textarea>
                                        <label>Why you talk to us?</label>
                                    </div>
                                    <button class="submit-btn" ref={sendBtn}>
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
