import { GrTechnology } from "react-icons/gr";

const ResearchComponent = ({ Title, Summery, Technologies, CodeUrl }) => {
  return (
    <div className="flex flex-col bg-[#FCF4FF] border h-[400px] w-[300px] lg:w-[400px] shadow-lg">
      <div className="flex justify-center bg-slate-800">
        <span className="text-white">Yet to be Published</span>
      </div>
      <div className="flex justify-center lg:text-[18px] font-mono p-1 lg:pt-2 font-bold">
        <span>{Title}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[14px] p-2 lg:p-4 text-gray-500">
          As part of my fourth-year thesis, I explored the challenges associated
          with generating natural-sounding Bengali speech from text inputs,
          including issues related to prosody and intonation. <br />
          <br />
        </span>
        <span className="text-[14px] lg:text[16px] pl-2 lg:pl-4 font-bold lg:pt-1 lg:pb-2 pb-1">
          Used Models:
        </span>
        <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
          <GrTechnology />
          <span>VITS</span>
        </span>
        <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
          <GrTechnology />
          <span>Tecotron-2</span>
        </span>
        <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
          <GrTechnology />
          <span>FastPitch</span>
        </span>

        <span className="text-[12px] font-mono pl-2 lg:pl-4"></span>
      </div>
      <div className="flex flex-1 justify-center items-end pb-3 gap-4">
        <button className="bg-white h-[40px] w-[120px] border font-mono lg:border-0 rounded hover:border hover:border-indigo-700 hover:bg-[#6E07F3] hover:transition-all duration-700 hover:text-white hover:shadow-md">
          <a href="https://github.com/hkshakib/Prosody-Controlled-TTS">
            View Paper
          </a>
        </button>
      </div>
    </div>
  );
};

export default ResearchComponent;
