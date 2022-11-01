import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Tnc from "./Tnc";
import startexam from "../context/auth/startexam";
import examvaliduser from "../context/auth/examvaliduser";
import { useEffect } from "react";
import authContext from "../context/auth/authContext";
import { useContext } from "react";


export default function Startexam() {
    const context = useContext(authContext);
    const {loginUser,loggedInUser} = context;
    const navigator = useNavigate();

    
    const sty = {
        display: "flex",
        justifyContent: "center",
    };
    const stylnk = {
        border: "1px solid white",
        padding: "10px",
    };

    useEffect(()=>{
        if(!loggedInUser){
            return navigator('/profile');
        }

    },[])

    const startexamme = async () => {
        const wat = window.confirm("You Are Ready! Start The Exam");

        if (wat) {
            const chkvaliduser = await examvaliduser();
            if (chkvaliduser.success) {
                const st = await startexam();
                if (st.success) {
                    navigator("/exam/start");
                } else {
                    alert(st.reason);
                }
            } else {
                alert(chkvaliduser.reason);
            }
        }
    };

    return (
        <>
            <div>
                <Tnc home={true} />
            </div>
            <div className="start" style={sty}>
                <button style={stylnk} to="/exam" onClick={startexamme}>
                    Start Exam
                </button>
            </div>
        </>
    );
}
