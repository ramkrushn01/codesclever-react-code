import authContext from "./authContext";
import { useState } from "react";

const AuthState = (props) => {
    // const HOST = 'http://127.0.0.1:8000';
    const initialLoginUser = localStorage.getItem("auth-token");
    const inittialPromoToken = localStorage.getItem("promoToken");

    const [loggedInUser, setLoggedInUser] = useState(initialLoginUser);
    const [promoToken,SetPormoToken] = useState(inittialPromoToken);
    
    // console.log('from ctn',loggedInUser);

    const loginUser = (props) => {
        localStorage.setItem("auth-token",props.authToken);
        setLoggedInUser(props.authToken);
        // console.log('au',props.authToken);
    };

    const logoutUser = (props) => {
        localStorage.removeItem("auth-token");
        localStorage.removeItem("promoToken");
        localStorage.clear();
        const initialLoginUser = localStorage.getItem("auth-token");
        setLoggedInUser(initialLoginUser);
        SetPormoToken("ram99");
    };

    const savePromoToken =  (props)=>{
        SetPormoToken(props);
    }

    return (
        <authContext.Provider value={{ loggedInUser, promoToken, loginUser, logoutUser, savePromoToken }}>
            {props.children}
        </authContext.Provider>
    );
};

export default AuthState;
