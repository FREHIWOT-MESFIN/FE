import React from 'react'
import whyus from '../../assets/whyus.png'
import BulletV from '../../assets/BulletVector.png';
import LinkArrow from "../../assets/LinkArrow.png";

function WhyUs() {
  return (
<section className='w-full h-full bg-white flex flex-col items-center'>
    <div className='w-full lg:w-[1232px] h-auto gap-4 lg:gap-8 flex items-center mt-16 p-5'>
      <div className='w-[462px] h-[407px] gap-[40px] text-center p-5'>
        <div className='text-left'>
          <h2 className='font-[Inter] font-bold text-[21px] lg:text-[36px] leading-[28px] lg:leading-[43.2px] text-[#323232]'>
            Why Choose Us?
          </h2>
          <p className='font-[Inter] font-medium text-[1rem] lg:text-base leading-[23.2px] text-[#969696]'>
          E-Medatt provides instant access to quality healthcare services and seasoned professionals across the medical fields. Our system is refined to keep your health in check while maintaining a high level of privacy.
          </p>
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

        <div className="flex flex-col md:flex-row justify-center gap-[1rem]">
          <button className="font-[Inter] text-[0.875rem] text-[#fff] font-semibold leading-[1.25rem] text-center bg-[#417BEB] shadow-[0px_1px_2px_0px_#0000001D] w-[10.1875rem] h-[2.75rem] px-[18px] py-[14px] gap-[8px] rounded-[16px]">
            Book Appointment
          </button>
          <button className="flex font-[Inter] text-[0.875rem] font-semibold leading-[1.25rem] text-center shadow-[0px_0.0625rem_0.125rem_0px_#0000001D] w-[8.5625rem] h-[2.75rem] px-[1.125rem] py-[0.9375rem] gap-[0.5rem] rounded-[1rem]">
            Learn more
            <img src={LinkArrow} alt="" />
          </button>
        </div>
      </div>
      <div>
        <img src={whyus} alt="" className='w-[679px] h-[532px]'/>
      </div>
    </div>
  </section>
  )
}

export default WhyUs
