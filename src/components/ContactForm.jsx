import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "./ui/Button";
import Card from "./ui/Card";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm({ email }) {
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = form.name
      ? `Portfolio inquiry from ${form.name}`
      : "Portfolio inquiry";
    const lines = [
      form.name ? `Name: ${form.name}` : "",
      form.email ? `Email: ${form.email}` : "",
      "",
      form.message || "Hello Shakib, I would like to discuss a project.",
    ].filter(Boolean);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <Card className="p-5 sm:p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field
          label="Your name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Jane Doe"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@company.com"
        />
        <Field
          label="Project brief"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me what you're building and where you need help."
          multiline
        />
        <Button type="submit" icon={ArrowUpRight} className="w-full justify-center">
          Start the conversation
        </Button>
      </form>
    </Card>
  );
}

function Field({ label, multiline = false, ...props }) {
  const shared =
    "mt-2 w-full rounded-[22px] border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.02)] px-4 py-3 text-sm text-[color:var(--text)] outline-none transition placeholder:text-[color:var(--muted-soft)] focus:border-[color:var(--line-strong)] focus:bg-[color:rgba(255,255,255,0.04)]";

  return (
    <label className="block text-sm text-[color:var(--muted)]">
      {label}
      {multiline ? (
        <textarea rows="5" className={`${shared} resize-none`} {...props} />
      ) : (
        <input className={shared} {...props} />
      )}
    </label>
  );
}
