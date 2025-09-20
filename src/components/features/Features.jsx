import Title from "../layout/Title";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";


const Features = () => {
  return (
    <div  
      id="feature"
      className="w-full py-10 sm:py-16 md:py-20 border-b-[1px] border-b-black gap-10"
    >
      <Title  title="Features" des="What I Do" />
      <div data-aos='fade-right' className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-20">
        <Card
          title="Business Stratagy"
          des="Business Strategy is the foundation for achieving long-term success and growth. It involves analyzing market trends, understanding customer needs, and setting clear goals to guide decision-making."
          icon={<FaBars />}
        />
        <Card 
          title="App Development"
          des="App development is the process of creating software applications that run on mobile devices, desktops, or web browsers. These apps can serve countless purposes—from entertainment and education to business and productivity."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Web Development"
          des="Web development is the art and science of creating websites and web applications that live on the internet. It blends creativity, logic, and technology to build everything from simple landing pages to complex platforms like e-commerce stores, social media networks, and dashboards."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile development"
          des="Mobile development is the process of creating software applications that run on mobile devices like smartphones, tablets, and smartwatches. These apps can be native (built for a specific platform), hybrid (cross-platform), or web-based (accessed via browser but optimized for mobile)."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="UX design is the process of crafting digital experiences that are intuitive, enjoyable, and meaningful for users. It’s not just about how a product looks—it’s about how it works, how it feels, and how it solves real problems."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Website"
          des="When you host a website, you're storing all its files—HTML, CSS, images, databases—on a server that’s connected to the internet. That server delivers your content to users when they type in your domain name."
          icon={<FaGlobe />}
        />
      </div>
    </div>
  );
};

export default Features;