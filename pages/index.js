// next image
import Image from "next/image"

// components
import ParticlesContainer from "../components/ParticlesContainer"
import ProjectsBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"

// framer motion
import { motion } from "framer-motion"

// variants
import { fadeIn } from "../variants"

const Home = () => {
  return <div className="bg-primary/60 h-full">
    {/* text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        {/* title */}
        <h1 className="h1">
          Transforming Ideas <br /> Into <span className="text-accent">Digital Reality</span></h1>
          {/* subtitle */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec augue nec quam rhoncus sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
          </p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn/>
          </div>
      </div>
    </div>
    {/* image */}
    <div>Image</div>
  </div>;
};

export default Home;
