import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import {
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/projects";

export async function generateStaticParams() {
  return getProjectSlugs();
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const metadata: Metadata = { title: project.name };
  const description = project.summary ?? project.description;
  if (description) metadata.description = description;
  return metadata;
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const overview = project.description ?? project.summary;

  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400/70"
      >
        <ArrowLeft size={15} aria-hidden />
        All projects
      </Link>

      <header className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
          Project
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          {project.name}
        </h1>
      </header>

      {project.image && (
        <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl border border-white/10 sm:h-80">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      {project.techStack.length > 0 && (
        <section aria-label="Technologies used" className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Technologies
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-white/10 bg-surface px-3 py-1.5 text-sm text-slate-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      )}

      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400/70"
            >
              Live Demo
              <ExternalLink size={15} aria-hidden />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-surface px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400/70"
            >
              <FaGithub size={15} aria-hidden />
              GitHub Repository
            </a>
          )}
        </div>
      )}

      {overview && (
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-slate-50">Overview</h2>
          <p className="mt-3 leading-relaxed text-slate-400">{overview}</p>
        </section>
      )}

      {project.challenges && (
        <section className="mt-10 rounded-2xl border border-white/10 bg-surface p-6">
          <h2 className="text-lg font-semibold text-slate-50">Challenges Faced</h2>
          <p className="mt-3 leading-relaxed text-slate-400">{project.challenges}</p>
        </section>
      )}

      {project.futurePlans && (
        <section className="mt-6 rounded-2xl border border-white/10 bg-surface p-6">
          <h2 className="text-lg font-semibold text-slate-50">Future Improvements</h2>
          <p className="mt-3 leading-relaxed text-slate-400">{project.futurePlans}</p>
        </section>
      )}
    </article>
  );
}
