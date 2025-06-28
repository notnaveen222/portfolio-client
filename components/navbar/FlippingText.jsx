import { motion } from "motion/react";

const DURATION = 0.3;

export default function FlippingText({ title, styles, onClick }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`${styles} nav-button relative block overflow-hidden  whitespace-normal`}
      onClick={onClick}
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
        transition={{
          duration: DURATION,
          ease: "easeOut",
        }}
        className="text-white mix-blend-difference"
      >
        {title}
      </motion.div>
      <motion.div
        className="absolute inset-0 text-white mix-blend-difference"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
        transition={{
          duration: DURATION,
          ease: "easeOut",
        }}
      >
        {title}
      </motion.div>
    </motion.div>
  );
}
