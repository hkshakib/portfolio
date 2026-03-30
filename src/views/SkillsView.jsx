import { skillGroups } from "../data/portfolio";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import ViewHeader from "../components/portfolio/ViewHeader";

export default function SkillsView() {
  return (
    <div>
      <ViewHeader
        eyebrow="Skills"
        title="A complete skills view pulled from the resume plus the current portfolio history."
        description="This route intentionally keeps the inventory broad so none of the relevant tools, frameworks, or working knowledge areas are lost."
      />
      <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {skillGroups.map((group) => (
          <Card key={group.title} className="rounded-[28px] p-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">{group.title}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
