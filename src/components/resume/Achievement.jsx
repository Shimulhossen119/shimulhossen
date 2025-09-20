import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col lg:flex-row gap-8 lg:gap-20"
    >
      <div>
        <div className="py-8 sm:py-5 font-titleFont">
          <p className="text-xs sm:text-sm text-designColor tracking-[4px]">2012 - 2025</p>
          <h2 className="text-2xl sm:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-8 sm:mt-14 w-full border-l-[4px] sm:border-l-[6px] border-l-gray-400 border-opacity-30 flex flex-col gap-20">
          <ResumeCard
            title="Database Programming"
            subTitle="Ideal Computer Traning Institute"
            result="Success"
            des="Certificate in national skill standerd course, Bangladesh Technical Education Board"
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="TechNova Solutions (Remote)"
            result="Success"
            des="Collaborated with a cross-functional team to develop responsive web interfaces using React.js, Tailwind CSS, and Chakra UI. Integrated reusable UI components into a Vite-based project, improving development speed and consistency. Debugged and resolved UI/UX issues, enhancing user experience across multiple devices."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Solo Project: Gaming Gear Finder (BD Market)"
            result="Success"
            des="Built a product comparison site using JavaScript and Tailwind CSS, helping users find the best gaming phones under budget."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;