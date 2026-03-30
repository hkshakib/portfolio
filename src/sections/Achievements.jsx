import { achievements } from "../data/portfolio";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import AchievementCard from "../components/cards/AchievementCard";
import Reveal from "../components/Reveal";

export default function Achievements() {
  return (
    <Section id="achievements">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Achievements"
            title="A competitive edge built through algorithmic rigor and consistent execution."
            description="This section highlights the strongest signals from your resume for recruiters who value problem solving, technical discipline, and hard-earned momentum."
          />
          <Reveal delay={0.08}>
            <Card className="overflow-hidden p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-soft)]">
                Why it matters
              </p>
              <p className="mt-4 text-sm leading-8 text-[color:var(--muted)]">
                Competitive programming sharpened the way you reason about performance, constraints, and correctness. That foundation now shows up in backend design, cleaner APIs, and how you tackle production problems under pressure.
              </p>
            </Card>
          </Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((item, index) => (
            <AchievementCard key={item.title} item={item} delay={index * 0.05} />
          ))}
        </div>
      </div>
    </Section>
  );
}
