/**
 * Project data — single source of truth for the projects grid and the
 * /projects/[slug] detail pages.
 *
 * Rules:
 * - Only genuine, verified information. Fields not yet provided stay null
 *   and are marked PLACEHOLDER — they must be replaced, never invented.
 * - `image` uses real local assets only; omit it when no genuine
 *   screenshot exists (the UI must handle a missing image gracefully).
 */

export interface Project {
  slug: string;
  name: string;
  /** Short one-liner used on the projects grid card. */
  summary?: string | null;
  /** Longer paragraph shown on the detail page. Falls back to summary. */
  description?: string | null;
  techStack: string[];
  image?: string | undefined;
  liveUrl?: string | null;
  repoUrl?: string | null;
  challenges?: string | null;
  futurePlans?: string | null;
  featured?: boolean;
}

export const projects: Project[] = [
  
  {
    slug: "mentorlagbe",
    name: "MentorLagbe",
    summary:
      "A full-stack tuition and mentorship platform with role-based dashboards, Better Auth authentication, and Stripe Pro upgrades.",
    description: null,
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "Stripe",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    image: "/images/mentorlagbe.png",
    liveUrl: "https://mentorlagbe-client-g8ov.vercel.app",
    repoUrl: "https://github.com/Asrafuz01/mentorlagbe-client",
    challenges: null,
    futurePlans: null,
    featured: true,
  },
  {
    slug: "fitlog",
    name: "FitLog",
    // Verified: live site, repo, package.json (next/react/daisyui/tailwindcss),
    // and the project API (https://api.abcz.workers.dev/api/fitlog) which returns exactly 12 workouts.
    summary: "A workout tracking application with 12 workouts.",
    description: null,
    techStack: ["Next.js", "Tailwind CSS", "daisyUI"],
    image: "/images/fitlog.png",
    liveUrl: "https://fit-log-lac.vercel.app",
    repoUrl: "https://github.com/Asrafuz01/fit-log",
    challenges: null, // not provided — do not invent
    futurePlans: null, // not provided — do not invent
    featured: true,
  },
  {
    slug: "movie-explorer",
    name: "Movie Explorer",
    summary: null, // original copy not verified — do not invent
    description: null, // original copy not verified — do not invent
    techStack: ["React", "TVMaze API"],
    image: "/images/movie.png",
    liveUrl: "https://movie-explorer-eight-beige.vercel.app",
    repoUrl: null, // a repo named `movie-explorer` exists on the profile — confirm before linking
    challenges: null, // original copy not verified — do not invent
    futurePlans: null, // original copy not verified — do not invent
    featured: true,
  },
  {
    slug: "devconf-2026",
    name: "DevConf 2026",
    // Verified against the original source: repo `My-first-Assignment-` README + index.html
    summary:
      "A responsive developer conference landing page built as my first web development assignment using HTML and CSS.",
    description:
      "DevConf 2026 is a modern conference landing page designed for developers, engineers, founders, and builders. The project focuses on creating a clean, responsive, and visually engaging user interface using semantic HTML and CSS.",
    techStack: ["HTML5", "CSS3", "Google Fonts", "Responsive Web Design"],
    image: "/images/dev.png",
    liveUrl: "https://asrafuz01.github.io/My-first-Assignment-/",
    repoUrl: "https://github.com/Asrafuz01/My-first-Assignment-",
    challenges: null, // not documented in the original source — do not invent
    futurePlans: null, // not documented in the original source — do not invent
    featured: true,
  },
];

/** All project slugs — used by generateStaticParams for /projects/[slug]. */
export function getProjectSlugs(): { slug: string }[] {
  return projects.map((project) => ({ slug: project.slug }));
}

/** Lookup by slug — returns undefined for unknown slugs (render not-found). */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
