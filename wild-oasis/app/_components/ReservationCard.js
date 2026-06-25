import Link from "next/link";
import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    created_at,
    cabins: { name, image },
  } = booking;

  const past = isPast(new Date(startDate));

  return (
    <div className="group flex overflow-hidden rounded-2xl border border-primary-800 bg-primary-950 hover:border-primary-700 transition-all">
      {/* Image */}
      <div className="relative w-40 sm:w-48 aspect-square">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg sm:text-xl font-light text-primary-100 leading-snug">
            {numNights} nights in{" "}
            <span className="text-accent-400 font-medium">{name}</span>
          </h3>

          <span
            className={`text-[11px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold ${
              past
                ? "bg-yellow-900/40 text-yellow-300"
                : "bg-green-900/40 text-green-300"
            }`}>
            {past ? "past" : "upcoming"}
          </span>
        </div>

        {/* Dates */}
        <p className="mt-3 text-sm text-primary-300 leading-relaxed">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} ·{" "}
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          → {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-center gap-3 text-sm text-primary-300">
            <span className="text-accent-400 font-semibold">${totalPrice}</span>
            <span className="opacity-40">•</span>
            <span>
              {numGuests} guest{numGuests > 1 && "s"}
            </span>
          </div>

          <span className="text-[11px] text-primary-500">
            Booked {format(new Date(created_at), "MMM dd, p")}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col w-14 border-l border-primary-800">
        {!past && (
          <Link
            href={`/account/reservations/edit/${id}`}
            className="flex flex-1 items-center justify-center hover:bg-primary-900 transition">
            <PencilSquareIcon className="h-5 w-5 text-primary-400 group-hover:text-accent-400 transition" />
          </Link>
        )}

        {!past && (
          <div className="flex flex-1  hover:bg-red-400 text-white items-center justify-center border-t border-primary-800">
            {/* keep your DeleteReservation here */}
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ReservationCard;
