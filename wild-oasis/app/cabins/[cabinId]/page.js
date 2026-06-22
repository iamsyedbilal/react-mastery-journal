import Reservation from "@/app/_components/Reservation";
import TextExpander from "@/app/_components/TextExpender";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "../loading";

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return {
    title: `Cabin ${cabin.name}`,
    description: cabin.description,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  return cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));
}

export default async function Page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 text-primary-100">
      {/* HERO */}
      <div className="relative h-[60vh] overflow-hidden rounded-3xl border border-primary-800">
        <Image
          src={cabin.image}
          alt={cabin.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.7fr_0.9fr] gap-16">
        {/* LEFT */}
        <div>
          <h1 className="text-5xl font-light text-accent-500 mb-8">
            Cabin {cabin.name}
          </h1>

          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-primary-200">
              <TextExpander>{cabin.description}</TextExpander>
            </p>

            <div className="flex flex-wrap gap-10 border-t border-primary-800 pt-6 text-sm text-primary-300">
              <div>
                <p className="uppercase tracking-wider text-primary-500 mb-1">
                  Max Guests
                </p>

                <p className="text-primary-100 font-semibold">
                  {cabin.maxCapacity}
                </p>
              </div>

              <div>
                <p className="uppercase tracking-wider text-primary-500 mb-1">
                  Created
                </p>

                <p className="text-primary-100">
                  {new Date(cabin.created_at).toDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <Suspense fallback={<Loading />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
