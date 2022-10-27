import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "../context/auth/authContext";


export default function Logout() {
    const context = useContext(authContext);
    const { logoutUser } = context;
    const navigate = useNavigate();

    useEffect(()=>{
        logoutUser();
        navigate('/login');
    },[]);
    
    logoutUser();
    return (
        <div>
        </div>
    );
}
