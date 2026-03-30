export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`section-divider scroll-mt-24 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
