import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import getlivedata from "../context/auth/getlivedata";
import "../css/Leaderbord.css";

export default function Leaderbord() {
    const num = Array.from({ length: 100 }, (x, i) => i + 1);

    const [data, setData] = useState([]);

    const dm = async () => {
        const getData = await getlivedata();
        setData(getData);
    };

    useEffect(() => {
        dm();
    }, []);

    return (
        <div style={{ background: "black" }}>
            <div className="mainleader">
                <span className="live"> &#9673; Live</span>
                <table data-aos="flip-left">
                    <caption>
                        <h1>LEADERBOARD</h1>
                    </caption>

                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Time taken</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {eachrow} */}
                        {/* <Getlivedata/> */}
                        {/* {data.map((ele, index) => {
                            return (
                                <tr data-aos="zoom-out-right" key={ele.email}>
                                    <td>{index + 1}</td>
                                    <td>{ele.email.split("@")[0]}</td>
                                    <td>{ele.marks}</td>
                                    <td>
                                        {new Date(
                                            ele.timeRequired
                                        ).getMinutes()}
                                    </td>
                                </tr>
                            );
                        })} */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
