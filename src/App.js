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
import Research from "./pages/Research";

const App = () => {

  return (
    <div className="w-full-screen bg-white font-inter flex flex-col gap-4">
      
      <Navbar />

      <section id="home" className="flex pt-[50px] items-center justify-center relative">
        <Home />
      </section>

      <section id="skills" className="flex pt-2 lg:pt-[100px] items-center justify-center relative">
        <Skills/>
      </section>

      <section id="problem-solving" className="flex pt-[50px] lg:pt-[200px] items-center justify-center relative">
        <ProblemSolving/>
      </section>

      <section id="experience" className="flex pt-[50px] lg:pt-[200px] lg:mb-[200px] items-center justify-center relative">
        <Experience/>
      </section>

      <section id="projects" className="flex pt-[50px] lg:pt-[100px] items-center justify-center relative">
        <Projects/>
      </section>

      <section id="research" className="flex pt-[50px] lg:pt-[100px] items-center justify-center relative">
        <Research/>
      </section>

      <section id="education" className="flex pt-[50px] lg:pt-[200px] relative">
        <Education/>
      </section>

      <section id="achivements" className="flex pt-[50px] lg:pt-[200px] items-center justify-center relative">
        <Achivements/>
      </section>

      <section id="footer" className="flex pt-[50px] lg:pt-[200px] items-center justify-center relative">
        <Footer/>
      </section>
    </div>
  );
};

export default App;
