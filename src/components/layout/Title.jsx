import React from "react";

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 pt-6 sm:pt-10 font-titleFont mb-8 sm:mb-14">
      <h3 className="text-xs sm:text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-2xl sm:text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        {des}
      </h1>
    </div>
  );
};

export default Title;