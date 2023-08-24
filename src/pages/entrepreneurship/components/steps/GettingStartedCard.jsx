import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "../../Entrepreneurship.css"

const GettingStartedCard = (props) => {
  return (
    <div className="flex mb-[2rem] mt-10 mb-[5rem] font-raleway 
    relative flex-col mx-2 pt-10 pb-60 px-5 bg-opacity-10 shadow-3xl hover:shadow-4xl 
    hover:bg-opacity-10 rounded-[30px] min-w-[32%] h-96 bg-webGreen my-[1rem]">
      
      
      <h3 className="border-hidden rounded-[100px] mb-10 bg-webGreen bg-opacity-70
       text-3xl text-white font-semibold w-[60px] h-[60px] flex justify-center items-center
        p-3  ">
        {props.number}
      </h3>
      <p className="text-2xl tracking-wide">{props.description}</p>
      {/* <button className="absolute xxs:text-sm md:text-base font-semibold  xxs:right-1 bottom-1 p-3 border-none border-2 mb-5 text-xl hover:text-webGreen">
        {props.btn}
      </button> */}
       <div
  style={{
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: '10px',
  }}
>
  <FaLongArrowAltRight size={50} color="green" />
</div>
    </div>
  );
};

export default GettingStartedCard;