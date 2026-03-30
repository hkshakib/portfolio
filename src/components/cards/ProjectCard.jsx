import { ArrowUpRight } from "lucide-react";
import Card from "../ui/Card";
import Tag from "../ui/Tag";
import Button from "../ui/Button";
import Reveal from "../Reveal";

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Card interactive className="flex h-full flex-col overflow-hidden p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-soft)]">
              {project.eyebrow}
            </p>
            <h3 className="mt-3 text-xl text-[color:var(--text)]">{project.title}</h3>
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.03)] text-[color:var(--accent)]">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-[color:var(--muted)]">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <ul className="mt-6 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--success)]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <Button key={link.href} href={link.href} variant="secondary">
              {link.label}
            </Button>
          ))}
        </div>
      </Card>
    </Reveal>
  );
}
