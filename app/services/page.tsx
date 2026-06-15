import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { company, services, workflow } from "../site-data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#C8A45D]">
      {children}
    </p>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-[#F5F7FA] pt-20">
      <section className="bg-[#0D3B66] px-5 py-24 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Our Services</SectionLabel>

          <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-7xl">
            Construction and project delivery services across the full value
            chain.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            {company.name} provides construction, renovation, fabrication,
            procurement, consultancy, finishing, and project management services
            for private, corporate, institutional, and development clients.
          </p>

          <div className="mt-8">
            <Link
              href="/company-profile.pdf"
              className="inline-flex items-center gap-3 bg-[#8B1E00] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#C8A45D]"
            >
              Download Company Profile <Download className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Service Areas</SectionLabel>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="border border-[#0D3B66]/10 bg-white p-7 transition hover:-translate-y-1 hover:border-[#C8A45D] hover:shadow-lg"
              >
                <Icon className="h-8 w-8 text-[#8B1E00]" />

                <h2 className="mt-6 text-xl font-bold text-[#0D3B66]">
                  {title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#3A4653]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Delivery Workflow</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              A structured process from planning to handover.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {workflow.map((item, index) => (
              <div
                key={item.title}
                className="border border-[#0D3B66]/10 bg-[#F5F7FA] p-6"
              >
                <p className="text-sm font-bold text-[#8B1E00]">
                  0{index + 1}
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#0D3B66]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#3A4653]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D3B66] px-5 py-20 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <SectionLabel>Project Enquiry</SectionLabel>

            <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
              Need a construction, renovation, fabrication, or project
              management partner?
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#8B1E00] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#C8A45D]"
          >
            Contact Charismak <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
