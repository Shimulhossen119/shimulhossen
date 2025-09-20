import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col lg:flex-row gap-8 lg:gap-20"
    >
      <div>
        <div className="py-8 sm:py-12 font-titleFont">
          <p className="text-xs sm:text-sm text-designColor tracking-[4px]">
            2023 - 2025
          </p>
          <h2 className="text-2xl sm:text-2xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-8 sm:mt-14   border-l-[4px] sm:border-l-[6px] border-l-gray-400 border-opacity-30 flex flex-col gap-8">
          <ResumeCard
            title="Database Programming"
            subTitle="Ideal Computer Traning institute"
            result="A+/A+"
            des="certificate in national skill standerd course,Basic Computer Concept – Intro to computer fundamentals

Office Management – MS Office, file handling, and admin tools

"
          />
          <ResumeCard
            title="Higher Secondary Certificate"
            subTitle="M.G.D College (2023-2025)"
            result="4/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.The Higher Secondary Certificate (HSC) is a nationally recognized academic qualification awarded after successful completion of Class XI and XII in Bangladesh."
          />
            <ResumeCard
            title="Secondary School Education"
            subTitle="M.G.P.M High School"
            result="3.61/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.Secondary education in Bangladesh is a vital stage that bridges primary schooling and higher education. It equips students with foundational academic knowledge, life skills, and prepares them for specialized study or vocational training."
          />
        </div>
      </div>

      <div>
        <div className="py-8 sm:py-12 font-titleFont">
          <p className="text-xs sm:text-sm text-designColor tracking-[4px]">
            2023 - 2025
          </p>
          <h2 className="text-1xl sm:text-3xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-8 sm:mt-14 lg:w-full border-l-[4px] sm:border-l-[6px] border-l-gray-400 border-opacity-30 flex flex-col gap-8">
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="RNIT Developer Team - (2023-2024)"
            result="BANGLADESH"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Bangladesh isn't easy."
          />
          <ResumeCard
            title="Font-end Developer"
            subTitle="Ecosphere"
            result="Bangladesh"
            des="The Bangladesh economy has grown strongly over recent years, having transformed itself from a product and innovation-based economy."
          />
          <ResumeCard
            title="MARN-STAKE Developer"
            subTitle="QuickAi"
            result="Bangladesh"
            des="Developed a robust web application using the MARN stack (MongoDB, Express.js, React, Node.js), implementing secure user authentication, dynamic data management, and responsive UI components. Integrated RESTful APIs for seamless communication between front-end and back-end, optimized performance, and ensured scalability for future enhancements."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
