import { FaGlobe } from "react-icons/fa";
import { project4, project5, projectOne, projectThree, projectTwo } from "../../assets/index.js";
import Title from "../layout/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-10 sm:py-16 md:py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">
       
        <ProjectsCard
          title="Coffee net"
          des="Crafted with modern frameworks and pixel-perfect precision, Coffee Net delivers smooth navigation, responsive layouts, and eye-catching visuals. Built for users who love clean design and seamless interaction."
          src={projectOne}
          icon={ <a href="https://coffeeneti.netlify.app/"><FaGlobe /></a> }
        />
        
          <ProjectsCard
            title="E-ceommerce"
            des={"Designed with HTML5 for structure, CSS3 for style, and JavaScript for interactivity, E-commerce offers a clean, responsive shopping experience. Featuring dynamic product displays, smooth navigation, and user-friendly layouts, it's a front-end showcase of modern web design principles."}
            src={projectTwo}
            icon={ <a href="https://shimulhossen119.github.io/Ecommerce/"><FaGlobe /></a> }
            
            
          />
       
        
        
        <ProjectsCard
          title="Food net"
          des="Food net is a vibrant food website that blends delicious visuals with mouthwatering content. Whether you're craving recipes, exploring global cuisines, or discovering hidden dining gems, this site serves up a feast for the eyes and the palate. Built with clean HTML5 structure, styled to perfection with CSS3, and made interactive through JavaScript, it’s a front-end experience that’s as satisfying as the dishes it features."
          src={projectThree}
          icon={ <a href="https://foot-nte.netlify.app/"><FaGlobe /></a> }
         
        />
        <ProjectsCard
          title="Movixnet"
          des="Built with React.js, JavaScript, Tailwind CSS, and powered by dynamic APIs, Movixnet delivers a sleek and responsive movie browsing experience. Featuring intuitive routing, custom hooks, and a user-friendly interface, it lets visitors explore trending films, search by genre, and dive into detailed movie info—all with smooth navigation and modern design."
          src={project4}
          icon={ <a href="https://movixner.netlify.app/"><FaGlobe /></a> }
        />
        <ProjectsCard
          title="Spotify Clone"
          des="Crafted with React.js, JavaScript, Tailwind CSS, and powered by dynamic APIs, Spotify Clone brings the rhythm of Spotify to life. Featuring smooth routing, custom hooks, and a responsive UI, users can browse tracks, explore playlists, and enjoy seamless playback—all wrapped in a sleek, dark-themed design. Built for music lovers and tech enthusiasts alike, this clone showcases your ability to blend functionality with flair."
          src={project5}
          icon={ <a href="https://spotifyclonel.netlify.app/"><FaGlobe /></a> }
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="This clone is designed to showcase modern front-end and back-end development skills, user authentication, real-time interactions, and responsive UI design."
          src={projectTwo}
          icon={ <a href=""><FaGlobe /></a> }
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="This clone is designed to showcase modern front-end and back-end development skills, user authentication, real-time interactions, and responsive UI design."
          src={projectThree}
          icon={ <a href=""><FaGlobe /></a> }
        />
      </div>
    </div>
  );
};

export default Projects;