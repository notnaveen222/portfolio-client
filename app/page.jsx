import Hero from "@/components/Hero/Hero";
import Preloader from "@/components/Pre Loader/Preloader";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <Projects />
    </>
  );
}
