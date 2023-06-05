import React, { useState, useEffect } from 'react';
import './Signup.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Signup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [verify, setVerify] = useState('');

  const handleSignup = () => {
    // Perform signup logic here
    // You can access the form data in the state variables (username, password, confirmPassword, email, verify)
    // Validate the form data, make API calls, etc.
  };

  // const togglePopup = () => {
  //   setShowPopup(!showPopup);
  // };

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div>
      <Header />
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h1>Sign Up</h1>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="verify">Verify:</label>
              <input
                type="text"
                id="verify"
                value={verify}
                onChange={(e) => setVerify(e.target.value)}
              />
            </div>
            <button onClick={handleSignup}>Sign Up</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Signup;
