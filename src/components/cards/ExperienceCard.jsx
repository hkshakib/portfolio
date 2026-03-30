import Card from "../ui/Card";
import Reveal from "../Reveal";

export default function ExperienceCard({ item, index }) {
  return (
    <Reveal delay={index * 0.06}>
      <div className="grid gap-4 md:grid-cols-[140px_minmax(0,1fr)] md:gap-6">
        <div className="pt-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-soft)]">
          {item.period}
        </div>
        <Card interactive className="relative p-6 sm:p-7">
          <div className="absolute left-0 top-8 hidden h-px w-6 -translate-x-full bg-[color:var(--line)] md:block" />
          <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-soft)]">
            {item.company} / {item.location}
          </p>
          <h3 className="mt-3 text-xl text-[color:var(--text)]">{item.role}</h3>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Reveal>
  );
}
