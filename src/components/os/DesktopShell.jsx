import { Apple, Search, Wifi, BatteryFull, Star } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { appViews, portfolio, socialLinks } from "../../data/portfolio";
import { iconMap } from "./iconMap";
import { DesktopAppTile, FinderMark } from "./PlatformIcons";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function DesktopShell({ children }) {
  const location = useLocation();
  const currentView = appViews.find((item) => item.path === location.pathname) || appViews[0];

  return (
    <div className="min-h-screen px-5 pb-6 pt-4">
      <DesktopMenuBar />
      <div className="mx-auto mt-5 flex max-w-[1500px] gap-5">
        <aside className="hidden w-[260px] shrink-0 xl:block">
          <div className="sticky top-[4.75rem] space-y-4">
            <Card className="overflow-hidden rounded-[30px] bg-[rgba(30,33,38,0.72)]">
              <div className="desktop-sidebar-glow px-5 pb-5 pt-6">
                <div className="flex items-center gap-3">
                  <FinderMark className="h-12 w-12" />
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/[0.45]">
                    hkshakib
                  </p>
                </div>
              </div>
              <div className="border-t border-white/[0.08] px-5 py-5">
                <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-white/[0.45]">
                  Quick links
                </p>
                <div className="grid gap-2">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.href}
                      href={link.href}
                      variant="secondary"
                      className="w-full justify-between text-white/80"
                    >
                      {link.label}
                    </Button>
                  ))}
                  <Button
                    href={portfolio.resume}
                    newTab
                    variant="secondary"
                    className="w-full justify-between text-white/80"
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <Card className="overflow-hidden rounded-[34px] border-white/10 bg-[rgba(24,26,31,0.74)]">
            <WindowBar currentView={currentView} />
            <div className="grid min-h-[calc(100vh-10rem)] gap-0 xl:grid-cols-[minmax(0,1fr)_290px]">
              <div className="min-w-0 border-r border-white/[0.08] px-4 py-4 sm:px-6 sm:py-6 xl:px-7 xl:pb-28">
                {children}
              </div>
              <DesktopInspector />
            </div>
          </Card>
        </main>
      </div>
      <DesktopDock />
    </div>
  );
}

function DesktopMenuBar() {
  return (
    <div className="mx-auto flex max-w-[1500px] items-center justify-between rounded-full border border-white/10 bg-[rgba(18,19,23,0.62)] px-4 py-2 text-sm text-white/70 backdrop-blur-2xl">
      <div className="flex items-center gap-3">
        <Apple className="h-4 w-4 text-white" />
        <span className="font-medium text-white/80">Portfolio</span>
        <span className="hidden text-white/[0.45] xl:inline">File</span>
        <span className="hidden text-white/[0.45] xl:inline">Edit</span>
        <span className="hidden text-white/[0.45] xl:inline">View</span>
      </div>
      <div className="flex items-center gap-3 text-white/[0.55]">
        <Search className="h-4 w-4" />
        <Wifi className="h-4 w-4" />
        <BatteryFull className="h-4 w-4" />
      </div>
    </div>
  );
}

function WindowBar({ currentView }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.08] bg-[rgba(255,255,255,0.02)] px-4 py-3 sm:px-6">
      <div className="flex items-center gap-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="hidden sm:block">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Workspace</p>
          <p className="text-sm text-white/80">{currentView.label}</p>
        </div>
      </div>
      <div className="h-10 w-10 rounded-full border border-white/[0.08] bg-black/20" />
    </div>
  );
}

function DesktopInspector() {
  return (
    <aside className="hidden bg-[rgba(255,255,255,0.02)] px-5 py-6 xl:block">
      <div className="space-y-4">
        {portfolio.metrics.map((metric) => (
          <Card key={metric.label} className="rounded-[24px] bg-[rgba(18,20,24,0.72)] p-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Metric</p>
            <p className="mt-4 text-lg text-white">{metric.value}</p>
            <p className="mt-2 text-sm leading-7 text-white/[0.58]">{metric.label}</p>
          </Card>
        ))}
      </div>
    </aside>
  );
}

function DesktopDock() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 hidden justify-center xl:flex">
      <div className="pointer-events-auto flex items-end gap-3 rounded-[26px] border border-white/10 bg-[rgba(20,22,26,0.74)] px-4 py-3 shadow-2xl backdrop-blur-2xl">
        {appViews.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group flex flex-col items-center gap-2 rounded-2xl px-3 py-2 transition ${
                  isActive ? "bg-white/10" : "hover:bg-white/[0.06]"
                }`
              }
            >
              <div className="transition group-hover:-translate-y-1">
                <DesktopAppTile active={location.pathname === item.path} tone={item.tone}>
                  <Icon className="h-5 w-5" />
                </DesktopAppTile>
              </div>
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/[0.45]">
                {item.shortLabel}
              </span>
            </NavLink>
          );
        })}
        <a
          href={portfolio.resume}
          target="_blank"
          rel="noreferrer"
          className="ml-2 flex flex-col items-center gap-2 rounded-2xl px-3 py-2 transition hover:bg-white/[0.06] hover:-translate-y-1"
          aria-label="Download Resume"
          title="Download Resume"
        >
          <DesktopAppTile tone="amber">
            <Star className="h-5 w-5" />
          </DesktopAppTile>
          <span className="text-[10px] uppercase tracking-[0.18em] text-white/[0.58]">
            Resume
          </span>
        </a>
      </div>
    </div>
  );
}
