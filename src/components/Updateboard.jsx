import React from "react";
import { useRef } from "react";
import updateliveboard from "../context/auth/updateliveboard";
import "../css/Updateboard.css";

export default function Updateboard() {
    const emailRef = useRef();
    const marksRef = useRef();
    const timeRef = useRef();

    const updatelive = async (e) => {
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            marks: marksRef.current.value,
            timeTaken: timeRef.current.value,
        };
        const updatebrd = await updateliveboard(data);
        alert(updatebrd.reason);
        
    };
    return (
        <div className="mainupdate">
            <form onSubmit={updatelive}>
                <input type="text" ref={emailRef} placeholder="Name" required/>
                <br />
                <input type="text" ref={marksRef} placeholder="marks" required/>
                <br />
                <input type="text" ref={timeRef} placeholder="MM.SS" required/>
                <br />
                <button>update</button>
            </form>
        </div>
    );
}
