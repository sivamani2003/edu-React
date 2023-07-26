import React from 'react';
import { FaSplotch } from "react-icons/fa";
import '../Courses.css'
import { BsArrowRight } from "react-icons/bs";

// #f5f2eb

const Home = () => {
        return (
                <div className='md:p-12 p-4 bg-animation'>
                        <div className='animate-card'></div>
                        <div className='animate-card'></div>
                        <div className='animate-card triangle'></div>
                        <div className='animate-card triangle'></div>
                        <div className='animate-card'></div>
                        <div className='animate-card triangle'></div>
                        <div className='animate-card'></div>
                        <div className='animate-card'></div>
                        <div className='animate-card'></div>
                        <div className='animate-card triangle'></div>
                        <div className='md:flex'>
                                <div className='md:w-1/2 z-10'>
                                        <h1 className='text-xl md:text-4xl font-bold'>Full Stack Web Development Course — MERN Stack</h1>
                                        <p className='font-bold md:text-lg my-4'>for Beginners and Experienced Learners</p>
                                        <p className='text-gray'>Learn to build entire web applications from start to finish on one of the most versatile tech stacks : MongoDB, Express.js, React.js and Node.js (MERN stack)</p>
                                        <div className='flex items-center mt-3 gap-x-3'>
                                                <p className='text-lg font-bold'>4.5</p>
                                                <div className='flex items-center gap-x-1 text-orange-500'>
                                                        <FaSplotch></FaSplotch>
                                                        <FaSplotch></FaSplotch>
                                                        <FaSplotch></FaSplotch>
                                                        <FaSplotch></FaSplotch>
                                                        <FaSplotch></FaSplotch>
                                                </div>
                                                <p className='text-lg font-semibold'>(2K+ students)</p>
                                        </div>
                                        <div className='flex items-center gap-x-2 mt-4'>
                                                <button className='allBtn'>Enroll now <BsArrowRight></BsArrowRight></button>
                                                <button className='allBtn bg-transparent text-black border-[1px] hover:text-white'>Try for free <BsArrowRight></BsArrowRight></button>
                                        </div>
                                        <hr className='my-4 w-2/3 border-[1px]' />
                                        <div className='flex gap-x-4'>
                                                <div>
                                                        <p className='text-lg font-bold'>9K+</p>
                                                        <small className='text-gray'>students enrolled</small>
                                                </div>
                                                <div>
                                                        <p className='text-lg font-bold'>8+</p>
                                                        <small className='text-gray'>Projects</small>
                                                </div>
                                                <div>
                                                        <p className='text-lg font-bold'>20</p>
                                                        <small className='text-gray'>Month</small>
                                                </div>
                                                <div>
                                                        <p className='text-lg font-bold'>560+</p>
                                                        <small className='text-gray'>hour of videos</small>
                                                </div>
                                        </div>
                                </div>
                                <div className='md:w-1/2'>

                                </div>
                        </div>
                </div>
        );
};

export default Home;