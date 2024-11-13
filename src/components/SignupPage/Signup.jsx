import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FaApple } from 'react-icons/fa';
import GoogleLogo from '../../assets/androidDownload.png';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: '',
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }
    setErrorMessage(''); // Reset error message
    navigate('/OTP'); // Redirect to OTP page
  };

  return (
    <div className='w-full overflow-scroll'>
      <div className="flex justify-center items-center">
        <div className="w-[424px] p-6">
          <h2 className="text-2xl font-inter font-bold text-center text-[#323232]">
            Create Your Account!
          </h2>
          <p className="text-center font-normal text-[#969696] text-[16px]">
            Sign up to access personalized healthcare.
          </p>
          <form onSubmit={handleSubmit}>
            <fieldset className="mb-4">
              <legend className="font-inter block text-sm font-medium text-[#2D2D2D]">Role</legend>
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option className='text-gray-400' disabled>Choose your role</option>
                <option value="physician">Physician</option>
                <option value="patient">Patient</option>
              </select>
            </fieldset>
            <div className="mb-4">
              <label htmlFor="fullname" className="font-inter block text-sm font-medium text-[#2D2D2D]">Full Name</label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                required
                value={formData.fullname}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="font-inter block text-sm font-medium text-[#2D2D2D]">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="font-inter block text-sm font-medium text-[#2D2D2D]">Password</label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="absolute right-3 top-9 text-gray-500 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="confirmPassword" className="font-inter block text-sm font-medium text-[#2D2D2D]">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                className="absolute right-3 top-9 text-gray-500 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
              type="submit"
              className="w-full mt-2 bg-[#3B54FA] text-white py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>

            <div className="flex items-center justify-center my-4">
              <hr className="flex-1 border-gray-300" />
              <span className="mx-4 text-gray-500 whitespace-nowrap">or do it via other accounts</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <div className='flex justify-center gap-4 mb-4'>
              <button className='w-10 h-10 flex items-center justify-center rounded-full bg-white border-2'>
                <img className='w-6' src={GoogleLogo} alt="Google logo" />
              </button>
              <button className='w-10 h-10 flex items-center justify-center rounded-full bg-white border-2'>
                <FaApple className='text-xl' />
              </button>
            </div>

            <div className='flex justify-center'>
              <p className='font-normal text-base text-[#4e4e4e]'>
                Already have an account? <Link to="/auth/signin" className="text-blue-500">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const OTPVerification = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Add verification logic here
    // On success:
    // navigate('/additional-info');
    // On failure:
    // setError('Invalid OTP');
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center p-8">
      <h1>Verify Email</h1>
      <p>A 6-digit code was sent to your email. Check your email and enter the verification code.</p>
      <form className="mt-[5rem] w-full space-y-4" onSubmit={handleSubmit}>
        <div className="flex justify-center space-x-2 mt-3">
          {otp.map((data, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="mt-1 block w-10 px-3 py-2 border border-[#F44949] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-center text-lg"
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>
        <div className='flex justify-center'>
          <button
            type="submit"
            className="mt-4 text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

const AdditionalInfo = () => {
  const [formData, setFormData] = useState({
    gender: '',
    dateOfBirth: '',
    healthConditions: [],
    additionalInfo: '',
    specialization: '',
    experience: '',
    professionalBio: '',
    idFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, idFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of additional info
  };

  return (
    <div className='p-8'>
      <h1>You Are Almost There!</h1>
      <p>Complete your profile to finish setting up your account</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full">
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="healthConditions">Health Conditions</label>
          <select name="healthConditions" id="healthConditions" multiple value={formData.healthConditions} onChange={handleChange} className="mt-1 block w-full">
            <option value="condition1">Condition 1</option>
            <option value="condition2">Condition 2</option>
            <option value="condition3">Condition 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="additionalInfo">Additional Health Information</label>
          <textarea
            name="additionalInfo"
            id="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="mt-1 block w-full"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="specialization">Area of Specialization (if physician)</label>
          <input
            type="text"
            name="specialization"
            id="specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="experience">Years of Experience (if physician)</label>
          <input
            type="text"
            name="experience"
            id="experience"
            value={formData.experience}
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="professionalBio">Professional Bio (if physician)</label>
          <textarea
            name="professionalBio"
            id="professionalBio"
            value={formData.professionalBio}
            onChange={handleChange}
            className="mt-1 block w-full"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="idFile">Upload Valid ID</label>
          <input
            type="file"
            name="idFile"
            id="idFile"
            onChange={handleFileChange}
            className="mt-1 block w-full"
          />
        </div>
        <button type="submit" className="mt-2 bg-[#3B54FA] text-white py-2 rounded-md">
          Finish Up
        </button>
        <button type="button" className="mt-2 ml-2" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </form>
    </div>
  );
};

export default Signup;
