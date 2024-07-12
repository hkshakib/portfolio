import React from "react";
import { PiWebhooksLogo } from "react-icons/pi";
import { GiArchiveResearch } from "react-icons/gi";

const AiProject = () => {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden py-6 sm:py-12 rounded z-0">
      <div className="group relative border cursor-pointer overflow-hidden bg-[#FCF4FF] px-6 pt-10 pb-8 ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-600 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-blue-600 transition-all duration-300 group-hover:bg-blue-600">
            <GiArchiveResearch class="h-10 w-10 text-white transition-all"/>
          </span>

          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p>
                Text-to-Speech (TTS) System for Bangla Language
                Explored neural network approaches for high-quality speech synthesis
                Developed end-to-end TTS.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4 group-hover:text-white/90">
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4 ">
            <PiWebhooksLogo className="h-5 w-5" />
            <span>NLP</span>
          </span>
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
            <PiWebhooksLogo className="h-5 w-5" />
            <span>TTS</span>
          </span>
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
            <PiWebhooksLogo className="h-5 w-5" />
            <span>Bangla TTS</span>
          </span>
        </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <a
              href="https://github.com/hkshakib/Prosody-Controlled-TTS"
              target="_blank" rel="noopener noreferrer"
              className="text-blue-600 transition-all duration-300 group-hover:text-white"
            >
              Read the Paper &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiProject;
