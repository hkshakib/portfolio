import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FramerProject = ({Title}) => {
  const [selectedTab, setSelectedTab] = useState("Projects");

  return (
    <div className="w-96 h-72 rounded-lg bg-white shadow-lg flex flex-col overflow-hidden">
      <div className="bg-white py-5">
        <ul className="flex">
          <li
            key={"Projects"}
            className={`${
              "Projects" === selectedTab ? "bg-gray-200" : ""
            } flex justify-between items-center w-full py-2 px-3 cursor-pointer`}
            onClick={() => setSelectedTab("Projects")}
          >
            <span>Projects</span>
            {"Projects" === selectedTab ? (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
                layoutId="underline"
              />
            ) : null}
          </li>
          <li
            key={"Technologies"}
            className={`${
              "Technologies" === selectedTab ? "bg-gray-200" : ""
            } flex justify-between items-center w-full py-2 px-3 cursor-pointer`}
            onClick={() => setSelectedTab("Technologies")}
          >
            <span>Technologies</span>
            {"Technologies" === selectedTab ? (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
                layoutId="underline"
              />
            ) : null}
          </li>
        </ul>
      </div>
      <main className="flex justify-center items-center text-8xl flex-grow select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? "😋" : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
export default FramerProject;
