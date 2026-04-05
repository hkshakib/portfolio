import { projects } from "../data/portfolio";
import Button from "../components/ui/Button";
import Tag from "../components/ui/Tag";

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
      <div className="divide-y divide-white/[0.08]">
        {projects.map((project, index) => (
          <section
            key={project.title}
            className={`py-6 sm:py-7 ${index === 0 ? "pt-0" : ""} ${index === projects.length - 1 ? "pb-0" : ""}`}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">
                  {project.eyebrow}
                </p>
                <h3 className="mt-3 text-xl text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>

              {project.links.length ? (
                <div className="flex flex-wrap gap-3 lg:shrink-0">
                  {project.links.map((link) => (
                    <Button key={link.href} href={link.href} variant="secondary">
                      {link.label}
                    </Button>
                  ))}
                </div>
              ) : null}
            </div>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/[0.66]">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/55" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
