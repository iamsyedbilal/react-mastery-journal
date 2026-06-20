import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary-950 px-6">
      {/* Ambient glow background */}
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />

      {/* Card */}
      <div className="relative w-full max-w-xl rounded-3xl border border-primary-800 bg-primary-900/40 backdrop-blur-xl p-10 text-center shadow-2xl">
        {/* 404 */}
        <h1 className="text-7xl sm:text-8xl font-light text-accent-500 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary-50 mb-4">
          Lost in the mountains?
        </h2>

        {/* Message */}
        <p className="text-primary-200 text-base sm:text-lg mb-8 leading-relaxed">
          The cabin you are looking for cannot be found.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="rounded-xl bg-accent-500 px-6 py-4 font-semibold text-primary-900
            transition-all hover:bg-accent-600 hover:shadow-[0_0_30px_rgba(198,153,99,0.3)]">
            Back to Home
          </Link>

          <Link
            href="/cabins"
            className="rounded-xl border border-primary-800 px-6 py-4 font-semibold text-primary-100
            transition-all hover:bg-primary-800">
            Explore Cabins
          </Link>
        </div>

        {/* Subtle footer text */}
        <p className="mt-8 text-xs text-primary-400">
          The Wild Oasis • Luxury mountain escapes
        </p>
      </div>
    </main>
  );
}
