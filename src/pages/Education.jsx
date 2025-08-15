import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import UniversityLogo from "../static/unilogo.png";
import SchoolLogo from "../static/school.gif";

const EDUCATION = [
  {
    logo: UniversityLogo,
    name: "Leading University",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "Feb 2018 – Feb 2023",
    location: "Sylhet, Bangladesh",
    highlights: [
      "Speech synthesis (Bangla TTS) research project",
      "Relevant coursework: Algorithms, ML, NLP, DBMS",
    ],
    tone: "from-violet-400/25 to-fuchsia-400/15",
  },
  {
    logo: SchoolLogo,
    name: "Scholarshome",
    degree: "Higher Secondary (Science)",
    period: "Jul 2014 – Jul 2016",
    location: "Sylhet, Bangladesh",
    highlights: ["Math & Physics focus", "Programming club activities"],
    tone: "from-cyan-300/25 to-emerald-300/15",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative isolate overflow-hidden py-20 md:py-28"
    >
      <BackgroundFX />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <GraduationCap className="h-4 w-4 text-emerald-400" />
            Education
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Academic Journey
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            A concise timeline of degrees and milestones.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-white/15 md:block" />

          <div className="space-y-10">
            {EDUCATION.map((item, idx) => (
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
    <div className="relative grid items-center gap-8 md:gap-12 grid-cols-1 md:[grid-template-columns:1fr_60px_1fr]">
      <div
        className={left ? "hidden md:block order-1" : "hidden md:block order-3"}
      >
        {left ? <Card item={item} /> : <div className="hidden md:block" />}
      </div>
      <div className="relative order-2 hidden md:block">
        <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/10 backdrop-blur border border-white/15 shadow-lg">
          <LogoMedallion src={item.logo} />
        </span>
      </div>
      <div
        className={
          !left ? "hidden md:block order-1" : "hidden md:block order-3"
        }
      >
        {!left ? <Card item={item} /> : <div className="hidden md:block" />}
      </div>
      <div className="md:hidden order-4">
        <Card item={item} />
      </div>
    </div>
  );
}

function Card({ item }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="relative rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl shadow-2xl"
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${item.tone} blur-xl`}
      />

      <div className="flex items-center gap-4">
        <div className="hidden sm:block">
          <LogoMedallion src={item.logo} size="md" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{item.name}</h3>
          <div className="text-sm text-white/80">{item.degree}</div>
          <div className="text-xs text-white/60">
            {item.period} · {item.location}
          </div>
        </div>
      </div>

      {item.highlights?.length > 0 && (
        <ul className="mt-4 grid gap-2 text-sm text-white/80">
          {item.highlights.map((h, i) => (
            <li key={i} className="relative pl-4">
              <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-white/70" />
              {h}
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}

function LogoMedallion({ src, size = "sm" }) {
  const dim = size === "md" ? "h-12 w-12" : "h-10 w-10";
  return (
    <div
      className={`grid place-items-center rounded-full border border-white/15 bg-white/10 backdrop-blur ${dim} overflow-hidden`}
    >
      <img src={src} alt="logo" className="h-full w-full object-cover" />
    </div>
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
