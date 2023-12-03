import React from 'react'
import check from '../assets/icons/check.svg'

const PriceCardDark = ({name, price, list}) => {
  return (
    <div className={`bg-black p-[50px] rounded-3xl `}>
      <span className='px-4 py-1 rounded-xl bg-white text-orange font-semibold'>{name.toUpperCase()}</span>
      <div className='my-5 text-white'>
        <span className='text-4xl font-semibold'>${price}</span>
        <span>/month</span>
      </div>
      <ul style={{ listStyleImage: `url(${check})`, opacity: '0.8', color: 'white' }}>
        {list?.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <button className='bg-purple text-white px-3 py-2 rounded-xl font-outfit font-semibold mt-[80px]'>Get Started</button>
    </div>
  )
}

export default PriceCardDark