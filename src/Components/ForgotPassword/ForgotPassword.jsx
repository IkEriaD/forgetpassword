import React, { useState } from "react";
import "../ForgotPassword/ForgotPassword.css"
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const [genotp, setGenotp] = useState();

  const handleSendOTP = (e) => {
    e.preventDefault();
    // For this example, we'll just print an OTP to the console
    const generatedOTP = Math.floor(Math.random() * 9000) + 1000;
    console.log("Generated OTP:", generatedOTP);
    console.log(genotp);
    setOtpSent(true);
    setStep(step + 1); // Move to the next step
    setGenotp(generatedOTP)
    
  };

  const handleSubmitOTP = (e) => {
    e.preventDefault();
    // Here you can implement your logic for handling OTP verification
    // For this example, we'll just set a success message
  
     // Compare the input OTP with the generated OTP
     if (otp === genotp.toString()) {
      setMessage("OTP verified successfully.");
      setError("");
      setStep(step + 1); // Move to the next step
      } else {
          setError("Invalid OTP. Please enter the correct OTP.");
      }
      console.log(genotp);
      console.log("OTP:", otp);
  };
  

  const handleSubmitNewPassword = (e) => {
    e.preventDefault();
    // Here you can implement your logic for setting the new password
    // console.log("New password set successfully!");
    setMessage("New password set successfully.");
    setError("");
    setStep(step + 1); // Move to the next step
  };

  const handleStepSubmit = (e, data) => {
    e.preventDefault();
    // Call the appropriate handler based on the current step
    if (step === 1) {
      handleSendOTP(e);
    } else if (step === 2) {
      handleSubmitOTP(e);
    } else if (step === 3) {
      handleSubmitNewPassword(e);
    }
  };

  const handleOtpChange = (index, value) => {
    const newOtp = otp.split('');
    newOtp[index] = value;
    setOTP(newOtp.join(''));
  };
  

  return (
    <div>
      <section className="forgotpassword-container">
      <div className="left-img">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-1" alt="img1" />
        </div>

        <div className="right">
        <div className="top-text">
        
        </div>

        {step === 1 && (

        <form onSubmit={(e) => handleStepSubmit(e, otp)}>
         <div className="forgetpassword-input">
            <h2>Forgot Password?</h2>
          <p>Enter your registered email address to reset your password</p>
        <label htmlFor="email">Email Address </label>
    <input
    type="email"
    placeholder="Enter your email"
    id="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  <button type="submit">Submit</button>
  <a href="/login">Back to Login</a>

  <div className="buttom-text">
    <p>Privacy Policies</p>
    <p>Terms of Service</p>
  </div>
  </div>
</form>
)}


      {step === 2 && (
        <form onSubmit={(e) => handleStepSubmit(e, email)}>
          <div className="otp-input">
          <h2>Email Verification Code</h2>
          <p>We have sent a code to your email</p>
          
          <div className="input-box">
          <input
           type="text"
           maxLength="1"
           id="otp1"
           value={otp[0]}
          onChange={(e) => handleOtpChange(0, e.target.value)}
           required
           />
          <input
           type="text" 
           maxLength="1"
           id="otp2"
           value={otp[1]}
           onChange={(e) => handleOtpChange(1, e.target.value)}
           
           />
          <input 
          type="text" 
          maxLength="1"
          id="otp3"
          value={otp[2]}

          onChange={(e) => handleOtpChange(2, e.target.value)}
         
          />
          <input
           type="text" 
           maxLength="1"
           id="otp4"
           value={otp[3]}
           onChange={(e) => handleOtpChange(3, e.target.value)}
           
           />
        </div>
          <button type="submit">Continue</button>
          {message && <p>{message}</p>}
          {error && <p>{error}</p>}
          <p>Entered your email incorrectly? <a href="/">Change your email</a></p>
          <span>Do not receive verification code? <a href="/">Resend</a></span>
          </div>
        </form>

      )}
      

      {step === 3 && (
        <div className="newpassword-container">
        <h2>Create New Password</h2>
        {message && <p>{message}</p>}

    <form onSubmit={(e) => handleStepSubmit(e)}>
      <div className="password-input">
      <label htmlFor="password">New Password</label>
      <input
        type="password"
        id="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="••••••••"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      </div>
      <button type="submit">Confirm</button>
    </form>

    <div className="buttom-text">
          <p>Privacy Policies</p>
          <p>Terms of Service</p>
      </div>
    </div>
      )}

      {step === 4 && (
      <section className="home-container">
        <div className="part-2">
          <h2>Password succesfully set{" "}</h2>

          <div className="home">
            <div className="h-div"></div>
            <div>Welcome HOME</div>
            <div className="h-div"></div>
          </div>
        </div>
      </section>
      )}
        
    
      {otpSent && ( <Link to="/login">Go to Home</Link> )}
        </div>
      </section>
     
    </div>
  );
}

export default ForgotPassword;



