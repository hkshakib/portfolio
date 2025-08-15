import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Software Engineer (AI/ML)",
    org: "CopyAd AI · London, United Kingdom",
    date: "May 2025 – Present",
    bullets: [
      "Built full‑stack AIaaS with FastAPI, React, TypeScript, Tailwind.",
      "Stripe subscriptions + Supabase auth/DB/RLS.",
      "LLM features with OpenAI; +40% user engagement.",
      "SSR, code‑splitting, protected routes, perf tuning.",
    ],
    tone: "from-fuchsia-400/35 to-pink-400/25",
  },
  {
    role: "Machine Learning Engineer",
    org: "Bright Sight Solution · London, United Kingdom",
    date: "Oct 2024 – Apr 2025",
    bullets: [
      "Migrated 10M+ records Alteryx → Databricks SQL.",
      "Designed pipelines & query optimization strategies.",
    ],
    tone: "from-amber-300/35 to-rose-300/25",
  },
  {
    role: "Software Engineer (Freelance)",
    org: "",
    date: "Feb 2022 – Oct 2024",
    bullets: [
      "Delivered React/Next.js sites with SEO & CMS.",
      "Issue tracker with Next.js + Django REST (auth, roles).",
      "Personal projects with markdown editor, comments, auth.",
    ],
    tone: "from-cyan-300/35 to-emerald-300/25",
  },
  {
    role: "Junior Software Engineer",
    org: "LIILab · Sylhet, Bangladesh",
    date: "Mar 2021 – Jan 2022",
    bullets: [
      "Django ORM product configurator (custom PC builder).",
      "MVT architecture, clean UI with HTML/CSS.",
    ],
    tone: "from-violet-400/35 to-indigo-400/25",
  },
  {
    role: "ACM Coordinator Lead",
    org: "Leading University Computer Club",
    date: "Jan 2021 – Jan 2022",
    bullets: ["Ran programming & quiz contests, ICT fests, campus tech ops."],
    tone: "from-sky-300/35 to-blue-400/25",
  },
  {
    role: "ACM Coordinator",
    org: "Leading University Computer Club",
    date: "Jan 2020 – Jan 2021",
    bullets: [
      "Organized competitive events; strengthened community & culture.",
    ],
    tone: "from-rose-300/35 to-orange-300/25",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden py-20 md:py-28"
    >
      <BackgroundFX />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Experience
          </h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            Roles, impact, and the tools I wield.
          </p>
        </motion.div>
        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/20 md:block" />

          <div className="space-y-10">
            {EXPERIENCES.map((item, idx) => (
              <Row key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ item, index }) {
  const left = index % 2 === 0;
  return (
    <div className="relative grid items-center gap-8 md:gap-12 grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block">
        {left ? <Card item={item} /> : null}
      </div>
      <div className="hidden md:block">
        {!left ? <Card item={item} /> : null}
      </div>
      <div className="md:hidden">
        <Card item={item} />
      </div>
      <span className="pointer-events-none absolute left-1/2 top-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-emerald-700 text-[11px] font-semibold text-white shadow-md md:grid">
        {index + 1}
      </span>
    </div>
  );
}

function Card({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl shadow-2xl"
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${item.tone} blur-xl`}
      />
      <h3 className="text-xl font-bold text-white">{item.role}</h3>
      <div className="mt-1 text-sm text-white/80">{item.org}</div>
      <div className="text-xs text-white/60">{item.date}</div>
      <ul className="mt-3 space-y-1.5 list-disc pl-5 text-sm text-white/80">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function BackgroundFX() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(160,160,255,0.28),transparent)]" />
      <div className="absolute inset-0 blur-2xl">
        <div className="absolute -top-24 left-[10%] h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-500/35 to-pink-500/25 mix-blend-screen" />
        <div className="absolute top-[20%] right-[8%] h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/35 to-teal-400/25 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[25%] h-80 w-80 rounded-full bg-gradient-to-br from-amber-400/35 to-rose-400/25 mix-blend-screen" />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_20%,transparent,rgba(0,0,0,0.55))]" />
    </div>
  );
}
