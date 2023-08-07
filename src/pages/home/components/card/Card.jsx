import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Card = () => {
    return (
        <div className='my-6'>
            <h1 className='text-center text-lg md:text-5xl font-bold'>Recommended <br /> <span className='text-pink'>Courses</span></h1>
            <div className='mt-4 grid md:grid-cols-3 gap-y-5 md:gap-y-8'>
                <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                    <div className="pl-8 pt-4">
                        <img src="https://files.codingninjas.in/phone-26004.svg" alt="Shoes" className="rounded-xl w-[100px] h-[100px]" />
                    </div>
                    <div className='card-body'>
                        <h2 className="card-title my-2">PhotoFolio</h2>
                        <p>Build an Android app that allows users to create and showcase their photography portfolio. Users can upload, organize, and share their digital photos with the world.</p>
                        <div>
                            <button className="allBtn bg-transparent text-black">Learn more<FaLongArrowAltRight></FaLongArrowAltRight> </button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                    <div className="pl-8 pt-4">
                        <img src="https://files.codingninjas.in/ipod-project-9419.svg" alt="Shoes" className="rounded-xl w-[100px] h-[100px]" />
                    </div>
                    <div className='card-body'>
                        <h2 className="card-title my-2">iPod</h2>
                        <p>Build an Android app for playing and managing music tracks with a sleek design and easy-to-use controls.</p>
                        <div className='card-actions'>
                            <button className="allBtn bg-transparent text-black">Learn more<FaLongArrowAltRight></FaLongArrowAltRight> </button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                    <div className="pl-8 pt-4">
                        <img src="https://files.codingninjas.in/music-app-9425.svg" alt="Shoes" className="rounded-xl w-[100px] h-[100px]" />
                    </div>
                    <div className='card-body'>
                        <h2 className="card-title my-2">Music Player</h2>
                        <p>Create a sleek Android music player inspired by Spotify/Youtube Music with custom design and controls.</p>
                        <div>
                            <button className="allBtn bg-transparent text-black">Learn more<FaLongArrowAltRight></FaLongArrowAltRight> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;