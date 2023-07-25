import React from 'react';
import learnCode from '../../../assets/learnCode.jpg'
import nodeJS from '../../../assets/nodeJS.png'
import reactJS from '../../../assets/reactJS.png'
import JS from '../../../assets/JS.png'

const LearnCode = () => {
        return (
                <div className='md:flex items-center'>
                        <div className='md:w-1/2 flex justify-center learn-bg'>
                                <div className='relative'>
                                        <img className='w-[80%]' src={learnCode} alt="" />
                                        <div className='flex flex-col items-center absolute top-0 left-[30%]'>
                                                <img className='h-12 w-12 hover:scale-[300%] transition' src={reactJS} alt="" />
                                                <span className='px-4 py-2 text-pink rounded-md shadow-2xl font-bold'>146+ Class</span>
                                        </div>
                                        <div className='flex flex-col items-center absolute top-[40%]'>
                                                <img className='h-12 w-12 hover:scale-[300%] transition' src={JS} alt="" />
                                                <span className='px-4 py-2 text-pink rounded-md shadow-2xl font-bold'>146+ Class</span>
                                        </div>
                                        <div className='flex flex-col items-center absolute top-[40%] right-[20%]'>
                                                <img className='h-12 w-12 hover:scale-[300%] transition' src={nodeJS} alt="" />
                                                <span className='px-4 py-2 text-pink rounded-md shadow-2xl font-bold'>146+ Class</span>
                                        </div>
                                </div>

                        </div>
                        <div className='md:w-1/2 md:px-24 px-4'>
                                <h1 className='text-xl md:text-5xl text-blue font-bold'>Grow you skill and get world class <span className='text-pink'>job</span></h1>
                                <p className='text-gray md:text-xl mt-2 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat minus tempora enim reprehenderit ab voluptatem repellendus vel consectetur! Facilis saepe amet, excepturi voluptatem quas earum cumque id. Ratione, placeat iure cupiditate tempora alias natus fugiat minus reiciendis vitae quod sequi doloribus incidunt ut consequatur accusantium animi ex aperiam. Incidunt!</p>
                                <button className='allBtn px-[30px] py-[15px] rounded-[5px]'>Enroll now
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                </button>
                        </div>
                </div>
        );
};

export default LearnCode;