// Next image
import Image from "next/image";

// Components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// Framer Motion
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../variants"

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* Text */}
      <div>
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* Title */}
          <h1 className="h1">
            Transforming Ideas <br /> Into
            <span className="text-accent">Digital Reality</span>
          </h1>
          {/* Subtitle */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus inventore magnam voluptate minus et id molestiae reprehenderit enim distinctio? Sed temporibus neque aliquid, veritatis facere vel itaque fugiat!
          </p>
        </div>
      </div>
      {/* Image */}
      <div>image</div>
    </div>
  );
};

export default Home;
