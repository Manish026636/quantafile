import React from 'react'
import BlackDiv from './SectionSixDiv/BlackDiv';
import BlueDiv from './SectionSixDiv/BlueDiv';
const SectionFive = () => {
  return (
    <div>

      <div className='text-center mb-20'>
        <p className=' text-2xl text-gray-500 font-bold pb-4'>News</p>
        <h1 className='text-2xl lg:text-6xl font-extrabold mb-20  sectionhead'>Updates from our blog</h1>
        
      </div>
      <div class="mx-auto max-w-custom px-4 mb-40 grid lg:grid-cols-2 gap-4">
        <BlackDiv />
        <BlueDiv />


      </div>
    </div>
  )
}

export default SectionFive;