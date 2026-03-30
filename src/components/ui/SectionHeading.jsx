import Reveal from "../Reveal";
import Badge from "./Badge";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <Reveal className={`max-w-3xl ${alignClass}`}>
      <div className={align === "center" ? "flex justify-center" : ""}>
        <Badge>{eyebrow}</Badge>
      </div>
      <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-[color:var(--text)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-[color:var(--muted)] sm:text-[15px]">
        {description}
      </p>
    </Reveal>
  );
}
