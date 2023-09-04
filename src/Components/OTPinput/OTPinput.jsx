import React from "react";
import "../OTPinput/OTPinput.css"
import { useState } from "react";



function OTPinput() {
 

  return (
    <div className="container">
      <div className="header-container">
        <div className="email-container">
          <h2>Email Verification</h2>
          <p>We have sent a code to your email</p>
        </div>

      <form>
        <div className="input-box">
          <input
           type="text"
           id="otp"
           />
          <input
           type="text" 
           id="otp"
           />
          <input 
          type="text" 
          id="otp"
          />
          <input
           type="text" 
           id="otp"
           />
        </div>

          <div className="verify">
              {/* <a href="/">Verify Account</a> */}
              <button type="submit">Verify OTP</button>
          </div>
    
          <div className="resend-otp">
            <p>Didn't recieve code?</p>
            <a href="/">
            </a>
         </div>
      </form>

  </div>
</div>
  );
}

export default OTPinput;