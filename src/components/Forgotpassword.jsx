import React, { useRef, useState } from "react";
import "../css/Forgotpassword.css";
import sendotp from "../context/auth/sendotp";
import forgotpassword from "../context/auth/forgotpassword";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";

export default function Forgotpassword() {
    const [notiMessage, setNotiMessage] = useState();
    const [notiType, setNotiType] = useState("success");

    const emailRef = useRef();
    const OTPref = useRef();
    const passwordRef = useRef();
    const navigator = useNavigate();


    const handleSendOTP = async (e) => {
        e.target.innerText = 'Sending';
        setNotiType('')
        setNotiMessage('')
        if (emailRef.current.value.length > 1) {
            let res = await sendotp({ email: emailRef.current.value,forgot:true });
            if (res.success) {
                setNotiType("success");
                setNotiMessage(res.reason);
            } else {
                setNotiType("error");
                setNotiMessage(res.reason);
            }
        }
        else{
            setNotiType("error");
            setNotiMessage('Please Enter Email');

        }
        e.target.innerText = 'Send OTP'
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        const res = await forgotpassword({
            email: emailRef.current.value,
            otp: OTPref.current.value,
            password: passwordRef.current.value,
        });

        if (res.success) {
            setNotiType("success");
            setNotiMessage(res.reason);

            setTimeout(()=>{
                navigator('/login');
            },3000);

        } else {
            setNotiType("error");
            setNotiMessage(res.reason);
        }
    };

    return (
        <div className="forgotmain">
            <Notification type={notiType} message={notiMessage}/>
            <div className="forgotsub">
                <div className="formdiv">
                    <form onSubmit={handleForgotPassword}>
                        <div className="otpbtn">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                ref={emailRef}
                                placeholder="Enter email here"
                                required
                            />
                            <p onClick={handleSendOTP}>Send OTP</p>
                        </div>
                        <input
                        required
                            type="password"
                            ref={passwordRef}
                            placeholder="Enter new your password"
                        />

                        <div className="smtbtn">
                            <input
                                className="forotp"
                                type="text"
                                placeholder="Enter 6 Digit OTP on getting email"
                                ref={OTPref}    
                                required
                            />
                            <button type="submit">Change Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
