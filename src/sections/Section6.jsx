import React from 'react'
import SectionName from '../components/SectionName'

const Section6 = () => {
  return (
    <div id='section2' className='px-[10px] mt-16'>
      <SectionName name='💲 PRICING' align={"center"} />
      <div className='text-center mt-4 px-[10px]'>
        <h1 className='font-outfit text-[36px] md:text-[45px] font-medium leading-none'>
          {"Select your ideal "}
          <span className='text-[#fe8162]'>Pricing</span>
          {" plan"}
        </h1>
        <p
          className='text-[#6c757d] mt-10 font-outfit text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-tight px-[2px] md:px-[15px] lg:px-[18%]'
        >
          At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.
        </p>
      </div>
  
    </div>
  )
}

export default Section6