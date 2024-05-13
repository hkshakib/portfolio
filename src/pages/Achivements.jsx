import { motion } from "framer-motion";

import Achivement from "../components/Achivement";
import AchivmentImage from "../static/Achivment.jpg";

const Achivements = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <motion.div
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 3 }}
        initial={{ x: -700 }}
        style={{ overflow: "hidden" }}
        className="flex lg:flex-1 m-[15px] lg:ml-[40px]"
      >
        <img
          className="bg-contain rounded-lg"
          src={AchivmentImage}
          alt="skills"
        />
      </motion.div>

      <motion.div
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 3 }}
        initial={{ x: 850 }}
        style={{ overflow: "hidden" }}
        className="flex flex-col lg:flex-1 lg:justify-start lg:items-start lg:pt-[50px] pl-4 lg:pl-12"
      >
        <h1 className="text-[35px] lg:text-[56px] font-mono">Achivements</h1>
        <Achivement Text={"Participated in ICPC Dhaka Regional 2021(BUBT)."} />
        <Achivement
          Text={"8th Among Private University in ICPC Preliminary 2021."}
        />
        <Achivement
          Text={
            "Top 10 in NSU ICE Fest Inter University Programming Contest 2020."
          }
        />
        <Achivement
          Text={
            "Champions, Mathophobic Skyvers, LU Intra University Programming Competition 2020."
          }
        />
        <Achivement
          Text={
            "Champions, LUZeroIQ, LU Intra University Programming Competition 2021."
          }
        />
        <Achivement Text={"Top 6 in Bangladesh, LUZeroIQ, IEEE Extreme 14."} />
        <Achivement
          Text={
            "Top 10 In Country Wise Ranking, Codeforces Round 643 (Div. 2)."
          }
        />
        <Achivement Text={"National ICT Quiz Champions 2018."} />
        <Achivement Text={"LU Intra University ICT Quiz Champions 2018."} />
        <Achivement Text={"LU Intra University ICT Quiz Champions 2019."} />
        <Achivement Text={"LU Intra University ICT Quiz Champions 2020."} />
        <Achivement Text={"LU Intra University ICT Quiz Champions 2021."} />
      </motion.div>
    </div>
  );
};

export default Achivements;
