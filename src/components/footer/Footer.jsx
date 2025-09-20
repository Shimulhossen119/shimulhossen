import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Features from "../features/Features";

const Footer = () => {
  return (
    <div className="w-full h-auto py-20 border-b-[1px] border-b-gray-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      <div className="w-full h-full flex flex-col gap-8 items-center lg:items-start">
        <h1 className="w-34 text-2xl font-bold">
          SHIMUL{" "}
          <span className="text-designColor hover:bg-gradient-to-r from-red-400 to-slate-600">
            H
          </span>
          OSSEN
        </h1>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/md.abraham.shimul">
            <span className="bannerIcon">
              <FaFacebook />
            </span>
          </a>
          <a href="https://github.com/Shimulhossen119">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>

          <a href="https://www.linkedin.com/in/shimul-hossen-85b94037a/">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center lg:items-start">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          
          
          <li>
            <span  className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Services{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition duration-300"></span>
            </span>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/shimul-hossen-85b94037a/"> <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Portfolio{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition duration-300"></span>
            </span></a>
           
          </li>
          
        </ul>
      </div>
      <div className="w-full h-full flex flex-col items-center lg:items-start">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Over Right{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Pricing{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition duration-300"></span>
            </span>
          </li>
          
          
        </ul>
      </div>
      <div className="w-full h-full flex flex-col items-center lg:items-start">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <a href="https://github.com/Shimulhossen119?tab=repositories"> <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Open Source{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition duration-300"></span>
            </span></a>
           
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Support{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition duration-300"></span>
            </span>
          </li>
         
          
         
        </ul>
      </div>
    </div>
  );
};

export default Footer;
