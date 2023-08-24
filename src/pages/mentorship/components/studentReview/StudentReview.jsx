import React from "react";
import '../../style.css'

const StudentReview = (props) => {
  const { video } = props;
  return (
    <>
      <div className=" mentorship-card-shadow overflow-hidden md:ml-5 lg:ml-8 px-10  p-2  min-w-[33%] min-h-[99%] md:w-[95%]   rounded-[30px] lg:w-[95%] lg:h-[98%] ">
        <div className="flex items-center">
          <img src={props.img} alt="mentor img" className="sm:w-5 sm:h-5 md:w-11 md:h-11 mt-5 ml-5" />
          <div className=" md:ml-5 ">
            <p className="pt-5  sm:text-2xl xxs:text-xl">{props.name}</p>
            <p className=" m text-webRed sm:text-2xl xxs:text-lg font-semibold text-left">
              {props.companyname}
            </p>
          </div>
        </div>

        <p className="text-base text-justify tracking-wide md:mx-5 lg:mx-3 pt-5">
          {props.para}
        </p>
        <div className="card-body flex justify-center min-h-[50%] min-w-[30%] items-center">
          {video ? (
            <iframe
              className=" sm:w-[300px] sm:h-[350px] min-w-[200px] min-h-[30%]  md:w-[300px] md:h-[250px] lg:w-[280px] lg:h-[200px] rounded-3xl border-solid border-[#1ab79d]"
              src={video}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      </>
  );
};

export default StudentReview;
