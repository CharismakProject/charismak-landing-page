import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Download,
  Mail,
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
  const featuredProjects = projects.slice(0, 3);
  const featuredServices = services.slice(0, 6);
  const leadership = people.slice(0, 3);

  const whatsappLink =
    "https://wa.me/2347066619598?text=Hello%20Charismak%20Project%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.";

  return (
    <main className="overflow-hidden bg-[#F5F7FA] pt-20">
      <section className="relative min-h-[88vh] bg-[#0D3B66] px-5 py-24 text-white md:px-8">
        <div className="absolute inset-0">
          <Image
            src={featuredProjects[0]?.cover || "/Images/Projects/Coco-Gwarimpa/1.jpg"}
            alt="Charismak Project Nigeria Limited"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B66] via-[#0D3B66]/90 to-[#0D3B66]/50" />
        </div>

        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-center">
          <div className="max-w-4xl">
            <SectionLabel>{company.rcNumber}</SectionLabel>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-7xl">
              Building reliable projects through engineering excellence.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              {company.name} is a Nigerian construction company delivering
              building construction, civil engineering, renovation, fabrication,
              procurement, consultancy, and project management solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 bg-[#8B1E00] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#C8A45D]"
              >
                Explore Projects <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/company-profile.pdf"
                className="inline-flex items-center gap-3 border border-white/30 px-6 py-4 text-sm font-bold text-white transition hover:border-[#C8A45D]"
              >
                Download Profile <Download className="h-5 w-5" />
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
            ["Nigeria", "Operating Base"],
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
            <SectionLabel>About Charismak</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              A structured construction company focused on quality, discipline,
              and transparent delivery.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#3A4653]">
              {company.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-[#0D3B66] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#8B1E00]"
              >
                About the Company <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/company-profile.pdf"
                className="inline-flex items-center gap-3 border border-[#0D3B66]/20 px-6 py-4 text-sm font-bold text-[#0D3B66] transition hover:border-[#8B1E00] hover:text-[#8B1E00]"
              >
                Company Profile <Download className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Core Services</SectionLabel>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              Services across the full construction value chain.
            </h2>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold text-[#8B1E00]"
            >
              View All Services <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="border border-[#0D3B66]/10 bg-[#F5F7FA] p-7 transition hover:-translate-y-1 hover:border-[#C8A45D] hover:bg-white hover:shadow-lg"
              >
                <Icon className="h-8 w-8 text-[#8B1E00]" />

                <h3 className="mt-6 text-xl font-bold text-[#0D3B66]">
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

      <section id="projects" className="bg-[#F5F7FA] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Featured Projects</SectionLabel>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              Selected project references across construction, renovation,
              fabrication, and supervision.
            </h2>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-bold text-[#8B1E00]"
            >
              View Project Portfolio <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href="/projects"
                className="group overflow-hidden bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-[280px] overflow-hidden bg-[#0D3B66]">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66]/90 via-[#0D3B66]/20 to-transparent" />
                </div>

                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8A45D]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-[#0D3B66]">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#3A4653]">
                    {project.summary}
                  </p>

                  <p className="mt-5 text-sm font-bold text-[#8B1E00]">
                    {project.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionLabel>Quality Delivery</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              Built around safety, supervision, accountability, and cost
              control.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#3A4653]">
              Our delivery approach emphasizes clear coordination, quality
              checks, controlled procurement, project supervision, and proper
              documentation from planning to handover.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-3 bg-[#0D3B66] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#8B1E00]"
            >
              Explore Our Approach <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {trustItems.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="border border-[#0D3B66]/10 bg-[#F5F7FA] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
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

      <section className="bg-[#0D3B66] px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Leadership</SectionLabel>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Governance and project delivery leadership.
            </h2>

            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 font-bold text-[#C8A45D]"
            >
              View Leadership <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {leadership.map((person) => (
              <article
                key={person.name}
                className="overflow-hidden border border-white/15 bg-white/10"
              >
                <div className="relative h-[330px] bg-white/5">
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionLabel>Work With Us</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              Start your next construction, renovation, or project management
              brief with Charismak.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#3A4653]">
              Speak with our team for building works, civil works, finishing,
              fabrication, procurement, consultancy, and structured project
              delivery.
            </p>
          </div>

          <div className="border border-[#0D3B66]/10 bg-[#F5F7FA] p-8">
            <div className="grid gap-5">
              <div>
                <Phone className="h-6 w-6 text-[#8B1E00]" />
                <h3 className="mt-4 font-bold text-[#0D3B66]">Phone</h3>
                {company.phones.map((phone) => (
                  <p key={phone} className="mt-2 text-sm text-[#3A4653]">
                    {phone}
                  </p>
                ))}
              </div>

              <div>
                <Mail className="h-6 w-6 text-[#8B1E00]" />
                <h3 className="mt-4 font-bold text-[#0D3B66]">Email</h3>
                <p className="mt-2 break-words text-sm text-[#3A4653]">
                  {company.email}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-3">
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-[#8B1E00] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#C8A45D]"
                >
                  WhatsApp Us <Phone className="h-5 w-5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-[#0D3B66]/20 px-6 py-4 text-sm font-bold text-[#0D3B66] transition hover:border-[#8B1E00] hover:text-[#8B1E00]"
                >
                  Contact Page <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/company-profile.pdf"
                  className="inline-flex items-center gap-3 border border-[#0D3B66]/20 px-6 py-4 text-sm font-bold text-[#0D3B66] transition hover:border-[#8B1E00] hover:text-[#8B1E00]"
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
