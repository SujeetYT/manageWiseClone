import React from 'react'
import SectionName from '../components/SectionName'
import connectAnApp from '../assets/integrations/connectAnApp.png'

const Section4 = () => {
  return (
    <div id='section4' className='bg-black md:px-[150px] lg:px-[250px] pt-8 flex flex-col justify-center items-center'>
      <SectionName name='🛠 INTEGRATIONS' align={"center"} />
      <div className='text-center mt-4 flex flex-col justify-center items-center'>
        <h1 className='font-outfit text-[36px] md:text-[45px] font-medium leading-none text-[#fdf2ec]'>
          {"Enable "}
          <span className='text-[#fe8162]'>integration</span>
          {" with other popular tools and platforms"}
        </h1>
        <p
          className='text-[#6c757d] mt-6 font-outfit text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-tight w-[576px]'
        >
          Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.
        </p>
      </div>
      <div className='mt-[60px] w-[580px]'>
        <img src={connectAnApp} alt="connect an app" />
      </div>
    </div>
  )
}

export default Section4