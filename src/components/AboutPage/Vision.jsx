import React from 'react'
import ourvision from '../../assets/ourvision.png'

function Vision() {
  return (
    <div className='flex justify-between'>
      <div>
        <img src={ourvision} alt="" />
      </div>

      <div>
        <h1>
            Our Vision
        </h1>
        <p>
        We envision a world where healthcare is not just a privilege but a right. Our goal is to make professional healthcare available at the tap of a button, ensuring that no one is left behind when it comes to managing their health.
        </p>
      </div>
    </div>
  )
}

export default Vision
