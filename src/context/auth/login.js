// import React from 'react'
// import authContext from './authContext';
import config from "../../config";

const login = async (props) => {
    const host = config().HOST;
    let res = null;
    
    const response = await fetch(`${host}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: props.email, password: props.password }),
    });
    
    res = await response.json();

    return res;
};

export default login;
