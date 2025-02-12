import React, { useState, useRef, useEffect } from 'react';

const OTPVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [verificationStatus, setVerificationStatus] = useState(null);
  const inputRefs = useRef([]);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsResendDisabled(false);
    }
  }, [resendTimer]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setIsResendDisabled(true);
    setResendTimer(30);
    setVerificationStatus(null);
    setOtp(new Array(6).fill(""));
    // Here you would typically call an API to resend the OTP
    console.log("Resending OTP...");
  };

  const handleVerify = () => {
    const enteredOTP = otp.join("");
    if (enteredOTP.length === 6) {
      // Here you would typically call an API to verify the OTP
      // For this example, we'll just check if the OTP is '123456'
      if (enteredOTP === '123456') {
        setVerificationStatus('success');
      } else {
        setVerificationStatus('error');
      }
    } else {
      setVerificationStatus('incomplete');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Verify Your Account</h2>
        <p className="text-center text-gray-600 mb-6">
          We've sent a 6-digit code to your email. Enter the code below to confirm your email address.
        </p>
        <div className="flex justify-center space-x-2 mb-6">
          {otp.map((_, index) => (
            <input
              key={index}
              type="text"
              ref={el => inputRefs.current[index] = el}
              value={otp[index]}
              onChange={e => handleChange(e.target, index)}
              onKeyDown={e => handleKeyDown(e, index)}
              maxLength={1}
              className="w-12 h-12 text-2xl text-center border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          ))}
        </div>
        <button
          onClick={handleVerify}
          className="w-full px-4 py-2 text-sm font-medium rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors mb-4"
        >
          Verify OTP
        </button>
        {verificationStatus === 'success' && (
          <p className="text-green-500 text-center mb-4">OTP verified successfully!</p>
        )}
        {verificationStatus === 'error' && (
          <p className="text-red-500 text-center mb-4">Invalid OTP. Please try again.</p>
        )}
        {verificationStatus === 'incomplete' && (
          <p className="text-yellow-500 text-center mb-4">Please enter all 6 digits.</p>
        )}
        <button
          onClick={handleResend}
          disabled={isResendDisabled}
          className={`w-full px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            isResendDisabled
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {isResendDisabled ? `Resend in ${resendTimer}s` : 'Resend OTP'}
        </button>
        <p className="text-center text-sm text-gray-500 mt-6">
          Didn't receive the code? Check your spam folder or request a new one.
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;

