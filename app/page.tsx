import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

import { company, projects, services, trustItems } from "./site-data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#C8A45D]">
      {children}
    </p>
  );
}

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 6);

  return (
    <main className="overflow-hidden bg-[#F5F7FA] pt-20">
      <section className="bg-[#0D3B66] px-5 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionLabel>{company.tagline}</SectionLabel>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Engineering reliable projects through construction excellence.
            </h1>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-8 text-white/75">
              {company.name} delivers building construction, civil engineering,
              renovation, fabrication, project management, and architectural
              finishing with disciplined execution and technical control.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 bg-[#8B1E00] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#C8A45D]"
              >
                View Projects <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center border border-white/25 px-6 py-4 text-sm font-semibold text-white transition hover:border-[#C8A45D]"
              >
                Company Profile
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
              A modern construction company built for disciplined project delivery.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#3A4653]">{company.about}</p>

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

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 font-bold text-[#8B1E00]"
            >
              Learn more <ArrowRight className="h-5 w-5" />
            </Link>
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

            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold text-[#8B1E00]"
            >
              All Services <ArrowRight className="h-5 w-5" />
            </Link>
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

      <section className="bg-[#F5F7FA] px-5 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Project References</SectionLabel>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              Selected works across construction, interiors, civil works, and
              residential development.
            </h2>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-bold text-[#8B1E00]"
            >
              Explore All Projects <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
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

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#8B1E00]">
                    View Project <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
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
              teams are supervised, risks are managed, and every stage is checked
              before handover.
            </p>

            <Link
              href="/hse"
              className="mt-6 inline-flex items-center gap-2 font-bold text-[#8B1E00]"
            >
              View HSE & Quality <ArrowRight className="h-5 w-5" />
            </Link>
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
    </main>
  );
}