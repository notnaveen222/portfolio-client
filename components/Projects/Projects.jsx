"use client";
import Image from "next/image";
import codeDropImage from "./Assets/code-drop-nowindow.png";
import qrcGenImage from "./Assets/qrc-gen-nowindow.png";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import StaggerText from "../StaggerText";

export default function Projects() {
  return (
    <>
      <motion.div className="">PROJECTS</motion.div>
      <StaggerText
        title="PROJECTS"
        selfDelay={3}
        stlyes=" text-5xl mb-20 text-center font-semibold"
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
        className="grid grid-cols-2 gap-10 px-40"
      >
        <ProjectCard
          src={codeDropImage}
          title="Code Drop"
          description="Seamlessly create code snippets, Built with NextJS, Express, MongoDB"
        />
        <ProjectCard
          src={qrcGenImage}
          title="QRC Gen + Extension"
          description="Fast and simple QR Generator site and Extension"
        />
        <ProjectCard
          src={qrcGenImage}
          title="QRC Gen + Extension"
          description="Fast and simple QR Generator site and Extension"
        />
        <ProjectCard
          src={codeDropImage}
          title="Code Drop"
          description="Seamlessly create code snippets, Built with NextJS, Express, MongoDB"
        />
      </motion.div>
    </>
  );
}
