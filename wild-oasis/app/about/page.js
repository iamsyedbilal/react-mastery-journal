import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import Link from "next/link";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 text-primary-100">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 items-center">
        {/* Text */}
        <div className="lg:col-span-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-8 text-accent-500 font-light tracking-tight">
            Welcome to The Wild Oasis
          </h1>

          <div className="space-y-6 leading-relaxed text-base sm:text-lg">
            <p>
              Where nature&apos;s beauty and comfortable living blend
              seamlessly. Hidden away in the heart of the Italian Dolomites,
              this is your paradise away from home.
            </p>

            <p>
              Our {cabins.length} luxury cabins provide a cozy base, but the
              real freedom comes from the surrounding mountains, forests, and
              silence.
            </p>

            <p>
              This is where memorable moments are made — a place to slow down,
              relax, and reconnect.
            </p>
          </div>
        </div>

        {/* Image 1 */}
        <div className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-2xl border border-primary-800 shadow-lg">
            <Image
              src={image1}
              alt="Family sitting around a fire pit"
              placeholder="blur"
              quality={85}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 items-center mt-20 lg:mt-28">
        {/* Image 2 */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-primary-800 shadow-lg">
            <Image
              src={image2}
              fill
              className="object-cover"
              alt="Family that manages The Wild Oasis"
            />
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          <h2 className="text-3xl sm:text-4xl mb-8 text-accent-500 font-light">
            Managed by our family since 1962
          </h2>

          <div className="space-y-6 leading-relaxed text-base sm:text-lg">
            <p>
              Since 1962, The Wild Oasis has been a cherished family-run
              retreat. Started by our grandparents, it has been nurtured with
              love and care.
            </p>

            <p>
              Over the years, we&apos;ve preserved its essence while blending
              tradition with comfort. Here, you&apos;re not just a guest —
              you&apos;re family.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/cabins"
              className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-8 py-4 text-primary-900 font-semibold
              transition-all duration-300 hover:bg-accent-600 hover:shadow-[0_0_30px_rgba(198,153,99,0.35)]">
              Explore our luxury cabins →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
