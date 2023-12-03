import React from 'react'
import logoLg from '../assets/logos/logoLg.png'

const Section8 = () => {
  return (
    <div id="section8" className='bg-gradient-to-b from-[#fff] to-[#fdf2ec] w-[100%]'>

      <div className='flex justify-between items-center py-20 md:px-[150px]'>
        <div className='w-[25%]'>
          <img src={logoLg} />
        </div>
        <ul>
          <li>Features</li>
          <li>FAQ</li>
          <li>Pricing</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <div className='border-t-[1px] py-[40px] px-[150px]'>
        <span>© 2023 ManageWise, Inc.</span>
      </div>
    </div>
  )
}

export default Section8