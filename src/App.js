import React, { useState, useEffect, lazy } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import Resume from "./pages/Resume";
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const Skills = lazy(() => import("./pages/Skills"));
const ProblemSolving = lazy(() => import("./pages/ProblemSolving"));
const Projects = lazy(() => import("./pages/Projects"));
const Education = lazy(() => import("./pages/Education"));
const Footer = lazy(() => import("./components/Footer"));
const Experience = lazy(() => import("./pages/Experience"));
const Achivements = lazy(() => import("./pages/Achivements"));
const Research = lazy(() => import("./pages/Research"));

const App = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full-screen bg-white font-inter flex flex-col gap-4">
      <Navbar />

      <section
        id="home"
        className="flex pt-[50px] items-center justify-center relative"
      >
        <Home />
      </section>

      <section
        id="skills"
        className="flex pt-2 lg:pt-[100px] items-center justify-center relative"
      >
        <Skills />
      </section>

      <section
        id="problem-solving"
        className="flex pt-[50px] lg:pt-[200px] items-center justify-center relative"
      >
        <ProblemSolving />
      </section>

      <section
        id="experience"
        className="flex pt-[50px] lg:pt-[200px] lg:mb-[200px] items-center justify-center relative"
      >
        <Experience />
      </section>

      <section
        id="projects"
        className="flex pt-[50px] lg:pt-[100px] items-center justify-center relative"
      >
        <Projects />
      </section>

      <section
        id="research"
        className="flex pt-[50px] lg:pt-[100px] items-center justify-center relative"
      >
        <Research />
      </section>

      <section id="education" className="flex pt-[50px] lg:pt-[200px] relative">
        <Education />
      </section>

      <section
        id="achivements"
        className="flex pt-[50px] lg:pt-[200px] items-center justify-center relative"
      >
        <Achivements />
      </section>

      <section
        id="resume"
        className="flex pt-[50px] lg:pt-[200px] items-center justify-center relative"
      >
        <Resume />
      </section>

      <section
        id="footer"
        className="flex pt-[50px] lg:pt-[200px] items-center justify-center relative"
      >
        <Footer />
      </section>
      <div
        className={`fixed bottom-8 right-8 bg-gray-500 p-2 rounded-full text-white cursor-pointer animate-bounce ${
          isAtTop ? "hidden" : ""
        }`}
        onClick={() =>
          scroll.scrollToTop({ duration: 800, smooth: "easeInOutQuart" })
        }
      >
        {<FaArrowUp size={24} />}
      </div>
    </div>
  );
};

export default App;
