import React from 'react';
import '../Mentorship.css'
import refer_img from '../../../assets/Refer_img.png'

const Banner = () => {
        return (
                <div className='pt-24 px-4'>
                        <h1 className='text-3xl md:text-[70px] text-blue font-bold'>Learn,<span className='text-gradient'>Teach</span>,Earn</h1>
                        <div className='flex flex-col md:flex-row-reverse mt-8'>
                                <div className='md:w-1/2 relative md:-top-24 flex justify-center'>
                                        <img className='w-[80%]' src={refer_img} alt="" />
                                </div>
                                <div className='md:w-1/2'>
                                        <h1 className='text-blue md:text-3xl mt-8 font-bold'>MENTORSHIP Program revolutionizes internships.</h1>
                                        <h1 className='text-gray md:text-2xl mt-3'>We aim to empower learners to share their expertise and earn simultaneously.</h1>
                                        <form className='mt-12'>
                                                <div className="rounded-2xl shadow-xl md:inline-flex md:items-center">
                                                        <div className='px-7 py-5'>
                                                                <input className='outline-none text-xl' type="email" name="" placeholder='Enter Email' />
                                                        </div>
                                                        <div className="pr-2 text-center">
                                                                <button className='bg-gradient px-3 md:px-5 py-1 md:py-3 rounded-lg md:rounded-2xl relative hover:-top-3 hover:transition'>BECOME A TRAINER</button>
                                                        </div>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        );
};

export default Banner;