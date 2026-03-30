import { ArrowUpRight, Download } from "lucide-react";
import { about, portfolio, projects } from "../data/portfolio";
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
        title={portfolio.headline}
        description={portfolio.intro}
        aside={<span>{portfolio.availability}</span>}
      />

      <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <Card className="overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,rgba(103,135,255,0.16),rgba(17,19,24,0.2)_48%,rgba(255,255,255,0.03))] p-6 sm:p-7">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.45]">{portfolio.titleLine}</p>
          <h3 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Shipping full product systems, not isolated screens or isolated APIs.
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/[0.62]">{portfolio.summary}</p>
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

        <div className="grid gap-4">
          {portfolio.metrics.map((metric) => (
            <Card key={metric.label} className="rounded-[28px] p-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Metric</p>
              <p className="mt-4 text-xl text-white">{metric.value}</p>
              <p className="mt-2 text-sm leading-7 text-white/60">{metric.label}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="rounded-[30px] p-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">Approach</p>
          <div className="mt-4 space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-8 text-white/60">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-6 grid gap-3">
            {portfolio.heroBullets.map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/[0.68]"
              >
                {item}
              </div>
            ))}
          </div>
        </Card>

        <div className="grid gap-4">
          {about.focusAreas.map((item) => (
            <Card key={item.title} className="rounded-[28px] p-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">Focus area</p>
              <h3 className="mt-4 text-lg text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <Card key={project.title} className="rounded-[28px] p-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">{project.eyebrow}</p>
            <h3 className="mt-4 text-lg text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/60">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
