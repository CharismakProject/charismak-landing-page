import Link from "next/link";
import { Download, Mail, MapPin, Phone } from "lucide-react";

import { company, services } from "../site-data";

const quickLinks = [
  { label: "Company", href: "#company" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const whatsappLink =
    "https://wa.me/2347066619598?text=Hello%20Charismak%20Project%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.";

  return (
    <footer className="bg-[#151B22] text-white">
      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr]">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-[0.18em]">
              Charismak
            </h3>

            <p className="mt-4 text-sm font-medium text-[#C8A45D]">
              Project Nigeria Limited
            </p>

            <p className="mt-6 max-w-md leading-7 text-white/65">
              A modern Nigerian construction company delivering civil engineering,
              building construction, renovation, steel fabrication, project
              management, procurement, and finishing services.
            </p>

            <p className="mt-6 text-sm font-semibold text-white/45">
              {company.rcNumber}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/company-profile.pdf"
                className="inline-flex items-center gap-2 bg-[#8B1E00] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#C8A45D]"
              >
                Profile PDF <Download className="h-4 w-4" />
              </Link>

              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-[#C8A45D] hover:text-[#C8A45D]"
              >
                WhatsApp <Phone className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-[#C8A45D]">
              Quick Links
            </h4>

            <div className="mt-6 flex flex-col gap-3 text-sm text-white/65">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-[#C8A45D]">
              Services
            </h4>

            <div className="mt-6 flex flex-col gap-3 text-sm text-white/65">
              {services.slice(0, 6).map((service) => (
                <Link key={service.title} href="#services" className="transition hover:text-white">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-[#C8A45D]">
              Contact
            </h4>

            <div className="mt-6 space-y-5 text-sm text-white/65">
              <p className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#C8A45D]" />
                {company.email}
              </p>

              <p className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#C8A45D]" />
                {company.phones[0]}
              </p>

              <p className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-[#C8A45D]" />
                {company.addresses[0]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-6 text-sm text-white/45 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row">
          <p>
            © {new Date().getFullYear()} Charismak Project Nigeria Limited. All
            rights reserved.
          </p>

          <p>Construction • Engineering • Project Delivery</p>
        </div>
      </section>
    </footer>
  );
}
