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
    <div className="relative flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl w-[350px] lg:w-[400px] h-[400px] gap-4 p-5 sm:p-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-400/20 to-purple-400/10 blur-xl" />
      <div className="flex justify-center text-center">
        <span className="text-[18px] lg:text-[20px] font-mono font-bold text-white">
          {Title}
        </span>
      </div>
      <div className="flex flex-col pl-2 gap-4 flex-1">
        <span className="text-[14px] lg:p-2 text-white/80">{Summery}</span>
        <div className="flex flex-wrap gap-4">
          {Technologies?.map((tech, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-[12px] font-mono text-white/70"
            >
              {getIconByTechnology(tech)}
              <span>{tech}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-end pb-2 gap-2">
        <a
          href={CodeUrl}
          className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-mono hover:bg-emerald-600/30 hover:border-emerald-700 transition-all"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default Project;
