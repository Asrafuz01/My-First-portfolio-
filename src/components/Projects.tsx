import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Projects" />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface"
            >
              {/* Real asset when available; neutral monogram band otherwise (no fake screenshots). */}
              {project.image ? (
                <div className="relative h-44 w-full border-b border-white/10">
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    fill
                    sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  aria-hidden
                  className="flex h-36 items-center justify-center border-b border-white/10 bg-ink/50"
                >
                  <span className="text-5xl font-bold tracking-tight text-lime-400/15">
                    {project.name.charAt(0)}
                  </span>
                </div>
              )}

              <div className="flex flex-grow flex-col p-6">
                <h3 className="text-lg font-bold tracking-tight text-slate-50">
                  {project.name}
                </h3>

                {project.summary && (
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {project.summary}
                  </p>
                )}

                {project.techStack.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-white/10 bg-ink/60 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime-400 transition-colors hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400/70"
                  >
                    View Details
                    <ArrowRight size={15} aria-hidden />
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400/70"
                    >
                      Live Demo
                      <ExternalLink size={14} aria-hidden />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
