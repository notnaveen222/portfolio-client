"use client";
import Image from "next/image";
import "./ProjectCard.css";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";

export default function ProjectCard({
  src,
  title,
  description,
  url,
  blackText,
}) {
  return (
    <>
      <div
        onClick={() => window.open(url, "_blank")}
        className="card  rounded-lg project-tile relative cursor-pointer overflow-hidden"
      >
        <Image
          className="project-image hover:scale-110 transition-all duration-150 ease-out"
          src={src}
          alt="Project Thumbnail"
        ></Image>
        <div
          className={`absolute bottom-0 ${
            blackText ? "project-card-title-white" : "project-card-title"
          } flex items-center justify-between pl-5 h-[40%] sm:h-[15%] w-full`}
        >
          <div>
            <div
              className={`${
                blackText ? "text-black" : "text-white"
              } text-shadow-lg text-shadow-white left-5 pb-0 font-bold text-xl sm:text-3xl `}
            >
              {title}
            </div>
            <div
              className={`project-desc ${
                blackText ? "text-black" : "text-white"
              } text-xs sm:text-base`}
            >
              {description}
            </div>
          </div>
          <div className="text-4xl bg-white rounded-full  project-arrow">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </>
  );
}
