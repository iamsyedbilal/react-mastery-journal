import Reservation from "@/app/_components/Reservation";
import TextExpander from "@/app/_components/TextExpender";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "../loading";
import ReservationReminder from "@/app/_components/ReservationReminder";

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
    <div className="mx-auto max-w-6xl px-6 py-12 text-primary-100">
      {/* HERO */}
      <div className="relative h-[42vh] min-h-[320px] overflow-hidden rounded-2xl border border-primary-800">
        <Image
          src={cabin.image}
          alt={cabin.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-8">
          <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
            Cabin {cabin.name}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px] lg:items-start lg:gap-10">
        {/* LEFT */}
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-primary-200">
            <TextExpander>{cabin.description}</TextExpander>
          </p>

          <div className="flex flex-wrap gap-10 border-t border-primary-800 pt-6 text-sm text-primary-300">
            <div>
              <p className="mb-1 uppercase tracking-wider text-primary-500">
                Max guests
              </p>

              <p className="font-semibold text-primary-100">
                {cabin.maxCapacity}
              </p>
            </div>

            <div>
              <p className="mb-1 uppercase tracking-wider text-primary-500">
                Listed since
              </p>

              <p className="text-primary-100">
                {new Date(cabin.created_at).toDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — booking widget */}
        <Suspense fallback={<Loading />}>
          <Reservation cabin={cabin} />
          <ReservationReminder />
        </Suspense>
      </div>
    </div>
  );
}
