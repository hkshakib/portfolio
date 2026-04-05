import { achievements } from "../data/portfolio";
import AchievementCard from "../components/cards/AchievementCard";
import Card from "../components/ui/Card";

export default function AchievementsView() {
  return (
    <div>
      <div className="mb-6 sm:mb-7">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/[0.42]">Achievements</p>
        <h2 className="mt-3 max-w-4xl text-2xl font-semibold text-white sm:text-3xl">
          Proof points that reinforce the engineering story.
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">
          Competitive programming, rankings, and algorithm-heavy practice continue to show up in
          how systems are designed, optimized, and reasoned about.
        </p>
      </div>
      <div className="grid gap-4 xl:grid-cols-[0.82fr_1.18fr]">
        <Card className="rounded-[30px] p-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">Competitive profile</p>
          <div className="mt-5 space-y-3">
            <Stat title="CodeChef" value="4-star / 1938 max" />
            <Stat title="Codeforces" value="Specialist / 1543 max" />
            <Stat title="Solved problems" value="3000+" />
            <Stat title="ICPC" value="Dhaka Regional 2021" />
          </div>
        </Card>
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((item, index) => (
            <AchievementCard key={item.title} item={item} delay={index * 0.04} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.03] px-4 py-4">
      <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">{title}</p>
      <p className="mt-3 text-sm text-white/[0.72]">{value}</p>
    </div>
  );
}
