import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { RiStarFill } from "react-icons/ri";
import Slider from "react-slick";
import { dp1, dp3, dp5, quote, wdp11, wdp2, wdp3 } from "../../assets";
import Title from "../layout/Title";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-12 h-12 bg-gray-700 hover:bg-slate-600 duration-300 rounded-md text-2xl text-gray-200 flex justify-center items-center absolute top-4 right-4 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-12 h-12 bg-gray-700 hover:bg-slate-600 duration-300 rounded-md text-2xl text-gray-200 flex justify-center items-center absolute top-4 left-4 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div>
        <ul className="flex gap-3 justify-center mt-6">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full cursor-pointer ${
          i === dotActive ? "bg-designColor" : "bg-gray-500"
        }`}
      ></div>
    ),
  };
  return (
    <div id="testimonial" className="w-full py-16 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* Card 1 */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col md:flex-row justify-between gap-6 md:gap-0">
              <div className="md:w-[35%] w-full bg-gradient-to-r from-gray-900 to-gray-900 p-6 md:p-8 rounded-lg shadow-shadowOne flex flex-col gap-6 justify-center items-center md:items-start">
                <img
                  className="h-56 md:h-72 w-full rounded-lg object-cover"
                  src={dp1}
                  alt="testimonial"
                />
                <div className="w-full text-center md:text-left">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold">Jone Duone Joe</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="md:w-[60%] w-full flex flex-col justify-between bg-slate-800 rounded-lg">
                <img className="w-10 md:w-[20%] mx-auto md:mx-0 mt-4 md:mt-0" src={quote} alt="quote" />
                <div className="w-full py-6 md:py-10 bg-gradient-to-r from-black to-slate-900 rounded-lg shadow-shadowOne p-4 md:p-8 flex flex-col justify-center gap-6">
                  <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6 border-b-2 border-b-white gap-2">
                    <div>
                      <h3 className="text-lg md:text-2xl font-medium tracking-wide">
                        Ecommerce
                      </h3>
                      <p className="text-xs md:text-base">via Upwork -Mar 4, 2023 - Aug 30, 2024</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <RiStarFill key={i} className="text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm md:text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    You delivered a sleek, responsive design with smooth
                    navigation and solid backend functionality. The product
                    pages load quickly, and the checkout process is seamless. I
                    especially appreciated the attention to detail in the UI and
                    the clean code structure. A few minor tweaks could elevate
                    it even further, but overall, it's a fantastic build that
                    shows real skill and dedication. Highly recommended!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat for other cards, just update images/texts */}
          {/* Card 2 */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col md:flex-row justify-between gap-6 md:gap-0">
              <div className="md:w-[35%] w-full bg-gradient-to-r from-slate-800 to-gray-900 p-6 md:p-8 rounded-lg shadow-shadowOne flex flex-col gap-6 justify-center items-center md:items-start">
                <img
                  className="h-56 md:h-72 w-full rounded-lg object-cover"
                  src={wdp2}
                  alt="testimonial"
                />
                <div className="w-full text-center md:text-left">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold">James Thompson</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="md:w-[60%] w-full flex flex-col justify-between bg-slate-800 rounded-lg">
                <img className="w-10 md:w-[20%] mx-auto md:mx-0 mt-4 md:mt-0" src={quote} alt="quote" />
                <div className="w-full py-6 md:py-10 bg-gradient-to-r from-black to-slate-900 rounded-lg shadow-shadowOne p-4 md:p-8 flex flex-col justify-center gap-6">
                  <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6 border-b-2 border-b-white gap-2">
                    <div>
                      <h3 className="text-lg md:text-2xl font-medium tracking-wide">
                        Work Out Websight Developed
                      </h3>
                      <p className="text-xs md:text-base">via Upwork -Feb 4, 2022 - Aug 30, 2023</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <RiStarFill key={i} className="text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm md:text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    You did an incredible job developing my fitness site. The
                    design is clean, modern, and super user-friendly. Everything
                    from the workout plans to the progress tracking features
                    works flawlessly. I especially loved the responsive
                    layout—it looks great on both desktop and mobile! His
                    attention to detail and ability to bring ideas to life
                    really impressed me. Highly recommended for anyone looking
                    to build a powerful, professional web presence!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col md:flex-row justify-between gap-6 md:gap-0">
              <div className="md:w-[35%] w-full bg-gradient-to-r from-gray-900 to-gray-900 p-6 md:p-8 rounded-lg shadow-shadowOne flex flex-col gap-6 justify-center items-center md:items-start">
                <img
                  className="h-56 md:h-72 w-full rounded-lg object-cover"
                  src={dp3}
                  alt="testimonial"
                />
                <div className="w-full text-center md:text-left">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold">William Anderson</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="md:w-[60%] w-full flex flex-col justify-between bg-slate-800 rounded-lg">
                <img className="w-10 md:w-[20%] mx-auto md:mx-0 mt-4 md:mt-0" src={quote} alt="quote" />
                <div className="w-full py-6 md:py-10 bg-gradient-to-r from-black to-slate-900 rounded-lg shadow-shadowOne p-4 md:p-8 flex flex-col justify-center gap-6">
                  <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6 border-b-2 border-b-white gap-2">
                    <div>
                      <h3 className="text-lg md:text-2xl font-medium tracking-wide">
                        Sport Web App Developed
                      </h3>
                      <p className="text-xs md:text-base">via Fiverr -Mar 4, 2024 - Oct 01, 2025</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <RiStarFill key={i} className="text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm md:text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    The interface is sleek, intuitive, and built for
                    performance. Live scores, player stats, and scheduling
                    features are all integrated seamlessly, making the user
                    experience smooth and engaging. The responsiveness across
                    devices is impressive, and the backend is rock-solid. His
                    professionalism and technical skill really shine through. If
                    you're looking for a developer who understands both tech and
                    user needs—Shimul is the one
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col md:flex-row justify-between gap-6 md:gap-0">
              <div className="md:w-[35%] w-full bg-gradient-to-r from-gray-900 to-gray-900 p-6 md:p-8 rounded-lg shadow-shadowOne flex flex-col gap-6 justify-center items-center md:items-start">
                <img
                  className="h-56 md:h-72 w-full rounded-lg object-cover"
                  src={wdp3}
                  alt="testimonial"
                />
                <div className="w-full text-center md:text-left">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold">Katherine Miller</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="md:w-[60%] w-full flex flex-col justify-between bg-slate-800 rounded-lg">
                <img className="w-10 md:w-[20%] mx-auto md:mx-0 mt-4 md:mt-0" src={quote} alt="quote" />
                <div className="w-full py-6 md:py-10 bg-gradient-to-r from-black to-slate-900 rounded-lg shadow-shadowOne p-4 md:p-8 flex flex-col justify-center gap-6">
                  <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6 border-b-2 border-b-white gap-2">
                    <div>
                      <h3 className="text-lg md:text-2xl font-medium tracking-wide">
                        Shoping Webpage Desing
                      </h3>
                      <p className="text-xs md:text-base">via Upwork -jul 4, 2023 - Feb 20, 2024</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <RiStarFill key={i} className="text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm md:text-base font-titleFont text-gray-900 font-medium tracking-wide leading-6">
                    You delivered a stunning shopping webpage that’s both
                    visually appealing and incredibly user-friendly. The layout
                    is clean, the product cards are well-organized, and the
                    navigation feels effortless. I especially loved the
                    responsive design—it looks flawless on mobile and desktop.
                    The attention to detail in the UI and smooth integration of
                    features like filters, cart, and checkout really show his
                    skill. A fantastic job from a talented developer
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col md:flex-row justify-between gap-6 md:gap-0">
              <div className="md:w-[35%] w-full bg-gradient-to-r from-gray-900 to-gray-900 p-6 md:p-8 rounded-lg shadow-shadowOne flex flex-col gap-6 justify-center items-center md:items-start">
                <img
                  className="h-56 md:h-72 w-full rounded-lg object-cover"
                  src={dp5}
                  alt="testimonial"
                />
                <div className="w-full text-center md:text-left">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold">Ethan Parker</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="md:w-[60%] w-full flex flex-col justify-between bg-slate-800 rounded-lg">
                <img className="w-10 md:w-[20%] mx-auto md:mx-0 mt-4 md:mt-0" src={quote} alt="quote" />
                <div className="w-full py-6 md:py-10 bg-gradient-to-r from-black to-slate-900 rounded-lg shadow-shadowOne p-4 md:p-8 flex flex-col justify-center gap-6">
                  <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6 border-b-2 border-b-white gap-2">
                    <div>
                      <h3 className="text-lg md:text-2xl font-medium tracking-wide">
                        Ecommerce Websight Desing
                      </h3>
                      <p className="text-xs md:text-base">via Upwork -Mar 4, 2023 - Aug 30, 2024</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <RiStarFill key={i} className="text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm md:text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    You delivered a sleek, responsive design with smooth
                    navigation and solid backend functionality. The product
                    pages load quickly, and the checkout process is seamless. I
                    especially appreciated the attention to detail in the UI and
                    the clean code structure. A few minor tweaks could elevate
                    it even further, but overall, it's a fantastic build that
                    shows real skill and dedication. Highly recommended
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col md:flex-row justify-between gap-6 md:gap-0">
              <div className="md:w-[35%] w-full bg-gradient-to-r from-gray-900 to-gray-900 p-6 md:p-8 rounded-lg shadow-shadowOne flex flex-col gap-6 justify-center items-center md:items-start">
                <img
                  className="h-56 md:h-72 w-full rounded-lg object-cover"
                  src={wdp11}
                  alt="testimonial"
                />
                <div className="w-full text-center md:text-left">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold">Caleb Morgan</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="md:w-[60%] w-full flex flex-col justify-between bg-slate-800 rounded-lg">
                <img className="w-10 md:w-[20%] mx-auto md:mx-0 mt-4 md:mt-0" src={quote} alt="quote" />
                <div className="w-full py-6 md:py-10 bg-gradient-to-r from-black to-slate-900 rounded-lg shadow-shadowOne p-4 md:p-8 flex flex-col justify-center gap-6">
                  <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6 border-b-2 border-b-white gap-2">
                    <div>
                      <h3 className="text-lg md:text-2xl font-medium tracking-wide">
                        Ecommerce Websight Developed
                      </h3>
                      <p className="text-xs md:text-base">via Upwork -Mar 4, 2023 - Aug 30, 2024</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <RiStarFill key={i} className="text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm md:text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    You delivered a sleek, responsive design with smooth
                    navigation and solid backend functionality. The product
                    pages load quickly, and the checkout process is seamless. I
                    especially appreciated the attention to detail in the UI and
                    the clean code structure. A few minor tweaks could elevate
                    it even further, but overall, it's a fantastic build that
                    shows real skill and dedication. Highly recommended!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;