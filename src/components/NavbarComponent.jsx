import React, { useEffect, useState } from 'react'
import logoSm from '../assets/logos/logoSm.png'
import logoLg from '../assets/logos/logoLg.png'
import hamburgerIcon from '../assets/icons/hamburger.svg'
import closeIcon from '../assets/icons/crossIcon.svg'
import useWindowWidth from '../customHook/useDeviceWidth'

const NavbarComponent = () => {
  // getting the width of the screen using custom hook
  const size = useWindowWidth();

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      {!showMenu ?

        <div className='flex justify-between items-center w-[100%] py-[16px] px-[24px] border-b-[1px] h-[80px]'>
          <div className={`${(size > 810 && size < 1390) ? "w-[50px]" : "w-[180px]"} `}>
            <img src={(size > 810 && size < 1390) ? logoSm : logoLg} alt="Logo" />
          </div>
          {(size > 786) ?
            <div className='flex text-black justify-between items-center font-inter font-medium'>
              <ul className='flex justify-around items-center mx-4'>
                <li className='mx-4'>Features</li>
                <span className='text-4xl mb-5 opacity-[0.4] mx-3'>.</span>
                <li className='mx-4'>FAQ</li>
                <span className='text-4xl mb-5 opacity-[0.4] mx-3'>.</span>
                <li className='mx-4'>Pricing</li>
                <span className='text-4xl mb-5 opacity-[0.4] mx-3'>.</span>
                <li className='mx-4'>Testimonials</li>
              </ul>
              <button className='rounded-xl outline outline-0 outline-stone-400 hover:outline-1 px-6 py-3 bg-white font-semibold font-outfit text-[18px]'>Buy Template</button>
            </div>
            :
            <div className='w-[30px]'>
              <img
                src={hamburgerIcon}
                alt="Hamburger Icon"
                onClick={handleShowMenu} />
            </div>
          }
        </div>
        :
        <div className='w-[100%] py-[16px] px-[24px] h-[100%] bg-white absolute top-0'>
          <div className='flex justify-between items-center'>
            <div className={`${(size > 810 && size < 1390) ? "w-[50px]" : "w-[180px]"} `}>
              <img src={(size > 810 && size < 1390) ? logoSm : logoLg} alt="Logo" />
            </div>
            <div className='w-[40px]'>
              <img
                src={closeIcon}
                alt="Close Icon"
                onClick={handleShowMenu} />
            </div>
          </div>
          <ul className='flex flex-col justify-around items-center mx-4 font-inter mt-[60px]'>
            <li className='mx-4 my-5'>Features</li>
            <li className='mx-4 my-5'>FAQ</li>
            <li className='mx-4 my-5'>Pricing</li>
            <li className='mx-4 my-5'>Testimonials</li>
            <button className='rounded-xl px-6 py-3 bg-purple font-bold text-white w-full my-5 font-outfit text-[18px]'>Buy Template</button>
          </ul>
        </div>
      }
    </>
  )
}

export default NavbarComponent