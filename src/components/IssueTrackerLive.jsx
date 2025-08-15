import { SiReact, SiJavascript, SiMui } from "react-icons/si";
import { PiWebhooksLogo } from "react-icons/pi";

const IssueTrackerLive = () => {
  return (
    <div className="relative flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl w-[350px] lg:w-[400px] h-[400px] gap-4 p-5 sm:p-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-400/20 to-purple-400/10 blur-xl" />
      <div className="flex justify-center text-center font-mono font-bold text-white text-lg lg:text-xl">
        Issue Tracker
      </div>
      <div className="flex flex-col pl-2 gap-4 flex-1">
        <span className="text-[14px] lg:p-2 text-white/80">
          This is an Issue Tracker application built with Next.js, TypeScript,
          Prisma, MySQL, RadixUI, TailwindCSS, Zod, and NextAuth (Google). Users
          can create, assign, update, filter, and sort issues.
        </span>
        <div className="flex flex-wrap gap-4 text-white/70">
          <span className="flex items-center gap-2 text-[12px] font-mono">
            <SiReact className="h-5 w-5" /> Next JS
          </span>
          <span className="flex items-center gap-2 text-[12px] font-mono">
            <SiReact className="h-5 w-5" /> Prisma
          </span>
          <span className="flex items-center gap-2 text-[12px] font-mono">
            <SiJavascript className="h-5 w-5" /> TypeScript
          </span>
          <span className="flex items-center gap-2 text-[12px] font-mono">
            <PiWebhooksLogo className="h-5 w-5" /> Next Auth
          </span>
          <span className="flex items-center gap-2 text-[12px] font-mono">
            <PiWebhooksLogo className="h-5 w-5" /> Zod
          </span>
          <span className="flex items-center gap-2 text-[12px] font-mono">
            <PiWebhooksLogo className="h-5 w-5" /> Radix UI
          </span>
          <span className="flex items-center gap-2 text-[12px] font-mono">
            <SiReact className="h-5 w-5" /> React Query
          </span>
          <span className="flex items-center gap-2 text-[12px] font-mono">
            <SiMui className="h-5 w-5" /> Tailwind CSS
          </span>
        </div>
      </div>

      <div className="flex justify-center items-end pb-2 gap-3">
        <a
          href="https://github.com/hkshakib/issue-tracker"
          className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-mono hover:bg-emerald-600/30 hover:border-emerald-700 transition-all"
        >
          Code
        </a>
        <a
          href="https://issue-tracker-nine-kappa.vercel.app"
          className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-mono hover:bg-emerald-600/30 hover:border-emerald-700 transition-all"
        >
          Live
        </a>
      </div>
    </div>
  );
};

export default IssueTrackerLive;
