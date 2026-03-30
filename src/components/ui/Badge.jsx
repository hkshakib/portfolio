export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.03)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)] ${className}`}
    >
      {children}
    </span>
  );
}
