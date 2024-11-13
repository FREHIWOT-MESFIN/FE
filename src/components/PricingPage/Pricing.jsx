import React from 'react';
import Navbar from '../LandingPage/Navbar'
import Footer from '../LandingPage/Footer'
import Faq from '../LandingPage/Faq';

const Pricing = () => {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center">
      <Navbar/>
      {/* Pricing Title */}
      <div className="text-center mb-[3rem]">
        <h1 className="font-[Inter] text-[2rem] md:text-[3rem] text-[#000] font-bold leading-[3.814rem]">
          Choose Your Plan
        </h1>
        <p className="font-[Inter] text-[1rem] text-[#969696] leading-[1.5rem]">
          Select a plan that fits your needs. Start your journey to better health today!
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="w-full flex flex-col md:flex-row justify-center gap-[2rem]">
        
        {/* Basic Plan */}
        <div className="w-full sm:w-[18rem] md:w-[22rem] p-[2rem] bg-white border border-[#E1E4ED] rounded-[12px] shadow-lg text-center">
          <h2 className="font-[Inter] text-[1.5rem] font-bold text-[#323232]">Basic</h2>
          <p className="font-[Inter] text-[1rem] text-[#969696]">Perfect for individuals who want basic healthcare.</p>
          <div className="mt-[1.5rem] mb-[2rem]">
            <span className="text-[2rem] font-bold text-[#417BEB]">$19</span> / month
          </div>
          <ul className="font-[Inter] text-[0.875rem] text-[#323232] mb-[1.5rem]">
            <li>1 Consultation per month</li>
            <li>Access to Online Doctor</li>
            <li>Email Support</li>
          </ul>
          <button className="font-[Inter] text-[1rem] text-white bg-[#417BEB] w-full py-[1rem] rounded-[8px] hover:bg-[#365c9a]">
            Select Plan
          </button>
        </div>

        {/* Standard Plan */}
        <div className="w-full sm:w-[18rem] md:w-[22rem] p-[2rem] bg-white border border-[#E1E4ED] rounded-[12px] shadow-lg text-center">
          <h2 className="font-[Inter] text-[1.5rem] font-bold text-[#323232]">Standard</h2>
          <p className="font-[Inter] text-[1rem] text-[#969696]">For families or people needing more frequent care.</p>
          <div className="mt-[1.5rem] mb-[2rem]">
            <span className="text-[2rem] font-bold text-[#417BEB]">$49</span> / month
          </div>
          <ul className="font-[Inter] text-[0.875rem] text-[#323232] mb-[1.5rem]">
            <li>5 Consultations per month</li>
            <li>Access to Online Doctor + Video Calls</li>
            <li>Priority Email & Phone Support</li>
          </ul>
          <button className="font-[Inter] text-[1rem] text-white bg-[#417BEB] w-full py-[1rem] rounded-[8px] hover:bg-[#365c9a]">
            Select Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="w-full sm:w-[18rem] md:w-[22rem] p-[2rem] bg-white border border-[#E1E4ED] rounded-[12px] shadow-lg text-center">
          <h2 className="font-[Inter] text-[1.5rem] font-bold text-[#323232]">Premium</h2>
          <p className="font-[Inter] text-[1rem] text-[#969696]">For people who need comprehensive healthcare.</p>
          <div className="mt-[1.5rem] mb-[2rem]">
            <span className="text-[2rem] font-bold text-[#417BEB]">$99</span> / month
          </div>
          <ul className="font-[Inter] text-[0.875rem] text-[#323232] mb-[1.5rem]">
            <li>Unlimited Consultations</li>
            <li>Access to Online Doctor + Video Calls + Home Visits</li>
            <li>24/7 Support via Phone</li>
          </ul>
          <button className="font-[Inter] text-[1rem] text-white bg-[#417BEB] w-full py-[1rem] rounded-[8px] hover:bg-[#365c9a]">
            Select Plan
          </button>
        </div>

      </div>

       <Faq/>
      <Footer/>
    </section>
  );
};

export default Pricing;
