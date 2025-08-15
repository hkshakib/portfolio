import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaRegHand } from "react-icons/fa6";

import LC from "../static/leetcode.png";
import CC from "../static/codechef.png";
import CF from "../static/CF.png";

export default function ProblemSolving() {
  const [cf, setCf] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { data } = await axios.get(
          "https://codeforces.com/api/user.info?handles=_Bohemian"
        );
        if (!mounted) return;
        setCf(data?.result?.[0] || null);
      } catch (e) {
        if (!mounted) return;
        setError("Failed to load Codeforces profile");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, []);

  return (
    <section
      id="problem-solving"
      className="relative isolate overflow-hidden py-20 md:py-28"
    >
      <SectionBackground />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Problem Solving
          </h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            Competitive programming profiles and stats across Codeforces,
            CodeChef, and LeetCode.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-3">
          <StatCard
            brand={{
              name: "Codeforces",
              logo: CF,
              url: "https://codeforces.com/profile/_Bohemian",
              handle: "Bohemian",
            }}
            blocks={[
              {
                label: cf?.maxRank ? cf.maxRank : loading ? "Loading…" : "—",
                value: cf?.maxRating ? cf.maxRating : loading ? "…" : "—",
                sub: "Highest Rating",
              },
              { label: "Total Solved", value: "1560", sub: "Problems" },
            ]}
            tone="from-fuchsia-400/35 to-pink-400/25"
            loading={loading}
            error={error}
          />
          <StatCard
            brand={{
              name: "CodeChef",
              logo: CC,
              url: "https://www.codechef.com/users/hkshakib",
              handle: "hkshakib",
            }}
            blocks={[
              { label: "4*", value: "1810", sub: "Highest Rating" },
              { label: "Total Solved", value: "280", sub: "Problems" },
            ]}
            tone="from-amber-300/35 to-rose-300/25"
          />
          <StatCard
            brand={{
              name: "LeetCode",
              logo: LC,
              url: "https://leetcode.com/humayun_kibria/",
              handle: "humayun_kibria",
            }}
            blocks={[
              { label: "Max Streak", value: "35", sub: "Days" },
              { label: "Total Solved", value: "113", sub: "Problems" },
            ]}
            tone="from-cyan-300/35 to-emerald-300/25"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({ brand, blocks, tone, loading = false, error = null }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl"
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${tone} blur-xl`}
      />
      <div className="flex items-center justify-center gap-3">
        <img src={brand.logo} alt="" className="h-10 w-10 sm:h-16 sm:w-16" />
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          {brand.name}
        </h3>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {blocks.map((b, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center"
          >
            <div className="text-[11px] uppercase tracking-wide text-white/70">
              {b.label}
            </div>
            <div className="mt-1 text-lg font-bold text-white">{b.value}</div>
            <div className="text-[11px] text-white/60">{b.sub}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <a
          href={brand.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
        >
          <FaRegHand className="h-4 w-4" />
          <span>{brand.handle}</span>
        </a>
      </div>
      {loading && (
        <div className="absolute inset-0 grid place-items-center rounded-3xl bg-black/20">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        </div>
      )}
      {error && !loading && (
        <div className="absolute inset-0 grid place-items-center rounded-3xl bg-black/30 p-4 text-center text-xs text-red-200">
          {error}
        </div>
      )}
    </motion.div>
  );
}

function SectionBackground() {
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
