// Components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div>
          {/* Text */}
          <div>text</div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
