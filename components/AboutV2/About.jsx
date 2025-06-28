import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

import Image from "next/image";
import GraphicImage from "./assets/GraphicImage.jpg";
import Ceasar from "./assets/Ceasar.jpg";
import AnimeImage from "./assets/animeImage2.jpg";
import GymImage from "./assets/image2.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function AboutV2() {
  useGSAP(() => {
    gsap.fromTo(
      ".particle-speed-1",
      { y: window.innerHeight + 50 },
      {
        y: -window.innerHeight,
        scrollTrigger: {
          trigger: ".particle-speed-1",
          start: "bottom bottom",
          end: "bottom top-=300px",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      ".particle-speed-2",
      { y: window.innerHeight },
      {
        y: -window.innerHeight,
        scrollTrigger: {
          trigger: ".particle-speed-2",
          start: "bottom bottom",
          end: "bottom top-=300px",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      ".particle-speed-3",
      { y: window.innerHeight - 50 },
      {
        y: -window.innerHeight - 50,
        scrollTrigger: {
          trigger: ".particle-speed-3",
          start: "bottom bottom",
          end: "bottom top-=300px",
          scrub: 1,
        },
      }
    );
    gsap.utils.toArray(".particle-speed-4").forEach((particle) => {
      gsap.fromTo(
        particle,
        { y: window.innerHeight },
        {
          y: -window.innerHeight - 100 - Math.floor(Math.random() * 200),
          scrollTrigger: {
            trigger: particle,
            start: "bottom bottom",
            end: "bottom top",
            scrub: 2,
          },
        }
      );
    });
    gsap.utils.toArray(".layer-2-particle-speed-2").forEach((particle) => {
      gsap.fromTo(
        particle,
        { y: window.innerHeight },
        {
          y: -window.innerHeight + Math.floor(Math.random() * 50),
          scrollTrigger: {
            trigger: particle,
            start: "bottom bottom-=100px",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    });
    gsap.utils.toArray(".layer-2-particle-speed-1").forEach((particle) => {
      gsap.fromTo(
        particle,
        { y: window.innerHeight },
        {
          y: -window.innerHeight + 100 + Math.floor(Math.random() * 50),
          scrollTrigger: {
            trigger: particle,
            start: "bottom bottom-=100px",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    });
    gsap.fromTo(
      ".about-heading",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-heading",
          scrub: true,
          start: "top bottom-=100px",
          end: "top top",
        },
      }
    );
    gsap.fromTo(
      ".about-text",
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".about-text",
          scrub: true,
          start: "bottom center",
          end: "bottom+=300px center-=200px",
        },
      }
    );
    gsap.fromTo(
      ".about-text",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-text",
          scrub: true,
          start: "top top+=100px",
          end: "top top",
        },
      }
    );
    gsap.fromTo(
      ".about-second-heading",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".about-second-heading",
          scrub: true,
          start: "top center+=100px",
          end: "top top+=300px",
        },
      }
    );

    // document.querySelectorAll(".about-box").forEach((img) => {
    //   gsap.fromTo(
    //     img,
    //     { opacity: 0, y: 100 },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       scrollTrigger: {
    //         trigger: img,
    //         start: "top center+=50px",
    //         end: "top center",
    //         scrub: true,
    //       },
    //     }
    //   );
    // });
    document.querySelectorAll(".about-box").forEach((el) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top center+=100px", // starts when image enters viewport
          end: "top top+=100px", // ends when image reaches 100px from top
          scrub: true,
        },
      });

      tl.fromTo(el, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }).to(el, {
        opacity: 0,
        y: -50,
      });
    });
  });

  return (
    <div className="relative w-screen bg-black">
      <div className="z-20 left-0 right-0 h-screen absolute mix-blend-difference">
        <div className="flex justify-evenly mt-10 particle-layer-1 bg-transparent mix-blend-difference">
          <div className="particle particle-speed-4 particlev2"></div>
          <div className="particle particle-speed-2 particlev3"></div>
          <div className="particle particle-speed-3 particlev2"></div>
          <div className="particle particle-speed-1 particlev1"></div>
          <div className="particle particle-speed-4 particlev3"></div>
          <div className="particle particle-speed-3 particlev2"></div>
          <div className="particle particle-speed-4 particlev1"></div>
          <div className="particle particle-speed-2 particlev3"></div>
          <div className="particle particle-speed-1 particlev2"></div>
          <div className="particle particle-speed-4 particlev2"></div>
        </div>
        <div className="flex justify-evenly particle-layer-2 mix-blend-difference">
          <div className="particle layer-2-particle-speed-2 particlev2"></div>
          <div className="particle layer-2-particle-speed-1 particlev1"></div>
          <div className="particle layer-2-particle-speed-2 size-1"></div>
          <div className="particle layer-2-particle-speed-1 particlev2"></div>
          <div className="particle layer-2-particle-speed-1 particlev2"></div>
        </div>
      </div>
      <div className="text-white text-center text-4xl md:text-5xl about-heading font-semibold">
        About Me
      </div>
      <div className="h-[140vh] bg-black">
        <div className="h-screen top-0 flex justify-center items-center text-3xl mx-auto text-center w-4/5 sticky z-10 about-text font-semibold tracking-wider font-interTight text-white">
          I'm Naveen, 19, a pre-final year student 🏫 and passionate web
          developer. I bring ideas into motion — pixel-perfect ✨,
          performance-ready, and purposeful. My work bridges the gap between
          aesthetics and functionality 🔧, crafting interfaces that feel as good
          as they look 👀.
        </div>
      </div>
      <div className="text-white h-[190vh] w-screen flex flex-col  z-[100] px-10">
        <div className="z-50 flex flex-col h-fit sticky top-20 font-interTight">
          <div className="about-second-heading font-medium mb-10 text-3xl  md:text-5xl ">
            Apart From This
          </div>
        </div>
        <div className="about-section-card z-50 pt-28 flex flex-col gap-y-10 h-fit  ">
          <div className="flex about-box justify-between px-5 md:px-36">
            <Image
              src={AnimeImage}
              alt="about-img"
              className="about-img size-32 md:size-80 object-cover"
            ></Image>
            <div className="text-center flex items-center font-black text-2xl md:text-8xl">
              I Watch Anime
            </div>
          </div>
          <div className="flex about-box justify-between px-5 md:px-36">
            <Image
              src={GymImage}
              alt="about-img"
              className="about-img size-32 md:size-80 object-cover"
            ></Image>
            <div className="text-center flex items-center   font-black text-2xl md:text-8xl">
              I go to jim
            </div>
          </div>
          <div className="flex about-box justify-between px-5 md:px-36">
            <Image
              src={GraphicImage}
              alt="about-img"
              className="about-img size-32 md:size-80 object-contain"
            ></Image>
            <div className="text-center  flex items-center  font-black text-2xl md:text-8xl">
              I do poster designing
            </div>
          </div>
          <div className="flex about-box justify-between px-36">
            <Image
              src={Ceasar}
              alt="about-img"
              className="about-img size-80 object-cover"
            ></Image>
            <div className="text-center flex items-center  font-black text-8xl">
              Meet my dog, Ceasar.
            </div>
          </div>
          {/* <Image
            src={GymImage}
            alt="about-img"
            className="size-96 about-img  object-cover self-end row-start-2 col-start-2"
          ></Image>
          <Image
            src={Ceasar}
            className="size-96 about-img object-cover row-start-3 "
            alt="about-img"
          ></Image>
          <Image
            alt="about-img"
            src={GraphicImage}
            className="size-96 about-img object-contain self-end row-start-4 col-start-2"
          ></Image> */}
        </div>
      </div>
    </div>
  );
}
