import { motion } from "framer-motion";
import { GrUserExpert } from "react-icons/gr";
import Image from "../static/work.gif";
import { skills, skillsData } from "../static/Data";

export default function Skills() {
  return (
    <section id="skills" className="relative isolate overflow-hidden">
      <SkillsBackground />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
            Toolkit & Expertise
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </motion.div>

        <div className="mt-8 grid items-center gap-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={Image}
                  alt="skills"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(closest-side,white,transparent)] opacity-50">
                  <GridPattern />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-white/70">
                <Stat label="Frontend" value="React / Tailwind" />
                <Stat label="Backend" value="FastAPI / REST" />
                <Stat label="AI" value="OpenAI / LLMs" />
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white"
            >
              Skills
            </motion.h2>

            <div className="mt-6 space-y-5">
              {skills.map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-sm sm:text-base font-semibold text-white/90">
                      {category.category}
                    </h3>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80 shadow-sm shadow-black/20"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8"
            >
              <h4 className="text-base sm:text-lg font-semibold text-white/90">
                Proficient in
              </h4>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {skillsData.map((skill, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10"
                  >
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-emerald-400 ring-1 ring-emerald-400 shadow-sm">
                      <GrUserExpert className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsBackground() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_500px_at_70%_-10%,rgba(150,150,255,0.25),transparent)]" />
      <div className="absolute inset-0 blur-2xl">
        <div className="absolute -top-16 right-[20%] h-72 w-72 rounded-full bg-gradient-to-br from-violet-400/40 to-fuchsia-400/30 mix-blend-screen" />
        <div className="absolute bottom-10 left-[15%] h-80 w-80 rounded-full bg-gradient-to-br from-cyan-300/40 to-emerald-300/30 mix-blend-screen" />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_20%,transparent,rgba(0,0,0,0.55))]" />
    </div>
  );
}

function GridPattern() {
  return (
    <svg
      className="h-full w-full opacity-40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path
            d="M 32 0 L 0 0 0 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#grid)"
        className="text-white"
      />
    </svg>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <div className="text-sm font-bold text-white">{value}</div>
      <div className="text-[11px] uppercase tracking-wider text-white/60">
        {label}
      </div>
    </div>
  );
}
