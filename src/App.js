import React, { useState, useEffect, lazy } from "react";

import { useLocation } from "react-router-dom";

import { FaArrowUp } from "react-icons/fa";

import { animateScroll as scroll } from "react-scroll";

const ProblemSolving = lazy(() => import("./pages/ProblemSolving"));
const Achivements = lazy(() => import("./pages/Achivements"));
const Experience = lazy(() => import("./pages/Experience"));
const Education = lazy(() => import("./pages/Education"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Projects = lazy(() => import("./pages/Projects"));
const Research = lazy(() => import("./pages/Research"));
const Skills = lazy(() => import("./pages/Skills"));
const Blogs = lazy(() => import("./blog/Blogs"));
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();
  const lastPath = location.pathname.split("/").pop();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isBlogsPage = lastPath.toLowerCase() === "blogs";

  if (isBlogsPage) {
    return (
      <>
        <div className="w-full-screen bg-white font-inter flex flex-col gap-4">
          <Blogs />
        </div>
      </>
    );
  } else {
    return (
      <div className="w-full-screen bg-white font-inter flex flex-col gap-4">
        <Navbar />
        <Home />
        <Skills />
        <ProblemSolving />
        <Experience />
        <Projects />
        <Research />
        <Education />
        <Achivements />
        <Footer />
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
  }
};

export default App;
