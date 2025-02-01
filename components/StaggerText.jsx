import { motion } from "framer-motion";
const DURATION = 0.25;
const STAGGER = 0.025;

export default function StaggerText({ title, selfDelay, stlyes }) {
  const DELAY = selfDelay;
  return (
    <motion.div
      initial="initial"
      animate="animated"
      variants={{
        animated: {
          transition: {
            delayChildren: DELAY, // Delay before animation starts
          },
        },
      }}
      className={`text-white font-extrabold tracking-tight text-9xl text-center overflow-hidden block pb-0 selection:bg-white selection:text-black ${stlyes}`}
    >
      {title.split("").map((l, i) => {
        return (
          // Ensure you return the JSX element here
          <motion.span
            className="inline-block"
            key={i}
            variants={{
              initial: { y: "100%", opacity: 0 },
              animated: { y: "0%", opacity: 1 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
            }}
          >
            {l}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
