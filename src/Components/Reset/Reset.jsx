import React from 'react'
import "../Reset/Reset.css"


 function Reset() {
 

  return (
    <div>
       <section className='container'>
      <div className='header-container'>
      <h2>Change Password</h2>

        <form>
          <div className='input-pass'>
              <label htmlFor='password'>New Password</label>
              <input
              type="password" 
              name="password"
              id="password"
              placeholder="••••••••"
              required=""
              />

              <label htmlFor='confirm-password'>Confirm Password</label>
              <input 
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              required=""
               />
          </div>

            <div className="checkbox-pass">
                <div>
                  <input 
                  type="checkbox" 
                  id="newsletter"
                  required=""
                  /> 
                  <label htmlFor='newsletter'>
                  I accept the
                  <a href='/'>Terms and Conditions</a>
                  </label>
                </div>
            </div>
        </form>

        <button
        className='reset-p'>Reset Password</button>
      </div>
    </section>
    </div>
    
  );
}

export default Reset;