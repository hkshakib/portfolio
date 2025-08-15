import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Github, Mail } from "lucide-react";
import CV from "../static/Resume.pdf";
import Avatar from "../static/avatar2.JPG";
import { SlCloudDownload } from "react-icons/sl";

export default function Home() {
  return (
    <section className="relative isolate overflow-hidden">
      <BackgroundArt />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 pt-28 pb-24 md:pt-36 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md shadow-sm shadow-black/20"
        >
          <Sparkles className="h-4 w-4 text-emerald-400" />
          <span className="text-xs font-medium tracking-wide text-white/80">
            Available for Ideas & collaborations
          </span>
        </motion.div>
        <div className="mt-8 grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-balance text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Crafting immersive web experiences with
              <span className="mx-2 inline-block bg-gradient-to-r from-fuchsia-300 via-pink-300 to-amber-200 bg-clip-text text-transparent">
                modern art
              </span>
              & motion
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/70"
            >
              I’m Shakib — A Full‑Stack engineer who blends code, design, and
              subtle interactions to bring brands to life. Explore my work,
              process, and experiments below.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-2xl bg-emerald-300 px-5 py-3 font-semibold text-gray-900 transition hover:bg-emerald-600"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#footer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10"
              >
                Get in Touch <Mail className="h-4 w-4" />
              </a>
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-black/30 px-5 py-3 font-semibold text-white/90 backdrop-blur-md transition hover:bg-black/40"
              >
                Download Resume <SlCloudDownload className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Currently building AI Powered Tiktok Dashboard
              </span>
              <a
                href="https://github.com/hkshakib"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </motion.div>
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl relative">
                <img
                  src={Avatar}
                  alt="Shakib Portrait"
                  className="h-full w-full object-cover rounded-2xl"
                />
                <div className="relative h-full w-full">
                  <Blob className="left-[-10%] top-[-8%] h-64 w-64 from-fuchsia-400/70 to-pink-400/70" />
                  <Blob className="right-[-12%] top-[10%] h-52 w-52 from-cyan-300/70 to-emerald-300/70" />
                  <Blob className="left-[10%] bottom-[-12%] h-72 w-72 from-amber-300/70 to-rose-300/70" />
                  <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(closest-side,white,transparent)]">
                    <GridPattern />
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-white/70">
                <Stat label="Years" value="4+" />
                <Stat label="Projects" value="10+" />
                <Stat label="SaaS launched" value="2+" />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-black/20 py-4 backdrop-blur"
        >
          <div className="animate-marquee whitespace-nowrap text-sm text-white/70">
            {[
              "React",
              "Next.js",
              "FastAPI",
              "Django",
              "Django REST",
              "Tailwind",
              "Framer Motion",
              "Supabase",
              "Stripe",
              "OpenAI",
              "TypeScript",
              "PostgreSQL",
            ].map((t, i) => (
              <span key={i} className="mx-6 inline-block">
                <span className="text-emerald-400">✺</span> {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <div className="text-lg font-bold text-white">{value}</div>
      <div className="text-[11px] uppercase tracking-wider text-white/60">
        {label}
      </div>
    </div>
  );
}

function BackgroundArt() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(160,160,255,0.35),transparent)]" />
      <div className="absolute inset-0 blur-2xl">
        <div className="absolute -top-24 left-[10%] h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-500/40 to-pink-500/30 mix-blend-screen" />
        <div className="absolute top-[20%] right-[8%] h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/40 to-teal-400/30 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[25%] h-80 w-80 rounded-full bg-gradient-to-br from-amber-400/40 to-rose-400/30 mix-blend-screen" />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_20%,transparent,rgba(0,0,0,0.55))]" />
    </div>
  );
}

function Blob({
  className = "",
  from = "from-fuchsia-400",
  to = "to-pink-400",
}) {
  return (
    <div
      className={
        "absolute -z-10 rounded-[60%] bg-gradient-to-br blur-2xl will-change-transform animate-blob " +
        from +
        " " +
        to +
        " " +
        className
      }
    />
  );
}

function GridPattern() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf,
      t = 0;
    const loop = () => {
      t += 0.005;
      el.style.transform = `translateY(${Math.sin(t) * 6}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      ref={ref}
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
