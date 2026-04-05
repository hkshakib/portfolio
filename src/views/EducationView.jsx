import { education } from "../data/portfolio";
import uniLogo from "../static/unilogo.png";

const schoolMarks = {
  "Kocaeli University": { initials: "KU", tone: "from-sky-400/28 to-blue-500/18" },
  "University of Hertfordshire": { initials: "UH", tone: "from-amber-300/24 to-orange-400/16" },
  "Leading University": { logo: uniLogo, tone: "from-emerald-300/24 to-teal-400/18" },
};

const studyHighlights = [
  "Software Engineering",
  "AI and Robotics",
  "Computer Science",
];

export default function EducationView() {
  return (
    <div>
      <div className="mb-5 sm:mb-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/[0.42]">Education</p>
        <h2 className="mt-3 max-w-4xl text-2xl font-semibold text-white sm:text-3xl">
          Graduate study in software engineering and AI, backed by a computer science foundation.
        </h2>
      </div>

      <div className="grid gap-5 xl:grid-cols-[300px_minmax(0,1fr)]">
        <div className="space-y-4 xl:sticky xl:top-24 xl:self-start">
          <div className="rounded-[28px] border border-white/[0.08] bg-[linear-gradient(145deg,rgba(118,168,255,0.1),rgba(24,26,31,0.12)_42%,rgba(255,255,255,0.03))] p-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">Academic path</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {studyHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {education.map((item) => (
            <article
              key={item.school}
              className="grid gap-4 rounded-[28px] border border-white/[0.08] bg-white/[0.02] p-5 sm:grid-cols-[76px_minmax(0,1fr)] sm:p-6"
            >
              <UniversityMark school={item.school} />

              <div className="min-w-0">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">
                      {item.location}
                    </p>
                    <h3 className="mt-2 text-xl text-white">{item.school}</h3>
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.36]">
                    {item.period}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.degree}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function UniversityMark({ school }) {
  const mark = schoolMarks[school];

  if (mark.logo) {
    return (
      <div
        className={`relative grid h-[76px] w-[76px] place-items-center overflow-hidden rounded-[24px] border border-white/[0.08] bg-gradient-to-br ${mark.tone}`}
      >
        <div className="absolute inset-0 bg-[rgba(8,10,14,0.2)]" />
        <img src={mark.logo} alt={`${school} logo`} className="relative h-[54px] w-[54px] object-contain" />
      </div>
    );
  }

  return (
    <div
      className={`grid h-[76px] w-[76px] place-items-center rounded-[24px] border border-white/[0.08] bg-gradient-to-br ${mark.tone}`}
      aria-label={`${school} mark`}
      title={school}
    >
      <span className="text-lg font-semibold uppercase tracking-[0.14em] text-white">
        {mark.initials}
      </span>
    </div>
  );
}
