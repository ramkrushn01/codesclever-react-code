import React, { useEffect, useRef, useState } from "react";
import "../css/Notification.css";

export default function Notification(props) {
    let [notiType, setNotiType] = useState(props.type);
    const type = props.type;

    let notifyDivRef = useRef();

    useEffect(()=>{
        notifyDivRef.current.style.visibility = 'visible';
        let timeO = setTimeout(() => {
            notifyDivRef.current.style.visibility = 'hidden';
        }, 2300);
        return ()=>{clearTimeout(timeO)}
    })

    return (
        <div className={props.type + " notify"} ref={notifyDivRef}>
            <p>{props.message}</p>
            <div
                className={props.type && "pro-bar"}
                id={props.type}
                ></div>
        </div>
    );
}
