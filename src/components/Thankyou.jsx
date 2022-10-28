import React, { useContext, useEffect } from 'react'
import Tnc from './Tnc'
import ReactGA from 'react-ga';
import authContext from '../context/auth/authContext';
import { useNavigate } from 'react-router-dom';


ReactGA.initialize('G-4SPQWXL7YC');

export default function Thankyou() {
    const context = useContext(authContext);
    const { loggedInUser } = context;
    const navigate = useNavigate();

    useEffect(()=>{
        if(!loggedInUser){
            return navigate('/profile');
        }
        ReactGA.pageview(window.location.pathname + window.location.search);
        
    },[])


    ReactGA.event({
        category: 'User Enrolled',
        action: 'Enroll successfully'
      });
  return (
    <Tnc thankyou={true}/>
  )
}
