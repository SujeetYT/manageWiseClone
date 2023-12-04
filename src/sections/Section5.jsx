import React from 'react'
import SectionName from '../components/SectionName'
import Accordion from '../components/Accordion'

const Section5 = () => {
  const faqs = [
    {
      title: 'What is Manage Wise and what does it offer?',
      content: 'Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.'
    },
    {
      title: 'Is Manage Wise suitable for small businesses and larger enterprises alike?',
      content: 'Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.'
    },
    {
      title: 'Can I access Manage Wise from different devices and platforms?',
      content: 'Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.'
    },
    {
      title: 'What kind of support options do you offer to users?',
      content: 'We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.'
    },
    {
      title: 'How secure is the data stored within Manage Wise?',
      content: 'Your data\'s security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.'
    }
  ];


  return (
    <div id='section5' className='mt-16 px-[10px] md:px-[150px] pt-8 w-[100%]'>
      <SectionName name='🙋‍♀️ FAQ' align={""} />
      <div className='flex flex-col md:flex-row justify-between items-start'>
        <div className='text-start mt-4 px-[10px]'>
          <h1 className='font-outfit text-[36px] md:text-[45px] font-medium leading-none'>
            {"Need"}
            <p className='text-[#fe8162]'>Answers</p>
          </h1>
          <p
            className='text-[#6c757d] mt-10 font-outfit text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-tight px-[2px] max-w-[576px]'
          >
            Check out our most commonly asked questions below to find the information you need.
          </p>
        </div>
        <div className='mt-10 md:mt-0'>
          {
            faqs.map((faq, index) => (
              <Accordion key={index} heading={faq.title} description={faq.content} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Section5