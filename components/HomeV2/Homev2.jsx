"use client";
import gsap from "gsap-trial";
import SplitText from "gsap-trial/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(SplitText);

export default function Homev2() {
  useEffect(() => {
    let splitText = new SplitText(".mainText", { type: "chars" });
    let chars = splitText.chars;

    const movements = [-100, 300, 150, -300, -90, 100, -200];
    const tl = gsap.timeline();

    tl.from(chars, {
      yPercent: 130,
      stagger: 0.03,
    });
    tl.to(chars, {
      delay: 0.6,
      fontSize: "15vw",
      letterSpacing: "2vw",
      fontWeight: "700",
      duration: 1,
      ease: "power3.out",
    });
    movements.forEach((move, index) => {
      tl.to(
        chars[index],
        {
          y: move,
          duration: 1,
          ease: "power3.out",
        },
        "<"
      );
    });
    tl.to(chars, {
      fontWeight: 500,
      letterSpacing: "0px",
      duration: 1,
      ease: "power3.out",
      fontSize: "1.5rem",
      y: "-450px",
    });
    // tl.to(chars, {
    //   y: window.innerHeight / 2 - 70,
    // });
    // tl.to(chars, {
    //   y: window.innerHeight / 2,
    //   delay: 0.5,
    //   ease: "power3.out",
    //   stagger: 0.03,
    // });
    // tl.to(chars, {
    //   yPercent: 300,
    //   letterSpacing: "6vw",
    //   fontSize: "15vw",
    //   duration: 1,
    //   ease: "power3.out",
    // });
    // movements.forEach((move, index) => {
    //   tl.to(
    //     chars[index],
    //     {
    //       y: move,
    //       duration: 1,
    //       ease: "power3.out",
    //     },
    //     "<"
    //   );
    // });

    // Add the second tween for the mainText using fromTo
    // tl.fromTo(
    //   ".mainText",
    //   { yPercent: 1400 }, // Starting position
    //   { yPercent: 0, delay: 0, ease: "power3.out" } // Ending position
    // );
    // gsap.from(chars, {
    //   yPercent: 130,
    //   delay: 0.5,
    //   stagger: 0.03,
    // });
    // gsap.from(".mainText", {
    //   yPercent: 1400,
    //   delay: 2,
    // });
  });
  return (
    <>
      <div className="flex justify-center h-screen items-center pt-10">
        <div className="text-white font-semibold text-2xl mainText ">
          NAVEEN
        </div>
      </div>
    </>
  );
}
