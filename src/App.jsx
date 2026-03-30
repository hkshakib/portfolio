import { Navigate, Route, Routes, useOutlet } from "react-router-dom";
import DesktopShell from "./components/os/DesktopShell";
import MobileShell from "./components/os/MobileShell";
import useMediaQuery from "./hooks/useMediaQuery";
import OverviewView from "./views/OverviewView";
import ExperienceView from "./views/ExperienceView";
import SkillsView from "./views/SkillsView";
import ProjectsView from "./views/ProjectsView";
import AchievementsView from "./views/AchievementsView";
import EducationView from "./views/EducationView";
import ContactView from "./views/ContactView";

function PortfolioLayout() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const outlet = useOutlet();

  return (
    <div className="page-shell">
      {isDesktop ? <DesktopShell>{outlet}</DesktopShell> : <MobileShell>{outlet}</MobileShell>}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<PortfolioLayout />}>
        <Route path="/" element={<OverviewView />} />
        <Route path="/experience" element={<ExperienceView />} />
        <Route path="/skills" element={<SkillsView />} />
        <Route path="/projects" element={<ProjectsView />} />
        <Route path="/achievements" element={<AchievementsView />} />
        <Route path="/education" element={<EducationView />} />
        <Route path="/contact" element={<ContactView />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
