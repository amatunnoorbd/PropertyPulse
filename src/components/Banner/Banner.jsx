// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerContent from '../BannerContent/BannerContent';

const Banner = () => {
    return (
        <div className=' w-[100%] lg:h-[600px]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className='relative'>
                        <img className=' banner-img' src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                       {
                        <BannerContent></BannerContent>
                       }

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>
                        <img className='banner-img' src="https://i.ibb.co/2Z51bgb/photo-1584752242818-b4bd7fb3fe10-q-80-w-2067-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
                        {
                            <BannerContent></BannerContent>
                        }

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>
                        <img className='banner-img' src="https://i.ibb.co/Yd65dS6/photo-1605276373954-0c4a0dac5b12-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
                        {
                            <BannerContent></BannerContent>
                        }

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;