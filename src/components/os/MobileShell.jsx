import { BatteryFull, ChevronRight, Search, SignalHigh, Wifi } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { appViews, portfolio } from "../../data/portfolio";
import { iconMap } from "./iconMap";
import useClock from "../../hooks/useClock";
import Card from "../ui/Card";

export default function MobileShell({ children }) {
  const location = useLocation();
  const time = useClock();
  const currentView = appViews.find((item) => item.path === location.pathname) || appViews[0];
  const primaryTabs = appViews.slice(0, 4);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(93,118,255,0.18),transparent_28%),radial-gradient(circle_at_bottom,rgba(75,174,170,0.12),transparent_22%),#0b0d12] px-3 pb-4 pt-3 lg:hidden">
      <div className="mx-auto max-w-md overflow-hidden rounded-[36px] border border-white/10 bg-[rgba(12,14,19,0.82)] shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        <div className="android-top-sheen px-5 pb-4 pt-4">
          <div className="flex items-center justify-between text-[12px] text-white/75">
            <span className="font-medium text-white">{time}</span>
            <div className="flex items-center gap-2">
              <SignalHigh className="h-4 w-4" />
              <Wifi className="h-4 w-4" />
              <BatteryFull className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.45]">Android mode</p>
              <h1 className="mt-2 text-xl font-semibold text-white">{currentView.label}</h1>
            </div>
            <div className="grid h-11 w-11 place-items-center rounded-full bg-white/[0.08] text-white">
              <Search className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-white/[0.58]">{currentView.subtitle}</p>
          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
            {appViews.map((item) => {
              const Icon = iconMap[item.icon];
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.16em] ${
                    isActive
                      ? "border-[#7f93ff] bg-[#6c82ff]/20 text-white"
                      : "border-white/10 bg-white/[0.04] text-white/[0.55]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{item.shortLabel}</span>
                </NavLink>
              );
            })}
          </div>
        </div>

        <div className="min-h-[calc(100vh-13rem)] px-3 pb-4">
          {children}
          <Card className="mt-4 rounded-[28px] border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.45]">Device profile</p>
            <p className="mt-4 text-lg text-white">{portfolio.role}</p>
            <p className="mt-2 text-sm leading-7 text-white/[0.58]">{portfolio.location}</p>
          </Card>
        </div>

        <div className="border-t border-white/[0.08] bg-[rgba(255,255,255,0.03)] px-2 pb-2 pt-2">
          <div className="grid grid-cols-4 gap-1">
            {primaryTabs.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex flex-col items-center justify-center gap-1 rounded-[20px] px-2 py-3 text-[10px] uppercase tracking-[0.16em] ${
                      isActive ? "bg-white/10 text-white" : "text-white/[0.48]"
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.shortLabel}</span>
                </NavLink>
              );
            })}
          </div>
          <div className="mt-2 flex justify-center pb-1 pt-1">
            <span className="h-1.5 w-24 rounded-full bg-white/[0.18]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-3 flex max-w-md items-center justify-between rounded-[22px] border border-white/[0.08] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-white/[0.65]">
        <span>Resume</span>
        <a href={portfolio.resume} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-white">
          Open <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
