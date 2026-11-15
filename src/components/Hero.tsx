import { FileText, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";import ProfilePicture from "./ProfilePicture";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Single subtle ambient glow — static, no animation */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-lime-400/5 blur-3xl"
      />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
              {site.role}
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              {site.name}
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Aspiring full-stack web developer focused on building real-world web
              applications. Currently learning Next.js and strengthening the
              fundamentals behind the modern web stack.
            </p>

            <p className="flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={16} aria-hidden />
              {site.location}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-surface text-slate-400 transition-colors hover:border-lime-400/40 hover:text-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400/70"
              >
                <FaGithub size={18} aria-hidden />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-surface text-slate-400 transition-colors hover:border-lime-400/40 hover:text-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400/70"
              >
                <FaLinkedinIn size={18} aria-hidden />
              </a>

              {site.resume.ready && site.resume.url ? (
                <a
                  href={site.resume.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Resume (opens Google Drive in a new tab)"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-surface px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-lime-400/40 hover:text-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400/70"
                >
                  <FileText size={15} aria-hidden />
                  View Resume
                </a>
              ) : (
                /* Honest fallback — no fake download link when no resume is available. */
                <span className="inline-flex items-center rounded-lg border border-dashed border-white/10 px-3 py-2 text-xs font-medium text-slate-500">
                  Resume — coming soon
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-2 rounded-[2rem] bg-lime-400/5 blur-xl"
              />
              <div className="relative">
                <ProfilePicture src={site.profileImage} name={site.name} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
