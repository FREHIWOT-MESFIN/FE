import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineUp, AiOutlineDown, AiOutlineSearch } from 'react-icons/ai';
import { MdEmail, MdPhone } from 'react-icons/md';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isNutritionOpen, setIsNutritionOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDropdown = (setDropdownState) => {
    setDropdownState(prevState => !prevState);
  };

  return (
    <div className='sticky top-0 w-full z-50'>
      <div className="h-[2.6875rem] p-[0.625rem_6.5rem] flex items-center gap-0.125rem opacity-100 bg-gray-100 border border-gray-300">
        <div className="flex items-center gap-0.125rem">
          <MdEmail className="text-gray-600" />
          <span className="text-gray-800">contact@e-medatt.com</span>
        </div>
        <div className="flex items-center gap-0.125rem">
          <MdPhone className="text-gray-600" />
          <span className="text-gray-800">(414) 850 - 0417</span>
        </div>
      </div>
      <nav className="top-[0.6875rem] z-50 h-[5.5rem] py-[1.25rem] px-[6.5rem] flex justify-between items-center bg-[#0D192F] text-[#fff]">
        <div className="flex items-center bg-[#FCFCFD] h-[2.875rem] py-[1rem] px-[1.5rem] rounded-[5.625rem]">
          <img src={Logo} alt="E-medatt logo" className="w-[1.875rem] h-[1.875rem] m-0 p-0" />
          <h3 className="font-[Inter] text-base sm:text-3xl font-bold leading-normal text-[#3B54FA] mr-1.25rem m-0 p-0 whitespace-nowrap">
            E-MEDATT
          </h3>
        </div>

        <div className='hidden md:flex'>
          <div className="hidden md:flex mx-auto md:ml-1.375rem md:space-x-8 w-[31.75rem] h-[1.5rem] gap-[0.625rem] items-center mt-0.125rem">
            <div className='relative'>
              <a className='leading-[1.45rem] font-normal text-base text-[#F0F0F0] text-center hover:text-[#fff] font-[Inter]' href="#">
                Home
              </a>
            </div>

            <div className='relative'>
              <Link className='leading-[1.45rem] font-normal text-base text-[#F0F0F0] text-center hover:text-[#fff] font-[Inter]' to="/about">About</Link>
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown(setIsServicesOpen)}
                className="inline-flex font-[Inter] items-center px-0.1875rem py-0.125rem rounded-md leading-[1.45rem] font-normal text-base text-[#F0F0F0] hover:text-[#fff] focus:outline-none"
              >
                Services
                {isServicesOpen ? <AiOutlineUp className="ml-0.125rem" /> : <AiOutlineDown className="ml-0.125rem" />}
              </button>
              {isServicesOpen && (
                <div className="absolute mt-5 ml-11 w-[270px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out duration-700 z-10">
                  <div className="py-1 px-2">
                    <a href="#" className="block font-[Inter] p-2 text-[#323232] text-[14px] font-normal leading-[20.3px] hover:bg-[#D9E5FB]">Telehealth Consultation</a>
                    <a href="#" className="block font-[Inter] p-2 text-[#323232] text-[14px] font-normal leading-[20.3px] hover:bg-[#D9E5FB]">Speccialist Care</a>
                    <a href="#" className="block font-[Inter] p-2 text-[#323232] text-[14px] font-normal leading-[20.3px] hover:bg-[#D9E5FB]">Medical Records Management</a>
                    <a href="#" className="block font-[Inter] p-2 text-[#323232] text-[14px] font-normal leading-[20.3px] hover:bg-[#D9E5FB]">Medical Tests & Diagnostics</a>
                    <a href="#" className="block font-[Inter] p-2 text-[#323232] text-[14px] font-normal leading-[20.3px] hover:bg-[#D9E5FB]">Wellness Programs</a>
                    <a href="#" className="block font-[Inter] p-2 text-[#323232] text-[14px] font-normal leading-[20.3px] hover:bg-[#D9E5FB]">Appointment Scheduling</a>
                  </div>
                </div>
              )}
            </div>

            <div className='relative'>
              <Link className='leading-[1.45rem] font-normal text-base text-[#F0F0F0] text-center hover:text-[#fff] font-[Inter]' to="/pricing">Pricing</Link>
            </div>
          </div>

          <div className="flex items-center w-[14.6875rem] h-[2.5rem] gap-[1rem] mx-9rem">
            <div className="relative hidden md:block ml-0.4375rem">
              <div className="flex justify-center items-center w-[2.5rem] h-[2.5rem] bg-[#fff] rounded-[0.5rem] pointer-events-none">
                <AiOutlineSearch className="text-[#323232] text-xl" />
              </div>
            </div>

            <div className='md:block hidden w-[11.1875rem] h-[2.5rem] gap-[1rem] lg:flex justify-center items-center'>
              <Link
                to="/auth/signin"
                className="flex justify-center items-center w-[4.625rem] h-[2.5rem] rounded-[1rem] bg-[#417BEB] text-[#fff] px-[1.125rem] py-[0.4375rem] cursor-pointer"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="flex justify-center items-center w-[5.5625rem] h-[2.5rem] rounded-[1rem] bg-[#fff] text-[#000] px-[1.125rem] py-[0.4375rem] cursor-pointer text-nowrap"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/*mobile screens*/}

        <div onClick={handleNav} className='block md:hidden ml-auto'>
          {nav ? <AiOutlineClose size={"1.875rem"} className='text-black' /> : <AiOutlineMenu size={"1.875rem"} className='text-black' />}
        </div>

        <div className={nav ? 'fixed right-0 z-20 w-full h-full bg-white/70 backdrop-blur-lg gap-[2rem] text-black top-[4.0625rem] left-0 flex flex-col items-center text-center transition-all duration-500 ease-in-out' : 'absolute left-[-100%]'}>
          <div className="px-0.125rem pt-0.125rem pb-0.1875rem space-y-0.0625rem sm:px-0.1875rem flex flex-col items-center w-full">
            <div className="relative my-0.125rem">
              <button
                onClick={() => toggleDropdown(setIsServicesOpen)}
                className="inline-flex items-center px-0.1875rem py-0.125rem text-[#4e4e4e] font-bold text-sm"
              >
                Services
                {isServicesOpen ? <AiOutlineUp className="ml-0.125rem mt-0.0625rem" /> : <AiOutlineDown className="ml-0.125rem mt-0.0625rem" />}
              </button>
              {isServicesOpen && (
                <div className="mt-0.125rem w-12 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out duration-300">
                  <div className="py-0.0625rem">
                    <a href="#" className="block px-1rem py-0.125rem text-sm text-[#4e4e4e]">General Consultation</a>
                    <a href="#" className="block px-1rem py-0.125rem text-sm text-[#4e4e4e]">Emergency Services</a>
                    <a href="#" className="block px-1rem py-0.125rem text-sm text-[#4e4e4e]">Surgical Services</a>
                    <a href="#" className="block px-1rem py-0.125rem text-sm text-[#4e4e4e]">Diagnostic Services</a>
                  </div>
                </div>
              )}
            </div>

            <div className="relative my-0.125rem">
              <button
                onClick={() => toggleDropdown(setIsNutritionOpen)}
                className="inline-flex items-center px-0.1875rem py-0.125rem text-[#4e4e4e] font-bold text-sm"
              >
                Nutrition
                {isNutritionOpen ? <AiOutlineUp className="ml-0.125rem mt-0.0625rem" /> : <AiOutlineDown className="ml-0.125rem mt-0.0625rem" />}
              </button>
              {isNutritionOpen && (
                <div className="mt-0.125rem w-12 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out duration-300">
                  <div className="py-0.0625rem">
                    <a href="#" className="block px-1rem py-0.125rem text-sm text-[#4e4e4e]">Diet Plans</a>
                    <a href="#" className="block px-1rem py-0.125rem text-sm text-[#4e4e4e]">Nutritional Counseling</a>
                    <a href="#" className="block px-1rem py-0.125rem text-sm text-[#4e4e4e]">Special Diets</a>
                    <a href="#" className="block px-1rem py-0.125rem text-sm text-[#4e4e4e]">Healthy Eating Tips</a>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="px-0.1875rem py-0.125rem text-[#4e4e4e] items-center font-bold text-sm my-0.125rem ml-[-0.0625rem]">Partners</a>

            <div className="relative my-0.125rem">
              <button
                onClick={() => toggleDropdown(setIsArticlesOpen)}
                className="inline-flex items-center px-0.1875rem py-0.125rem text-[#4e4e4e] font-bold text-sm"
              >
                Articles
                {isArticlesOpen ? <AiOutlineUp className="ml-0.125rem mt-0.0625rem" /> : <AiOutlineDown className="ml-0.125rem mt-0.0625rem" />}
              </button>
              {isArticlesOpen && (
                <div className="mt-0.125rem w-12 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out duration-300">
                  <div className="py-0.0625rem">
                    <a href="#" className="block px-1rem py-0.125rem text-sm text-[#4e4e4e]">Health News</a>
                    <a href="#" className="block px-1rem py-0.125rem text-sm text-[#4e4e4e]">Wellness Tips</a>
                    <a href="#" className="block px-1rem py-0.125rem text-sm text-[#4e4e4e]">Patient Stories</a>
                    <a href="#" className="block px-1rem py-0.125rem text-sm text-[#4e4e4e]">Disease Information</a>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="px-0.1875rem py-0.125rem items-center text-[#4e4e4e] font-bold text-sm my-0.125rem ml-[-0.0625rem]">About Us</a>

            <div className="relative my-0.125rem">
              <input
                type="text"
                className="block w-[14.6875rem] h-[2.125rem] pl-2.25rem pr-0.1875rem py-0.125rem border border-gray-300 rounded-md leading-5 mb-0.25rem text-[#868686] bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-0.1875rem flex items-center pointer-events-none">
                <AiOutlineSearch className="text-[#868686] mt-[-1rem]" />
              </div>
            </div>

            <div className='flex flex-col w-[11.6875rem] h-[2.5rem] gap-[1rem] items-center my-0.125rem '>
              <Link to="/Login" className='w-[4.9375rem] h-[2.5rem] rounded-lg border gap-[0.5rem] text-[#3b54fa] bg-[#ffffff] px-1.125rem py-0.25rem cursor-pointer whitespace-nowrap mt-0.0625rem'>Log in</Link>
              <Link to="/Signup" className='w-[5.75rem] h-[2.5rem] rounded-lg border-none gap-[0.5rem] bg-[#3b54fa] text-[#ffffff] px-1.125rem py-0.25rem cursor-pointer whitespace-nowrap'>Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
