import { about } from "../data/portfolio";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <SectionHeading
          eyebrow="About"
          title="Product-minded engineering with a bias for clean systems and calm interfaces."
          description="This portfolio is grounded in real resume data, but the presentation is intentionally sharper: concise enough for recruiters, detailed enough for technical conversations."
        />
        <div className="space-y-4">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.08 + index * 0.06}>
              <Card className="p-6">
                <p className="text-sm leading-8 text-[color:var(--muted)]">{paragraph}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {about.focusAreas.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <Card interactive className="h-full p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-soft)]">
                Focus {index + 1}
              </p>
              <h3 className="mt-4 text-lg text-[color:var(--text)]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{item.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
