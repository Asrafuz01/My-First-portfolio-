import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-5 px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
        404
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
        Page not found
      </h1>
      <p className="max-w-md leading-relaxed text-slate-400">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-lime-400 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400/70"
      >
        Back to home
      </Link>
    </main>
  );
}
