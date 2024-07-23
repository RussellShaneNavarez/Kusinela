import React from 'react';
import LogoName from '../assets/logoName.png';
import backgroundImage from '../assets/backgroundHome.jpg';

const Home = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <img src={LogoName} alt="Logo" className='w-[20rem] sm:w-[30rem] md:w-[40rem]' />
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl text-center md:w-[40rem] px-4">A restaurant that gives you an experience of some taste of Filipino cuisine</h1>
      </div>
    </div>
  );
};

export default Home;
