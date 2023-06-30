import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProblemSolving from "./pages/ProblemSolving";
import Projects from "./pages/Projects";
import Contest from "./pages/Contest";
import Education from "./pages/Education";
import Certification from "./pages/Certification";
import Footer from "./components/Footer";

const App = () => {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsNavbarSticky(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col bg-white font-inter m-0">
      <header
        className={`flex justify-center items-center h-90 z-10 ml-4 font-inter pt-4 pr-2 pb-2 ${
          isNavbarSticky ? "sticky top-0 bg-white border-b" : ""
        }`}
      >
        <Navbar />
      </header>

      <section id="home" className="flex pt-4 items-center justify-center z-1 relative">
        <Home />
      </section>

      <section id="problem-solving" className="flex pt-[200px] items-center justify-center z-1 relative">
        <ProblemSolving/>
      </section>

      {/* <section id="problem-solving" className="flex pt-200 items-center justify-center z-1 relative">
        <Projects/>
      </section>

      <section id="problem-solving" className="flex pt-200 items-center justify-center z-1 relative">
        <Contest/>
      </section>

      <section id="problem-solving" className="flex pt-200 items-center justify-center z-1 relative">
        <Education/>
      </section>

      <section id="problem-solving" className="flex pt-200 items-center justify-center z-1 relative">
        <Certification/>
      </section> */}
      <section id="problem-solving" className="flex pt-[200px] items-center justify-center z-1 relative">
        <Footer/>
      </section>
    </div>
  );
};

export default App;
