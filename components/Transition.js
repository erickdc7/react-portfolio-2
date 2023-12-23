// Framer Motion
import { motion } from "framer-motion";

// Variants
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  }
}

const Transition = () => {
  return (
    <>
      <div>Transition</div>
    </>
  );
};

export default Transition;
