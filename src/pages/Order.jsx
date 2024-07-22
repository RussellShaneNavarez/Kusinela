import React from 'react'
import glovo from '../assets/glovo.png'
import deliveroo from "../assets/deliveroo.png"

const Order = () => {
  const handleButtonClickGlovo = () => {
    window.location.href = 'https://www.thefork.it/ristorante/kusinela-r800047';
  };

  const handleButtonClickDeliveroo = () => {
    window.location.href = 'https://www.thefork.it/ristorante/kusinela-r800047';
  };
  return (
    <div className="flex flex-col bg-[#090833] text-white pt-20 pb-20 justify-center items-center">

      <div className='flex flex-col items-center gap-2'>
        <h2 className='text-3xl font-semibold'>You can't come and still want to eat?</h2>
        <p>You can now order our food online! We are available at:</p>
      </div>

      <div className='flex mt-20 mb-8 gap-16'>

      <div className='flex flex-col gap-4'>
        <img src={glovo} alt="Glovo" style={{width: 200, height: 200}} />
        <button
          onClick={handleButtonClickGlovo}
          className='pt-2 pb-2 px-4 py-4 bg-[#FE1242] rounded-lg'
        >
          Glovo
        </button>
      </div>

      <div className='flex flex-col gap-4'>
        <img src={deliveroo} alt="Deliveroo" style={{width: 200, height: 200}}   />
        <button
          onClick={handleButtonClickDeliveroo}
          className='pt-2 pb-2 px-4 py-4 bg-[#FE1242] rounded-lg'
        >
          Deliveroo
        </button>
      </div>

      </div>
    </div>
  )
}

export default Order