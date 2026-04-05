import { education } from "../data/portfolio";
import Card from "../components/ui/Card";

export default function EducationView() {
  return (
    <div>
      <div className="mb-6 sm:mb-7">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/[0.42]">Education</p>
        <h2 className="mt-3 max-w-4xl text-2xl font-semibold text-white sm:text-3xl">
          Graduate study in software engineering and AI, grounded by a computer science foundation.
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">
          Kept compact here so it supports the main engineering story without overpowering the
          professional work.
        </p>
      </div>
      <div className="grid gap-4 xl:grid-cols-3">
        {education.map((item) => (
          <Card key={item.school} className="rounded-[28px] p-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">{item.location}</p>
            <h3 className="mt-4 text-lg text-white">{item.school}</h3>
            <p className="mt-3 text-sm leading-7 text-white/60">{item.degree}</p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-white/40">{item.period}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
