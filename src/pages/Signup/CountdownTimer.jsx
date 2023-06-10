import React, { useEffect, useState } from 'react';
import './Signup.scss';
import moment from 'moment';
import axios from 'axios';

const CountdownTimer = ({ onTimerExpired, fieldsValidation, email } ) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isFail, setIsFail] = useState(false);
  const [verificationTimeout, setVerificationTimeout] = useState(false);
//   const [isCountDown, setIsCountDown] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    } else {
      // Timer expired, invoke the callback
      setVerificationTimeout(false);
      onTimerExpired();
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, onTimerExpired]);


  const handleSendEmail = async (event) => {

    let isStop = fieldsValidation()
    if(isStop){
      return;
    }
    event.preventDefault();
    setVerificationTimeout(false);

    try {
      const response = await axios.post('/consultant/v1/api/emailVerification', {
        email
      });

      if(response.status === 200) {
        setIsFail(false);
        setTimeLeft(300); // Set initial time to 5 minutes (300 seconds)
      }
    } catch (error) {
      setIsFail(true);
    }
  };

  const formatTime = (timeInSeconds) => {
    const duration = moment.duration(timeInSeconds, 'seconds');
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div>
      {timeLeft === 0 ? (
        <button onClick={handleSendEmail}>Send Verification Code</button>
      ) : (
        <div>
          Verification Code will expire in: {formatTime(timeLeft)}
        </div>
      )}
      { isFail && <p className='validation-alarm'>Failed to send email</p> }
      { verificationTimeout && <p className='validation-alarm'>Veriify Time out</p> }
    </div>
  );
};

export default CountdownTimer;
