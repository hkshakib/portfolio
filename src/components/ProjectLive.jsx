import React from "react";
import { GrTechnology } from "react-icons/gr";

const ProjectLive = () => {
  return (
    <div className="flex flex-col justify-center p-4 lg:p-0 lg:items-center bg-[#FCF4FF] border h-[400px] w-[300px] lg:w-[400px] shadow-lg rounded-xl">
      <div className="flex justify-center text-[16px] lg:text-[18px] font-mono pl-4 lg:pl-0 lg:pt-2 font-bold">
        <span>RAWG Clone</span>
      </div>

      <div className="flex flex-col">
        <p className="text-[14px] lg:p-4 text-gray-500">
          Welcome to a captivating clone of rawg.io! This React-powered site
          dazzles with filtering, sorting, and searching features, courtesy of
          rawg API. Infused with Vite and TypeScript, it promises a seamless
          journey through genres, games, and platforms. Get ready to explore an
          enchanting world of gaming wonders!
        </p>

        <h1 className="text-[14px] lg:text[16px] pl-2 lg:pl-4 font-bold lg:pt-1 lg:pb-2 pb-1">
          Used Techonology:
        </h1>
        <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
          <GrTechnology />
          <span>React JS</span>
        </span>
        <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
          <GrTechnology />
          <span>VITE</span>
        </span>
        <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
          <GrTechnology />
          <span>TypeScript</span>
        </span>
        <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
          <GrTechnology />
          <span>Custom Hooks</span>
        </span>
        <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
          <GrTechnology />
          <span>React ICONS</span>
        </span>
      </div>

      <div className="flex flex-1 justify-center items-end pb-3 gap-4">
        <button className="bg-white h-[40px] w-[100px] border lg:border-0 rounded hover:border hover:border-indigo-700 hover:bg-[#6E07F3] hover:transition-all duration-700 hover:text-white hover:shadow-md">
          <a className="font-mono" href="https://github.com/hkshakib/playerhub">
            Code
          </a>
        </button>
        <button className="bg-white h-[40px] w-[100px] border lg:border-0 rounded hover:border hover:border-indigo-700 hover:bg-[#6E07F3] hover:transition-all duration-700 hover:text-white hover:shadow-md">
          <a className="font-mono" href="https://rawg-clone-chi.vercel.app/">
            Live
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectLive;
