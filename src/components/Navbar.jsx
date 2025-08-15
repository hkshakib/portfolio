import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import useScroll from "../hooks/useScroll";
import { closeMenuAndScroll } from "../utils/navUtils";
import CV from "../static/Resume.pdf";
import { navItems } from "../static/Data";
import ResumeButton from "../components/ResumeButton";

export default function Navbar() {
  const { activeSection } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleCloseOutside = (e) => {
      if (!navRef.current || navRef.current.contains(e.target)) return;
      e.stopPropagation();
      setMenuOpen(false);
    };
    document.addEventListener("click", handleCloseOutside, { capture: true });
    return () => {
      document.removeEventListener("click", handleCloseOutside, {
        capture: true,
      });
    };
  }, []);

  const handleCloseMenuAndScroll = (sectionId) => {
    closeMenuAndScroll(sectionId, setMenuOpen);
  };

  const toggleMenu = () => setMenuOpen((s) => !s);

  return (
    <header
      aria-label="Primary"
      className="sticky top-0 z-50 font-inter backdrop-blur"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#121C2D] to-[#1B0E1E] opacity-95" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_40%_0%,rgba(160,120,200,0.25),transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.25))]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </div>

      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center font-mono text-xl font-bold">
          <motion.a
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            href="/"
            className="flex items-center gap-1"
          >
            <span className="text-white">
              <span className="text-emerald-400">HKS</span>hakib
            </span>
          </motion.a>
        </div>
        <nav className="ml-auto hidden md:block">
          <nav className="ml-auto hidden md:block">
            <ul className="relative flex items-center gap-2 text-sm font-medium text-white">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} className="relative">
                    {isActive && (
                      <motion.div
                        layoutId="navActivePill"
                        className="absolute inset-0 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-[0_6px_30px_rgba(0,0,0,0.25)]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 35,
                        }}
                      />
                    )}

                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={800}
                      onClick={() => handleCloseMenuAndScroll(item.id)}
                      className={`group relative z-10 inline-flex items-center px-3 py-2 rounded-xl transition-colors duration-200 cursor-pointer
                          ${
                            isActive
                              ? "text-emerald-400"
                              : "text-white/85 hover:text-emerald-400"
                          }
                        `}
                    >
                      <span
                        className="pointer-events-none absolute -inset-2 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(40px 40px at center, rgba(59,130,246,0.15), rgba(59,130,246,0) 70%)",
                        }}
                      />

                      <span className="relative">{item.label}</span>
                      <span
                        className={`pointer-events-none absolute left-3 right-3 -bottom-[3px] h-[2px] origin-left rounded-full 
              bg-[linear-gradient(90deg,rgba(59,130,246,0),rgba(59,130,246,.9),rgba(147,51,234,.9),rgba(236,72,153,0))]
              transition-transform duration-300
              ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
            `}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </nav>
        <ResumeButton
          href={CV}
          label="Download Resume"
          variant="glass"
          className="hidden md:inline-flex ml-4"
          download
        />

        <button
          onClick={toggleMenu}
          className="ml-auto inline-flex items-center justify-center md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? (
            <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }}>
              <RxCross1 className="text-[30px] text-blue-400" />
            </motion.div>
          ) : (
            <AiOutlineMenu className="text-[26px] text-blue-400" />
          )}
        </button>
      </div>
      <ScrollProgressBar />
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            ref={navRef}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-x-0 top-16 z-40 h-[calc(100vh-4rem)] overflow-y-auto p-4 backdrop-blur"
          >
            <div aria-hidden className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#121C2D] to-[#1B0E1E] opacity-95" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
            </div>

            <ul className="space-y-1 text-base font-medium text-white/90">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ x: 24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.03 * index }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={
                      "flex items-center justify-between border-b border-white/10 px-1 py-3 transition-colors hover:text-blue-400 " +
                      (activeSection === item.id ? " text-blue-400" : "")
                    }
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="ml-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-4">
              <div className="mt-4">
                <ResumeButton
                  href={CV}
                  label="Download Resume"
                  variant="gradient"
                  className="w-full justify-center"
                  download
                />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="pointer-events-none sticky top-16 z-40 h-0.5 w-full bg-transparent md:top-[unset]">
      <div
        className="h-0.5 bg-emerald-400 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
