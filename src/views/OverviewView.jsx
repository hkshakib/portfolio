import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { portfolio, projects } from "../data/portfolio";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import ViewHeader from "../components/portfolio/ViewHeader";

export default function OverviewView() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <ViewHeader
        eyebrow="Overview"
        title={portfolio.name}
        description={portfolio.summary}
      />

      <div className="grid gap-4 xl:grid-cols-[320px_minmax(0,1fr)] xl:items-start">
        <Card className="self-start overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,rgba(103,135,255,0.16),rgba(17,19,24,0.2)_48%,rgba(255,255,255,0.03))] p-6 sm:p-7">
          <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.4]">Location</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4 text-white/45" />
              {portfolio.location}
            </p>
          </div>
          <div className="mt-6 grid gap-3">
            <Button to="/projects" newTab icon={ArrowUpRight} className="w-full justify-between">
              Open Projects
            </Button>
            <Button
              to="/contact"
              newTab
              variant="secondary"
              icon={ArrowUpRight}
              className="w-full justify-between"
            >
              Start a Conversation
            </Button>
            <Button
              href={portfolio.resume}
              newTab
              variant="secondary"
              icon={Download}
              className="w-full justify-between"
            >
              Download Resume
            </Button>
          </div>
        </Card>

        <div>
          <div className="mb-4 flex items-center justify-between gap-3 px-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">Top 3 Projects</p>
            <Button to="/projects" variant="ghost" className="px-0 py-0 text-white/60">
              View All
            </Button>
          </div>
          <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card
                key={project.title}
                className="flex h-full flex-col rounded-[28px] p-5"
              >
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <div className="mt-auto pt-6">
                  {project.links
                    .filter((link) => link.label.toLowerCase() === "code" || link.label.toLowerCase() === "repository")
                    .slice(0, 1)
                    .map((link) => (
                      <Button key={link.href} href={link.href} variant="secondary">
                        Code
                      </Button>
                    ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
