import React from "react";
import { useState,useContext } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import getquestion from "../context/auth/getquestion";
import saveans from "../context/auth/saveans";
import endexam from "../context/auth/endexam";
import examvaliduser from "../context/auth/examvaliduser";
import "../css/Exam.css";
import { useNavigate, useParams } from "react-router-dom";



export default function Exam() {

    const param = useParams();
    const question = useRef();
    const aRef = useRef();
    const bRef = useRef();
    const cRef = useRef();
    const dRef = useRef();
    const setQn = useRef();
    const subBtn = useRef();
    const navigator = useNavigate();

    const [options, setOptions] = useState(0);
    const [currentQN, setCurrentQN] = useState(1);
    const [tMin, setTMin] = useState(1);
    const [tSec, setTSec] = useState(0);
    const [tabChange, SetTabChange] = useState(1);

    setTimeout(() => {
        alert("Your Time is finished");
        endexam();
        navigator("/");
    }, 3600000);

    setInterval(() => {
        // console.log(tSec);
        setTMin(tMin + 1);
        if (tMin > 60) {
            endexam();
            navigator("/");
        }
    }, 60000);

    const clearRatio = () => {
        document.getElementById("a").checked = false;
        document.getElementById("b").checked = false;
        document.getElementById("c").checked = false;
        document.getElementById("d").checked = false;
    };

    const handleSaveNext = async (e) => {
        e.preventDefault();

        if (currentQN >= 60) {
            subBtn.current.style.visibility = "hidden";
            alert('click on "final submit" to submit the test ');
        }

        if (options == 0) {
            alert("Please Select correct ans");
            return;
        }

        // console.log(currentQN);

        const saveansa = await saveans({ qnumber: currentQN, ans: options });
        if (saveansa) {
            // get next question
            const getnextque = await getquestion({ currentQN: currentQN });
            question.current.innerText = getnextque.question;
            aRef.current.innerText = getnextque.a;
            bRef.current.innerText = getnextque.b;
            cRef.current.innerText = getnextque.c;
            dRef.current.innerText = getnextque.d;

            clearRatio();
            setCurrentQN(currentQN + 1);
            // setQn.current.innerText = currentQN;
            setOptions(0);
        } else {
            alert("internal server error");
        }
    };

    const finalSubmit = async (e) => {
        const smbt = window.confirm("Final Submit?");
        if (smbt) {
            const endx = await endexam();
            // console.log(endx);
            navigator("/");
        }
    };

    document.onvisibilitychange = (e) => {
        e.preventDefault();
        alert(`Do not change the tab remaining : +${eval(6 - tabChange)}`);
    };

    document.addEventListener("beforeunload", function (e) {
        e.preventDefault();
        // e.returnValue = "";
        console.log(e);
    });

    useEffect(() => {
        // console.log(param.param);
        if (param.param != "start") {
            const chkvaliduser = examvaliduser();
            chkvaliduser.then((validuser) => {
                if (validuser.success) {
                    // const getnextque = first();
                    const getque = getquestion({ currentQN: 0 });
                    getque.then((getnextque) => {
                        question.current.innerText = getnextque.question;
                        aRef.current.innerText = getnextque.a;
                        bRef.current.innerText = getnextque.b;
                        cRef.current.innerText = getnextque.c;
                        dRef.current.innerText = getnextque.d;
                        setQn.current.innerText = currentQN;
                        setOptions(0);
                    });
                } else {
                    alert(validuser.reason);
                    navigator("/");
                }
            });
        } else {
            // const getnextque = first();
            const getque = getquestion({ currentQN: 0 });
            getque.then((getnextque) => {
                question.current.innerText = getnextque.question;
                aRef.current.innerText = getnextque.a;
                bRef.current.innerText = getnextque.b;
                cRef.current.innerText = getnextque.c;
                dRef.current.innerText = getnextque.d;
                setQn.current.innerText = currentQN;
                setOptions(0);
            });
        }
    }, []);

    return (
        <div className="examMain">
            <button className="button1" onClick={finalSubmit}>
                Final Submit
            </button>
            <span className="timeout">{"Min:" + tMin}</span>
            <div className="que">
                <span ref={setQn}>{currentQN}</span>
                <p ref={question}></p>
                <div className="options">
                    <form onSubmit={handleSaveNext}>
                        <input
                            required
                            type="radio"
                            id="a"
                            name="options"
                            value="a"
                            onChange={(e) => setOptions(e.target.value)}
                        />
                        <label htmlFor="html" ref={aRef}></label>
                        <br />
                        <br />
                        <br />

                        <input
                            required
                            type="radio"
                            id="b"
                            name="options"
                            value="b"
                            onChange={(e) => setOptions(e.target.value)}
                        />
                        <label htmlFor="html" ref={bRef}></label>
                        <br />
                        <br />
                        <br />

                        <input
                            required
                            type="radio"
                            id="c"
                            name="options"
                            value="c"
                            onChange={(e) => setOptions(e.target.value)}
                        />
                        <label htmlFor="html" ref={cRef}></label>
                        <br />
                        <br />
                        <br />

                        <input
                            required
                            type="radio"
                            id="d"
                            name="options"
                            value="d"
                            onChange={(e) => setOptions(e.target.value)}
                        />
                        <label htmlFor="html" ref={dRef}></label>
                        <br />
                        <br />
                        <br />
                        <button ref={subBtn} onClick={handleSaveNext}>
                            Save and next
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
