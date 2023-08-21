import React from "react";
import processImg from "../../images/processImg.png";

const RoadMap = (props) => {
  return (
    <div className="max-w-7xl mx-auto mt-20 md:mt-28">

      <h1 className="text-center text-3xl md:text-5xl font-bold">How It <span className="text-pink">Works?</span></h1>

      <div className="md:flex gap-x-8 md:mx-0 mx-6 mt-10">

        <div className="mb-16 md:mb-0">
          <h2 className="text-pink mb-4 md:text-2xl lg:text-3xl ">
            01
          </h2>
          <img
            src={processImg}
            alt="process icon"
            className="w-20 h-20 md:w-24 md:h-24 road-map-shadow"
          />
          <h2 className="mt-8 md:mt-12 text-pink text-2xl md:text-3xl">
            Heading
          </h2>
          <p className="xxs:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
            eveniet doloremque harum minima atque est, doloribus, exercitationem
            itaque odio tempora quos necessitatibus.
          </p>
        </div>

        <div className="md:mt-24 mb-16 md:mb-0">
          <h2 className="text-pink mb-4 md:text-2xl lg:text-3xl ">
            02
          </h2>
          <img
            src={processImg}
            alt="process icon"
            className="w-20 h-20 md:w-24 md:h-24 road-map-shadow"
          />
          <h2 className="mt-8 md:mt-12 text-pink text-2xl md:text-3xl">
            Heading
          </h2>
          <p className="xxs:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
            eveniet doloremque harum minima atque est, doloribus, exercitationem
            itaque odio tempora quos necessitatibus.
          </p>
        </div>

        <div className="mb-16 md:mb-0">
          <h2 className="text-pink mb-4 md:text-2xl lg:text-3xl ">
            03
          </h2>
          <img
            src={processImg}
            alt="process icon"
            className="w-20 h-20 md:w-24 md:h-24 road-map-shadow"
          />
          <h2 className="mt-8 md:mt-12 text-pink text-2xl md:text-3xl">
            Heading
          </h2>
          <p className="xxs:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
            eveniet doloremque harum minima atque est, doloribus, exercitationem
            itaque odio tempora quos necessitatibus.
          </p>
        </div>

        <div className="md:mt-24 mb-16 md:mb-0">
          <h2 className="text-pink mb-4 md:text-2xl lg:text-3xl ">
            04
          </h2>
          <img
            src={processImg}
            alt="process icon"
            className="w-20 h-20 md:w-24 md:h-24 road-map-shadow"
          />
          <h2 className="mt-8 md:mt-12 text-pink text-2xl md:text-3xl">
            Heading
          </h2>
          <p className="xxs:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
            eveniet doloremque harum minima atque est, doloribus, exercitationem
            itaque odio tempora quos necessitatibus.
          </p>
        </div>

        <div className="mb-16 md:mb-0">
          <h2 className="text-pink mb-4 md:text-2xl lg:text-3xl ">
            05
          </h2>
          <img
            src={processImg}
            alt="process icon"
            className="w-20 h-20 md:w-24 md:h-24 road-map-shadow"
          />
          <h2 className="mt-8 md:mt-12 text-pink text-2xl md:text-3xl">
            Heading
          </h2>
          <p className="xxs:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
            eveniet doloremque harum minima atque est, doloribus, exercitationem
            itaque odio tempora quos necessitatibus.
          </p>
        </div>

      </div>
    </div>
  );
};

export default RoadMap;
