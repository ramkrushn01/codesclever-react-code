import React from 'react'
// import '../css/Shipping.css'
import '../css/Cancel.css'

export default function Shipping() {
  return (
    <div className="maincancel">
      <div className="compalinace-page">
        <div className="header-conatiner">
            <img
                src="/images/codesclever-logo-192x192.png"
                style={{"height": "64px", "width": "64px"}}
            />
            <p className="header-text">Ramkrushn Bharat Salunkhe</p>
        </div>
        <div className="compalinace-content">
            <div className="content-container">
                <p className="content-head">Shipping &amp; Delivery Policy</p>
                <div className="content-seprater"></div>
                <p className="updated-date">Last updated on Oct 27th 2022</p>

                <p className="content-text">
                    Shipping is not applicable for business.
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}
