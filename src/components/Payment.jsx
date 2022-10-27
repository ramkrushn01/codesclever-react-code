import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Notification from "./Notification";
import authContext from "../context/auth/authContext";
import "../css/Payment.css";
import Logout from "./Logout";

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

const __DEV__ = document.domain === "localhost";

export default function Payment() {
	const [notiMessage,setNotiMessage] = useState();
	const [notiType,setNotiType] = useState();
    const context = useContext(authContext);
    const { promoToken, savePromoToken,loggedInUser } = context;
	const navigate = useNavigate();

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        let rezurl = __DEV__ ? "http://127.0.0.1:8000/api/payment/razorpay" : "https://api.codesclever.com/api/payment/razorpay"

        const data = await fetch(rezurl, {
            method: "POST",
            headers: {
                "auth-token": localStorage.getItem("auth-token"),
                "Content-Type": "application/json",
            },
        }).then((t) => t.json());


        const options = {
            key: __DEV__ ? "rzp_test_BM1f2ry2j2zYNw" : "rzp_live_4TbWavxZvbhMjv",
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: "Enroll Now",
            description: "Thank you for enrolling in codes clever competition",
            notes: { promoToken: promoToken },
            image: "/image/codesclever-logo-192x192.png",

            handler: function (response) {
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);
				setNotiType('success');
				setNotiMessage('Payment Successful !');
				setTimeout(()=>{
					navigate('/tnc');
				},3000);
				
            },

            prefill: {
                name: data.userDetails.fullname,
                email: data.userDetails.email,
                phone_number: data.userDetails.phone,
            },
            theme: {
                color: "black",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    if(loggedInUser){
    return (
        <>
		<Notification type={notiType} message={notiMessage} />
            <div className="top-payment" data-aos='fade-down'>
                <div className="main-payment">
                    <div className="ptm-div">
                        <img
                            src="/images/event-cart-img.png"
                            className="App-logo"
                            alt="logo"
                        />
						<p className="ptnc" onClick={()=>{navigate('/tnc')}} >Terms and Conditions*</p>

                        <button
                            className="enroll-btn"
                            onClick={displayRazorpay}>
                            Enroll Now
                        </button>
						{/* <p className="promotoken"> {promoToken==='ram99'?'':'Applied '+promoToken} </p> */}
                    </div>
                </div>
            </div>
        </>
    )}
    else{
        return(
            <Logout/>
        )
    }
}
