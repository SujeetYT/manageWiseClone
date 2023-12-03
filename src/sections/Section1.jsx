import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import SectionName from '../components/SectionName'
import playIcon from '../assets/icons/playIcon.svg'
import dashboard from '../assets/hero/dashboard.jpg'

const Section1 = () => {
  return (
    <div
      id='section1'
      className='min-h-[130vh] bg-gradient-to-b from-[#fdf2ec] to-[#fff] '
    >
      <NavbarComponent />
      <SectionName name='👋 WELCOME TO MANAGE WISE!' align={"center"}/>
      <div className='text-center mt-2 px-[10%]'>
        <h1 className='font-outfit text-[54px] md:text-[68px] lg:text-[82px] font-medium leading-none'>
          {"Empower your business with "}
          <span className='text-[#fe8162]'>Strategic</span>
          {" insights"}
        </h1>
        <p
          className='text-[#6c757d] mt-9 font-outfit text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-tight px-[2px] md:px-[15px] lg:px-[18%]'
        >
          Powerful management platform designed to streamline your business operations, boost productivity, and drive success
        </p>
        <div className='md:flex md:justify-center md:items-center md:gap-10 mt-3'>
          <button
            className='rounded-xl px-6 py-3 bg-purple font-bold text-white w-full md:w-[211px] my-5 font-outfit text-[18px]'>
            Get Started
          </button>
          <button
            className='flex justify-center items-center rounded-xl px-6 py-3 bg-white font-bold text-black w-full md:w-[211px] my-5 font-outfit text-[18px] border border-stone-400'
          >
            Watch Demo &nbsp;
            <span className='w-6'>
              <img src={playIcon} alt="play icon" />
            </span>
          </button>
        </div>
      </div>
      <div className='w-[100%] flex justify-center items-center mt-14'>
        <img
          src={dashboard}
          alt="Dashboard Image"
          width="80%"
          className='rounded-2xl shadow-xl'
        />
      </div>
    </div>
  )
}

export default Section1