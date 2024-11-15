import React from 'react';
import ellipse from '../../assets/Ellipse 5.png'
import basicplan from '../../assets/basicplan.png'
import BulletV from '../../assets/BulletVector.png';
import Navbar from '../LandingPage/Navbar'
import Footer from '../LandingPage/Footer'
import Faq from '../LandingPage/Faq';

const Pricing = () => {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center">
      <Navbar/>
      {/* Pricing Title */}
      <div className="w-[506px] text-center mb-[3rem] mt-8">
        <h1 className="font-[Inter] text-[2rem] md:text-[3rem] text-[#000] font-bold leading-[3.814rem]">
         Simple<span className="font-[Inter] text-[#417BEB] text-[48px] font-bold leading-[43.2px]">Pricing Plan </span> For You!
        </h1>
        <p className="font-[Inter] text-[1rem] text-[#969696] leading-[1.5rem]">
        We offer flexible pricing options to ensure everyone has access to quality healthcare. Select a plan that fits your needs and budget.
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="relative w-full flex flex-col md:flex-row justify-center gap-[2rem] mb-8 px-11">
      <img src={ellipse} alt="" className='absolute top-[-25rem] -z-40 left-0 rotate-180'/>
        {/* Basic Plan */}
        <div className="w-[390px] h-[691px] p-[32px] px-[24px] gap-[24px] rounded-[16px] shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] bg-white">
          <div  className='flex'>
            <img src={basicplan} alt="" />
            <div>
              <p>
                Personal
              </p>
              <h2 className="font-[Inter] text-[1.5rem] font-bold text-[#323232]">
                Basic
              </h2>
            </div>
          </div>
          <p className="font-[Inter] text-[1rem] text-[#969696]">
          Get essential healthcare services with the Basic Plan. Perfect for individuals looking for affordable care
          </p>
          <div className="mt-[1.5rem] mb-[2rem]">
            <span className="text-[2rem] font-bold text-[#323232]">₦2,499</span> / month
          </div>
           <ul className="list-none my-4 space-y-2">
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Easy Appointment Scheduling
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Access to Certified Healthcare Providers
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Telehealth Services
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Medical Records Management
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Accessible and Affordable Healthcare
              </li>
            </ul>
          <button className="font-[Inter] text-[1rem] text-white bg-[#417BEB] w-full py-[1rem] rounded-[8px] hover:bg-[#365c9a]">
            Select Plan
          </button>
        </div>

        {/* Standard Plan */}
        <div className="w-[390px] h-[691px] p-[32px] px-[24px] gap-[24px] rounded-[16px] shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] bg-[#417BEB]">
          <div  className='flex'>
            <img src={basicplan} alt="" />
            <div>
              <p>
                Personal
              </p>
              <h2 className="font-[Inter] text-[1.5rem] font-bold text-[#323232]">
                Basic
              </h2>
            </div>
          </div>
          <p className="font-[Inter] text-[1rem] text-[#969696]">
          Get essential healthcare services with the Basic Plan. Perfect for individuals looking for affordable care
          </p>
          <div className="mt-[1.5rem] mb-[2rem]">
            <span className="text-[2rem] font-bold text-[#323232]">₦2,499</span> / month
          </div>
           <ul className="list-none my-4 space-y-2">
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Easy Appointment Scheduling
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Access to Certified Healthcare Providers
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Telehealth Services
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Medical Records Management
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Accessible and Affordable Healthcare
              </li>
            </ul>
          <button className="font-[Inter] text-[1rem] text-[#000] bg-[#fff] w-full py-[1rem] rounded-[8px] hover:bg-[#365c9a]">
            Select Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="w-[390px] h-[691px] p-[32px] px-[24px] gap-[24px] rounded-[16px] shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] bg-white">
          <div  className='flex'>
            <img src={basicplan} alt="" />
            <div>
              <p>
                Personal
              </p>
              <h2 className="font-[Inter] text-[1.5rem] font-bold text-[#323232]">
                Basic
              </h2>
            </div>
          </div>
          <p className="font-[Inter] text-[1rem] text-[#969696]">
          Get essential healthcare services with the Basic Plan. Perfect for individuals looking for affordable care
          </p>
          <div className="mt-[1.5rem] mb-[2rem]">
            <span className="text-[2rem] font-bold text-[#323232]">₦2,499</span> / month
          </div>
           <ul className="list-none my-4 space-y-2">
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Easy Appointment Scheduling
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Access to Certified Healthcare Providers
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Telehealth Services
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Medical Records Management
              </li>
              <li className="flex items-center text-[#323232]">
                <img src={BulletV} alt="bullet" className="w-[16px] h-[16px] mr-2" />
                Accessible and Affordable Healthcare
              </li>
            </ul>
          <button className="font-[Inter] text-[1rem] text-white bg-[#417BEB] w-full py-[1rem] rounded-[8px] hover:bg-[#365c9a]">
            Select Plan
          </button>
        </div>
        <img src={ellipse} alt="" className='absolute bottom-[-15rem] -z-50 right-0'/>
      </div>

       <Faq/>
      <Footer/>
    </section>
  );
};

export default Pricing;
