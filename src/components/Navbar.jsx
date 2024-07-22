import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = ({ refs }) => {
  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: 'smooth' });
  };
  return (
    <nav className='flex flex-row w-full bg-[#090833] text-white text-center justify-between items-center'>
        <div className='ml-[10rem]'>
            <img src={Logo} alt="Logo" className='w-24' />
        </div>
        <div>
        <ul className='flex gap-[4rem]'>
          <li onClick={() => scrollHandler(refs.home)} className='cursor-pointer'>Home</li>
          <li onClick={() => scrollHandler(refs.aboutUs)} className='cursor-pointer'>About Us</li>
          <li onClick={() => scrollHandler(refs.menu)} className='cursor-pointer'>Menu</li>
          <li onClick={() => scrollHandler(refs.visitUs)} className='cursor-pointer'>Visit Us</li>
          <li onClick={() => scrollHandler(refs.order)} className='cursor-pointer'>Order</li>
        </ul>
        </div>
        <div className='mr-[10rem]'>
            <button className='p-2 bg-[#FE1242] rounded-lg'>Book a Table</button>
        </div>
    </nav>
  )
}

export default Navbar