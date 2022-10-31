import React, { useRef } from "react";
import { useState } from "react";
import saveqna from '../context/auth/saveqna';

export default function Saveqna() {
    const queNRef = useRef();
    const queRef = useRef();
    const aRef = useRef();
    const bRef = useRef();
    const cRef = useRef();
    const dRef = useRef();
    const ansRef = useRef();
    const [qn,setQn] = useState(13);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const qData = {
            qnumber: queNRef.current.value,
            question: queRef.current.value,
            a: aRef.current.value,
            b: bRef.current.value,
            c: cRef.current.value,
            d: dRef.current.value,
            ans: ansRef.current.value,
        };

        const saveD = await saveqna(qData);

        if (saveD.success) {
            alert(saveD.reason);
            setQn(qn + 1)
            queRef.current.value = ''
            aRef.current.value = ''
            bRef.current.value = ''
            cRef.current.value = ''
            dRef.current.value = ''
            ansRef.current.value = ''

        } else {
            alert(saveD.reason);
        }
    }

    const stl = {
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
        justifyContent: 'space-around'
    }

    return (
        <div style={stl}>
            <form onSubmit={handleSubmit} style={stl}>
            <input type="number" ref={queNRef} value={qn} onChange={(e)=> e.target.value = qn} readonly />
            <input type="text" ref={queRef} placeholder='question' required />
            <input type="text" ref={aRef} placeholder='a' required />
            <input type="text" ref={bRef} placeholder='b' required />
            <input type="text" ref={cRef} placeholder='c' required />
            <input type="text" ref={dRef} placeholder='d' required />
            <input type="text" ref={ansRef} placeholder='ans' required />
            <button style={{background:'red'}}>Save</button>
            </form>
        </div>
    );
}
