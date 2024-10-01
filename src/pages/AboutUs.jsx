import React from 'react';
import aboutImage from '../assets/aboutImage.jpg';

import { Carousel } from "flowbite-react";

const AboutUs = () => {
  return (
    <div className='flex flex-col md:flex-row bg-black text-white text-center md:text-left '> {/* bg-[#090833] */}
      <div className='flex md:ml-[12rem] mt-10 md:mt-20 flex-col gap-2 md:w-1/2 p-4 mx-8 md:pr-24'>
        <h2 className='md:text-3xl text-3xl mb-8 font-semibold'>
          About <span style={{ color: '#FE1242' }}>Kusinela</span>!
        </h2>
        <p>Welcome to Kusinela, where you can enjoy authentic Filipino cuisine. From savory adobo to sweet halo-halo, we bring the rich flavors of the Philippines to your table.</p>
        <p>Experience the warmth of Filipino hospitality and the tradition of our culinary heritage. Join us for a memorable dining experience that captures the essence of the Philippines.</p>
        <p>Welcome to the taste of the Philippines.</p>
      </div>
      <div className='h-[12rem] w-[20rem] mt-6 md:mt-20 md:h-72 md:w-[35rem] mx-auto'>
          <Carousel slide={false}>
            <img src={aboutImage} alt="Food 1"  />
            <img src={aboutImage} alt="Food 1"  />
            <img src={aboutImage} alt="Food 1" />
          </Carousel>
      </div>
      
    </div>
  );
};

export default AboutUs;
