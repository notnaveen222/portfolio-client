"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./contact.css";

import Image from "next/image";
import GraphicImage from "./Assets/GraphicImage.jpg";
import Ceasar from "./Assets/Ceasar.jpg";
import AnimeImage from "./Assets/animeImage.jpg";
import GymImage from "./assets/image2.jpg";
import Footer from "../Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch(
      "https://formsubmit.co/ajax/a3805bd2cdfd3494db2dd66ff005a280",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      }
    );
  };
  useGSAP(() => {
    // gsap.to(".projectsBG", {
    //   /* This isnt Doing Anyting, check and remove */ backgroundColor: "#FFF",
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: ".projectsBG",
    //     start: "top 200px" /*top of elem meets center of vp*/,
    //     end: "top 100px",
    //     scrub: 1.5,
    //   },
    // });
    gsap.to(".bar", {
      /* This one also no Functionality */ backgroundColor: "#FFF",
      duration: 1,
      scrollTrigger: {
        trigger: ".bar",
        start: "top 200px" /*top of elem meets center of vp*/,
        end: "top 100px",
        scrub: 1.5,
      },
    });
    gsap.fromTo(
      ".laptop-image",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".laptop-image",
          start: "top bottom" /*top of elem meets center of vp*/,
          end: "top top",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".bar2",
      {
        y: 0,
      },
      {
        y: -150,
        scrollTrigger: {
          trigger: ".bar",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      ".bar3",
      {
        y: 0,
      },
      {
        y: -500,
        scrollTrigger: {
          trigger: ".bar",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
        stagger: 0.2,
      }
    );
    gsap.fromTo(
      ".bar4",
      {
        y: 0,
      },
      {
        y: -400,
        scrollTrigger: {
          trigger: ".bar",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
        stagger: 0.2,
      }
    );
    gsap.fromTo(
      ".container",
      {
        backgroundColor: "#FFF",
      },
      {
        backgroundColor: "#000",
        scrollTrigger: {
          trigger: ".container",
          start: "bottom center",
          end: "bottom top-=50px",
          scrub: true,
        },
        stagger: 0.2,
      }
    );

    // document.querySelectorAll(".about-img").forEach((img) => {
    //   gsap.fromTo(
    //     img,
    //     { opacity: 0, y: 100 },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       scrollTrigger: {
    //         trigger: img,
    //         start: "top 80%",
    //         end: "top 50%",
    //         scrub: true,
    //       },
    //     }
    //   );
    // });
  });

  return (
    <div className="text-black bg-white">
      <div className="relative">
        <div className="absolute top-0 flex z-30 h-screen ">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
          <div className="bar bar4"></div>
          <div className="bar bar2"></div>
        </div>
        <div className="projectsBG z-50 flex flex-col w-screen h-screen justify-between pt-12 pb-6 text-black px-10 bg-white">
          <div className="z-[100] contact-container  pl-28 flex gap-36 justify-between">
            <div className="">
              <div className="text-9xl pb-10 font-interT font-semibold border-b-black border-b-2">
                LIKE WHAT YOU SEE?
              </div>
              <div className="text-4xl font-interT font-semibold mt-5">
                GET IN TOUCH
              </div>
              <div className="text-4xl font-interT font-semibold mt-5">
                developer.naveenkm@gmail.com
              </div>
            </div>

            <form
              action="https://formsubmit.co/developer.naveenkm@gmail.com
"
              method="POST"
              className="mr-28 w-4/12 bg-[#141414] rounded-2xl flex flex-col gap-5 mt-4 py-5 px-4"
            >
              <div className="text-white font-semibold text-lg">
                Send Message
              </div>
              <div className="flex flex-col">
                <div className="text-white mb-1 text-lg">Name</div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="text-white bg-[#a1a1a1]/20 pl-3 py-2 rounded-lg h-12 border-white focus:ring-1 transition-all duration-150 ring-0 focus:ring-white focus:ring-offset-1 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-white mb-1 text-lg">Email</div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Email"
                  required
                  className=" text-white h-12 pl-3 py-2 bg-[#a1a1a1]/20 rounded-lg border-white focus:ring-1 transition-all duration-150 ring-0 focus:ring-white focus:ring-offset-1 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-white mb-1 text-lg">Message</div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="text-white border-white focus:ring-1 transition-all duration-150 ring-0 focus:ring-white focus:ring-offset-1 focus:outline-none p-2 bg-[#a1a1a1]/20 rounded-lg"
                ></textarea>
              </div>
              <button
                className="text-white border border-white rounded-lg w-fit place-self-center px-3 py-2 hover:bg-white transition-all duration-150 hover:text-black"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="">
            <div className="">
              <div className="footer relative -top-2 z-50 pt-20 pl-10 sm:pl-20 pr-10 sm:pr-20 pb-10 mx-auto  max-w-[90%] rounded-3xl bg-[#141414] ">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:flex-rows sm:gap-0">
                  <div>
                    <div className="text-xl font-semibold text-white font-interT">
                      Naveen K.M
                    </div>
                    <div className="text-lg w-2/3 font-medium text-graya1 tracking-normal  font-interT underline-offset-[7px] ">
                      I don't just build websites. I engineer experiences that
                      leave a mark.
                    </div>
                  </div>
                  <div>
                    <div className="font-interT">
                      <div className="text-xl font-semibold text-graya1">
                        Connect
                      </div>
                      <div className="cursor-pointer flex items-center text-lg font-semibold text-white gap font-interT">
                        Instagram
                      </div>
                      <div className="cursor-pointer flex items-center text-lg font-semibold text-white gap font-interT">
                        {" "}
                        Twitter
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-5 mt-16 border-t">
                  <div className="text-white font-interT">
                    <div className="inline mr-1">© 2024</div>
                    {/* <div className="inline">Naveen K.M</div> */}
                  </div>
                  <div className="flex flex-wrap items-center text-right text-white font-interT">
                    naveenkm.in #a6cca62
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
