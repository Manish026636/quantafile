import React from 'react'
import BlackDiv from './SectionSixDiv/BlackDiv';
import BlueDiv from './SectionSixDiv/BlueDiv';
import TextStyle from '../../Others/TextStyle';
const SectionFive = () => {
  return (
    <div>

      <div className='text-center mb-20'>
        <p className=' text-2xl text-gray-500 font-bold pb-4'>News</p>
        <TextStyle>Updates from our blog</TextStyle>
        
      </div>
      <div class="mx-auto max-w-custom px-4 mb-40 grid lg:grid-cols-2 gap-4">
      <BlueDiv />
        <BlackDiv />
      


      </div>
    </div>
  )
}

export default SectionFive;