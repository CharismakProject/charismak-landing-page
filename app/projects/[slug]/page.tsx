import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  PlayCircle,
} from "lucide-react";

import ProjectMediaGallery from "../../components/ProjectMediaGallery";
import { projects } from "../../site-data";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const heroVideo = project.videos[0];

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-20">
      <section className="relative h-[72vh] overflow-hidden bg-black text-white">
        {heroVideo ? (
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full bg-black object-contain"
          />
        ) : (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66]/95 via-[#0D3B66]/45 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-12 md:px-8">
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-[#C8A45D]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#C8A45D]">
            {project.category}
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {project.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-6 text-sm text-white/75">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#C8A45D]" />
              {project.location}
            </div>

            <div>{project.status}</div>

            {heroVideo && (
              <div className="flex items-center gap-2">
                <PlayCircle className="h-4 w-4 text-[#C8A45D]" />
                Video available
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#C8A45D]">
              Project Overview
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
              Controlled construction execution with premium project delivery.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#3A4653]">
              {project.summary}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 border border-[#0D3B66]/10 bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#C8A45D]" />

                  <span className="font-semibold text-[#0D3B66]">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#C8A45D]">
                Project Media
              </p>

              <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
                Images, videos, site progress, and delivery documentation.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#3A4653]">
              Click any media item to view it fullscreen. Videos retain their
              original portrait or landscape orientation.
            </p>
          </div>

          <ProjectMediaGallery
            title={project.title}
            images={project.images}
            videos={project.videos}
          />
        </div>
      </section>

      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#C8A45D]">
                More Projects
              </p>

              <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-[#0D3B66] md:text-5xl">
                Additional construction references.
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-bold text-[#8B1E00]"
            >
              All Projects <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {relatedProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group overflow-hidden bg-white shadow-[0_20px_60px_rgba(13,59,102,0.08)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    sizes="33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66]/88 via-transparent to-transparent" />

                  <div className="absolute bottom-0 p-5 text-white">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>

                    <p className="mt-2 text-sm text-white/70">
                      {item.location}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}