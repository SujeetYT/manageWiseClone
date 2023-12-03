import React from 'react'

const Card = ({image, heading, paragraph}) => {
  return (
    <div className='text-black rounded-3xl font-inter border-x-[1px] max-w-[50%] flex flex-col justify-center items-center'>
      <img src={image} alt={image} width="100%"/>
      <div className='p-[30px]'>
        <p className='font-semibold text-2xl mt-2'>{heading}</p>
        <p className='font-medium  mt-2'>{paragraph}</p>
      </div>
    </div>
  )
}

export default Card