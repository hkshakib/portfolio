import { motion } from "framer-motion";

import { GrUserExpert } from "react-icons/gr";

import { skills, skillsData } from "../static/Data";
import Image from "../static/work.gif";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex pt-2 lg:pt-[100px] items-center justify-center relative"
    >
      <div className="flex flex-col lg:flex-row">
        <motion.div
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 3 }}
          initial={{ x: -700 }}
          style={{ overflow: "hidden" }}
          className="flex lg:flex-1 lg:justify-center mr-[10px]"
        >
          <div className="flex lg:basis-[100%]">
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
            {skills.map((category, index) => (
              <div className="skillsTitle" key={index}>
                <h2 className="skillsDesc">{category.category}:</h2>
                {category.skills.map((skill, skillIndex) => (
                  <h3 className="skills" key={skillIndex}>
                    {skill} {skillIndex < category.skills.length - 1 && "|"}
                  </h3>
                ))}
              </div>
            ))}

            <h1 className="pt-6 text-[15px] lg:text-[20px]">Proficient in:</h1>
            <div className="flex flex-col">
              {skillsData.map((skill, index) => (
                <div className="flex items-center" key={index}>
                  <GrUserExpert />{" "}
                  <h3 className="profficientSkills">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
