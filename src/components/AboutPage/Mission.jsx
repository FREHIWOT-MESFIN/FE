import React from 'react'
import ourmission from '../../assets/ourmission.png'

function Mission() {
  return (
    <div className='relative flex justify-center items-center my-2'>

      <div className="absolute bg-white left-0 w-[672px] h-[275px] top-[124px] p-[62px_56px] rounded-[12px] border border-[#E1E4ED] shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)]">
        <h1>
            Our Mission
        </h1>
        <p>
        At E-Medatt, we believe everyone deserves access to quality healthcare, no matter where they are. Our mission is to break down barriers to healthcare by offering easy-to-use online consultations with certified doctors, providing a seamless and convenient experience for all.
        </p>
      </div>


     <img src={ourmission} alt="physicians holding hands" className='w-[962px] h-[550px]'/>

    </div>
  )
}

export default Mission
