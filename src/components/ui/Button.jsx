import { Link } from "react-router-dom";

export default function Button({
  children,
  href,
  to,
  icon: Icon,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-[12px] font-medium tracking-[0.16em] uppercase transition duration-300 ease-out sm:px-5";
  const variants = {
    primary:
      "border-[color:var(--accent)] bg-[color:var(--accent)] text-[#1a1712] hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)]",
    secondary:
      "border-[color:var(--line)] bg-[color:rgba(255,255,255,0.02)] text-[color:var(--text)] hover:-translate-y-0.5 hover:border-[color:var(--line-strong)] hover:bg-[color:rgba(255,255,255,0.05)]",
    ghost:
      "border-transparent bg-transparent text-[color:var(--muted)] hover:text-[color:var(--text)]",
  };
  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon className="h-4 w-4 transition group-hover:translate-x-0.5" /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}
