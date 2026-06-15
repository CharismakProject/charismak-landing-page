import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, PlayCircle } from "lucide-react";

import { projects } from "../site-data";

const categories = [
  "All",
  "Building Construction",
  "Civil Engineering",
  "Interior & Finishing Works",
  "Steel Fabrication",
  "Residential Construction",
  "Security Architecture",
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-24">
      <section className="relative overflow-hidden bg-[#0D3B66] py-28 text-white">
        <Image
          src="/Images/Projects/COCO GWARIMPA PROJECT (11).jpg"
          alt="Charismak project references"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B66] via-[#0D3B66]/92 to-[#0D3B66]/60" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#C8A45D]">
            Project References
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Selected construction, civil engineering, renovation, and project
            delivery works.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75">
            Explore Charismak Project Nigeria Limited’s portfolio of residential
            developments, civil engineering projects, renovation works, steel
            fabrication, premium finishing, and site delivery references.
          </p>
        </div>
      </section>

      <section className="border-b border-[#0D3B66]/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 py-7 md:px-8">
          {categories.map((category) => (
            <button
              key={category}
              className="border border-[#0D3B66]/10 bg-[#F5F7FA] px-5 py-3 text-sm font-semibold text-[#0D3B66] transition hover:border-[#C8A45D] hover:bg-white"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => {
              const heroVideo = project.videos?.[0];

              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group overflow-hidden bg-white shadow-[0_24px_90px_rgba(13,59,102,0.08)] transition hover:-translate-y-1"
                >
                  <div className="relative h-[460px] overflow-hidden bg-[#0D3B66]">
                    {heroVideo ? (
                      <video
                        src={heroVideo}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        sizes="(max-width:1024px) 100vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66]/92 via-[#0D3B66]/20 to-transparent" />

                    <div className="absolute left-0 top-0 m-6 flex items-center gap-3">
                      <span className="bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0D3B66]">
                        {project.category}
                      </span>

                      {heroVideo && (
                        <span className="inline-flex items-center gap-2 bg-[#8B1E00] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                          <PlayCircle className="h-4 w-4 text-[#C8A45D]" />
                          Video
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-0 p-8 text-white">
                      <h2 className="text-4xl font-semibold leading-tight">
                        {project.title}
                      </h2>

                      <div className="mt-4 flex items-center gap-2 text-sm text-white/75">
                        <MapPin className="h-4 w-4 text-[#C8A45D]" />
                        {project.location} · {project.status}
                      </div>

                      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75">
                        {project.summary}
                      </p>

                      <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#C8A45D]">
                        View Project
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 bg-[#F5F7FA] p-3">
                    {project.images.slice(0, 3).map((image, index) => (
                      <div key={image} className="relative h-28 overflow-hidden">
                        <Image
                          src={image}
                          alt={`${project.title} preview ${index + 1}`}
                          fill
                          sizes="33vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}