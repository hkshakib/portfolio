import { motion } from "framer-motion";
import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[35px] lg:text-[56px] font-mono mb-[50px]">
        Experience
      </h1>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
        <motion.div
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 3 }}
          initial={{ x: -700 }}
          style={{ overflow: "hidden" }}
          className="col-span-4 w-full h-full "
        >
          <div className="w-full h-full bg-[#FCF4FF] rounded-md p-2 md:pl-4">
            <h1 className="text-black text-xl font-medium py-1">
              Junior Software Engineer (Part-Time)
            </h1>
            <h2 className="text-black text-[16px] font-normal py-1">
              March 2021 - January 2022
            </h2>
            <p className="text-gray-500 sm:text-sm text-xs">
              During my tenure at LIILAB, I worked as a backend developer for 8
              months and contributed to the development of PCBuilder, a
              comprehensive full-stack website. PCBuilder is a user-friendly
              platform designed to assist individuals who lack knowledge about
              purchasing PCs. It enables users to easily navigate through the
              website, select desired PC components, and build their own
              customized PC based on their specific requirements. Through my
              involvement in this project, I gained valuable experience in
              Django development and contributed to creating a seamless and
              intuitive user experience for PC enthusiasts.
            </p>
          </div>
        </motion.div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-indigo-300"></div>
          <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-1 text-white text-center">
            1
          </div>
        </div>
        <div className="col-span-4 w-full h-full"></div>

        <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-indigo-300"></div>
          <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-1 text-white text-center">
            2
          </div>
        </div>
        <motion.div
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 3 }}
          initial={{ x: 850 }}
          style={{ overflow: "hidden" }}
          className="col-span-4 w-full h-full "
        >
          <div className="w-full h-full bg-[#FEFAF0] rounded-md p-2 md:pl-4">
            <h1 className="text-black text-xl font-medium py-1">
              ACM Coordinator Lead
            </h1>
            <h2 className="text-black text-[16px] font-normal py-1">
              January 2021 - January 2022
            </h2>
            <p className="text-gray-500 sm:text-sm text-xs">
              As the Lead ACM Co-Ordinator of the Leading University Computer
              Club, I took charge of organizing and overseeing a diverse range
              of events, including programming contests, quiz contests, and ICT
              fests. With my strong leadership skills, I led a dedicated team of
              organizers to successfully execute these events, ensuring their
              smooth operation and high-quality standards. Through these
              initiatives, I provided an enriching platform for students to
              showcase their programming prowess, engage in healthy competition,
              and foster a vibrant tech community on campus. My role as an
              organizer allowed me to refine my organizational abilities,
              strengthen my teamwork skills, and contribute to the overall
              growth and success of the Computer Club.
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 3 }}
          initial={{ x: -700 }}
          style={{ overflow: "hidden" }}
          className="col-span-4 w-full h-full "
        >
          <div className="w-full h-full bg-[#FFF4F4] rounded-md p-2 md:pl-4">
            <h1 className="text-black text-xl font-medium py-1">
              ACM Cordinator
            </h1>
            <h2 className="text-black text-[16px] font-normal py-1">
              January 2020 - January 2021
            </h2>
            <p className="text-gray-500 sm:text-sm text-xs">
              As the ACM Co-Ordinator of the Leading University Computer Club
              for a period of 1 year, I played a crucial role in organizing and
              managing various programming contests, quiz contests, and ICT
              fests. I successfully collaborated with a team of talented
              individuals to create engaging and challenging events that
              fostered a competitive spirit among participants. Through these
              initiatives, I not only helped students enhance their programming
              skills but also provided a platform for knowledge sharing and
              networking within the university community. My experience as a
              co-organizer strengthened my leadership and organizational
              abilities while contributing to the growth of the club and
              promoting a vibrant tech culture on campus.
            </p>
          </div>
        </motion.div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-indigo-300"></div>
          <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-1 text-white text-center">
            3
          </div>
        </div>
        <div className="col-span-4 w-full h-full"></div>
      </div>
    </div>
  );
};

export default Experience;
