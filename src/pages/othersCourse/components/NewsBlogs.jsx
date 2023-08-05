import React from 'react';
import '../OtherCourse.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import { FaCalendarAlt, FaFolder, FaComment } from "react-icons/fa";

const NewsBlogs = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }
                }}
                loop={true}
                modules={[FreeMode, Pagination]}
                className="mySwiper card-shadow"
            >
                <SwiperSlide>
                    <div className="card shadow-xl">
                        <figure>
                            <img src="http://www.baoiam.com/images/blog1.jpg" />
                        </figure>
                        <div className='relative'>
                            <div className='w-full p-2 rounded-t-[20px] text-white font-bold bg-red-500 absolute bottom-0 flex items-center justify-center gap-x-4'>
                                <FaFolder size={30}></FaFolder>
                                <p>Product Development</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className='flex items-center justify-center gap-x-1'>
                                <div className='flex items-center text-xl gap-x-1'>
                                    <FaCalendarAlt className='text-pink'></FaCalendarAlt>
                                    <p className='text-gray'>March,30 2023</p>
                                </div>
                                <hr className='h-[2px] w-5 rotate-90 bg-[#ee4962]' />
                                <div className='flex items-center text-xl gap-x-1'>
                                    <FaComment className='text-pink'></FaComment>
                                    <p className='text-gray'>Comments (3)</p>
                                </div>
                            </div>
                            <p className='text-xl font-bold text-[#47476e] text-left'>Product development is not a course to learn, its an arts.</p>
                            <div className='text-left text-[#47476e] font-semibold'>
                                <p>2. Course Duration: 3 month</p>
                                <p>3. projects: 10 certifications</p>
                                <p>4. 1:1 mentorship</p>
                                <p>5. 12000k</p>
                            </div>
                            <div className='text-right'>
                                <button className='text-xl font-bold text-[#47476e] hover:text-[#ee4962]'><span className='underline'>Read</span> More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card shadow-xl">
                        <figure>
                            <img src="http://www.baoiam.com/images/blog2.jpg" />
                        </figure>
                        <div className='relative'>
                            <div className='w-full p-2 rounded-t-[20px] text-white font-bold bg-red-500 absolute bottom-0 flex items-center justify-center gap-x-4'>
                                <FaFolder size={30}></FaFolder>
                                <p>Enterpreneurship</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className='flex items-center justify-center gap-x-1'>
                                <div className='flex items-center text-xl gap-x-1'>
                                    <FaCalendarAlt className='text-pink'></FaCalendarAlt>
                                    <p className='text-gray'>March,30 2023</p>
                                </div>
                                <hr className='h-[2px] w-5 rotate-90 bg-[#ee4962]' />
                                <div className='flex items-center text-xl gap-x-1'>
                                    <FaComment className='text-pink'></FaComment>
                                    <p className='text-gray'>Comments (3)</p>
                                </div>
                            </div>
                            <p className='text-xl font-bold text-[#47476e] text-left'>The ERA on Enterpreneurship: How You can be the Next Success Story</p>
                            <div className='text-left text-[#47476e] font-semibold'>
                                <p>2. Course Duration: 3 month</p>
                                <p>3. projects: 10 certifications</p>
                                <p>4. 1:1 mentorship</p>
                                <p>5. 12000k</p>
                            </div>
                            <div className='text-right'>
                                <button className='text-xl font-bold text-[#47476e] hover:text-[#ee4962]'><span className='underline'>Read</span> More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card shadow-xl">
                        <figure>
                            <img src="http://www.baoiam.com/images/blog3.jpg" />
                        </figure>
                        <div className='relative'>
                            <div className='w-full p-2 rounded-t-[20px] text-white font-bold bg-red-500 absolute bottom-0 flex items-center justify-center gap-x-4'>
                                <FaFolder size={30}></FaFolder>
                                <p>Internship</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className='flex items-center justify-center gap-x-1'>
                                <div className='flex items-center text-xl gap-x-1'>
                                    <FaCalendarAlt className='text-pink'></FaCalendarAlt>
                                    <p className='text-gray'>March,30 2023</p>
                                </div>
                                <hr className='h-[2px] w-5 rotate-90 bg-[#ee4962]' />
                                <div className='flex items-center text-xl gap-x-1'>
                                    <FaComment className='text-pink'></FaComment>
                                    <p className='text-gray'>Comments (3)</p>
                                </div>
                            </div>
                            <p className='text-xl font-bold text-[#47476e] text-left'>Having an INTERNSHIP EXPERIENCE before getting info professional
                                life is like ICING ON THE CAKE.</p>
                            <div className='text-left text-[#47476e] font-semibold'>
                                <p>2. Course Duration: 3 month</p>
                                <p>3. projects: 10 certifications</p>
                                <p>4. 1:1 mentorship</p>
                                <p>5. 12000k</p>
                            </div>
                            <div className='text-right'>
                                <button className='text-xl font-bold text-[#47476e] hover:text-[#ee4962]'><span className='underline'>Read</span> More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default NewsBlogs;