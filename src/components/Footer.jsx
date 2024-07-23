import React from 'react'
import logoName from '../assets/logoName.png'

const Footer = () => {
  return (
    <div className='bg-black text-white flex w-full'>
      <div className='flex flex-col w-[33%] justify-center items-center mt-12 mb-16'>
        <img src={logoName} alt="Logo" width={250}/>
        <p>© 2024 All Rights Reserved</p>
      </div>
      <div className='flex flex-row w-[33%] justify-center items-center'>
        <div className='p-8'>
          <ul className='flex flex-col gap-8'>
            <li className='hover:text-[#FE1242] cursor-pointer'>Home</li>
            <li className='hover:text-[#FE1242] cursor-pointer'>About us</li>
            <li className='hover:text-[#FE1242] cursor-pointer'>Menù</li>
          </ul>
        </div>
        <div className='p-8'>
          <ul className='flex flex-col gap-8'>
            <li className='hover:text-[#FE1242] cursor-pointer'>Visit us</li>
            <li className='hover:text-[#FE1242] cursor-pointer'>Contacts</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col w-[33%] text-right justify-center pr-24'>
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