import { projects } from "../data/portfolio";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/cards/ProjectCard";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work that shows product taste, system design, and execution range."
        description="These cards combine the strongest resume projects with public portfolio work that has real repositories or live links."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} delay={index * 0.06} />
        ))}
      </div>
    </Section>
  );
}
