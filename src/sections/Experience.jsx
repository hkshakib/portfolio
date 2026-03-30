import { experiences } from "../data/portfolio";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import ExperienceCard from "../components/cards/ExperienceCard";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Recent roles centered on AI systems, data movement, and reliable product delivery."
        description="The timeline below compresses your resume into recruiter-friendly impact statements while preserving the actual scope of the work."
      />
      <div className="relative mt-10 space-y-8 border-l border-[color:var(--line)] pl-5 md:ml-[135px] md:pl-8">
        {experiences.map((item, index) => (
          <ExperienceCard key={`${item.company}-${item.period}`} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}
