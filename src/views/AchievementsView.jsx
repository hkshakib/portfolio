import { achievements } from "../data/portfolio";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const profileStats = [
  { label: "Solved problems", value: "3000+" },
  { label: "CodeChef max", value: "1938" },
  { label: "Codeforces max", value: "1543" },
  { label: "IEEE Xtreme", value: "Top 6" },
];

export default function AchievementsView() {
  const profileLinks = achievements.filter((item) => item.href);

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

      <div className="grid gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
        <div className="space-y-5 xl:sticky xl:top-24 xl:self-start">
          <Card className="overflow-hidden rounded-[30px] bg-[linear-gradient(145deg,rgba(255,126,162,0.12),rgba(24,26,31,0.15)_42%,rgba(255,255,255,0.03))] p-6 sm:p-7">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">
              Competitive profile
            </p>
            <h3 className="mt-4 max-w-sm text-xl font-semibold leading-tight text-white">
              Ratings, contest results, and problem-solving volume that back up execution speed.
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/60">
              These signals are useful because they show consistent reasoning under pressure, not
              just isolated wins.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {profileLinks.map((item) => (
                <Button key={item.title} href={item.href} variant="secondary">
                  {item.title}
                </Button>
              ))}
            </div>
          </Card>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
            {profileStats.map((item) => (
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

        <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] px-5 py-4 sm:px-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.42]">
              Achievement highlights
            </p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.32]">
              {achievements.length} entries
            </p>
          </div>

          <div className="divide-y divide-white/[0.08]">
            {achievements.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-4 px-5 py-5 sm:px-6 md:grid-cols-[56px_minmax(0,1fr)_auto] md:items-start"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/[0.28]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div className="min-w-0">
                  <h3 className="text-lg text-white">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">{item.detail}</p>
                </div>

                {item.href ? (
                  <div className="md:pl-4">
                    <Button href={item.href} variant="secondary">
                      Open
                    </Button>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
