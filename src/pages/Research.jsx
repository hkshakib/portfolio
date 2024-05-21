import { motion } from "framer-motion";
import AiProject from "../components/AiProject";

const Research = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center text-[35px] lg:text-[56px] font-mono mb-[20px]">
        <h1>Research</h1>
      </div>

      <motion.div
        animate={{ x: 0 }}
        transition={{ ease: "easeIn", duration: 2 }}
        initial={{ x: -1000 }}
        className="flex flex-wrap gap-8 p-6 lg:p-12 justify-center"
      >
        <AiProject/>
      </motion.div>
    </div>
  );
};

export default Research;
