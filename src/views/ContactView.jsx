import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { portfolio, socialLinks } from "../data/portfolio";
import ContactForm from "../components/ContactForm";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import ViewHeader from "../components/portfolio/ViewHeader";

export default function ContactView() {
  return (
    <div>
      <ViewHeader
        eyebrow="Contact"
        title="Reach out if you need someone who can own the interface and the system behind it."
        description="The form remains frontend-only and opens your mail client, keeping the portfolio simple while still ready for recruiter outreach."
      />
      <div className="grid gap-4 xl:grid-cols-[0.84fr_1.16fr]">
        <Card className="rounded-[30px] p-6">
          <div className="space-y-4">
            <Info title="Email" value={portfolio.email} href={`mailto:${portfolio.email}`} icon={<Mail className="h-4 w-4" />} />
            <Info title="Phone" value={portfolio.phone} href={`tel:${portfolio.phone.replace(/\s+/g, "")}`} icon={<Phone className="h-4 w-4" />} />
            <Info title="Location" value={portfolio.location} icon={<MapPin className="h-4 w-4" />} />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={portfolio.resume} icon={ArrowUpRight}>
              Resume
            </Button>
            {socialLinks.map((link) => (
              <Button key={link.href} href={link.href} variant="secondary">
                {link.label}
              </Button>
            ))}
          </div>
        </Card>
        <ContactForm email={portfolio.email} />
      </div>
    </div>
  );
}

function Info({ title, value, href, icon }) {
  const content = (
    <div className="flex items-start gap-3 rounded-[22px] border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-white/70">
      <div className="mt-1 text-white/[0.48]">{icon}</div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">{title}</p>
        <p className="mt-2 text-sm leading-7 text-white/[0.72]">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
