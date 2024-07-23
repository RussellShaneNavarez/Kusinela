import React from 'react';
import menuImage from '../assets/menuImage.jpg';

const Menu = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://www.thefork.it/ristorante/kusinela-r800047/menu';
  };
  return (
    <div className='flex flex-col-reverse md:flex-row bg-[#090833] text-white text-center md:text-right '>
      <div className='flex mt-10 md:mt-20 mb-10 md:mb-20 md:w-1/2 sm:w-100 justify-center items-center'>
        <div className='w-full max-w-[80%] md:max-w-[100%] sm:max-w-[70%] aspect-w-16 aspect-h-8'>
          <img src={menuImage} alt="Food 2" className='object-cover z-40' />
        </div>
      </div>
      <div className='flex md:mr-[12rem] mt-10 md:mt-20 flex-col gap-2 md:w-1/2 p-4 mx-8 md:pl-10'>
        <h2 className='text-3xl mb-8 font-semibold'>
          Best <span style={{ color: '#FCD717' }}>Sellers</span>!
        </h2>
        <p >Discover our best-sellers menu, featuring the most popular and beloved dishes crafted with the finest ingredients for an unforgettable dining experience</p>
        <p >Indulge in customer favorites and chef-recommended delights that showcase our commitment to exceptional flavor and quality.</p>
        <div className='mt-4'>
          <button onClick={handleButtonClick} className='pt-2 pb-2 px-8 py-8 bg-[#FE1242] rounded-lg hover:bg-[#fe1241c0]'>Menù</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
