import React from "react";
import Cpu from "../static/cpu.png";

const ProjectWithLive = () => {
  return (
    <div className="flex flex-col gap-4 justify-center p-4 lg:p-0 lg:items-center bg-[#FCF4FF] border h-[400px] w-[350px] lg:w-[400px] shadow-lg rounded-xl">
      <div className="flex justify-center p-1 lg:pt-2">
        <span className="text-[18px] lg:text-[20px] font-mono font-bold">
          React Fun Box
        </span>
      </div>

      <div className="flex flex-col pl-4 gap-1">
        <span className="text-[14px] lg:p-4 text-gray-500">
          This is the combinations of 6 apps. I implemented those for learning
          purpose. Those Apps are,
        </span>
        <span className="text-[12px] font-mono lg:pl-4">1. Calculator</span>
        <span className="text-[12px] font-mono lg:pl-4">2. To-Do List</span>
        <span className="text-[12px] font-mono lg:pl-4">3. Quiz</span>
        <span className="text-[12px] font-mono lg:pl-4">4. Snake</span>
        <span className="text-[12px] font-mono lg:pl-4">5. Memory Game</span>
        <span className="text-[12px] font-mono lg:pl-4">6. TicTacToe</span>
      </div>

      <div className="flex flex-wrap pl-4 gap-4">
        <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
          <img src={Cpu} alt="" className="h-5 w-5" />
          <span>React JS</span>
        </span>
        <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
          <img src={Cpu} alt="" className="h-5 w-5" />
          <span>React Router Dom</span>
        </span>
        <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
          <img src={Cpu} alt="" className="h-5 w-5" />
          <span>React ICONS</span>
        </span>
      </div>

      <div className="flex flex-1 justify-center items-end pb-3 gap-4">
        <button className="bg-white h-[40px] w-[100px] border lg:border-0 rounded hover:border hover:border-indigo-700 hover:bg-[#6E07F3] hover:transition-all duration-700 hover:text-white hover:shadow-md">
          <a
            className="font-mono"
            href="https://github.com/hkshakib/reactfunbox"
          >
            Code
          </a>
        </button>
        <button className="bg-white h-[40px] w-[100px] border lg:border-0 rounded hover:border hover:border-indigo-700 hover:bg-[#6E07F3] hover:transition-all duration-700 hover:text-white hover:shadow-md">
          <a className="font-mono" href="https://reactfunbox.vercel.app/">
            Live
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectWithLive;
