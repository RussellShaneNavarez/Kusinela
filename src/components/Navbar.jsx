import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = ({ refs }) => {
  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: 'smooth' });
  };

  const handleButtonClick = () => {
    window.location.href = 'https://www.thefork.it/ristorante/kusinela-r800047';
  };
  
  return (
    <nav className='flex flex-row w-full bg-[#090833] text-white text-center justify-between items-center fixed z-50'>
      <div className='ml-[10rem]'>
        <img src={Logo} alt="Logo" className='w-24' />
      </div>
      <div>
        <ul className='flex gap-[4rem]'>
          <li
            onClick={() => scrollHandler(refs.home)}
            className='cursor-pointer underline-left-to-right'
          >
            Home
          </li>
          <li
            onClick={() => scrollHandler(refs.aboutUs)}
            className='cursor-pointer underline-left-to-right'
          >
            About us
          </li>
          <li
            onClick={() => scrollHandler(refs.menu)}
            className='cursor-pointer underline-left-to-right'
          >
            Menù
          </li>
          <li
            onClick={() => scrollHandler(refs.visitUs)}
            className='cursor-pointer underline-left-to-right'
          >
            Visit us
          </li>
          <li
            onClick={() => scrollHandler(refs.order)}
            className='cursor-pointer underline-left-to-right'
          >
            Order
          </li>
        </ul>
      </div>
      <div className='mr-[10rem]'>
        <button
          onClick={handleButtonClick}
          className='pt-2 pb-2 px-4 py-4 bg-[#FE1242] rounded-lg hover:bg-[#fe1241c0]'
        >
          Book a Table
        </button>
      </div>
    </nav>
  )
}

export default Navbar