import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { company, workflow } from "../site-data";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] px-5 py-28 text-[#151B22] md:px-8">
      <section className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#C8A45D]">
          Vision & Mission
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-[#0D3B66] md:text-7xl">
          Building a legacy of trust, technical excellence, and disciplined delivery.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[#3A4653]">
          Charismak Project Nigeria Limited is guided by clear corporate values,
          practical construction discipline, and a commitment to delivering
          projects that stand as evidence of quality and professionalism.
        </p>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-6 lg:grid-cols-2">
        <article className="bg-white p-8 shadow-sm md:p-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#C8A45D]">
            Vision Statement
          </p>
          <h2 className="text-3xl font-semibold text-[#0D3B66] md:text-4xl">
            Our Vision
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#3A4653]">
            {company.vision}
          </p>
        </article>

        <article className="bg-white p-8 shadow-sm md:p-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#C8A45D]">
            Mission Statement
          </p>
          <h2 className="text-3xl font-semibold text-[#0D3B66] md:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#3A4653]">
            {company.mission}
          </p>
        </article>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#C8A45D]">
          Core Values
        </p>

        <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#0D3B66] md:text-6xl">
          Principles that guide every project decision.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {company.values.map((value) => (
            <article key={value} className="bg-white p-6 shadow-sm">
              <CheckCircle2 className="h-7 w-7 text-[#C8A45D]" />
              <h3 className="mt-6 text-xl font-semibold text-[#0D3B66]">
                {value}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#C8A45D]">
          Delivery Philosophy
        </p>

        <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#0D3B66] md:text-6xl">
          From planning to handover, every stage is controlled.
        </h2>

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

        <Link
          href="/contact"
          className="mt-12 inline-flex items-center gap-3 bg-[#8B1E00] px-7 py-4 font-bold text-white transition hover:bg-[#C8A45D]"
        >
          Start a Project Conversation <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    </main>
  );
}