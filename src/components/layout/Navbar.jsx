import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems, portfolio } from "../../data/portfolio";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-5 ${
            scrolled
              ? "border-[color:var(--line-strong)] bg-[color:rgba(12,11,9,0.78)] shadow-panel backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#hero" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.03)] text-[13px] font-semibold tracking-[0.18em] text-[color:var(--accent)]">
              HKS
            </div>
            <div className="hidden sm:block">
              <div className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                {portfolio.shortName}
              </div>
              <div className="text-sm text-[color:var(--text)]">{portfolio.role}</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={portfolio.resume} icon={ArrowUpRight}>
              Download Resume
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.03)] text-[color:var(--text)] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-[rgba(10,9,7,0.82)] px-4 pb-8 pt-24 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex h-full max-w-6xl flex-col justify-between rounded-[32px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 shadow-panel">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.02)] px-4 py-4 text-sm text-[color:var(--text)]"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-[color:var(--muted)]" />
                </a>
              ))}
            </div>
            <div className="space-y-4">
              <p className="text-sm leading-7 text-[color:var(--muted)]">
                {portfolio.location}
                <br />
                {portfolio.availability}
              </p>
              <Button href={portfolio.resume} icon={ArrowUpRight} className="w-full">
                Open Resume
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
