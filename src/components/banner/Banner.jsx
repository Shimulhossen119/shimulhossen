import { FaFacebookF, FaLinkedinIn, FaReact,FaGithub } from "react-icons/fa";
import { SiFigma, SiNextdotjs, SiTailwindcss,SiMongodb,SiNodedotjs,SiExpress,SiJavascript,SiRedux } from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { bannerImg } from "../../assets";
import { motion } from "framer-motion";



const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "UI Designer.",
      "MERN Stack Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div
      id="home"
      className="w-full pt-8 pb-16 flex flex-col gap-10 lg:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      {/* LeftBanner */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8 px-4 sm:px-8">
        <div className="flex flex-col gap-4">
          <motion.h4 initial={{ opacity: 0, y: 0.5 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{
              duration: 0.8,

              delay: 0.7,
            }} className="text-xs sm:text-sm font-normal text-gray-300">
            WELCOME TO MY WORLD
          </motion.h4>
          <motion.h1 initial={{ opacity: 0, y: 0.5 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{
              duration: 0.8,

              delay: 0.8,
            }} className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-designColor black"> Shimul Hossen</span>
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 0.5 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{
              duration: 0.8,

              delay: 0.8,
            }} className="text-xl sm:text-3xl font-bold text-white leading-tight">
            A <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 0.5 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{
              duration: 0.8,

              delay: 1.10,
            }} className="text-sm sm:text-base font-bodyFont leading-6 tracking-wide text-gray-300">
            A passionate Full Stack Web Developer from Khulna, Bangladesh. With
            a strong foundation in the MERN stack (MongoDB, Express.js, React,
            Node.js) and a keen eye for design, I create dynamic, user-friendly
            web applications that deliver exceptional user experiences. I hold a
            Bachelor of Science (B.Sc) in Computer Science and have honed my
            skills through years of hands-on experience in both front-end and
            back-end development. My expertise spans JavaScript, HTML5, CSS3,
            and other programming languages such as Python and PHP. I thrive on
            solving complex problems and bringing creative solutions to life.
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0, y: 0.5 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{
              duration: 0.8,

              delay: 1.20,
            }} className="mt-6">
          <h2 className="text-sm sm:text-base uppercase font-titleFont mb-4 text-gray-300">
            FIND ME IN
          </h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/md.abraham.shimul">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://github.com/Shimulhossen119"><span className="bannerIcon">
              <FaGithub />
            </span></a>
            
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 0.5 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{
              duration: 0.8,

              delay: 1.30,
            }} className="mt-6">
          <h2 className="text-sm sm:text-base uppercase font-titleFont mb-4 text-gray-300">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            


          </div>
          <div className="flex gap-4 mt-4">
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
          <div className="flex gap-4 mt-4">
            <span className="bannerIcon">
              <SiRedux/>
            </span>

          </div>
        </motion.div>
      </div>
      {/* RightBanner */}
      <motion.div initial={{ opacity: 0, y: 0.5 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{
              duration: 0.8,

              delay: 1.40,
            }} className="w-full lg:w-1/2  flex justify-center items-center relative mt-0 lg:mt-0 px-4">
        <img
          className="w-[220px] h-[200px] sm:w-[300px] sm:h-[400px] lg:w-[500px] lg:h-[600px]  z-10 object-cover rounded-lg"
          src={bannerImg}
          alt="bannerImg"
        />
        <div className="absolute bottom-0 w-[220px] h-[120px] sm:w-[300px] sm:h-[200px] lg:w-[500px] lg:h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327c6] shadow-shadowOne flex justify-center items-center"></div>
        <div className="absolute xl:w-[500px] xl:h-[500px] z-1 lg:h-[400px]">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            id="blobSvg"
          >
            <path fill="#b91c1c">
              <animate
                attributeName="d"
                dur={"10000ms"}
                repeatCount={"indefinite"}
                values="
    M464,312Q465,374,406.5,397Q348,420,299,458.5Q250,497,198,463.5Q146,430,97.5,398Q49,366,54.5,308Q60,250,73,202.5Q86,155,113.5,108Q141,61,195.5,33Q250,5,312.5,19.5Q375,34,393,95.5Q411,157,437,203.5Q463,250,464,312Z;

    M434.5,305.5Q443,361,409,413.5Q375,466,312.5,469.5Q250,473,204.5,440Q159,407,104.5,386Q50,365,46,307.5Q42,250,63.5,202.5Q85,155,113,108Q141,61,195.5,41Q250,21,303,44Q356,67,409,97.5Q462,128,444,189Q426,250,434.5,305.5Z;

    M442.46514,300.94849Q427.06973,351.89699,400.27628,408.18991Q373.48283,464.48283,311.74142,475.18938Q250,485.89594,201.08637,452.89594Q152.17274,419.89594,97.67274,394.72372Q43.17274,369.55151,45.24142,309.77575Q47.31009,250,55.91416,196.43132Q64.51822,142.86265,101.62123,100.41416Q138.72425,57.96566,194.36212,36.44849Q250,14.93132,304.13788,38.68991Q358.27575,62.44849,405.96566,97.5Q453.65557,132.55151,455.75806,191.27575Q457.86055,250,442.46514,300.94849Z;

    M452.86549,299.12545Q419.75272,348.25091,390.00906,394.88904Q360.2654,441.52717,305.1327,461.26902Q250,481.01087,194.00725,462.99275Q138.01449,444.97464,109.35824,396.37636Q80.70199,347.77808,54.36368,298.88904Q28.02536,250,45.63451,195.99819Q63.24366,141.99638,100.24728,98.74909Q137.25091,55.50181,193.62545,54.851Q250,54.20018,310.49275,47.48732Q370.98551,40.77446,411.74185,87.01268Q452.49819,133.25091,469.23823,191.62545Q485.97826,250,452.86549,299.12545Z;

    M454.6497,308.35334Q452.16183,366.70667,407.05698,405.45516Q361.95212,444.20364,305.97606,465.77849Q250,487.35334,190.29939,472.65273Q130.59879,457.95212,113.57485,398.12576Q96.55091,338.29939,58.77545,294.1497Q21,250,41.29939,195.6497Q61.59879,141.29939,97.17364,94.32333Q132.74848,47.34727,191.37424,42.79333Q250,38.23938,299.3203,58.65273Q348.6406,79.06608,379.98787,117.93728Q411.33514,156.80849,434.23635,203.40425Q457.13756,250,454.6497,308.35334Z;

    M466.76505,306.93374Q447.77913,363.86748,408.96687,411.06626Q370.15461,458.26505,310.0773,471.0773Q250,483.88956,196.13252,460.20182Q142.26505,436.51408,103.27913,396.96687Q64.29321,357.41965,47.246,303.70983Q30.19878,250,53.26505,199.58835Q76.33131,149.1767,107.74296,104.23191Q139.15461,59.28713,194.5773,34.38956Q250,9.492,309.77609,26.27113Q369.55218,43.05026,412.83931,86.69382Q456.12644,130.33739,470.9387,190.16869Q485.75096,250,466.76505,306.93374Z;

    M452.5,296.5Q412,343,381.5,384Q351,425,300.5,454Q250,483,205.5,443Q161,403,117.5,377.5Q74,352,68.5,301Q63,250,51.5,189.5Q40,129,97,106.5Q154,84,202,63.5Q250,43,294,70.5Q338,98,392.5,117Q447,136,470,193Q493,250,452.5,296.5Z;

    M426.30912,297.47003Q414.9101,344.94007,380.04495,380.11987Q345.1798,415.29967,297.5899,456.42508Q250,497.55049,198.70977,462.88567Q147.41954,428.22085,121.86515,383.80521Q96.31075,339.38958,84.50554,294.69479Q72.70033,250,66.5355,195.3202Q60.37068,140.64039,111.06547,119.11042Q161.76026,97.58046,205.88013,69.3202Q250,41.05993,308.06547,44.79414Q366.13094,48.52834,400.74528,95.65928Q435.35961,142.79023,436.53388,196.39511Q437.70814,250,426.30912,297.47003Z;

    M449.5,303.5Q436,357,396.5,396.5Q357,436,303.5,467Q250,498,191,476Q132,454,114.5,396Q97,338,64,294Q31,250,42.5,193.5Q54,137,93.5,92.5Q133,48,191.5,38Q250,28,298.5,55.5Q347,83,390.5,113.5Q434,144,448.5,197Q463,250,449.5,303.5Z;

    "
              ></animate>
            </path>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
