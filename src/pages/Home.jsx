import React from 'react';
import LogoName from '../assets/logoName.png';
import backgroundImage from '../assets/backgroundHome.jpg';

const Home = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 pb-[10rem]">
        <img src={LogoName} alt="Logo" className='w-[40rem]' />
        <h1 className="text-white text-3xl text-center w-[40rem]">A restaurant that gives you an experience of some taste of Filipino cuisine</h1>
      </div>
    </div>
  );
};

export default Home;
