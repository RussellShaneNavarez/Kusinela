import React from 'react'

const VisitUs = () => {
  return (
    <div className='flex mt-20 mb-20 md:ml-[12.5rem] md:mr-[12.5rem] ml-0 mr-0 md:flex-row flex-col justify-between items-center'>
      <div className='w-[80 %] sm:w-[70%] md:w-[50%] '>
        <div>
        <h2 className='text-3xl sm:text-3xl md:text-3xl font-semibold mb-8 text-center sm:text-center md:text-left'>Where can you <span style={{ color: '#FE1242' }}>find us</span>?</h2>
        </div>
        <div className='h-[25rem]'>
        <iframe title='Visit' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5597.626223377663!2d9.146758375800367!3d45.453422034158535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c3db125953d3%3A0xfbc6195177e8b1ce!2sVia%20Leone%20Tolstoi%2C%2053%2C%2020146%20Milano%20MI!5e0!3m2!1sen!2sit!4v1721665708114!5m2!1sen!2sit" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>      
      </div>
      <div className='w-[50%] text-center md:text-right md:text-xl text-xl flex flex-col gap-4 justify-center mt-10'>
        <p className='font-semibold'>Opening Times</p>
        <p>Monday - Closed</p>
        <p>Tuesday - Sunday</p>
        <p>12:00 - 15:00</p>
        <p>19:00 - 22:00</p>
        <p>At Via Leone Tolstoi, 53 20146 Milano</p>
      </div>
    </div>
  )
}

export default VisitUs