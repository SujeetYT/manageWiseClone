import React from 'react'
import SectionName from '../components/SectionName'
import Quote from '../components/Quote'
import Card from '../components/Card'

const Section2 = () => {
  return (
    <div className='px-[10px] mt-16'>
      <SectionName name='🔥 PREMIER FEATURES' />
      <div className='text-center mt-4 px-[10px]'>
        <h1 className='font-outfit text-[36px] md:text-[45px] font-medium leading-none'>
          {"Discover our product's "}
          <span className='text-[#fe8162]'>Capabilities</span>
        </h1>
        <p
          className='text-[#6c757d] mt-9 font-outfit text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-tight px-[2px] md:px-[15px] lg:px-[18%]'
        >
          Don't settle for mediocrity - embrace the future of management with Manage Wise.
        </p>
      </div>
      <div className='mt-[70px] gap-10 md:flex px-[10%]'>
        <Quote />
        <Card />
      </div>
    </div>
  )
}

export default Section2