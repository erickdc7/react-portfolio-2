// Components
import Circles from "../../components/Circles";

// Icons
import { BsArrowRight } from "react-icons/bs";

// Framer Motion
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="">
          {/* Text */}
          <h2>
            Let's <span>connect.</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
