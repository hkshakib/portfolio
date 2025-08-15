import { GrTechnology } from "react-icons/gr";
import { motion } from "framer-motion";

const ResearchComponent = ({ Title, Summery, Technologies = [], CodeUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl w-[300px] lg:w-[400px] h-[400px] p-5 sm:p-6"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-400/20 to-purple-400/10 blur-xl" />
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur">
          Yet to be Published
        </span>
      </div>

      <h3 className="mt-3 text-center text-lg lg:text-xl font-mono font-bold text-white">
        {Title}
      </h3>
      <p className="mt-2 flex-1 text-[14px] text-white/80">{Summery}</p>

      {Technologies?.length > 0 && (
        <div className="mt-2">
          <div className="text-[13px] font-semibold text-white/90">
            Used Models:
          </div>
          <div className="mt-2 flex flex-wrap gap-2 text-white/80">
            {Technologies.map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-[12px] font-mono"
              >
                <GrTechnology className="h-4 w-4" /> {t}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="mt-4 flex justify-center">
        <a
          href={CodeUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-mono hover:bg-indigo-500/30 hover:border-indigo-400 transition-all"
        >
          View Paper
        </a>
      </div>
    </motion.div>
  );
};

export default ResearchComponent;
