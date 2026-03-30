import { education } from "../data/portfolio";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Reveal from "../components/Reveal";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Education"
        title="Academic grounding across software engineering, artificial intelligence, and robotics."
        description="Presented as a clean reference section rather than a verbose timeline so the portfolio stays focused on your strongest professional signal."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {education.map((item, index) => (
          <Reveal key={item.school} delay={index * 0.06}>
            <Card interactive className="h-full p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-soft)]">
                {item.location}
              </p>
              <h3 className="mt-4 text-lg text-[color:var(--text)]">{item.school}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.degree}</p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-soft)]">
                {item.period}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
