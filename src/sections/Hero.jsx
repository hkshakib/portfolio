import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import avatar from "../static/avatar.png";
import { portfolio } from "../data/portfolio";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";

export default function Hero() {
  return (
    <section id="hero" className="px-4 pb-10 pt-28 sm:px-6 sm:pt-32 lg:pb-14">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
        <div className="relative overflow-hidden rounded-[36px] border border-[color:var(--line)] bg-[rgba(20,17,14,0.72)] p-6 shadow-panel backdrop-blur-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.32),transparent)]" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge>{portfolio.availability}</Badge>
            <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-soft)]">
              {portfolio.role}
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-[2.25rem] font-semibold leading-[1.05] text-[color:var(--text)] sm:text-[3.35rem] lg:text-[4.3rem]">
              {portfolio.headline}
              <span className="block font-accent text-[color:var(--accent)]">
                Made to feel measured, premium, and genuinely useful.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-sm leading-7 text-[color:var(--muted)] sm:text-[15px]">
              {portfolio.intro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="#projects" icon={ArrowUpRight}>
              Selected Work
            </Button>
            <Button href={`mailto:${portfolio.email}`} variant="secondary" icon={Mail}>
              Email Me
            </Button>
            <Button href={portfolio.resume} variant="secondary" icon={Download}>
              Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >
            {portfolio.heroNotes.map((note) => (
              <Card key={note} className="rounded-[24px] p-4">
                <p className="text-sm leading-7 text-[color:var(--muted)]">{note}</p>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {["FastAPI", "React", "Flutter", "OpenAI", "Supabase", "Databricks"].map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6"
        >
          <Card className="relative overflow-hidden p-4 sm:p-5">
            <div className="absolute -right-20 top-4 h-40 w-40 rounded-full bg-[rgba(221,208,185,0.08)] blur-3xl" />
            <div className="rounded-[28px] border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.02)] p-3">
              <div className="overflow-hidden rounded-[22px]">
                <img
                  src={avatar}
                  alt={portfolio.name}
                  className="h-[320px] w-full object-cover object-top sm:h-[380px]"
                />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg text-[color:var(--text)]">{portfolio.name}</h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-[color:var(--muted)]">
                  <MapPin className="h-4 w-4 text-[color:var(--muted-soft)]" />
                  {portfolio.location}
                </p>
              </div>
              <Badge>Remote-ready</Badge>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {portfolio.stats.map((item) => (
              <Card key={item.label} interactive className="rounded-[26px] p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-soft)]">
                  Snapshot
                </p>
                <p className="mt-4 text-lg leading-tight text-[color:var(--text)]">{item.value}</p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{item.label}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
