import React from 'react'
import glovo from '../assets/glovo.png'
import deliveroo from "../assets/deliveroo.png"

const Order = () => {
  const handleButtonClickGlovo = () => {
    window.location.href = 'https://glovoapp.com/it/en/milan/kusinela-mil/';
  };

  const handleButtonClickDeliveroo = () => {
    window.location.href = 'https://deliveroo.it/en/menu/Milano/giambellino-moncucco/kusinela?geohash=u0nd84w36gdg';
  };
  return (
    <div className="flex flex-col bg-[#090833] text-white pt-20 pb-20 justify-center items-center">

      <div className='flex flex-col justify-center items-center text-center gap-2 mx-12'>
        <h2 className='md:text-3xl text-3xl font-semibold'>You can't come and still want to eat?</h2>
        <p>You can now order our food online! We are available at:</p>
      </div>

      <div className='flex mt-20 mb-8 gap-[8rem] flex-col md:flex-row sm:flex-row'>

      <div className='flex flex-col gap-4 h-[10rem] w-[10rem]'>
        <img src={glovo} alt="Glovo" width="100%" height="100%"/>
        <button
          onClick={handleButtonClickGlovo}
          className='pt-2 pb-2 px-4 py-4 bg-[#FE1242] rounded-lg hover:bg-[#fe1241c0]'
        >
          Glovo
        </button>
      </div>

      <div className='flex flex-col gap-4 h-[10rem] w-[10rem]'>
        <img src={deliveroo} alt="Deliveroo" width="100%" height="100%"  />
        <button
          onClick={handleButtonClickDeliveroo}
          className='pt-2 pb-2 px-4 py-4 bg-[#FE1242] rounded-lg hover:bg-[#fe1241c0]'
        >
          Deliveroo
        </button>
      </div>

      </div>
    </div>
  )
}

export default Order