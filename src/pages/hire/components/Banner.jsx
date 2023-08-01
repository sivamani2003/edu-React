import { Bounce, Reveal, Roll } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="w-full px-5 lg:px-16">
      <div className="flex flex-col-reverse lg:flex-row w-full">
        <div className="w-full lg:w-1/2 my-auto">
          <Reveal triggerOnce>
            <Roll>
              <img
                className="w-full transition duration-300 ease-in-out hover:scale-110 rounded-md md:px-10"
                src="https://i.ibb.co/vHfGzpS/22635325-6666301.jpg"
                alt=""
              />
            </Roll>
          </Reveal>
        </div>
        <div className="w-full lg:w-1/2 my-auto">
          <Reveal triggerOnce>
            <Bounce>
              <h1 className="text-2xl lg:text-[45px] leading-snug font-bold">
                Looking to hire{" "}
                <span className=" text-[#ee4962]">top-notch</span> product
                managers?
              </h1>
            </Bounce>
          </Reveal>
          <Reveal triggerOnce>
            <Bounce>
              <p className="pt-5 text-justify text-base lg:text-lg">
                Discover top-notch product managers with extensive industry
                experience, strategic vision, and a customer-centric approach.
                Our agile leaders excel in cross-functional collaboration, using
                data-driven insights for innovation. They ensure your products
                outshine the competition, while passion for technology keeps you
                ahead. Excellent communication skills guarantee seamless
                coordination with stakeholders. Trust our experts to build your
                dream product management team, driving unparalleled success in
                today is competitive market. Contact us now to get started!
              </p>
            </Bounce>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Banner;
