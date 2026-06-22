import TextExpander from "@/app/_components/TextExpender";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import Image from "next/image";

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

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}

export default async function Page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 text-primary-100">
      {/* HERO IMAGE */}
      <div className="relative h-[50vh] w-full overflow-hidden rounded-2xl border border-primary-800">
        <Image
          src={cabin.image}
          alt={cabin.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENT GRID */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT: DESCRIPTION */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-4xl font-light text-accent-500">
            Cabin {cabin.name}
          </h1>

          <p className="text-lg leading-relaxed text-primary-200">
            <TextExpander>{cabin.description}</TextExpander>
          </p>

          <div className="flex gap-6 text-sm text-primary-300">
            <span>
              Max guests:{" "}
              <span className="text-primary-100 font-semibold">
                {cabin.maxCapacity}
              </span>
            </span>

            <span>
              Created:{" "}
              <span className="text-primary-100">
                {new Date(cabin.created_at).toDateString()}
              </span>
            </span>
          </div>
        </div>

        {/* RIGHT: BOOKING CARD */}
        <div className="lg:col-span-1">
          <div className="sticky top-10 rounded-2xl border border-primary-800 bg-primary-950 p-6 shadow-lg">
            <h3 className="text-accent-500 text-xl mb-4 font-semibold">
              Pricing
            </h3>

            <div className="mb-6">
              {cabin.discount > 0 ? (
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-light text-primary-50">
                    ${cabin.regularPrice - cabin.discount}
                  </span>
                  <span className="line-through text-primary-500">
                    ${cabin.regularPrice}
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-light text-primary-50">
                  ${cabin.regularPrice}
                </span>
              )}

              <p className="text-primary-300 text-sm mt-1">per night</p>
            </div>

            <button
              className="w-full rounded-xl bg-accent-500 px-6 py-4 font-semibold text-primary-900
              transition-all hover:bg-accent-600 hover:shadow-[0_0_30px_rgba(198,153,99,0.3)]">
              Reserve this cabin →
            </button>

            <p className="text-xs text-primary-400 mt-4 text-center">
              No payment required today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
