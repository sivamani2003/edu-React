import React from "react";
import '../../Entrepreneurship.css'
import { FaLongArrowAltRight } from "react-icons/fa";

const GettingStarted = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <h1 className="text-center text-3xl md:text-5xl font-bold">Getting <span className="text-pink">Started</span> It's <span className="text-pink">Easy</span></h1>
      
      
      <div data-aos="fade-up" className="grid md:grid-cols-3 gap-x-4 gap-y-8 mt-10">
        
        
        <div className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
          <div className="pl-8 pt-4">
            <p className="rounded-full flex justify-center items-center text-white font-bold bg-[#1ab79d] w-[70px] h-[70px]">01 </p>
          </div>
          <div className='card-body'>
            <h2 className="card-title my-2">Snakes Game (Arrays)</h2>
            <p>This game is very similar to singly-linked lists, assuming that the snake head is the linked list tail and the snake tail is the linked list head.</p>
            <div>
              <button className="allBtn bg-transparent text-black">Learn more<FaLongArrowAltRight></FaLongArrowAltRight> </button>
            </div>
          </div>
        </div>

        <div className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
          <div className="pl-8 pt-4">
            <p className="rounded-full flex justify-center items-center text-white font-bold bg-[#1ab79d] w-[70px] h-[70px]">02 </p>
          </div>
          <div className='card-body'>
            <h2 className="card-title my-2">Snakes Game (Arrays)</h2>
            <p>This game is very similar to singly-linked lists, assuming that the snake head is the linked list tail and the snake tail is the linked list head.</p>
            <div>
              <button className="allBtn bg-transparent text-black">Learn more<FaLongArrowAltRight></FaLongArrowAltRight> </button>
            </div>
          </div>
        </div>

        <div className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
          <div className="pl-8 pt-4">
            <p className="rounded-full flex justify-center items-center text-white font-bold bg-[#1ab79d] w-[70px] h-[70px]">03 </p>
          </div>
          <div className='card-body'>
            <h2 className="card-title my-2">Snakes Game (Arrays)</h2>
            <p>This game is very similar to singly-linked lists, assuming that the snake head is the linked list tail and the snake tail is the linked list head.</p>
            <div>
              <button className="allBtn bg-transparent text-black">Learn more<FaLongArrowAltRight></FaLongArrowAltRight> </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default GettingStarted;
