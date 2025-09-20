import { useState } from "react";
import { Link } from "react-scroll";
import { navlinksdata } from "../constans";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import profileImg from "../../assets/images/my.png";
import { motion } from "framer-motion";
// Change to your profile image path

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 ">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          tryp: "spring",
          stiffness: -100,
          damping: 25,
          delay: 0.3,
          duration: 1.2,
        }}
      >
        <h1 className="text-2xl ">
          SHIMUL{" "}
          <span className="text-designColor bg-slate-900 shadow-shadowOne">
            H
          </span>
          OSSEN
        </h1>
      </motion.div>
      {/* Desktop Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          tryp: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.4,
        }}
      >
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 ">
          {navlinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
      {/* Hamburger Icon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          tryp: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.5,
        }}
        className="mdl:hidden flex items-center"
      >
        <button
          className="text-3xl text-designColor focus:outline-none"
          onClick={() => setShowMenu(true)}
        >
          <svg width="32" height="32" fill="currentColor">
            <rect y="7" width="32" height="4" />
            <rect y="15" width="32" height="4" />
            <rect y="23" width="32" height="4" />
          </svg>
        </button>
      </motion.div>
      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex">
          <div className="w-[80vw] max-w-xs bg-[#161b22] h-full flex flex-col px-6 py-8 relative">
            {/* Profile & Close */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                tryp: "spring",
                stiffness: -100,
                damping: 25,
                delay: 0.3,
                duration: 1.2,
              }}
              className="flex items-center gap-4 mb-6"
            >
              <img
                src={profileImg}
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-white">
                Shimul Hossen
              </span>
              <motion.button
                whileTap={{ scale: 0.7 }}
                className="ml-auto text-2xl text-gray-400 hover:text-designColor"
                onClick={() => setShowMenu(false)}
              >
                <RxCross2 />
              </motion.button>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                tryp: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.4,
              }}
              className="text-sm text-gray-300 mb-8"
            >
              A passionate Full Stack Web Developer from Khulna, Bangladesh.
              With a strong foundation in the MERN stack (MongoDB, Express.js,
              React, Node.js) and a keen eye for design, I create dynamic,
              user-friendly web applications that deliver exceptional user
              experiences.
            </motion.p>
            {/* Navigation Links */}
            <motion.ul
              initial={{ opacity: 0, y: 0.5 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{
                duration: 0.8,

                delay: 0.7,
              }}
              className="flex flex-col gap-4 mb-8"
            >
              {navlinksdata.map(({ _id, title, link }) => (
                <li key={_id}>
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block text-base text-gray-300 hover:text-designColor py-2"
                    onClick={() => setShowMenu(false)}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 0.5 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{
                duration: 0.8,

                delay: 0.7,
              }}
              className="mt-auto"
            >
              <h2 className="text-sm uppercase font-titleFont mb-4 text-gray-400">
                FIND ME IN
              </h2>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/md.abraham.shimul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-12 h-12 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:text-designColor cursor-pointer duration-300">
                    <FaFacebookF />
                  </span>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-12 h-12 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:text-designColor cursor-pointer duration-300">
                    <FaTwitter />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-12 h-12 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:text-designColor cursor-pointer duration-300">
                    <FaLinkedinIn />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setShowMenu(false)} />
        </div>
      )}
    </div>
  );
};
export default Navbar;
