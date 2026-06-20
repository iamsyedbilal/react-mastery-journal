import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div
      className="group overflow-hidden border border-primary-800 bg-primary-950
      transition-all duration-300 hover:shadow-[0_0_40px_rgba(198,153,99,0.15)]">
      {/* Image */}
      <div className="relative h-56 sm:h-64">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-accent-500 mb-3">
          Cabin {name}
        </h3>

        <div className="flex items-center gap-2 text-primary-200 mb-4">
          <UsersIcon className="h-5 w-5 text-primary-500" />
          <span>
            Up to <span className="font-bold">{maxCapacity}</span> guests
          </span>
        </div>

        {/* Price */}
        <div className="flex justify-between items-end mb-6">
          {discount > 0 ? (
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-light text-primary-50">
                ${regularPrice - discount}
              </span>
              <span className="line-through text-primary-500">
                ${regularPrice}
              </span>
            </div>
          ) : (
            <span className="text-2xl font-light text-primary-50">
              ${regularPrice}
            </span>
          )}

          <span className="text-primary-400 text-sm">/ night</span>
        </div>

        {/* Button */}
        <Link
          href={`/cabins/${id}`}
          className="block text-center rounded-lg border border-primary-800
          py-3 text-primary-100 transition-all duration-300
          hover:bg-accent-500 hover:text-primary-900">
          View details →
        </Link>
      </div>
    </div>
  );
}

export default CabinCard;
