import React from 'react';
import DivOne from './SectionEightDiv/DivOne';
import DivTwo from './SectionEightDiv/DivTwo';
import DivThree from './SectionEightDiv/DivThree';
import DivFour from './SectionEightDiv/DivFour';
import DivFive from './SectionEightDiv/DivFive';

const SectionOne = () => {
    return (
        <div className='sectioneight-background py-4'>

            <div className='text-center mb-10'>
                <h1 className=' text-4xl text-white font-extrabold py-6 pb-4'>Choose your plan</h1>
            </div>
            <div className='mx-auto max-w-custom  px-4 mb-10'>
                <div class="mx-auto max-w-custom px-4 mb-10 grid lg:grid-cols-3 gap-8">
                    <DivOne/>
                    <DivTwo/>
                    <DivThree/>
                </div>
                <div class="mx-auto max-w-custom px-4 mb-20 grid lg:grid-cols-2 gap-8">
                    <DivFour/>
                    <DivFive/>
                   
                </div>
            </div>
        </div>
    )
}

export default SectionOne
