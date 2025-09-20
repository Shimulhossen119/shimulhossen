import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} className="w-full flex gap-20">
        <div>
          <div className="py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">
              2023 - 2025
            </p>
            <h2 className="text-4xl font-bold">Job Experience</h2>
          </div>
          <div className="<mt-14 w-full h-[1000px] border-l-[6px] border-l-gray-400 border-opacity-30 flex flex-col ">
             <ResumeCard
              title="Web Developer"
              subTitle="Ecosphere"
              result="Bangladesh"
              des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
            />
            <ResumeCard
              title="Front-end Developer"
              subTitle="QuickAi"
              result="Bangladesh"
              des="The Bangladesh economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy"
            />
            <ResumeCard
              title="Mern-Stack Developer"
              subTitle=""
              result="Bangladesh"
              des="Development using JavaScript, making development faster, more efficient, and cost-effective. MERN developers are highly skilled in JavaScript, HTML, CSS, and the specific MERN technologies"
            />
            
          </div>
        </div>
        <div>
          
        </div>
      </motion.div>
  )
}

export default Experience