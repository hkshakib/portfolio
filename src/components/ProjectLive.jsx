import React from "react";
import { SiReact, SiJavascript } from "react-icons/si";
import { PiWebhooksLogo } from "react-icons/pi";

const ProjectLive = () => {
  return (
    <div className="flex flex-col items-center bg-[#FCF4FF] border h-[400px] w-[350px] lg:w-[400px] shadow-lg rounded-xl gap-4 lg:p-1">
      <div className="flex justify-center text-[16px] lg:text-[18px] font-mono pl-4 lg:pl-0 lg:pt-2 font-bold">
        <span>RAWG Clone</span>
      </div>

      <div className="flex flex-col pl-5 gap-8">
        <span className="text-[14px] lg:p-4 text-gray-500">
          Welcome to a captivating clone of rawg.io! This React-powered site
          dazzles with filtering, sorting, and searching features, courtesy of
          rawg API. Infused with Vite and TypeScript, it promises a seamless
          journey through genres, games, and platforms. Get ready to explore an
          enchanting world of gaming wonders!
        </span>

        <div className="flex flex-wrap gap-4">
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
            <SiReact className="h-5 w-5" />
            <span>React JS</span>
          </span>
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
            <SiReact className="h-5 w-5" />
            <span>VITE</span>
          </span>
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
            <SiJavascript alt="" className="h-5 w-5" />
            <span>TypeScript</span>
          </span>
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
            <PiWebhooksLogo className="h-5 w-5" />
            <span>Custom Hooks</span>
          </span>
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
            <SiReact className="h-5 w-5" />
            <span>React ICONS</span>
          </span>
        </div>
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
