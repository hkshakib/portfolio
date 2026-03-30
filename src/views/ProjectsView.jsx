import { projects } from "../data/portfolio";
import ProjectCard from "../components/cards/ProjectCard";
import ViewHeader from "../components/portfolio/ViewHeader";

export default function ProjectsView() {
  return (
    <div>
      <ViewHeader
        eyebrow="Projects"
        title="Selected builds across AI tooling, product interfaces, backend systems, and research."
        description="The emphasis here is on credible shipped work, clean summaries, and real public links rather than exaggerated case-study theater."
      />
      <div className="grid gap-4 xl:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} delay={index * 0.04} />
        ))}
      </div>
    </div>
  );
}
