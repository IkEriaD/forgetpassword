import React, { useState } from "react";
import "../CreateNewPassword/CreateNewPassword.css"

function CreateNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic for setting the new password
    // console.log("New password set successfully!");
    setMessage("New password set successfully.");
    setError("");
  };

  return (
    <div>
      <section className="container">
        <div className="newpassword-container">
          <h2>Create New Password</h2>
          {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
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
      </section>
    </div>
  );
}

export default CreateNewPassword;

