export default function ViewHeader({ eyebrow, title, description, aside }) {
  return (
    <div className="mb-5 rounded-[28px] border border-white/[0.08] bg-[rgba(255,255,255,0.03)] px-5 py-5 sm:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/[0.42]">{eyebrow}</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-7 text-white/60">{description}</p>
        </div>
        {aside ? <div className="text-sm text-white/50">{aside}</div> : null}
      </div>
    </div>
  );
}
