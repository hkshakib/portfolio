import React, { useEffect, useRef, useState } from "react";

import { SlCloudDownload } from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

import { Link } from "react-scroll";

import { motion } from "framer-motion";

import useScroll from "../hooks/useScroll";

import { closeMenuAndScroll } from "../utils/navUtils";


import CV from "../static/Resume.pdf";

function Navbar() {
  const { activeSection, isNavbarSticky } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const handleCloseOutSide = (e) => {
      if (!navRef?.current || navRef.current?.contains(e.target)) {
        return;
      }
      e.stopPropagation(); // prevent the event from further propagating up the DOM tree. This means that the event won't trigger event handlers attached to ancestor elements. otherwise Humburger won't works on second click
      setMenuOpen(false);
    };

    document.addEventListener("click", handleCloseOutSide, { capture: true });

    return () => {
      document.removeEventListener("click", handleCloseOutSide, {
        capture: true,
      });
    };
  }, [menuOpen]);

  const handleCloseMenuAndScroll = (sectionId) => {
    closeMenuAndScroll(sectionId, setMenuOpen)
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`flex justify-start lg:justify-center items-center h-16 z-10  lg:w-[100%] font-inter pt-4 pr-2 pb-2 ${
        isNavbarSticky ? "sticky top-0 bg-white border-b" : ""
      }`}
    >
      <div className="flex font-bold text-xl lg:pl-8 ml-4 font-mono">
        <motion.a
         initial={{
          rotate: "0deg"
        }}
        animate={{
          rotate: "360deg"
        }}
         href="/">
          <span className="text-blue-600">HKS</span>
          <span>hakib</span>
        </motion.a>
      </div>

      <div className="hidden lg:flex md:flex-1 justify-center items-center lg:gap-12">
        <ul className="flex xl:gap-12 gap-4 text-[14px] xl:text-[16px]">
          <li
            className={
              activeSection === "skills"
                ? "text-blue-600 animate-hFlip"
                : "hover:text-blue-600 cursor-pointer"
            }
          >
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => handleCloseMenuAndScroll("skills")}
            >
              Skills
            </Link>
          </li>
          <li
            className={
              activeSection === "problem-solving"
                ? "text-blue-600  animate-hFlip"
                : "hover:text-blue-600 cursor-pointer"
            }
          >
            <Link
              activeClass="active"
              to="problem-solving"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => handleCloseMenuAndScroll("problem-solving")}
            >
              Problem Solving
            </Link>
          </li>
          <li
            className={
              activeSection === "experience"
                ? "text-blue-600 animate-hFlip"
                : "hover:text-blue-600 cursor-pointer"
            }
          >
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => handleCloseMenuAndScroll("experience")}
            >
              Experience
            </Link>
          </li>
          <li
            className={
              activeSection === "projects"
                ? "text-blue-600 animate-hFlip"
                : "hover:text-blue-600 cursor-pointer"
            }
          >
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => handleCloseMenuAndScroll("projects")}
            >
              Projects
            </Link>
          </li>
          <li
            className={
              activeSection === "research"
                ? "text-blue-600 animate-hFlip"
                : "hover:text-blue-600 cursor-pointer"
            }
          >
            <Link
              activeClass="active"
              to="research"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => handleCloseMenuAndScroll("research")}
            >
              Research
            </Link>
          </li>
          <li
            className={
              activeSection === "education"
                ? "text-blue-600 animate-hFlip"
                : "hover:text-blue-600 cursor-pointer"
            }
          >
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => handleCloseMenuAndScroll("education")}
            >
              Education
            </Link>
          </li>
          <li
            className={
              activeSection === "achivements"
                ? "text-blue-600 animate-hFlip"
                : "hover:text-blue-600 cursor-pointer"
            }
          >
            <Link
              activeClass="active"
              to="achivements"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => handleCloseMenuAndScroll("achivements")}
            >
              Achivements
            </Link>
          </li>
          <li
            className={
              activeSection === "resume"
                ? "text-blue-600 animate-hFlip"
                : "hover:text-blue-600 cursor-pointer"
            }
          >
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => handleCloseMenuAndScroll("resume")}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>


      <div className="lg:hidden flex flex-1 mr-2 lg:mr-0 lg:basis-[70%] justify-end gap-8">
        <button
          className="flex text-black cursor-pointer hover:text-gray-600"
          onClick={toggleMenu}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {menuOpen ? (
            <motion.div
              initial={{
                rotate: "0deg"
              }}
              animate={{
                rotate: "180deg"
              }}
              transition={{
                duration: 1,
              }}
            >
              <RxCross1 className="text-[35px] font-extrabold text-blue-700" />
            </motion.div>
          ) : (
            <motion.div>
              <AiOutlineMenu className="text-[25px] text-blue-700" />
            </motion.div>
          )}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          className="lg:hidden absolute top-16 left-0 right-0 bg-white z-10 w-[100%] transition-opacity duration-300 ease-in-out border-b shadow-lg p-1 border-t-[1px]"
          ref={navRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
        >
          <ul className="flex flex-col gap-4 text-[16px] text-black transition-all duration-500 ease-in p-4">
            <li
              className={
                activeSection === "skills"
                  ? "text-blue-600 border-b-[1px]"
                  : "hover:text-blue-600 cursor-pointer border-b-[1px]"
              }
            >
              <a href="#skills" onClick={() => setMenuOpen(!menuOpen)}>
                Skills
              </a>
            </li>
            <li
              className={
                activeSection === "problem-solving"
                  ? "text-blue-600 border-b-[1px]"
                  : "hover:text-blue-600 cursor-pointer border-b-[1px]"
              }
            >
              <a href="#problem-solving" onClick={() => setMenuOpen(!menuOpen)}>
                Problem Solving
              </a>
            </li>
            <li
              className={
                activeSection === "experience"
                  ? "text-blue-600 border-b-[1px]"
                  : "hover:text-blue-600 cursor-pointer border-b-[1px]"
              }
            >
              <a href="#experience" onClick={() => setMenuOpen(!menuOpen)}>
                Experience
              </a>
            </li>
            <li
              className={
                activeSection === "projects"
                  ? "text-blue-600 border-b-[1px]"
                  : "hover:text-blue-600 cursor-pointer border-b-[1px]"
              }
            >
              <a href="#projects" onClick={() => setMenuOpen(!menuOpen)}>
                Projects
              </a>
            </li>
            <li
              className={
                activeSection === "research"
                  ? "text-blue-600 border-b-[1px]"
                  : "hover:text-blue-600 cursor-pointer border-b-[1px]"
              }
            >
              <a href="#research" onClick={() => setMenuOpen(!menuOpen)}>
                Research
              </a>
            </li>
            <li
              className={
                activeSection === "education"
                  ? "text-blue-600 border-b-[1px]"
                  : "hover:text-blue-600 cursor-pointer border-b-[1px]"
              }
            >
              <a href="#education" onClick={() => setMenuOpen(!menuOpen)}>
                Education
              </a>
            </li>
            <li
              className={
                activeSection === "achivements"
                  ? "text-blue-600 border-b-[1px]"
                  : "hover:text-blue-600 cursor-pointer border-b-[1px]"
              }
            >
              <a href="#achivements" onClick={() => setMenuOpen(!menuOpen)}>
                Achivements
              </a>
            </li>
            <li
              className={
                activeSection === "resume"
                  ? "text-blue-600 border-b-[1px]"
                  : "hover:text-blue-600 cursor-pointer border-b-[1px]"
              }
            >
              <a href="#resume" onClick={() => setMenuOpen(!menuOpen)}>
                Resume
              </a>
            </li>
          </ul>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-[10px]"
          >
            <button className="flex justify-center items-center border h-[40px] w-[200px]  my-1 rounded-lg bg-blue-500 text-white hover:bg-blue-400 hover:shadow-lg text-[13px]">
              <span className="flex gap-4 justify-center items-center">
                <SlCloudDownload className="w-5 h-5"/>
                <span>Download Resume</span>
              </span>
            </button>
          </a>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
