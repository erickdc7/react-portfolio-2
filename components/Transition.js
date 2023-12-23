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
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  );
};

export default Transition;
