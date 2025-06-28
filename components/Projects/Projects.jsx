"use client";
import Image from "next/image";
import codeDropImage from "./Assets/code-drop-nowindow.png";
import qrcGenImage from "./Assets/qrc-gen-nowindow.png";
import vibranceImage from "./Assets/vibrance.png";
import devsHouseImage from "./Assets/devshouse.png";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import StaggerText from "../StaggerText";

export default function Projects() {
  return (
    <>
      <StaggerText
        title="PROJECTS & WORKS"
        selfDelay={3}
        stlyes=" text-4xl md:text-5xl mb-20 text-center font-semibold"
      />
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
        className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-5 sm:px-20 lg:px-40 mb-28"
      >
        <ProjectCard
          src={codeDropImage}
          title="Code Drop"
          url="https://codedrop1.vercel.app/"
          description="Seamlessly create code snippets, Built with NextJS, Express, MongoDB"
        />
        <ProjectCard
          src={devsHouseImage}
          title="DevsHouse'25"
          url="https://www.devshouse.in/"
          description="Collaborated with a team to build a responsive platform for managing hackathon registrations, submissions, and real-time event updates."
        />
        <ProjectCard
          src={qrcGenImage}
          url="https://qrcgen.vercel.app/"
          title="QRC Gen + Extension"
          description="Fast and simple QR Generator site and Extension"
        />
        <ProjectCard
          src={vibranceImage}
          url="https://vitvibrance.com/"
          title="VIT Vibrance Website"
          description="Contributed to the development of my college's annual cultural fest website that showcased events, schedules, and managed registrations"
        />
      </motion.div>
    </>
  );
}
