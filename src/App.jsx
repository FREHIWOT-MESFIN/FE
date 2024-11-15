import React from 'react';
import AuthPage from './components/LoginPage/AuthPage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import LandingPage from './components/LandingPage/LandingPage';
import OTP from './components/OTPPage/OTP';
import Profile from './components/PatientProfilePage/Profile';
import SignUp from './components/SignupPage/Signup';
import About from './components/AboutPage/About';
import Pricing from './components/PricingPage/Pricing';


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth/:type" element={<AuthPage />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  </Router>
  )
}

export default App