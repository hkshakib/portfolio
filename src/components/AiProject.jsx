import { motion } from "framer-motion";
import { PiWebhooksLogo } from "react-icons/pi";
import { GiArchiveResearch } from "react-icons/gi";
import { Sparkles } from "lucide-react";

const AiProject = ({
  Title = "Text-to-Speech (TTS) System for Bangla Language",
  Summery = "Explored neural network approaches for natural-sounding Bangla speech synthesis, including prosody and intonation; developed an end-to-end TTS pipeline.",
  Technologies = ["NLP", "TTS", "Bangla TTS"],
  CodeUrl = "https://github.com/hkshakib/Prosody-Controlled-TTS",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl w-[300px] lg:w-[400px] h-[400px] p-5 sm:p-6 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-400/20 to-purple-400/10 blur-xl" />

      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur">
          <Sparkles className="h-4 w-4 text-emerald-400" />
          Yet to be Published
        </span>
        <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-600/90 shadow-lg">
          <GiArchiveResearch className="h-5 w-5 text-white" />
        </span>
      </div>

      <h3 className="mt-3 text-left text-lg lg:text-xl font-mono font-bold text-white">
        {Title}
      </h3>

      <p className="mt-2 flex-1 text-[14px] text-white/80">{Summery}</p>

      <div className="mt-2 flex flex-wrap gap-2 text-white/80">
        {Technologies.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-[12px] font-mono"
          >
            <PiWebhooksLogo className="h-4 w-4 text-emerald-400" /> {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <a
          href={CodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-mono hover:bg-emerald-600/30 hover:border-emerald-700 transition-all"
        >
          Read the Paper →
        </a>
      </div>
    </motion.div>
  );
};

export default AiProject;
