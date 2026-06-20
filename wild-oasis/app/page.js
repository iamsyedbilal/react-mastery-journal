import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src={bg}
        fill
        priority
        placeholder="blur"
        quality={85}
        className="object-cover object-top"
        alt="Mountains and forests with cabins"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-primary-950/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6">
        <h1 className="mb-8 text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-primary-50">
          Welcome to paradise.
        </h1>

        <p className="mb-10 max-w-xl text-primary-100 text-base sm:text-lg">
          Escape into luxury cabins surrounded by nature, silence, and comfort.
        </p>

        <Link
          href="/cabins"
          className="rounded-xl bg-accent-500 px-8 py-4 text-primary-900 font-semibold
          transition-all duration-300 hover:bg-accent-600 hover:shadow-[0_0_30px_rgba(198,153,99,0.35)]">
          Explore luxury cabins →
        </Link>
      </div>
    </main>
  );
}
