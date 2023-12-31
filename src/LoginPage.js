// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history =  useNavigate ();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    // Email validation using a simple regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setErrorMessage('Enter a valid email address');
    } else {
      setErrorMessage('');
    }

    setEmail(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;

    // Password validation
    if (/[^a-zA-Z0-9@]/.test(value)) {
      setErrorMessage('Password should not contain special characters other than @');
    } else if (!/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
      setErrorMessage('Password must contain at least one uppercase letter and one number');
    } else {
      setErrorMessage('');
    }
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered password is correct
    if (password === 'SmartServTest@123') {
      // Redirect to the dashboard
      history('/dashboard');
    } else {
      setErrorMessage('Incorrect password. Please try again.');
    }
  };
  const handleForgotPassword = () => {
    // Use the `mailto` link to open the user's email client
    window.location.href = 'mailto:support@smartserv.io?subject=Password Reset Request';
  };

  return (
    <>
     <div className="login-container">
      {/* Logo Container */}
      <div className="logo-container">
        <div className="logo"></div>
      </div>

     
      <h2 className="login-heading"></h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            placeholder='Username'
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={handlePasswordChange}
            required
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Login</button>
      </form>
      <div>
        <p onClick={handleForgotPassword} style={{ cursor: 'pointer', color: 'blue' }}>
          Forgot your password?
        </p>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
