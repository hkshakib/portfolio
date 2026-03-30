import { ArrowUp, Mail, FileText } from "lucide-react";
import { portfolio } from "../../data/portfolio";

const items = [
  { label: "Resume", href: portfolio.resume, icon: FileText },
  { label: "Email", href: `mailto:${portfolio.email}`, icon: Mail },
];

export default function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4 lg:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between rounded-full border border-[color:var(--line)] bg-[rgba(18,16,13,0.86)] px-3 py-2 shadow-panel backdrop-blur-2xl">
        <div className="flex items-center gap-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") || item.href.startsWith("mailto") ? "_blank" : undefined}
                rel={item.href.startsWith("http") || item.href.startsWith("mailto") ? "noreferrer" : undefined}
                className="flex items-center gap-2 rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-[color:var(--text)]"
              >
                <Icon className="h-4 w-4 text-[color:var(--muted)]" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.04)] text-[color:var(--text)]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
