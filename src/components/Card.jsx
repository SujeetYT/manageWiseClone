import React from 'react'
import smartTaskManagement from '../assets/premierFeatures/smartTaskManagement.png'

const Card = () => {
  return (
    <div className='bg-grey text-black rounded-3xl font-inter p-[30px]'>
      <div>
        <img src={smartTaskManagement} alt="Smart Task Management" />
      </div>
      <p className='font-semibold text-3xl mt-2'>Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.</p>
    </div>
  )
}

export default Card