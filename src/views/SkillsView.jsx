import { skillGroups } from "../data/portfolio";
import Tag from "../components/ui/Tag";

export default function SkillsView() {
  return (
    <div>
      <div className="mb-6 sm:mb-7">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/[0.42]">Skills</p>
        <h2 className="mt-3 max-w-4xl text-2xl font-semibold text-white sm:text-3xl">
          A complete skills view pulled from the resume plus the current portfolio history.
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">
          This route intentionally keeps the inventory broad so none of the relevant tools,
          frameworks, or working knowledge areas are lost.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-[22px] border border-white/[0.08] bg-white/[0.02] p-5"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">{group.title}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
