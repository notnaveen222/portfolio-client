"use client";
import { Inter_Tight } from "next/font/google";
import { motion } from "framer-motion";
import StaggerText from "../StaggerText";
import "./Hero.css";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";

const inter = Inter_Tight({ subsets: ["latin"] });

export default function Hero() {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVisible, setCursorVisible] = useState(true);
  const handleMouseMove = (e) => {
    setCursorPos({
      x: e.clientX - 25,
      y: e.clientY - 25,
    });
  };

  return (
    <>
      <div className="flex flex-col h-[70vh] justify-center items-center">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 3,
          }}
        >
          <div
            className="text-white mb-5 relative border rounded-2xl px-2 py-1 bg-white/5 
        border-gray-500/30 flex items-center gap-x-5 cursor-pointer hover:border-white transition-all duration-200"
          >
            <div className="dot">
              <div className="small-dot"></div>
              <div className="big-dot"></div>
            </div>
            <div></div>
            <div className="tracking-widest  font-light flex items-center gap-1 opacity-90 hover:opacity-100">
              AVAILABLE FOR WORK <GoArrowUpRight />
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col mb-8">
          <StaggerText
            title="WEB"
            selfDelay={2.7}
            stlyes="text-6xl sm:text-xl md:text-9xl"
          />
          <StaggerText
            title="ARCHITECT"
            selfDelay={2.75}
            stlyes="text-6xl sm:text-8xl md:text-9xl"
          />
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 3,
          }}
          className="text-[#A1A1A1] text-xl w-[85%] lg:w-[30%] text-center "
        >
          Designer and Developer, focused on intuitive and engaging user
          experiences.
        </motion.div>
      </div>
      <motion.div
        className={`custom-cursor ${cursorVisible ? "hidden" : "hidden"}`} //have to fix
        animate={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <GoArrowUpRight />
      </motion.div>
    </>
  );
}
