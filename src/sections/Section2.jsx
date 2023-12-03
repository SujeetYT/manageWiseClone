import React from 'react'
import SectionName from '../components/SectionName'
import Quote from '../components/Quote'
import Card from '../components/Card'
import smartTaskManagement from '../assets/premierFeatures/smartTaskManagement.png'
import flexibleScheduling from '../assets/premierFeatures/flexibleScheduling.png'
import easyCommunication from '../assets/premierFeatures/easyCommunication.png'
import analytics from '../assets/premierFeatures/analytics.png'

const Section2 = () => {
  return (
    <div id='section2' className='px-[10px] mt-16'>
      <SectionName name='🔥 PREMIER FEATURES' align={"center"}/>
      <div className='text-center mt-4 px-[10px]'>
        <h1 className='font-outfit text-[36px] md:text-[45px] font-medium leading-none'>
          {"Discover our product's "}
          <span className='text-[#fe8162]'>Capabilities</span>
        </h1>
        <p
          className='text-[#6c757d] mt-10 font-outfit text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-tight px-[2px] md:px-[15px] lg:px-[18%]'
        >
          Don't settle for mediocrity - embrace the future of management with Manage Wise.
        </p>
      </div>
      <div className='mt-[70px] gap-10 flex flex-col md:flex-row justify-center items-center px-[10%]'>
        <Quote />
        <Card 
          image={smartTaskManagement} 
          heading={"Smart Task Management"}
          paragraph={"Say goodbye to chaos with our smart task management system"}
        />
      </div>
      <div className='flex flex-col md:flex-row gap-5 justify-center items-center mt-[60px] px-[10%]'>
        <Card 
          image={flexibleScheduling} 
          heading={"Flexible Scheduling"}
          paragraph={"Stay productive with our flexible scheduling system"}
        />
        <Card 
          image={easyCommunication} 
          heading={"Easy Communication"}
          paragraph={"Collaborate seamlessly with your team in real-time"}
        />
        <Card 
          image={analytics} 
          heading={"Analytics"}
          paragraph={"Gain valuable insights with our advanced analytics feature"}
        />
      </div>
    </div>
  )
}

export default Section2