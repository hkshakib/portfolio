export default function Tag({ children }) {
  return (
    <span className="rounded-full border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.03)] px-3 py-1 text-[11px] text-[color:var(--muted)]">
      {children}
    </span>
  );
}
