import React, { useState } from 'react';
import './Signup.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [usernameValidation, setUsernameValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [emailValidation, setEmailValidation] = useState(true);
  const [verificationValidation, setVerificationValidation] = useState(true);

  const handleSignup = async (event) => {
    event.preventDefault();

    fieldsValidation();

    if(!email) {
      setEmailValidation(false);
      return;
    }

    try {
      const response = await axios.post('/consultant/v1/api/signup', {
        username,
        password,
        confirmPassword,
        email,
        verificationCode
      });

      // Handle the response or perform any necessary actions
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const fieldsValidation = () => {
    let isReturn = false;
    if(password != confirmPassword) {
      setPasswordMatch(false);
      isReturn = true;
    }

    if(!username) {
      setUsernameValidation(false);
      isReturn = true;
    }

    if(!password) {
      setPasswordValidation(false);
      isReturn = true;
    }

    if(!email) {
      setEmailValidation(false);
      isReturn = true;
    }

    if(!verificationCode) {
      setVerificationValidation(false);
      isReturn = true;
    }

    if(isReturn){
      return;
    }

  }  

  const handleSendEmail = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/consultant/v1/api/emailVerification', {
        email
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirmPasswordValidation = () => {
    if(password != confirmPassword) {
      setPasswordMatch(false)
    } else {
      setPasswordMatch(true)
    }
  }

  const handleEmailValidation = () => {
    if(email) {
      setEmailValidation(true)
    } else {
      setEmailValidation(false)
    }
  }

  return (
    <div>
      <Header />
      <div className="popup">
        <div className="popup-content">
          <h1>Sign Up</h1>
          <form onSubmit={handleSignup}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={() => username ? setUsernameValidation(true) : setUsernameValidation(false)}
              />
            </div>
            {!usernameValidation && <p className='validation-alarm'>username can not be null</p>}
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => password ? setPasswordValidation(true) : setPasswordValidation(false)}
              />
            </div>
            {!passwordValidation && <p className='validation-alarm'>Password can not be null</p>}
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={handleConfirmPasswordValidation}
              />
            </div>
            {!passwordMatch && <p className='validation-alarm'>Password is not match</p>}
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailValidation}
              />
            </div>
            {!emailValidation && <p className='validation-alarm'>email can not be null</p>}
            <button onClick={handleSendEmail} >Send email</button>
            <div>
              <label htmlFor="verificationCode">Verify:</label>
              <input
                type="text"
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                onBlur={() => {verificationCode ? setVerificationValidation(true) : setVerificationValidation(false)}}
              />
            </div>
            {!verificationValidation && <p className='validation-alarm'>verificationCode can not be null</p>}
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
