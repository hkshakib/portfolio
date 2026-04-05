import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { portfolio, projects } from "../data/portfolio";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Tag from "../components/ui/Tag";
import ViewHeader from "../components/portfolio/ViewHeader";

export default function OverviewView() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <ViewHeader
        eyebrow="Overview"
        title={portfolio.name}
        description={portfolio.role}
        aside={<span>{portfolio.availability}</span>}
      />

      <div className="grid gap-4 xl:grid-cols-[0.82fr_1.18fr]">
        <Card className="overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,rgba(103,135,255,0.16),rgba(17,19,24,0.2)_48%,rgba(255,255,255,0.03))] p-6 sm:p-7">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.45]">Recruiter Snapshot</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.4]">Name</p>
              <p className="mt-3 text-lg font-semibold text-white">{portfolio.name}</p>
            </div>
            <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.4]">Title</p>
              <p className="mt-3 text-lg font-semibold text-white">{portfolio.role}</p>
            </div>
          </div>
          <div className="mt-4 rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.4]">Location</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4 text-white/45" />
              {portfolio.location}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/projects" icon={ArrowUpRight}>
              Open Projects
            </Button>
            <Button to="/contact" variant="secondary" icon={ArrowUpRight}>
              Start a Conversation
            </Button>
            <Button href={portfolio.resume} variant="secondary" icon={Download}>
              Download Resume
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["FastAPI", "React", "Flutter", "Supabase", "OpenAI", "Databricks SQL"].map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </Card>

        <Card className="rounded-[30px] p-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">Top 3 Projects</p>
          <div className="mt-4 grid gap-4">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-5"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.4]">
                  {index + 1}. {project.eyebrow}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <Button key={link.href} href={link.href} variant="secondary">
                      {link.label}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
