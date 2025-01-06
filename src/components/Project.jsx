import { BiLogoDjango } from "react-icons/bi";
import {
  SiReact,
  SiJavascript,
  SiVitess,
  SiJsonwebtokens,
  SiRedux,
  SiMui,
  SiCss3,
  SiSessionize,
} from "react-icons/si";
import { TfiLayoutWidthDefault } from "react-icons/tfi";
import { FaMattressPillow } from "react-icons/fa6";
import { PiWebhooksLogo } from "react-icons/pi";
import { SiFramework7 } from "react-icons/si";
import { LuRouter } from "react-icons/lu";

const getIconByTechnology = (technology) => {
  switch (technology.toLowerCase()) {
    case "django":
      return <BiLogoDjango className="h-5 w-5" />;
    case "react":
      return <SiReact className="h-5 w-5" />;
    case "react js":
      return <SiReact className="h-5 w-5" />;
    case "django rest":
      return <SiFramework7 className="h-5 w-5" />;
    case "typescript":
      return <SiJavascript className="h-5 w-5" />;
    case "djoser":
      return <BiLogoDjango className="h-5 w-5" />;
    case "vite":
      return <SiVitess className="h-5 w-5" />;
    case "jwt authentication":
      return <SiJsonwebtokens className="h-5 w-5" />;
    case "django filters":
      return <BiLogoDjango className="h-5 w-5" />;
    case "drf-nexted-router":
      return <LuRouter className="h-5 w-5" />;
    case "pillow":
      return <FaMattressPillow className="h-5 w-5" />;
    case "react router dom":
      return <LuRouter className="h-5 w-5" />;
    case "react router":
      return <LuRouter className="h-5 w-5" />;
    case "react-redux":
      return <SiRedux className="h-5 w-5" />;
    case "react toolkit":
      return <SiRedux className="h-5 w-5" />;
    case "material ui":
      return <SiMui className="h-5 w-5" />;
    case "tailwind css":
      return <SiCss3 className="h-5 w-5" />;
    case "django simple-jwt":
      return <SiJsonwebtokens className="h-5 w-5" />;
    case "session authentication":
      return <SiSessionize className="h-5 w-5" />;
    case "hooks":
      return <PiWebhooksLogo className="h-5 w-5" />;
    case "custom hooks":
      return <PiWebhooksLogo className="h-5 w-5" />;
    default:
      return <TfiLayoutWidthDefault className="h-5 w-5" />;
  }
};

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
                {getIconByTechnology(tech)}
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
