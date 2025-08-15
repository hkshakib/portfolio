import { motion } from "framer-motion";
import { SlCloudDownload } from "react-icons/sl";
import { FiExternalLink } from "react-icons/fi";
const RESUME_URL = "../static/Resume.pdf";

const SUMMARY =
  "I build fast, secure, and user-focused web apps with FastAPI, React, and Tailwind — currently shaping fintech tools at CopyAd AI. Passionate about scalable, smart experiences that make tech useful and accessible.";

const EXPERIENCE = [
  {
    role: "Software Engineer",
    org: "CopyAd AI · London, England",
    period: "May 2024 – Present",
    bullets: [
      "Developed full-stack AIaaS fintech platform (FastAPI, React, TypeScript, Tailwind).",
      "Built SSR, lazy loading, protected routes; optimized performance and UX.",
      "Integrated Stripe (subs/payments) and Supabase (auth, DB, RBAC).",
      "Implemented secure coding & PCI-compliant flows; SEO + routing improvements.",
      "Shipped new AI tools (OpenAI) + dashboards; improved user engagement by ~40%.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    org: "Spark Sight Solution · London, England",
    period: "Oct 2024 – Apr 2025",
    bullets: [
      "Migrated 10M+ records Alteryx → Databricks SQL.",
      "Designed pipelines & query optimization strategies.",
    ],
  },
  {
    role: "Software Engineer",
    org: "LIILab · Sylhet, Bangladesh",
    period: "Mar 2021 – Jan 2022",
    bullets: [
      "Product customization system with Django ORM & REST; +25% engagement.",
      "Responsive UI cut bounce rate by 30%, boosted session duration 45%.",
      "Django MVT optimizations led to 40% faster deployments.",
    ],
  },
];

const SKILLS = [
  { label: "Languages", items: ["Python", "TypeScript", "C++"] },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js (App Router)",
      "Tailwind CSS",
      "Redux",
      "RTK",
      "Framer Motion",
    ],
  },
  { label: "Backend", items: ["FastAPI", "Django REST", "Node.js"] },
  { label: "APIs", items: ["REST", "Stripe", "OpenAI APIs", "Supabase"] },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase", "SQLite"],
  },
  { label: "Cloud & DevOps", items: ["Vercel", "Render", "GitHub", "CI/CD"] },
  { label: "Testing & Tools", items: ["Unit Testing", "Jest"] },
  {
    label: "Core",
    items: [
      "Algorithms",
      "Data Structures",
      "OOP",
      "System Design",
      "ML",
      "RL",
    ],
  },
  { label: "Other", items: ["SSR", "ISR", "Responsive Design"] },
];

const PROJECTS = [
  {
    name: "CopyAd — AI Ad Copy Platform",
    stack: [
      "React",
      "FastAPI",
      "OpenAI",
      "Tailwind",
      "Stripe",
      "Supabase",
      "React Query",
      "Zustand",
    ],
    bullets: [
      "AI-powered ad copy across channels; 40% higher engagement.",
      "Scalable component system w/ lazy loading & protected routes.",
      "Supabase auth + DB; secure user data handling.",
    ],
    links: [{ label: "copyad.ai", href: "https://copyad.ai" }],
  },
  {
    name: "LUXHAVEN (Backend)",
    stack: ["Python", "Django", "REST"],
    bullets: [
      "Scalable e-commerce backend for 1000+ concurrent users.",
      "Auth, products, cart, orders; optimized ORM queries.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/hkshakib/luxehaven" }],
  },
];

const EDUCATION = [
  {
    school: "University of Hertfordshire",
    degree: "MSc in Artificial Intelligence and Robotics",
    period: "Sep 2024 – Present",
    location: "Hatfield, England",
  },
  {
    school: "Leading University",
    degree: "BSc in Computer Science and Engineering",
    period: "Feb 2018 – July 2022",
    location: "Sylhet, Bangladesh",
  },
];

const COMPETITIVE = [
  "Codeforces: SPECIALIST · Max 1543 · _Bohemian",
  "CodeChef: 4★ · Max 1938 · hkshakib",
  "ICPC Dhaka Regional 2021 (BUBT); ICPC ID: KHLU6288934E",
  "Solved 3000+ problems across online judges",
];

const ACHIEVEMENTS = [
  "Participated in ICPC Dhaka Regional 2021 (BUBT)",
  "Ranked Top 6 in Bangladesh · LUZeroIQ, IEEE Xtreme 14",
];

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="relative isolate overflow-hidden py-20 md:py-28"
    >
      <BackgroundFX />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Resume
            </h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              A quick snapshot of my experience, skills, education, and
              achievements.
            </p>
          </div>

          <a
            href={RESUME_URL}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 active:scale-[0.99]"
          >
            <SlCloudDownload className="h-4 w-4" />
            <span>Download Resume (PDF)</span>
          </a>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <GlassCard title="Summary">
            <p className="text-white/80">{SUMMARY}</p>
          </GlassCard>

          <GlassCard title="Experience">
            <div className="space-y-5">
              {EXPERIENCE.map((ex, i) => (
                <div key={i}>
                  <div className="text-white font-semibold">{ex.role}</div>
                  <div className="text-white/80 text-sm">{ex.org}</div>
                  <div className="text-white/60 text-xs">{ex.period}</div>
                  <ul className="mt-2 list-disc pl-5 text-white/80 text-sm space-y-1">
                    {ex.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard title="Skills">
            <div className="grid grid-cols-2 gap-3">
              {SKILLS.map((g, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <div className="text-xs font-semibold text-white/90">
                    {g.label}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {g.items.map((t, k) => (
                      <span
                        key={k}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard title="Projects">
            <div className="space-y-5">
              {PROJECTS.map((p, i) => (
                <div key={i}>
                  <div className="text-white font-semibold">{p.name}</div>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {p.stack.map((s, k) => (
                      <span
                        key={k}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-white/80 text-sm space-y-1">
                    {p.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                  {p.links?.length ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.links.map((l, j) => (
                        <a
                          key={j}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-blue-300 hover:text-blue-200"
                        >
                          <FiExternalLink className="h-3.5 w-3.5" /> {l.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard title="Education">
            <div className="space-y-5">
              {EDUCATION.map((e, i) => (
                <div key={i}>
                  <div className="text-white font-semibold">{e.school}</div>
                  <div className="text-white/80 text-sm">{e.degree}</div>
                  <div className="text-white/60 text-xs">
                    {e.period} · {e.location}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard title="Competitive Programming">
            <ul className="list-disc pl-5 text-white/80 text-sm space-y-1">
              {COMPETITIVE.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard title="Achievements">
            <ul className="list-disc pl-5 text-white/80 text-sm space-y-1">
              {ACHIEVEMENTS.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

function GlassCard({ title, children }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="relative rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl shadow-2xl"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-400/20 via-fuchsia-400/10 to-purple-400/10 blur-xl" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <div className="mt-3">{children}</div>
    </motion.article>
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
