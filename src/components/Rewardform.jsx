import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import saverewardform from "../context/auth/saverewardform";
import "../css/Rewardform.css";
import Notification from "./Notification";

export default function Rewardform() {
    const officialNameRef = useRef();
    const emailRef = useRef();
    const contactRef = useRef();
    const street1Ref = useRef();
    const street2Ref = useRef();
    const cityRef = useRef();
    const postalCodeRef = useRef();
    const stateRef = useRef();
    const tshirtSizeRef = useRef();

    const [notiMessage, setNotiMessage] = useState();
    const [notiType, setNotiType] = useState("success");

    const navigate = useNavigate();

    const handleSubmitData = async (e) => {
        e.preventDefault();
        const formData = {
            officialname: officialNameRef.current.value,
            email: emailRef.current.value,
            contact: contactRef.current.value,
            street1: street1Ref.current.value,
            street2: street2Ref.current.value,
            city: cityRef.current.value,
            postalcode: postalCodeRef.current.value,
            state: stateRef.current.value,
            tshirtsize: tshirtSizeRef.current.value,
        };

        const setData = await saverewardform(formData);
        if (setData.success) {
            setNotiType("success");
            setNotiMessage(setData.reason);
            setTimeout(() => {
                navigate("/profile");
            }, 5000);
        } else {
            setNotiType("error");
            setNotiMessage(setData.reason);
        }
        //
    };
    return (
        <>
            <Notification type={notiType} message={notiMessage} />
            <div className="container">
                <div className="singup-container-1">
                    <form
                        onSubmit={handleSubmitData}
                        className="singup-container">
                        <h1 style={{ color: "white" }}>Reward</h1>

                        <input
                            type="text"
                            ref={officialNameRef}
                            placeholder="Official name get on certificate"
                            required
                        />
                        <input
                            type="email"
                            ref={emailRef}
                            placeholder="Enter your email"
                            required
                        />
                        <input
                            type="text"
                            ref={contactRef}
                            placeholder="Enter your contact number"
                            required
                        />
                        <input
                            type="text"
                            ref={street1Ref}
                            placeholder="Enter address street 1"
                            required
                        />
                        <input
                            type="text"
                            ref={street2Ref}
                            placeholder="Enter address street 2"
                            required
                        />
                        <input
                            type="text"
                            ref={cityRef}
                            placeholder="Enter your current city"
                            required
                        />
                        <input
                            type="text"
                            ref={postalCodeRef}
                            placeholder="Enter postal code"
                            required
                        />
                        <input
                            type="text"
                            ref={stateRef}
                            placeholder="Enter your state"
                            required
                        />
                        <input
                            type="text"
                            ref={tshirtSizeRef}
                            placeholder="Enter t-shirt size (M,L,XI,XXL)"
                            required
                        />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
