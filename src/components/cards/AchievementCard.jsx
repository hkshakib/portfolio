import Card from "../ui/Card";
import Button from "../ui/Button";
import Reveal from "../Reveal";

export default function AchievementCard({ item, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Card interactive className="h-full p-5 sm:p-6">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-soft)]">
          Milestone
        </p>
        <h3 className="mt-3 text-lg text-[color:var(--text)]">{item.title}</h3>
        <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{item.detail}</p>
        {item.href ? (
          <div className="mt-5">
            <Button href={item.href} variant="secondary">
              Profile
            </Button>
          </div>
        ) : null}
      </Card>
    </Reveal>
  );
}
