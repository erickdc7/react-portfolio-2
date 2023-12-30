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
        {/* Text & Form */}
        <div className="flex flex-col w-full max-w-[700px] bg-pink-500/10">
          {/* Text */}
          <h2 className="h2 text-center mb-12">
            Let's <span className="text-accent">connect.</span>
          </h2>
          {/* Form */}
          <form>
            {/* Group */}
            <div className="flex">
              <input type="text" placeholder="name" className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
