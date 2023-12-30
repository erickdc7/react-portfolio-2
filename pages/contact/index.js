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
        <div className="flex flex-col w-full max-w-[700px]">
          {/* Text */}
          <h2 className="h2 text-center mb-12">
            Let's <span className="text-accent">connect.</span>
          </h2>
          {/* Form */}
          <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
            {/* Input group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="subject" className="input" />
            <textarea placeholder="message" className="textarea"></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
