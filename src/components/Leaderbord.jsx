import React from "react";
import "../css/Leaderbord.css";

export default function Leaderbord() {
    const num = Array.from({length: 100}, (x, i) => i+1);

    const eachrow = num.map((num) => {
        return( 
        <tr data-aos='zoom-out-right'>
            <td>{num}</td>
            <td>????????? ????????</td>
            <td>??</td>
            <td>??.??</td>
        </tr>
        )
    });

    return (
        <div style={{background:'black'}}>
            <div className="mainleader">
                
                <span className="live"> &#9673; Live</span>
                <table data-aos='flip-left'>
                    <caption><h1>LEADERBOARD</h1></caption>

                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Time taken</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eachrow}
                        
                        {/* <tr>
                            <td>1</td>
                            <td>Ramkrushn Salunkhe</td>
                            <td>50</td>
                            <td>40</td>
                        </tr> */}

                    </tbody>
                </table>
            </div>
        </div>
    );
}
