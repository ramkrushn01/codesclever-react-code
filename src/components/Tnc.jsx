import React from "react";
import "../css/Tnc.css";

export default function Tnc(props) {
    return (
        <div
            className="tncMainDiv"
            style={props.home && { minHeight: "fit-content" }}>
            <div className="tnc">
                <h1
                    className="thankyou"
                    style={props.thankyou && { display: "block" }}>
                    Thanks For Enrolling
                </h1>
                <h4 data-aos="zoom-in-right">Terms and conditions</h4>
                <p data-aos="zoom-in-left">About Competition</p>
                <ul className="tncul" data-aos="fade-right">
                    <li>
                        <span>
                            if you are try to exit or change to full screen
                            window the exam will stop automatically and your
                            final score are the till solve questions
                        </span>
                    </li>
                    <li>You can take the test only one time.</li>
                    <li>
                        The contest will be held on <span> 01 Nov 2022.</span>
                    </li>
                    <li>
                        There will be <span> 60 MCQ </span> type questions
                        related to Python programming.
                    </li>
                    <li>
                        There is only <span> 60 Minutes </span> to complete the
                        test.
                    </li>
                    <li>
                        You <span> can't switch tab </span> in between the
                        Contest.
                    </li>
                    <li>
                        Rankings will be according to the no. Of questions
                        <span> correct and time taken.</span>
                    </li>
                    <li>
                        If any kind of <span> cheating </span> is found during
                        the contest then you can be disqualified.
                    </li>
                </ul>
            </div>
        </div>
    );
}
