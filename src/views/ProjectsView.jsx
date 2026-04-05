import { projects } from "../data/portfolio";
import ProjectCard from "../components/cards/ProjectCard";

export default function ProjectsView() {
  return (
    <div>
      <div className="mb-6 sm:mb-7">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/[0.42]">Projects</p>
        <h2 className="mt-3 max-w-4xl text-2xl font-semibold text-white sm:text-3xl">
          Selected builds across AI tooling, product interfaces, backend systems, and research.
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">
          The emphasis here is on credible shipped work, clean summaries, and real public links
          rather than exaggerated case-study theater.
        </p>
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} delay={index * 0.04} />
        ))}
      </div>
    </div>
  );
}
