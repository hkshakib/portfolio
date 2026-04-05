import { education } from "../data/portfolio";
import Card from "../components/ui/Card";

const studyHighlights = [
  { label: "Current focus", value: "Software Engineering" },
  { label: "Graduate depth", value: "AI + Robotics" },
  { label: "Foundation", value: "Computer Science" },
];

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

      <div className="grid gap-6 xl:grid-cols-[340px_minmax(0,1fr)]">
        <div className="space-y-5 xl:sticky xl:top-24 xl:self-start">
          <Card className="overflow-hidden rounded-[30px] bg-[linear-gradient(145deg,rgba(118,168,255,0.12),rgba(24,26,31,0.14)_42%,rgba(255,255,255,0.03))] p-6 sm:p-7">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">
              Academic snapshot
            </p>
            <h3 className="mt-4 max-w-sm text-xl font-semibold leading-tight text-white">
              A progression from computer science fundamentals into software engineering and AI.
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/60">
              The path is intentionally broad enough to support product engineering, systems work,
              and applied AI delivery.
            </p>
          </Card>

          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            {studyHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[22px] border border-white/[0.08] bg-white/[0.02] px-4 py-4"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">
                  {item.label}
                </p>
                <p className="mt-3 text-lg text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.02] px-5 py-2 sm:px-6">
          {education.map((item, index) => (
            <article
              key={item.school}
              className={`grid gap-4 py-6 md:grid-cols-[140px_minmax(0,1fr)] md:gap-6 ${
                index !== education.length - 1 ? "border-b border-white/[0.08]" : ""
              }`}
            >
              <div className="md:pt-1">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.32]">
                  {item.period}
                </p>
                <p className="mt-2 text-sm text-white/50">{item.location}</p>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-2 hidden h-full w-px bg-white/[0.08] md:block" />
                <div className="relative md:pl-8">
                  <span className="absolute left-[-5px] top-2 hidden h-3 w-3 rounded-full border border-white/[0.16] bg-[rgba(118,168,255,0.24)] md:block" />
                  <h3 className="text-xl text-white">{item.school}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">{item.degree}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
