import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import authContext from "../context/auth/authContext";


export default function Savepromotoken(props) {
    const context = useContext(authContext);
    const { savePromoToken,promoToken,loggedInUser } =  context;   
    const { paramToken } = useParams();
    const navigate = useNavigate();
    

    useEffect(()=>{
        if(!paramToken){
            savePromoToken('ram99');
            localStorage.setItem('promoToken','ram99');
        }else{
            savePromoToken(paramToken);
            localStorage.setItem('promoToken',paramToken);
        }
        
        navigate('/');
    })

    return (
    <div>

    </div>
    );
}
