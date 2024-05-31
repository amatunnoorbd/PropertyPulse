import React, { useEffect } from 'react';
import 'animate.css';

const About = () => {

    useEffect(() => {
        document.title = 'About';
      }, []);

    return (
        <div className='animate__animated animate__backInUp flex justify-center lg:h-[90vh]'>

            <div className='mx-5 flex flex-col lg:flex-row gap-5 lg:gap-1 rounded-2xl my-14 lg:my-24 lg:h-[400px] lg:w-[1150px] bg-base-200 shadow-xl'>
                <img className='rounded-r-2xl lg:rounded-r-none lg:w-[550px] rounded-l-2xl lg:h-full' src="https://i.ibb.co/ZcfmdGT/photo-1515378960530-7c0da6231fb1-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />

                <div className='text-center pr-5'>
                    <div className='lg:ml-32 mt-8 lg:mt-14 mb-8 lg:mb-0'>
                        <h1 className='text-3xl font-bold'>Emily Johnson</h1>
                        <p className='font-bold'>@ emily</p>
                    </div>

                    <div className='lg:ml-14 lg:mt-12 flex flex-col lg:flex-row w-full justify-between gap-2 lg:gap-0'>
                        <div className='bg-slate-300 p-2 lg:p-5 rounded-lg mx-14 lg:mx-0'>
                            <h1 className='text-lg'>Exprence(year)</h1>
                            <p className='text-5xl'>17</p>
                        </div>

                        <div className='bg-slate-300  p-5 rounded-lg mx-14 lg:mx-0'>
                            <h1 className='text-lg'>follower</h1>
                            <p className='text-5xl'>17230</p>
                        </div>

                        <div className='bg-slate-300  p-5 rounded-lg mx-14 lg:mx-0'>
                            <h1 className='text-lg'>following</h1>
                            <p className='text-5xl'>36</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default About;