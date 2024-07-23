import React from 'react';
import aboutImage from '../assets/aboutImage.jpg';

const AboutUs = () => {
  return (
    <div className='flex flex-col md:flex-row bg-[#090833] text-white '>
      <div className='flex ml-0 md:ml-[12rem] mt-10 md:mt-20 flex-col gap-2 md:w-1/2 p-4 pr-24'>
        <h2 className='text-3xl mb-8 font-semibold'>
          About <span style={{ color: '#FE1242' }}>Kusinela</span>!
        </h2>
        <p>Welcome to Kusinela, where you can enjoy authentic Filipino cuisine. From savory adobo to sweet halo-halo, we bring the rich flavors of the Philippines to your table.</p>
        <p>Experience the warmth of Filipino hospitality and the tradition of our culinary heritage. Join us for a memorable dining experience that captures the essence of the Philippines.</p>
        <p>Welcome to the taste of the Philippines.</p>
      </div>
      <div className='flex mt-10 md:mt-20 md:w-1/2 justify-center'>
        <div className='w-full max-w-[800px] aspect-w-16 aspect-h-8'>
          <img src={aboutImage} alt="Food 1" className='object-cover' />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
