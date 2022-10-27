import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Notification from "./Notification";
import login from "../context/auth/login";
import sendotp from "../context/auth/sendotp";
import signin from "../context/auth/signin";
import "../css/Signup.css";
import authContext from "../context/auth/authContext";


export default function Signup() {
    
    let fullname = useRef();
    let email = useRef();
    let phone = useRef();
    let passw = useRef();
    let cpassw = useRef();
    let wpasscheck = useRef();
    let smtbtn = useRef();
    let optDivRef = useRef();
    let getOtpRef = useRef();
    let sendOtpRef = useRef();
    let signBtnRef  = useRef();
    const { paramToken } = useParams();
    const context = useContext(authContext);
    const { savePromoToken,promoToken,loginUser,loggedInUser } =  context;
    const navigate = useNavigate();

    // console.log(promoToken,'i am promotoken');
    // if(!paramToken){
    //     savePromoToken('ram99');
    //     localStorage.setItem('promoToken','ram99');
    // }else{
    //     savePromoToken(paramToken);
    //     localStorage.setItem('promoToken',paramToken);
    // }
    // console.log(paramToken,'i ma pr');
    // console.log(promoToken,'i am promotoken');

    const [notiMessage,setNotiMessage] = useState();
    const [notiType,setNotiType] = useState('success');
    
    const navigator = useNavigate();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setNotiType('');
        setNotiMessage();

        smtbtn.current.innerText = 'SEND OTP....';
        smtbtn.current.disabled = true
        optDivRef.current.classList.add('show');
        let res = await sendotp({email:email.current.value});
        if(res.success){
            setNotiType('success');
            setNotiMessage(res.reason);
        }
        else{
            setNotiType('error');
            setNotiMessage(res.reason);
        }
        smtbtn.current.innerText = 'SEND OTP';
        smtbtn.current.disabled = false
    };

    useEffect(()=>{
        sendOtpRef.current.innerText = '';
            if(loggedInUser){
                return navigate('/profile');
            }
    })

    document.onclick = (e)=>{
        if(e.target.className === 'container' || e.target.className ==='singup-container'){
            optDivRef.current.classList.remove('show');
        }
    }

    const handleCheckPaasword = (e)=>{
        if(passw.current.value !== cpassw.current.value){
            wpasscheck.current.hidden = false;
            smtbtn.current.disabled = true;

        }
        else{
            wpasscheck.current.hidden = true;
            smtbtn.current.disabled = false;
        }
        
        // console.log(passw.current.value === cpassw.current.value)
    }

    const handleSignIn = async ()=>{
        let data = {
            fullname: fullname.current.value,
            email:email.current.value,
            phone:phone.current.value,
            password:passw.current.value,
            otp:getOtpRef.current.value
        }

        setNotiType('');

        let res = await signin(data);

        if(res.success){
            let lgn = await login({email:data.email,password:data.password});
            if(lgn.success){
                loginUser({authToken:lgn.authToken});
                setNotiType('success');
                setNotiMessage(lgn.reason);
                navigator('/profile');
            }
            else{
                navigator('/login');
            }
            
        }else{
            setNotiType('error');
            setNotiMessage(res.reason);
            sendOtpRef.current.innerText = res.reason;
        }
    }

    return (
        <div className='main-div-sign'>
            <Notification type={notiType} message={notiMessage}/>
            {/* for send OTP */}
            <div className="sendOTP" ref={optDivRef}>
                <label htmlFor="otp" id="otpLabel">Enter Your OTP on Email:</label>
                <input type="text" name="otp" id="otp" ref={getOtpRef} required  placeholder={'Enter 6 Digit OTP'} />
                <p ref={sendOtpRef} style={{color:'red'}} ></p>
                <button className="btnotp" onClick={handleSignIn} ref={signBtnRef}>SIGN IN</button>
            </div>

            <div className="container">
                <div className="singup-container-1" data-aos='fade-down'>
                    <form
                        className="singup-container"
                        onSubmit={handleOnSubmit}>
                            <h1 style={{color:'white'}}>Sign Up</h1>
                            <br />
                            <hr style={{width:'100%'}}/>
                        <label htmlFor="fullname" >
                            Enter Your Full Name
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            placeholder="Enter Your Full Name"
                            ref={fullname}
                             required autoComplete="off" autoFocus
                        />

                        <label htmlFor="email" >Enter Your Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email1"
                            placeholder="Enter Your Email Here"
                            ref={email}
                             required autoComplete="off"
                        />

                        <label htmlFor="phone-number" >
                            Enter Your Phone Number
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Enter Your Phone Number"
                            ref={phone}
                             required autoComplete="off"
                        />

                        <label htmlFor="passw" >Enter Your Password</label>
                        <input
                            type="password"
                            name="passw"
                            id="passw"
                            placeholder="Enter Your Password"
                            ref={passw}
                             required autoComplete="off"
                        />
                        {/* <i class="toggle-password"> <BiShow/> </i> */}

                        <label htmlFor="cpassw" >Conform Your Password</label>
                        <input
                            type="password"
                            name="cpassw"
                            id="cpassw"
                            placeholder="Conform Your Password"
                            ref={cpassw}
                            onChange={handleCheckPaasword}
                             required autoComplete="off"
                        />

                        <p style={{ color: "red" }} ref={wpasscheck} hidden>
                                Password not Match !
                        </p>
                        <button ref={smtbtn} type="submit">SEND OTP</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
