import React from 'react'

const DarkCard = ({ image, heading, paragraph }) => {
  return (
    <div className=' bg-[#212121] rounded-3xl font-inter border-[#ffffff08] border-x-[1px] max-w-[50%] flex flex-col justify-center items-center px-[30px] pt-[50px] pb-[60px]'>
      <div className='w-[50px] h-[50px] p-2 bg-purple rounded-2xl'>
        <img 
          src={image} 
          alt={image} 
          width="100%"
        />
      </div>
      <div className='p-[10px] text-center'>
        <p className='font-semibold text-[#fdf2ec] text-2xl mt-2'>{heading}</p>
        <p className='font-medium text-[#6c757d] mt-2'>{paragraph}</p>
      </div>
    </div>
  )
}

export default DarkCard