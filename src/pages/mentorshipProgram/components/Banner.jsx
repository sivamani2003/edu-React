import React from 'react';
import '../Mentorship.css'
import learn from '../../../assets/Refer_img.png'

const Banner = () => {
        return (
                <div className='pt-24 px-4'>
                        <h1 className='text-3xl md:text-[70px] text-blue font-bold'>Learn,<span className='text-pink'>Teach</span>,Earn</h1>
                        <div className='flex flex-col md:flex-row-reverse mt-8'>
                                <div className='md:w-1/2 relative md:-top-24 flex justify-center'>
                                        <img className='w-[80%]' src={learn} alt="" />
                                </div>
                                <div className='md:w-1/2'>
                                        <h1 className='text-blue md:text-3xl mt-8 font-bold'>MENTORSHIP Program revolutionizes internships.</h1>
                                        <h1 className='text-gray md:text-2xl mt-3'>We aim to empower learners to share their expertise and earn simultaneously.</h1>
                                        <form className='mt-12'>
                                                <div className="inputAndBtn md:inline-flex items-center text-center">
                                                        <div>
                                                                <input className='px-[20px] py-[10px] outline-none text-xl text-center md:text-left' type="email" name="" placeholder='Enter Email' />
                                                        </div>
                                                        <div className="email-btn flex justify-center">
                                                                <button className='form-btn p-[12px] rounded-[10px]'>Become a trainer
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                                                        </svg>
                                                                </button>
                                                        </div>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        );
};

export default Banner;