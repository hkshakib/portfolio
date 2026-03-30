import { portfolio, socialLinks } from "../../data/portfolio";
import Button from "../ui/Button";
import Reveal from "../Reveal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-24 pt-8 sm:pb-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-[32px] border border-[color:var(--line)] bg-[color:var(--panel)] px-6 py-8 shadow-panel sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                {portfolio.role}
              </p>
              <h3 className="mt-3 text-xl text-[color:var(--text)]">{portfolio.name}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
                Built to feel precise, calm, and recruiter-ready on every screen.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <Button key={link.href} href={link.href} variant="secondary">
                  {link.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-[color:var(--line)] pt-6 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <span>{portfolio.location}</span>
            <span>{year}</span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
