import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/lib/site";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills" />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-surface p-6"
            >
              <div className="flex items-center gap-3">
                <div aria-hidden className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-50">
                  {group.title}
                </h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-white/10 bg-ink/60 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
