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
  PlayCircle,
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
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 6);

  const leadership = people.slice(0, 6);

  const projectDirector = people.find((person) =>
    person.name.includes("Abiodun Christopher Akinola")
  );

  const whatsappLink =
    "https://wa.me/2347066619598?text=Hello%20Charismak%20Project%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.";

  return (
    <main className="overflow-hidden bg-[#F5F7FA] pt-20">
      <section className="relative min-h-[86vh] bg-[#0D3B66] px-5 py-24 text-white md:px-8">
        <div className="absolute inset-0">
          <Image
            src={featuredProjects[0]?.cover || "/Images/Projects/Coco-Gwarimpa/1.jpg"}
            alt="Charismak Project Nigeria Limited"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B66] via-[#0D3B66]/90 to-[#0D3B66]/60" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <SectionLabel>{company.rcNumber} • Construction & Project Delivery</SectionLabel>

            <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-7xl">
              Building reliable projects through engineering excellence.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              {company.name} delivers building construction, civil engineering,
              renovation, steel fabrication, procurement, consultancy, and
              project management solutions with disciplined execution and
              technical control.
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
                className="inline-flex items-center gap-3 border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:border-[#C8A45D]"
              >
                View Projects <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-3 border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:border-[#C8A45D]"
              >
                WhatsApp Us <Phone className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A45D]">
              Client-First • Integrity • Transparency • Innovation
            </p>

            <p className="mt-5 text-base leading-8 text-white/80">
              A corporate construction partner focused on quality supervision,
              accountable delivery, cost awareness, project coordination, and
              long-term client value.
            </p>

            <div className="mt-6 grid gap-3">
              {company.values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3 border border-white/15 bg-white/10 p-4 text-sm font-semibold"
                >
                  <BadgeCheck className="h-5 w-5 text-[#C8A45D]" />
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#0D3B66]/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 md:grid-cols-4 md:px-8">
          {[
            [`${projects.length}+`, "Project References"],
            [`${services.length}`, "Service Divisions"],
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

      <section className="bg-[#F5F7FA] px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Corporate Profile</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              A modern Nigerian construction company built for disciplined project delivery.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#3A4653]">{company.about}</p>
            <p className="mt-5 text-base leading-8 text-[#3A4653]">
              {company.overview}
            </p>

            <div className="mt-8">
              <Link
                href="/company-profile.pdf"
                className="inline-flex items-center gap-3 bg-[#0D3B66] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#8B1E00]"
              >
                View / Download Full Profile <Download className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Vision & Mission</SectionLabel>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-[#0D3B66]/10 bg-[#F5F7FA] p-8">
              <Building2 className="h-8 w-8 text-[#8B1E00]" />
              <h3 className="mt-5 text-2xl font-bold text-[#0D3B66]">Our Vision</h3>
              <p className="mt-4 text-base leading-8 text-[#3A4653]">
                {company.vision}
              </p>
            </div>

            <div className="border border-[#0D3B66]/10 bg-[#F5F7FA] p-8">
              <ShieldCheck className="h-8 w-8 text-[#8B1E00]" />
              <h3 className="mt-5 text-2xl font-bold text-[#0D3B66]">Our Mission</h3>
              <p className="mt-4 text-base leading-8 text-[#3A4653]">
                {company.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D3B66] px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>What We Do</SectionLabel>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Services across the full construction value chain.
            </h2>

            <Link
              href="/company-profile.pdf"
              className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-sm font-bold text-white transition hover:border-[#C8A45D]"
            >
              Download Profile <Download className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="border border-white/10 bg-white/10 p-6 transition hover:-translate-y-1 hover:border-[#C8A45D] hover:bg-white hover:text-[#0D3B66]"
              >
                <Icon className="h-7 w-7 text-[#C8A45D]" />

                <h3 className="mt-6 text-lg font-semibold">{title}</h3>

                <p className="mt-3 text-sm leading-7 opacity-80">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Project Portfolio</SectionLabel>

          <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
            Selected references across construction, interiors, civil works,
            residential development, steel fabrication, and supervision.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="group overflow-hidden bg-[#F5F7FA] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-[260px] overflow-hidden bg-[#0D3B66]">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66]/90 via-[#0D3B66]/20 to-transparent" />

                  {project.videos.length > 0 && (
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-[#8B1E00] px-3 py-2 text-xs font-bold uppercase tracking-wide text-white">
                      <PlayCircle className="h-4 w-4 text-[#C8A45D]" />
                      Video
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C8A45D]">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold leading-tight text-[#0D3B66]">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#3A4653]">
                    {project.summary}
                  </p>

                  <div className="mt-5 grid gap-2 text-sm text-[#3A4653]">
                    <p>
                      <span className="font-bold text-[#0D3B66]">Location:</span>{" "}
                      {project.location}
                    </p>

                    <p>
                      <span className="font-bold text-[#0D3B66]">Status:</span>{" "}
                      {project.status}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>HSE, Quality & Delivery</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              Built around safety, quality, accountability, and cost control.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#3A4653]">
              Construction excellence depends on controlled materials,
              supervised teams, managed risks, documented processes, and
              systematic checks before handover.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {trustItems.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="border border-[#0D3B66]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="h-7 w-7 text-[#8B1E00]" />

                <h3 className="mt-6 text-lg font-semibold text-[#0D3B66]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#3A4653]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D3B66] px-5 py-24 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative h-[520px] overflow-hidden border border-white/15 bg-white/10">
            {projectDirector && (
              <Image
                src={projectDirector.image}
                alt={projectDirector.name}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain"
              />
            )}
          </div>

          <div>
            <SectionLabel>Project Director</SectionLabel>

            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              {projectDirector?.name}
            </h2>

            <p className="mt-3 text-lg font-semibold text-[#C8A45D]">
              Managing Director & Project Director
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
              Abiodun Christopher Akinola leads Charismak Project Nigeria Limited
              with a commitment to technical excellence, disciplined project
              delivery, transparent supervision, practical construction
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
                className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-sm font-semibold text-white transition hover:border-[#C8A45D]"
              >
                Chat on WhatsApp <Phone className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Leadership & Delivery Team</SectionLabel>

          <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
            A structured leadership team supporting governance, operations, and
            project delivery.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person) => (
              <article
                key={person.name}
                className="overflow-hidden border border-[#0D3B66]/10 bg-[#F5F7FA] transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-[320px] bg-white">
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

                  <h3 className="mt-3 text-xl font-bold text-[#0D3B66]">
                    {person.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#8B1E00]">
                    {person.role}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#3A4653]">
                    {person.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D3B66] px-5 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionLabel>Start a Project</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Ready to discuss your next construction, renovation, or project
              management brief?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              Contact Charismak Project Nigeria Limited for building works,
              civil works, fabrication, finishing, consultancy, procurement, and
              structured project delivery.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="border border-white/15 bg-white/10 p-6">
              <Phone className="h-6 w-6 text-[#C8A45D]" />
              <h3 className="mt-4 font-bold">Phone</h3>
              {company.phones.map((phone) => (
                <p key={phone} className="mt-2 text-sm text-white/75">
                  {phone}
                </p>
              ))}
            </div>

            <div className="border border-white/15 bg-white/10 p-6">
              <Mail className="h-6 w-6 text-[#C8A45D]" />
              <h3 className="mt-4 font-bold">Email</h3>
              <p className="mt-2 break-words text-sm text-white/75">
                {company.email}
              </p>
            </div>

            <div className="border border-white/15 bg-white/10 p-6">
              <MapPin className="h-6 w-6 text-[#C8A45D]" />
              <h3 className="mt-4 font-bold">Office Locations</h3>
              {company.addresses.map((address) => (
                <p key={address} className="mt-2 text-sm text-white/75">
                  {address}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
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
                Download Profile <Download className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
