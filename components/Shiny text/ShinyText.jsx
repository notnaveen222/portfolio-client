"use client";
import "./shinytext.css";
import gsap from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";
import { motion } from "framer-motion";

export default function ShinyText() {
  useEffect(() => {
    const splitType = new SplitType("#splitType", { types: "chars" });
    const chars2 = splitType.chars;

    gsap.from(chars2, {
      yPercent: 130,
      delay: 0.5,
      stagger: 0.02,
    });
    gsap.to(chars2, {
      yPercent: -100,
      delay: 2,
      stagger: 0.02,
    });
  });

  //Shiny Text Notworking, add shiny-text class, now just returning normal text
  return (
    <>
      <div className="overflow-hidden">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          id="splitType"
          className="text-[#ececec] text-lg split font-bold"
        >
          NAVEEN
        </motion.div>
      </div>
    </>
  );
}
