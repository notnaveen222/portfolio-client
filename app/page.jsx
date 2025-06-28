"use client";
import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Preloader from "@/components/Pre Loader/Preloader";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AboutV2 from "@/components/AboutV2/About";
import Contact from "@/components/contact/Contact";

export default function Home() {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleCursorMove = (event) => {
      setTimeout(() => {
        setGradientPosition({ x: event.clientX, y: event.clientY });
      }, 100);
    };
    window.addEventListener("mousemove", handleCursorMove);
    return () => {
      window.removeEventListener("mousemove", handleCursorMove);
    };
  });
  return (
    <>
      <Navbar />
      <Preloader />
      <Hero />
      <Projects />
      {/* <About /> */}
      <AboutV2 />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}
