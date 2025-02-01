"use client";
import ShinyText from "@/components/Shiny text/ShinyText";
import gsap from "gsap";
import { useEffect } from "react";

export default function Preloader() {
  const name = "NAVEEN";
  const STAGGER = 0.015;
  const DURATION = 0.6;
  useEffect(() => {
    gsap.to(".pre-loader", {
      //BG-Moving
      yPercent: -100,
      delay: 2.5,
      ease: "power3.out",
    });
    gsap.to(".outer-preloader", {
      //BG-Moving
      yPercent: -100,
      delay: 2.6,
      ease: "power3.out",
    });
  });
  return (
    <>
      <div className="outer-preloader absolute h-screen w-screen bg-[#ececec]">
        <div className="pre-loader  bg-black absolute h-screen w-screen flex justify-center items-center">
          <ShinyText />
        </div>
      </div>
    </>
  );
}
