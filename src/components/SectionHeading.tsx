interface SectionHeadingProps {
  title: string;
  align?: "left" | "center";
}

/** Shared section heading with the lime underline accent. */
export default function SectionHeading({ title, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : undefined}>
      <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">{title}</h2>
      <div
        aria-hidden
        className={`mt-3 h-1 w-12 rounded-full bg-lime-400 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
