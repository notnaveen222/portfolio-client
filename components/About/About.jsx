"use client";
import Image from "next/image";
import NaveenImage from "./Assets/image3.png";
import GymImage from "./Assets/image2.jpg";
import TableImage from "./Assets/table.jpg";
import GraphicImage from "./Assets/GraphicImage.jpg";
import Ceasar from "./Assets/Ceasar.jpg";
import AnimeImage from "./Assets/animeImage.jpg";
import "./About.css";
import { useState } from "react";

export default function About() {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(-1);

  return (
    <>
      <div className="text-white h-full flex flex-col justify-center items-center">
        <div className="text-white font-semibold text-5xl mb-20 ">ABOUT ME</div>
        <div className="flex gap-x-5 mb-20 overflow-x-scroll sm:overflow-hidden">
          <AboutCard
            src={NaveenImage}
            text="SOPHOMORE"
            index={0} // Changed to 0-based indexing
            setIndex={setHoveredImageIndex}
          />
          <AboutCard
            src={GymImage}
            text="GYM"
            index={1}
            setIndex={setHoveredImageIndex}
          />
          <AboutCard
            src={TableImage}
            text="HOBBIES"
            index={2}
            setIndex={setHoveredImageIndex}
          />
          <AboutCard
            src={GraphicImage}
            text="DESIGNING"
            index={3}
            setIndex={setHoveredImageIndex}
          />
          <AboutCard
            src={Ceasar}
            text="CEASAR"
            index={4}
            setIndex={setHoveredImageIndex}
          />
          <AboutCard
            src={AnimeImage}
            text="ANIME"
            index={5}
            setIndex={setHoveredImageIndex}
          />
        </div>
        <div className="relative ">
          <AboutDesc visible={true} index={hoveredImageIndex} />
        </div>
      </div>
    </>
  );
}

const AboutCard = ({ src, text, index, setIndex }) => {
  return (
    <div
      className="about-card transition-all duration-200 cursor-pointer w-[100px] hover:w-[300px] flex flex-col justify-center items-center  text-xl gap-x-0"
      style={{
        backgroundImage: `url(${src.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
      }}
      onMouseEnter={() => setIndex(index)}
      onMouseLeave={() => setIndex(-1)}
    ></div>
  );
};

const AboutDesc = ({ visible, index }) => {
  const Descriptions = [
    "I'm Naveen, 19, Currently an Computer Science Under Grad student at VIT Chennai",
    "I Luv Going to Gym",
    "I'm Naveen, 19, Currently an Computer Science Under Grad student at VIT Chennai",
    "I also do Graphic Desgining occasionally",
    "Meet my dog Ceasar",
    "I Also like watching Anime",
  ];

  return (
    <div
      className={`text-white text-center  w-screen  font-normal text-2xl transition-all duration-300  top-full ${
        visible && index !== -1 ? "opacity-100" : "opacity-0"
      }`}
    >
      {index !== -1 ? Descriptions[index] : ""}
    </div>
  );
};
