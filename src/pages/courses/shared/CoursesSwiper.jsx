import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../Courses.css'
import { Mousewheel, Pagination } from 'swiper/modules';

const one = 'https://img.freepik.com/premium-photo/smiling-indian-software-developer_274689-36939.jpg'
const two = 'https://st2.depositphotos.com/1643295/7439/i/600/depositphotos_74390343-stock-photo-smiling-software-developer.jpg'
const three = 'https://st3.depositphotos.com/1017986/18714/i/450/depositphotos_187143178-stock-photo-close-up-of-creative-man.jpg'


const slideImages = [
        one, two, three
];

const MySwiper = () => {

        const [currentSlide, setCurrentSlide] = useState(0);

        const handleSlideChange = (swiper) => {
                setCurrentSlide(swiper.realIndex);
        };

        return (
                <div className='max-w-7xl md:mx-[25%] md:mt-24'>
                        <h1 className='text-2xl md:text-5xl font-bold text-center'><span className='text-pink'>Reviews</span> From Students</h1>
                        <h3 className='text-xl md:text-3xl font-bold text-center mb-24 md:mb-12'>Average Rating : 4.5</h3>
                        <div>
                                <div className='swiper-shadow shadow-2xl relative'>
                                        <Swiper
                                                direction={'horizontal'}
                                                slidesPerView={1}
                                                spaceBetween={30}
                                                mousewheel={true}
                                                pagination={{
                                                        clickable: true,
                                                }}
                                                modules={[Mousewheel, Pagination]}
                                                className="coursesSwiper"
                                                onSlideChange={handleSlideChange}
                                                loop={true}
                                                breakpoints={{
                                                        640: {
                                                                direction: 'vertical'
                                                        }
                                                }}
                                        >
                                                <SwiperSlide className='flex flex-col justify-center'>
                                                        <div className='md:pl-36 md:pr-6'>
                                                                <h1 className='text-3xl text-pink font-bold mt-8 md:mt-0'>Abhinay Chaturvedi</h1>
                                                                <h1 className='text-lg text-[#1ab79d] font-semibold'>Deloite</h1>
                                                                <p className='mt-2 text-gray'>WRITO students get mentored by the industry experts who have achieved mastery in their respective domains & are passionate about helping students achieve their dreams.</p>
                                                        </div>
                                                </SwiperSlide>
                                                <SwiperSlide className='flex flex-col justify-center'>
                                                        <div className='md:pl-36 md:pr-6'>
                                                                <h1 className='text-3xl text-pink font-bold mt-8 md:mt-0'>Amit Pandey</h1>
                                                                <h1 className='text-lg text-[#1ab79d] font-semibold'>Microsoft</h1>
                                                                <p className='mt-2 text-gray'>WRITO students get mentored by the industry experts who have achieved mastery in their respective domains & are passionate about helping students achieve their dreams.</p>
                                                        </div>
                                                </SwiperSlide>
                                                <SwiperSlide className='flex flex-col justify-center'>
                                                        <div className='md:pl-36 md:pr-6'>
                                                                <h1 className='text-3xl text-pink font-bold mt-8 md:mt-0'>Anubhav</h1>
                                                                <h1 className='text-lg text-[#1ab79d] font-semibold'>Byjus</h1>
                                                                <p className='mt-2 text-gray'>WRITO students get mentored by the industry experts who have achieved mastery in their respective domains & are passionate about helping students achieve their dreams.</p>
                                                        </div>
                                                </SwiperSlide>
                                        </Swiper>
                                        <div className='absolute top-0 md:top-1/2 left-1/2 md:left-0  transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-2xl p-4 md:p-8 rounded-[15px] bg-white flex items-center'>
                                                <img
                                                        src={slideImages[currentSlide]}
                                                        alt={`Slide ${currentSlide + 1}`}
                                                        className='w-[120px] h-[120px] rounded-xl md:w-[200px] md:h-[200px]'
                                                />
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default MySwiper;