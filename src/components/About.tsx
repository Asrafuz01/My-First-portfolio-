import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About" />

        <div className="mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-slate-400">
          <p>
            My journey into programming started with curiosity about how the
            websites and apps I use every day actually work. That curiosity grew
            into a serious pursuit: after completing my HSC (Science) in 2024, I
            chose to study Computer Science &amp; Technology formally, and I have
            been learning web development step by step ever since.
          </p>
          <p>
            What I enjoy most is building web applications — starting from
            clean, responsive interfaces and working toward complete full-stack
            products. My current focus is Next.js and the fundamentals behind
            it, including React, TypeScript, and modern CSS, which I practice by
            building real projects and publishing them on GitHub.
          </p>
          <p>
            I am at the beginning of my development journey, and I treat that as
            an advantage: every project teaches me something new, and I share my
            progress openly as I grow toward becoming a dependable full-stack
            developer.
          </p>
        </div>
      </div>
    </section>
  );
}
