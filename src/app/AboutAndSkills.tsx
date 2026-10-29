"use client";

import { Code2, Server, Wrench } from "lucide-react";

interface SkillItem {
  name: string;
  level: string;
}

export default function AboutAndSkills() {
  const frontendSkills: SkillItem[] = [
    { name: "HTML5 / CSS3 / JavaScript (ES6+)", level: "90%" },
    { name: "React.js / Next.js (App Router)", level: "85%" },
    { name: "TypeScript", level: "80%" },
    { name: "Tailwind CSS", level: "90%" },
  ];

  const backendSkills: SkillItem[] = [
    { name: "Node.js / Express.js", level: "75%" },
    { name: "MongoDB / Mongoose / SQL", level: "70%" },
    { name: "RESTful APIs Architecture", level: "80%" },
  ];

  const developerTools: SkillItem[] = [
    { name: "Git & GitHub Version Control", level: "85%" },
    { name: "VS Code Editor & Extensions", level: "95%" },
    { name: "Postman & API Client Testing", level: "85%" },
  ];

  return (
    <section id="about" className="py-24 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight sm:text-4xl">
                About Me
              </h2>
              <div className="w-12 h-1 bg-sky-500 mt-3 rounded-full"></div>
            </div>
            <div className="space-y-5 text-slate-600 leading-relaxed text-base">
              <p>
                🙋‍♂️ <strong>My Journey:</strong> My programming journey started
                out of pure curiosity during my college days. Writing my first{" "}
                <code>HTML</code> tag and seeing it live on a web browser felt
                like discovering a superpower. From that moment, I fell in love
                with turning logical problem-solving into real-world, functional
                web architectures.
              </p>
              <p>
                💻 <strong>The Work I Enjoy:</strong> I thoroughly enjoy
                crafting highly dynamic client-side layouts and optimizing
                server-side payload handling. Bridging the precise requirements
                of UI/UX designs with robust, clean backend infrastructure is
                what excites me the most as a developer.
              </p>
              <p>
                🎨 <strong>Beyond Coding:</strong> When my fingers are away from
                the keyboard, you will usually find me playing competitive
                football on weekends to stay active, or doing portrait charcoal
                sketching to balance out my rigorous analytical focus.
              </p>
            </div>
          </div>

          <div id="skills" className="space-y-6 scroll-mt-24">
            <div>
              <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight sm:text-4xl">
                Technical Skills
              </h2>
              <div className="w-12 h-1 bg-sky-500 mt-3 rounded-full"></div>
            </div>
            <div className="space-y-5 pt-2">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-md font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Code2 size={18} className="text-sky-500" />{" "}
                  <span>Frontend Engineering</span>
                </h3>
                <div className="space-y-3.5">
                  {frontendSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700">
                        <span>{skill.name}</span>
                        <span className="text-sky-600 font-bold">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-sky-500 h-full rounded-full"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-md font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Server size={18} className="text-blue-900" />{" "}
                  <span>Backend & Databases</span>
                </h3>
                <div className="space-y-3.5">
                  {backendSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700">
                        <span>{skill.name}</span>
                        <span className="text-blue-900 font-bold">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-blue-900 h-full rounded-full"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-md font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Wrench size={16} className="text-emerald-500" />{" "}
                  <span>Dev Tools & Environment</span>
                </h3>
                <div className="space-y-3.5">
                  {developerTools.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700">
                        <span>{skill.name}</span>
                        <span className="text-emerald-600 font-bold">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-emerald-500 h-full rounded-full"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
