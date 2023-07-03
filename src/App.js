import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import ProblemSolving from "./pages/ProblemSolving";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";
import Achivements from "./pages/Achivements";

const App = () => {

  return (
    <div className="w-full-screen bg-white font-inter">
      
      <Navbar />

      <section id="home" className="flex pt-4 items-center justify-center z-1 relative">
        <Home />
      </section>

      <section id="skills" className="flex pt-[200px] items-center justify-center z-1 relative">
        <Skills/>
      </section>

      <section id="problem-solving" className="flex pt-[50px] lg:pt-[200px] items-center justify-center z-1 relative">
        <ProblemSolving/>
      </section>

      <section id="experience" className="flex pt-[50px] lg:pt-[200px] items-center justify-center z-1 relative">
        <Experience/>
      </section>

      <section id="projects" className="flex pt-[50px] lg:pt-[200px] items-center justify-center z-1 relative">
        <Projects/>
      </section>

      <section id="education" className="flex pt-[50px] lg:pt-[200px] z-1 relative">
        <Education/>
      </section>

      <section id="achivements" className="flex pt-[50px] lg:pt-[200px] items-center justify-center z-1 relative">
        <Achivements/>
      </section>

      <section id="footer" className="flex pt-[50px] lg:pt-[200px] items-center justify-center z-1 relative">
        <Footer/>
      </section>
    </div>
  );
};

export default App;
