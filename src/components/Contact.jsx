import React, {useRef, useState } from "react";
import "../css/Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";
import sendmsg from "../context/auth/sendmsg";
import Notification from "./Notification";

export default function Contact() {
    const nameRef = useRef();
    const emailRef = useRef();
    const msgRef = useRef();
    const sendBtn = useRef();
    const [notiMessage, setNotiMessage] = useState();
    const [notiType, setNotiType] = useState("success");

    const handleOnSendMsg = async (e) => {
        e.preventDefault();
        setNotiMessage('')
        setNotiType('');

        sendBtn.current.innerText = "Sending";
        const res = await sendmsg({
            name: nameRef.current.value,
            email: emailRef.current.value,
            msg: msgRef.current.value,
        });
        if (res.success) {
            setNotiType("success");
            setNotiMessage("Thank you for contact your message save successfully");
        } else {
            setNotiType("error");
            setNotiMessage("Please try again");
        }
        sendBtn.current.innerText = "Send";
    };

    return (
        <div className="condiv" >
            <Notification type={notiType} message={notiMessage}/>
            <section id="contact" data-aos="zoom-in">
                <div class="contact-box">
                    <div class="contact-links">
                        <h2>CONTACT</h2>
                        <div class="links">
                            <RiSendPlaneFill size="40px" />
                            <a href="mailto:admin@codesclever.com"><p>admin@codesclever.com</p></a>
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
    );
}
