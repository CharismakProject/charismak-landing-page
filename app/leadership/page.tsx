import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { people } from "../site-data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#C8A45D]">
      {children}
    </p>
  );
}

function PersonCard({ person }: { person: (typeof people)[number] }) {
  return (
    <article className="overflow-hidden bg-white shadow-[0_20px_70px_rgba(13,59,102,0.08)]">
      <div className="relative h-[360px] bg-[#F5F7FA]">
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover object-top"
        />
      </div>

      <div className="border-t-4 border-[#C8A45D] p-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#8B1E00]">
          {person.category}
        </p>

        <h3 className="text-2xl font-semibold text-[#0D3B66]">
          {person.name}
        </h3>

        <p className="mt-2 text-sm font-semibold text-[#3A4653]">
          {person.role}
        </p>

        <p className="mt-5 text-sm leading-7 text-[#3A4653]">{person.bio}</p>
      </div>
    </article>
  );
}

export default function LeadershipPage() {
  const board = people.filter((person) => person.group === "Board of Directors");
  const operations = people.filter(
    (person) => person.group === "Operational Leadership"
  );
  const delivery = people.filter(
    (person) => person.group === "Project Delivery Team"
  );

  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-24 text-[#151B22]">
      <section className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionLabel>Leadership</SectionLabel>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-7xl">
              Corporate governance and project delivery leadership.
            </h1>
          </div>

          <p className="text-lg leading-8 text-[#3A4653]">
            Charismak Project Nigeria Limited is guided by board-level direction,
            operational leadership, and field execution teams responsible for
            disciplined construction delivery, site coordination, and client-focused
            project performance.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Board of Directors</SectionLabel>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-6xl">
              Strategic oversight and corporate governance.
            </h2>

            <Link
              href="/vision"
              className="inline-flex items-center gap-2 font-bold text-[#8B1E00]"
            >
              Vision & Mission <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {board.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Operational Leadership</SectionLabel>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-6xl">
            Day-to-day leadership for project execution and coordination.
          </h2>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {operations.map((person) => (
              <article
                key={person.name}
                className="overflow-hidden bg-[#F5F7FA] shadow-[0_20px_70px_rgba(13,59,102,0.08)]"
              >
                <div className="grid md:grid-cols-[0.48fr_0.52fr]">
                  <div className="relative h-[440px] bg-white">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-8">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#8B1E00]">
                      {person.category}
                    </p>

                    <h3 className="text-3xl font-semibold text-[#0D3B66]">
                      {person.name}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#3A4653]">
                      {person.role}
                    </p>

                    <p className="mt-6 leading-8 text-[#3A4653]">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Project Delivery Team</SectionLabel>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-6xl">
              Field operations and technical execution support.
            </h2>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-bold text-[#8B1E00]"
            >
              View Projects <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {delivery.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}