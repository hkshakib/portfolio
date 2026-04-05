import { experiences } from "../data/portfolio";

export default function ExperienceView() {
  return (
    <div>
      <div className="mb-6 sm:mb-7">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/[0.42]">Experience</p>
        <h2 className="mt-3 max-w-4xl text-2xl font-semibold text-white sm:text-3xl">
          Roles focused on AI systems, data movement, backend reliability, and product delivery.
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">
          Compressed into high-signal summaries so the route still feels like a portfolio experience
          rather than a raw resume dump.
        </p>
      </div>
      <div className="divide-y divide-white/[0.08]">
        {experiences.map((item) => (
          <section key={`${item.company}-${item.period}`} className="py-6 first:pt-0 last:pb-0 sm:py-7">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">
                  {item.company} / {item.location}
                </p>
                <h3 className="mt-3 text-xl text-white">{item.role}</h3>
              </div>
              <div className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/[0.46]">
                {item.period}
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              <ul className="space-y-3 text-sm leading-7 text-white/[0.66]">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/55" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
