import { motion } from "framer-motion";
import { LuTrophy } from "react-icons/lu";
import Achivement from "../components/Achivement";
import { achievementsData } from "../static/Data";

const Achivements = () => {
  const renderAchievements = (achievements) =>
    achievements.map((text, index) => <Achivement key={index} Text={text} />);

  return (
    <section
      id="achivements"
      className="flex pt-[50px] lg:pt-[200px] items-center justify-center relative pb-5"
    >
      <div className="flex flex-col lg:flex-row w-full max-w-7xl px-4 lg:px-8 gap-8">
        <div className="flex lg:flex-1">
          <ArtPanel />
        </div>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 80, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="flex flex-col lg:flex-1 lg:justify-start lg:items-start lg:pt-[20px] pl-2 lg:pl-6"
        >
          <h1 className="text-[35px] lg:text-[56px] font-mono mb-3 text-white">
            Achievements
          </h1>

          <div className="relative w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-4 lg:p-6">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-400/20 to-purple-400/10 blur-xl" />
            {renderAchievements(achievementsData)}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achivements;

function ArtPanel() {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      className="relative w-full h-[340px] lg:h-[540px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden"
    >
      <div className="absolute inset-0 blur-3xl -z-10">
        <div className="absolute -top-16 left-[8%] h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-500/50 to-pink-500/30 mix-blend-screen" />
        <div className="absolute top-[30%] right-[5%] h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/50 to-teal-400/30 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[28%] h-72 w-72 rounded-full bg-gradient-to-br from-amber-400/40 to-rose-400/30 mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[40%] h-44 w-44 rounded-full bg-gradient-to-br from-purple-400/40 to-indigo-400/30 mix-blend-screen" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_10px)]" />
      <motion.div
        className="absolute top-12 left-10 h-10 w-10 rounded-full bg-pink-400/40 blur-sm"
        animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-14 right-12 h-12 w-12 rounded-full bg-emerald-400/40 blur-sm"
        animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 h-8 w-8 rounded-full bg-indigo-400/40 blur-sm"
        animate={{ y: [0, -12, 0], x: [0, 12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative grid place-items-center h-48 w-48 lg:h-64 lg:w-64 backdrop-blur-2xl border border-white/20 shadow-inner rounded-[12%] bg-white/5">
          <div className="absolute inset-0 rounded-[12%] bg-gradient-to-br from-indigo-400/30 to-purple-400/20 blur-xl" />
          <LuTrophy className="relative h-14 w-14 lg:h-20 lg:w-20 text-emerald-400 drop-shadow-lg" />
          <span className="mt-2 text-xs lg:text-sm font-mono text-white/80">
            Milestones Unlocked
          </span>
        </div>
      </div>
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 shadow-[0_0_50px_rgba(255,255,255,0.15)] pointer-events-none" />
    </motion.div>
  );
}
