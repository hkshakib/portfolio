import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaHandsClapping } from "react-icons/fa6";

import { motion } from "framer-motion";

import BgHome from "../static/BgHome.jpg";
import Avatar from "../static/avatar.png";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col lg:flex-row h-[700px]">
      <motion.div
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 3 }}
        initial={{ x: -700 }}
        style={{ overflow: "hidden" }}
        className="flex flex-col basis-[50%] justify-between items-center"
      >
        <div className="flex basis-[40%] flex-col w-[100%] justify-center p-10">
          <div className="flex flex-col">
            <div className="flex">
              <p className="w-auto text-[#4A6CF7] font-semibold mr-2">
                Hey There
              </p>
              <FaHandsClapping className="text-[#FFA500] text-[16px] lg:text-[25px] animate-wavinghand" />
              <p className="w-auto text-[#4A6CF7] font-semibold ml-2"> I am </p>
            </div>

            <div className="flex basis-[60%]">
              <h6 className="font-bold text-[#090E34] md:text-[30px] lg:text-[35px] xl:text-[35px] animate-styping lg:animate-tablettyping xl:animate-typing sm:animate-mobiletyping overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-4">
                Humayun Kibria Shakib
              </h6>
            </div>

            <div className="flex flex-wrap gap-2 basis-[10%]">
              <h3 className="opacity-1 text-gray-400">Professional </h3>
              <h6 className="font-bold text-[#141c3a]">
                FullStack Web Developer
              </h6>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex pl-10 animate-wavinghand">
          <p className="font-mono font-semibold">
            Let's, Push The Limit, Beyond Infinite!
          </p>
        </div>
        <div className="hidden w-[100%] lg:flex lg:basis-[50%] justify-center items-center">
          <div className="opacity-1 text-gray-400 p-10">
            <p>
              Hey there! 👋 I'm a{" "}
              <span className="font-bold text-black">full-stack</span> sorcerer
              who weaves web wonders with Django Rest and React.
            </p>
            <p>
              🧙‍♂️ Fluent in the magical languages of{" "}
              <span className="font-bold text-black">
                Python, C++, and JavaScript,
              </span>{" "}
              I bring your digital dreams to life.
            </p>
            <p>
              💻✨ From the backend wizardry to the front-end artistry using{" "}
              <span className="font-bold text-black">Tailwind CSS,</span> I'm on
              a quest to make the internet a more enchanting place, one line of
              code at a time.
            </p>
            <p>
              🌐 Ready to embark on this coding adventure together? Let's craft
              some digital magic! 🚀🔮
            </p>
          </div>
        </div>

        <div className="flex flex-1 lg:basis-[10%] items-center justify-center gap-8 w-[100%]">
          <a href="#footer" className="hidden md:flex">
            <button className="hidden md:flex justify-center items-center h-[40px] w-[100px] md:h-[50px] md:w-[150px] lg:leading-7 lg:h-[50px] lg:w-[180px] lg:text-[18px] border lg:border-2 lg:border-indigo-700 rounded-[50px] text-white  lg:text-black bg-[#6E07F3] lg:bg-white hover:bg-[#6E07F3] hover:transition-all duration-700 hover:text-white hover:shadow-lg text-[14px]">
              Say Hello
            </button>
          </a>

          <div className="flex justify-center items-center text-[35px] gap-10 md:gap-4 font-semibold">
            <a
              href="https://github.com/hkshakib"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub className="HomeIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/hkshakib/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin className="HomeIcon" />
            </a>
            <a
              href="https://web.facebook.com/Humayun.kibria.shakib/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFacebook className="HomeIcon" />
            </a>
            <a
              href="https://twitter.com/HKibriaShakib"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter className="HomeIcon" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 3 }}
        initial={{ x: 850 }}
        style={{ overflow: "hidden" }}
        className="flex basis-[50%] relative"
      >
        <img
          className="flex absolute bottom-0 left-0 md:bottom-0 md:left-24 lg:bottom-0 lg:left-0 h-[400px] lg:h-[600px] bg-opacity-100 brightness-125"
          src={Avatar}
          alt="Avatar"
        />
        <img
          className="object-fit flex-1 overflow-hidden"
          src={BgHome}
          alt="bg"
        />
      </motion.div>
    </div>
  );
};

export default Home;
