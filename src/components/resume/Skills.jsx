import { motion } from "framer-motion";
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col lg:flex-row gap-8 lg:gap-20"
    >
      {/* Design Skill */}
      <div className="w-full lg:w-1/2">
        <div className="py-8 sm:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-xs sm:text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-2xl sm:text-4xl font-bold">Design Skill</h2>
        </div>
        <div className="mt-8 sm:mt-14 w-full flex flex-col gap-6">
          {/* Photoshot */}
          <div className="overflow-x-hidden">
            <div className="flex justify-between items-center">
              <p className="text-sm uppercase font-medium">PHOTOSHOT</p>
              <span className="text-sm">100%</span>
            </div>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          {/* Figma */}
          <div className="overflow-x-hidden">
            <div className="flex justify-between items-center">
              <p className="text-sm uppercase font-medium">FIGMA</p>
              <span className="text-sm">90%</span>
            </div>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          {/* Adobe XD */}
          <div className="overflow-x-hidden">
            <div className="flex justify-between items-center">
              <p className="text-sm uppercase font-medium">ADOBE XD.</p>
              <span className="text-sm">60%</span>
            </div>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          {/* Adobe Illustrator */}
          <div className="overflow-x-hidden">
            <div className="flex justify-between items-center">
              <p className="text-sm uppercase font-medium">ADOBE ILLUSTRATOR</p>
              <span className="text-sm">70%</span>
            </div>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          {/* Spline */}
          <div className="overflow-x-hidden">
            <div className="flex justify-between items-center">
              <p className="text-sm uppercase font-medium">SPLINE</p>
              <span className="text-sm">60%</span>
            </div>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          {/* Blender */}
          <div className="overflow-x-hidden">
            <div className="flex justify-between items-center">
              <p className="text-sm uppercase font-medium">BLENDER</p>
              <span className="text-sm">50%</span>
            </div>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          {/* Design */}
          <div className="overflow-x-hidden">
            <div className="flex justify-between items-center">
              <p className="text-sm uppercase font-medium">DESIGN</p>
              <span className="text-sm">95%</span>
            </div>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
        </div>
      </div>
      {/* Development Skill (unchanged, add responsive classes if needed) */}
      <div className="w-full lg:w-1/2">
        <div className="py-8 sm:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-xs sm:text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-2xl sm:text-4xl font-bold">Development Skill</h2>
        </div>
        <div className="mt-8 sm:mt-14 w-full flex flex-col gap-6">
          {/* React JS */}
          <div className="overflow-x-hidden">
            <div className="flex justify-between items-center">
              <p className="text-sm uppercase font-medium">REACT JS</p>
              <span className="text-sm">90%</span>
            </div>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          {/* Node js */}
          <div className="overflow-x-hidden">
            <div className="flex justify-between items-center">
              <p className="text-sm uppercase font-medium">Node JS</p>
              <span className="text-sm">70%</span>
            </div>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          {/* Express JS */}
          <div className="overflow-x-hidden">
            <div className="flex justify-between items-center">
              <p className="text-sm uppercase font-medium">Express JS</p>
              <span className="text-sm">60%</span>
            </div>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          {/* MongoDB */}
          <div className="overflow-x-hidden">
            <div className="flex justify-between items-center">
              <p className="text-sm uppercase font-medium">MongoDB</p>
              <span className="text-sm">80%</span>
            </div>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          {/* CSS 3 */}
          <div className="overflow-x-hidden">
            <div className="flex justify-between items-center">
              <p className="text-sm uppercase font-medium">CSS 3</p>
              <span className="text-sm">80%</span>
            </div>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          {/* JavaScript */}
          <div className="overflow-x-hidden">
            <div className="flex justify-between items-center">
              <p className="text-sm uppercase font-medium">JAVASCRIPT</p>
              <span className="text-sm">70%</span>
            </div>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          {/* Express JS */}
          <div className="overflow-x-hidden">
            <div className="flex justify-between items-center">
              <p className="text-sm uppercase font-medium">EXPRESS JS</p>
              <span className="text-sm">60%</span>
            </div>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
        </div>
      </div>
      </motion.div>
  );
};

export default Skills;