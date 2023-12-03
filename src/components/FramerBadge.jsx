import React from 'react'
import framerLogo from '../assets/logos/framerLogo.svg'
import text from '../assets/logos/madeInFramer.svg'

const FramerBadge = () => {
  return (
    <div className='fixed bottom-5 right-5'>
      <div className='flex justify-between items-center p-2 gap-[10px] bg-white rounded-md shadow-lg w-[130px]'>
        <img src={framerLogo} alt="Framer Logo" className='w-[12%]'/>
        <img src={text} alt="Framer Logo" className='w-[75%]' />
      </div>
    </div>
  )
}

export default FramerBadge