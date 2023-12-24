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
        <div>
          {/* Title */}
          <h1>Transforming Ideas <br /> Into <span>Digital Reality</span></h1>
        </div>
      </div>
      {/* Image */}
      <div>image</div>
    </div>
  );
};

export default Home;
