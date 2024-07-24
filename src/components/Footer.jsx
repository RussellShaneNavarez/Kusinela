import React from 'react'
import logoName from '../assets/logoName.png'

const Footer = ({ refs }) => {
  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: 'smooth' });
  };

  return (
    <div className='bg-black text-white flex w-full flex-col sm:flex-row md:flex-row pb-12 sm:pb-0'>
      <div className='flex flex-col w-[100%] md:w-[33%] justify-center items-center mt-12 mb-2 sm:mb-8 md:mb-16'>
        <img src={logoName} alt="Logo" width="50%"/>
        <p>© 2024 All Rights Reserved</p>
      </div>
      <div className='flex flex-row w-[100%] md:w-[34%] justify-center items-center'>
        <div className='p-8'>
          <ul className='flex flex-col gap-8'>
            <li className='hover:text-[#FE1242] cursor-pointer' onClick={() => scrollHandler(refs.home)}>Home</li>
            <li className='hover:text-[#FE1242] cursor-pointer' onClick={() => scrollHandler(refs.aboutUs)}>About us</li>
            <li className='hover:text-[#FE1242] cursor-pointer' onClick={() => scrollHandler(refs.menu)}>Menù</li>
          </ul>
        </div>
        <div className='p-8'>
          <ul className='flex flex-col gap-8'>
            <li className='hover:text-[#FE1242] cursor-pointer' onClick={() => scrollHandler(refs.visitUs)}>Visit us</li>
            <li className='hover:text-[#FE1242] cursor-pointer' onClick={() => scrollHandler(refs.order)}>Order</li>
            <li>‎ </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col w-[100%] md:w-[33%] text-right justify-center items-center md:items-end sm:items-end pr-0 sm:pr-12 md:pr-24 text-base md:text-base sm:text-base'>
        <p>Via Leone Tolstoi 53, 20146 Milan, Italy</p>
        <a href='tel:+393425086701'>+39 3425086701</a>
        <p>Monday - Closed</p>
        <p>Tuesday - Sunday</p>
        <p>12:00 - 15:00 |19:00 - 22:00</p>
        <p className='italic text-sm font-light mt-2'>Design by Russell Shane Navarez</p>
      </div>
    </div>
  )
}

export default Footer