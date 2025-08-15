import { SiReact } from "react-icons/si";

const ProjectWithLive = () => {
  return (
    <div className="relative flex flex-col gap-4 justify-center p-5 sm:p-6 lg:items-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl w-[350px] lg:w-[400px] h-[400px] transition-transform duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-400/20 to-purple-400/10 blur-xl" />

      <div className="flex justify-center text-center">
        <span className="text-[18px] lg:text-[20px] font-mono font-bold text-white">
          React Fun Box
        </span>
      </div>
      <div className="flex flex-col pl-2 gap-1 text-white/80">
        <span className="text-[14px] lg:p-2">
          This is the combination of 6 apps. I implemented these for learning
          purposes. Apps include:
        </span>
        {[
          "Calculator",
          "To-Do List",
          "Quiz",
          "Snake",
          "Memory Game",
          "TicTacToe",
        ].map((item, idx) => (
          <span key={idx} className="text-[12px] font-mono lg:pl-4">
            {idx + 1}. {item}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 text-white/70">
        <span className="flex items-center gap-2 text-[12px] font-mono">
          <SiReact className="h-5 w-5" /> React
        </span>
        <span className="flex items-center gap-2 text-[12px] font-mono">
          <SiReact className="h-5 w-5" /> React Router Dom
        </span>
        <span className="flex items-center gap-2 text-[12px] font-mono">
          <SiReact className="h-5 w-5" /> React ICONS
        </span>
      </div>

      <div className="flex flex-1 justify-center items-end pb-2 gap-3">
        <a
          href="https://github.com/hkshakib/reactfunbox"
          className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-mono hover:bg-emerald-600/30 hover:border-emerald-700 transition-all"
        >
          Code
        </a>
        <a
          href="https://reactfunbox.vercel.app/"
          className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-mono hover:bg-emerald-600/30 hover:border-emerald-700 transition-all"
        >
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectWithLive;
