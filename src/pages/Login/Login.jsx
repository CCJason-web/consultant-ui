import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Login.scss';

const LoginPopup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    // You can access the form data in the state variables (username, password)
    // Validate the form data, make API calls, etc.
  };

  return (
    <div>
      <Header />
        <div className="popup">
          <div className="popup-content">
            <h1>Login</h1>
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
            <button onClick={handleLogin}>Log In</button>
          </div>
        </div>
    <Footer />
    </div>
  );
};

export default LoginPopup;
