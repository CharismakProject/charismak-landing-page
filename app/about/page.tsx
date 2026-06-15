import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Download,
  ShieldCheck,
} from "lucide-react";

import { company } from "../site-data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#C8A45D]">
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-[#F5F7FA] pt-20">
      <section className="bg-[#0D3B66] px-5 py-24 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>{company.rcNumber}</SectionLabel>

          <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-7xl">
            About Charismak Project Nigeria Limited
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            A registered Nigerian construction company delivering professional
            construction, engineering, renovation, fabrication, consultancy, and
            project management services.
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Who We Are</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              Built on discipline, transparency, technical control, and client
              value.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#3A4653]">
              {company.about}
            </p>

            <p className="mt-5 text-base leading-8 text-[#3A4653]">
              {company.overview}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
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

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Core Values</SectionLabel>

          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
            The principles guiding every Charismak project.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {company.values.map((value) => (
              <div
                key={value}
                className="flex items-center gap-3 border border-[#0D3B66]/10 bg-white p-5 font-bold text-[#0D3B66] shadow-sm"
              >
                <BadgeCheck className="h-5 w-5 text-[#8B1E00]" />
                {value}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 bg-[#0D3B66] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#8B1E00]"
            >
              View Our Services <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
