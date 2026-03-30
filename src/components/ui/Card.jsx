export default function Card({ children, className = "", interactive = false }) {
  return (
    <div
      className={`surface-ring rounded-[28px] border border-[color:var(--line)] bg-[color:var(--panel)] shadow-panel backdrop-blur-xl ${interactive ? "transition duration-300 hover:-translate-y-1 hover:border-[color:var(--line-strong)]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
