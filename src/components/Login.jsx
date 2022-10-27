import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import authContext from "../context/auth/authContext";
import login from '../context/auth/login';
import Notification from "./Notification";

export default function Login() {
    const context = useContext(authContext);
    const {loginUser,loggedInUser} = context;
    let emailRef = useRef();
    let passwordRef = useRef(); 
    let sumbitBtnRef = useRef();
    let inPassRef = useRef();
    const [notiMessage,setNotiMessage] = useState(null);
    const [notiType,setNotiType] = useState('success');

    let navigate = useNavigate();
    const gotosignin = (e) => {
        navigate("/signin");
    };

    const gotoforgotpassword = (e) => {
        navigate("/forgotpassword");
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setNotiType('');
        setNotiMessage('');
        
        sumbitBtnRef.current.innerText = "Login....";
        let lgn = await login({email:emailRef.current.value,password:passwordRef.current.value});
        
        if(lgn.success){
            sumbitBtnRef.current.innerText = "Login";
            setNotiType('success');
            setNotiMessage(lgn.reason);
            inPassRef.current.hidden = true;
            // localStorage.setItem('auth-token',lgn.authToken);
            loginUser({authToken:lgn.authToken});
            navigate('/profile');
        }
        else{
            sumbitBtnRef.current.innerText = "Login";
            inPassRef.current.hidden = false;
            setNotiType('error');
            setNotiMessage(lgn.reason);
        }
    };

    useEffect(()=>{
        if(loggedInUser){
            return navigate('/profile');
        }
    },[])


    return (
        <div style={{background:'#181818'}}>
            <Notification type={notiType} message={notiMessage}/>
            <div
                className="container"
                style={{ background: "#181818" }}
                data-aos="fade-in">
                <div className="loginside">
                    <div className="noac">
                        <h1>Don't have an account?</h1>

                        <button onClick={gotosignin}>sign up</button>
                    </div>
                    <div
                        className="login-main"
                        data-aos="fade-left"
                        data-aos-delay="500"
                        data-aos-anchor-placement="#example-anchor">
                        <h1>Login</h1>
                        <hr style={{ width: "100%" }} />
                        <form onSubmit={handleOnSubmit}>
                            <input
                                type="email"
                                name="username"
                                id="username"
                                placeholder="Email"
                                autoFocus
                                required autoComplete="off"
                                ref={emailRef}
                            />
                            <input
                                type="password"
                                name="passw"
                                id="passw"
                                placeholder="Password"
                                required autoComplete="off"
                                ref={passwordRef}
                            />
                            <p style={{color:'red'}} ref={inPassRef} hidden>Incorrect Password!</p>
                            <p className="link" onClick={gotoforgotpassword}>
                                forgot password?
                            </p>
                            <button
                                type="submit" ref={sumbitBtnRef}>
                                Login
                            </button>
                        </form>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p className="noactmobile link" onClick={gotosignin}>
                            Don't have an account?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
