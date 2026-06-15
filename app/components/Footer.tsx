import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { company, services } from "../site-data";

const companyLinks = [
  { label: "Company Profile", href: "/about" },
  { label: "Vision & Mission", href: "/vision" },
  { label: "Leadership", href: "/leadership" },
  { label: "HSE & Quality", href: "/hse" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D3B66] text-white">
      <section className="border-b border-white/10 px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.45fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#C8A45D]">
              Start a Project
            </p>

            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Let’s discuss your next construction requirement.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Contact Charismak Project Nigeria Limited for building construction,
              civil engineering, renovation, steel fabrication, project management,
              and finishing works.
            </p>
          </div>

          <div className="lg:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#8B1E00] px-8 py-4 font-bold text-white transition hover:bg-[#C8A45D]"
            >
              Request Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

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
              building construction, renovation, fabrication, project management,
              and architectural finishing services.
            </p>

            <p className="mt-6 text-sm font-semibold text-white/45">
              {company.rcNumber}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-[#C8A45D]">
              Company
            </h4>

            <div className="mt-6 flex flex-col gap-3 text-sm text-white/65">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-white"
                >
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
                <Link
                  key={service.title}
                  href="/services"
                  className="transition hover:text-white"
                >
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

          <p>Designed for construction, engineering, and project delivery.</p>
        </div>
      </section>
    </footer>
  );
}