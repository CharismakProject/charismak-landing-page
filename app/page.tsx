import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Download,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { company, people, projects, services, trustItems } from "./site-data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#C8A45D]">
      {children}
    </p>
  );
}

export default function HomePage() {
  const featuredProjects = projects.slice(0, 6);

  const leadership = people
    .filter((person) =>
      [
        "Abiodun Christopher Akinola",
        "Seyi Fituyi",
        "Adetiloye O. Adesida",
        "Akinola Toyin",
      ].some((name) => person.name.includes(name))
    )
    .map((person) => {
      if (person.name.includes("Abiodun Christopher Akinola")) {
        return {
          ...person,
          role: "Executive Director / General Project Director — North",
        };
      }

      if (person.name.includes("Seyi Fituyi")) {
        return {
          ...person,
          role: "Non-Executive Director / Project Director — South",
        };
      }

      if (person.name.includes("Adetiloye O. Adesida")) {
        return {
          ...person,
          role: "Non-Executive Director",
        };
      }

      if (person.name.includes("Akinola Toyin")) {
        return {
          ...person,
          role: "Company Secretary",
        };
      }

      return person;
    });

  const projectDirector = leadership.find((person) =>
    person.name.includes("Abiodun Christopher Akinola")
  );

  const otherLeadership = leadership.filter(
    (person) => !person.name.includes("Abiodun Christopher Akinola")
  );

  const whatsappLink =
    "https://wa.me/2347066619598?text=Hello%20Charismak%20Project%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.";

  return (
    <main className="overflow-hidden bg-[#F5F7FA] pt-20">
      <section
        id="home"
        className="relative min-h-[88vh] bg-[#0D3B66] px-5 py-24 text-white md:px-8"
      >
        <div className="absolute inset-0">
          <Image
            src={
              featuredProjects[0]?.cover || "/Images/Projects/Coco-Gwarimpa/1.jpg"
            }
            alt="Charismak Project Nigeria Limited"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B66] via-[#0D3B66]/90 to-[#0D3B66]/55" />
        </div>

        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-center">
          <div className="max-w-5xl">
            <SectionLabel>
              {company.rcNumber} • Digital Company Profile
            </SectionLabel>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-7xl">
              Building value through construction excellence.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              {company.name} delivers construction, engineering, renovation,
              steel fabrication, project management, procurement, and
              infrastructure solutions across Nigeria with a commitment to
              quality, accountability, and professional execution.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/company-profile.pdf"
                className="inline-flex items-center gap-3 bg-[#8B1E00] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#C8A45D]"
              >
                Download Company Profile <Download className="h-5 w-5" />
              </Link>

              <Link
                href="#projects"
                className="inline-flex items-center gap-3 border border-white/30 px-6 py-4 text-sm font-bold text-white transition hover:border-[#C8A45D]"
              >
                View Projects <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-3 border border-white/30 px-6 py-4 text-sm font-bold text-white transition hover:border-[#C8A45D]"
              >
                WhatsApp Us <Phone className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#0D3B66]/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 md:grid-cols-4 md:px-8">
          {[
            [`${projects.length}+`, "Project References"],
            [`${services.length}`, "Service Areas"],
            ["RC 1982890", "Registered Company"],
            ["PDF", "Downloadable Profile"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-2xl font-black text-[#0D3B66] md:text-3xl">
                {value}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#3A4653]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="company" className="bg-[#F5F7FA] px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Company</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              A modern Nigerian construction company built for disciplined
              project delivery.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#3A4653]">
              {company.about}
            </p>
            <p className="mt-5 text-base leading-8 text-[#3A4653]">
              {company.overview}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {company.values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3 border border-[#0D3B66]/10 bg-white p-4 font-bold text-[#0D3B66] shadow-sm"
                >
                  <BadgeCheck className="h-5 w-5 text-[#8B1E00]" />
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Vision & Mission</SectionLabel>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-[#0D3B66]/10 bg-[#F5F7FA] p-8">
              <Building2 className="h-8 w-8 text-[#8B1E00]" />
              <h3 className="mt-5 text-2xl font-bold text-[#0D3B66]">
                Our Vision
              </h3>
              <p className="mt-4 text-base leading-8 text-[#3A4653]">
                {company.vision}
              </p>
            </div>

            <div className="border border-[#0D3B66]/10 bg-[#F5F7FA] p-8">
              <ShieldCheck className="h-8 w-8 text-[#8B1E00]" />
              <h3 className="mt-5 text-2xl font-bold text-[#0D3B66]">
                Our Mission
              </h3>
              <p className="mt-4 text-base leading-8 text-[#3A4653]">
                {company.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#0D3B66] px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Services</SectionLabel>

          <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Services across the full construction value chain.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="border border-white/10 bg-white/10 p-6 transition hover:-translate-y-1 hover:border-[#C8A45D] hover:bg-white hover:text-[#0D3B66]"
              >
                <Icon className="h-7 w-7 text-[#C8A45D]" />
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 opacity-80">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Projects</SectionLabel>

          <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
            Selected project references across construction, interiors, civil
            works, steel fabrication, and supervision.
          </h2>

          <div className="mt-10 grid gap-8">
            {featuredProjects.map((project, index) => (
              <article
                key={project.slug}
                className="grid overflow-hidden bg-[#F5F7FA] shadow-sm transition hover:shadow-xl lg:grid-cols-[0.95fr_1.05fr]"
              >
                <div
                  className={`relative min-h-[340px] bg-[#0D3B66] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66]/70 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 bg-[#8B1E00] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
                    {project.status}
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8A45D]">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold leading-tight text-[#0D3B66]">
                    {project.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#8B1E00]">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>

                  <p className="mt-5 text-base leading-8 text-[#3A4653]">
                    {project.summary}
                  </p>

                  <div className="mt-6">
                    <h4 className="font-bold text-[#0D3B66]">Scope / Services</h4>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="bg-white px-3 py-2 text-xs font-bold uppercase tracking-wide text-[#3A4653]"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/company-profile.pdf"
              className="inline-flex items-center gap-3 bg-[#8B1E00] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#C8A45D]"
            >
              View Full Project Profile <Download className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section id="quality" className="bg-[#F5F7FA] px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Quality Delivery</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              Built around safety, supervision, accountability, and cost control.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#3A4653]">
              Our delivery approach emphasizes clear coordination, quality checks,
              controlled procurement, project supervision, and proper
              documentation from planning to handover.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {trustItems.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="border border-[#0D3B66]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="h-7 w-7 text-[#8B1E00]" />
                <h3 className="mt-6 text-lg font-bold text-[#0D3B66]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#3A4653]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-[#0D3B66] px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Leadership</SectionLabel>

          <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Governance, corporate support, and project delivery leadership.
          </h2>

          {projectDirector && (
            <div className="mt-10 grid overflow-hidden border border-white/15 bg-white/10 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-[480px] bg-white/5">
                <Image
                  src={projectDirector.image}
                  alt={projectDirector.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain"
                />
              </div>

              <div className="p-8 lg:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8A45D]">
                  Executive Leadership
                </p>

                <h3 className="mt-4 text-3xl font-bold md:text-5xl">
                  {projectDirector.name}
                </h3>

                <p className="mt-3 text-lg font-semibold text-[#C8A45D]">
                  {projectDirector.role}
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                  Abiodun Christopher Akinola leads Charismak Project Nigeria
                  Limited with a commitment to technical excellence, disciplined
                  project delivery, transparent supervision, practical construction
                  management, and sustainable infrastructure development.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/company-profile.pdf"
                    className="inline-flex items-center gap-3 bg-[#8B1E00] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#C8A45D]"
                  >
                    Download Profile <Download className="h-5 w-5" />
                  </Link>

                  <Link
                    href={whatsappLink}
                    target="_blank"
                    className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-sm font-bold text-white transition hover:border-[#C8A45D]"
                  >
                    Chat on WhatsApp <Phone className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {otherLeadership.map((person) => (
              <article
                key={person.name}
                className="overflow-hidden border border-white/15 bg-white/10"
              >
                <div className="relative h-[300px] bg-white/5">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8A45D]">
                    {person.category}
                  </p>
                  <h3 className="mt-3 text-xl font-bold">{person.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-white/70">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {person.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0D3B66] px-5 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionLabel>Contact</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Let’s discuss your next construction requirement.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              Contact Charismak Project Nigeria Limited for building construction,
              civil engineering, renovation, steel fabrication, project
              management, and finishing works.
            </p>
          </div>

          <div className="border border-white/15 bg-white/10 p-8">
            <div className="grid gap-6">
              <div>
                <Phone className="h-6 w-6 text-[#C8A45D]" />
                <h3 className="mt-4 font-bold">Phone</h3>
                {company.phones.map((phone) => (
                  <p key={phone} className="mt-2 text-sm text-white/75">
                    {phone}
                  </p>
                ))}
              </div>

              <div>
                <Mail className="h-6 w-6 text-[#C8A45D]" />
                <h3 className="mt-4 font-bold">Email</h3>
                <p className="mt-2 break-words text-sm text-white/75">
                  {company.email}
                </p>
              </div>

              <div>
                <MapPin className="h-6 w-6 text-[#C8A45D]" />
                <h3 className="mt-4 font-bold">Office Locations</h3>
                {company.addresses.map((address) => (
                  <p key={address} className="mt-2 text-sm text-white/75">
                    {address}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-[#8B1E00] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#C8A45D]"
                >
                  WhatsApp Us <Phone className="h-5 w-5" />
                </Link>

                <Link
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-sm font-bold text-white transition hover:border-[#C8A45D]"
                >
                  Send Email <Mail className="h-5 w-5" />
                </Link>

                <Link
                  href="/company-profile.pdf"
                  className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-sm font-bold text-white transition hover:border-[#C8A45D]"
                >
                  Profile PDF <Download className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
