import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

export default async function Reservation({ cabin }) {
  const [settings, bookingDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();
  const { regularPrice, discount } = cabin;
  const finalPrice = regularPrice - discount;

  return (
    <div className="sticky top-10 overflow-hidden rounded-2xl border border-primary-800 bg-primary-950 shadow-2xl">
      {/* PRICE HEADER */}
      <div className="flex items-baseline justify-between border-b border-primary-800 px-7 py-5">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-accent-500">
            ${finalPrice}
          </span>

          {discount > 0 && (
            <span className="text-sm font-medium text-primary-500 line-through">
              ${regularPrice}
            </span>
          )}

          <span className="text-sm text-primary-400">/ night</span>
        </div>

        <span className="text-sm text-primary-400">
          Up to {cabin.maxCapacity} guests
        </span>
      </div>

      {/* CALENDAR */}
      <div className="px-7 py-6">
        <DateSelector
          settings={settings}
          bookingDates={bookingDates}
          cabin={cabin}
        />
      </div>

      {/* GUEST DETAILS / LOGIN */}
      <div className="border-t border-primary-800">
        {session?.user ? (
          <ReservationForm cabin={cabin} user={session.user} />
        ) : (
          <div className="flex items-center justify-center px-7 py-10">
            <LoginMessage />
          </div>
        )}
      </div>
    </div>
  );
}
