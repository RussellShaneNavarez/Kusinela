import React from 'react';
import menuImage from '../assets/menuImage.jpg';

import { Carousel } from "flowbite-react";

const Menu = () => {
  const menu = '/assets/KusinelaMenu.pdf';

  const openPdf = () => {
    window.open(menu, '_blank');
  };

  return (
    <div className='flex flex-col-reverse md:flex-row bg-black text-white text-center md:text-right '> {/* bg-[#090833] */}
    <div className='h-[12rem] w-[20rem] mt-6 md:mt-20 md:h-72 md:w-[35rem] mx-auto mb-10'>
          <Carousel slide={false}>
            <img src={menuImage} alt="Food 2"  />
            <img src={menuImage} alt="Food 2"  />
            <img src={menuImage} alt="Food 2" />
          </Carousel>
      </div>
      <div className='flex md:mr-[12rem] mt-10 md:mt-20 flex-col gap-2 md:w-1/2 p-4 mx-8 md:pl-10'>
        <h2 className='text-3xl mb-8 font-semibold'>
          Best <span style={{ color: '#FCD717' }}>Sellers</span>!
        </h2>
        <p>Discover our best-sellers menu, featuring the most popular and beloved dishes crafted with the finest ingredients for an unforgettable dining experience</p>
        <p>Indulge in customer favorites and chef-recommended delights that showcase our commitment to exceptional flavor and quality.</p>
        <div className='mt-4'>
          <button onClick={openPdf} type="button" className='pt-2 pb-2 px-8 py-8 bg-[#FE1242] rounded-lg hover:bg-[#fe1241c0]'>Menù</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
