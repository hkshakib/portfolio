import { skillGroups } from "../data/portfolio";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import Reveal from "../components/Reveal";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A stack shaped around shipping modern interfaces, backend systems, and AI-enabled products."
        description="Grouped for scanability so hiring teams can quickly understand your strengths without reading a dense wall of keywords."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.05}>
            <Card interactive className="h-full p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-soft)]">
                {group.title}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
