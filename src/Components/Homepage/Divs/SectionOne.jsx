import React from 'react'

const SectionOne = () => {
  return (
    <div>

      <div className='text-center mb-20'>
        <p className=' text-2xl text-gray-500 font-bold pb-4'>Everyday essentials</p>
        <h1 className='text-2xl lg:text-6xl font-extrabold  '>Send, spend and save smarter</h1>
        <p className='pt-10 text-gray-700 font-bold text-xl'>Make day-to-day spending a breeze with all things money in one place</p>
      </div>
      <div className='mx-auto max-w-custom  px-4 mb-10'>
        <div className='bg-[#017dfb] transform scale-100 transition-transform duration-300 hover:scale-90  overflow-hidden  rounded-3xl w-full  h-[70vh]'>
          <div className='transform scale-100 transition-transform duration-300 hover:scale-90 grid lg:grid-cols-2 lg:gap-4'>
              <div className='pt-30 lg:mt-32 p-8 lg:p-10'>
               <h1 className='text-2xl lg:text-4xl font-bold mb-8 text-white'>Pay and get paid, hassle- free</h1>
                <p className='text-lg lg:text-xl text-white font-bold'>Send money to friends and family, or get paid by customers. </p>
                <button className='mt-6 lg:mt-32 px-2 py-1 lg:px-4 lg:py-2 bg-white rounded-xl hover:bg-gray-200   text-black text-sm lg:text-lg font-bold'>Explore PPT section</button>
              </div>
              <div className='flex justify-center items-center '>
                <img src='ss1.png' alt='img' className='lg:mt-4  w-full '/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionOne
