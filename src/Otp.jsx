import React, { useState, useRef } from 'react';

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputsRef = useRef([]);

  const handleChange = (element, index) => {
    if (!/^[0-9]$/.test(element.value) && element.value !== '') return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== '' && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index] === '') {
        if (index > 0) {
          inputsRef.current[index - 1].focus();
          newOtp[index - 1] = '';
        }
      } else {
        newOtp[index] = '';
      }
      setOtp(newOtp);
    }
  };

  const handleSubmit = () => {
    alert('Entered OTP is: ' + otp.join(''));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Enter OTP</h2>
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={value}
          ref={(el) => (inputsRef.current[index] = el)}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{
            width: '40px',
            height: '40px',
            fontSize: '20px',
            margin: '5px',
            textAlign: 'center',
          }}
        />
      ))}
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Otp;
