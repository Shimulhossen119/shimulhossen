import React from 'react'
import { contactImg } from "../../assets/index.js";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-gray-900 to-gray-900 p-4 sm:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center mb-8 lg:mb-0">
      <img
        className="w-full h-48 sm:h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">Shimul Hossen</h3>
        <p className="text-base sm:text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-sm sm:text-base text-gray-400 tracking-wide">
          With a strong foundation in the MERN stack (MongoDB, Express.js,
          React, Node.js) and a keen eye for design, I create dynamic,
          user-friendly web applications that deliver exceptional user
          experiences.
        </p>
        <p className="text-sm sm:text-base text-gray-400 items-center flex gap-2">
          Phone: <span className="text-lightText">+0881954874927</span>
        </p>
        <p>
          Email:{""}
          <span className="text-lightText">
            shimulhossen5487@gmail.com
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className='flex gap-4'>
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
    </div>
  )
}

export default ContactLeft