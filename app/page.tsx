import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Phone,
  PlayCircle,
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
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 6);

  const projectDirector = people.find((person) =>
    person.name.includes("Abiodun Christopher Akinola")
  );

  return (
    <main className="overflow-hidden bg-[#F5F7FA] pt-20">
      <section className="bg-[#0D3B66] px-5 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionLabel>{company.rcNumber}</SectionLabel>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Professional construction, engineering & project management
              solutions.
            </h1>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-8 text-white/75">
              {company.name} delivers building construction, civil engineering,
              renovation, steel fabrication, architectural finishing,
              consultancy, and project management services with disciplined
              execution and technical control.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/company-profile.pdf"
                className="inline-flex items-center gap-3 bg-[#8B1E00] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#C8A45D]"
              >
                Download Company Profile <Download className="h-5 w-5" />
              </Link>

              <Link
                href="#projects"
                className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-sm font-semibold text-white transition hover:border-[#C8A45D]"
              >
                View Projects <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#0D3B66]/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 md:grid-cols-4 md:px-8">
          {[
            [`${projects.length}+`, "Project References"],
            [`${services.length}`, "Service Divisions"],
            ["10+", "Years Experience"],
            ["100%", "Client-Focused"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-3xl font-bold text-[#0D3B66]">{value}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#3A4653]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F7FA] px-5 py-14 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Corporate Profile</SectionLabel>

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

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {company.values.map((value) => (
                <div
                  key={value}
                  className="border border-[#0D3B66]/10 bg-white p-4 font-semibold text-[#0D3B66] shadow-sm"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Vision & Mission</SectionLabel>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-[#0D3B66]/10 bg-[#F5F7FA] p-8">
              <h3 className="text-2xl font-bold text-[#0D3B66]">
                Our Vision
              </h3>

              <p className="mt-4 text-base leading-8 text-[#3A4653]">
                {company.vision}
              </p>
            </div>

            <div className="border border-[#0D3B66]/10 bg-[#F5F7FA] p-8">
              <h3 className="text-2xl font-bold text-[#0D3B66]">
                Our Mission
              </h3>

              <p className="mt-4 text-base leading-8 text-[#3A4653]">
                {company.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Business Areas</SectionLabel>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              Services across the full construction value chain.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="border border-[#0D3B66]/10 bg-[#F5F7FA] p-6 transition hover:border-[#C8A45D] hover:bg-white hover:shadow-lg"
              >
                <Icon className="h-7 w-7 text-[#8B1E00]" />

                <h3 className="mt-6 text-lg font-semibold text-[#0D3B66]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#3A4653]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#F5F7FA] px-5 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Project References</SectionLabel>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              Selected works across construction, interiors, civil works,
              residential development, and project supervision.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="group overflow-hidden bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-[230px] overflow-hidden bg-[#0D3B66]">
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

                  <h3 className="text-2xl font-bold leading-tight text-[#0D3B66] group-hover:text-[#8B1E00]">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#3A4653]">
                    {project.summary}
                  </p>

                  <div className="mt-5 grid gap-2 text-sm text-[#3A4653]">
                    <p>
                      <span className="font-bold text-[#0D3B66]">
                        Location:
                      </span>{" "}
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

          <div className="mt-10">
            <Link
              href="/company-profile.pdf"
              className="inline-flex items-center gap-3 bg-[#8B1E00] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#C8A45D]"
            >
              Download Full Company Profile <Download className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>HSE, Quality & Delivery</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              Built around safety, quality, accountability, and cost control.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#3A4653]">
              Construction excellence is about how materials are controlled,
              teams are supervised, risks are managed, and every stage is
              checked before handover.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {trustItems.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="border border-[#0D3B66]/10 bg-[#F5F7FA] p-6 transition hover:bg-white hover:shadow-lg"
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

      <section className="bg-[#0D3B66] px-5 py-16 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative h-[420px] overflow-hidden bg-white/10">
            {projectDirector && (
              <Image
                src={projectDirector.image}
                alt={projectDirector.name}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
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
              At Charismak Project Nigeria Limited, we are committed to
              delivering construction and engineering projects with integrity,
              technical excellence, accountability, transparency, and disciplined
              project execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/company-profile.pdf"
                className="inline-flex items-center gap-3 bg-[#8B1E00] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#C8A45D]"
              >
                Download Profile <Download className="h-5 w-5" />
              </Link>

              <Link
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-sm font-semibold text-white transition hover:border-[#C8A45D]"
              >
                Contact Us <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Contact</SectionLabel>

          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
            Start your next project with Charismak Project Nigeria Limited.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="border border-[#0D3B66]/10 bg-[#F5F7FA] p-6">
              <Phone className="h-6 w-6 text-[#8B1E00]" />

              <h3 className="mt-4 font-bold text-[#0D3B66]">Phone</h3>

              {company.phones.map((phone) => (
                <p key={phone} className="mt-2 text-sm text-[#3A4653]">
                  {phone}
                </p>
              ))}
            </div>

            <div className="border border-[#0D3B66]/10 bg-[#F5F7FA] p-6">
              <Mail className="h-6 w-6 text-[#8B1E00]" />

              <h3 className="mt-4 font-bold text-[#0D3B66]">Email</h3>

              <p className="mt-2 break-words text-sm text-[#3A4653]">
                {company.email}
              </p>
            </div>

            <div className="border border-[#0D3B66]/10 bg-[#F5F7FA] p-6">
              <MapPin className="h-6 w-6 text-[#8B1E00]" />

              <h3 className="mt-4 font-bold text-[#0D3B66]">
                Office Locations
              </h3>

              {company.addresses.map((address) => (
                <p key={address} className="mt-2 text-sm text-[#3A4653]">
                  {address}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/company-profile.pdf"
              className="inline-flex items-center gap-3 bg-[#0D3B66] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#8B1E00]"
            >
              Download Company Profile <Download className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
