import React, { useEffect, useRef, useState } from "react";

import { SlCloudDownload } from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

import { Link } from "react-scroll";

import { motion } from "framer-motion";

import useScroll from "../hooks/useScroll";

import { closeMenuAndScroll } from "../utils/navUtils";

import CV from "../static/Resume.pdf";
import { navItems } from "../static/Data";



const Navbar = () => {
  const { activeSection, isNavbarSticky } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleCloseOutside = (e) => {
      if (!navRef.current || navRef.current.contains(e.target)) return;
      e.stopPropagation();
      setMenuOpen(false);
    };

    document.addEventListener("click", handleCloseOutside, { capture: true });
    return () => {
      document.removeEventListener("click", handleCloseOutside, { capture: true });
    };
  }, [menuOpen]);

  const handleCloseMenuAndScroll = (sectionId) => {
    closeMenuAndScroll(sectionId, setMenuOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`flex justify-start lg:justify-center items-center h-16 z-10 lg:w-full font-inter pt-4 pr-2 pb-2 shadow-md ${
        isNavbarSticky ? "sticky top-0 bg-white border-b" : ""
      }`}
    >
      <div className="flex font-bold text-xl lg:pl-8 ml-4 font-mono">
        <motion.a
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          href="/"
        >
          <span className="text-blue-600">HKS</span>
          <span>hakib</span>
        </motion.a>
      </div>

      <div className="hidden lg:flex md:flex-1 justify-center items-center lg:gap-12">
        <ul className="flex xl:gap-12 gap-4 text-[14px] tracking-wider xl:text-[16px] text-[#090E34]">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={
                activeSection === item.id
                  ? "text-blue-600 animate-hFlip"
                  : "hover:text-blue-600 cursor-pointer"
              }
            >
              <Link
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                onClick={() => handleCloseMenuAndScroll(item.id)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 hidden lg:block"
          >
            <motion.button
              className="flex justify-center items-center border h-[40px] w-[200px] my-1 rounded-lg bg-blue-500 text-white hover:bg-blue-400 hover:shadow-lg text-[13px]"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="flex gap-4 justify-center items-center">
                <SlCloudDownload className="w-5 h-5" />
                <span className="text-[14px]">Download Resume</span>
              </span>
            </motion.button>
          </a>
      

      <div className="lg:hidden flex flex-1 mr-2 lg:mr-0 lg:basis-[70%] justify-end gap-8">
        <button
          className="flex text-black cursor-pointer hover:text-gray-600"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              transition={{ duration: 1 }}
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
          className="lg:hidden h-[100vh] absolute top-16 left-0 right-0 bg-white z-10 w-full transition-opacity duration-300 ease-in-out border-b shadow-lg p-1 border-t-[1px]"
          ref={navRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ul className="flex flex-col gap-4 text-[16px] text-[#090E34] transition-all duration-500 ease-in p-4">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                className={
                  activeSection === item.id
                    ? "text-blue-600 border-b-[1px]"
                    : "hover:text-blue-600 cursor-pointer border-b-[1px]"
                }
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.5 + index * 0.1 }}
              >
                <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <motion.button
              className="flex justify-center items-center border h-[40px] w-[200px] my-1 rounded-lg bg-blue-500 text-white hover:bg-blue-400 hover:shadow-lg text-[13px]"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="flex gap-4 justify-center items-center">
                <SlCloudDownload className="w-5 h-5" />
                <span>Download Resume</span>
              </span>
            </motion.button>
          </a>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
