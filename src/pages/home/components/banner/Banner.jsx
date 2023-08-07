import React from 'react';
import './Banner.css'
import { BsArrowRight } from "react-icons/bs";

import banner1 from '../../../../assets/home/hero-banner-1.jpg'
import banner2 from '../../../../assets/home/hero-banner-2.jpg'
import banner3 from '../../../../assets/home/hero-shape-1.svg'

const Banner = () => {
    return (
        <div className='banner-bg'>
            <div className='md:flex items-center px-4 py-10 md:px-24 md:py-16 max-w-[1400px] md:mx-auto'>
                <div className='md:w-1/2 px-10 md:px-0'>
                    <h1 className='text-5xl font-bold'>The Best Program to <span className='text-pink'>Enroll</span> for Exchange</h1>
                    <p className='text-lg mt-8'>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                    <button className='allBtn mt-4 flex items-center gap-x-1'>
                        Find Courses
                        <BsArrowRight></BsArrowRight>
                    </button>
                </div>
                <div className='md:w-1/2 home-banner-right flex flex-col items-center justify-center'>
                    <div className='flex my-10 md:my-0 md:relative top-10'>
                        <div>
                            <img className='banner1 w-[80%] md:w-full' src={banner1} alt="" />
                        </div>
                        <div className='md:relative top-20 left-12'>
                            <img className='banner2 w-[70%] md:w-full' src={banner2} alt="" />
                        </div>
                    </div>
                    <div className='relative hidden md:block right-32'>
                        <img src={banner3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;