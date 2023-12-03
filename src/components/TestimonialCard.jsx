import React from 'react'

const TestimonialCard = ({name, image, designation, description}) => {
  return (
    <div className='rounded-3xl font-inter border-[1px] flex flex-col justify-start items-center min-w-[350px] p-10'>
      <p className='text-[18px] text-black font-medium text-xl'>"{description}"</p>
      <div className='flex justify-start items-center gap-5 pt-10'>
        <img src={image} alt={name} width="25%"/>
        <div>
          <span>{name}</span>
          <br />
          <span className='text-[#6c757d]'>{designation}</span>
        </div>
      </div>
      
    </div>
  )
}

export default TestimonialCard