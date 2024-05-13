import React, { useEffect, useState } from "react";

import { FaRegHand } from "react-icons/fa6";

import axios from "axios";

import { motion } from "framer-motion";

import CF from "../static/CF.png";
import CC from "../static/codechef.png";
import LC from "../static/leetcode.png";

const ProblemSolving = () => {
  const [codeForcesData, setCodeForcesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://codeforces.com/api/user.info?handles=_Bohemian"
        );
        setCodeForcesData(response.data);
      } catch (error) {
        console.error("Error fetching Codeforces data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="flex justify-center text-[35px] lg:text-[56px] font-mono mb-[20px]">
        Problem Solving
      </h1>

      <div className="flex gap-12 justify-center lg:gap-20 flex-wrap lg:p-10">
        <motion.div
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 3 }}
          initial={{ x: -700 }}
          style={{ overflow: "hidden" }}
          className="flex lg:flex-1 bg-[#FCF4FF] h-[250px] lg:h-[400px] lg:w-[100%] shadow-lg rounded-md"
        >
          <div className="flex flex-1 flex-col">
            <div className="flex justify-center items-center pt-3 lg:pt-0">
              <img
                className="h-[40px] w-[40px] lg:h-[90px] lg:w-[90px]"
                src={CF}
                alt=""
              />
              <h1 className="lg:ml-[10px] text-[20px] lg:text-[30px]">
                CodeForces
              </h1>
            </div>

            <div className="flex justify-around items-center pt-10 pr-2 pl-2 lg:pl-0 lg:pr-0">
              <div className="flex flex-col justify-center items-center bg-white h-[100px] w-[150px] rounded-lg">
                <h1 className="uppercase font-mono lg:text-[16px] text-[12px] mb-[10px]">
                  {codeForcesData && codeForcesData.result[0].maxRank}
                </h1>
                <h1 className="flex flex-col justify-center items-center text-[10px] lg:text-[12px]">
                  <span className="flex text-[12px] lg:text-[16px] text-[#4E4FEB]">
                    {codeForcesData && codeForcesData.result[0].maxRating}
                  </span>
                  <span className="uppercase text-[10px] lg:text-[12px]">
                    Highest Ratings
                  </span>
                </h1>
              </div>

              <div className="flex flex-col justify-center items-center bg-white h-[100px] w-[150px] rounded-lg  ml-2 lg:ml-0">
                <h1 className="uppercase font-mono lg:text-[16px] text-[12px] mb-[10px]">
                  Total Solved
                </h1>
                <h1 className="flex flex-col justify-center items-center text-[10px] lg:text-[12px]">
                  <span className="flex text-[12px] lg:text-[16px] text-[#4E4FEB]">
                    1560
                  </span>
                  <span className="uppercase text-[10px] lg:text-[12px]">
                    Problems
                  </span>
                </h1>
              </div>
            </div>

            <div className="flex flex-1 lg:flex-0 justify-center items-end p-4">
              <button className="flex justify-center items-center border w-[120px] h-[35px] bg-blue-800 rounded-md text-white">
                <a
                  className="text-[14px]"
                  href="https://codeforces.com/profile/_Bohemian"
                >
                  <span className="flex gap-2 justify-center items-center">
                    <FaRegHand className="h-5 w-5" />
                    <span>Bohemian</span>
                  </span>
                </a>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ overflow: "hidden" }}
          className="flex lg:flex-1 bg-[#FEFAF0] h-[250px] lg:h-[400px] lg:w-[400px] shadow-lg  rounded-md"
        >
          <div className="flex flex-1 flex-col">
            <div className="flex justify-center items-center pt-3 lg:pt-0">
              <img
                className="h-[40px] w-[40px] lg:h-[90px] lg:w-[90px]"
                src={CC}
                alt=""
              />
              <h1 className="lg:ml-[10px] text-[20px] lg:text-[30px]">
                CodeChef
              </h1>
            </div>

            <div className="flex justify-around items-center pt-10 pr-2 pl-2 lg:pl-0 lg:pr-0">
              <div className="flex flex-col justify-center items-center bg-white h-[100px] w-[150px] rounded-lg ">
                <h1 className="uppercase font-mono lg:text-[16px] text-[12px] mb-[10px]">
                  4*
                </h1>
                <h1 className="flex flex-col justify-center items-center text-[10px] lg:text-[12px]">
                  <span className="flex text-[12px] lg:text-[16px] text-[#4E4FEB]">
                    1810
                  </span>
                  <span className="uppercase text-[10px] lg:text-[12px]">
                    Highest Ratings
                  </span>
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center bg-white h-[100px] w-[150px] rounded-lg ml-2 lg:ml-0">
                <h1 className="uppercase font-mono lg:text-[16px] text-[12px] mb-[10px]">
                  Total Solved
                </h1>
                <h1 className="flex flex-col justify-center items-center text-[10px] lg:text-[12px]">
                  <span className="flex text-[12px] lg:text-[16px] text-[#4E4FEB]">
                    280
                  </span>
                  <span className="uppercase text-[12px] lg:text-[14px]">
                    Problems
                  </span>
                </h1>
              </div>
            </div>

            <div className="flex flex-1 lg:flex-0 justify-center items-end p-4">
              <button className="flex justify-center items-center border w-[120px] h-[35px] bg-blue-800 rounded-md text-white">
                <a
                  className="text-[14px]"
                  href="https://www.codechef.com/users/hkshakib"
                >
                  <span className="flex gap-2 justify-center items-center">
                    <FaRegHand className="h-5 w-5" />
                    <span>hkshakib</span>
                  </span>
                </a>
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ overflow: "hidden" }}
          className="flex lg:flex-1 bg-[#FFF4F4] h-[250px] lg:h-[400px] lg:w-[400px] shadow-lg rounded-md"
        >
          <div className="flex flex-1 flex-col">
            <div className="flex justify-center items-center pt-3">
              <img
                className="h-[40px] w-[40px] lg:h-[80px] lg:w-[80px]"
                src={LC}
                alt=""
              />
              <h1 className="lg:ml-[10px] text-[20px] lg:text-[30px]">
                LeetCode
              </h1>
            </div>

            <div className="flex justify-around items-center pt-10 pr-2 pl-2 lg:pl-0 lg:pr-0">
              <div className="flex flex-col justify-center items-center bg-white h-[100px] w-[150px] rounded-lg">
                <h1 className="uppercase font-mono lg:text-[16px] text-[12px] mb-[10px]">
                  Max streak
                </h1>
                <h1 className="flex flex-col justify-center items-center text-[10px] lg:text-[12px]">
                  <span className="flex text-[12px] lg:text-[16px] text-[#4E4FEB]">
                    35
                  </span>
                  <span className="uppercase text-[12px] lg:text-[14px]">
                    Days
                  </span>
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center bg-white h-[100px] w-[150px] rounded-lg ml-2 lg:ml-0">
                <h1 className="uppercase font-mono lg:text-[16px] text-[12px] mb-[10px]">
                  Total Solved
                </h1>
                <h1 className="flex flex-col justify-center items-center text-[10px] lg:text-[12px]">
                  <span className="flex text-[12px] lg:text-[16px] text-[#4E4FEB]">
                    113
                  </span>
                  <span className="uppercase text-[12px] lg:text-[14px]">
                    Problems
                  </span>
                </h1>
              </div>
            </div>

            <div className="flex flex-1 lg:flex-0 justify-center items-end p-4">
              <button className="flex justify-center items-center border w-[150px] h-[35px] bg-blue-800 rounded-md text-white">
                <a
                  className="text-[14px]"
                  href="https://leetcode.com/humayun_kibria/"
                >
                  <span className="flex gap-2 justify-center items-center">
                    <FaRegHand className="h-5 w-5" />
                    <span>humayun_kibria</span>
                  </span>
                </a>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemSolving;
