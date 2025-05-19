import React from 'react';
import banner from '../../../../public/banner/banner.jpg'
import Image from 'next/image';

const BannerSection = () => {
    return (
        <div className='relative'>
            <div>
                <div className='ml-5 md:ml-10 absolute top-4 md:top-20 lg:top-25 md:space-y-1'>
                    <p className='lg:text-lg text-xs font-medium'>Quality cleaning at a fair price.</p>
                <h1 className='md:w-80 w-50 lg:w-96 font-bold md:text-[22px] lg:text-4xl'>Specialized, efficient, and thorough cleaning services</h1>
                    <p className='w-44 md:w-[300px] text-xs md:text-xl lg:w-lg text-gray-500'>We provide Performing cleaning tasks using the least amount of time, energy, and money.</p>
                    <div className='flex gap-2 md:gap-3 mt-2 md:mt-5'>
                        <button className='bg-[#04BE64] text-xs md:text-sm text-white btn'>Get  Start Now</button>
                        <button className='btn text-xs md:text-sm'>View all Services</button>
                    </div>
                </div>
                <Image className='w-full h-52 md:h-[550px]' src={banner} alt='banner' ></Image>
            </div>
        </div>
    );
};

export default BannerSection;