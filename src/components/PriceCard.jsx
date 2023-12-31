import React from 'react'
import check from '../assets/icons/check.svg'

const PriceCard = ({name, price, list}) => {
  return (
    <div className={`bg-[#ededfa] p-[50px] rounded-3xl `}>
      <span className='px-4 py-1 rounded-xl bg-white text-orange font-semibold'>{name.toUpperCase()}</span>
      <div className='my-5'>
        <span className='text-4xl font-semibold'>${price}</span>
        <span>/month</span>
      </div>
      <ul style={{listStyleImage: `url(${check})`, opacity: '0.8'}}>
        {list?.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <button className='bg-white px-3 py-2 rounded-xl font-outfit font-semibold mt-[80px]'>Get Started</button>
    </div>
  )
}

export default PriceCard