/**
 * Single source of truth for personal information, links and skills.
 * Values marked `PLACEHOLDER` are NOT verified — replace before deployment.
 * Do not invent data here.
 */

export const site = {
  name: "Md Asrafuz Zaman",
  role: "Full Stack Developer",
  location: "Dhaka, Bangladesh",
  description:
    "Portfolio of Md Asrafuz Zaman, a Full Stack Developer based in Dhaka, Bangladesh, building responsive web applications with modern technologies.",
  profileImage: "/images/profile.png",
  resume: {
    // Google Drive link — opens the Drive preview in a new tab, not a direct download.
    url: "https://drive.google.com/file/d/1rgjHh5-rcFvqXeHwFRexgiEAWaVEvdtz/view?usp=drive_link",
    ready: true,
  },
  socials: {
    github: "https://github.com/Asrafuz01",
    linkedin: "https://www.linkedin.com/in/md-asrafuz-zaman/",
  },
  contact: {
    // Verified contact channels only — nothing fake is displayed.
    email: null as string | null, // PLACEHOLDER — not yet provided
    phone: null as string | null, // PLACEHOLDER — not yet provided
    whatsapp: null as string | null, // PLACEHOLDER — not yet provided
  },
} as const;

/**
 * Categorized skills — names only, no proficiency levels.
 * Only technologies with concrete evidence are listed: the public GitHub
 * repos (fit-log, movie-explorer, My-first-Assignment-, B8A1), the live
 * deployments, and this portfolio itself. Nothing claimed without evidence.
 */
export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js (App Router)",
      "Tailwind CSS",
      "daisyUI",
      "Flexbox & CSS Grid",
      "Responsive Web Design",
    ],
  },
  {
    title: "APIs & Data",
    skills: ["REST API Integration"],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub"],
  },
];

/** Education — verified entries only. Missing fields stay null. */
export interface EducationItem {
  title: string;
  institution: string | null; // PLACEHOLDER — not yet provided
  year: string | null;
  note: string | null;
}

export const education: EducationItem[] = [
  {
    title: "Diploma in Computer Science & Technology",
    institution: null,
    year: null,
    note: null,
  },
  {
    title: "HSC (Science)",
    institution: null,
    year: "2024",
    note: null,
  },
];

/** Experience — intentionally empty until genuine information is provided. */
export const experience: {
  role: string;
  organization: string;
  period: string;
  points: string[];
}[] = [];
