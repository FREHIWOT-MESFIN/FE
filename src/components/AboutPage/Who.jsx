import React from 'react'
import foreveryone1 from '../../assets/foreveryone1.png';
import foreveryone2 from '../../assets/foreveryone2.png';
import foreveryone3 from '../../assets/foreveryone3.png';
import foreveryone4 from '../../assets/foreveryone4.png';
import foreveryone5 from '../../assets/foreveryone5.png';
import foreveryone6 from '../../assets/foreveryone6.png';


function Who() {
  return (
    <div>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
         
         <div className="w-[23.625rem] h-[20.75rem] p-0 pb-[2.5rem] gap-[0.625rem] rounded-[0.5rem] border-[0.0625rem] border-solid border-gray-300 shadow-sm bg-white">
           <div className="relative w-[23.625rem] h-[6.1875rem] gap-0 rounded-tl-[0.5rem] rounded-tr-[0.5rem] bg-[#DBEFDC]">
             <img src={foreveryone1} alt="" className='absolute bottom-[-1rem] left-[40%] shadow-[0px_1px_3px_0px_#0000001A]' />
           </div>
           <div className='mt-10'>
             <h3 className='text-[#323232] mb-2 font-[Inter] text-[20px] font-bold leading-[24px] text-center'>
             Chronic Disease Patients
             </h3>
             <p className='font-[Inter] text-base font-normal leading-[23.2px] text-center text-[#969696]'>
             Manage your health with regular check-ups and support to ensure you stay on track with your treatment, because your well-being is our top priority.
             </p>
           </div>
         </div>

         <div className="w-[23.625rem] h-[20.75rem] p-0 pb-[2.5rem] gap-[0.625rem] rounded-[0.5rem] border-[0.0625rem] border-solid border-gray-300 shadow-sm bg-white">
           <div className="relative w-[23.625rem] h-[6.1875rem] gap-0 rounded-tl-[0.5rem] rounded-tr-[0.5rem] bg-[#D9E5FB]">
             <img src={foreveryone2} alt="" className='absolute bottom-[-1rem] left-[40%] shadow-[0px_1px_3px_0px_#0000001A]' />
           </div>
           <div className='mt-10'>
             <h3 className='text-[#323232] mb-2 font-[Inter] text-[20px] font-bold leading-[24px] text-center'>
             Elderly
             </h3>
             <p className='font-[Inter] text-base font-normal leading-[23.2px] text-center text-[#969696]'>
             Receive compassionate care right at home by using our user-friendly telehealth services, allowing you to rest easy knowing expert help is just a call away.
             </p>
           </div>
         </div>

         <div className="w-[23.625rem] h-[20.75rem] p-0 pb-[2.5rem] gap-[0.625rem] rounded-[0.5rem] border-[0.0625rem] border-solid border-gray-300 shadow-sm bg-white">
           <div className="relative w-[23.625rem] h-[6.1875rem] gap-0 rounded-tl-[0.5rem] rounded-tr-[0.5rem] bg-[#FFF3CD]">
             <img src={foreveryone3} alt="" className='absolute bottom-[-1rem] left-[40%] shadow-[0px_1px_3px_0px_#0000001A]' />
           </div>
           <div className='mt-10'>
             <h3 className='text-[#323232] mb-2 font-[Inter] text-[20px] font-bold leading-[24px] text-center'>
             Working Professionals
             </h3>
             <p className='font-[Inter] text-base font-normal leading-[23.2px] text-center text-[#969696]'>
              Schedule flexible appointments that fit into your busy life, allowing you to prioritize your health without hassle and stay on top of your well-being without missing a beat.
             </p>
           </div>
         </div>
         </div>
    </div>
  )
}

export default Who
