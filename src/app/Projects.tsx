"use client";

import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  id: string;
  name: string;
  image: string;
  techStack: string;
  description: string;
  liveLink: string;
  githubClient: string;
  challenges: string;
  futurePlans: string;
}

export default function Projects() {
  const [activeModal, setActiveModal] = useState<Project | null>(null);

  const projectsData: Project[] = [
    {
      id: "project-1",
      name: "E-Commerce Storefront Application",
      image: "https://unsplash.com",
      techStack: "Next.js, TypeScript, Tailwind CSS, Context API",
      description:
        "A highly responsive web application optimizing seamless customer checkouts, dynamic cart caching layer states, and immediate product grid catalog filtering queries natively.",
      liveLink: "https://example.com",
      githubClient: "https://github.com",
      challenges:
        "Synchronizing state mutations correctly across fast asynchronous active network operations generated infinite component rendering loops.",
      futurePlans:
        "Migrating the client side reactive states into global distributed database solutions like Redux Toolkit architecture configurations.",
    },
    {
      id: "project-2",
      name: "Kanban Task Management Engine",
      image: "https://unsplash.com",
      techStack: "React.js, Tailwind CSS, LocalStorage Hooks",
      description:
        "A functional drag-and-drop productivity dashboard system mapping tasks smoothly across custom swimlanes with historical persistent tracking.",
      liveLink: "https://example.com",
      githubClient: "https://github.com",
      challenges:
        "Handling precise viewport mouse coordinates correctly under strict touch gestures without breaking default responsive container alignments.",
      futurePlans:
        "Implementing complete backend dynamic collaborative socket servers to broadcast simultaneous user updates across dashboards.",
    },
    {
      id: "project-3",
      name: "Analytical Fitness & Health Tracker",
      image: "https://unsplash.com",
      techStack: "React.js, Chart.js Library, Tailwind CSS Layouts",
      description:
        "A clean dashboard application displaying interactive visual line-graphs of historical user workout logs against automated macro goals.",
      liveLink: "https://example.com",
      githubClient: "https://github.com",
      challenges:
        "Recalculating canvas boundaries smoothly during instant grid viewport alterations caused intermittent rendering glitches on mobile.",
      futurePlans:
        "Integrating dedicated smartphone device core sensor streams to continuously fetch automated running steps metrics natively.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 w-full overflow-hidden bg-slate-200 relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="text-lg font-bold text-slate-800 mb-4 line-clamp-1">
                  {project.name}
                </h3>
                <button
                  onClick={() => {
                    setActiveModal(project);
                    document.body.style.overflow = "hidden";
                  }}
                  className="w-full bg-slate-50 text-blue-950 hover:bg-blue-950 hover:text-white font-bold py-2.5 rounded-xl transition-all text-sm border border-slate-200/60 shadow-sm"
                >
                  View More / Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModal && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 relative border border-slate-100 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setActiveModal(null);
                document.body.style.overflow = "";
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-extrabold text-blue-950 pr-8 mb-1">
              {activeModal.name}
            </h3>
            <p className="text-xs font-bold text-sky-600 tracking-wider uppercase mb-5">
              {activeModal.techStack}
            </p>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>Description:</strong> {activeModal.description}
              </p>
              <div className="flex gap-3 py-1">
                <a
                  href={activeModal.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-blue-950 text-white font-bold px-4 py-2 rounded-xl text-xs hover:bg-sky-600 transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={activeModal.githubClient}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-slate-800 text-white font-bold px-4 py-2 rounded-xl text-xs hover:bg-slate-700 transition-colors"
                >
                  <Github size={14} />
                  <span>Client Repo</span>
                </a>
              </div>
              <div className="pt-2 border-t border-slate-100 space-y-3">
                <p>
                  🔥 <strong>Challenges Faced:</strong> {activeModal.challenges}
                </p>
                <p>
                  🚀 <strong>Potential Improvements & Future Plans:</strong>{" "}
                  {activeModal.futurePlans}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
