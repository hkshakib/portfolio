import { motion } from "framer-motion";
import { SlCloudDownload } from "react-icons/sl";

export default function ResumeButton({
  href = "./assets/Resume.pdf",
  label = "Download Resume",
  variant = "glass",
  className = "",
  download = true,
}) {
  const base =
    "group relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60";

  const styles =
    variant === "gradient"
      ?
        "text-white shadow-[0_4px_20px_rgba(59,130,246,0.25)] " +
        "bg-[linear-gradient(135deg,#3b82f6_0%,#8b5cf6_50%,#ec4899_100%)] " +
        "hover:brightness-110"
      :
        "text-white/95 border border-white/15 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:border-white/25";

  return (
    <a
      href={href}
      {...(download ? { download: "" } : {})}
      className={`${base} ${styles} ${className}`}
      aria-label={label}
    >
      <SlCloudDownload className="h-4 w-4" />
      <span>{label}</span>
      <span
        className="
          pointer-events-none absolute inset-0 overflow-hidden rounded-xl
          before:absolute before:inset-y-0 before:left-[-30%]
          before:h-full before:w-[30%]
          before:translate-x-0 before:-skew-x-12
          before:bg-gradient-to-r before:from-white/0 before:via-white/40 before:to-white/0
          before:opacity-0 before:transition
          group-hover:before:translate-x-[220%] group-hover:before:opacity-100
        "
      />
      <motion.span
        aria-hidden
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.7, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute -inset-px rounded-xl ring-1 ring-white/10"
      />
    </a>
  );
}
