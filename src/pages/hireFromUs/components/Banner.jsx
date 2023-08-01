import React from 'react';
import '../HireFromUs.css'

const Banner = () => {
    return (
        <div className='max-w-[1800px] mx-auto bg-color'>
            <div className='md:px-[200px] relative'>
                <div className='hire-circle'></div>
                <div className='hire-half-circle'></div>


                <div className='md:flex items-center justify-center'>
                    <div className='md:w-1/2 z-20'>
                        <h1 className='text-2xl md:text-5xl font-bold'>Hire remote <br />Software Engineers <br />across CEE now.</h1>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi temporibus consequuntur quaerat sapiente ad ab. Alias quae ducimus ipsam voluptate!</p>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-lg font-semibold'>One</p>
                                <div className='w-3 h-3 rounded-full bg-white my-1'></div>
                                <p>Lorem, ipsum dolor. <br />Lorem ipsum dolor sit.</p>
                            </div>
                            <div>
                                <p className='text-lg font-semibold'>One</p>
                                <div className='w-3 h-3 rounded-full bg-white my-1'></div>
                                <p>Lorem, ipsum dolor. <br />Lorem ipsum dolor sit.</p>
                            </div>
                            <div>
                                <p className='text-lg font-semibold'>One</p>
                                <div className='w-3 h-3 rounded-full bg-white my-1'></div>
                                <p>Lorem, ipsum dolor. <br />Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className='my-20'>
                            <button className='allBtn bg-white text-black'>Subscribe Now</button>
                        </div>
                    </div>


                    <div className='md:w-1/2'>
                        <div className='hire-imgOne hire-img-shape'></div>
                        <div className='hire-imgTwo hire-img-shape'></div>
                        <div className='hire-imgThree hire-img-shape'></div>
                        <div className='hire-imgFour hire-img-shape'></div>
                        <div className='hire-imgFive hire-img-shape'></div>
                        <div className='hire-imgSix hire-img-shape'></div>
                        <div className='hire-imgSeven hire-img-shape'></div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;