import React from "react";
import { motion } from "framer-motion";

import Image from "../static/skills.jpg";
import { FaPooStorm } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <motion.div
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 3 }}
        initial={{ x: -700 }}
        style={{ overflow: "hidden" }}
        className="flex lg:flex-1 lg:justify-end mr-[10px]"
      >
        <div className="flex lg:basis-[90%]">
          <img className="bg-contain" src={Image} alt="skills" />
        </div>
      </motion.div>

      <motion.div
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 3 }}
        initial={{ x: 850 }}
        style={{ overflow: "hidden" }}
        className="flex flex-1 lg:justify-end"
      >
        <div className="flex lg:basis-[90%] flex-col lg:justify-start lg:items-start lg:pt-[50px] pl-4 lg:pl-12">
          <h1 className="text-[56px] font-mono">Skills</h1>
          <div className="flex flex-wrap justify-start items-center gap-2 lg:gap-2 mb-[10px]">
            <h2 className="skillsDesc">Languages:</h2>
            <h3 className="skills">C++ |</h3>
            <h3 className="skills">Python |</h3>
            <h3 className="skills">C |</h3>
            <h3 className="skills">JavaScript |</h3>
            <h3 className="skills">JAVA |</h3>
            <h3 className="skills">Dart</h3>
          </div>
          <div className="skillsTitle">
            <h2 className="skillsDesc">Frontend:</h2>
            <h3 className="skills">HTML |</h3>
            <h3 className="skills">CSS |</h3>
            <h3 className="skills">React JS |</h3>
            <h3 className="skills">Tailwind CSS |</h3>
            <h3 className="skills">MUI |</h3>
            <h3 className="skills">Chakra UI |</h3>
            <h3 className="skills">Framer Motion</h3>
          </div>
          <div className="skillsTitle">
            <h2 className="skillsDesc">Backend:</h2>
            <h3 className="eskills">Django |</h3>
            <h3 className="skills">Django REST |</h3>
            <h3 className="skills">FastAPI</h3>
          </div>
          <div className="skillsTitle">
            <h2 className="skillsDesc">SQL DB:</h2>
            <h3 className="skills">MYSQL</h3>
          </div>
          <div className="skillsTitle">
            <h2 className="skillsDesc">NoSQL DB:</h2>
            <h3 className="skills">Firebase |</h3>
            <h3 className="skills">Supabase</h3>
          </div>
          <div className="skillsTitle">
            <h2 className="skillsDesc">DevOps:</h2>
            <h3 className="skills">Git |</h3>
            <h3 className="skills">Github |</h3>
            <h3 className="skills">Docker</h3>
          </div>
          <div className="skillsTitle">
            <h2 className="text-blue-500 text-[14px] lg:text-[18px]">
              Fimiliar With:
            </h2>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              Design Pattern |
            </h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              Redux |
            </h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              Celery |
            </h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              Celery Beat |
            </h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              React Query |
            </h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              Flutter |
            </h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              Web Scraping
            </h3>
          </div>
          <div className="skillsTitle">
            <h2 className="skillsDesc">Machine Learning:</h2>
            <h3 className="skills">NLP |</h3>
            <h3 className="skills">TTS |</h3>
            <h3 className="skills">VITS |</h3>
            <h3 className="skills">FastPitch |</h3>
            <h3 className="skills">Tecotron |</h3>
            <h3 className="skills">Data Processing</h3>
          </div>

          <h1 className="pt-6 text-[15px] lg:text-[20px]">Proficient in:</h1>

          <div className="flex flex-col">
            <div className="flex items-center">
              <FaPooStorm /> <h3 className="profficientSkills">C++</h3>
            </div>
            <div className="flex items-center">
              <FaPooStorm /> <h3 className="profficientSkills">Python</h3>
            </div>
            <div className="flex items-center">
              <FaPooStorm /> <h3 className="profficientSkills">JavaScript</h3>
            </div>
            <div className="flex items-center">
              <FaPooStorm />{" "}
              <h3 className="profficientSkills">
                Algorithomic Problem Solving
              </h3>
            </div>
            <div className="flex items-center">
              <FaPooStorm /> <h3 className="profficientSkills">Backend</h3>
            </div>
            <div className="flex items-center">
              <FaPooStorm /> <h3 className="profficientSkills">Frontend</h3>
            </div>
            <div className="flex items-center">
              <FaPooStorm />{" "}
              <h3 className="profficientSkills">Competitive Programming</h3>
            </div>
            <div className="flex items-center">
              <FaPooStorm />{" "}
              <h3 className="profficientSkills">
                Data Structure and Algorithms
              </h3>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
