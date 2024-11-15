import React from 'react';
import FeatureImage from '../../assets/FeatureImage.png';
import stepone from '../../assets/stepone.png';
import steptwo from '../../assets/steptwo.png';
import stepthree from '../../assets/stepthree.png';
import stepfour from '../../assets/stepfour.png';
import onetotwo from '../../assets/onetotwo.png';
import twotothree from '../../assets/twotothree.png';
import threetofour from '../../assets/threetofour.png';



const Process = () => {
  return (
  <section className='w-full h-full bg-white flex flex-col items-center my-8'>
       <div className='w-[418.7px] h-[105px] flex flex-col items-center justify-center gap-[16px]'>
          <h2 className='font-[Inter] font-bold text-[21px] lg:text-[40px] leading-[28px] lg:leading-[48px] text-[#2d2d2d]'>
            How It Works
          </h2>
          <p className='font-[Inter] font-medium text-sm lg:text-base leading-[23.2px] text-[#969696]'>
           Follow these easy steps to enjoy quick and seamless access to certified doctors on E-Medatt.
          </p>
       </div>
       <div className="mt-8 grid grid-cols-3 md:grid-cols-4 grid-rows-4 grid-container w-full justify-center items-center md:w-[1232px] md:h-[604.88px]">
          {/* First Step */}
          <div className="col-start-2 md:col-start-1 md:row-start-1 grid-item w-[22rem] mt-6 md:mt-0">
            <div className="w-[44px] h-[46.88px] flex justify-center items-center pt-[11.44px] px-0 gap-[4.4px] rounded-[5.28px] bg-[#D9E5FB]">
              <img src={stepone} alt="Bullet icon" />
            </div>
            <h1 className="font-[Inter] text-[24px] font-semibold leading-[28.8px] text-left text-[#323232]">Register or Log In</h1>
            <p className="text-[16px] font-medium leading-[23.2px] text-left text-[#969696]">
              Sign up for a new account or log in to access personalized healthcare services. It's quick and easy.
            </p>
          </div>

          {/* First Arrow - Rotated */}
          <div className="col-start-1 row-start-1 rotate-270 md:rotate-0 flex justify-end md:justify-center">
            <img src={onetotwo} alt=""/>
          </div>

          {/* Second Step */}
          <div className="col-start-2 md:col-start-2 row-start-2 grid-item w-[22rem] mt-10 md:mt-0">
            <div className="w-[44px] h-[46.88px] flex justify-center items-center pt-[11.44px] px-0 gap-[4.4px] rounded-[5.28px] bg-[#D9E5FB]">
              <img src={steptwo} alt="Bullet icon" />
            </div>
            <h1 className="font-[Inter] text-[24px] font-semibold leading-[28.8px] text-left text-[#323232]">Choose a Doctor</h1>
            <p className="text-[16px] font-medium leading-[23.2px] text-left text-[#969696]">
            Select the service that suits your needs, from virtual consultations to specialist appointments. We offer a range of options for you.
            </p>
          </div>

          {/* Second Arrow */}
          <div className="row-start-2 col-start-2 flex justify-end md:justify-center">
            <img src={twotothree} alt="" className="transform md:scaleX-100 scaleX-[-1]" />
          </div>

          {/* Third Step */}
          <div className="col-start-2 md:col-start-3 row-start-3 grid-item w-[22rem] mt-10 md:mt-0">
            <div className="w-[44px] h-[46.88px] flex justify-center items-center pt-[11.44px] px-0 gap-[4.4px] rounded-[5.28px] bg-[#D9E5FB]">
              <img src={stepthree} alt="Bullet icon" />
            </div>
            <h1 className="font-[Inter] text-[24px] font-semibold leading-[28.8px] text-left text-[#323232]">Book an Appointment</h1>
            <p className="text-[16px] font-medium leading-[23.2px] text-left text-[#969696]">
            Connect instantly with a licensed doctor through secure video calls. Get expert advice and treatment from the comfort of your home.
            </p>
          </div>

          {/* Third Arrow */}
          <div className="col-start-3 row-start-3 flex justify-end md:justify-center">
            <img src={threetofour} alt="" className="transform md:scaleX-100 scaleX-[-1]" />
          </div>

          {/* Fourth Step */}
          <div className="col-start-2 md:col-start-4 row-start-4 grid-item w-[22rem] mt-10 md:mt-0">
            <div className="w-[44px] h-[46.88px] flex justify-center items-center pt-[11.44px] px-0 gap-[4.4px] rounded-[5.28px] bg-[#D9E5FB]">
              <img src={stepfour} alt="Bullet icon" />
            </div>
            <h1 className="font-[Inter] text-[24px] font-semibold leading-[28.8px] text-left text-[#323232]">Manage Records</h1>
            <p className="text-[16px] font-medium leading-[23.2px] text-left text-[#969696]">
            Easily access your medical records anytime and schedule follow-ups as needed. Stay organized and in control of your health journey.
            </p>
          </div>
        </div>

  </section>
  
  )
}

export default Process;