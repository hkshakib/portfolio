import { SiReact, SiJavascript, SiMui } from "react-icons/si";
import { PiWebhooksLogo } from "react-icons/pi";

const IssueTrackerLive = () => {
  return (
    <div className="flex flex-col items-center bg-[#FCF4FF] border h-[400px] w-[350px] lg:w-[400px] shadow-lg rounded-xl gap-4 lg:p-1">
      <div className="flex justify-center text-[16px] lg:text-[18px] font-mono pl-4 lg:pl-0 lg:pt-2 font-bold">
        <span>Issue Tracker</span>
      </div>

      <div className="flex flex-col pl-5 gap-8">
        <span className="text-[14px] lg:p-4 text-gray-500">
          This is an Issue Tracker application built with Next.js, TypeScript,
          Prisma, MySQL, RadixUI, TailwindCSS, Zod, and NextAuth with Google
          provider. The application allows users to create, assign, update,
          filter, and sort issues.
        </span>

        <div className="flex flex-wrap gap-4">
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
            <SiReact className="h-5 w-5" />
            <span>Next JS</span>
          </span>
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
            <SiReact className="h-5 w-5" />
            <span>Prisma</span>
          </span>
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
            <SiJavascript alt="" className="h-5 w-5" />
            <span>TypeScript</span>
          </span>
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
            <PiWebhooksLogo className="h-5 w-5" />
            <span>Next Auth</span>
          </span>
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
            <PiWebhooksLogo className="h-5 w-5" />
            <span>Zod</span>
          </span>
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
            <PiWebhooksLogo className="h-5 w-5" />
            <span>Radix UI</span>
          </span>
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
            <SiReact className="h-5 w-5" />
            <span>React Query</span>
          </span>
          <span className="flex items-center gap-2 pr-2 lg:pr-2 text-[12px] font-mono pl-2 lg:pl-4">
            <SiMui className="h-5 w-5" />
            <span>Tailwind CSS</span>
          </span>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-end pb-3 gap-4">
        <button className="bg-white h-[40px] w-[100px] border lg:border-0 rounded hover:border hover:border-indigo-700 hover:bg-[#6E07F3] hover:transition-all duration-700 hover:text-white hover:shadow-md">
          <a className="font-mono" href="https://github.com/hkshakib/issue-tracker">
            Code
          </a>
        </button>
        <button className="bg-white h-[40px] w-[100px] border lg:border-0 rounded hover:border hover:border-indigo-700 hover:bg-[#6E07F3] hover:transition-all duration-700 hover:text-white hover:shadow-md">
          <a className="font-mono" href="https://issue-tracker-nine-kappa.vercel.app">
            Live
          </a>
        </button>
      </div>
    </div>
  );
};

export default IssueTrackerLive;
