"use client";

export default function Error({ error, reset }) {
  return (
    <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-primary-500/10 blur-3xl" />

      {/* Card */}
      <div className="relative max-w-xl rounded-3xl border border-primary-800 bg-primary-900/60 backdrop-blur-xl p-10 text-center shadow-2xl">
        {/* Error Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-accent-500/30 bg-accent-500/10">
          <span className="text-4xl text-accent-500">⚠</span>
        </div>

        <h1 className="mb-3 text-4xl font-semibold text-accent-500">
          Something went wrong
        </h1>

        <p className="mb-8 text-lg text-primary-100">
          We couldn&apos;t complete your request right now. Please try again in
          a moment.
        </p>

        {process.env.NODE_ENV === "development" && (
          <p className="mb-8 rounded-lg bg-primary-950 p-4 text-left text-sm text-primary-200">
            {error.message}
          </p>
        )}

        <button
          onClick={reset}
          className="group inline-flex items-center gap-2 rounded-xl bg-accent-500 px-8 py-4 text-lg font-medium text-primary-950 transition-all duration-300 hover:bg-accent-600 hover:shadow-[0_0_30px_rgba(198,153,99,0.35)]">
          Try Again
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </main>
  );
}
