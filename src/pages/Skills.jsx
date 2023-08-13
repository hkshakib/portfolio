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
            <h2 className="text-blue-600 text-[14px] lg:text-[18px]">
              Languages:
            </h2>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">C++ |</h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              Python |
            </h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">C |</h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              JavaScript |
            </h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">JAVA |</h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">Dart</h3>
          </div>
          <div className="flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]">
            <h2 className="text-blue-500 text-[14px] lg:text-[18px]">
              Frontend:
            </h2>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">HTML |</h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">CSS |</h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              React JS |
            </h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              Tailwind CSS |
            </h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">MUI</h3>
          </div>
          <div className="flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]">
            <h2 className="text-blue-500 text-[14px] lg:text-[18px]">
              Backend:
            </h2>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              Django |
            </h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              Django REST |
            </h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              FastAPI
            </h3>
          </div>
          <div className="flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]">
            <h2 className="text-blue-500 text-[14px] lg:text-[18px]">
              SQL DB:
            </h2>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">MYSQL</h3>
          </div>
          <div className="flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]">
            <h2 className="text-blue-500 text-[14px] lg:text-[18px]">
              NoSQL DB:
            </h2>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              Firebase
            </h3>
          </div>
          <div className="flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px] ">
            <h2 className="text-blue-500 text-[14px] lg:text-[1rem]">
              DevOps:
            </h2>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">Git |</h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">
              Github |
            </h3>
            <h3 className="text-gray-500 text-[12px] lg:text-[1rem]">Docker</h3>
          </div>
          <div className="flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]">
            <h2 className="text-blue-500 text-[14px] lg:text-[18px]">
              Fimiliar With:
            </h2>
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

          <h1 className="pt-6 text-[15px] lg:text-[20px]">Proficient in:</h1>

          <div className="flex flex-col">
            <div className="flex items-center">
              <FaPooStorm />{" "}
              <h3 className="text-gray-500 ml-4 text-[12px] lg:text-[18px]">
                C++
              </h3>
            </div>
            <div className="flex items-center">
              <FaPooStorm />{" "}
              <h3 className="text-gray-500 ml-4 text-[12px] lg:text-[18px]">
                Python
              </h3>
            </div>
            <div className="flex items-center">
              <FaPooStorm />{" "}
              <h3 className="text-gray-500 ml-4 text-[12px] lg:text-[18px]">
                JavaScript
              </h3>
            </div>
            <div className="flex items-center">
              <FaPooStorm />{" "}
              <h3 className="text-gray-500 ml-4 text-[12px] lg:text-[18px]">
                Algorithomic Problem Solving
              </h3>
            </div>
            <div className="flex items-center">
              <FaPooStorm />{" "}
              <h3 className="text-gray-500 ml-4 text-[12px] lg:text-[18px]">
                Backend
              </h3>
            </div>
            <div className="flex items-center">
              <FaPooStorm />{" "}
              <h3 className="text-gray-500 ml-4 text-[12px] lg:text-[18px]">
                Frontend
              </h3>
            </div>
            <div className="flex items-center">
              <FaPooStorm />{" "}
              <h3 className="text-gray-500 ml-4 text-[12px] lg:text-[18px]">
                Competitive Programming
              </h3>
            </div>
            <div className="flex items-center">
              <FaPooStorm />{" "}
              <h3 className="text-gray-500 ml-4 text-[12px] lg:text-[18px]">
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
