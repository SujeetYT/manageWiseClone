import React from 'react'
import '../App.css'

const PopOver = () => {
  return (
    <div className='relative w-[200px] py-2 border-2 rounded-xl text-center text-xl font-outfit font-semibold PopOverClassForPseudoElement'>
      <span
        className='text-purple'
      >200+</span>
      {" Happy users"}
    </div>
  )
}

export default PopOver