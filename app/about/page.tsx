import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { company, projects, workflow } from "../site-data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#C8A45D]">
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-24 text-[#151B22]">
      <section className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionLabel>Company Profile</SectionLabel>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-7xl">
              A modern Nigerian construction company built on technical discipline.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#3A4653]">
              {company.about}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-3 bg-[#8B1E00] px-7 py-4 font-bold text-white transition hover:bg-[#C8A45D]"
              >
                View Projects <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/vision"
                className="inline-flex items-center justify-center gap-3 border border-[#0D3B66]/20 px-7 py-4 font-bold text-[#0D3B66] transition hover:border-[#C8A45D]"
              >
                Vision & Mission
              </Link>
            </div>
          </div>

          <div className="relative h-[560px] overflow-hidden bg-[#0D3B66]">
            <Image
              src="/Images/Projects/COCO GWARIMPA PROJECT (11).jpg"
              alt="Charismak construction project"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Who We Are</SectionLabel>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-6xl">
              We combine corporate structure with practical site execution.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#3A4653]">
              Charismak Project Nigeria Limited supports clients through the key
              stages of project planning, cost control, construction execution,
              supervision, finishing, and handover. Our work is guided by
              transparency, quality control, field discipline, and long-term
              value.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {company.values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3 bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#C8A45D]" />
                  <span className="font-semibold text-[#0D3B66]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="bg-[#F5F7FA] p-8 md:p-10">
            <SectionLabel>Vision</SectionLabel>

            <h3 className="text-3xl font-semibold text-[#0D3B66] md:text-4xl">
              Our Vision
            </h3>

            <p className="mt-6 text-lg leading-8 text-[#3A4653]">
              {company.vision}
            </p>
          </article>

          <article className="bg-[#0D3B66] p-8 text-white md:p-10">
            <SectionLabel>Mission</SectionLabel>

            <h3 className="text-3xl font-semibold md:text-4xl">
              Our Mission
            </h3>

            <p className="mt-6 text-lg leading-8 text-white/72">
              {company.mission}
            </p>
          </article>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Delivery Workflow</SectionLabel>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-6xl">
              From planning to handover, every stage is controlled.
            </h2>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold text-[#8B1E00]"
            >
              Explore Services <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item, index) => (
              <article key={item.title} className="bg-white p-7 shadow-sm">
                <p className="text-5xl font-semibold text-[#C8A45D]">
                  0{index + 1}
                </p>

                <h3 className="mt-8 text-xl font-semibold text-[#0D3B66]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#3A4653]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Project Experience</SectionLabel>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-6xl">
              Our project references demonstrate practical delivery capacity.
            </h2>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-bold text-[#8B1E00]"
            >
              View All Projects <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden bg-[#F5F7FA] shadow-sm"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#8B1E00]">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-semibold text-[#0D3B66]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#3A4653]">
                    {project.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}