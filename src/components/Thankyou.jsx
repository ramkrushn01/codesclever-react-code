import React, { useEffect } from 'react'
import Tnc from './Tnc'
import ReactGA from 'react-ga';
ReactGA.initialize('G-4SPQWXL7YC');

export default function Thankyou() {

    useEffect(()=>{
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
