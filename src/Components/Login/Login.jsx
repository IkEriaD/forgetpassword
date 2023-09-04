import React from "react";
import axios from "axios";
import "../Login/Login.css";
import FacebookIcon from "./facebook-fill.svg";
import TwitterIcon from "./twitter-fill.svg";
import LinkedinIcon from "./linkedin-fill.svg";



 function Login () {
 
  return (
    <div>
       <section className="section-container">
        <div className="row">
          <div className="col-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-1" alt="img1" />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <form>
            <div className="icon-container">
              <p>Sign in with</p>
              <div className='icons'>
              <img src={FacebookIcon} className='facebook' alt="fb" />
              <img src={TwitterIcon} className='twitter' alt="tw" />
              <img src={LinkedinIcon} className='linkedin' alt="lk" />
              </div>
            </div>

            <div className='underline'>
                <div className='empty'></div>
                <div>Or</div>
                <div className='empty'></div>
            </div>

           <div className='inputs'>
              <input
               type="text" 
               placeholder='Email address'
               required     
               />
            
              <input
               type="password" 
               placeholder='Password' 
               required
               />
               
           </div>

           <div className='checkbox'>
              <div>
                <input
                 type="checkbox" 
                 id="exampleCheck2"
                 /> 
                 <label htmlFor=""> Remember me </label>
                  </div>
              <a href='/forgotPassword'>
                Forgot Password?
                </a>
           </div>

           <button className='login-btn'>Login</button>
           <p>Don't have an account? 
            <a href="/">Register</a>
            </p>
            

            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;