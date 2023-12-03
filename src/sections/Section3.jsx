import React from 'react'
import SectionName from '../components/SectionName'
import phone from '../assets/icons/phoneFilled.svg'
import bell from '../assets/icons/bellFilled.svg'
import fire from '../assets/icons/fireFilled.svg'
import DarkCard from '../components/DarkCard'


const Section3 = () => {
  return (
    <div id='section3' className='mt-16 bg-black px-[150px] pt-8'>
      <SectionName name='🤩 AND MORE...' align={""} />
      <div className='text-start mt-4'>
        <h1 className='font-outfit text-[36px] md:text-[45px] font-medium leading-none text-[#fdf2ec]'>
          {"Explore an array of features that elevate your "}
          <span className='text-[#fe8162]'>Productivity</span>
          {" to new heights"}
        </h1>
        <p
          className='text-[#6c757d] mt-6 font-outfit text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-tight w-[576px]'
        >
          Discover the tools that will revolutionize the way you manage and optimize your operations
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-5 mt-[60px]'>
        <DarkCard 
          image={phone}
          heading={"Cross-Platform Compatibility"}
          paragraph={"Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."}
        />
        <DarkCard 
          image={bell}
          heading={"Stay Informed with Essential Notifications"}
          paragraph={"Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."}
        />
        <DarkCard 
          image={fire}
          heading={"Secure Data Encryption at all times"}
          paragraph={"Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."}
        />
      </div>
    </div>
  )
}

export default Section3