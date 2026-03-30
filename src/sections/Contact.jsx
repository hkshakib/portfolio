import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { portfolio } from "../data/portfolio";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Section id="contact" className="pb-12">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Contact"
            title="Looking for a full-stack engineer who can own the product surface and the system behind it?"
            description="The form is frontend-only and opens your email client, which keeps the site lightweight while still giving recruiters and collaborators a clear path to reach out."
          />
          <Reveal delay={0.08}>
            <Card className="space-y-5 p-6">
              <InfoRow icon={Mail} label="Email" value={portfolio.email} href={`mailto:${portfolio.email}`} />
              <InfoRow icon={Phone} label="Phone" value={portfolio.phone} href={`tel:${portfolio.phone.replace(/\s+/g, "")}`} />
              <InfoRow icon={MapPin} label="Location" value={portfolio.location} />
              <Button href={portfolio.resume} icon={ArrowUpRight}>
                Download Resume
              </Button>
            </Card>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <ContactForm email={portfolio.email} />
        </Reveal>
      </div>
    </Section>
  );
}

function InfoRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.03)]">
        <Icon className="h-4 w-4 text-[color:var(--muted)]" />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-soft)]">
          {label}
        </p>
        <p className="mt-2 text-sm leading-7 text-[color:var(--text)]">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block rounded-[22px] border border-transparent p-1 transition hover:border-[color:var(--line)]">
        {content}
      </a>
    );
  }

  return content;
}
