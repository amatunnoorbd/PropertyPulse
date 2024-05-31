import React from 'react';

const BannerContent = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" className='top-1/4 md:top-1/3 lg:top-1/3 left-[15%] lg:md:left-[20%] absolute'>
            <h1 className='lg:mt-10 text-[22px] md:text-3xl lg:text-6xl font-bold text-white'><span className="">Discover Your</span> <span className='text-[#FFB901]'>Dream House</span> Today!</h1>

            <p className='text-white text-lg font-medium pt-2 pb-5 hidden lg:block'>
                Explore our website today to discover your dream house, where every listing <br />  holds the promise of your perfect home.</p>

            <button className='mt-5 btn bg-green-700 hover:bg-green-900 border-none text-white'>Explore Now</button>
        </div>
    );
};

export default BannerContent;