import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "../site-data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#C8A45D]">
      {children}
    </p>
  );
}

const serviceDetails: Record<string, string[]> = {
  "Building Construction": [
    "Residential and commercial building development",
    "Foundation, blockwork, concrete, roofing, and finishing coordination",
    "Site supervision, construction sequencing, and quality checks",
  ],
  "Civil Engineering": [
    "Drainage, retaining structures, concrete works, and external works",
    "Infrastructure support for buildings and site development",
    "Technical coordination for durable civil construction outcomes",
  ],
  "Renovation & Interior Design": [
    "Interior transformation, remodeling, ceilings, lighting, and wall finishes",
    "Space improvement for residential, office, commercial, and hospitality use",
    "Modern finishing coordination with practical cost and quality control",
  ],
  "Project Management": [
    "Planning, budgeting, procurement coordination, and contractor supervision",
    "Site reporting, progress monitoring, quality control, and cost tracking",
    "Structured delivery from concept stage to final handover",
  ],
  "Steel Fabrication": [
    "Gates, railings, roofing frames, structural steel, and metal works",
    "Fabrication, installation, alignment, finishing, and site coordination",
    "Practical steel solutions for residential, commercial, and civil works",
  ],
  "Facility Maintenance": [
    "Preventive maintenance, repairs, inspections, and technical support",
    "Building upkeep for residential, commercial, and project facilities",
    "Long-term maintenance planning to protect asset value",
  ],
  "Architectural Finishing": [
    "Surface finishes, fittings, fixtures, ceiling details, and final presentation",
    "Premium handover-ready finishing for modern construction projects",
    "Attention to detail, alignment, material selection, and workmanship quality",
  ],
  "Residential Development": [
    "Private homes, estate units, block of flats, and residential upgrades",
    "Comfort-focused planning with durable construction delivery",
    "Site coordination from early works to final residential handover",
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-20 text-[#151B22]">
      <section className="bg-white px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Services</SectionLabel>

          <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-6xl">
            Complete construction services across the full project value chain.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#3A4653]">
            Charismak Project Nigeria Limited delivers construction, civil
            engineering, renovation, fabrication, finishing, facility support,
            and project management services with controlled execution and
            technical supervision.
          </p>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {services.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className="bg-white p-7 shadow-sm">
              <div className="flex items-start justify-between gap-6">
                <Icon className="h-9 w-9 text-[#8B1E00]" />

                <span className="text-4xl font-semibold text-[#C8A45D]/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h2 className="mt-7 text-2xl font-semibold text-[#0D3B66]">
                {title}
              </h2>

              <p className="mt-4 leading-8 text-[#3A4653]">{description}</p>

              <div className="mt-6 space-y-3">
                {(serviceDetails[title] ?? []).map((item) => (
                  <p
                    key={item}
                    className="border-l-2 border-[#C8A45D] pl-4 text-sm leading-7 text-[#3A4653]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Service Delivery Method</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              Every service is supported by planning, supervision, and clear delivery control.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#3A4653]">
              Our service delivery process begins with understanding the
              requirement, defining the scope, reviewing site conditions,
              planning materials and labour, coordinating execution, and checking
              the work before handover.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-[#8B1E00] px-6 py-4 font-bold text-white transition hover:bg-[#C8A45D]"
            >
              Request a Service Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}