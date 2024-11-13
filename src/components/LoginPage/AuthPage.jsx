import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PhHeartbeat from '../../assets/ph_heartbeat-duotone.png';
import loginbg from '../../assets/loginbg.png';
import Signin from './Signin';
import SignUpOTP from '../OTPPage/OTP';
import Signup from '../SignupPage/Signup';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const { type } = useParams(); // Get the parameter from the URL
  const [activeComponent, setActiveComponent] = useState(type || 'signup'); // Default to 'signup' if type is undefined
  const steps = ['Personal Info', 'Verification', 'Complete'];
  const currentStep = steps.indexOf(activeComponent === 'signin' ? 'Complete' : activeComponent === 'signup' ? 'Personal Info' : 'Verification');

  useEffect(() => {
    setActiveComponent(type); // Update component based on the parameter
  }, [type]);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'signin':
        return <Signin />;
      case 'signup':
        return <Signup />;
      case 'otp':
        return <SignUpOTP />;
      default:
        return <Signup />;
    }
  };

  return (
    <div className='w-full h-[100vh] overflow-auto flex relative'>
      <div className='relative flex justify-center lg:block flex-1'>
        <div className="absolute top-[40px] left-[40px] w-[138px] h-[46px] flex items-center bg-[#FCFCFD] p-[16px] rounded-[90px] z-50">
          <Link to="/" className='flex justify-between items-center w-full'>
            <img src={PhHeartbeat} alt="E-MEDATT Logo" className="w-[26.92px] h-[30.12px]"/>
            <h1 className="font-inter text-[15px] font-bold leading-[13.64px] text-left text-[#3b54fa] whitespace-nowrap">
              E-MEDATT
            </h1>
          </Link>
        </div>
        {activeComponent == 'signup' ?
              <div className="absolute top-[80px] left-[0] w-full p-3 h-3 flex space-x-2 mt-5 z-50">
                {steps.map((step, index) => (
                  <div key={index} className={`flex-1 relative h-1 rounded ${index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'}`}>
                    {index === currentStep && (
                      <div className="absolute -top-0 w-full h-1 bg-blue-500 rounded" />
                    )}
                  </div>
                ))}
              </div>
      : ''}

        <div className='absolute top-1/2 transform -translate-y-1/2 left-[2.5rem] w-[35.0625rem] text-[#fff] z-50'>
          <h2 className="font-inter text-[56px] font-bold leading-[56px] text-left">
            {activeComponent == 'signin' ?
            'Access Quality Care Anytime, Anywhere.' :
            'Your journey to better health starts here.'
            }
          </h2>
          <p className='font-inter text-[18px] font-medium leading-[26.1px] text-left'>
          {activeComponent == 'signin' ?
            'Access personalized healthcare, schedule consultations with certified doctors, manage and review your medical records anytime, keep track of your upcoming appointments, and stay connected with your healthcare team.' :
            'Unlock personalized healthcare tailored to you, book appointments with ease, manage your medical records securely, stay informed on your health progress and enjoy seamless access to trusted care.'
            }
          </p>
        </div>

        <img className='absolute inset-0 object-cover w-full h-full' src={loginbg} alt="virtual doctor" />

        <div className='absolute bottom-0 w-full p-5 h-[23px] flex justify-between items-center'>
          <div className='w-[159px] h-[19px]'>
            <p className='font-Inter text-[#fff] text-xs leading-[14.52px] tracking-[-1%] text-nowrap'>
              Copyright © Emedatt 2024. <span><a href="#" className='underline'>Terms and Conditions</a></span>
            </p>
          </div>
          <div className="flex items-center w-[155px] h-[19px] gap-[18px]">
            <a className='font-normal w-[16px] h-[16px] p-1 bg-[#fff] rounded' href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
              <FaFacebook style={{ fontSize: '8px', color: '#4267B2' }} />
            </a>
            <a className='font-normal w-[16px] h-[16px] p-1 bg-[#fff] rounded' href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
              <FaTwitter style={{ fontSize: '8px', color: '#1DA1F2' }} />
            </a>
            <a className='font-normal w-[16px] h-[16px] p-1 bg-[#fff] rounded' href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
              <FaInstagram style={{ fontSize: '8px', color: '#C13584' }} />
            </a>
            <a className='font-normal w-[16px] h-[16px] p-1 bg-[#fff] rounded' href="https://www.linkedin.com/company/example" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ fontSize: '8px', color: '#0077B5' }} />
            </a>
            <a className='font-normal w-[16px] h-[16px] p-1 bg-[#fff] rounded' href="https://www.youtube.com/channel/example" target="_blank" rel="noopener noreferrer">
              <FaYoutube style={{ fontSize: '8px', color: '#FF0000' }} />
            </a>
          </div>
        </div>
      </div>

      <div className='flex-1 flex justify-center'>
        {renderComponent()}
      </div>
    </div>
  );
};

export default AuthPage;
