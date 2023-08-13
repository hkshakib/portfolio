import React from "react";
import { motion } from "framer-motion";
import { FaHandsClapping } from "react-icons/fa6";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import Avatar from "../static/avatar.png";
import BgHome from "../static/BgHome.jpg";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-[700px] w-[100%]">
      <motion.div
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 3 }}
        initial={{ x: -700 }}
        style={{ overflow: "hidden" }}
        className="flex flex-col flex-1 overflow-hidden justify-center items-center mb-2 lg:items-start  lg:pl-[200px] lg:pr-[0] lg:pt-[260px] "
      >
        <div className="flex lg:basis-[5%] flex-shrink-0 lg:w-[100%] gap-1">
          <p className="w-auto text-[#4A6CF7] font-semibold">Hey There</p>
          <FaHandsClapping className="text-[#FFA500]" />
          <p className="w-auto text-[#4A6CF7] font-semibold"> I am </p>
        </div>

        <div className="flex lg:basis-[5%] lg:w-[100%] mb-1">
          <h6 className="font-bold text-[#090E34] lg:text-[40px] lg:animate-typing animate-mobiletyping overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-4">
            Humayun Kibria Shakib
          </h6>
        </div>

        <div className="flex flex-wrap lg:basis-[2%]  lg:w-[100%] mb-2 gap-2">
          <h3 className="opacity-1 text-gray-400 text-[12px] lg:text-[16px]">
            Professional{" "}
          </h3>
          <h6 className="font-bold text-[#141c3a] text-[12px] lg:text-[1rem]">
            FullStack Web Developer
          </h6>
        </div>

        <div className="hidden lg:flex basis-[30%] flex-wrap lg:w-[50%] mb-2">
          <h3 className="opacity-1 text-gray-400">
            Eager and motivated software engineer ready to turn ideas into
            reality. With a solid foundation in C/C++, JavaScript, Python,
            Django, FastAPI, and many more. I bring a fresh perspective and a
            passion for problem-solving to every project. Driven by a love for
            technology and a desire to make a positive impact, I'm constantly
            seeking new challenges and opportunities to grow. In my free time, I
            enjoy tinkering with new tech, practicing, and exploring new
            cultures. Let's build the future together!
          </h3>
        </div>

        <div className="flex basis-[10%] lg:w-[100%] gap-4 mt-[10px]">
          <a href="#footer">
            <button className="h-[30px] w-[100px] lg:leading-7 lg:h-[50px] lg:w-[180px] lg:text-[18px] border lg:border-2 lg:border-indigo-700 rounded-[50px] text-white  lg:text-black bg-[#6E07F3] lg:bg-white hover:bg-[#6E07F3] hover:transition-all duration-700 hover:text-white hover:shadow-lg text-[1rem]">
              Say Hello
            </button>
          </a>

          <div className="flex justify-center items-center text-[35px] gap-2 font-semibold">
            <a
              href="https://github.com/hkshakib"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub className="bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/hkshakib/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin className="bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]" />
            </a>
            <a
              href="https://web.facebook.com/Humayun.kibria.shakib/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFacebook className="bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]" />
            </a>
            <a
              href="https://twitter.com/HKibriaShakib"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter className="bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 3 }}
        initial={{ x: 850 }}
        style={{ overflow: "hidden" }}
        className="flex flex-1 overflow-hidden justify-end relative mt-16 lg:mt-0"
      >
        <img
          className="flex absolute max-w-[85%] top-[-55px] lg:top-[123px] left-0 right-[20px] bg-opacity-100 brightness-125"
          src={Avatar}
          alt="Avatar"
        />
        <img className="max-w-[100%]" src={BgHome} alt="bg" />
      </motion.div>
    </div>
  );
};

export default Home;
