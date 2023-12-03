import React from 'react'
import SectionName from '../components/SectionName'
import PriceCard from '../components/PriceCard'
import PriceCardDark from '../components/PriceCardDark'

const Section6 = () => {
  const tier = [
    {
      name: 'free',
      price: 0,
      features: [
        'Access to all basic features',
        'Reporting and analytics',
        'Up to 5 individual users',
        'Chat and email support',
        
      ]
    },
    {
      name: 'standard',
      price: 25,
      features: [
        'Access to all basic features',
        'Reporting and analytics',
        'Up to 5 individual users',
        'Chat and email support',
        '3+ integrations',
        'Account performance reporting',
      ]
    },
    {
      name: 'business',
      price: 42,
      features: [
        'Access to all basic features',
        'Reporting and analytics',
        'Up to 5 individual users',
        'Chat and email support',
        '3+ integrations',
      ]
    },
  ]

  return (
    <div id='section6' className='px-[10px] mt-16'>
      <SectionName name='💲 PRICING' align={"center"} />
      <div className='text-center mt-4 px-[10px] mb-[60px]'>
        <h1 className='font-outfit text-[36px] md:text-[45px] font-medium leading-none'>
          {"Select your ideal "}
          <span className='text-[#fe8162]'>Pricing</span>
          {" plan"}
        </h1>
        <p
          className='text-[#6c757d] mt-10 font-outfit text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-tight px-[2px] md:px-[15px] lg:px-[18%]'
        >
          At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.
        </p>
      </div>
      <div className='flex flex-col flex-wrap justify-center items-center md:flex-row gap-10'>
        <PriceCard name={tier[0].name} price={tier[0].price} list={tier[0].features} />
        <PriceCardDark name={tier[1].name} price={tier[1].price} list={tier[1].features} />
        <PriceCard name={tier[2].name} price={tier[2].price} list={tier[2].features} />
      </div>

    </div>
  )
}

export default Section6