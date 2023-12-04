import React from 'react'
import logoLg from '../assets/logos/logoLg.png'
import instagramIcon from '../assets/icons/instagramIcon.svg'
import twitterIcon from '../assets/icons/twitterIcon.svg'
import linkedInIcon from '../assets/icons/linkedInIcon.svg'
import SectionName from '../components/SectionName'
import useWindowWidth from '../customHook/useDeviceWidth'
import PopOver from '../components/PopOver'
import happyUsers from '../assets/dontMissOut/happyUsers.png'
import fadedEdges from '../assets/dontMissOut/fadedEdges.webp'

const Section8 = () => {
  const size = useWindowWidth();
  return (
    <div id="section8" className='bg-gradient-to-b from-[#fff] to-[#fdf2ec] w-[100%] px-[10px] md:px-[10%]'>
      <div className={`bg-white rounded-3xl flex flex-col justify-center items-center text-center md:text-left pb-20 px-[10px] md:px-[10%] mt-[100px]`}>
        <SectionName
          name={"👋 DON'T MISS OUT"}
          align={size > 768 ? "left" : "center"}
        />
        <div className='flex flex-col md:flex-row gap-10'>
          <div className='mt-4 px-[10px]'>
            <h1 className='font-outfit text-[36px] md:text-[45px] font-medium leading-none'>
              {"Unleash your "}
              <span className='text-[#fe8162]'>Potential</span>
              {" with us"}
            </h1>
            <p
              className='text-[#6c757d] mt-10 font-outfit text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-tight'
            >
              Join our community of ambitious individuals and organizations eager to make a difference.
            </p>
            <button
              className='rounded-xl px-6 py-3 bg-purple font-bold text-white w-full md:w-[211px] my-5 font-outfit text-[18px]'>
              Try out now
            </button>
          </div>
          <div className='w-[100%] flex flex-col justify-start items-center'>
            <PopOver />
            <div className='max-w-[500px] mt-10'>
              <img src={happyUsers} alt="Happy Users" />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center md:items-start pt-20 pb-28 px-[10px] mt-4 text-black font-medium'>
        <div className='w-[60%] md:w-[15%]'>
          <img src={logoLg} />
        </div>
        <ul className='mt-6 md:mt-0 text-center md:text-start'>
          <li className='my-[10px]'>Features</li>
          <li className='my-[10px]'>FAQ</li>
          <li className='my-[10px]'>Pricing</li>
          <li className='my-[10px]'>Testimonials</li>
        </ul>
      </div>
      <div className='w-[100%] flex flex-col md:flex-row justify-between border-t-[1px] pt-[20px] pb-[38px] text-center font-inter text-black font-medium'>
        <p className='m-0'>© 2023 ManageWise, Inc.</p>
        <div className='flex justify-center items-center gap-5 mt-5 md:mt-0'>
          <img src={instagramIcon} alt="Instagram" />
          <img src={twitterIcon} alt="Twitter" />
          <img src={linkedInIcon} alt="LinkedIn" />
        </div>
      </div>
    </div>
  )
}

export default Section8