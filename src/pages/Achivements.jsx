import { motion } from "framer-motion";

import AchivmentImage from "../static/Achivment.jpg";
import Achivement from "../components/Achivement";
import { achievementsData } from "../static/Data";

const Achivements = () => {

  const renderAchievements = (achievements) => {
    return achievements.map((text, index) => (
      <Achivement key={index} Text={text} />
    ));
  };

  return (
    <section
      id="achivements"
      className="flex pt-[50px] lg:pt-[200px] items-center justify-center relative"
    >
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
          {renderAchievements(achievementsData)}
        </motion.div>
      </div>
    </section>
  );
};

export default Achivements;
