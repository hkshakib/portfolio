import React from "react";
import Cpu from "../static/cpu.png";

const Project = ({ Title, Summery, Technologies, CodeUrl }) => {
  return (
    <div className="flex flex-col items-center bg-[#FCF4FF] border h-[400px] w-[350px] lg:w-[400px] shadow-lg rounded-xl gap-4 lg:p-1">
      <div className="flex justify-center p-1 lg:pt-1">
        <span className="text-[18px] lg:text-[20px] font-mono font-bold">
          {Title}
        </span>
      </div>
      <div className="flex flex-col pl-5 gap-4">
        <span className="text-[14px] lg:p-4 text-gray-500">{Summery}</span>
        <div className="flex flex-wrap gap-4">
          {Technologies &&
            Technologies.map((tech, index) => (
              <span
                key={index}
                className="flex items-center gap-2 lg:pr-2 text-[12px] font-mono lg:pl-4"
              >
                <img src={Cpu} alt="" className="h-5 w-5" />
                <span>{tech}</span>
              </span>
            ))}
        </div>
      </div>
      <div className="flex flex-1 justify-center items-end pb-3 gap-2">
        <button className="bg-white h-[40px] w-[100px] border lg:border-0 rounded hover:border hover:border-indigo-700 hover:bg-[#6E07F3] hover:transition-all duration-700 hover:text-white hover:shadow-md">
          <a className="font-mono" href={CodeUrl}>
            Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default Project;
