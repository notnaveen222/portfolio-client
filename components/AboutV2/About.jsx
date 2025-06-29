import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

import Image from "next/image";
import GraphicImage from "./assets/GraphicImage.jpg";
import Ceasar from "./assets/Ceasar.jpg";
import AnimeImage from "./assets/animeImage2.jpg";
import GymImage from "./assets/image2.jpg";
import AotImage from "./assets/aot.png";
import travisImage from "./assets/travis.png";
import gymMe from "./assets/gym-me.jpeg";

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
      ".about-img-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-img-card", // Use a shared ancestor if needed
          start: "top bottom-=200px",
          end: "bottom center",
          scrub: true,
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
          I'm Naveen, 19, a pre-final year student and passionate web developer.
          I bring ideas into motion — pixel-perfect and performance-ready. My
          work bridges the gap between aesthetics and functionality, crafting
          interfaces that feel as good as they look.
        </div>
      </div>
      <div className="text-white mb-20 w-screen flex flex-col  z-[50] sm:px-0 lg:px-10">
        <div className="text-white w-screen flex flex-col z-[50] sm:px-0 lg:px-10 py-20">
          <div className="about-second-heading  font-medium mb-10 text-3xl md:text-5xl">
            Apart From This
          </div>
          <div className="z-50 flex flex-col font-interTight sm:mx-auto">
            <div className=" flex gap-y-5 flex-col sm:h-[80vh] px-2  max-w-6xl w-screen">
              <div className="h-1/2 overflow-hidden  flex-grow grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative about-img-card col-span-1 sm:col-span-2 rounded-lg overflow-hidden">
                  <Image
                    src={AotImage}
                    alt="about-img"
                    className="w-full hover:scale-110 transition-all duration-500 ease-out cursor-pointer object-cover h-full rounded-lg "
                  ></Image>
                  <div className="absolute bottom-0 right-0  text-right  text-white text-3xl lg:text-4xl font-normal bg-black/40  mr-5 mb-3 px-2 py-1 rounded-lg">
                    I Watch Anime
                  </div>
                </div>
                <div className="col-span-1 about-img-card relative rounded-lg overflow-hidden">
                  <Image
                    src={travisImage}
                    alt="about-img"
                    className=" object-cover hover:scale-110  transition-all duration-500 ease-out cursor-pointer h-full rounded-lg"
                  ></Image>
                  <div className="absolute bottom-0 left-0 text-left   text-white text-3xl lg:text-4xl font-normal bg-black/40 ml-5 mb-3 px-2 py-1 rounded-lg">
                    I design posters
                  </div>
                </div>
              </div>
              <div className="h-1/2  flex-grow grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-lg overflow-hidden">
                <div className="order-2 sm:order-1 col-span-1 about-img-card relative rounded-lg overflow-hidden">
                  <Image
                    src={Ceasar}
                    alt="about-img"
                    className="object-cover hover:scale-110 transition-all duration-500 ease-out cursor-pointer h-full rounded-lg"
                  ></Image>
                  <div className=" absolute bottom-0 right-0 text-right text-white text-3xl lg:text-4xl font-normal mr-5 mb-3 ">
                    <span className="bg-black/40 rounded-t-lg rounded-bl-lg px-2 inline-block">
                      Meet My Dog,
                    </span>{" "}
                    <br />
                    <span className="bg-black/40  px-2 rounded-b-lg inline-block">
                      Ceasar
                    </span>
                  </div>
                </div>
                <div className="order-1 sm:order-2 col-span-1 sm:col-span-2 about-img-card relative rounded-lg overflow-hidden">
                  <Image
                    src={gymMe}
                    alt="about-img"
                    className=" object-cover hover:scale-110 transition-all duration-500 ease-out cursor-pointer h-full rounded-lg"
                  ></Image>
                  <div className="absolute bottom-0 left-0 text-left text-white text-3xl lg:text-4xl font-normal ml-5 mb-3 ">
                    <span className="bg-black/40 rounded-t-lg px-2 inline-block">
                      I
                    </span>{" "}
                    <br />
                    <span className="bg-black/40 rounded-tr-lg px-2 rounded-b-lg inline-block">
                      Go Gym
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
